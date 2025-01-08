-- Audit operation type
CREATE TYPE audit_operation AS ENUM ('INSERT', 'UPDATE', 'DELETE');

-- Audit log table
CREATE TABLE audit_log (
    id short_id PRIMARY KEY DEFAULT generate_short_id(),
    record_id short_id NOT NULL,
    table_name text NOT NULL,
    operation audit_operation NOT NULL,
    old_data jsonb,
    new_data jsonb,
    changed_by short_id,
    changed_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON TABLE audit_log IS 
  E'@omit create,update,delete
Track all changes to audited tables';

COMMENT ON COLUMN audit_log.id IS 'Unique identifier for the audit log entry';
COMMENT ON COLUMN audit_log.record_id IS 'ID of the record that was changed';
COMMENT ON COLUMN audit_log.table_name IS 'Name of the table where the change occurred';
COMMENT ON COLUMN audit_log.operation IS 'Type of operation performed (INSERT, UPDATE, DELETE)';
COMMENT ON COLUMN audit_log.old_data IS 'Previous state of the record (for UPDATE and DELETE)';
COMMENT ON COLUMN audit_log.new_data IS 'New state of the record (for INSERT and UPDATE)';
COMMENT ON COLUMN audit_log.changed_by IS 'ID of the user who made the change';
COMMENT ON COLUMN audit_log.changed_at IS 'Timestamp when the change occurred';

-- Function to get current user id from PostGraphile context
CREATE OR REPLACE FUNCTION current_user_id() RETURNS short_id AS $$
BEGIN
    RETURN nullif(current_setting('app.current_user_id', true), '')::short_id;
EXCEPTION
    WHEN OTHERS THEN RETURN NULL;
END;
$$ LANGUAGE plpgsql STABLE;

-- Combined audit and timestamp update trigger function
CREATE OR REPLACE FUNCTION audit_trigger_func()
RETURNS TRIGGER AS $$
DECLARE
    acting_user short_id;
BEGIN
    -- Get current user once
    acting_user := current_user_id();

    IF TG_OP IN ('INSERT', 'UPDATE') THEN
        -- Update the timestamp
        NEW.updated_at = CURRENT_TIMESTAMP;
    END IF;

    -- Insert audit log
    INSERT INTO audit_log (
        record_id,
        table_name,
        operation,
        old_data,
        new_data,
        changed_by
    )
    VALUES (
        CASE WHEN TG_OP = 'DELETE' THEN OLD.id ELSE NEW.id END,
        TG_TABLE_NAME,
        TG_OP::audit_operation,
        CASE WHEN TG_OP IN ('UPDATE','DELETE') THEN to_jsonb(OLD) ELSE NULL END,
        CASE WHEN TG_OP IN ('UPDATE','INSERT') THEN to_jsonb(NEW) ELSE NULL END,
        acting_user
    );

    IF TG_OP = 'DELETE' THEN
        RETURN OLD;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Function to get audit history for any entity
CREATE OR REPLACE FUNCTION get_audit_history(p_table_name text, p_record_id short_id)
RETURNS SETOF audit_log AS $$
BEGIN
    RETURN QUERY
    SELECT *
    FROM audit_log
    WHERE table_name = p_table_name
    AND record_id = p_record_id
    ORDER BY changed_at DESC;
END;
$$ LANGUAGE plpgsql STABLE;

COMMENT ON FUNCTION get_audit_history(text, short_id) IS
  E'@name auditHistory
@arg tableName The name of the table to get history for
@arg recordId The ID of the record to get history for
Retrieves the audit history for a specific record';

-- Performance indexes
CREATE INDEX idx_audit_log_record ON audit_log (table_name, record_id);
CREATE INDEX idx_audit_log_changed_at ON audit_log (changed_at);
-- Function to check if we should audit
CREATE OR REPLACE FUNCTION should_audit() RETURNS boolean AS $$
BEGIN
    -- Don't audit if explicitly disabled
    IF NOT is_auditing_enabled() THEN
        RETURN false;
    END IF;

    -- Don't audit if no user ID (system operation)
    IF current_user_id() IS NULL THEN
        RETURN false;
    END IF;

    RETURN true;
END;
$$ LANGUAGE plpgsql STABLE;

-- Function to control audit state
CREATE OR REPLACE FUNCTION is_auditing_enabled() RETURNS boolean AS $$
BEGIN
    RETURN coalesce(current_setting('app.enable_auditing', true), 'true') = 'true';
END;
$$ LANGUAGE plpgsql STABLE;

COMMENT ON FUNCTION is_auditing_enabled() IS 
  E'@omit execute
Check if auditing is currently enabled';

-- Function to temporarily disable auditing
CREATE OR REPLACE FUNCTION disable_auditing() RETURNS void AS $$
BEGIN
    -- Check if user has permission to disable auditing
    IF NOT (SELECT pg_has_role(current_user, 'admin', 'MEMBER')) THEN
        RAISE EXCEPTION 'Only admin users can disable auditing';
    END IF;
    PERFORM set_config('app.enable_auditing', 'false', false);
END;
$$ LANGUAGE plpgsql;

COMMENT ON FUNCTION disable_auditing() IS
  E'@name disableAuditing
Temporarily disable audit logging for bulk operations.
Requires admin role.';

-- Function to re-enable auditing
CREATE OR REPLACE FUNCTION enable_auditing() RETURNS void AS $$
BEGIN
    -- Check if user has permission to enable auditing
    IF NOT (SELECT pg_has_role(current_user, 'admin', 'MEMBER')) THEN
        RAISE EXCEPTION 'Only admin users can enable auditing';
    END IF;
    PERFORM set_config('app.enable_auditing', 'true', false);
END;
$$ LANGUAGE plpgsql;

COMMENT ON FUNCTION enable_auditing() IS
  E'@name enableAuditing
Re-enable audit logging after it has been disabled.
Requires admin role.';

-- Create admin activity log table for tracking audit changes
CREATE TABLE IF NOT EXISTS admin_activity_log (
    id short_id PRIMARY KEY DEFAULT generate_short_id(),
    operation text NOT NULL,
    description text,
    performed_by short_id,
    performed_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON TABLE admin_activity_log IS
  E'@omit create,update,delete
Logs administrative activities like enabling/disabling auditing';

-- Add RLS policy for admin activity log
ALTER TABLE admin_activity_log ENABLE ROW LEVEL SECURITY;

CREATE POLICY admin_activity_log_select ON admin_activity_log
    FOR SELECT USING (
        pg_has_role(current_user, 'admin', 'MEMBER')
    );

-- Helper function to run code with auditing disabled
CREATE OR REPLACE FUNCTION without_auditing(
    operation text,
    description text DEFAULT NULL
) RETURNS void AS $$
BEGIN
    -- Check if user has permission
    IF NOT (SELECT pg_has_role(current_user, 'admin', 'MEMBER')) THEN
        RAISE EXCEPTION 'Only admin users can run operations without auditing';
    END IF;

    -- Log the audit disable
    INSERT INTO admin_activity_log (
        operation,
        description,
        performed_by
    ) VALUES (
        'DISABLE_AUDIT',
        format('Disabled auditing for operation: %s. %s', 
               operation,
               COALESCE(description, '')),
        current_user_id()
    );

    PERFORM disable_auditing();
    
    -- Execute the operation
    BEGIN
        EXECUTE operation;
    EXCEPTION WHEN OTHERS THEN
        -- Always re-enable auditing and log failure
        PERFORM enable_auditing();
        
        INSERT INTO admin_activity_log (
            operation,
            description,
            performed_by
        ) VALUES (
            'ENABLE_AUDIT',
            format('Re-enabled auditing after error in operation: %s. Error: %s', 
                   operation, SQLERRM),
            current_user_id()
        );
        
        RAISE;
    END;
    
    PERFORM enable_auditing();
    
    -- Log the audit re-enable
    INSERT INTO admin_activity_log (
        operation,
        description,
        performed_by
    ) VALUES (
        'ENABLE_AUDIT',
        format('Re-enabled auditing after operation: %s', operation),
        current_user_id()
    );
END;
$$ LANGUAGE plpgsql;

COMMENT ON FUNCTION without_auditing(text, text) IS
  E'@name executeWithoutAuditing
@arg operation The SQL operation to execute without auditing
@arg description Optional description of why auditing was disabled
Executes the given SQL operation with auditing temporarily disabled.
Requires admin role. All audit disabling/enabling is logged.';

-- Function to enable auditing on any table
CREATE OR REPLACE FUNCTION setup_table_auditing(target_table text) RETURNS void AS $$
DECLARE
    table_exists boolean;
    has_id_column boolean;
    has_updated_at boolean;
    trigger_name text;
BEGIN
    -- Check if table exists
    SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = target_table
    ) INTO table_exists;
    
    IF NOT table_exists THEN
        RAISE EXCEPTION 'Table % does not exist', target_table;
    END IF;

    -- Check if table has id column
    SELECT EXISTS (
        SELECT FROM information_schema.columns 
        WHERE table_name = target_table 
        AND column_name = 'id'
    ) INTO has_id_column;
    
    IF NOT has_id_column THEN
        RAISE EXCEPTION 'Table % must have an id column', target_table;
    END IF;

    -- Check if table has updated_at column
    SELECT EXISTS (
        SELECT FROM information_schema.columns 
        WHERE table_name = target_table 
        AND column_name = 'updated_at'
    ) INTO has_updated_at;
    
    IF NOT has_updated_at THEN
        RAISE EXCEPTION 'Table % must have an updated_at column', target_table;
    END IF;

    -- Create the audit trigger
    trigger_name := target_table || '_audit';
    
    EXECUTE format('
        DROP TRIGGER IF EXISTS %I ON %I;
        CREATE TRIGGER %I
            AFTER INSERT OR UPDATE OR DELETE ON %I
            FOR EACH ROW EXECUTE FUNCTION audit_trigger_func();
    ', trigger_name, target_table, trigger_name, target_table);

    -- Create the audit history function for this table
    EXECUTE format('
        CREATE OR REPLACE FUNCTION %I_audit_history(entity %I)
        RETURNS SETOF audit_log AS $func$
            SELECT * FROM get_audit_history(%L, entity.id);
        $func$ LANGUAGE sql STABLE;
        
        COMMENT ON FUNCTION %I_audit_history(%I) IS 
          E''@simpleCollectionName auditLogs
        Get audit history for this entity'';
    ', target_table, target_table, target_table, target_table, target_table);

    -- Update audit_log RLS policy
    -- First drop existing policy
    DROP POLICY IF EXISTS audit_log_select ON audit_log;
    
    -- Create new policy using dynamic SQL
    EXECUTE format('
        CREATE POLICY audit_log_select ON audit_log
            FOR SELECT USING (
                EXISTS (
                    SELECT 1 
                    FROM base_entity 
                    WHERE id = audit_log.record_id 
                    AND domain_id = current_setting(''app.current_domain_id'')::short_id
                )
            );
    ');
END;
$$ LANGUAGE plpgsql;

COMMENT ON FUNCTION setup_table_auditing(text) IS 
  E'Sets up auditing for the specified table. 
The table must have id and updated_at columns.
Creates:
- Audit trigger
- Audit history function
- Updates RLS policies';