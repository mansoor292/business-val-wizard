"use client";

import React, { useState } from 'react';
import { Task } from 'src/lib/data/types';
import { Card } from '../ui/card';
import { ScrollArea } from '../ui/scroll-area';
import { Badge } from '../ui/badge';
import { format } from 'date-fns';

interface KanbanColumnProps {
  title: string;
  tasks: Task[];
  onTaskDrop: (taskId: string, newStatus: Task['status']) => Promise<void>;
  isLoading: boolean;
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({ title, tasks, onTaskDrop, isLoading }) => {
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = async (e: React.DragEvent, status: Task['status']) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    await onTaskDrop(taskId, status);
  };

  return (
    <div 
      className={`flex flex-col gap-4 min-w-[300px] bg-secondary/20 p-4 rounded-lg ${isLoading ? 'opacity-50' : ''}`}
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e, title as Task['status'])}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg">{title}</h3>
        <Badge variant="secondary">{tasks.length}</Badge>
      </div>
      <ScrollArea className="h-[600px]">
        <div className="flex flex-col gap-2">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} disabled={isLoading} />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

interface TaskCardProps {
  task: Task;
  disabled: boolean;
}

const TaskCard: React.FC<TaskCardProps> = ({ task, disabled }) => {
  const handleDragStart = (e: React.DragEvent, taskId: string) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    e.dataTransfer.setData('taskId', taskId);
  };

  const priorityColors = {
    LOW: 'bg-blue-500',
    MEDIUM: 'bg-yellow-500',
    HIGH: 'bg-red-500',
  };

  return (
    <Card
      draggable={!disabled}
      onDragStart={(e) => handleDragStart(e, task.id)}
      className={`p-4 cursor-move hover:shadow-md transition-shadow ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h4 className="font-medium">{task.title}</h4>
          <span 
            className={`${priorityColors[task.priority]} w-2 h-2 rounded-full`} 
            title={`Priority: ${task.priority}`}
          />
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">{task.description}</p>
        {task.dueDate && (
          <div className="text-xs text-muted-foreground mt-2">
            Due: {format(new Date(task.dueDate), 'MMM d, yyyy')}
          </div>
        )}
      </div>
    </Card>
  );
};

interface ProjectKanbanBoardProps {
  projectId: string;
  tasks: Task[];
  onTaskStatusChange: (taskId: string, newStatus: Task['status']) => Promise<void>;
}

const ProjectKanbanBoard: React.FC<ProjectKanbanBoardProps> = ({
  tasks,
  onTaskStatusChange,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const columns: Task['status'][] = ['TODO', 'IN_PROGRESS', 'REVIEW', 'DONE'];

  const getTasksByStatus = (status: Task['status']) => {
    return tasks.filter((task) => task.status === status);
  };

  const handleTaskDrop = async (taskId: string, newStatus: Task['status']) => {
    setIsLoading(true);
    try {
      await onTaskStatusChange(taskId, newStatus);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex gap-4 p-4 overflow-x-auto">
      {columns.map((status) => (
        <KanbanColumn
          key={status}
          title={status}
          tasks={getTasksByStatus(status)}
          onTaskDrop={handleTaskDrop}
          isLoading={isLoading}
        />
      ))}
    </div>
  );
};

export default ProjectKanbanBoard;
