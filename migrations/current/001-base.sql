-- Drop and recreate schema
DROP SCHEMA IF EXISTS public CASCADE;
CREATE SCHEMA public;

-- Set default privileges
ALTER DEFAULT PRIVILEGES REVOKE EXECUTE ON FUNCTIONS FROM PUBLIC;
ALTER DEFAULT PRIVILEGES REVOKE ALL ON TABLES FROM PUBLIC;

-- Setup extensions
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Custom domain for short IDs 
CREATE DOMAIN short_id AS TEXT
CHECK (VALUE ~ '^[a-z0-9]{4}$');

-- ID generation function
CREATE OR REPLACE FUNCTION generate_short_id() 
RETURNS short_id AS $$
DECLARE
   chars TEXT := 'abcdefghijklmnopqrstuvwxyz0123456789';
   result TEXT := '';
   i INTEGER := 0;
BEGIN
   WHILE i < 4 LOOP
       result := result || substr(chars, floor(random() * length(chars) + 1)::integer, 1);
       i := i + 1;
   END LOOP;
   RETURN result;
END;
$$ LANGUAGE plpgsql;

-- Update timestamp function
CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at = CURRENT_TIMESTAMP;
   RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Base table with id and timestamps
CREATE TABLE base_object (
   id short_id PRIMARY KEY DEFAULT generate_short_id(),
   created_by short_id,
   created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
   updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Entity base with domain
CREATE TABLE base_entity (
   domain_id short_id,
   updated_by short_id,
   name TEXT NOT NULL
) INHERITS (base_object);
