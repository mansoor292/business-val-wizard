'use client';

import React from 'react';
import { ScrollArea } from './ui/scroll-area';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import ProjectKanbanBoard from './project-kanban-board';
import { Project, Task, Document } from '../lib/data/types';

interface ProjectViewProps {
  selectedProjectId: string | null;
  projects: Project[];
  tasks: Task[];
  documents: Document[];
  onTaskStatusChange: (taskId: string, newStatus: Task['status']) => Promise<void>;
}

export function ProjectView({ selectedProjectId, projects, tasks, documents, onTaskStatusChange }: ProjectViewProps) {
  const project = projects.find(p => p.id === selectedProjectId);
  const projectTasks = tasks.filter(task => task.projectId === selectedProjectId);
  const projectDocuments = documents.filter(doc => doc.projectId === selectedProjectId);

  if (!selectedProjectId || !project) {
    return (
      <div className="flex-1 flex items-center justify-center bg-background">
        <div className="text-center p-8 text-muted-foreground">
          Select a project from the sidebar to view its details
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col gap-6 p-6 bg-background">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold">{project.name}</h1>
          <p className="text-muted-foreground mt-1">{project.description}</p>
        </div>
        <Badge 
          className={
            project.status === 'ACTIVE' ? 'bg-green-500' :
            project.status === 'ON_HOLD' ? 'bg-yellow-500' :
            project.status === 'COMPLETED' ? 'bg-blue-500' :
            project.status === 'CANCELLED' ? 'bg-red-500' :
            'bg-gray-500'
          }
        >
          {project.status}
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <Card className="p-0">
            <ProjectKanbanBoard
              projectId={project.id}
              tasks={projectTasks}
              onTaskStatusChange={onTaskStatusChange}
            />
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-4">
            <h3 className="font-semibold mb-3">Project Documents</h3>
            <ScrollArea className="h-[300px]">
              <div className="space-y-2">
                {projectDocuments.map((doc) => (
                  <div
                    key={doc.id}
                    className="p-2 hover:bg-secondary/50 rounded cursor-pointer"
                  >
                    <div className="font-medium">{doc.title}</div>
                    <div className="text-sm text-muted-foreground">
                      {doc.type}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </Card>

          <Card className="p-4">
            <h3 className="font-semibold mb-3">Project Details</h3>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-muted-foreground">Start Date: </span>
                {new Date(project.startDate).toLocaleDateString()}
              </div>
              {project.endDate && (
                <div>
                  <span className="text-muted-foreground">End Date: </span>
                  {new Date(project.endDate).toLocaleDateString()}
                </div>
              )}
              <div>
                <span className="text-muted-foreground">Team Size: </span>
                {project.teamIds.length} members
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProjectView;
