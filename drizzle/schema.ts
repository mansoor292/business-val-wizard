import { pgTable, uuid, text, timestamp, integer, unique, foreignKey } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const agents = pgTable("agents", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	name: text().notNull(),
	handle: text().notNull(),
	status: text().notNull(),
});

export const comments = pgTable("comments", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
	content: text().notNull(),
	authorId: uuid("author_id").notNull(),
	projectId: uuid("project_id").notNull(),
	taskId: uuid("task_id"),
	documentId: uuid("document_id"),
});

export const documents = pgTable("documents", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
	title: text().notNull(),
	content: text().notNull(),
	type: text().notNull(),
	projectId: uuid("project_id").notNull(),
});

export const chats = pgTable("chats", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
	participantId: text("participant_id").notNull(),
	participantType: text("participant_type").notNull(),
	lastMessageAt: timestamp("last_message_at", { mode: 'string' }).notNull(),
	status: text().notNull(),
});

export const initiatives = pgTable("initiatives", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
	title: text().notNull(),
	description: text().notNull(),
	status: text().notNull(),
	startDate: timestamp("start_date", { mode: 'string' }),
	endDate: timestamp("end_date", { mode: 'string' }),
	valuePropositionIds: text("value_proposition_ids").array().notNull(),
});

export const metrics = pgTable("metrics", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
	name: text().notNull(),
	description: text().notNull(),
	target: integer().notNull(),
	current: integer().notNull(),
	unit: text().notNull(),
	initiativeId: uuid("initiative_id").notNull(),
	trend: text(),
});

export const projects = pgTable("projects", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
	name: text().notNull(),
	description: text().notNull(),
	status: text().notNull(),
	startDate: timestamp("start_date", { mode: 'string' }).notNull(),
	endDate: timestamp("end_date", { mode: 'string' }),
	teamIds: text("team_ids").array().notNull(),
});

export const tasks = pgTable("tasks", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
	title: text().notNull(),
	description: text().notNull(),
	status: text().notNull(),
	assigneeId: uuid("assignee_id"),
	dueDate: timestamp("due_date", { mode: 'string' }),
	priority: text().notNull(),
	projectId: uuid("project_id").notNull(),
});

export const teamMembers = pgTable("team_members", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
	name: text().notNull(),
	role: text().notNull(),
	email: text().notNull(),
	avatar: text(),
	skills: text().array(),
	department: text().notNull(),
	reportsTo: uuid("reports_to"),
}, (table) => [
	unique("team_members_email_unique").on(table.email),
]);

export const valuePropositions = pgTable("value_propositions", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
	title: text().notNull(),
	description: text().notNull(),
	impact: text().notNull(),
	effort: text().notNull(),
	confidence: text().notNull(),
});

export const chatMessages = pgTable("chat_messages", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
	chatId: uuid("chat_id").notNull(),
	content: text().notNull(),
	sender: text().notNull(),
	timestamp: timestamp({ mode: 'string' }).notNull(),
	metadata: text(),
}, (table) => [
	foreignKey({
			columns: [table.chatId],
			foreignColumns: [chats.id],
			name: "chat_messages_chat_id_chats_id_fk"
		}),
]);
