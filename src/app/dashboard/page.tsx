import { Suspense } from 'react'
import ProjectDashboardView from './project-dashboard-view'
import { getProjects, getTasks, getDocuments } from '../../lib/actions/project'
import { Project, Task, Document } from '../../lib/data/interface'

async function getData() {
  const [projects, tasks, documents] = await Promise.all([
    getProjects(),
    getTasks(),
    getDocuments()
  ])

  return {
    projects,
    tasks,
    documents
  }
}

export default async function DashboardPage() {
  const data = await getData()
  
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-muted-foreground">Loading dashboard...</div>
      </div>
    }>
      <ProjectDashboardView 
        projects={data.projects}
        tasks={data.tasks}
        documents={data.documents}
      />
    </Suspense>
  )
}
