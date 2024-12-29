"use client";

import React, { createContext, useContext, useState, useCallback } from 'react';
import {
  DataAdapter,
  ValueProposition,
  Initiative,
  Metric,
  Project,
  Task,
  Document,
  Comment,
  ValuePropositionFilters,
  InitiativeFilters,
  MetricFilters,
  ProjectFilters,
  TaskFilters,
  DocumentFilters,
  CommentFilters,
  BaseEntity
} from './types';

interface DataContextType {
  // State
  valuePropositions: ValueProposition[];
  initiatives: Initiative[];
  metrics: Metric[];
  projects: Project[];
  tasks: Task[];
  documents: Document[];
  comments: Comment[];
  selectedProjectId: string | null;

  // Value Proposition operations
  getValueProposition: (id: string) => Promise<ValueProposition>;
  listValuePropositions: (filters?: ValuePropositionFilters) => Promise<ValueProposition[]>;
  createValueProposition: (data: Omit<ValueProposition, keyof BaseEntity>) => Promise<ValueProposition>;
  updateValueProposition: (id: string, data: Partial<ValueProposition>) => Promise<ValueProposition>;

  // Initiative operations
  getInitiative: (id: string) => Promise<Initiative>;
  listInitiatives: (filters?: InitiativeFilters) => Promise<Initiative[]>;
  createInitiative: (data: Omit<Initiative, keyof BaseEntity>) => Promise<Initiative>;
  updateInitiative: (id: string, data: Partial<Initiative>) => Promise<Initiative>;

  // Metric operations
  getMetric: (id: string) => Promise<Metric>;
  listMetrics: (filters?: MetricFilters) => Promise<Metric[]>;
  createMetric: (data: Omit<Metric, keyof BaseEntity>) => Promise<Metric>;
  updateMetric: (id: string, data: Partial<Metric>) => Promise<Metric>;

  // Project operations
  getProject: (id: string) => Promise<Project>;
  listProjects: (filters?: ProjectFilters) => Promise<Project[]>;
  createProject: (data: Omit<Project, keyof BaseEntity>) => Promise<Project>;
  updateProject: (id: string, data: Partial<Project>) => Promise<Project>;
  loadProject: (projectId: string) => Promise<void>;
  loadAllProjects: () => Promise<void>;

  // Task operations
  getTask: (id: string) => Promise<Task>;
  listTasks: (filters?: TaskFilters) => Promise<Task[]>;
  createTask: (data: Omit<Task, keyof BaseEntity>) => Promise<Task>;
  updateTask: (id: string, data: Partial<Task>) => Promise<Task>;
  updateTaskStatus: (taskId: string, newStatus: Task['status']) => Promise<void>;

  // Document operations
  getDocument: (id: string) => Promise<Document>;
  listDocuments: (filters?: DocumentFilters) => Promise<Document[]>;
  createDocument: (data: Omit<Document, keyof BaseEntity>) => Promise<Document>;
  updateDocument: (id: string, data: Partial<Document>) => Promise<Document>;

  // Comment operations
  getComment: (id: string) => Promise<Comment>;
  listComments: (filters?: CommentFilters) => Promise<Comment[]>;
  createComment: (data: Omit<Comment, keyof BaseEntity>) => Promise<Comment>;
  updateComment: (id: string, data: Partial<Comment>) => Promise<Comment>;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ 
  children, 
  adapter 
}: { 
  children: React.ReactNode; 
  adapter: DataAdapter;
}) {
  const [valuePropositions, setValuePropositions] = useState<ValueProposition[]>([]);
  const [initiatives, setInitiatives] = useState<Initiative[]>([]);
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [comments, setComments] = useState<Comment[]>([]);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  // Value Proposition operations
  const getValueProposition = useCallback(async (id: string) => {
    const vp = await adapter.getValueProposition(id);
    setValuePropositions(prev => {
      const filtered = prev.filter(p => p.id !== id);
      return [...filtered, vp];
    });
    return vp;
  }, [adapter]);

  const listValuePropositions = useCallback(async (filters?: ValuePropositionFilters) => {
    const vps = await adapter.listValuePropositions(filters);
    setValuePropositions(vps);
    return vps;
  }, [adapter]);

  const createValueProposition = useCallback(async (data: Omit<ValueProposition, keyof BaseEntity>) => {
    const vp = await adapter.createValueProposition(data);
    setValuePropositions(prev => [...prev, vp]);
    return vp;
  }, [adapter]);

  const updateValueProposition = useCallback(async (id: string, data: Partial<ValueProposition>) => {
    const vp = await adapter.updateValueProposition(id, data);
    setValuePropositions(prev => {
      const filtered = prev.filter(p => p.id !== id);
      return [...filtered, vp];
    });
    return vp;
  }, [adapter]);

  // Initiative operations
  const getInitiative = useCallback(async (id: string) => {
    const initiative = await adapter.getInitiative(id);
    setInitiatives(prev => {
      const filtered = prev.filter(i => i.id !== id);
      return [...filtered, initiative];
    });
    return initiative;
  }, [adapter]);

  const listInitiatives = useCallback(async (filters?: InitiativeFilters) => {
    const initiatives = await adapter.listInitiatives(filters);
    setInitiatives(initiatives);
    return initiatives;
  }, [adapter]);

  const createInitiative = useCallback(async (data: Omit<Initiative, keyof BaseEntity>) => {
    const initiative = await adapter.createInitiative(data);
    setInitiatives(prev => [...prev, initiative]);
    return initiative;
  }, [adapter]);

  const updateInitiative = useCallback(async (id: string, data: Partial<Initiative>) => {
    const initiative = await adapter.updateInitiative(id, data);
    setInitiatives(prev => {
      const filtered = prev.filter(i => i.id !== id);
      return [...filtered, initiative];
    });
    return initiative;
  }, [adapter]);

  // Metric operations
  const getMetric = useCallback(async (id: string) => {
    const metric = await adapter.getMetric(id);
    setMetrics(prev => {
      const filtered = prev.filter(m => m.id !== id);
      return [...filtered, metric];
    });
    return metric;
  }, [adapter]);

  const listMetrics = useCallback(async (filters?: MetricFilters) => {
    const metrics = await adapter.listMetrics(filters);
    setMetrics(metrics);
    return metrics;
  }, [adapter]);

  const createMetric = useCallback(async (data: Omit<Metric, keyof BaseEntity>) => {
    const metric = await adapter.createMetric(data);
    setMetrics(prev => [...prev, metric]);
    return metric;
  }, [adapter]);

  const updateMetric = useCallback(async (id: string, data: Partial<Metric>) => {
    const metric = await adapter.updateMetric(id, data);
    setMetrics(prev => {
      const filtered = prev.filter(m => m.id !== id);
      return [...filtered, metric];
    });
    return metric;
  }, [adapter]);

  // Project operations
  const getProject = useCallback(async (id: string) => {
    const project = await adapter.getProject(id);
    setProjects(prev => {
      const filtered = prev.filter(p => p.id !== id);
      return [...filtered, project];
    });
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
    await loadProject(project.id);
    return project;
  }, [adapter]);

  const updateProject = useCallback(async (id: string, data: Partial<Project>) => {
    const project = await adapter.updateProject(id, data);
    setProjects(prev => {
      const filtered = prev.filter(p => p.id !== id);
      return [...filtered, project];
    });
    return project;
  }, [adapter]);

  const loadProject = useCallback(async (projectId: string) => {
    try {
      const project = await adapter.getProject(projectId);
      const projectTasks = await adapter.listTasks({ projectId });
      const projectDocs = await adapter.listDocuments({ projectId });
      const projectComments = await adapter.listComments({ projectId });

      setProjects(prev => {
        const otherProjects = prev.filter(p => p.id !== projectId);
        return [...otherProjects, project];
      });
      setTasks(projectTasks);
      setDocuments(projectDocs);
      setComments(projectComments);
      setSelectedProjectId(projectId);
    } catch (error) {
      console.error('Error loading project:', error);
    }
  }, [adapter]);

  const loadAllProjects = useCallback(async () => {
    try {
      const allProjects = await adapter.listProjects();
      setProjects(allProjects);
    } catch (error) {
      console.error('Error loading all projects:', error);
    }
  }, [adapter]);

  // Task operations
  const getTask = useCallback(async (id: string) => {
    const task = await adapter.getTask(id);
    setTasks(prev => {
      const filtered = prev.filter(t => t.id !== id);
      return [...filtered, task];
    });
    return task;
  }, [adapter]);

  const listTasks = useCallback(async (filters?: TaskFilters) => {
    const tasks = await adapter.listTasks(filters);
    setTasks(tasks);
    return tasks;
  }, [adapter]);

  const createTask = useCallback(async (data: Omit<Task, keyof BaseEntity>) => {
    const task = await adapter.createTask(data);
    setTasks(prev => [...prev, task]);
    return task;
  }, [adapter]);

  const updateTask = useCallback(async (id: string, data: Partial<Task>) => {
    const task = await adapter.updateTask(id, data);
    setTasks(prev => {
      const filtered = prev.filter(t => t.id !== id);
      return [...filtered, task];
    });
    return task;
  }, [adapter]);

  const updateTaskStatus = useCallback(async (taskId: string, newStatus: Task['status']) => {
    const updatedTask = await adapter.updateTask(taskId, { status: newStatus });
    setTasks(prev => prev.map(task => task.id === taskId ? updatedTask : task));
  }, [adapter]);

  // Document operations
  const getDocument = useCallback(async (id: string) => {
    const document = await adapter.getDocument(id);
    setDocuments(prev => {
      const filtered = prev.filter(d => d.id !== id);
      return [...filtered, document];
    });
    return document;
  }, [adapter]);

  const listDocuments = useCallback(async (filters?: DocumentFilters) => {
    const documents = await adapter.listDocuments(filters);
    setDocuments(documents);
    return documents;
  }, [adapter]);

  const createDocument = useCallback(async (data: Omit<Document, keyof BaseEntity>) => {
    const document = await adapter.createDocument(data);
    setDocuments(prev => [...prev, document]);
    return document;
  }, [adapter]);

  const updateDocument = useCallback(async (id: string, data: Partial<Document>) => {
    const document = await adapter.updateDocument(id, data);
    setDocuments(prev => {
      const filtered = prev.filter(d => d.id !== id);
      return [...filtered, document];
    });
    return document;
  }, [adapter]);

  // Comment operations
  const getComment = useCallback(async (id: string) => {
    const comment = await adapter.getComment(id);
    setComments(prev => {
      const filtered = prev.filter(c => c.id !== id);
      return [...filtered, comment];
    });
    return comment;
  }, [adapter]);

  const listComments = useCallback(async (filters?: CommentFilters) => {
    const comments = await adapter.listComments(filters);
    setComments(comments);
    return comments;
  }, [adapter]);

  const createComment = useCallback(async (data: Omit<Comment, keyof BaseEntity>) => {
    const comment = await adapter.createComment(data);
    setComments(prev => [...prev, comment]);
    return comment;
  }, [adapter]);

  const updateComment = useCallback(async (id: string, data: Partial<Comment>) => {
    const comment = await adapter.updateComment(id, data);
    setComments(prev => {
      const filtered = prev.filter(c => c.id !== id);
      return [...filtered, comment];
    });
    return comment;
  }, [adapter]);

  const value = {
    // State
    valuePropositions,
    initiatives,
    metrics,
    projects,
    tasks,
    documents,
    comments,
    selectedProjectId,

    // Value Proposition operations
    getValueProposition,
    listValuePropositions,
    createValueProposition,
    updateValueProposition,

    // Initiative operations
    getInitiative,
    listInitiatives,
    createInitiative,
    updateInitiative,

    // Metric operations
    getMetric,
    listMetrics,
    createMetric,
    updateMetric,

    // Project operations
    getProject,
    listProjects,
    createProject,
    updateProject,
    loadProject,
    loadAllProjects,

    // Task operations
    getTask,
    listTasks,
    createTask,
    updateTask,
    updateTaskStatus,

    // Document operations
    getDocument,
    listDocuments,
    createDocument,
    updateDocument,

    // Comment operations
    getComment,
    listComments,
    createComment,
    updateComment,
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
