# Business Value Wizard Data Model

This document describes the database schema and relationships for the Business Value Wizard application.

## Entity Relationship Diagram

```mermaid
erDiagram
    %% Organization & Structure
    Organization {
        char orgId PK
        varchar orgName
        varchar mission
        varchar vision
        boolean isStartup
        char industryId FK
    }
    Industry {
        char industryId PK
        varchar industryName
    }
    Department {
        char depId PK
        varchar deptName
        char orgId FK
    }
    Role {
        char rId PK
        varchar roleName
        varchar level
        char depId FK
    }

    %% Users & Authentication
    Users {
        char uId PK
        varchar name
        varchar email
        char rId FK
        boolean isCoach
        varchar managerUserId
        boolean textNotifications
    }
    ExternalAuthentication {
        char externalAuthenticationId PK
        char uId FK
        json configuration
        char externalAppId FK
    }
    ExternalApp {
        char externalAppId PK
        varchar name
        varchar authenticationUrl
    }

    %% Performance Management
    StandardKPI {
        char standardKpiId PK
        varchar unit
        varchar objective
        numeric target
        boolean isCorporateKpi
        varchar performanceDirection
    }
    KPI {
        char kpiId PK
        varchar unit
        varchar objective
        boolean isCorporateKpi
        char driverId FK
        char uId FK
        char standardKpiId FK
        char parentKpiId FK
    }
    Milestone {
        char mileId PK
        varchar achieveText
        date dueDate
        varchar charpStatus
        char kpiId FK
        char standardMilestoneId FK
    }
    StandardMilestone {
        char standardMilestoneId PK
        varchar achieveText
        char standardKpiId FK
    }

    %% Meetings
    Meeting {
        char meetingId PK
        varchar meetingName
        varchar meetingFrequency
        timestamp meetingDate
        char uId FK
    }
    MeetingHistory {
        char meetingHistoryId PK
        char meetingId FK
        integer meetingScore
        varchar meetingNotes
    }
    MeetingUser {
        char meetingUserId PK
        char meetingId FK
        char uId FK
        varchar userRole
    }

    %% Issues & Tasks
    Issue {
        char issueId PK
        varchar issueStatus
        varchar issueName
        varchar issueNote
        char mileId FK
        char uId FK
    }
    Todo {
        char todoId PK
        varchar todoStatus
        varchar todoName
        char issueId FK
    }

    %% Assessment
    Driver {
        char driverId PK
        varchar driverName
        integer seqNo
    }
    Question {
        char queId PK
        varchar question
        char driverId FK
        char qtId FK
    }
    QuestionType {
        char qtId PK
        varchar typeName
    }
    Option {
        char optionId PK
        varchar option
        boolean correctAns
        char queId FK
    }
    UserAnswer {
        char uanswId PK
        varchar answer
        char uId FK
        char queId FK
        char optionId FK
    }

    %% Portfolio Management
    PortfolioGroup {
        char portfolioGroupId PK
        varchar portfolioGroupName
        char uId FK
    }
    PortfolioGroupUser {
        char portfolioGroupUserId PK
        char portfolioGroupId FK
        char uId FK
    }

    %% Core Organization Relationships
    Organization ||--|| Industry : belongs_to
    Organization ||--|{ Department : has
    Department ||--|{ Role : contains
    Role ||--|{ Users : assigned_to

    %% User Related Relationships
    Users ||--|{ ExternalAuthentication : has
    Users ||--|{ KPI : manages
    Users ||--|{ Milestone : owns
    Users ||--|{ Meeting : schedules
    Users ||--|{ PortfolioGroup : creates
    Users ||--|{ UserAnswer : provides
    Users ||--|{ Issue : owns

    %% Performance Management Relationships
    StandardKPI ||--|{ StandardMilestone : defines
    StandardKPI ||--|{ KPI : templates
    KPI ||--|{ Milestone : tracks
    KPI ||--|| Driver : categorized_by
    KPI ||--|{ KPI : parent_of

    %% Meeting Relationships
    Meeting ||--|{ MeetingUser : includes
    Meeting ||--|{ MeetingHistory : records

    %% Issue Tracking Relationships
    Milestone ||--|{ Issue : contains
    Milestone ||--|| StandardMilestone : based_on
    Issue ||--|{ Todo : has

    %% Assessment Relationships
    Driver ||--|{ Question : contains
    Question ||--|{ Option : has
    Question ||--|| QuestionType : categorized_by
    Option ||--|{ UserAnswer : selected_in

    %% Portfolio Relationships
    PortfolioGroup ||--|{ PortfolioGroupUser : includes
    ExternalAuthentication ||--|| ExternalApp : connects_to
    ```


## Core Entities

### Organizations and Structure

#### Organization
- Primary entity representing a company or business unit
- Contains basic organization info (name, address, contact details)
- Has mission, vision, and values statements
- Can be marked as a startup
- Belongs to an industry
- Contains multiple departments

#### Department
- Organizational unit within a company
- Has a name and belongs to an organization
- Contains multiple roles

#### Role
- Position within a department
- Has a name and level
- Can be assigned to multiple users

### Users and Authentication

#### Users
- Core user entity with authentication details
- Contains personal info (name, email, phone)
- Associated with a role
- Can be a coach or manager
- Can have text notifications enabled
- Manages multiple KPIs, milestones, and other entities

#### External Authentication
- Supports multiple authentication types
- Links to external applications
- Configurable for different authentication flows

### Performance Management

#### KPI (Key Performance Indicators)
- Core metrics tracked for users
- Has quantity, unit, and objectives
- Can be corporate or individual
- Links to specific drivers
- Supports performance direction tracking
- Can have parent KPIs (hierarchical structure)
- Tracks history and delegates

#### Milestones
- Achievement markers for KPIs
- Has quantity and achievement text
- Can be recurring
- Supports dependencies
- Tracks CHARP status (C, H, A, R, P, D)
- Can have associated issues

#### Issues
- Problems or tasks related to milestones
- Has status, name, and notes
- Can have multiple todos
- Can be associated with meetings

### Meetings and Communication

#### Meeting
- Scheduled events with specific frequency
- Has name and interval settings
- Can include multiple users
- Tracks history and scores
- Can be associated with KPIs and issues

#### UserChat
- Supports user communication
- Tracks chat history and participants

### Portfolio Management

#### Portfolio Group
- Groups of users for management purposes
- Has name and associated users
- Supports deactivation dates

### Assessment and Feedback

#### Drivers
- Core categories for assessment
- Has name and sequence number
- Associated with KPIs and questions

#### Questions
- Assessment items linked to drivers
- Has multiple options
- Used in RFP (Request for Proposal)
- Grouped by question type

#### User Answers
- Records user responses to questions
- Links answers to specific options
- Associated with drivers

## Key Relationships

1. **Organizational Hierarchy**
   - Organization → Departments → Roles → Users

2. **Performance Tracking**
   - Users → KPIs → Milestones → Issues → Todos

3. **Meeting Structure**
   - Meeting → MeetingUsers
   - Meeting → MeetingHistory
   - Meeting → MeetingKPIs
   - Meeting → MeetingIssues

4. **Assessment Flow**
   - Drivers → Questions → Options → UserAnswers

## Enums and Status Tracking

### CHARP Status
Used in multiple entities to track progress:
- C: Created
- H: On Hold
- A: Active
- R: Review
- P: Complete
- D: Done (in some entities)

### Other Status Types
- Meeting frequency types
- Reminder types (daily, weekly, monthly, quarter, year, none)
- Invite status (invited, created)

## Views

### Global Views
1. **Global_vw_UserActivity**
   - Combines user info with activity logs
   - Tracks user engagement

2. **Global_vw_UserActivityByDay**
   - Aggregates daily user activity
   - Tracks unique user counts

3. **Global_vw_Organization**
   - Comprehensive view of organizational structure
   - Combines org, department, role, and user info

## Data Tracking and History

The schema includes comprehensive tracking of:
- Creation and update timestamps for all entities
- Soft deletion support (deletedAt fields)
- User activity logging
- Meeting history
- KPI history
- Performance metrics
- User interactions and responses

## External Integration Support

The schema supports integration with external systems through:
- External authentication configuration
- External app endpoints
- External KPI tracking
- Data access controls
- Feature request tracking

This data model supports a comprehensive business value tracking system with:
- Organizational hierarchy management
- Performance tracking and goal setting
- Meeting and communication tools
- Assessment and feedback mechanisms
- External system integration
