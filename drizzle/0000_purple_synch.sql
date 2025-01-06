CREATE TYPE "public"."enum_charpLog_charpStatus" AS ENUM('C', 'H', 'A', 'R', 'P', 'D');--> statement-breakpoint
CREATE TYPE "public"."enum_kpi_charpStatus" AS ENUM('C', 'H', 'A', 'R', 'P');--> statement-breakpoint
CREATE TYPE "public"."enum_milestones_charpStatus" AS ENUM('C', 'H', 'A', 'R', 'P', 'D');--> statement-breakpoint
CREATE TABLE "agents" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"handle" text NOT NULL,
	"status" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "chat_messages" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	"chat_id" uuid NOT NULL,
	"content" text NOT NULL,
	"sender" text NOT NULL,
	"timestamp" timestamp NOT NULL,
	"metadata" text
);
--> statement-breakpoint
CREATE TABLE "chats" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	"participant_id" text NOT NULL,
	"participant_type" text NOT NULL,
	"last_message_at" timestamp NOT NULL,
	"status" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "comments" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	"content" text NOT NULL,
	"author_id" char(36) NOT NULL,
	"project_id" uuid NOT NULL,
	"task_id" uuid,
	"document_id" uuid
);
--> statement-breakpoint
CREATE TABLE "department" (
	"depId" char(36) PRIMARY KEY NOT NULL,
	"deptName" varchar(255),
	"orgId" char(36),
	"createdAt" timestamp with time zone NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "documents" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	"title" text NOT NULL,
	"content" text NOT NULL,
	"type" text NOT NULL,
	"project_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ExternalApp" (
	"ExternalAppID" char(36) PRIMARY KEY NOT NULL,
	"Name" varchar(36) NOT NULL,
	"AuthenticationURL" varchar(256) NOT NULL,
	"LogoPath" varchar(128),
	"AuthorizationHeader" varchar(256),
	"Redirect_URI" varchar(128),
	"Scope" varchar(64),
	"DeletedAt" timestamp with time zone,
	"createdAt" timestamp with time zone NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ExternalAppEndpoint" (
	"ExternalAppEndpointId" char(36) PRIMARY KEY NOT NULL,
	"ExternalAppID" char(36) NOT NULL,
	"EndpointName" varchar(32) NOT NULL,
	"EndpointPath" varchar(255),
	"EndpointStatus" varchar(16) NOT NULL,
	"DeletedAt" timestamp with time zone,
	"createdAt" timestamp with time zone NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ExternalAuthentication" (
	"ExternalAuthenticationID" char(36) PRIMARY KEY NOT NULL,
	"uId" char(36) NOT NULL,
	"Configuration" json NOT NULL,
	"ExternalAppID" char(36) NOT NULL,
	"ExternalAuthenticationTypeID" char(36) NOT NULL,
	"DeletedAt" timestamp with time zone,
	"createdAt" timestamp with time zone NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ExternalAuthenticationKpi" (
	"ExternalAuthenticationKpiID" char(36) PRIMARY KEY NOT NULL,
	"ExternalAuthenticationID" char(36) NOT NULL,
	"kpiId" char(36) NOT NULL,
	"DataEndpoint" varchar(256),
	"DataLogic" varchar,
	"ExternalAppEndpointId" char(36),
	"DeletedAt" timestamp with time zone,
	"createdAt" timestamp with time zone NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ExternalAuthenticationType" (
	"ExternalAuthenticationTypeID" char(36) PRIMARY KEY NOT NULL,
	"AuthenticationType" varchar(16) NOT NULL,
	"DeletedAt" timestamp with time zone,
	"createdAt" timestamp with time zone NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "Industry" (
	"IndustryID" char(36) PRIMARY KEY NOT NULL,
	"IndustryName" varchar(255),
	"DeletedAt" timestamp with time zone,
	"createdAt" timestamp with time zone NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "kpi" (
	"kpiId" char(36) PRIMARY KEY NOT NULL,
	"qty" varchar(255),
	"unit" varchar(255),
	"objective" varchar(255),
	"dependFlag" boolean DEFAULT false,
	"charpStatus" "enum_kpi_charpStatus" NOT NULL,
	"dueData" date,
	"driverId" char(36),
	"uId" char(36),
	"achieveQty" varchar(255) DEFAULT '0',
	"isCorporateKpi" boolean,
	"PerformanceDirection" varchar(16),
	"StandardKpiId" char(36),
	"kpiType" varchar(16),
	"DeletedAt" timestamp with time zone,
	"reportingFrequency" varchar(32),
	"ParentKpiID" char(36),
	"createdAt" timestamp with time zone NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "kpiDelegate" (
	"kpiDelegateId" char(36) PRIMARY KEY NOT NULL,
	"uId" varchar(255) NOT NULL,
	"kpiId" varchar(255) NOT NULL,
	"delegateStatus" varchar(255) NOT NULL,
	"deactivationDate" timestamp with time zone,
	"createdAt" timestamp with time zone NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "kpiHistory" (
	"kpiHistoryId" char(36) PRIMARY KEY NOT NULL,
	"kpiId" varchar(255),
	"metricType" varchar(255),
	"amount" double precision,
	"frequency" varchar(255),
	"reportDate" timestamp with time zone,
	"budgetAmount" double precision,
	"actualAmount" double precision,
	"deletedAt" timestamp with time zone,
	"createdAt" timestamp with time zone NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "meeting" (
	"meetingId" varchar(36) PRIMARY KEY NOT NULL,
	"meetingName" varchar(100) NOT NULL,
	"meetingFrequency" varchar(25) NOT NULL,
	"uId" varchar(36) NOT NULL,
	"meetingDate" timestamp with time zone NOT NULL,
	"meetingInterval" varchar(15),
	"timerData" json,
	"deactivationDate" timestamp with time zone,
	"StandardMeetingId" char(36),
	"frequencyInterval" integer,
	"createdAt" timestamp with time zone NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "meetingHistory" (
	"meetingHistoryId" varchar(36) PRIMARY KEY NOT NULL,
	"meetingId" varchar(36),
	"meetingName" varchar(100) NOT NULL,
	"uId" varchar(36) NOT NULL,
	"meetingDate" timestamp with time zone NOT NULL,
	"timerData" json,
	"meetingScore" integer,
	"scoreNotes" varchar,
	"meetingNotes" varchar,
	"deactivationDate" timestamp with time zone,
	"createdAt" timestamp with time zone NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "MeetingKpi" (
	"MeetingKpiId" char(36) PRIMARY KEY NOT NULL,
	"meetingId" char(36) NOT NULL,
	"kpiId" char(36) NOT NULL,
	"deletedAt" timestamp with time zone,
	"createdAt" timestamp with time zone NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "meetingUser" (
	"meetingUserId" varchar(36) PRIMARY KEY NOT NULL,
	"meetingId" varchar(36) NOT NULL,
	"uId" varchar(36) NOT NULL,
	"userRole" varchar(20),
	"DataDisplay" boolean DEFAULT true,
	"createdAt" timestamp with time zone NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "meetingUserHistory" (
	"meetingUserHistoryId" varchar(36) PRIMARY KEY NOT NULL,
	"meetingHistoryId" varchar(36) NOT NULL,
	"uId" varchar(36) NOT NULL,
	"userStatus" varchar(20) NOT NULL,
	"userRole" varchar(20),
	"createdAt" timestamp with time zone NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "organization" (
	"orgId" char(36) PRIMARY KEY NOT NULL,
	"orgName" varchar(255),
	"address" varchar(255),
	"city" varchar(255),
	"logoUrl" varchar(255),
	"secretCode" varchar(255),
	"isActive" boolean DEFAULT true,
	"startDate" date,
	"endDate" date,
	"email" varchar(255) DEFAULT '255',
	"phoneNumber" varchar(15),
	"mission" varchar(500),
	"vision" varchar(500),
	"values" varchar(500),
	"outcomeStatement" varchar(10000),
	"features" json,
	"IndustryID" char(36),
	"IsStartup" boolean,
	"createdAt" timestamp with time zone NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "projects" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	"name" text NOT NULL,
	"description" text NOT NULL,
	"status" text NOT NULL,
	"start_date" timestamp NOT NULL,
	"end_date" timestamp,
	"team_ids" text[] NOT NULL,
	"orgId" char(36)
);
--> statement-breakpoint
CREATE TABLE "role" (
	"rId" char(36) PRIMARY KEY NOT NULL,
	"roleName" varchar(255),
	"leval" varchar(255),
	"depId" char(36),
	"deletedAt" timestamp with time zone,
	"createdAt" timestamp with time zone NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "StandardKpi" (
	"StandardKpiId" char(36) PRIMARY KEY NOT NULL,
	"unit" varchar(255),
	"objective" varchar(255),
	"target" numeric(18, 5),
	"reportingFrequency" varchar(255),
	"industry" varchar(255),
	"appliesToStartup" boolean,
	"isCorporateKpi" boolean DEFAULT false,
	"driverId" varchar(255),
	"level" integer,
	"kpiType" varchar(255),
	"PerformanceDirection" varchar(255),
	"deletedAt" timestamp with time zone,
	"createdAt" timestamp with time zone NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "StandardMilestone" (
	"StandardMilestoneId" char(36) PRIMARY KEY NOT NULL,
	"AchieveText" varchar(255),
	"DueDateIncrement" integer,
	"MilestoneNote" varchar(1000),
	"StandardKpiId" char(36),
	"DeletedAt" timestamp with time zone,
	"createdAt" timestamp with time zone NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL
);
--> statement-breakpoint
CREATE TABLE "tasks" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now(),
	"title" text NOT NULL,
	"description" text NOT NULL,
	"status" text NOT NULL,
	"assignee_id" char(36),
	"due_date" timestamp,
	"priority" text NOT NULL,
	"project_id" uuid NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"uId" char(36) PRIMARY KEY NOT NULL,
	"name" varchar(255),
	"email" varchar(255),
	"password" varchar(255),
	"rId" char(36),
	"lname" varchar(255),
	"statement" varchar(10485760) DEFAULT '0',
	"roleAdmin" varchar(255) DEFAULT '0',
	"resetCode" varchar(255) DEFAULT '0',
	"info" json,
	"coachUserId" varchar(255),
	"isCoach" boolean,
	"managerUserId" varchar(255),
	"deactivationDate" timestamp with time zone,
	"phoneNumber" varchar(15),
	"InvitedAt" timestamp with time zone,
	"TextNotifications" boolean DEFAULT false NOT NULL,
	"avatar" varchar(255),
	"depId" char(36),
	"skills" text[],
	"createdAt" timestamp with time zone NOT NULL,
	"updatedAt" timestamp with time zone NOT NULL,
	CONSTRAINT "users_email_key" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "chat_messages" ADD CONSTRAINT "chat_messages_chat_id_chats_id_fk" FOREIGN KEY ("chat_id") REFERENCES "public"."chats"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "comments" ADD CONSTRAINT "comments_author_id_users_uid_fk" FOREIGN KEY ("author_id") REFERENCES "public"."users"("uId") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "department" ADD CONSTRAINT "department_orgID_fkey" FOREIGN KEY ("orgId") REFERENCES "public"."organization"("orgId") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "ExternalAppEndpoint" ADD CONSTRAINT "ExternalAppEndpoint_fkey_ExternalAppId" FOREIGN KEY ("ExternalAppID") REFERENCES "public"."ExternalApp"("ExternalAppID") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ExternalAuthentication" ADD CONSTRAINT "fk_ExternalApp" FOREIGN KEY ("ExternalAppID") REFERENCES "public"."ExternalApp"("ExternalAppID") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ExternalAuthentication" ADD CONSTRAINT "fk_ExternalAuthenticationType" FOREIGN KEY ("ExternalAuthenticationTypeID") REFERENCES "public"."ExternalAuthenticationType"("ExternalAuthenticationTypeID") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ExternalAuthenticationKpi" ADD CONSTRAINT "fk_externalauthenticationkpi_externalauthentication" FOREIGN KEY ("ExternalAuthenticationID") REFERENCES "public"."ExternalAuthentication"("ExternalAuthenticationID") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ExternalAuthenticationKpi" ADD CONSTRAINT "fk_externalauthenticationkpi_kpi" FOREIGN KEY ("kpiId") REFERENCES "public"."kpi"("kpiId") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "kpi" ADD CONSTRAINT "kpi_uID_fkey" FOREIGN KEY ("uId") REFERENCES "public"."users"("uId") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "kpiDelegate" ADD CONSTRAINT "kpiDelegate_kpiID_fkey" FOREIGN KEY ("kpiId") REFERENCES "public"."kpi"("kpiId") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "kpiDelegate" ADD CONSTRAINT "kpiDelegate_uID_fkey" FOREIGN KEY ("uId") REFERENCES "public"."users"("uId") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "kpiHistory" ADD CONSTRAINT "kpiHistory_kpiID_fkey" FOREIGN KEY ("kpiId") REFERENCES "public"."kpi"("kpiId") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "meeting" ADD CONSTRAINT "meeting_uID_fkey" FOREIGN KEY ("uId") REFERENCES "public"."users"("uId") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "meetingHistory" ADD CONSTRAINT "meetingHistory_meetingId_fkey" FOREIGN KEY ("meetingId") REFERENCES "public"."meeting"("meetingId") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "meetingHistory" ADD CONSTRAINT "meetingHistory_uID_fkey" FOREIGN KEY ("uId") REFERENCES "public"."users"("uId") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "MeetingKpi" ADD CONSTRAINT "MeetingKpi_fkey_MeetingId" FOREIGN KEY ("meetingId") REFERENCES "public"."meeting"("meetingId") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "MeetingKpi" ADD CONSTRAINT "MeetingKpi_fkey_kpiID" FOREIGN KEY ("kpiId") REFERENCES "public"."kpi"("kpiId") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "meetingUser" ADD CONSTRAINT "meetingUser_uID_fkey" FOREIGN KEY ("uId") REFERENCES "public"."users"("uId") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "meetingUserHistory" ADD CONSTRAINT "meetingUserHistory_uID_fkey" FOREIGN KEY ("uId") REFERENCES "public"."users"("uId") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "organization" ADD CONSTRAINT "constraint_fk_organization_industryid" FOREIGN KEY ("IndustryID") REFERENCES "public"."Industry"("IndustryID") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects" ADD CONSTRAINT "projects_org_id_organization_orgid_fk" FOREIGN KEY ("orgId") REFERENCES "public"."organization"("orgId") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "role" ADD CONSTRAINT "role_depID_fkey" FOREIGN KEY ("depId") REFERENCES "public"."department"("depId") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "StandardMilestone" ADD CONSTRAINT "StandardMilestone_StandardKpiId_fkey" FOREIGN KEY ("StandardKpiId") REFERENCES "public"."StandardKpi"("StandardKpiId") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_assignee_id_users_uid_fk" FOREIGN KEY ("assignee_id") REFERENCES "public"."users"("uId") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_rID_fkey" FOREIGN KEY ("rId") REFERENCES "public"."role"("rId") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_depID_fkey" FOREIGN KEY ("depId") REFERENCES "public"."department"("depId") ON DELETE set null ON UPDATE cascade;--> statement-breakpoint
CREATE INDEX "idx_chat_messages_chatid" ON "chat_messages" USING btree ("chat_id");--> statement-breakpoint
CREATE INDEX "idx_comments_authorid" ON "comments" USING btree ("author_id");--> statement-breakpoint
CREATE INDEX "idx_department_orgid" ON "department" USING btree ("orgId");--> statement-breakpoint
CREATE INDEX "idx_externalappendpoint_externalappid" ON "ExternalAppEndpoint" USING btree ("ExternalAppID");--> statement-breakpoint
CREATE UNIQUE INDEX "idx_ExternalAuthentication_BusinessKey" ON "ExternalAuthentication" USING btree ("uId" bpchar_ops,"ExternalAppID" bpchar_ops);--> statement-breakpoint
CREATE INDEX "idx_externalauthentication_externalappid" ON "ExternalAuthentication" USING btree ("ExternalAppID");--> statement-breakpoint
CREATE INDEX "idx_externalauthentication_externalauthenticationtypeid" ON "ExternalAuthentication" USING btree ("ExternalAuthenticationTypeID");--> statement-breakpoint
CREATE INDEX "idx_externalauthenticationkpi_externalauthenticationid" ON "ExternalAuthenticationKpi" USING btree ("ExternalAuthenticationID");--> statement-breakpoint
CREATE INDEX "idx_externalauthenticationkpi_kpiid" ON "ExternalAuthenticationKpi" USING btree ("kpiId");--> statement-breakpoint
CREATE INDEX "idx_kpi_uid" ON "kpi" USING btree ("uId");--> statement-breakpoint
CREATE INDEX "idx_kpidelegate_kpiid" ON "kpiDelegate" USING btree ("kpiId");--> statement-breakpoint
CREATE INDEX "idx_kpidelegate_uid" ON "kpiDelegate" USING btree ("uId");--> statement-breakpoint
CREATE INDEX "idx_kpihistory_kpiid" ON "kpiHistory" USING btree ("kpiId");--> statement-breakpoint
CREATE INDEX "idx_meeting_uid" ON "meeting" USING btree ("uId");--> statement-breakpoint
CREATE INDEX "idx_meetinghistory_meetingid" ON "meetingHistory" USING btree ("meetingId");--> statement-breakpoint
CREATE INDEX "idx_meetinghistory_uid" ON "meetingHistory" USING btree ("uId");--> statement-breakpoint
CREATE INDEX "idx_meetingkpi_meetingid" ON "MeetingKpi" USING btree ("meetingId");--> statement-breakpoint
CREATE INDEX "idx_meetingkpi_kpiid" ON "MeetingKpi" USING btree ("kpiId");--> statement-breakpoint
CREATE INDEX "idx_meetinguser_uid" ON "meetingUser" USING btree ("uId");--> statement-breakpoint
CREATE INDEX "idx_meetinguserhistory_uid" ON "meetingUserHistory" USING btree ("uId");--> statement-breakpoint
CREATE INDEX "idx_organization_industryid" ON "organization" USING btree ("IndustryID");--> statement-breakpoint
CREATE INDEX "idx_projects_orgid" ON "projects" USING btree ("orgId");--> statement-breakpoint
CREATE INDEX "idx_role_depid" ON "role" USING btree ("depId");--> statement-breakpoint
CREATE INDEX "idx_standardmilestone_standardkpiid" ON "StandardMilestone" USING btree ("StandardKpiId");--> statement-breakpoint
CREATE INDEX "idx_tasks_assigneeid" ON "tasks" USING btree ("assignee_id");--> statement-breakpoint
CREATE INDEX "idx_users_rid" ON "users" USING btree ("rId");--> statement-breakpoint
CREATE INDEX "idx_users_depid" ON "users" USING btree ("depId");