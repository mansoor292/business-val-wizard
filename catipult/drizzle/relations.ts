import { relations } from "drizzle-orm/relations";
import { standardKpi, standardMilestone, organization, department, role, invites, users, deviceregister, kpi, kpiHistory, milestones, issue, resetLog, charpLog, featureRequest, kpiDelegate, meetingUserHistory, meeting, onboardingstatus, meetingUser, kpilog, notification, portfolioGroup, quartersplit, quarterkpiassign, drivers, questions, questiontype, pagecontent, section, userAssignment, userInvite, sectioncompleted, userActivity, todo, useranswer, option, useroutcome, userPersonalityProfile, rfp, meetingHistory, portfolioGroupUser, industry, userDataAccess, meetingIssue, meetingKpi, externalApp, externalAuthentication, externalAuthenticationType, externalAppEndpoint, externalAuthenticationKpi, userChat } from "./schema";

export const standardMilestoneRelations = relations(standardMilestone, ({one}) => ({
	standardKpi: one(standardKpi, {
		fields: [standardMilestone.standardKpiId],
		references: [standardKpi.standardKpiId]
	}),
}));

export const standardKpiRelations = relations(standardKpi, ({one, many}) => ({
	standardMilestones: many(standardMilestone),
	driver: one(drivers, {
		fields: [standardKpi.driverId],
		references: [drivers.driverId]
	}),
}));

export const departmentRelations = relations(department, ({one, many}) => ({
	organization: one(organization, {
		fields: [department.orgId],
		references: [organization.orgId]
	}),
	roles: many(role),
}));

export const organizationRelations = relations(organization, ({one, many}) => ({
	departments: many(department),
	industry: one(industry, {
		fields: [organization.industryId],
		references: [industry.industryId]
	}),
}));

export const invitesRelations = relations(invites, ({one}) => ({
	role: one(role, {
		fields: [invites.rId],
		references: [role.rId]
	}),
	user: one(users, {
		fields: [invites.uId],
		references: [users.uId]
	}),
}));

export const roleRelations = relations(role, ({one, many}) => ({
	invites: many(invites),
	department: one(department, {
		fields: [role.depId],
		references: [department.depId]
	}),
	users: many(users),
}));

export const usersRelations = relations(users, ({one, many}) => ({
	invites: many(invites),
	deviceregisters: many(deviceregister),
	issues: many(issue),
	resetLogs: many(resetLog),
	charpLogs: many(charpLog),
	featureRequests: many(featureRequest),
	kpiDelegates: many(kpiDelegate),
	meetingUserHistories: many(meetingUserHistory),
	meetings: many(meeting),
	onboardingstatuses: many(onboardingstatus),
	meetingUsers: many(meetingUser),
	kpilogs: many(kpilog),
	notifications: many(notification),
	portfolioGroups: many(portfolioGroup),
	quarterkpiassigns: many(quarterkpiassign),
	quartersplits: many(quartersplit),
	userAssignments: many(userAssignment),
	userInvites_uId: many(userInvite, {
		relationName: "userInvite_uId_users_uId"
	}),
	userInvites_uId: many(userInvite, {
		relationName: "userInvite_uId_users_uId"
	}),
	sectioncompleteds: many(sectioncompleted),
	userActivities: many(userActivity),
	useranswers: many(useranswer),
	useroutcomes: many(useroutcome),
	userPersonalityProfiles: many(userPersonalityProfile),
	meetingHistories: many(meetingHistory),
	portfolioGroupUsers: many(portfolioGroupUser),
	milestones: many(milestones),
	userDataAccesses_granteeUserId: many(userDataAccess, {
		relationName: "userDataAccess_granteeUserId_users_uId"
	}),
	userDataAccesses_grantorUserId: many(userDataAccess, {
		relationName: "userDataAccess_grantorUserId_users_uId"
	}),
	role: one(role, {
		fields: [users.rId],
		references: [role.rId]
	}),
	kpis: many(kpi),
	userChats: many(userChat),
}));

export const deviceregisterRelations = relations(deviceregister, ({one}) => ({
	user: one(users, {
		fields: [deviceregister.uId],
		references: [users.uId]
	}),
}));

export const kpiHistoryRelations = relations(kpiHistory, ({one}) => ({
	kpi: one(kpi, {
		fields: [kpiHistory.kpiId],
		references: [kpi.kpiId]
	}),
}));

export const kpiRelations = relations(kpi, ({one, many}) => ({
	kpiHistories: many(kpiHistory),
	kpiDelegates: many(kpiDelegate),
	kpilogs: many(kpilog),
	userAssignments: many(userAssignment),
	milestones: many(milestones),
	meetingKpis: many(meetingKpi),
	externalAuthenticationKpis: many(externalAuthenticationKpi),
	driver: one(drivers, {
		fields: [kpi.driverId],
		references: [drivers.driverId]
	}),
	user: one(users, {
		fields: [kpi.uId],
		references: [users.uId]
	}),
}));

export const issueRelations = relations(issue, ({one, many}) => ({
	milestone: one(milestones, {
		fields: [issue.mileId],
		references: [milestones.mileId]
	}),
	user: one(users, {
		fields: [issue.uId],
		references: [users.uId]
	}),
	todos: many(todo),
	meetingIssues: many(meetingIssue),
}));

export const milestonesRelations = relations(milestones, ({one, many}) => ({
	issues: many(issue),
	charpLogs: many(charpLog),
	kpi: one(kpi, {
		fields: [milestones.kpiId],
		references: [kpi.kpiId]
	}),
	milestone: one(milestones, {
		fields: [milestones.mileReferId],
		references: [milestones.mileId],
		relationName: "milestones_mileReferId_milestones_mileId"
	}),
	milestones: many(milestones, {
		relationName: "milestones_mileReferId_milestones_mileId"
	}),
	user: one(users, {
		fields: [milestones.uId],
		references: [users.uId]
	}),
}));

export const resetLogRelations = relations(resetLog, ({one}) => ({
	user: one(users, {
		fields: [resetLog.uId],
		references: [users.uId]
	}),
}));

export const charpLogRelations = relations(charpLog, ({one}) => ({
	milestone: one(milestones, {
		fields: [charpLog.mileId],
		references: [milestones.mileId]
	}),
	user: one(users, {
		fields: [charpLog.uId],
		references: [users.uId]
	}),
}));

export const featureRequestRelations = relations(featureRequest, ({one}) => ({
	user: one(users, {
		fields: [featureRequest.uId],
		references: [users.uId]
	}),
}));

export const kpiDelegateRelations = relations(kpiDelegate, ({one}) => ({
	kpi: one(kpi, {
		fields: [kpiDelegate.kpiId],
		references: [kpi.kpiId]
	}),
	user: one(users, {
		fields: [kpiDelegate.uId],
		references: [users.uId]
	}),
}));

export const meetingUserHistoryRelations = relations(meetingUserHistory, ({one}) => ({
	user: one(users, {
		fields: [meetingUserHistory.uId],
		references: [users.uId]
	}),
}));

export const meetingRelations = relations(meeting, ({one, many}) => ({
	user: one(users, {
		fields: [meeting.uId],
		references: [users.uId]
	}),
	meetingHistories: many(meetingHistory),
	meetingIssues: many(meetingIssue),
	meetingKpis: many(meetingKpi),
}));

export const onboardingstatusRelations = relations(onboardingstatus, ({one}) => ({
	user: one(users, {
		fields: [onboardingstatus.uId],
		references: [users.uId]
	}),
}));

export const meetingUserRelations = relations(meetingUser, ({one}) => ({
	user: one(users, {
		fields: [meetingUser.uId],
		references: [users.uId]
	}),
}));

export const kpilogRelations = relations(kpilog, ({one}) => ({
	kpi: one(kpi, {
		fields: [kpilog.kpiId],
		references: [kpi.kpiId]
	}),
	user: one(users, {
		fields: [kpilog.uId],
		references: [users.uId]
	}),
}));

export const notificationRelations = relations(notification, ({one}) => ({
	user: one(users, {
		fields: [notification.uId],
		references: [users.uId]
	}),
}));

export const portfolioGroupRelations = relations(portfolioGroup, ({one, many}) => ({
	user: one(users, {
		fields: [portfolioGroup.uId],
		references: [users.uId]
	}),
	portfolioGroupUsers: many(portfolioGroupUser),
}));

export const quarterkpiassignRelations = relations(quarterkpiassign, ({one}) => ({
	quartersplit: one(quartersplit, {
		fields: [quarterkpiassign.qsId],
		references: [quartersplit.qsId]
	}),
	user: one(users, {
		fields: [quarterkpiassign.uId],
		references: [users.uId]
	}),
}));

export const quartersplitRelations = relations(quartersplit, ({one, many}) => ({
	quarterkpiassigns: many(quarterkpiassign),
	user: one(users, {
		fields: [quartersplit.uId],
		references: [users.uId]
	}),
}));

export const questionsRelations = relations(questions, ({one, many}) => ({
	driver: one(drivers, {
		fields: [questions.driverId],
		references: [drivers.driverId]
	}),
	questiontype: one(questiontype, {
		fields: [questions.qtId],
		references: [questiontype.qtId]
	}),
	useranswers: many(useranswer),
	rfps: many(rfp),
	options: many(option),
}));

export const driversRelations = relations(drivers, ({many}) => ({
	questions: many(questions),
	pagecontents: many(pagecontent),
	sections: many(section),
	useranswers: many(useranswer),
	standardKpis: many(standardKpi),
	kpis: many(kpi),
}));

export const questiontypeRelations = relations(questiontype, ({many}) => ({
	questions: many(questions),
}));

export const pagecontentRelations = relations(pagecontent, ({one}) => ({
	driver: one(drivers, {
		fields: [pagecontent.driverId],
		references: [drivers.driverId]
	}),
}));

export const sectionRelations = relations(section, ({one, many}) => ({
	driver: one(drivers, {
		fields: [section.driverId],
		references: [drivers.driverId]
	}),
	sectioncompleteds: many(sectioncompleted),
}));

export const userAssignmentRelations = relations(userAssignment, ({one}) => ({
	kpi: one(kpi, {
		fields: [userAssignment.kpiId],
		references: [kpi.kpiId]
	}),
	user: one(users, {
		fields: [userAssignment.uId],
		references: [users.uId]
	}),
}));

export const userInviteRelations = relations(userInvite, ({one}) => ({
	user_uId: one(users, {
		fields: [userInvite.uId],
		references: [users.uId],
		relationName: "userInvite_uId_users_uId"
	}),
	user_uId: one(users, {
		fields: [userInvite.uId],
		references: [users.uId],
		relationName: "userInvite_uId_users_uId"
	}),
}));

export const sectioncompletedRelations = relations(sectioncompleted, ({one}) => ({
	section: one(section, {
		fields: [sectioncompleted.sectionId],
		references: [section.sectionId]
	}),
	user: one(users, {
		fields: [sectioncompleted.uId],
		references: [users.uId]
	}),
}));

export const userActivityRelations = relations(userActivity, ({one}) => ({
	user: one(users, {
		fields: [userActivity.uId],
		references: [users.uId]
	}),
}));

export const todoRelations = relations(todo, ({one}) => ({
	issue: one(issue, {
		fields: [todo.issueId],
		references: [issue.issueId]
	}),
}));

export const useranswerRelations = relations(useranswer, ({one}) => ({
	driver: one(drivers, {
		fields: [useranswer.driverId],
		references: [drivers.driverId]
	}),
	option: one(option, {
		fields: [useranswer.optionId],
		references: [option.optionId]
	}),
	question: one(questions, {
		fields: [useranswer.queId],
		references: [questions.queId]
	}),
	user: one(users, {
		fields: [useranswer.uId],
		references: [users.uId]
	}),
}));

export const optionRelations = relations(option, ({one, many}) => ({
	useranswers: many(useranswer),
	question: one(questions, {
		fields: [option.queId],
		references: [questions.queId]
	}),
}));

export const useroutcomeRelations = relations(useroutcome, ({one}) => ({
	user: one(users, {
		fields: [useroutcome.uId],
		references: [users.uId]
	}),
}));

export const userPersonalityProfileRelations = relations(userPersonalityProfile, ({one}) => ({
	user: one(users, {
		fields: [userPersonalityProfile.uId],
		references: [users.uId]
	}),
}));

export const rfpRelations = relations(rfp, ({one}) => ({
	question: one(questions, {
		fields: [rfp.queId],
		references: [questions.queId]
	}),
}));

export const meetingHistoryRelations = relations(meetingHistory, ({one}) => ({
	meeting: one(meeting, {
		fields: [meetingHistory.meetingId],
		references: [meeting.meetingId]
	}),
	user: one(users, {
		fields: [meetingHistory.uId],
		references: [users.uId]
	}),
}));

export const portfolioGroupUserRelations = relations(portfolioGroupUser, ({one}) => ({
	portfolioGroup: one(portfolioGroup, {
		fields: [portfolioGroupUser.portfolioGroupId],
		references: [portfolioGroup.portfolioGroupId]
	}),
	user: one(users, {
		fields: [portfolioGroupUser.uId],
		references: [users.uId]
	}),
}));

export const industryRelations = relations(industry, ({many}) => ({
	organizations: many(organization),
}));

export const userDataAccessRelations = relations(userDataAccess, ({one}) => ({
	user_granteeUserId: one(users, {
		fields: [userDataAccess.granteeUserId],
		references: [users.uId],
		relationName: "userDataAccess_granteeUserId_users_uId"
	}),
	user_grantorUserId: one(users, {
		fields: [userDataAccess.grantorUserId],
		references: [users.uId],
		relationName: "userDataAccess_grantorUserId_users_uId"
	}),
}));

export const meetingIssueRelations = relations(meetingIssue, ({one}) => ({
	meeting: one(meeting, {
		fields: [meetingIssue.meetingId],
		references: [meeting.meetingId]
	}),
	issue: one(issue, {
		fields: [meetingIssue.issueId],
		references: [issue.issueId]
	}),
}));

export const meetingKpiRelations = relations(meetingKpi, ({one}) => ({
	meeting: one(meeting, {
		fields: [meetingKpi.meetingId],
		references: [meeting.meetingId]
	}),
	kpi: one(kpi, {
		fields: [meetingKpi.kpiId],
		references: [kpi.kpiId]
	}),
}));

export const externalAuthenticationRelations = relations(externalAuthentication, ({one, many}) => ({
	externalApp: one(externalApp, {
		fields: [externalAuthentication.externalAppId],
		references: [externalApp.externalAppId]
	}),
	externalAuthenticationType: one(externalAuthenticationType, {
		fields: [externalAuthentication.externalAuthenticationTypeId],
		references: [externalAuthenticationType.externalAuthenticationTypeId]
	}),
	externalAuthenticationKpis: many(externalAuthenticationKpi),
}));

export const externalAppRelations = relations(externalApp, ({many}) => ({
	externalAuthentications: many(externalAuthentication),
	externalAppEndpoints: many(externalAppEndpoint),
}));

export const externalAuthenticationTypeRelations = relations(externalAuthenticationType, ({many}) => ({
	externalAuthentications: many(externalAuthentication),
}));

export const externalAppEndpointRelations = relations(externalAppEndpoint, ({one}) => ({
	externalApp: one(externalApp, {
		fields: [externalAppEndpoint.externalAppId],
		references: [externalApp.externalAppId]
	}),
}));

export const externalAuthenticationKpiRelations = relations(externalAuthenticationKpi, ({one}) => ({
	externalAuthentication: one(externalAuthentication, {
		fields: [externalAuthenticationKpi.externalAuthenticationId],
		references: [externalAuthentication.externalAuthenticationId]
	}),
	kpi: one(kpi, {
		fields: [externalAuthenticationKpi.kpiId],
		references: [kpi.kpiId]
	}),
}));

export const userChatRelations = relations(userChat, ({one}) => ({
	user: one(users, {
		fields: [userChat.uId],
		references: [users.uId]
	}),
}));