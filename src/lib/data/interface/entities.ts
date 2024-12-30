import { z } from "zod";
import { BaseEntity } from "./base";

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
  reportsTo: z.string().nullable(),
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

// Agent Schema
export const agentSchema = z.object({
  id: z.string(),
  name: z.string(),
  handle: z.string(),
  status: z.enum(['active', 'idle']),
});

export type Agent = z.infer<typeof agentSchema>;

// Message Schema
export const messageSchema = z.object({
  id: z.string(),
  content: z.string(),
  sender: z.enum(['user', 'agent']),
  timestamp: z.string(),
  agentId: z.string(),
});

export type Message = z.infer<typeof messageSchema>;
