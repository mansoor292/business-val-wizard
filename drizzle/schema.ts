import { pgTable, uuid, text, timestamp, integer, unique, foreignKey, char, varchar, json, doublePrecision, date, boolean, bigint, numeric, time, uniqueIndex, index, pgView, pgEnum } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

// Enums
export const enumCharpLogCharpStatus = pgEnum("enum_charpLog_charpStatus", ['C', 'H', 'A', 'R', 'P', 'D'])
export const enumKpiCharpStatus = pgEnum("enum_kpi_charpStatus", ['C', 'H', 'A', 'R', 'P'])
export const enumMilestonesCharpStatus = pgEnum("enum_milestones_charpStatus", ['C', 'H', 'A', 'R', 'P', 'D'])

// Industry and Organization
export const industry = pgTable("Industry", {
	industryId: char("IndustryID", { length: 36 }).primaryKey().notNull(),
	industryName: varchar("IndustryName", { length: 255 }),
	deletedAt: timestamp("DeletedAt", { withTimezone: true, mode: 'string' }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
});

export const organization = pgTable("organization", {
	orgId: char({ length: 36 }).primaryKey().notNull(),
	orgName: varchar({ length: 255 }),
	address: varchar({ length: 255 }),
	city: varchar({ length: 255 }),
	logoUrl: varchar({ length: 255 }),
	secretCode: varchar({ length: 255 }),
	isActive: boolean().default(true),
	startDate: date(),
	endDate: date(),
	email: varchar({ length: 255 }).default('255'),
	phoneNumber: varchar({ length: 15 }),
	mission: varchar({ length: 500 }),
	vision: varchar({ length: 500 }),
	values: varchar({ length: 500 }),
	outcomeStatement: varchar({ length: 10000 }),
	features: json(),
	industryId: char("IndustryID", { length: 36 }),
	isStartup: boolean("IsStartup"),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
}, (table) => [
	foreignKey({
		columns: [table.industryId],
		foreignColumns: [industry.industryId],
		name: "constraint_fk_organization_industryid"
	}).onDelete("cascade"),
	index("idx_organization_industryid").on(table.industryId),
]);

// Department and Role
export const department = pgTable("department", {
	depId: char({ length: 36 }).primaryKey().notNull(),
	deptName: varchar({ length: 255 }),
	orgId: char({ length: 36 }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
}, (table) => [
	foreignKey({
		columns: [table.orgId],
		foreignColumns: [organization.orgId],
		name: "department_orgID_fkey"
	}).onUpdate("cascade").onDelete("set null"),
	index("idx_department_orgid").on(table.orgId),
]);

export const role = pgTable("role", {
	rId: char({ length: 36 }).primaryKey().notNull(),
	roleName: varchar({ length: 255 }),
	leval: varchar({ length: 255 }),
	depId: char({ length: 36 }),
	deletedAt: timestamp({ withTimezone: true, mode: 'string' }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
}, (table) => [
	foreignKey({
		columns: [table.depId],
		foreignColumns: [department.depId],
		name: "role_depID_fkey"
	}).onUpdate("cascade").onDelete("set null"),
	index("idx_role_depid").on(table.depId),
]);

// Users
export const users = pgTable("users", {
	uId: char({ length: 36 }).primaryKey().notNull(),
	name: varchar({ length: 255 }),
	email: varchar({ length: 255 }),
	password: varchar({ length: 255 }),
	rId: char({ length: 36 }),
	lname: varchar({ length: 255 }),
	statement: varchar({ length: 10485760 }).default('0'),
	roleAdmin: varchar({ length: 255 }).default('0'),
	resetCode: varchar({ length: 255 }).default('0'),
	info: json(),
	coachUserId: varchar({ length: 255 }),
	isCoach: boolean(),
	managerUserId: varchar({ length: 255 }),
	deactivationDate: timestamp({ withTimezone: true, mode: 'string' }),
	phoneNumber: varchar({ length: 15 }),
	invitedAt: timestamp("InvitedAt", { withTimezone: true, mode: 'string' }),
	textNotifications: boolean("TextNotifications").default(false).notNull(),
	avatar: varchar({ length: 255 }),
	depId: char({ length: 36 }),
	skills: text().array(),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
}, (table) => [
	foreignKey({
		columns: [table.rId],
		foreignColumns: [role.rId],
		name: "users_rID_fkey"
	}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
		columns: [table.depId],
		foreignColumns: [department.depId],
		name: "users_depID_fkey"
	}).onUpdate("cascade").onDelete("set null"),
	unique("users_email_key").on(table.email),
	index("idx_users_rid").on(table.rId),
	index("idx_users_depid").on(table.depId),
]);

// Existing tables with modifications
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
	authorId: char("author_id", { length: 36 }).notNull(),
	projectId: uuid("project_id").notNull(),
	taskId: uuid("task_id"),
	documentId: uuid("document_id"),
}, (table) => [
	foreignKey({
		columns: [table.authorId],
		foreignColumns: [users.uId],
		name: "comments_author_id_users_uid_fk"
	}).onUpdate("cascade").onDelete("cascade"),
	index("idx_comments_authorid").on(table.authorId),
]);

export const documents = pgTable("documents", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
	title: text().notNull(),
	content: text().notNull(),
	type: text().notNull(),
	projectId: uuid("project_id").notNull(),
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
	orgId: char({ length: 36 }),
}, (table) => [
	foreignKey({
		columns: [table.orgId],
		foreignColumns: [organization.orgId],
		name: "projects_org_id_organization_orgid_fk"
	}).onUpdate("cascade").onDelete("set null"),
	index("idx_projects_orgid").on(table.orgId),
]);

export const tasks = pgTable("tasks", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
	title: text().notNull(),
	description: text().notNull(),
	status: text().notNull(),
	assigneeId: char("assignee_id", { length: 36 }),
	dueDate: timestamp("due_date", { mode: 'string' }),
	priority: text().notNull(),
	projectId: uuid("project_id").notNull(),
}, (table) => [
	foreignKey({
		columns: [table.assigneeId],
		foreignColumns: [users.uId],
		name: "tasks_assignee_id_users_uid_fk"
	}).onUpdate("cascade").onDelete("set null"),
	index("idx_tasks_assigneeid").on(table.assigneeId),
]);

export const chats = pgTable("chats", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow(),
	participantId: text("participant_id").notNull(),
	participantType: text("participant_type").notNull(),
	lastMessageAt: timestamp("last_message_at", { mode: 'string' }).notNull(),
	status: text().notNull(),
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
	index("idx_chat_messages_chatid").on(table.chatId),
]);

// KPI System
export const standardKpi = pgTable("StandardKpi", {
	standardKpiId: char("StandardKpiId", { length: 36 }).primaryKey().notNull(),
	unit: varchar({ length: 255 }),
	objective: varchar({ length: 255 }),
	target: numeric({ precision: 18, scale: 5 }),
	reportingFrequency: varchar({ length: 255 }),
	industry: varchar({ length: 255 }),
	appliesToStartup: boolean(),
	isCorporateKpi: boolean().default(false),
	driverId: varchar({ length: 255 }),
	level: integer(),
	kpiType: varchar({ length: 255 }),
	performanceDirection: varchar("PerformanceDirection", { length: 255 }),
	deletedAt: timestamp({ withTimezone: true, mode: 'string' }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
});

export const standardMilestone = pgTable("StandardMilestone", {
	standardMilestoneId: char("StandardMilestoneId", { length: 36 }).primaryKey().notNull(),
	achieveText: varchar("AchieveText", { length: 255 }),
	dueDateIncrement: integer("DueDateIncrement"),
	milestoneNote: varchar("MilestoneNote", { length: 1000 }),
	standardKpiId: char("StandardKpiId", { length: 36 }),
	deletedAt: timestamp("DeletedAt", { withTimezone: true, mode: 'string' }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
}, (table) => [
	foreignKey({
		columns: [table.standardKpiId],
		foreignColumns: [standardKpi.standardKpiId],
		name: "StandardMilestone_StandardKpiId_fkey"
	}).onUpdate("cascade").onDelete("cascade"),
	index("idx_standardmilestone_standardkpiid").on(table.standardKpiId),
]);

export const kpi = pgTable("kpi", {
	kpiId: char({ length: 36 }).primaryKey().notNull(),
	qty: varchar({ length: 255 }),
	unit: varchar({ length: 255 }),
	objective: varchar({ length: 255 }),
	dependFlag: boolean().default(false),
	charpStatus: enumKpiCharpStatus().notNull(),
	dueData: date(),
	driverId: char({ length: 36 }),
	uId: char({ length: 36 }),
	achieveQty: varchar({ length: 255 }).default('0'),
	isCorporateKpi: boolean(),
	performanceDirection: varchar("PerformanceDirection", { length: 16 }),
	standardKpiId: char("StandardKpiId", { length: 36 }),
	kpiType: varchar({ length: 16 }),
	deletedAt: timestamp("DeletedAt", { withTimezone: true, mode: 'string' }),
	reportingFrequency: varchar({ length: 32 }),
	parentKpiId: char("ParentKpiID", { length: 36 }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
}, (table) => [
	foreignKey({
		columns: [table.uId],
		foreignColumns: [users.uId],
		name: "kpi_uID_fkey"
	}).onUpdate("cascade").onDelete("set null"),
	index("idx_kpi_uid").on(table.uId),
]);

export const kpiHistory = pgTable("kpiHistory", {
	kpiHistoryId: char({ length: 36 }).primaryKey().notNull(),
	kpiId: varchar({ length: 255 }),
	metricType: varchar({ length: 255 }),
	amount: doublePrecision(),
	frequency: varchar({ length: 255 }),
	reportDate: timestamp({ withTimezone: true, mode: 'string' }),
	budgetAmount: doublePrecision(),
	actualAmount: doublePrecision(),
	deletedAt: timestamp({ withTimezone: true, mode: 'string' }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
}, (table) => [
	foreignKey({
		columns: [table.kpiId],
		foreignColumns: [kpi.kpiId],
		name: "kpiHistory_kpiID_fkey"
	}).onUpdate("cascade").onDelete("cascade"),
	index("idx_kpihistory_kpiid").on(table.kpiId),
]);

export const kpiDelegate = pgTable("kpiDelegate", {
	kpiDelegateId: char({ length: 36 }).primaryKey().notNull(),
	uId: varchar({ length: 255 }).notNull(),
	kpiId: varchar({ length: 255 }).notNull(),
	delegateStatus: varchar({ length: 255 }).notNull(),
	deactivationDate: timestamp({ withTimezone: true, mode: 'string' }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
}, (table) => [
	foreignKey({
		columns: [table.kpiId],
		foreignColumns: [kpi.kpiId],
		name: "kpiDelegate_kpiID_fkey"
	}).onUpdate("cascade").onDelete("cascade"),
	foreignKey({
		columns: [table.uId],
		foreignColumns: [users.uId],
		name: "kpiDelegate_uID_fkey"
	}).onUpdate("cascade").onDelete("cascade"),
	index("idx_kpidelegate_kpiid").on(table.kpiId),
	index("idx_kpidelegate_uid").on(table.uId),
]);

// Meeting System
export const meeting = pgTable("meeting", {
	meetingId: varchar({ length: 36 }).primaryKey().notNull(),
	meetingName: varchar({ length: 100 }).notNull(),
	meetingFrequency: varchar({ length: 25 }).notNull(),
	uId: varchar({ length: 36 }).notNull(),
	meetingDate: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	meetingInterval: varchar({ length: 15 }),
	timerData: json(),
	deactivationDate: timestamp({ withTimezone: true, mode: 'string' }),
	standardMeetingId: char("StandardMeetingId", { length: 36 }),
	frequencyInterval: integer(),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
}, (table) => [
	foreignKey({
		columns: [table.uId],
		foreignColumns: [users.uId],
		name: "meeting_uID_fkey"
	}).onUpdate("cascade").onDelete("set null"),
	index("idx_meeting_uid").on(table.uId),
]);

export const meetingHistory = pgTable("meetingHistory", {
	meetingHistoryId: varchar({ length: 36 }).primaryKey().notNull(),
	meetingId: varchar({ length: 36 }),
	meetingName: varchar({ length: 100 }).notNull(),
	uId: varchar({ length: 36 }).notNull(),
	meetingDate: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	timerData: json(),
	meetingScore: integer(),
	scoreNotes: varchar(),
	meetingNotes: varchar(),
	deactivationDate: timestamp({ withTimezone: true, mode: 'string' }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
}, (table) => [
	foreignKey({
		columns: [table.meetingId],
		foreignColumns: [meeting.meetingId],
		name: "meetingHistory_meetingId_fkey"
	}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
		columns: [table.uId],
		foreignColumns: [users.uId],
		name: "meetingHistory_uID_fkey"
	}).onUpdate("cascade").onDelete("set null"),
	index("idx_meetinghistory_meetingid").on(table.meetingId),
	index("idx_meetinghistory_uid").on(table.uId),
]);

export const meetingUser = pgTable("meetingUser", {
	meetingUserId: varchar({ length: 36 }).primaryKey().notNull(),
	meetingId: varchar({ length: 36 }).notNull(),
	uId: varchar({ length: 36 }).notNull(),
	userRole: varchar({ length: 20 }),
	dataDisplay: boolean("DataDisplay").default(true),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
}, (table) => [
	foreignKey({
		columns: [table.uId],
		foreignColumns: [users.uId],
		name: "meetingUser_uID_fkey"
	}).onUpdate("cascade").onDelete("set null"),
	index("idx_meetinguser_uid").on(table.uId),
]);

export const meetingUserHistory = pgTable("meetingUserHistory", {
	meetingUserHistoryId: varchar({ length: 36 }).primaryKey().notNull(),
	meetingHistoryId: varchar({ length: 36 }).notNull(),
	uId: varchar({ length: 36 }).notNull(),
	userStatus: varchar({ length: 20 }).notNull(),
	userRole: varchar({ length: 20 }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
}, (table) => [
	foreignKey({
		columns: [table.uId],
		foreignColumns: [users.uId],
		name: "meetingUserHistory_uID_fkey"
	}).onUpdate("cascade").onDelete("set null"),
	index("idx_meetinguserhistory_uid").on(table.uId),
]);

export const meetingKpi = pgTable("MeetingKpi", {
	meetingKpiId: char("MeetingKpiId", { length: 36 }).primaryKey().notNull(),
	meetingId: char({ length: 36 }).notNull(),
	kpiId: char({ length: 36 }).notNull(),
	deletedAt: timestamp({ withTimezone: true, mode: 'string' }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
}, (table) => [
	foreignKey({
		columns: [table.meetingId],
		foreignColumns: [meeting.meetingId],
		name: "MeetingKpi_fkey_MeetingId"
	}),
	foreignKey({
		columns: [table.kpiId],
		foreignColumns: [kpi.kpiId],
		name: "MeetingKpi_fkey_kpiID"
	}),
	index("idx_meetingkpi_meetingid").on(table.meetingId),
	index("idx_meetingkpi_kpiid").on(table.kpiId),
]);

// External Authentication System
export const externalApp = pgTable("ExternalApp", {
	externalAppId: char("ExternalAppID", { length: 36 }).primaryKey().notNull(),
	name: varchar("Name", { length: 36 }).notNull(),
	authenticationUrl: varchar("AuthenticationURL", { length: 256 }).notNull(),
	logoPath: varchar("LogoPath", { length: 128 }),
	authorizationHeader: varchar("AuthorizationHeader", { length: 256 }),
	redirectUri: varchar("Redirect_URI", { length: 128 }),
	scope: varchar("Scope", { length: 64 }),
	deletedAt: timestamp("DeletedAt", { withTimezone: true, mode: 'string' }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
});

export const externalAppEndpoint = pgTable("ExternalAppEndpoint", {
	externalAppEndpointId: char("ExternalAppEndpointId", { length: 36 }).primaryKey().notNull(),
	externalAppId: char("ExternalAppID", { length: 36 }).notNull(),
	endpointName: varchar("EndpointName", { length: 32 }).notNull(),
	endpointPath: varchar("EndpointPath", { length: 255 }),
	endpointStatus: varchar("EndpointStatus", { length: 16 }).notNull(),
	deletedAt: timestamp("DeletedAt", { withTimezone: true, mode: 'string' }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
}, (table) => [
	foreignKey({
		columns: [table.externalAppId],
		foreignColumns: [externalApp.externalAppId],
		name: "ExternalAppEndpoint_fkey_ExternalAppId"
	}).onDelete("cascade"),
	index("idx_externalappendpoint_externalappid").on(table.externalAppId),
]);

export const externalAuthenticationType = pgTable("ExternalAuthenticationType", {
	externalAuthenticationTypeId: char("ExternalAuthenticationTypeID", { length: 36 }).primaryKey().notNull(),
	authenticationType: varchar("AuthenticationType", { length: 16 }).notNull(),
	deletedAt: timestamp("DeletedAt", { withTimezone: true, mode: 'string' }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
});

export const externalAuthentication = pgTable("ExternalAuthentication", {
	externalAuthenticationId: char("ExternalAuthenticationID", { length: 36 }).primaryKey().notNull(),
	uId: char({ length: 36 }).notNull(),
	configuration: json("Configuration").notNull(),
	externalAppId: char("ExternalAppID", { length: 36 }).notNull(),
	externalAuthenticationTypeId: char("ExternalAuthenticationTypeID", { length: 36 }).notNull(),
	deletedAt: timestamp("DeletedAt", { withTimezone: true, mode: 'string' }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
}, (table) => [
	uniqueIndex("idx_ExternalAuthentication_BusinessKey").using("btree", table.uId.asc().nullsLast().op("bpchar_ops"), table.externalAppId.asc().nullsLast().op("bpchar_ops")),
	foreignKey({
		columns: [table.externalAppId],
		foreignColumns: [externalApp.externalAppId],
		name: "fk_ExternalApp"
	}),
	foreignKey({
		columns: [table.externalAuthenticationTypeId],
		foreignColumns: [externalAuthenticationType.externalAuthenticationTypeId],
		name: "fk_ExternalAuthenticationType"
	}),
	index("idx_externalauthentication_externalappid").on(table.externalAppId),
	index("idx_externalauthentication_externalauthenticationtypeid").on(table.externalAuthenticationTypeId),
]);

export const externalAuthenticationKpi = pgTable("ExternalAuthenticationKpi", {
	externalAuthenticationKpiId: char("ExternalAuthenticationKpiID", { length: 36 }).primaryKey().notNull(),
	externalAuthenticationId: char("ExternalAuthenticationID", { length: 36 }).notNull(),
	kpiId: char({ length: 36 }).notNull(),
	dataEndpoint: varchar("DataEndpoint", { length: 256 }),
	dataLogic: varchar("DataLogic"),
	externalAppEndpointId: char("ExternalAppEndpointId", { length: 36 }),
	deletedAt: timestamp("DeletedAt", { withTimezone: true, mode: 'string' }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
}, (table) => [
	foreignKey({
		columns: [table.externalAuthenticationId],
		foreignColumns: [externalAuthentication.externalAuthenticationId],
		name: "fk_externalauthenticationkpi_externalauthentication"
	}).onDelete("cascade"),
	foreignKey({
		columns: [table.kpiId],
		foreignColumns: [kpi.kpiId],
		name: "fk_externalauthenticationkpi_kpi"
	}).onDelete("cascade"),
	index("idx_externalauthenticationkpi_externalauthenticationid").on(table.externalAuthenticationId),
	index("idx_externalauthenticationkpi_kpiid").on(table.kpiId),
]);
