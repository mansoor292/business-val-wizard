"use client";

import React, { useEffect, useState } from 'react';
import { useData } from '../lib/data/context';
import ProjectKanbanBoard from './project-kanban-board';
import { Card } from './ui/card';
import { ScrollArea } from './ui/scroll-area';
import { Badge } from './ui/badge';

const ProjectView: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { 
    projects, 
    tasks, 
    documents,
    selectedProjectId,
    loadProject,
    updateTaskStatus 
  } = useData();

  useEffect(() => {
    if (selectedProjectId) {
      const loadSelectedProject = async () => {
        setIsLoading(true);
        await loadProject(selectedProjectId);
        setIsLoading(false);
      };
      loadSelectedProject();
    }
  }, [selectedProjectId, loadProject]);

  const project = projects.find(p => p.id === selectedProjectId);

  if (!selectedProjectId || !project) {
    return (
      <div className="text-center p-8 text-muted-foreground">
        Select a project from above to view its details
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col gap-6 p-6">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <div className="h-8 bg-secondary/60 rounded w-48 animate-pulse" />
            <div className="h-4 bg-secondary/60 rounded w-96 animate-pulse" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <Card className="p-6">
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-24 bg-secondary/60 rounded animate-pulse" />
                ))}
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-4">
              <div className="space-y-3">
                <div className="h-4 bg-secondary/60 rounded w-3/4 animate-pulse" />
                <div className="h-4 bg-secondary/60 rounded w-1/2 animate-pulse" />
                <div className="h-4 bg-secondary/60 rounded w-1/4 animate-pulse" />
              </div>
            </Card>

            <Card className="p-4">
              <div className="space-y-3">
                <div className="h-4 bg-secondary/60 rounded w-3/4 animate-pulse" />
                <div className="h-4 bg-secondary/60 rounded w-1/2 animate-pulse" />
                <div className="h-4 bg-secondary/60 rounded w-1/4 animate-pulse" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 p-6">
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
              tasks={tasks}
              onTaskStatusChange={updateTaskStatus}
            />
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="p-4">
            <h3 className="font-semibold mb-3">Project Documents</h3>
            <ScrollArea className="h-[300px]">
              <div className="space-y-2">
                {documents.map((doc) => (
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
