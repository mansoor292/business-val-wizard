"use client";

import React, { useState, useEffect } from 'react';
import { useData } from '../lib/data/context';
import { ScrollArea } from './ui/scroll-area';
import { Badge } from './ui/badge';
import { Loader2 } from 'lucide-react';
import { CreateProjectDialog } from './create-project-dialog';

export function ProjectSidebar() {
  const { projects, selectedProjectId, loadProject, loadAllProjects } = useData();
  const [loadingProjectId, setLoadingProjectId] = useState<string | null>(null);

  useEffect(() => {
    loadAllProjects();
  }, [loadAllProjects]);

  const handleProjectClick = async (projectId: string) => {
    if (loadingProjectId || projectId === selectedProjectId) return;
    
    setLoadingProjectId(projectId);
    try {
      await loadProject(projectId);
    } catch (error) {
      console.error('Error loading project:', error);
    } finally {
      setLoadingProjectId(null);
    }
  };

  return (
    <div className="w-64 border-r border-border flex flex-col bg-background">
      {/* Header */}
      <div className="h-14 border-b border-border flex items-center justify-between px-4">
        <div className="flex items-center">
          <span className="font-semibold">Projects</span>
        </div>
        <CreateProjectDialog />
      </div>

      {/* Projects List */}
      <ScrollArea className="flex-1">
        <div className="p-2">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`relative flex items-center justify-between p-3 rounded-md cursor-pointer hover:bg-secondary/50 ${
                project.id === selectedProjectId ? 'bg-secondary' : ''
              }`}
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-medium truncate">{project.name}</h3>
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
                <p className="text-sm text-muted-foreground truncate">
                  {project.description}
                </p>
              </div>
              {loadingProjectId === project.id && (
                <div className="absolute inset-0 bg-background/50 flex items-center justify-center rounded-md">
                  <Loader2 className="h-4 w-4 animate-spin" />
                </div>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
