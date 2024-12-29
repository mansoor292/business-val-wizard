"use client";

import { useState, useCallback } from 'react';
import { DataAdapter, Project, ProjectFilters, BaseEntity } from '../../types';
import { useTaskOperations } from './tasks';
import { useDocumentOperations } from './documents';
import { useCommentOperations } from './comments';

export function useProjectOperations(
  adapter: DataAdapter,
  taskOps?: ReturnType<typeof useTaskOperations>,
  documentOps?: ReturnType<typeof useDocumentOperations>,
  commentOps?: ReturnType<typeof useCommentOperations>
) {
  // Initialize with empty array to prevent undefined
  const [projects, setProjects] = useState<Project[]>(() => []);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const getProject = useCallback(async (id: string) => {
    const project = await adapter.getProject(id);
    setProjects(prev => prev.map(p => p.id === id ? project : p));
    return project;
  }, [adapter]);

  const listProjects = useCallback(async (filters?: ProjectFilters) => {
    const projects = await adapter.listProjects(filters);
    setProjects(projects);
    return projects;
  }, [adapter]);

  const createProject = useCallback(async (data: Omit<Project, keyof BaseEntity>) => {
    const project = await adapter.createProject(data);
    setProjects(prev => [...prev, project]);
    // Don't load project here since it will be loaded by the component
    return project;
  }, [adapter]);

  const updateProject = useCallback(async (id: string, data: Partial<Project>) => {
    const project = await adapter.updateProject(id, data);
    setProjects(prev => prev.map(p => p.id === id ? project : p));
    return project;
  }, [adapter]);

  const loadProject = useCallback(async (projectId: string) => {
    try {
      // First load the project
      const project = await adapter.getProject(projectId);
      setProjects(prev => prev.map(p => p.id === projectId ? project : p));
      setSelectedProjectId(projectId);

      // Then load related data in parallel
      // Only include operations that exist
      const operations = [
        taskOps && taskOps.listTasks({ projectId }),
        documentOps && documentOps.listDocuments({ projectId }),
        commentOps && commentOps.listComments({ projectId })
      ].filter(Boolean);

      if (operations.length > 0) {
        await Promise.all(operations);
      }
    } catch (error) {
      console.error('Error loading project:', error);
      throw error; // Re-throw to let caller handle error
    }
  }, [adapter, taskOps, documentOps, commentOps]);

  const loadAllProjects = useCallback(async () => {
    try {
      const allProjects = await adapter.listProjects();
      setProjects(allProjects);
    } catch (error) {
      console.error('Error loading all projects:', error);
    }
  }, [adapter]);

  return {
    projects,
    selectedProjectId,
    getProject,
    listProjects,
    createProject,
    updateProject,
    loadProject,
    loadAllProjects,
  };
}
