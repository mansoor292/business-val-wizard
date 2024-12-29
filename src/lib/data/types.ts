import { z } from "zod";

export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

// Value Proposition Schema
export const valuePropositionSchema = z.object({
  title: z.string(),
  description: z.string(),
  impact: z.enum(['LOW', 'MEDIUM', 'HIGH']),
  effort: z.enum(['LOW', 'MEDIUM', 'HIGH']),
  confidence: z.enum(['LOW', 'MEDIUM', 'HIGH']),
});

export type ValueProposition = z.infer<typeof valuePropositionSchema> & BaseEntity;

// Initiative Schema
export const initiativeSchema = z.object({
  title: z.string(),
  description: z.string(),
  status: z.enum(['DRAFT', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED']),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  valuePropositionIds: z.array(z.string()),
});

export type Initiative = z.infer<typeof initiativeSchema> & BaseEntity;

// Metric Schema
export const metricSchema = z.object({
  name: z.string(),
  description: z.string(),
  target: z.number(),
  current: z.number(),
  unit: z.string(),
  initiativeId: z.string(),
  trend: z.enum(['UP', 'DOWN', 'FLAT']).optional(),
});

export type Metric = z.infer<typeof metricSchema> & BaseEntity;

// Task Schema
export const taskSchema = z.object({
  title: z.string(),
  description: z.string(),
  status: z.enum(['TODO', 'IN_PROGRESS', 'REVIEW', 'DONE']),
  assigneeId: z.string().optional(),
  dueDate: z.date().optional(),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH']),
  projectId: z.string(),
});

export type Task = z.infer<typeof taskSchema> & BaseEntity;

// Document Schema
export const documentSchema = z.object({
  title: z.string(),
  content: z.string(),
  type: z.enum(['SPECIFICATION', 'DESIGN', 'DOCUMENTATION', 'OTHER']),
  projectId: z.string(),
});

export type Document = z.infer<typeof documentSchema> & BaseEntity;

// Comment Schema
export const commentSchema = z.object({
  content: z.string(),
  authorId: z.string(),
  projectId: z.string(),
  taskId: z.string().optional(),
  documentId: z.string().optional(),
});

export type Comment = z.infer<typeof commentSchema> & BaseEntity;

// Team Member Schema
export const teamMemberSchema = z.object({
  name: z.string(),
  role: z.string(),
  email: z.string().email(),
  avatar: z.string().optional(),
  skills: z.array(z.string()).optional(),
  department: z.string(),
});

export type TeamMember = z.infer<typeof teamMemberSchema> & BaseEntity;

// Project Schema
export const projectSchema = z.object({
  name: z.string(),
  description: z.string(),
  status: z.enum(['ACTIVE', 'ON_HOLD', 'COMPLETED', 'CANCELLED']),
  startDate: z.date(),
  endDate: z.date().optional(),
  teamIds: z.array(z.string()),
});

export type Project = z.infer<typeof projectSchema> & BaseEntity;

// Filter Types
export interface ValuePropositionFilters {
  impact?: ValueProposition['impact'];
  effort?: ValueProposition['effort'];
  confidence?: ValueProposition['confidence'];
  searchTerm?: string;
}

export interface InitiativeFilters {
  status?: Initiative['status'];
  valuePropositionId?: string;
  dateRange?: { start: Date; end: Date };
}

export interface MetricFilters {
  initiativeId?: string;
  trend?: Metric['trend'];
  searchTerm?: string;
}

export interface ProjectFilters {
  status?: Project['status'];
  searchTerm?: string;
  dateRange?: { start: Date; end: Date };
}

export interface TaskFilters {
  status?: Task['status'];
  projectId?: string;
  assigneeId?: string;
  priority?: Task['priority'];
}

export interface DocumentFilters {
  type?: Document['type'];
  projectId?: string;
  searchTerm?: string;
}

export interface CommentFilters {
  projectId?: string;
  taskId?: string;
  documentId?: string;
  authorId?: string;
}

export interface TeamMemberFilters {
  department?: string;
  searchTerm?: string;
}

// Data Adapter Interface
export interface DataAdapter {
  // Value Proposition operations
  getValueProposition(id: string): Promise<ValueProposition>;
  listValuePropositions(filters?: ValuePropositionFilters): Promise<ValueProposition[]>;
  createValueProposition(data: Omit<ValueProposition, keyof BaseEntity>): Promise<ValueProposition>;
  updateValueProposition(id: string, data: Partial<ValueProposition>): Promise<ValueProposition>;
  
  // Initiative operations
  getInitiative(id: string): Promise<Initiative>;
  listInitiatives(filters?: InitiativeFilters): Promise<Initiative[]>;
  createInitiative(data: Omit<Initiative, keyof BaseEntity>): Promise<Initiative>;
  updateInitiative(id: string, data: Partial<Initiative>): Promise<Initiative>;
  
  // Metric operations
  getMetric(id: string): Promise<Metric>;
  listMetrics(filters?: MetricFilters): Promise<Metric[]>;
  createMetric(data: Omit<Metric, keyof BaseEntity>): Promise<Metric>;
  updateMetric(id: string, data: Partial<Metric>): Promise<Metric>;

  // Project operations
  getProject(id: string): Promise<Project>;
  listProjects(filters?: ProjectFilters): Promise<Project[]>;
  createProject(data: Omit<Project, keyof BaseEntity>): Promise<Project>;
  updateProject(id: string, data: Partial<Project>): Promise<Project>;
  
  // Task operations
  getTask(id: string): Promise<Task>;
  listTasks(filters?: TaskFilters): Promise<Task[]>;
  createTask(data: Omit<Task, keyof BaseEntity>): Promise<Task>;
  updateTask(id: string, data: Partial<Task>): Promise<Task>;
  
  // Document operations
  getDocument(id: string): Promise<Document>;
  listDocuments(filters?: DocumentFilters): Promise<Document[]>;
  createDocument(data: Omit<Document, keyof BaseEntity>): Promise<Document>;
  updateDocument(id: string, data: Partial<Document>): Promise<Document>;
  
  // Comment operations
  getComment(id: string): Promise<Comment>;
  listComments(filters?: CommentFilters): Promise<Comment[]>;
  createComment(data: Omit<Comment, keyof BaseEntity>): Promise<Comment>;
  updateComment(id: string, data: Partial<Comment>): Promise<Comment>;

  // Team Member operations
  getTeamMember(id: string): Promise<TeamMember>;
  listTeamMembers(filters?: TeamMemberFilters): Promise<TeamMember[]>;
  createTeamMember(data: Omit<TeamMember, keyof BaseEntity>): Promise<TeamMember>;
  updateTeamMember(id: string, data: Partial<TeamMember>): Promise<TeamMember>;
}
