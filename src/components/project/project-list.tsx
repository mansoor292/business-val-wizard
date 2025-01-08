"use client";

import React, { useState } from 'react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { CreateProjectDialog } from './create-project-dialog';
import { format } from 'date-fns';
import { Project } from '../../lib/data/interface';
import { useRouter } from 'next/navigation';

interface ProjectListProps {
  projects: Project[];
}

export function ProjectList({ projects }: ProjectListProps) {
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const router = useRouter();

  const handleProjectSelect = (projectId: string) => {
    setSelectedProjectId(projectId);
    router.push(`/projects/${projectId}`);
  };

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
          onClick={() => handleProjectSelect(project.id)}
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
