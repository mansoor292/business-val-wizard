# Multi-Tenant Architecture Documentation

## Overview

This document outlines the three-tier tenancy model for our platform:
1. Platform Administration (admin.example.org)
2. Direct Clients (company.example.org)
3. White Label Resellers (company.whitelabel.org)

## 1. Platform Administration

**Domain**: admin.example.org

### Purpose
- Super-admin dashboard
- Tenant management
- Domain management
- Global configuration

### Access Levels
```typescript
enum SuperAdminRole {
  PLATFORM_ADMIN,    // Full platform access
  TENANT_MANAGER,    // Can manage tenants
  SUPPORT_ADMIN      // Customer support access
}
```

### Features
- Tenant creation and management
- Domain configuration
- Billing management
- Global analytics
- Support tools
- Audit logs

### Implementation Considerations
```typescript
interface PlatformConfig {
  allowedDomains: string[];          // Approved domains
  tenantLimits: {
    maxUsers: number;                // Max users per tenant
    maxStorage: number;              // Storage limits
    maxBandwidth: number;            // Bandwidth limits
  };
  features: {
    whitelabelEnabled: boolean;      // White label features
    customDomainAllowed: boolean;    // Custom domain support
  };
}
```

## 2. Direct Clients

**Domain Pattern**: company.example.org

### Purpose
- Client-specific workspaces
- Branded experience
- Direct customer relationship

### Access Levels
```typescript
enum DirectClientRole {
  TENANT_ADMIN,      // Full tenant access
  MANAGER,           // Department/team manager
  USER               // Regular user
}
```

### Features
- Tenant-specific branding
- User management
- Workspace configuration
- Analytics
- Support access

### Implementation Considerations
```typescript
interface DirectTenantConfig {
  tenant: {
    id: string;
    name: string;
    subdomain: string;
  };
  branding: {
    colors: {
      primary: string;
      secondary: string;
    };
    logo: string;
  };
  features: {
    modules: string[];              // Enabled modules
    customization: {
      allowCustomCss: boolean;
      allowCustomScripts: boolean;
    };
  };
}
```

## 3. White Label Resellers

**Domain Pattern**: company.whitelabel.org

### Purpose
- Reseller client workspaces
- Complete white label experience
- Indirect customer relationship

### Access Levels
```typescript
enum WhiteLabelRole {
  RESELLER_ADMIN,    // Reseller platform admin
  CLIENT_ADMIN,      // White label client admin
  CLIENT_USER        // End user
}
```

### Features
- Complete brand customization
- Custom domain option
- Isolated experience
- Reseller dashboard
- White label support

### Implementation Considerations
```typescript
interface WhiteLabelConfig {
  reseller: {
    id: string;
    name: string;
    subdomain: string;
  };
  branding: {
    colors: {
      primary: string;
      secondary: string;
      accent: string;
      background: string;
      text: string;
    };
    logo: {
      main: string;
      alt?: string;
      favicon: string;
    };
    fonts: {
      heading: string;
      body: string;
    };
    layout: {
      maxWidth?: string;
      navPosition?: 'top' | 'side';
    };
    customCss?: string;
  };
  features: {
    modules: string[];
    customization: {
      allowCustomDomain: boolean;
      allowCustomScripts: boolean;
      allowThirdPartyIntegrations: boolean;
    };
  };
  support: {
    email: string;
    brandedSupportPortal: boolean;
  };
}
```

## Routing Implementation

### Middleware Configuration
```typescript
// middleware.ts
export async function middleware(request: NextRequest) {
  const { pathname, host } = request.nextUrl
  
  // Determine tenant type from host
  const tenantType = getTenantType(host)
  
  switch (tenantType) {
    case 'PLATFORM':
      return handlePlatformRequest(request)
    case 'DIRECT':
      return handleDirectClientRequest(request)
    case 'WHITELABEL':
      return handleWhiteLabelRequest(request)
    default:
      return NextResponse.redirect(new URL('/404', request.url))
  }
}
```

## Authentication Flow

### Platform Level
```typescript
interface PlatformAuth {
  type: 'PLATFORM';
  platformRoles: SuperAdminRole[];
  permissions: string[];
}
```

### Direct Client Level
```typescript
interface DirectClientAuth {
  type: 'DIRECT';
  tenantId: string;
  roles: DirectClientRole[];
  permissions: string[];
}
```

### White Label Level
```typescript
interface WhiteLabelAuth {
  type: 'WHITELABEL';
  resellerId: string;
  tenantId: string;
  roles: WhiteLabelRole[];
  permissions: string[];
}
```

## Feature Matrix

| Feature                    | Platform Admin | Direct Client | White Label |
|---------------------------|----------------|---------------|-------------|
| Custom Domain             | ✓              | ✓             | ✓           |
| Branding                  | Limited        | Basic         | Full        |
| User Management           | ✓              | ✓             | ✓           |
| Support Portal            | Platform       | Direct        | Branded     |
| Analytics                 | Global         | Tenant        | Reseller    |
| Custom Scripts            | ✓              | Limited       | ✓           |
| API Access                | Full           | Limited       | Full        |
| Third-party Integrations  | ✓              | Limited       | ✓           |

## Security Considerations

### Domain-Based Database Security

The platform uses domain-based Row Level Security (RLS) to enforce tenant isolation at the database level. This approach leverages the application's domain routing as part of the security model.

#### Database Setup
```sql
-- Enable domain context in database session
CREATE OR REPLACE FUNCTION set_tenant_from_domain(domain text) 
RETURNS void AS $
BEGIN
  PERFORM set_config('app.current_domain', domain, false);
END;
$ LANGUAGE plpgsql;

-- Extract tenant from domain
CREATE OR REPLACE FUNCTION current_tenant_from_domain() 
RETURNS uuid AS $
DECLARE
  domain text := current_setting('app.current_domain', true);
  tenant_id uuid;
BEGIN
  -- Platform admin bypass
  IF domain = 'admin.example.org' THEN
    RETURN NULL;
  END IF;
  
  -- Extract tenant from subdomain
  SELECT id INTO tenant_id
  FROM tenants
  WHERE subdomain = split_part(domain, '.', 1);
  
  RETURN tenant_id;
END;
$ LANGUAGE plpgsql;
```

#### Row Level Security Policies
```sql
-- Enable RLS on tenant-specific tables
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Create domain-based policy
CREATE POLICY domain_tenant_isolation ON documents
  FOR ALL
  USING (
    current_setting('app.current_domain', true) = 'admin.example.org'
    OR
    tenant_id = current_tenant_from_domain()
  );
```

#### Shared Resources
Tables containing shared/reference data don't require RLS:
```sql
-- No RLS needed for shared lookup data
CREATE TABLE countries (
  id uuid PRIMARY KEY,
  code text,
  name text
);

-- RLS enforced for tenant-specific data
CREATE TABLE documents (
  id uuid PRIMARY KEY,
  tenant_id uuid NOT NULL,
  name text,
  file_path text
);
```

#### Application Integration
```typescript
// lib/db.ts
import { Pool } from 'pg';

export async function getDatabaseConnection(domain: string) {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL
  });
  
  // Set domain context
  await pool.query('SELECT set_tenant_from_domain($1)', [domain]);
  
  return pool;
}

// Middleware or API route usage
export async function getDatabaseForRequest(req: NextApiRequest) {
  const domain = req.headers.host;
  return getDatabaseConnection(domain);
}
```

### Benefits
1. Security enforced at database level
2. Leverages existing domain routing
3. Automatic tenant isolation
4. Clean super admin access
5. Reduced risk of data leaks

### Domain Isolation
- Strict CORS policies per tenant type
- Subdomain validation
- Custom domain verification

## User Schema and Access Control

### Database Schema
```sql
-- Enums for user types and statuses
CREATE TYPE user_role AS ENUM (
  'PLATFORM_ADMIN',    -- Full platform access
  'TENANT_ADMIN',      -- Full tenant access
  'TENANT_MANAGER',    -- Limited tenant management
  'USER'               -- Regular user
);

CREATE TYPE user_status AS ENUM (
  'ACTIVE',
  'INVITED',
  'SUSPENDED',
  'DEACTIVATED'
);

-- Core user table
CREATE TABLE users (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  name text NOT NULL,
  avatar_url text,
  tenant_id uuid NOT NULL,
  role user_role NOT NULL DEFAULT 'USER',
  status user_status NOT NULL DEFAULT 'INVITED',
  email_verified boolean NOT NULL DEFAULT false,
  last_login timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- User authentication
CREATE TABLE user_auth (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  hashed_password text,
  password_reset_token text,
  password_reset_expires timestamptz,
  two_factor_enabled boolean NOT NULL DEFAULT false,
  two_factor_secret text,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- User sessions
CREATE TABLE sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  expires timestamptz NOT NULL,
  session_token text NOT NULL UNIQUE,
  access_token text NOT NULL UNIQUE,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- User permissions
CREATE TABLE permissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL UNIQUE,
  description text,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Role-permission mapping
CREATE TABLE role_permissions (
  role user_role NOT NULL,
  permission_id uuid NOT NULL REFERENCES permissions(id) ON DELETE CASCADE,
  tenant_id uuid NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  PRIMARY KEY (role, permission_id, tenant_id)
);

-- User settings
CREATE TABLE user_settings (
  user_id uuid PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
  preferences jsonb NOT NULL DEFAULT '{}',
  notifications_enabled boolean NOT NULL DEFAULT true,
  theme text NOT NULL DEFAULT 'light',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Activity log
CREATE TABLE user_activity (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  tenant_id uuid NOT NULL,
  action text NOT NULL,
  metadata jsonb NOT NULL DEFAULT '{}',
  ip_address inet,
  user_agent text,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Apply RLS policies
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_auth ENABLE ROW LEVEL SECURITY;
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE role_permissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_activity ENABLE ROW LEVEL SECURITY;

-- Domain-based RLS policies
CREATE POLICY users_tenant_isolation ON users
  FOR ALL
  USING (
    current_setting('app.current_domain', true) = 'admin.example.org'
    OR
    tenant_id = current_tenant_from_domain()
  );

CREATE POLICY auth_tenant_isolation ON user_auth
  FOR ALL
  USING (
    current_setting('app.current_domain', true) = 'admin.example.org'
    OR
    user_id IN (
      SELECT id FROM users 
      WHERE tenant_id = current_tenant_from_domain()
    )
  );

-- Repeat similar policies for other tables

-- Indexes
CREATE INDEX idx_users_tenant_id ON users(tenant_id);
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_sessions_token ON sessions(session_token);
CREATE INDEX idx_sessions_access_token ON sessions(access_token);
CREATE INDEX idx_user_activity_tenant ON user_activity(tenant_id, created_at DESC);

### TypeScript Types
```typescript
interface User {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  tenantId: string;
  role: UserRole;
  status: UserStatus;
  emailVerified: boolean;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}

enum UserRole {
  PLATFORM_ADMIN = 'PLATFORM_ADMIN',
  TENANT_ADMIN = 'TENANT_ADMIN',
  TENANT_MANAGER = 'TENANT_MANAGER',
  USER = 'USER'
}

enum UserStatus {
  ACTIVE = 'ACTIVE',
  INVITED = 'INVITED',
  SUSPENDED = 'SUSPENDED',
  DEACTIVATED = 'DEACTIVATED'
}

interface UserSettings {
  userId: string;
  preferences: Record<string, any>;
  notificationsEnabled: boolean;
  theme: 'light' | 'dark';
  createdAt: Date;
  updatedAt: Date;
}

interface Permission {
  id: string;
  name: string;
  description?: string;
  createdAt: Date;
}

interface RolePermission {
  role: UserRole;
  permissionId: string;
  tenantId: string;
  createdAt: Date;
}

interface UserActivity {
  id: string;
  userId: string;
  tenantId: string;
  action: string;
  metadata: Record<string, any>;
  ipAddress?: string;
  userAgent?: string;
  createdAt: Date;
}
```

### Access Control Context
```typescript
interface TenantContext {
  type: 'PLATFORM' | 'DIRECT' | 'WHITELABEL';
  id: string;
  domain: string;
  scope: string[];
}

interface UserContext {
  user: User;
  tenant: TenantContext;
  permissions: Permission[];
  settings: UserSettings;
}
```

### Access Control
- Role-based access control (RBAC)
- Permission-based access control (PBAC)
- IP restrictions for platform admin

## Development Guidelines

### Tenant Context
```typescript
// hooks/useTenant.ts
export function useTenant() {
  const headersList = headers();
  const tenantType = headersList.get('x-tenant-type');
  const tenantId = headersList.get('x-tenant-id');
  const config = JSON.parse(
    atob(headersList.get('x-tenant-config'))
  );
  
  return {
    type: tenantType,
    id: tenantId,
    config
  };
}
```

### Feature Flags
```typescript
interface FeatureFlags {
  enabledModules: string[];
  restrictions: {
    maxUsers: number;
    maxStorage: number;
    allowedFeatures: string[];
  };
  customization: {
    allowCustomCss: boolean;
    allowCustomScripts: boolean;
  };
}
```

### Testing
- Test cases for each tenant type
- Isolation testing
- Performance testing per tenant
- Security testing

## Deployment Strategy

### DNS Configuration
```bash
# Platform
A     admin.example.org       -> Platform IP
# Direct Clients
CNAME *.example.org          -> example.org
# White Label
CNAME *.whitelabel.org      -> whitelabel.org
```

### Environment Variables
```bash
NEXT_PUBLIC_PLATFORM_DOMAIN=admin.example.org
NEXT_PUBLIC_CLIENT_DOMAIN=example.org
NEXT_PUBLIC_WHITELABEL_DOMAIN=whitelabel.org
```

## Monitoring and Analytics

### Metrics per Tenant Type
- User engagement
- Resource usage
- Performance metrics
- Error rates
- Support tickets

### Audit Logging
```typescript
interface AuditLog {
  tenantType: 'PLATFORM' | 'DIRECT' | 'WHITELABEL';
  tenantId: string;
  userId: string;
  action: string;
  resource: string;
  timestamp: Date;
  metadata: Record<string, any>;
}
```
