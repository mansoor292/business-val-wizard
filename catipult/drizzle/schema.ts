import { pgTable, foreignKey, char, varchar, integer, timestamp, json, doublePrecision, date, boolean, bigint, numeric, time, uniqueIndex, unique, index, pgView, pgEnum } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const enumCharpLogCharpStatus = pgEnum("enum_charpLog_charpStatus", ['C', 'H', 'A', 'R', 'P', 'D'])
export const enumInvitesStatus = pgEnum("enum_invites_status", ['invited', 'created'])
export const enumKpiCharpStatus = pgEnum("enum_kpi_charpStatus", ['C', 'H', 'A', 'R', 'P'])
export const enumKpilogCharpStatus = pgEnum("enum_kpilog_charpStatus", ['C', 'H', 'A', 'R', 'P'])
export const enumMilestonesCharpStatus = pgEnum("enum_milestones_charpStatus", ['C', 'H', 'A', 'R', 'P', 'D'])
export const enumRemainderRemainderType = pgEnum("enum_remainder_remainderType", ['daily', 'weekly', 'monthly', 'quarter', 'year', 'none'])


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
]);

export const standardMeeting = pgTable("StandardMeeting", {
	standardMeetingId: char("StandardMeetingId", { length: 36 }).primaryKey().notNull(),
	meetingName: varchar({ length: 255 }),
	meetingDate: timestamp({ withTimezone: true, mode: 'string' }),
	meetingFrequency: varchar({ length: 255 }),
	meetingInterval: varchar({ length: 255 }),
	deactivationDate: timestamp({ withTimezone: true, mode: 'string' }),
	timerData: json(),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	frequencyInterval: integer(),
});

export const department = pgTable("department", {
	depId: char({ length: 36 }).primaryKey().notNull(),
	deptName: varchar({ length: 255 }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	orgId: char({ length: 36 }),
}, (table) => [
	foreignKey({
			columns: [table.orgId],
			foreignColumns: [organization.orgId],
			name: "department_orgID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const industry = pgTable("Industry", {
	industryId: char("IndustryID", { length: 36 }).primaryKey().notNull(),
	industryName: varchar("IndustryName", { length: 255 }),
	deletedAt: timestamp("DeletedAt", { withTimezone: true, mode: 'string' }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
});

export const invites = pgTable("invites", {
	invId: char({ length: 36 }).primaryKey().notNull(),
	mobileNumber: varchar({ length: 255 }),
	email: varchar({ length: 255 }),
	status: enumInvitesStatus().notNull(),
	code: varchar({ length: 255 }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	rId: char({ length: 36 }),
	uId: char({ length: 36 }),
	managerUserId: varchar({ length: 36 }),
}, (table) => [
	foreignKey({
			columns: [table.rId],
			foreignColumns: [role.rId],
			name: "invites_rID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.uId],
			foreignColumns: [users.uId],
			name: "invites_uID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const deviceregister = pgTable("deviceregister", {
	depId: char({ length: 36 }).primaryKey().notNull(),
	secretKey: json(),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	uId: char({ length: 36 }),
}, (table) => [
	foreignKey({
			columns: [table.uId],
			foreignColumns: [users.uId],
			name: "deviceregister_uID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const kpiHistory = pgTable("kpiHistory", {
	kpiHistoryId: char({ length: 36 }).primaryKey().notNull(),
	kpiId: varchar({ length: 255 }),
	metricType: varchar({ length: 255 }),
	amount: doublePrecision(),
	frequency: varchar({ length: 255 }),
	reportDate: timestamp({ withTimezone: true, mode: 'string' }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	budgetAmount: doublePrecision(),
	actualAmount: doublePrecision(),
	deletedAt: timestamp({ withTimezone: true, mode: 'string' }),
}, (table) => [
	foreignKey({
			columns: [table.kpiId],
			foreignColumns: [kpi.kpiId],
			name: "kpiHistory_kpiID_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
]);

export const issue = pgTable("issue", {
	issueId: varchar({ length: 36 }).primaryKey().notNull(),
	issueStatus: varchar().notNull(),
	issueName: varchar().notNull(),
	issueNote: varchar(),
	uId: varchar({ length: 36 }),
	mileId: varchar({ length: 36 }),
	deactivationDate: timestamp({ withTimezone: true, mode: 'string' }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	issueType: varchar({ length: 16 }),
	dueDate: date("DueDate"),
}, (table) => [
	foreignKey({
			columns: [table.mileId],
			foreignColumns: [milestones.mileId],
			name: "issue_milestoneId_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.uId],
			foreignColumns: [users.uId],
			name: "issue_uID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const resetLog = pgTable("ResetLog", {
	rstId: char({ length: 36 }).primaryKey().notNull(),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	uId: char({ length: 36 }),
}, (table) => [
	foreignKey({
			columns: [table.uId],
			foreignColumns: [users.uId],
			name: "ResetLog_uID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const charpLog = pgTable("charpLog", {
	charplogId: char({ length: 36 }).primaryKey().notNull(),
	qty: varchar({ length: 255 }),
	comments: varchar({ length: 255 }),
	charpStatus: enumCharpLogCharpStatus(),
	isupdate: boolean().default(false),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	mileId: char({ length: 36 }),
	uId: char({ length: 36 }),
}, (table) => [
	foreignKey({
			columns: [table.mileId],
			foreignColumns: [milestones.mileId],
			name: "charpLog_mileID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.uId],
			foreignColumns: [users.uId],
			name: "charpLog_uID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const drivers = pgTable("drivers", {
	driverId: char({ length: 36 }).primaryKey().notNull(),
	driverName: varchar({ length: 255 }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	driverImage: varchar({ length: 255 }).default(1),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	seqNo: bigint({ mode: "number" }).default(0),
	driverImageInactive: varchar({ length: 255 }).default(0),
	driverVideo: varchar().default(0),
});

export const featureRequest = pgTable("featureRequest", {
	featureRequestId: char({ length: 36 }).primaryKey().notNull(),
	uId: varchar({ length: 255 }),
	featureRequestType: varchar({ length: 255 }),
	featureRequestDescription: varchar({ length: 255 }),
	featureRequestStatus: varchar({ length: 255 }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.uId],
			foreignColumns: [users.uId],
			name: "featureRequest_uID_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
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
]);

export const meetingUserHistory = pgTable("meetingUserHistory", {
	meetingUserHistoryId: varchar({ length: 36 }).primaryKey().notNull(),
	meetingHistoryId: varchar({ length: 36 }).notNull(),
	uId: varchar({ length: 36 }).notNull(),
	userStatus: varchar({ length: 20 }).notNull(),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	userRole: varchar({ length: 20 }),
}, (table) => [
	foreignKey({
			columns: [table.uId],
			foreignColumns: [users.uId],
			name: "meetingUserHistory_uID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const leval = pgTable("leval", {
	levalId: char({ length: 36 }).primaryKey().notNull(),
	levalName: varchar({ length: 255 }),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	levalNo: bigint({ mode: "number" }).default(0),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
});

export const meeting = pgTable("meeting", {
	meetingId: varchar({ length: 36 }).primaryKey().notNull(),
	meetingName: varchar({ length: 100 }).notNull(),
	meetingFrequency: varchar({ length: 25 }).notNull(),
	uId: varchar({ length: 36 }).notNull(),
	meetingDate: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	meetingInterval: varchar({ length: 15 }),
	timerData: json(),
	deactivationDate: timestamp({ withTimezone: true, mode: 'string' }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	standardMeetingId: char("StandardMeetingId", { length: 36 }),
	frequencyInterval: integer(),
}, (table) => [
	foreignKey({
			columns: [table.uId],
			foreignColumns: [users.uId],
			name: "meeting_uID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const onboardingstatus = pgTable("onboardingstatus", {
	onboardingStatusId: char({ length: 36 }).primaryKey().notNull(),
	isActive: boolean().default(true),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	pagecontentId: char({ length: 36 }),
	uId: char({ length: 36 }),
}, (table) => [
	foreignKey({
			columns: [table.uId],
			foreignColumns: [users.uId],
			name: "onboardingstatus_uID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const meetingUser = pgTable("meetingUser", {
	meetingUserId: varchar({ length: 36 }).primaryKey().notNull(),
	meetingId: varchar({ length: 36 }).notNull(),
	uId: varchar({ length: 36 }).notNull(),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	userRole: varchar({ length: 20 }),
	dataDisplay: boolean("DataDisplay").default(true),
}, (table) => [
	foreignKey({
			columns: [table.uId],
			foreignColumns: [users.uId],
			name: "meetingUser_uID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const kpilog = pgTable("kpilog", {
	kpilogId: char({ length: 36 }).primaryKey().notNull(),
	qty: varchar({ length: 255 }),
	comments: varchar({ length: 255 }),
	charpStatus: enumKpilogCharpStatus().notNull(),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	kpiId: char({ length: 36 }),
	uId: char({ length: 36 }),
}, (table) => [
	foreignKey({
			columns: [table.kpiId],
			foreignColumns: [kpi.kpiId],
			name: "kpilog_kpiID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.uId],
			foreignColumns: [users.uId],
			name: "kpilog_uID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const notification = pgTable("notification", {
	notifyId: char({ length: 36 }).primaryKey().notNull(),
	isRead: boolean().default(false),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	uId: char({ length: 36 }),
	mileId: char({ length: 36 }),
	dueDate: date(),
}, (table) => [
	foreignKey({
			columns: [table.uId],
			foreignColumns: [users.uId],
			name: "notification_uID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const questiontype = pgTable("questiontype", {
	qtId: char({ length: 36 }).primaryKey().notNull(),
	typeName: varchar({ length: 255 }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
});

export const portfolioGroup = pgTable("portfolioGroup", {
	portfolioGroupId: varchar({ length: 36 }).primaryKey().notNull(),
	portfolioGroupName: varchar({ length: 255 }).notNull(),
	uId: varchar({ length: 36 }).notNull(),
	deactivationDate: timestamp({ withTimezone: true, mode: 'string' }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.uId],
			foreignColumns: [users.uId],
			name: "portfolioGroup_uID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const personalityProfile = pgTable("personalityProfile", {
	personalityProfileId: varchar({ length: 36 }).primaryKey().notNull(),
	profileName: varchar({ length: 255 }),
	typeDescription: varchar({ length: 255 }),
	seqNo: integer(),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
});

export const quarterkpiassign = pgTable("quarterkpiassign", {
	qkaId: char({ length: 36 }).primaryKey().notNull(),
	targetAchieve: varchar({ length: 255 }),
	status: boolean().default(false),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	qsId: char({ length: 36 }),
	mileId: char({ length: 36 }),
	uId: char({ length: 36 }),
}, (table) => [
	foreignKey({
			columns: [table.qsId],
			foreignColumns: [quartersplit.qsId],
			name: "quarterkpiassign_qsID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.uId],
			foreignColumns: [users.uId],
			name: "quarterkpiassign_uID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const questions = pgTable("questions", {
	queId: char({ length: 36 }).primaryKey().notNull(),
	question: varchar({ length: 255 }),
	isActive: boolean().default(false),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	qtId: char({ length: 36 }),
	driverId: char({ length: 36 }),
	seqNo: numeric({ precision: 10, scale:  2 }).default('0'),
}, (table) => [
	foreignKey({
			columns: [table.driverId],
			foreignColumns: [drivers.driverId],
			name: "questions_driverID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.qtId],
			foreignColumns: [questiontype.qtId],
			name: "questions_qtID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const quartersplit = pgTable("quartersplit", {
	qsId: char({ length: 36 }).primaryKey().notNull(),
	type: varchar({ length: 255 }),
	startDate: timestamp({ withTimezone: true, mode: 'string' }),
	endDate: timestamp({ withTimezone: true, mode: 'string' }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	uId: char({ length: 36 }),
}, (table) => [
	foreignKey({
			columns: [table.uId],
			foreignColumns: [users.uId],
			name: "quartersplit_uID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const remainder = pgTable("remainder", {
	remainderId: char({ length: 36 }).primaryKey().notNull(),
	remainderType: enumRemainderRemainderType().notNull(),
	time: time(),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	kpiId: char({ length: 36 }),
});

export const pagecontent = pgTable("pagecontent", {
	pagecontentId: char({ length: 36 }).primaryKey().notNull(),
	pageName: varchar({ length: 255 }),
	content: varchar({ length: 255 }),
	videoUrl: varchar({ length: 255 }),
	routers: varchar({ length: 255 }),
	nextRoute: varchar({ length: 255 }),
	nextPage: varchar({ length: 255 }),
	pageInfo: json(),
	isActive: boolean().default(true),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	driverId: char({ length: 36 }),
}, (table) => [
	foreignKey({
			columns: [table.driverId],
			foreignColumns: [drivers.driverId],
			name: "pagecontent_driverID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const section = pgTable("section", {
	sectionId: char({ length: 36 }).primaryKey().notNull(),
	sectionName: varchar({ length: 255 }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	driverId: char({ length: 36 }),
}, (table) => [
	foreignKey({
			columns: [table.driverId],
			foreignColumns: [drivers.driverId],
			name: "section_driverID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const userAssignment = pgTable("userAssignment", {
	userAssignmentId: char({ length: 36 }).primaryKey().notNull(),
	uId: varchar({ length: 255 }),
	kpiId: varchar({ length: 255 }),
	assignmentType: varchar({ length: 255 }),
	assignmentDisplayText: varchar({ length: 255 }),
	assignmentUrl: varchar({ length: 255 }),
	assignmentStatus: varchar({ length: 255 }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.kpiId],
			foreignColumns: [kpi.kpiId],
			name: "userAssignment_kpiID_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
	foreignKey({
			columns: [table.uId],
			foreignColumns: [users.uId],
			name: "userAssignment_uID_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
]);

export const userInvite = pgTable("userInvite", {
	userInviteId: varchar({ length: 36 }).primaryKey().notNull(),
	uId: varchar({ length: 36 }),
	inviteUid: varchar({ length: 36 }),
	inviteType: varchar({ length: 20 }),
	inviteStatus: varchar({ length: 20 }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.uId],
			foreignColumns: [users.uId],
			name: "userInvite_inviteUID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.uId],
			foreignColumns: [users.uId],
			name: "userInvite_uID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const sectioncompleted = pgTable("sectioncompleted", {
	sectioncompletedId: char({ length: 36 }).primaryKey().notNull(),
	isCompleted: boolean().default(false),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	sectionId: char({ length: 36 }),
	uId: char({ length: 36 }),
}, (table) => [
	foreignKey({
			columns: [table.sectionId],
			foreignColumns: [section.sectionId],
			name: "sectioncompleted_sectionID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.uId],
			foreignColumns: [users.uId],
			name: "sectioncompleted_uID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const settings = pgTable("settings", {
	settingId: char({ length: 36 }).primaryKey().notNull(),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	dateTrigger: date(),
});

export const userActivity = pgTable("userActivity", {
	userActivityId: varchar({ length: 36 }).primaryKey().notNull(),
	uId: varchar({ length: 36 }).notNull(),
	activityType: varchar({ length: 20 }).notNull(),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.uId],
			foreignColumns: [users.uId],
			name: "userActivity_uID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const todo = pgTable("todo", {
	todoId: char({ length: 36 }).primaryKey().notNull(),
	todoStatus: varchar({ length: 255 }),
	todoName: varchar({ length: 255 }),
	todoNote: varchar({ length: 255 }),
	issueId: varchar({ length: 255 }),
	deactivationDate: timestamp({ withTimezone: true, mode: 'string' }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.issueId],
			foreignColumns: [issue.issueId],
			name: "todo_issueId_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
]);

export const useranswer = pgTable("useranswer", {
	uanswId: char({ length: 36 }).primaryKey().notNull(),
	answer: varchar({ length: 255 }),
	rfpqId: varchar({ length: 255 }).default('123'),
	isActive: boolean().default(false),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	uId: char({ length: 36 }),
	queId: char({ length: 36 }),
	optionId: char({ length: 36 }),
	driverId: char({ length: 36 }),
}, (table) => [
	foreignKey({
			columns: [table.driverId],
			foreignColumns: [drivers.driverId],
			name: "useranswer_driverID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.optionId],
			foreignColumns: [option.optionId],
			name: "useranswer_optionID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.queId],
			foreignColumns: [questions.queId],
			name: "useranswer_queID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.uId],
			foreignColumns: [users.uId],
			name: "useranswer_uID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const useroutcome = pgTable("useroutcome", {
	uoId: char({ length: 36 }).primaryKey().notNull(),
	statement: varchar({ length: 255 }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	uId: char({ length: 36 }),
}, (table) => [
	foreignKey({
			columns: [table.uId],
			foreignColumns: [users.uId],
			name: "useroutcome_uID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const userPersonalityProfile = pgTable("userPersonalityProfile", {
	userPersonalityProfileId: varchar({ length: 36 }).primaryKey().notNull(),
	uId: varchar({ length: 36 }),
	personalityProfileId: varchar({ length: 36 }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.uId],
			foreignColumns: [users.uId],
			name: "userPersonalityProfile_uID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const rfp = pgTable("rfp", {
	rfpId: char({ length: 36 }).primaryKey().notNull(),
	qSelectId: char({ length: 36 }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	queId: char({ length: 36 }),
}, (table) => [
	foreignKey({
			columns: [table.queId],
			foreignColumns: [questions.queId],
			name: "rfp_queID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const standardKpi = pgTable("StandardKpi", {
	standardKpiId: char("StandardKpiId", { length: 36 }).primaryKey().notNull(),
	unit: varchar({ length: 255 }),
	objective: varchar({ length: 255 }),
	target: numeric({ precision: 18, scale:  5 }),
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
}, (table) => [
	foreignKey({
			columns: [table.driverId],
			foreignColumns: [drivers.driverId],
			name: "StandardKpi_driverID_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
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
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	deactivationDate: timestamp({ withTimezone: true, mode: 'string' }),
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
]);

export const portfolioGroupUser = pgTable("portfolioGroupUser", {
	portfolioGroupUserId: varchar({ length: 36 }).primaryKey().notNull(),
	portfolioGroupId: varchar({ length: 36 }).notNull(),
	uId: varchar({ length: 36 }).notNull(),
	deactivationDate: timestamp({ withTimezone: true, mode: 'string' }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.portfolioGroupId],
			foreignColumns: [portfolioGroup.portfolioGroupId],
			name: "portfolioGroupUser_portfolioGroupId_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.uId],
			foreignColumns: [users.uId],
			name: "portfolioGroupUser_uID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const milestones = pgTable("milestones", {
	mileId: char({ length: 36 }).primaryKey().notNull(),
	qty: varchar({ length: 255 }),
	achieveText: varchar({ length: 255 }),
	type: varchar({ length: 255 }),
	dueDate: date(),
	dependFlag: boolean().default(false),
	superReferUserId: varchar({ length: 255 }),
	charpStatus: enumMilestonesCharpStatus().default('C').notNull(),
	charpCount: integer().default(0),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	kpiId: char({ length: 36 }),
	uId: char({ length: 36 }),
	mileReferId: char({ length: 36 }),
	recurringFrequency: varchar({ length: 10 }),
	milestoneNote: varchar(),
	standardMilestoneId: char("StandardMilestoneId", { length: 36 }),
}, (table) => [
	foreignKey({
			columns: [table.kpiId],
			foreignColumns: [kpi.kpiId],
			name: "milestones_kpiID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.mileReferId],
			foreignColumns: [table.mileId],
			name: "milestones_mileReferID_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
	foreignKey({
			columns: [table.uId],
			foreignColumns: [users.uId],
			name: "milestones_uID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const option = pgTable("option", {
	optionId: char({ length: 36 }).primaryKey().notNull(),
	option: varchar({ length: 255 }),
	correctAns: boolean().default(false),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	queId: char({ length: 36 }),
}, (table) => [
	foreignKey({
			columns: [table.queId],
			foreignColumns: [questions.queId],
			name: "option_queID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const organization = pgTable("organization", {
	orgId: char({ length: 36 }).primaryKey().notNull(),
	orgName: varchar({ length: 255 }),
	address: varchar({ length: 255 }),
	city: varchar({ length: 255 }),
	logoUrl: varchar({ length: 255 }),
	secretCode: varchar({ length: 255 }),
	isActive: boolean().default(true),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	startDate: date(),
	endDate: date(),
	email: varchar({ length: 255 }).default(255),
	phoneNumber: varchar({ length: 15 }),
	mission: varchar({ length: 500 }),
	vision: varchar({ length: 500 }),
	values: varchar({ length: 500 }),
	outcomeStatement: varchar({ length: 10000 }),
	features: json(),
	industryId: char("IndustryID", { length: 36 }),
	isStartup: boolean("IsStartup"),
}, (table) => [
	foreignKey({
			columns: [table.industryId],
			foreignColumns: [industry.industryId],
			name: "constraint_fk_organization_industryid"
		}).onDelete("cascade"),
]);

export const userDataAccess = pgTable("userDataAccess", {
	userDataAccessId: varchar({ length: 36 }).primaryKey().notNull(),
	grantorUserId: varchar({ length: 36 }),
	granteeUserId: varchar({ length: 36 }),
	accessStatus: varchar({ length: 25 }),
	dataElement: varchar({ length: 25 }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.granteeUserId],
			foreignColumns: [users.uId],
			name: "userDataAccess_granteeUserId_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.grantorUserId],
			foreignColumns: [users.uId],
			name: "userDataAccess_grantorUserId_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const role = pgTable("role", {
	rId: char({ length: 36 }).primaryKey().notNull(),
	roleName: varchar({ length: 255 }),
	leval: varchar({ length: 255 }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	depId: char({ length: 36 }),
	deletedAt: timestamp({ withTimezone: true, mode: 'string' }),
}, (table) => [
	foreignKey({
			columns: [table.depId],
			foreignColumns: [department.depId],
			name: "role_depID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const meetingIssue = pgTable("MeetingIssue", {
	meetingIssueId: char("MeetingIssueId", { length: 36 }).primaryKey().notNull(),
	meetingId: char({ length: 36 }),
	issueId: char({ length: 36 }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }),
	deletedAt: timestamp({ withTimezone: true, mode: 'string' }),
}, (table) => [
	foreignKey({
			columns: [table.meetingId],
			foreignColumns: [meeting.meetingId],
			name: "fk_MeetingIssue_meetingId"
		}),
	foreignKey({
			columns: [table.issueId],
			foreignColumns: [issue.issueId],
			name: "fk_MeetingIssue_issueId"
		}),
]);

export const meetingKpi = pgTable("MeetingKpi", {
	meetingKpiId: char("MeetingKpiId", { length: 36 }).primaryKey().notNull(),
	meetingId: char({ length: 36 }).notNull(),
	kpiId: char({ length: 36 }).notNull(),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	deletedAt: timestamp({ withTimezone: true, mode: 'string' }),
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
]);

export const externalAuthentication = pgTable("ExternalAuthentication", {
	externalAuthenticationId: char("ExternalAuthenticationID", { length: 36 }).primaryKey().notNull(),
	uId: char({ length: 36 }).notNull(),
	configuration: json("Configuration").notNull(),
	externalAppId: char("ExternalAppID", { length: 36 }).notNull(),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	deletedAt: timestamp("DeletedAt", { withTimezone: true, mode: 'string' }),
	externalAuthenticationTypeId: char("ExternalAuthenticationTypeID", { length: 36 }).notNull(),
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
]);

export const externalAuthenticationType = pgTable("ExternalAuthenticationType", {
	externalAuthenticationTypeId: char("ExternalAuthenticationTypeID", { length: 36 }).primaryKey().notNull(),
	authenticationType: varchar("AuthenticationType", { length: 16 }).notNull(),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	deletedAt: timestamp("DeletedAt", { withTimezone: true, mode: 'string' }),
});

export const externalApp = pgTable("ExternalApp", {
	externalAppId: char("ExternalAppID", { length: 36 }).primaryKey().notNull(),
	name: varchar("Name", { length: 36 }).notNull(),
	authenticationUrl: varchar("AuthenticationURL", { length: 256 }).notNull(),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	deletedAt: timestamp("DeletedAt", { withTimezone: true, mode: 'string' }),
	logoPath: varchar("LogoPath", { length: 128 }),
	authorizationHeader: varchar("AuthorizationHeader", { length: 256 }),
	redirectUri: varchar("Redirect_URI", { length: 128 }),
	scope: varchar("Scope", { length: 64 }),
});

export const users = pgTable("users", {
	uId: char({ length: 36 }).primaryKey().notNull(),
	name: varchar({ length: 255 }),
	email: varchar({ length: 255 }),
	password: varchar({ length: 255 }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	rId: char({ length: 36 }),
	lname: varchar({ length: 255 }),
	statement: varchar({ length: 10485760 }).default(0),
	roleAdmin: varchar({ length: 255 }).default(0),
	resetCode: varchar({ length: 255 }).default(0),
	info: json(),
	coachUserId: varchar({ length: 255 }),
	isCoach: boolean(),
	managerUserId: varchar({ length: 255 }),
	deactivationDate: timestamp({ withTimezone: true, mode: 'string' }),
	phoneNumber: varchar({ length: 15 }),
	invitedAt: timestamp("InvitedAt", { withTimezone: true, mode: 'string' }),
	textNotifications: boolean("TextNotifications").default(false).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.rId],
			foreignColumns: [role.rId],
			name: "users_rID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	unique("users_email_key").on(table.email),
]);

export const externalAppEndpoint = pgTable("ExternalAppEndpoint", {
	externalAppEndpointId: char("ExternalAppEndpointId", { length: 36 }).primaryKey().notNull(),
	externalAppId: char("ExternalAppID", { length: 36 }).notNull(),
	endpointName: varchar("EndpointName", { length: 32 }).notNull(),
	endpointPath: varchar("EndpointPath", { length: 255 }),
	endpointStatus: varchar("EndpointStatus", { length: 16 }).notNull(),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	deletedAt: timestamp("DeletedAt", { withTimezone: true, mode: 'string' }),
}, (table) => [
	foreignKey({
			columns: [table.externalAppId],
			foreignColumns: [externalApp.externalAppId],
			name: "ExternalAppEndpoint_fkey_ExternalAppId"
		}).onDelete("cascade"),
]);

export const externalAuthenticationKpi = pgTable("ExternalAuthenticationKpi", {
	externalAuthenticationKpiId: char("ExternalAuthenticationKpiID", { length: 36 }).primaryKey().notNull(),
	externalAuthenticationId: char("ExternalAuthenticationID", { length: 36 }).notNull(),
	kpiId: char({ length: 36 }).notNull(),
	dataEndpoint: varchar("DataEndpoint", { length: 256 }),
	dataLogic: varchar("DataLogic"),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	deletedAt: timestamp("DeletedAt", { withTimezone: true, mode: 'string' }),
	externalAppEndpointId: char("ExternalAppEndpointId", { length: 36 }),
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
]);

export const kpi = pgTable("kpi", {
	kpiId: char({ length: 36 }).primaryKey().notNull(),
	qty: varchar({ length: 255 }),
	unit: varchar({ length: 255 }),
	objective: varchar({ length: 255 }),
	dependFlag: boolean().default(false),
	charpStatus: enumKpiCharpStatus().notNull(),
	dueData: date(),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	driverId: char({ length: 36 }),
	uId: char({ length: 36 }),
	achieveQty: varchar({ length: 255 }).default(0),
	isCorporateKpi: boolean(),
	performanceDirection: varchar("PerformanceDirection", { length: 16 }),
	standardKpiId: char("StandardKpiId", { length: 36 }),
	kpiType: varchar({ length: 16 }),
	deletedAt: timestamp("DeletedAt", { withTimezone: true, mode: 'string' }),
	reportingFrequency: varchar({ length: 32 }),
	parentKpiId: char("ParentKpiID", { length: 36 }),
}, (table) => [
	foreignKey({
			columns: [table.driverId],
			foreignColumns: [drivers.driverId],
			name: "kpi_driverID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
	foreignKey({
			columns: [table.uId],
			foreignColumns: [users.uId],
			name: "kpi_uID_fkey"
		}).onUpdate("cascade").onDelete("set null"),
]);

export const userChat = pgTable("UserChat", {
	userChatId: char("UserChatID", { length: 36 }).primaryKey().notNull(),
	uId: char({ length: 36 }).notNull(),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }).notNull(),
	deletedAt: timestamp({ withTimezone: true, mode: 'string' }),
}, (table) => [
	index("idx_UserChat_001").using("btree", table.uId.asc().nullsLast().op("timestamptz_ops"), table.createdAt.asc().nullsLast().op("timestamptz_ops")),
	foreignKey({
			columns: [table.uId],
			foreignColumns: [users.uId],
			name: "UserChat_fkey_UID"
		}).onDelete("cascade"),
]);
export const globalVwUserActivity = pgView("Global_vw_UserActivity", {	name: varchar({ length: 255 }),
	lname: varchar({ length: 255 }),
	userActivityId: varchar({ length: 36 }),
	uId: varchar({ length: 36 }),
	activityType: varchar({ length: 20 }),
	createdAt: timestamp({ withTimezone: true, mode: 'string' }),
	updatedAt: timestamp({ withTimezone: true, mode: 'string' }),
}).as(sql`SELECT u.name, u.lname, ua."userActivityId", ua."uID", ua."activityType", ua."createdAt", ua."updatedAt" FROM "userActivity" ua JOIN users u ON ua."uID"::bpchar = u."uID" WHERE 1 = 1`);

export const globalVwUserActivityByDay = pgView("Global_vw_UserActivityByDay", {	logInDate: date("LogInDate"),
	// You can use { mode: "bigint" } if numbers are exceeding js number limitations
	uniqueUserCount: bigint("UniqueUserCount", { mode: "number" }),
}).as(sql`SELECT gvua."createdAt"::date AS "LogInDate", count(DISTINCT gvua."uID") AS "UniqueUserCount" FROM "Global_vw_UserActivity" gvua WHERE 1 = 1 AND gvua."activityType"::text = 'log in'::text GROUP BY (gvua."createdAt"::date)`);

export const globalVwOrganization = pgView("Global_vw_Organization", {	orgId: char({ length: 36 }),
	orgName: varchar({ length: 255 }),
	orgEmail: varchar({ length: 255 }),
	depId: char({ length: 36 }),
	deptName: varchar({ length: 255 }),
	rId: char({ length: 36 }),
	roleName: varchar({ length: 255 }),
	leval: varchar({ length: 255 }),
	uId: char({ length: 36 }),
	userFirstName: varchar("UserFirstName", { length: 255 }),
	userLastName: varchar("UserLastName", { length: 255 }),
	userEmail: varchar("UserEmail", { length: 255 }),
	coachUserId: varchar({ length: 255 }),
	isCoach: boolean(),
	managerUserId: varchar({ length: 255 }),
	deactivationDate: timestamp({ withTimezone: true, mode: 'string' }),
	orgCreatedAt: timestamp("OrgCreatedAt", { withTimezone: true, mode: 'string' }),
}).as(sql`SELECT o."orgID", o."orgName", o.email AS "orgEmail", d."depID", d."deptName", r."rID", r."roleName", r.leval, u."uID", u.name AS "UserFirstName", u.lname AS "UserLastName", u.email AS "UserEmail", u."coachUserId", u."isCoach", u."managerUserId", u."deactivationDate", o."createdAt" AS "OrgCreatedAt" FROM organization o LEFT JOIN department d ON o."orgID" = d."orgID" LEFT JOIN role r ON d."depID" = r."depID" LEFT JOIN users u ON r."rID" = u."rID" WHERE 1 = 1`);