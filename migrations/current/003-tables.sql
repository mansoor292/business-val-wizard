-- Concrete tables
CREATE TABLE domains (
   code TEXT NOT NULL UNIQUE,
   UNIQUE (id)
) INHERITS (base_object);

CREATE TABLE users (
   cognito_id UUID NOT NULL UNIQUE,
   email TEXT NOT NULL UNIQUE,
   domain_id short_id REFERENCES domains(id),
   UNIQUE (id)
) INHERITS (base_entity);

CREATE TABLE team_members (
   user_id short_id REFERENCES users(id) UNIQUE,
   manager short_id REFERENCES team_members(id),
   job_title TEXT,
   department TEXT,
   hire_date DATE,
   employment_status TEXT NOT NULL DEFAULT 'ACTIVE',
   work_email TEXT,
   work_phone TEXT,
   office_location TEXT,
   bio TEXT,
   UNIQUE (id),
   CONSTRAINT valid_employment_status CHECK (employment_status IN ('ACTIVE', 'ON_LEAVE', 'TERMINATED')),
   CONSTRAINT no_self_management CHECK (id != manager)
) INHERITS (base_entity);
SELECT setup_table_auditing('team_members'); 
CREATE TABLE domain_access (
   user_id short_id REFERENCES users(id),
   domain_id short_id REFERENCES domains(id),
   is_admin BOOLEAN DEFAULT false,
   created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
   PRIMARY KEY (user_id, domain_id)
);

-- Create update triggers
CREATE TRIGGER update_base_object_timestamp
   BEFORE UPDATE ON base_object
   FOR EACH ROW
   EXECUTE FUNCTION update_timestamp();

-- RLS policies
ALTER TABLE domains ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE domain_access ENABLE ROW LEVEL SECURITY;

-- Create indexes for foreign key constraints (PostGraphile optimization)
CREATE INDEX ON domain_access(domain_id);
CREATE INDEX ON users(domain_id);
CREATE INDEX ON team_members(manager);
