'use client';

import { useState } from 'react';
import ProjectView from '../../components/project/project-view';
import { ProjectSidebar } from '../../components/project/project-sidebar';
import { Project, Task, Document } from '../../lib/data/interface';
import { updateTaskStatus } from '../../lib/actions/project';

interface ProjectDashboardViewProps {
  projects: Project[];
  tasks: Task[];
  documents: Document[];
}

export default function ProjectDashboardView({ 
  projects, 
  tasks, 
  documents 
}: ProjectDashboardViewProps) {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    projects.length > 0 ? projects[0].id : null
  );

  const handleTaskStatusChange = async (taskId: string, newStatus: Task['status']) => {
    try {
      await updateTaskStatus(taskId, newStatus);
      // In a real app, you might want to refresh the tasks data here
      // or implement optimistic updates
    } catch (error) {
      console.error('Failed to update task status:', error);
    }
  };

  return (
    <div className="flex-1 flex">
      <ProjectSidebar 
        projects={projects}
        selectedProjectId={selectedProjectId}
        onProjectSelect={setSelectedProjectId}
      />
      <ProjectView 
        selectedProjectId={selectedProjectId}
        projects={projects}
        tasks={tasks}
        documents={documents}
        onTaskStatusChange={handleTaskStatusChange}
      />
    </div>
  );
}
