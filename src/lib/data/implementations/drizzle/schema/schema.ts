import { pgTable, text, timestamp, integer, uuid } from 'drizzle-orm/pg-core';

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
  impact: text('impact').notNull(),
  effort: text('effort').notNull(),
  confidence: text('confidence').notNull()
});

// Initiative Table
export const initiatives = pgTable('initiatives', {
  ...baseColumns,
  title: text('title').notNull(),
  description: text('description').notNull(),
  status: text('status').notNull(),
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
  initiativeId: uuid('initiative_id').notNull(),
  trend: text('trend')
});

// Task Table
export const tasks = pgTable('tasks', {
  ...baseColumns,
  title: text('title').notNull(),
  description: text('description').notNull(),
  status: text('status').notNull(),
  assigneeId: uuid('assignee_id'),
  dueDate: timestamp('due_date'),
  priority: text('priority').notNull(),
  projectId: uuid('project_id').notNull()
});

// Document Table
export const documents = pgTable('documents', {
  ...baseColumns,
  title: text('title').notNull(),
  content: text('content').notNull(),
  type: text('type').notNull(),
  projectId: uuid('project_id').notNull()
});

// Comment Table
export const comments = pgTable('comments', {
  ...baseColumns,
  content: text('content').notNull(),
  authorId: uuid('author_id').notNull(),
  projectId: uuid('project_id').notNull(),
  taskId: uuid('task_id'),
  documentId: uuid('document_id')
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

// Project Table
export const projects = pgTable('projects', {
  ...baseColumns,
  name: text('name').notNull(),
  description: text('description').notNull(),
  status: text('status').notNull(),
  startDate: timestamp('start_date').notNull(),
  endDate: timestamp('end_date'),
  teamIds: text('team_ids').array().notNull()
});

// Agent Table
export const agents = pgTable('agents', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  handle: text('handle').notNull(),
  status: text('status').notNull()
});

// Chat Table
export const chats = pgTable('chats', {
  ...baseColumns,
  participantId: text('participant_id').notNull(),
  participantType: text('participant_type').notNull(),
  lastMessageAt: timestamp('last_message_at').notNull(),
  status: text('status').notNull()
});

// Chat Message Table
export const chatMessages = pgTable('chat_messages', {
  ...baseColumns,
  chatId: uuid('chat_id').references(() => chats.id).notNull(),
  content: text('content').notNull(),
  sender: text('sender').notNull(),
  timestamp: timestamp('timestamp').notNull(),
  metadata: text('metadata') // Optional JSON metadata
});
