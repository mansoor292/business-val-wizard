import { Suspense } from 'react'
import { ProjectList } from '../../components/project/project-list'
import { getProjects } from '../../lib/actions/project'

async function getData() {
  const projects = await getProjects()
  return { projects }
}

export default async function ProjectsPage() {
  const data = await getData()
  
  return (
    <Suspense fallback={
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-4 border rounded-lg">
            <div className="space-y-3">
              <div className="h-4 bg-secondary/60 rounded w-3/4 animate-pulse" />
              <div className="h-4 bg-secondary/60 rounded w-1/2 animate-pulse" />
              <div className="h-4 bg-secondary/60 rounded w-1/4 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    }>
      <div className="container mx-auto py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Projects</h1>
        </div>
        <ProjectList projects={data.projects} />
      </div>
    </Suspense>
  )
}
