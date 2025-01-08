'use client';

import { ScrollArea } from '../ui/scroll-area';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import { Project } from '../../lib/data/interface';

interface ProjectSidebarProps {
  projects: Project[];
  selectedProjectId: string | null;
  onProjectSelect: (projectId: string) => void;
}

export function ProjectSidebar({ 
  projects, 
  selectedProjectId, 
  onProjectSelect 
}: ProjectSidebarProps) {
  return (
    <div className="w-64 border-r border-border bg-muted/10">
      <div className="p-4 border-b border-border">
        <Button className="w-full justify-start" variant="outline">
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>
      <ScrollArea className="h-[calc(100vh-5rem)]">
        <div className="p-2">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => onProjectSelect(project.id)}
              className={`w-full text-left px-4 py-2 rounded-md mb-1 hover:bg-accent ${
                project.id === selectedProjectId ? 'bg-accent' : ''
              }`}
            >
              <div className="font-medium">{project.name}</div>
              <div className="text-sm text-muted-foreground truncate">
                {project.description}
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
