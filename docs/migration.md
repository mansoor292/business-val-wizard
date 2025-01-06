# Schema Migration Plan

This document outlines the changes required to merge the Catipult schema with our existing schema.

## Tables to Remove

The following tables will be removed as they are being replaced or consolidated:

1. `metrics` - Being replaced by KPI system
2. `initiatives` - Being replaced by KPI system
3. `teamMembers` - Being replaced by comprehensive user system

## New Systems to Add

### 1. User System
Complete user management system including:
- `users` - Primary user table
  - Includes fields for name, email, password, role management
  - Supports coach/manager relationships
  - Handles user deactivation
- `role` - User role management
  - Defines role hierarchy
  - Links to departments
- `department` - Organizational structure
  - Department naming and management
  - Links to organization
- `organization` - Top level organizational entity
  - Includes company details, mission, vision
  - Supports startup vs enterprise distinction
- `industry` - Industry categorization
  - Used for organization classification

### 2. Meeting System
Complete meeting management including:
- `meeting` - Core meeting definitions
  - Supports recurring meetings
  - Includes timer data
- `meetingHistory` - Meeting record keeping
  - Tracks meeting scores and notes
- `meetingUser` - Meeting participant management
- `meetingUserHistory` - Historical participant tracking
- `meetingIssue` - Issue tracking in meetings
- `meetingKpi` - KPI tracking in meetings

### 3. KPI System
Comprehensive KPI tracking system:
- `kpi` - Core KPI definitions
  - Supports various measurement types
  - Includes objective tracking
- `standardKpi` - Template KPIs
  - Industry-specific KPI definitions
  - Corporate vs startup distinctions
- `standardMilestone` - KPI milestone templates
- `kpiHistory` - KPI measurement tracking
- `kpiDelegate` - KPI responsibility assignment
- `kpilog` - KPI update logging

### 4. External Authentication System
Complete external service integration:
- `externalApp` - External application definitions
- `externalAppEndpoint` - API endpoint management
- `externalAuthentication` - Authentication configurations
- `externalAuthenticationType` - Auth type definitions
- `externalAuthenticationKpi` - KPI integration with external systems

## Modifications to Existing Tables

### 1. projects
Changes required:
- Add `orgId` field to link with organization table
  ```sql
  orgId: char({ length: 36 })
  ```
- Modify `teamIds` to reference users.uId instead of teamMembers
  - Update foreign key relationship
  - Update any related queries/code

### 2. tasks
Changes required:
- Modify `assigneeId` to reference users.uId instead of teamMembers
  ```sql
  assigneeId: char({ length: 36 })
  ```
- Update foreign key relationship
- Update any related queries/code

### 3. comments
Changes required:
- Modify `authorId` to reference users.uId instead of teamMembers
  ```sql
  authorId: char({ length: 36 })
  ```
- Update foreign key relationship
- Update any related queries/code

## Required Enums

The following enums need to be added:

```typescript
export const enumCharpLogCharpStatus = pgEnum("enum_charpLog_charpStatus", ['C', 'H', 'A', 'R', 'P', 'D'])
export const enumKpiCharpStatus = pgEnum("enum_kpi_charpStatus", ['C', 'H', 'A', 'R', 'P'])
export const enumMilestonesCharpStatus = pgEnum("enum_milestones_charpStatus", ['C', 'H', 'A', 'R', 'P', 'D'])
```

## Migration Steps

1. Backup existing database
2. Create new enums
3. Remove deprecated tables (metrics, initiatives, teamMembers)
4. Add new system tables in order:
   - User system (organization -> industry -> department -> role -> users)
   - KPI system
   - Meeting system
   - External auth system
5. Modify existing tables:
   - Update projects table
   - Update tasks table
   - Update comments table
6. Migrate data:
   - Map teamMembers data to new users table
   - Update references in projects, tasks, and comments
7. Verify all foreign key relationships
8. Update application code to use new schema

## Post-Migration Verification

1. Verify all new tables are created with correct structure
2. Confirm foreign key relationships are properly established
3. Validate data migration accuracy
4. Test application functionality with new schema
5. Verify external system integrations
6. Check meeting system functionality
7. Validate KPI tracking system

## Rollback Plan

1. Keep backup of original database
2. Document all data transformations
3. Maintain scripts for reverse migration
4. Test rollback procedure in staging environment
