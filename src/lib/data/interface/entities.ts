import { z } from "zod";
import { BaseEntity } from "./base";

// Enums for type safety in code
export const enum Impact {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH'
}

export const enum Effort {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH'
}

export const enum Confidence {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH'
}

// Value Proposition Schema
export const valuePropositionSchema = z.object({
  title: z.string(),
  description: z.string(),
  impact: z.string(),
  effort: z.string(),
  confidence: z.string(),
});

export type ValueProposition = z.infer<typeof valuePropositionSchema> & BaseEntity;

export const enum InitiativeStatus {
  DRAFT = 'DRAFT',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

// Initiative Schema
export const initiativeSchema = z.object({
  title: z.string(),
  description: z.string(),
  status: z.string(),
  startDate: z.date().optional(),
  endDate: z.date().optional(),
  valuePropositionIds: z.array(z.string()),
});

export type Initiative = z.infer<typeof initiativeSchema> & BaseEntity;

export const enum Trend {
  UP = 'UP',
  DOWN = 'DOWN',
  FLAT = 'FLAT'
}

// Metric Schema
export const metricSchema = z.object({
  name: z.string(),
  description: z.string(),
  target: z.number(),
  current: z.number(),
  unit: z.string(),
  initiativeId: z.string(),
  trend: z.string().optional(),
});

export type Metric = z.infer<typeof metricSchema> & BaseEntity;

export const enum TaskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  REVIEW = 'REVIEW',
  DONE = 'DONE'
}

export const enum Priority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH'
}

// Task Schema
export const taskSchema = z.object({
  title: z.string(),
  description: z.string(),
  status: z.string(),
  assigneeId: z.string().optional(),
  dueDate: z.date().optional(),
  priority: z.string(),
  projectId: z.string(),
});

export type Task = z.infer<typeof taskSchema> & BaseEntity;

export const enum DocumentType {
  SPECIFICATION = 'SPECIFICATION',
  DESIGN = 'DESIGN',
  DOCUMENTATION = 'DOCUMENTATION',
  OTHER = 'OTHER'
}

// Document Schema
export const documentSchema = z.object({
  title: z.string(),
  content: z.string(),
  type: z.string(),
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
  reportsTo: z.string().nullable(),
});

export type TeamMember = z.infer<typeof teamMemberSchema> & BaseEntity;

export const enum ProjectStatus {
  ACTIVE = 'ACTIVE',
  ON_HOLD = 'ON_HOLD',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED'
}

// Project Schema
export const projectSchema = z.object({
  name: z.string(),
  description: z.string(),
  status: z.string(),
  startDate: z.date(),
  endDate: z.date().optional(),
  teamIds: z.array(z.string()),
});

export type Project = z.infer<typeof projectSchema> & BaseEntity;

export const enum AgentStatus {
  ACTIVE = 'active',
  IDLE = 'idle'
}

// Agent Schema
export const agentSchema = z.object({
  id: z.string(),
  name: z.string(),
  handle: z.string(),
  status: z.string(),
});

export type Agent = z.infer<typeof agentSchema>;



// Message Schema
export const messageSchema = z.object({
  id: z.string(),
  content: z.string(),
  sender: z.string(),
  timestamp: z.string(),
  agentId: z.string(),
});

export type Message = z.infer<typeof messageSchema>;
