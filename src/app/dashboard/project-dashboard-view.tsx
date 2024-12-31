'use client';

import ProjectView from '../../components/project/project-view';
import { ProjectSidebar } from '../../components/project/project-sidebar';
import { getProjects } from '../../app/actions/projects';
import { getProjectTasks, updateTask } from '../../app/actions/tasks';
import type { Project, Task } from '../../lib/graphql/generated/graphql';
import { useState, useEffect } from 'react';

interface Document {
  id: string;
  title: string;
  type: string;
  projectId: string;
}

export default function ProjectDashboardView() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [documents] = useState<Document[]>([]); // Placeholder until we implement documents
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const loadData = async () => {
    const [projectsData, tasksData] = await Promise.all([
      getProjects(),
      getProjectTasks()
    ]);
    setProjects(projectsData || []);
    setTasks(tasksData || []);
    
    // Set first project as selected if there are projects and none selected
    if (projectsData?.length > 0 && !selectedProjectId) {
      setSelectedProjectId(projectsData[0].id);
    }
  };

  useEffect(() => {
    loadData();
  }, []); // Only run on mount since we don't need to reload data when selectedProjectId changes

  const handleTaskStatusChange = async (taskId: string, status: string) => {
    const result = await updateTask({
      id: taskId,
      patch: { status }
    });
    if (result) {
      setTasks(prev => prev.map(t => t.id === taskId ? result : t));
    }
  };

  return (
    <div className="flex-1 flex">
      <ProjectSidebar 
        projects={projects}
        selectedProjectId={selectedProjectId}
        onProjectSelect={setSelectedProjectId}
        onRefresh={loadData}
      />
      <ProjectView 
        selectedProjectId={selectedProjectId}
        projects={projects}
        tasks={tasks || []}
        documents={documents}
        onTaskStatusChange={handleTaskStatusChange}
      />
    </div>
  );
}
