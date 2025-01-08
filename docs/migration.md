# Server Actions Migration Plan

## Current Data Pattern Analysis

The application currently uses a `useData` hook in several components:

1. ProjectDashboardView
   - Uses: projects, tasks, documents
   - Actions: updateTaskStatus

2. TeamMembersList
   - Uses: teamMembers
   - Actions: listTeamMembers, createTeamMember

3. ChirpContainer & ChirpView
   - Uses: activeChat, chatMessages, agents, teamMembers
   - Actions: initializeChat, sendChatMessage

## Migration Structure

### 1. Server Actions Directory Structure
```
src/lib/actions/
  - project.ts (projects, tasks, documents)
  - team.ts (team members, org structure)
  - chat.ts (messages, agents)
  - kpi.ts (KPIs, business drivers)
```

### 2. Server Actions Implementation

#### A. Project Actions
```typescript
// project.ts
export async function getProjects()
export async function getTasks()
export async function getDocuments()
export async function updateTaskStatus()
```

#### B. Team Actions
```typescript
// team.ts
export async function getTeamMembers()
export async function createTeamMember()
export async function updateTeamMember()
```

#### C. Chat Actions
```typescript
// chat.ts
export async function getChatMessages()
export async function initializeChat()
export async function sendMessage()
export async function getAgents()
```

#### D. KPI Actions
```typescript
// kpi.ts
export async function getKPIData()
export async function getBusinessDrivers()
```

### 3. Page-Level Changes

#### A. Dashboard
```typescript
// src/app/dashboard/page.tsx
export default async function Page() {
  const projects = await getProjects()
  const tasks = await getTasks()
  const documents = await getDocuments()
  
  return (
    <Suspense fallback={<Loading />}>
      <ProjectDashboardView 
        projects={projects}
        tasks={tasks}
        documents={documents}
      />
    </Suspense>
  )
}
```

#### B. Team
```typescript
// src/app/team/page.tsx
export default async function Page() {
  const members = await getTeamMembers()
  
  return (
    <Suspense fallback={<Loading />}>
      <TeamView members={members} />
    </Suspense>
  )
}
```

#### C. Chat
```typescript
// src/app/chat/[id]/page.tsx
export default async function Page({ params }) {
  const messages = await getChatMessages(params.id)
  const agents = await getAgents()
  
  return (
    <Suspense fallback={<Loading />}>
      <ChirpView 
        messages={messages}
        agents={agents}
      />
    </Suspense>
  )
}
```

#### D. KPI
```typescript
// src/app/kpi/page.tsx
export default async function Page() {
  const kpiData = await getKPIData()
  const businessDrivers = await getBusinessDrivers()
  
  return (
    <Suspense fallback={<Loading />}>
      <KPIView 
        kpiData={kpiData}
        businessDrivers={businessDrivers}
      />
    </Suspense>
  )
}
```

## Migration Steps

1. Create Server Actions
   - Create actions directory structure
   - Implement mock data functions
   - Add proper typing for all actions

2. Create New Pages
   - Add new page files under src/app
   - Implement server-side data fetching
   - Add Suspense boundaries

3. Modify Existing Components
   - Remove useData hooks
   - Update props to accept data directly
   - Add loading states
   - Update event handlers to use server actions

4. Testing
   - Verify data flow
   - Test loading states
   - Ensure proper error handling
   - Test server actions

## Component Changes Required

1. ProjectDashboardView
   - Remove useData hook
   - Accept data as props
   - Use server actions for updates

2. TeamMembersList
   - Remove useData hook
   - Accept team members as props
   - Use server actions for member creation

3. ChirpContainer & ChirpView
   - Remove useData hook
   - Accept chat data as props
   - Use server actions for messaging

4. KPIView
   - Accept KPI data as props
   - Use server actions for any updates

## Notes

- All data fetching moves to page level
- Components become more focused on presentation
- Server actions handle all data mutations
- Suspense provides loading states
- Error boundaries should be added for error handling
