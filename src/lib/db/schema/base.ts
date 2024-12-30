import { pgTable, text, timestamp, integer, boolean, uuid } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// Base columns for all tables
const baseColumns = {
  id: uuid('id').primaryKey().defaultRandom(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow()
};

// Value Proposition Table
export const valuePropositions = pgTable('value_propositions', {
  ...baseColumns,
  title: text('title').notNull(),
  description: text('description').notNull(),
  impact: text('impact', { enum: ['LOW', 'MEDIUM', 'HIGH'] }).notNull(),
  effort: text('effort', { enum: ['LOW', 'MEDIUM', 'HIGH'] }).notNull(),
  confidence: text('confidence', { enum: ['LOW', 'MEDIUM', 'HIGH'] }).notNull()
});

// Initiative Table
export const initiatives = pgTable('initiatives', {
  ...baseColumns,
  title: text('title').notNull(),
  description: text('description').notNull(),
  status: text('status', { enum: ['DRAFT', 'IN_PROGRESS', 'COMPLETED', 'CANCELLED'] }).notNull(),
  startDate: timestamp('start_date'),
  endDate: timestamp('end_date'),
  valuePropositionIds: text('value_proposition_ids').array().notNull()
});

// Metric Table
export const metrics = pgTable('metrics', {
  ...baseColumns,
  name: text('name').notNull(),
  description: text('description').notNull(),
  target: integer('target').notNull(),
  current: integer('current').notNull(),
  unit: text('unit').notNull(),
  initiativeId: uuid('initiative_id').references(() => initiatives.id).notNull(),
  trend: text('trend', { enum: ['UP', 'DOWN', 'FLAT'] })
});

// Task Table
export const tasks = pgTable('tasks', {
  ...baseColumns,
  title: text('title').notNull(),
  description: text('description').notNull(),
  status: text('status', { enum: ['TODO', 'IN_PROGRESS', 'REVIEW', 'DONE'] }).notNull(),
  assigneeId: uuid('assignee_id').references(() => teamMembers.id),
  dueDate: timestamp('due_date'),
  priority: text('priority', { enum: ['LOW', 'MEDIUM', 'HIGH'] }).notNull(),
  projectId: uuid('project_id').references(() => projects.id).notNull()
});

// Document Table
export const documents = pgTable('documents', {
  ...baseColumns,
  title: text('title').notNull(),
  content: text('content').notNull(),
  type: text('type', { enum: ['SPECIFICATION', 'DESIGN', 'DOCUMENTATION', 'OTHER'] }).notNull(),
  projectId: uuid('project_id').references(() => projects.id).notNull()
});

// Comment Table
export const comments = pgTable('comments', {
  ...baseColumns,
  content: text('content').notNull(),
  authorId: uuid('author_id').references(() => teamMembers.id).notNull(),
  projectId: uuid('project_id').references(() => projects.id).notNull(),
  taskId: uuid('task_id').references(() => tasks.id),
  documentId: uuid('document_id').references(() => documents.id)
});

// Team Member Table
export const teamMembers = pgTable('team_members', {
  ...baseColumns,
  name: text('name').notNull(),
  role: text('role').notNull(),
  email: text('email').notNull().unique(),
  avatar: text('avatar'),
  skills: text('skills').array(),
  department: text('department').notNull(),
  reportsTo: uuid('reports_to')
});

// Add self-reference after table definition
export const teamMembersRelations = relations(teamMembers, ({ one }) => ({
  manager: one(teamMembers, {
    fields: [teamMembers.reportsTo],
    references: [teamMembers.id],
  }),
}));

// Project Table
export const projects = pgTable('projects', {
  ...baseColumns,
  name: text('name').notNull(),
  description: text('description').notNull(),
  status: text('status', { enum: ['ACTIVE', 'ON_HOLD', 'COMPLETED', 'CANCELLED'] }).notNull(),
  startDate: timestamp('start_date').notNull(),
  endDate: timestamp('end_date'),
  teamIds: text('team_ids').array().notNull()
});

// Agent Table
export const agents = pgTable('agents', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  handle: text('handle').notNull(),
  status: text('status', { enum: ['active', 'idle'] }).notNull()
});

// Message Table
export const messages = pgTable('messages', {
  id: uuid('id').primaryKey().defaultRandom(),
  content: text('content').notNull(),
  sender: text('sender', { enum: ['user', 'agent'] }).notNull(),
  timestamp: text('timestamp').notNull(),
  agentId: uuid('agent_id').references(() => agents.id).notNull()
});