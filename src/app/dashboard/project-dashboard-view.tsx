'use client';

import ProjectView from '../../components/project/project-view';
import { ProjectSidebar } from '../../components/project/project-sidebar';
import { useData } from '../../lib/data/context';

export default function ProjectDashboardView() {
  const { 
    projects, 
    tasks,
    documents,
    selectedProjectId,
    updateTaskStatus 
  } = useData();

  return (
    <div className="flex-1 flex">
      <ProjectSidebar />
      <ProjectView 
        selectedProjectId={selectedProjectId}
        projects={projects}
        tasks={tasks || []}
        documents={documents || []}
        onTaskStatusChange={updateTaskStatus}
      />
    </div>
  );
}
