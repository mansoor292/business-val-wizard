import { InferModel } from 'drizzle-orm';
import * as schema from './schema/base';

export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ValueProposition = InferModel<typeof schema.valuePropositions>;
export type Initiative = InferModel<typeof schema.initiatives>;
export type Metric = InferModel<typeof schema.metrics>;
export type Project = InferModel<typeof schema.projects>;
export type Task = InferModel<typeof schema.tasks>;
export type Document = InferModel<typeof schema.documents>;
export type Comment = InferModel<typeof schema.comments>;
export type TeamMember = InferModel<typeof schema.teamMembers>;
export type Chat = InferModel<typeof schema.chats>;
export type Message = InferModel<typeof schema.messages>;

export interface ChatFilters {
  participantType?: 'AGENT' | 'TEAM_MEMBER';
  participantId?: string;
  status?: 'ACTIVE' | 'ARCHIVED';
  searchTerm?: string;
}

export interface MessageFilters {
  chatId?: string;
  sender?: 'USER' | 'PARTICIPANT';
  dateRange?: { start: Date; end: Date };
}

export interface DataAdapter {
  // Chat Operations
  getChat(id: string): Promise<Chat>;
  listChats(filters?: ChatFilters): Promise<Chat[]>;
  createChat(data: Omit<Chat, keyof BaseEntity>): Promise<Chat>;
  updateChat(id: string, data: Partial<Chat>): Promise<Chat>;

  // Message Operations
  getMessage(id: string): Promise<Message>;
  listMessages(filters?: MessageFilters): Promise<Message[]>;
  createMessage(data: Omit<Message, keyof BaseEntity>): Promise<Message>;
  updateMessage(id: string, data: Partial<Message>): Promise<Message>;

  initialize(): Promise<void>;
  
  getValueProposition(id: string): Promise<ValueProposition>;
  listValuePropositions(filters?: ValuePropositionFilters): Promise<ValueProposition[]>;
  createValueProposition(data: Omit<ValueProposition, keyof BaseEntity>): Promise<ValueProposition>;
  updateValueProposition(id: string, data: Partial<ValueProposition>): Promise<ValueProposition>;
  
  getInitiative(id: string): Promise<Initiative>;
  listInitiatives(filters?: InitiativeFilters): Promise<Initiative[]>;
  createInitiative(data: Omit<Initiative, keyof BaseEntity>): Promise<Initiative>;
  updateInitiative(id: string, data: Partial<Initiative>): Promise<Initiative>;
  
  getMetric(id: string): Promise<Metric>;
  listMetrics(filters?: MetricFilters): Promise<Metric[]>;
  createMetric(data: Omit<Metric, keyof BaseEntity>): Promise<Metric>;
  updateMetric(id: string, data: Partial<Metric>): Promise<Metric>;
  
  getProject(id: string): Promise<Project>;
  listProjects(filters?: ProjectFilters): Promise<Project[]>;
  createProject(data: Omit<Project, keyof BaseEntity>): Promise<Project>;
  updateProject(id: string, data: Partial<Project>): Promise<Project>;
  
  getTask(id: string): Promise<Task>;
  listTasks(filters?: TaskFilters): Promise<Task[]>;
  createTask(data: Omit<Task, keyof BaseEntity>): Promise<Task>;
  updateTask(id: string, data: Partial<Task>): Promise<Task>;
  
  getDocument(id: string): Promise<Document>;
  listDocuments(filters?: DocumentFilters): Promise<Document[]>;
  createDocument(data: Omit<Document, keyof BaseEntity>): Promise<Document>;
  updateDocument(id: string, data: Partial<Document>): Promise<Document>;
  
  getComment(id: string): Promise<Comment>;
  listComments(filters?: CommentFilters): Promise<Comment[]>;
  createComment(data: Omit<Comment, keyof BaseEntity>): Promise<Comment>;
  updateComment(id: string, data: Partial<Comment>): Promise<Comment>;
  
  getTeamMember(id: string): Promise<TeamMember>;
  listTeamMembers(filters?: TeamMemberFilters): Promise<TeamMember[]>;
  createTeamMember(data: Omit<TeamMember, keyof BaseEntity>): Promise<TeamMember>;
  updateTeamMember(id: string, data: Partial<TeamMember>): Promise<TeamMember>;
}

// Filter interfaces remain the same
export interface ValuePropositionFilters {
  impact?: 'LOW' | 'MEDIUM' | 'HIGH';
  effort?: 'LOW' | 'MEDIUM' | 'HIGH';
  confidence?: 'LOW' | 'MEDIUM' | 'HIGH';
  searchTerm?: string;
}

export interface InitiativeFilters {
  status?: 'DRAFT' | 'IN_PROGRESS' | 'COMPLETED' | 'CANCELLED';
  valuePropositionId?: string;
  dateRange?: { start: Date; end: Date };
}

export interface MetricFilters {
  initiativeId?: string;
  trend?: 'UP' | 'DOWN' | 'FLAT';
  searchTerm?: string;
}

export interface ProjectFilters {
  status?: 'COMPLETED' | 'CANCELLED' | 'ACTIVE' | 'ON_HOLD';
  searchTerm?: string;
  dateRange?: { start: Date; end: Date };
}

export interface TaskFilters {
  status?: 'TODO' | 'IN_PROGRESS' | 'REVIEW' | 'DONE';
  projectId?: string;
  assigneeId?: string;
  priority?: 'LOW' | 'MEDIUM' | 'HIGH';
}

export interface DocumentFilters {
  type?: 'SPECIFICATION' | 'DESIGN' | 'DOCUMENTATION' | 'OTHER';
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
