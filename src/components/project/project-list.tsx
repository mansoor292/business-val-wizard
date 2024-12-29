"use client";

import React, { useEffect, useState } from 'react';
import { useData } from 'src/lib/data/context';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { CreateProjectDialog } from './create-project-dialog';
import { format } from 'date-fns';

export function ProjectList() {
  const [isLoading, setIsLoading] = useState(true);
  const { projects, loadProject, loadAllProjects, selectedProjectId } = useData();

  useEffect(() => {
    const loadProjects = async () => {
      setIsLoading(true);
      await loadAllProjects();
      setIsLoading(false);
    };
    loadProjects();
  }, [loadAllProjects]);

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="p-4">
            <div className="space-y-3">
              <div className="h-4 bg-secondary/60 rounded w-3/4 animate-pulse" />
              <div className="h-4 bg-secondary/60 rounded w-1/2 animate-pulse" />
              <div className="h-4 bg-secondary/60 rounded w-1/4 animate-pulse" />
            </div>
          </Card>
        ))}
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <div className="space-y-4">
        <Card className="p-8 text-center">
          <div className="max-w-sm mx-auto space-y-4">
            <h3 className="text-lg font-semibold">No projects found</h3>
            <p className="text-muted-foreground">
              Get started by creating your first project to manage tasks and documents.
            </p>
            <CreateProjectDialog />
          </div>
        </Card>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ACTIVE':
        return 'bg-green-500';
      case 'ON_HOLD':
        return 'bg-yellow-500';
      case 'COMPLETED':
        return 'bg-blue-500';
      case 'CANCELLED':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Card 
          key={project.id}
          className={`p-4 cursor-pointer hover:shadow-md transition-shadow ${
            project.id === selectedProjectId ? 'border-2 border-primary' : ''
          }`}
          onClick={() => loadProject(project.id)}
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{project.name}</h3>
              <Badge className={getStatusColor(project.status)}>
                {project.status}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {project.description}
            </p>
            <div className="flex gap-4 mt-2 text-xs text-muted-foreground">
              <div>
                Started: {format(new Date(project.startDate), 'MMM d, yyyy')}
              </div>
              {project.endDate && (
                <div>
                  Due: {format(new Date(project.endDate), 'MMM d, yyyy')}
                </div>
              )}
            </div>
            <div className="text-xs text-muted-foreground">
              Team Size: {project.teamIds.length} members
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
