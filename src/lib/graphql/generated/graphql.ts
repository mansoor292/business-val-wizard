/* eslint-disable */
// @ts-nocheck
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigFloat: { input: any; output: any; }
  Cursor: { input: any; output: any; }
  Date: { input: any; output: any; }
  Datetime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  UUID: { input: any; output: any; }
};
export type Agent = {
  __typename?: 'Agent';
  handle: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  status: Scalars['String']['output'];
};
export type AgentCondition = {
  id?: InputMaybe<Scalars['UUID']['input']>;
};
export type AgentInput = {
  handle: Scalars['String']['input'];
  id?: InputMaybe<Scalars['UUID']['input']>;
  name: Scalars['String']['input'];
  status: Scalars['String']['input'];
};
export type AgentPatch = {
  handle?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};
export type AgentsConnection = {
  __typename?: 'AgentsConnection';
  edges: Array<AgentsEdge>;
  nodes: Array<Agent>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type AgentsEdge = {
  __typename?: 'AgentsEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: Agent;
};
export enum AgentsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type Chat = {
  __typename?: 'Chat';
  chatMessages: Array<ChatMessage>;
  chatMessagesConnection: ChatMessagesConnection;
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  lastMessageAt: Scalars['Datetime']['output'];
  participantId: Scalars['String']['output'];
  participantType: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
};
export type ChatChatMessagesArgs = {
  condition?: InputMaybe<ChatMessageCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatMessagesOrderBy>>;
};
export type ChatChatMessagesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ChatMessageCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatMessagesOrderBy>>;
};
export type ChatCondition = {
  id?: InputMaybe<Scalars['UUID']['input']>;
};
export type ChatInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  lastMessageAt: Scalars['Datetime']['input'];
  participantId: Scalars['String']['input'];
  participantType: Scalars['String']['input'];
  status: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type ChatMessage = {
  __typename?: 'ChatMessage';
  chat?: Maybe<Chat>;
  chatId: Scalars['UUID']['output'];
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  metadata?: Maybe<Scalars['String']['output']>;
  sender: Scalars['String']['output'];
  timestamp: Scalars['Datetime']['output'];
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
};
export type ChatMessageCondition = {
  chatId?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
};
export type ChatMessageInput = {
  chatId: Scalars['UUID']['input'];
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  sender: Scalars['String']['input'];
  timestamp: Scalars['Datetime']['input'];
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type ChatMessagePatch = {
  chatId?: InputMaybe<Scalars['UUID']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Datetime']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type ChatMessagesConnection = {
  __typename?: 'ChatMessagesConnection';
  edges: Array<ChatMessagesEdge>;
  nodes: Array<ChatMessage>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type ChatMessagesEdge = {
  __typename?: 'ChatMessagesEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: ChatMessage;
};
export enum ChatMessagesOrderBy {
  ChatIdAsc = 'CHAT_ID_ASC',
  ChatIdDesc = 'CHAT_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type ChatPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  lastMessageAt?: InputMaybe<Scalars['Datetime']['input']>;
  participantId?: InputMaybe<Scalars['String']['input']>;
  participantType?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type ChatsConnection = {
  __typename?: 'ChatsConnection';
  edges: Array<ChatsEdge>;
  nodes: Array<Chat>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type ChatsEdge = {
  __typename?: 'ChatsEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: Chat;
};
export enum ChatsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type Comment = {
  __typename?: 'Comment';
  author?: Maybe<User>;
  authorId: Scalars['String']['output'];
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  documentId?: Maybe<Scalars['UUID']['output']>;
  id: Scalars['UUID']['output'];
  projectId: Scalars['UUID']['output'];
  taskId?: Maybe<Scalars['UUID']['output']>;
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
};
export type CommentCondition = {
  authorId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
};
export type CommentInput = {
  authorId: Scalars['String']['input'];
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  documentId?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  projectId: Scalars['UUID']['input'];
  taskId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type CommentPatch = {
  authorId?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  documentId?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  projectId?: InputMaybe<Scalars['UUID']['input']>;
  taskId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type CommentsConnection = {
  __typename?: 'CommentsConnection';
  edges: Array<CommentsEdge>;
  nodes: Array<Comment>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type CommentsEdge = {
  __typename?: 'CommentsEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: Comment;
};
export enum CommentsOrderBy {
  AuthorIdAsc = 'AUTHOR_ID_ASC',
  AuthorIdDesc = 'AUTHOR_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type CreateAgentInput = {
  agent: AgentInput;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};
export type CreateAgentPayload = {
  __typename?: 'CreateAgentPayload';
  agent?: Maybe<Agent>;
  agentEdge?: Maybe<AgentsEdge>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
};
export type CreateAgentPayloadAgentEdgeArgs = {
  orderBy?: InputMaybe<Array<AgentsOrderBy>>;
};
export type CreateChatInput = {
  chat: ChatInput;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};
export type CreateChatMessageInput = {
  chatMessage: ChatMessageInput;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};
export type CreateChatMessagePayload = {
  __typename?: 'CreateChatMessagePayload';
  chat?: Maybe<Chat>;
  chatMessage?: Maybe<ChatMessage>;
  chatMessageEdge?: Maybe<ChatMessagesEdge>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
};
export type CreateChatMessagePayloadChatMessageEdgeArgs = {
  orderBy?: InputMaybe<Array<ChatMessagesOrderBy>>;
};
export type CreateChatPayload = {
  __typename?: 'CreateChatPayload';
  chat?: Maybe<Chat>;
  chatEdge?: Maybe<ChatsEdge>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
};
export type CreateChatPayloadChatEdgeArgs = {
  orderBy?: InputMaybe<Array<ChatsOrderBy>>;
};
export type CreateCommentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  comment: CommentInput;
};
export type CreateCommentPayload = {
  __typename?: 'CreateCommentPayload';
  author?: Maybe<User>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Comment>;
  commentEdge?: Maybe<CommentsEdge>;
  query?: Maybe<Query>;
};
export type CreateCommentPayloadCommentEdgeArgs = {
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};
export type CreateDepartmentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  department: DepartmentInput;
};
export type CreateDepartmentPayload = {
  __typename?: 'CreateDepartmentPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  department?: Maybe<Department>;
  departmentEdge?: Maybe<DepartmentsEdge>;
  org?: Maybe<Organization>;
  query?: Maybe<Query>;
};
export type CreateDepartmentPayloadDepartmentEdgeArgs = {
  orderBy?: InputMaybe<Array<DepartmentsOrderBy>>;
};
export type CreateDocumentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  document: DocumentInput;
};
export type CreateDocumentPayload = {
  __typename?: 'CreateDocumentPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  document?: Maybe<Document>;
  documentEdge?: Maybe<DocumentsEdge>;
  query?: Maybe<Query>;
};
export type CreateDocumentPayloadDocumentEdgeArgs = {
  orderBy?: InputMaybe<Array<DocumentsOrderBy>>;
};
export type CreateExternalAppEndpointInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalAppEndpoint: ExternalAppEndpointInput;
};
export type CreateExternalAppEndpointPayload = {
  __typename?: 'CreateExternalAppEndpointPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  externalAppByExternalAppId?: Maybe<ExternalApp>;
  externalAppEndpoint?: Maybe<ExternalAppEndpoint>;
  externalAppEndpointEdge?: Maybe<ExternalAppEndpointsEdge>;
  query?: Maybe<Query>;
};
export type CreateExternalAppEndpointPayloadExternalAppEndpointEdgeArgs = {
  orderBy?: InputMaybe<Array<ExternalAppEndpointsOrderBy>>;
};
export type CreateExternalAppInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalApp: ExternalAppInput;
};
export type CreateExternalAppPayload = {
  __typename?: 'CreateExternalAppPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  externalApp?: Maybe<ExternalApp>;
  externalAppEdge?: Maybe<ExternalAppsEdge>;
  query?: Maybe<Query>;
};
export type CreateExternalAppPayloadExternalAppEdgeArgs = {
  orderBy?: InputMaybe<Array<ExternalAppsOrderBy>>;
};
export type CreateExternalAuthenticationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalAuthentication: ExternalAuthenticationInput;
};
export type CreateExternalAuthenticationKpiInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalAuthenticationKpi: ExternalAuthenticationKpiInput;
};
export type CreateExternalAuthenticationKpiPayload = {
  __typename?: 'CreateExternalAuthenticationKpiPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  externalAuthenticationByExternalAuthenticationId?: Maybe<ExternalAuthentication>;
  externalAuthenticationKpi?: Maybe<ExternalAuthenticationKpi>;
  externalAuthenticationKpiEdge?: Maybe<ExternalAuthenticationKpisEdge>;
  kpi?: Maybe<Kpi>;
  query?: Maybe<Query>;
};
export type CreateExternalAuthenticationKpiPayloadExternalAuthenticationKpiEdgeArgs = {
  orderBy?: InputMaybe<Array<ExternalAuthenticationKpisOrderBy>>;
};
export type CreateExternalAuthenticationPayload = {
  __typename?: 'CreateExternalAuthenticationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  externalAppByExternalAppId?: Maybe<ExternalApp>;
  externalAuthentication?: Maybe<ExternalAuthentication>;
  externalAuthenticationEdge?: Maybe<ExternalAuthenticationsEdge>;
  externalAuthenticationTypeByExternalAuthenticationTypeId?: Maybe<ExternalAuthenticationType>;
  query?: Maybe<Query>;
};
export type CreateExternalAuthenticationPayloadExternalAuthenticationEdgeArgs = {
  orderBy?: InputMaybe<Array<ExternalAuthenticationsOrderBy>>;
};
export type CreateExternalAuthenticationTypeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalAuthenticationType: ExternalAuthenticationTypeInput;
};
export type CreateExternalAuthenticationTypePayload = {
  __typename?: 'CreateExternalAuthenticationTypePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  externalAuthenticationType?: Maybe<ExternalAuthenticationType>;
  externalAuthenticationTypeEdge?: Maybe<ExternalAuthenticationTypesEdge>;
  query?: Maybe<Query>;
};
export type CreateExternalAuthenticationTypePayloadExternalAuthenticationTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<ExternalAuthenticationTypesOrderBy>>;
};
export type CreateIndustryInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  industry: IndustryInput;
};
export type CreateIndustryPayload = {
  __typename?: 'CreateIndustryPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  industry?: Maybe<Industry>;
  industryEdge?: Maybe<IndustriesEdge>;
  query?: Maybe<Query>;
};
export type CreateIndustryPayloadIndustryEdgeArgs = {
  orderBy?: InputMaybe<Array<IndustriesOrderBy>>;
};
export type CreateKpiDelegateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  kpiDelegate: KpiDelegateInput;
};
export type CreateKpiDelegatePayload = {
  __typename?: 'CreateKpiDelegatePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  kpi?: Maybe<Kpi>;
  kpiDelegate?: Maybe<KpiDelegate>;
  kpiDelegateEdge?: Maybe<KpiDelegatesEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type CreateKpiDelegatePayloadKpiDelegateEdgeArgs = {
  orderBy?: InputMaybe<Array<KpiDelegatesOrderBy>>;
};
export type CreateKpiHistoryInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  kpiHistory: KpiHistoryInput;
};
export type CreateKpiHistoryPayload = {
  __typename?: 'CreateKpiHistoryPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  kpi?: Maybe<Kpi>;
  kpiHistory?: Maybe<KpiHistory>;
  kpiHistoryEdge?: Maybe<KpiHistoriesEdge>;
  query?: Maybe<Query>;
};
export type CreateKpiHistoryPayloadKpiHistoryEdgeArgs = {
  orderBy?: InputMaybe<Array<KpiHistoriesOrderBy>>;
};
export type CreateKpiInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  kpi: KpiInput;
};
export type CreateKpiPayload = {
  __typename?: 'CreateKpiPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  kpi?: Maybe<Kpi>;
  kpiEdge?: Maybe<KpisEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type CreateKpiPayloadKpiEdgeArgs = {
  orderBy?: InputMaybe<Array<KpisOrderBy>>;
};
export type CreateMeetingHistoryInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meetingHistory: MeetingHistoryInput;
};
export type CreateMeetingHistoryPayload = {
  __typename?: 'CreateMeetingHistoryPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  meeting?: Maybe<Meeting>;
  meetingHistory?: Maybe<MeetingHistory>;
  meetingHistoryEdge?: Maybe<MeetingHistoriesEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type CreateMeetingHistoryPayloadMeetingHistoryEdgeArgs = {
  orderBy?: InputMaybe<Array<MeetingHistoriesOrderBy>>;
};
export type CreateMeetingInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meeting: MeetingInput;
};
export type CreateMeetingKpiInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meetingKpi: MeetingKpiInput;
};
export type CreateMeetingKpiPayload = {
  __typename?: 'CreateMeetingKpiPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  kpi?: Maybe<Kpi>;
  meeting?: Maybe<Meeting>;
  meetingKpi?: Maybe<MeetingKpi>;
  meetingKpiEdge?: Maybe<MeetingKpisEdge>;
  query?: Maybe<Query>;
};
export type CreateMeetingKpiPayloadMeetingKpiEdgeArgs = {
  orderBy?: InputMaybe<Array<MeetingKpisOrderBy>>;
};
export type CreateMeetingPayload = {
  __typename?: 'CreateMeetingPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  meeting?: Maybe<Meeting>;
  meetingEdge?: Maybe<MeetingsEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type CreateMeetingPayloadMeetingEdgeArgs = {
  orderBy?: InputMaybe<Array<MeetingsOrderBy>>;
};
export type CreateMeetingUserHistoryInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meetingUserHistory: MeetingUserHistoryInput;
};
export type CreateMeetingUserHistoryPayload = {
  __typename?: 'CreateMeetingUserHistoryPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  meetingUserHistory?: Maybe<MeetingUserHistory>;
  meetingUserHistoryEdge?: Maybe<MeetingUserHistoriesEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type CreateMeetingUserHistoryPayloadMeetingUserHistoryEdgeArgs = {
  orderBy?: InputMaybe<Array<MeetingUserHistoriesOrderBy>>;
};
export type CreateMeetingUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meetingUser: MeetingUserInput;
};
export type CreateMeetingUserPayload = {
  __typename?: 'CreateMeetingUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  meetingUser?: Maybe<MeetingUser>;
  meetingUserEdge?: Maybe<MeetingUsersEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type CreateMeetingUserPayloadMeetingUserEdgeArgs = {
  orderBy?: InputMaybe<Array<MeetingUsersOrderBy>>;
};
export type CreateOrganizationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  organization: OrganizationInput;
};
export type CreateOrganizationPayload = {
  __typename?: 'CreateOrganizationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  industryByIndustryId?: Maybe<Industry>;
  organization?: Maybe<Organization>;
  organizationEdge?: Maybe<OrganizationsEdge>;
  query?: Maybe<Query>;
};
export type CreateOrganizationPayloadOrganizationEdgeArgs = {
  orderBy?: InputMaybe<Array<OrganizationsOrderBy>>;
};
export type CreateProjectInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  project: ProjectInput;
};
export type CreateProjectPayload = {
  __typename?: 'CreateProjectPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  org?: Maybe<Organization>;
  project?: Maybe<Project>;
  projectEdge?: Maybe<ProjectsEdge>;
  query?: Maybe<Query>;
};
export type CreateProjectPayloadProjectEdgeArgs = {
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
};
export type CreateRoleInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  role: RoleInput;
};
export type CreateRolePayload = {
  __typename?: 'CreateRolePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  dep?: Maybe<Department>;
  query?: Maybe<Query>;
  role?: Maybe<Role>;
  roleEdge?: Maybe<RolesEdge>;
};
export type CreateRolePayloadRoleEdgeArgs = {
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
};
export type CreateStandardKpiInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  standardKpi: StandardKpiInput;
};
export type CreateStandardKpiPayload = {
  __typename?: 'CreateStandardKpiPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
  standardKpi?: Maybe<StandardKpi>;
  standardKpiEdge?: Maybe<StandardKpisEdge>;
};
export type CreateStandardKpiPayloadStandardKpiEdgeArgs = {
  orderBy?: InputMaybe<Array<StandardKpisOrderBy>>;
};
export type CreateStandardMilestoneInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  standardMilestone: StandardMilestoneInput;
};
export type CreateStandardMilestonePayload = {
  __typename?: 'CreateStandardMilestonePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
  standardKpi?: Maybe<StandardKpi>;
  standardMilestone?: Maybe<StandardMilestone>;
  standardMilestoneEdge?: Maybe<StandardMilestonesEdge>;
};
export type CreateStandardMilestonePayloadStandardMilestoneEdgeArgs = {
  orderBy?: InputMaybe<Array<StandardMilestonesOrderBy>>;
};
export type CreateTaskInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  task: TaskInput;
};
export type CreateTaskPayload = {
  __typename?: 'CreateTaskPayload';
  assignee?: Maybe<User>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
  task?: Maybe<Task>;
  taskEdge?: Maybe<TasksEdge>;
};
export type CreateTaskPayloadTaskEdgeArgs = {
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};
export type CreateUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  user: UserInput;
};
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  dep?: Maybe<Department>;
  query?: Maybe<Query>;
  r?: Maybe<Role>;
  user?: Maybe<User>;
  userEdge?: Maybe<UsersEdge>;
};
export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};
export type DeleteAgentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};
export type DeleteAgentPayload = {
  __typename?: 'DeleteAgentPayload';
  agent?: Maybe<Agent>;
  agentEdge?: Maybe<AgentsEdge>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedAgentNodeId?: Maybe<Scalars['ID']['output']>;
  query?: Maybe<Query>;
};
export type DeleteAgentPayloadAgentEdgeArgs = {
  orderBy?: InputMaybe<Array<AgentsOrderBy>>;
};
export type DeleteChatInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};
export type DeleteChatMessageInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};
export type DeleteChatMessagePayload = {
  __typename?: 'DeleteChatMessagePayload';
  chat?: Maybe<Chat>;
  chatMessage?: Maybe<ChatMessage>;
  chatMessageEdge?: Maybe<ChatMessagesEdge>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedChatMessageNodeId?: Maybe<Scalars['ID']['output']>;
  query?: Maybe<Query>;
};
export type DeleteChatMessagePayloadChatMessageEdgeArgs = {
  orderBy?: InputMaybe<Array<ChatMessagesOrderBy>>;
};
export type DeleteChatPayload = {
  __typename?: 'DeleteChatPayload';
  chat?: Maybe<Chat>;
  chatEdge?: Maybe<ChatsEdge>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedChatNodeId?: Maybe<Scalars['ID']['output']>;
  query?: Maybe<Query>;
};
export type DeleteChatPayloadChatEdgeArgs = {
  orderBy?: InputMaybe<Array<ChatsOrderBy>>;
};
export type DeleteCommentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};
export type DeleteCommentPayload = {
  __typename?: 'DeleteCommentPayload';
  author?: Maybe<User>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Comment>;
  commentEdge?: Maybe<CommentsEdge>;
  deletedCommentNodeId?: Maybe<Scalars['ID']['output']>;
  query?: Maybe<Query>;
};
export type DeleteCommentPayloadCommentEdgeArgs = {
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};
export type DeleteDepartmentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  depId: Scalars['String']['input'];
};
export type DeleteDepartmentPayload = {
  __typename?: 'DeleteDepartmentPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedDepartmentNodeId?: Maybe<Scalars['ID']['output']>;
  department?: Maybe<Department>;
  departmentEdge?: Maybe<DepartmentsEdge>;
  org?: Maybe<Organization>;
  query?: Maybe<Query>;
};
export type DeleteDepartmentPayloadDepartmentEdgeArgs = {
  orderBy?: InputMaybe<Array<DepartmentsOrderBy>>;
};
export type DeleteDocumentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};
export type DeleteDocumentPayload = {
  __typename?: 'DeleteDocumentPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedDocumentNodeId?: Maybe<Scalars['ID']['output']>;
  document?: Maybe<Document>;
  documentEdge?: Maybe<DocumentsEdge>;
  query?: Maybe<Query>;
};
export type DeleteDocumentPayloadDocumentEdgeArgs = {
  orderBy?: InputMaybe<Array<DocumentsOrderBy>>;
};
export type DeleteExternalAppEndpointInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalAppEndpointId: Scalars['String']['input'];
};
export type DeleteExternalAppEndpointPayload = {
  __typename?: 'DeleteExternalAppEndpointPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedExternalAppEndpointNodeId?: Maybe<Scalars['ID']['output']>;
  externalAppByExternalAppId?: Maybe<ExternalApp>;
  externalAppEndpoint?: Maybe<ExternalAppEndpoint>;
  externalAppEndpointEdge?: Maybe<ExternalAppEndpointsEdge>;
  query?: Maybe<Query>;
};
export type DeleteExternalAppEndpointPayloadExternalAppEndpointEdgeArgs = {
  orderBy?: InputMaybe<Array<ExternalAppEndpointsOrderBy>>;
};
export type DeleteExternalAppInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalAppId: Scalars['String']['input'];
};
export type DeleteExternalAppPayload = {
  __typename?: 'DeleteExternalAppPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedExternalAppNodeId?: Maybe<Scalars['ID']['output']>;
  externalApp?: Maybe<ExternalApp>;
  externalAppEdge?: Maybe<ExternalAppsEdge>;
  query?: Maybe<Query>;
};
export type DeleteExternalAppPayloadExternalAppEdgeArgs = {
  orderBy?: InputMaybe<Array<ExternalAppsOrderBy>>;
};
export type DeleteExternalAuthenticationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalAuthenticationId: Scalars['String']['input'];
};
export type DeleteExternalAuthenticationKpiInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalAuthenticationKpiId: Scalars['String']['input'];
};
export type DeleteExternalAuthenticationKpiPayload = {
  __typename?: 'DeleteExternalAuthenticationKpiPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedExternalAuthenticationKpiNodeId?: Maybe<Scalars['ID']['output']>;
  externalAuthenticationByExternalAuthenticationId?: Maybe<ExternalAuthentication>;
  externalAuthenticationKpi?: Maybe<ExternalAuthenticationKpi>;
  externalAuthenticationKpiEdge?: Maybe<ExternalAuthenticationKpisEdge>;
  kpi?: Maybe<Kpi>;
  query?: Maybe<Query>;
};
export type DeleteExternalAuthenticationKpiPayloadExternalAuthenticationKpiEdgeArgs = {
  orderBy?: InputMaybe<Array<ExternalAuthenticationKpisOrderBy>>;
};
export type DeleteExternalAuthenticationPayload = {
  __typename?: 'DeleteExternalAuthenticationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedExternalAuthenticationNodeId?: Maybe<Scalars['ID']['output']>;
  externalAppByExternalAppId?: Maybe<ExternalApp>;
  externalAuthentication?: Maybe<ExternalAuthentication>;
  externalAuthenticationEdge?: Maybe<ExternalAuthenticationsEdge>;
  externalAuthenticationTypeByExternalAuthenticationTypeId?: Maybe<ExternalAuthenticationType>;
  query?: Maybe<Query>;
};
export type DeleteExternalAuthenticationPayloadExternalAuthenticationEdgeArgs = {
  orderBy?: InputMaybe<Array<ExternalAuthenticationsOrderBy>>;
};
export type DeleteExternalAuthenticationTypeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalAuthenticationTypeId: Scalars['String']['input'];
};
export type DeleteExternalAuthenticationTypePayload = {
  __typename?: 'DeleteExternalAuthenticationTypePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedExternalAuthenticationTypeNodeId?: Maybe<Scalars['ID']['output']>;
  externalAuthenticationType?: Maybe<ExternalAuthenticationType>;
  externalAuthenticationTypeEdge?: Maybe<ExternalAuthenticationTypesEdge>;
  query?: Maybe<Query>;
};
export type DeleteExternalAuthenticationTypePayloadExternalAuthenticationTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<ExternalAuthenticationTypesOrderBy>>;
};
export type DeleteIndustryInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  industryId: Scalars['String']['input'];
};
export type DeleteIndustryPayload = {
  __typename?: 'DeleteIndustryPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIndustryNodeId?: Maybe<Scalars['ID']['output']>;
  industry?: Maybe<Industry>;
  industryEdge?: Maybe<IndustriesEdge>;
  query?: Maybe<Query>;
};
export type DeleteIndustryPayloadIndustryEdgeArgs = {
  orderBy?: InputMaybe<Array<IndustriesOrderBy>>;
};
export type DeleteKpiDelegateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  kpiDelegateId: Scalars['String']['input'];
};
export type DeleteKpiDelegatePayload = {
  __typename?: 'DeleteKpiDelegatePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedKpiDelegateNodeId?: Maybe<Scalars['ID']['output']>;
  kpi?: Maybe<Kpi>;
  kpiDelegate?: Maybe<KpiDelegate>;
  kpiDelegateEdge?: Maybe<KpiDelegatesEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type DeleteKpiDelegatePayloadKpiDelegateEdgeArgs = {
  orderBy?: InputMaybe<Array<KpiDelegatesOrderBy>>;
};
export type DeleteKpiHistoryInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  kpiHistoryId: Scalars['String']['input'];
};
export type DeleteKpiHistoryPayload = {
  __typename?: 'DeleteKpiHistoryPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedKpiHistoryNodeId?: Maybe<Scalars['ID']['output']>;
  kpi?: Maybe<Kpi>;
  kpiHistory?: Maybe<KpiHistory>;
  kpiHistoryEdge?: Maybe<KpiHistoriesEdge>;
  query?: Maybe<Query>;
};
export type DeleteKpiHistoryPayloadKpiHistoryEdgeArgs = {
  orderBy?: InputMaybe<Array<KpiHistoriesOrderBy>>;
};
export type DeleteKpiInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  kpiId: Scalars['String']['input'];
};
export type DeleteKpiPayload = {
  __typename?: 'DeleteKpiPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedKpiNodeId?: Maybe<Scalars['ID']['output']>;
  kpi?: Maybe<Kpi>;
  kpiEdge?: Maybe<KpisEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type DeleteKpiPayloadKpiEdgeArgs = {
  orderBy?: InputMaybe<Array<KpisOrderBy>>;
};
export type DeleteMeetingHistoryInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meetingHistoryId: Scalars['String']['input'];
};
export type DeleteMeetingHistoryPayload = {
  __typename?: 'DeleteMeetingHistoryPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedMeetingHistoryNodeId?: Maybe<Scalars['ID']['output']>;
  meeting?: Maybe<Meeting>;
  meetingHistory?: Maybe<MeetingHistory>;
  meetingHistoryEdge?: Maybe<MeetingHistoriesEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type DeleteMeetingHistoryPayloadMeetingHistoryEdgeArgs = {
  orderBy?: InputMaybe<Array<MeetingHistoriesOrderBy>>;
};
export type DeleteMeetingInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meetingId: Scalars['String']['input'];
};
export type DeleteMeetingKpiInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meetingKpiId: Scalars['String']['input'];
};
export type DeleteMeetingKpiPayload = {
  __typename?: 'DeleteMeetingKpiPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedMeetingKpiNodeId?: Maybe<Scalars['ID']['output']>;
  kpi?: Maybe<Kpi>;
  meeting?: Maybe<Meeting>;
  meetingKpi?: Maybe<MeetingKpi>;
  meetingKpiEdge?: Maybe<MeetingKpisEdge>;
  query?: Maybe<Query>;
};
export type DeleteMeetingKpiPayloadMeetingKpiEdgeArgs = {
  orderBy?: InputMaybe<Array<MeetingKpisOrderBy>>;
};
export type DeleteMeetingPayload = {
  __typename?: 'DeleteMeetingPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedMeetingNodeId?: Maybe<Scalars['ID']['output']>;
  meeting?: Maybe<Meeting>;
  meetingEdge?: Maybe<MeetingsEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type DeleteMeetingPayloadMeetingEdgeArgs = {
  orderBy?: InputMaybe<Array<MeetingsOrderBy>>;
};
export type DeleteMeetingUserHistoryInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meetingUserHistoryId: Scalars['String']['input'];
};
export type DeleteMeetingUserHistoryPayload = {
  __typename?: 'DeleteMeetingUserHistoryPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedMeetingUserHistoryNodeId?: Maybe<Scalars['ID']['output']>;
  meetingUserHistory?: Maybe<MeetingUserHistory>;
  meetingUserHistoryEdge?: Maybe<MeetingUserHistoriesEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type DeleteMeetingUserHistoryPayloadMeetingUserHistoryEdgeArgs = {
  orderBy?: InputMaybe<Array<MeetingUserHistoriesOrderBy>>;
};
export type DeleteMeetingUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meetingUserId: Scalars['String']['input'];
};
export type DeleteMeetingUserPayload = {
  __typename?: 'DeleteMeetingUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedMeetingUserNodeId?: Maybe<Scalars['ID']['output']>;
  meetingUser?: Maybe<MeetingUser>;
  meetingUserEdge?: Maybe<MeetingUsersEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type DeleteMeetingUserPayloadMeetingUserEdgeArgs = {
  orderBy?: InputMaybe<Array<MeetingUsersOrderBy>>;
};
export type DeleteOrganizationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  orgId: Scalars['String']['input'];
};
export type DeleteOrganizationPayload = {
  __typename?: 'DeleteOrganizationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedOrganizationNodeId?: Maybe<Scalars['ID']['output']>;
  industryByIndustryId?: Maybe<Industry>;
  organization?: Maybe<Organization>;
  organizationEdge?: Maybe<OrganizationsEdge>;
  query?: Maybe<Query>;
};
export type DeleteOrganizationPayloadOrganizationEdgeArgs = {
  orderBy?: InputMaybe<Array<OrganizationsOrderBy>>;
};
export type DeleteProjectInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};
export type DeleteProjectPayload = {
  __typename?: 'DeleteProjectPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedProjectNodeId?: Maybe<Scalars['ID']['output']>;
  org?: Maybe<Organization>;
  project?: Maybe<Project>;
  projectEdge?: Maybe<ProjectsEdge>;
  query?: Maybe<Query>;
};
export type DeleteProjectPayloadProjectEdgeArgs = {
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
};
export type DeleteRoleInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rId: Scalars['String']['input'];
};
export type DeleteRolePayload = {
  __typename?: 'DeleteRolePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedRoleNodeId?: Maybe<Scalars['ID']['output']>;
  dep?: Maybe<Department>;
  query?: Maybe<Query>;
  role?: Maybe<Role>;
  roleEdge?: Maybe<RolesEdge>;
};
export type DeleteRolePayloadRoleEdgeArgs = {
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
};
export type DeleteStandardKpiInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  standardKpiId: Scalars['String']['input'];
};
export type DeleteStandardKpiPayload = {
  __typename?: 'DeleteStandardKpiPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedStandardKpiNodeId?: Maybe<Scalars['ID']['output']>;
  query?: Maybe<Query>;
  standardKpi?: Maybe<StandardKpi>;
  standardKpiEdge?: Maybe<StandardKpisEdge>;
};
export type DeleteStandardKpiPayloadStandardKpiEdgeArgs = {
  orderBy?: InputMaybe<Array<StandardKpisOrderBy>>;
};
export type DeleteStandardMilestoneInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  standardMilestoneId: Scalars['String']['input'];
};
export type DeleteStandardMilestonePayload = {
  __typename?: 'DeleteStandardMilestonePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedStandardMilestoneNodeId?: Maybe<Scalars['ID']['output']>;
  query?: Maybe<Query>;
  standardKpi?: Maybe<StandardKpi>;
  standardMilestone?: Maybe<StandardMilestone>;
  standardMilestoneEdge?: Maybe<StandardMilestonesEdge>;
};
export type DeleteStandardMilestonePayloadStandardMilestoneEdgeArgs = {
  orderBy?: InputMaybe<Array<StandardMilestonesOrderBy>>;
};
export type DeleteTaskInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};
export type DeleteTaskPayload = {
  __typename?: 'DeleteTaskPayload';
  assignee?: Maybe<User>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedTaskNodeId?: Maybe<Scalars['ID']['output']>;
  query?: Maybe<Query>;
  task?: Maybe<Task>;
  taskEdge?: Maybe<TasksEdge>;
};
export type DeleteTaskPayloadTaskEdgeArgs = {
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};
export type DeleteUserByEmailInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
};
export type DeleteUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  uId: Scalars['String']['input'];
};
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedUserNodeId?: Maybe<Scalars['ID']['output']>;
  dep?: Maybe<Department>;
  query?: Maybe<Query>;
  r?: Maybe<Role>;
  user?: Maybe<User>;
  userEdge?: Maybe<UsersEdge>;
};
export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};
export type Department = {
  __typename?: 'Department';
  createdAt: Scalars['Datetime']['output'];
  depId: Scalars['String']['output'];
  deptName?: Maybe<Scalars['String']['output']>;
  org?: Maybe<Organization>;
  orgId?: Maybe<Scalars['String']['output']>;
  rolesByDepId: Array<Role>;
  rolesByDepIdConnection: RolesConnection;
  updatedAt: Scalars['Datetime']['output'];
  usersByDepId: Array<User>;
  usersByDepIdConnection: UsersConnection;
};
export type DepartmentRolesByDepIdArgs = {
  condition?: InputMaybe<RoleCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
};
export type DepartmentRolesByDepIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RoleCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
};
export type DepartmentUsersByDepIdArgs = {
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};
export type DepartmentUsersByDepIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};
export type DepartmentCondition = {
  depId?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['String']['input']>;
};
export type DepartmentInput = {
  createdAt: Scalars['Datetime']['input'];
  depId: Scalars['String']['input'];
  deptName?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['String']['input']>;
  updatedAt: Scalars['Datetime']['input'];
};
export type DepartmentPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  depId?: InputMaybe<Scalars['String']['input']>;
  deptName?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type DepartmentsConnection = {
  __typename?: 'DepartmentsConnection';
  edges: Array<DepartmentsEdge>;
  nodes: Array<Department>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type DepartmentsEdge = {
  __typename?: 'DepartmentsEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: Department;
};
export enum DepartmentsOrderBy {
  DepIdAsc = 'DEP_ID_ASC',
  DepIdDesc = 'DEP_ID_DESC',
  Natural = 'NATURAL',
  OrgIdAsc = 'ORG_ID_ASC',
  OrgIdDesc = 'ORG_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type Document = {
  __typename?: 'Document';
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  projectId: Scalars['UUID']['output'];
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
};
export type DocumentCondition = {
  id?: InputMaybe<Scalars['UUID']['input']>;
};
export type DocumentInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  projectId: Scalars['UUID']['input'];
  title: Scalars['String']['input'];
  type: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type DocumentPatch = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  projectId?: InputMaybe<Scalars['UUID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type DocumentsConnection = {
  __typename?: 'DocumentsConnection';
  edges: Array<DocumentsEdge>;
  nodes: Array<Document>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type DocumentsEdge = {
  __typename?: 'DocumentsEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: Document;
};
export enum DocumentsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export enum EnumKpiCharpStatus {
  A = 'A',
  C = 'C',
  H = 'H',
  P = 'P',
  R = 'R'
}
export type ExternalApp = {
  __typename?: 'ExternalApp';
  authenticationUrl: Scalars['String']['output'];
  authorizationHeader?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Datetime']['output'];
  deletedAt?: Maybe<Scalars['Datetime']['output']>;
  externalAppEndpointsByExternalAppId: Array<ExternalAppEndpoint>;
  externalAppEndpointsByExternalAppIdConnection: ExternalAppEndpointsConnection;
  externalAppId: Scalars['String']['output'];
  externalAuthenticationsByExternalAppId: Array<ExternalAuthentication>;
  externalAuthenticationsByExternalAppIdConnection: ExternalAuthenticationsConnection;
  logoPath?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  redirectUri?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Datetime']['output'];
};
export type ExternalAppExternalAppEndpointsByExternalAppIdArgs = {
  condition?: InputMaybe<ExternalAppEndpointCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAppEndpointsOrderBy>>;
};
export type ExternalAppExternalAppEndpointsByExternalAppIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ExternalAppEndpointCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAppEndpointsOrderBy>>;
};
export type ExternalAppExternalAuthenticationsByExternalAppIdArgs = {
  condition?: InputMaybe<ExternalAuthenticationCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAuthenticationsOrderBy>>;
};
export type ExternalAppExternalAuthenticationsByExternalAppIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ExternalAuthenticationCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAuthenticationsOrderBy>>;
};
export type ExternalAppCondition = {
  externalAppId?: InputMaybe<Scalars['String']['input']>;
};
export type ExternalAppEndpoint = {
  __typename?: 'ExternalAppEndpoint';
  createdAt: Scalars['Datetime']['output'];
  deletedAt?: Maybe<Scalars['Datetime']['output']>;
  endpointName: Scalars['String']['output'];
  endpointPath?: Maybe<Scalars['String']['output']>;
  endpointStatus: Scalars['String']['output'];
  externalAppByExternalAppId?: Maybe<ExternalApp>;
  externalAppEndpointId: Scalars['String']['output'];
  externalAppId: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
};
export type ExternalAppEndpointCondition = {
  externalAppEndpointId?: InputMaybe<Scalars['String']['input']>;
  externalAppId?: InputMaybe<Scalars['String']['input']>;
};
export type ExternalAppEndpointInput = {
  createdAt: Scalars['Datetime']['input'];
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  endpointName: Scalars['String']['input'];
  endpointPath?: InputMaybe<Scalars['String']['input']>;
  endpointStatus: Scalars['String']['input'];
  externalAppEndpointId: Scalars['String']['input'];
  externalAppId: Scalars['String']['input'];
  updatedAt: Scalars['Datetime']['input'];
};
export type ExternalAppEndpointPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  endpointName?: InputMaybe<Scalars['String']['input']>;
  endpointPath?: InputMaybe<Scalars['String']['input']>;
  endpointStatus?: InputMaybe<Scalars['String']['input']>;
  externalAppEndpointId?: InputMaybe<Scalars['String']['input']>;
  externalAppId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type ExternalAppEndpointsConnection = {
  __typename?: 'ExternalAppEndpointsConnection';
  edges: Array<ExternalAppEndpointsEdge>;
  nodes: Array<ExternalAppEndpoint>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type ExternalAppEndpointsEdge = {
  __typename?: 'ExternalAppEndpointsEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: ExternalAppEndpoint;
};
export enum ExternalAppEndpointsOrderBy {
  ExternalAppEndpointIdAsc = 'EXTERNAL_APP_ENDPOINT_ID_ASC',
  ExternalAppEndpointIdDesc = 'EXTERNAL_APP_ENDPOINT_ID_DESC',
  ExternalAppIdAsc = 'EXTERNAL_APP_ID_ASC',
  ExternalAppIdDesc = 'EXTERNAL_APP_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type ExternalAppInput = {
  authenticationUrl: Scalars['String']['input'];
  authorizationHeader?: InputMaybe<Scalars['String']['input']>;
  createdAt: Scalars['Datetime']['input'];
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  externalAppId: Scalars['String']['input'];
  logoPath?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  redirectUri?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  updatedAt: Scalars['Datetime']['input'];
};
export type ExternalAppPatch = {
  authenticationUrl?: InputMaybe<Scalars['String']['input']>;
  authorizationHeader?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  externalAppId?: InputMaybe<Scalars['String']['input']>;
  logoPath?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  redirectUri?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type ExternalAppsConnection = {
  __typename?: 'ExternalAppsConnection';
  edges: Array<ExternalAppsEdge>;
  nodes: Array<ExternalApp>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type ExternalAppsEdge = {
  __typename?: 'ExternalAppsEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: ExternalApp;
};
export enum ExternalAppsOrderBy {
  ExternalAppIdAsc = 'EXTERNAL_APP_ID_ASC',
  ExternalAppIdDesc = 'EXTERNAL_APP_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type ExternalAuthentication = {
  __typename?: 'ExternalAuthentication';
  configuration: Scalars['JSON']['output'];
  createdAt: Scalars['Datetime']['output'];
  deletedAt?: Maybe<Scalars['Datetime']['output']>;
  externalAppByExternalAppId?: Maybe<ExternalApp>;
  externalAppId: Scalars['String']['output'];
  externalAuthenticationId: Scalars['String']['output'];
  externalAuthenticationKpisByExternalAuthenticationId: Array<ExternalAuthenticationKpi>;
  externalAuthenticationKpisByExternalAuthenticationIdConnection: ExternalAuthenticationKpisConnection;
  externalAuthenticationTypeByExternalAuthenticationTypeId?: Maybe<ExternalAuthenticationType>;
  externalAuthenticationTypeId: Scalars['String']['output'];
  uId: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
};
export type ExternalAuthenticationExternalAuthenticationKpisByExternalAuthenticationIdArgs = {
  condition?: InputMaybe<ExternalAuthenticationKpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAuthenticationKpisOrderBy>>;
};
export type ExternalAuthenticationExternalAuthenticationKpisByExternalAuthenticationIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ExternalAuthenticationKpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAuthenticationKpisOrderBy>>;
};
export type ExternalAuthenticationCondition = {
  externalAppId?: InputMaybe<Scalars['String']['input']>;
  externalAuthenticationId?: InputMaybe<Scalars['String']['input']>;
  externalAuthenticationTypeId?: InputMaybe<Scalars['String']['input']>;
  uId?: InputMaybe<Scalars['String']['input']>;
};
export type ExternalAuthenticationInput = {
  configuration: Scalars['JSON']['input'];
  createdAt: Scalars['Datetime']['input'];
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  externalAppId: Scalars['String']['input'];
  externalAuthenticationId: Scalars['String']['input'];
  externalAuthenticationTypeId: Scalars['String']['input'];
  uId: Scalars['String']['input'];
  updatedAt: Scalars['Datetime']['input'];
};
export type ExternalAuthenticationKpi = {
  __typename?: 'ExternalAuthenticationKpi';
  createdAt: Scalars['Datetime']['output'];
  dataEndpoint?: Maybe<Scalars['String']['output']>;
  dataLogic?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['Datetime']['output']>;
  externalAppEndpointId?: Maybe<Scalars['String']['output']>;
  externalAuthenticationByExternalAuthenticationId?: Maybe<ExternalAuthentication>;
  externalAuthenticationId: Scalars['String']['output'];
  externalAuthenticationKpiId: Scalars['String']['output'];
  kpi?: Maybe<Kpi>;
  kpiId: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
};
export type ExternalAuthenticationKpiCondition = {
  externalAuthenticationId?: InputMaybe<Scalars['String']['input']>;
  externalAuthenticationKpiId?: InputMaybe<Scalars['String']['input']>;
  kpiId?: InputMaybe<Scalars['String']['input']>;
};
export type ExternalAuthenticationKpiInput = {
  createdAt: Scalars['Datetime']['input'];
  dataEndpoint?: InputMaybe<Scalars['String']['input']>;
  dataLogic?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  externalAppEndpointId?: InputMaybe<Scalars['String']['input']>;
  externalAuthenticationId: Scalars['String']['input'];
  externalAuthenticationKpiId: Scalars['String']['input'];
  kpiId: Scalars['String']['input'];
  updatedAt: Scalars['Datetime']['input'];
};
export type ExternalAuthenticationKpiPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  dataEndpoint?: InputMaybe<Scalars['String']['input']>;
  dataLogic?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  externalAppEndpointId?: InputMaybe<Scalars['String']['input']>;
  externalAuthenticationId?: InputMaybe<Scalars['String']['input']>;
  externalAuthenticationKpiId?: InputMaybe<Scalars['String']['input']>;
  kpiId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type ExternalAuthenticationKpisConnection = {
  __typename?: 'ExternalAuthenticationKpisConnection';
  edges: Array<ExternalAuthenticationKpisEdge>;
  nodes: Array<ExternalAuthenticationKpi>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type ExternalAuthenticationKpisEdge = {
  __typename?: 'ExternalAuthenticationKpisEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: ExternalAuthenticationKpi;
};
export enum ExternalAuthenticationKpisOrderBy {
  ExternalAuthenticationIdAsc = 'EXTERNAL_AUTHENTICATION_ID_ASC',
  ExternalAuthenticationIdDesc = 'EXTERNAL_AUTHENTICATION_ID_DESC',
  ExternalAuthenticationKpiIdAsc = 'EXTERNAL_AUTHENTICATION_KPI_ID_ASC',
  ExternalAuthenticationKpiIdDesc = 'EXTERNAL_AUTHENTICATION_KPI_ID_DESC',
  KpiIdAsc = 'KPI_ID_ASC',
  KpiIdDesc = 'KPI_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type ExternalAuthenticationPatch = {
  configuration?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  externalAppId?: InputMaybe<Scalars['String']['input']>;
  externalAuthenticationId?: InputMaybe<Scalars['String']['input']>;
  externalAuthenticationTypeId?: InputMaybe<Scalars['String']['input']>;
  uId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type ExternalAuthenticationType = {
  __typename?: 'ExternalAuthenticationType';
  authenticationType: Scalars['String']['output'];
  createdAt: Scalars['Datetime']['output'];
  deletedAt?: Maybe<Scalars['Datetime']['output']>;
  externalAuthenticationTypeId: Scalars['String']['output'];
  externalAuthenticationsByExternalAuthenticationTypeId: Array<ExternalAuthentication>;
  externalAuthenticationsByExternalAuthenticationTypeIdConnection: ExternalAuthenticationsConnection;
  updatedAt: Scalars['Datetime']['output'];
};
export type ExternalAuthenticationTypeExternalAuthenticationsByExternalAuthenticationTypeIdArgs = {
  condition?: InputMaybe<ExternalAuthenticationCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAuthenticationsOrderBy>>;
};
export type ExternalAuthenticationTypeExternalAuthenticationsByExternalAuthenticationTypeIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ExternalAuthenticationCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAuthenticationsOrderBy>>;
};
export type ExternalAuthenticationTypeCondition = {
  externalAuthenticationTypeId?: InputMaybe<Scalars['String']['input']>;
};
export type ExternalAuthenticationTypeInput = {
  authenticationType: Scalars['String']['input'];
  createdAt: Scalars['Datetime']['input'];
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  externalAuthenticationTypeId: Scalars['String']['input'];
  updatedAt: Scalars['Datetime']['input'];
};
export type ExternalAuthenticationTypePatch = {
  authenticationType?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  externalAuthenticationTypeId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type ExternalAuthenticationTypesConnection = {
  __typename?: 'ExternalAuthenticationTypesConnection';
  edges: Array<ExternalAuthenticationTypesEdge>;
  nodes: Array<ExternalAuthenticationType>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type ExternalAuthenticationTypesEdge = {
  __typename?: 'ExternalAuthenticationTypesEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: ExternalAuthenticationType;
};
export enum ExternalAuthenticationTypesOrderBy {
  ExternalAuthenticationTypeIdAsc = 'EXTERNAL_AUTHENTICATION_TYPE_ID_ASC',
  ExternalAuthenticationTypeIdDesc = 'EXTERNAL_AUTHENTICATION_TYPE_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type ExternalAuthenticationsConnection = {
  __typename?: 'ExternalAuthenticationsConnection';
  edges: Array<ExternalAuthenticationsEdge>;
  nodes: Array<ExternalAuthentication>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type ExternalAuthenticationsEdge = {
  __typename?: 'ExternalAuthenticationsEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: ExternalAuthentication;
};
export enum ExternalAuthenticationsOrderBy {
  ExternalAppIdAsc = 'EXTERNAL_APP_ID_ASC',
  ExternalAppIdDesc = 'EXTERNAL_APP_ID_DESC',
  ExternalAuthenticationIdAsc = 'EXTERNAL_AUTHENTICATION_ID_ASC',
  ExternalAuthenticationIdDesc = 'EXTERNAL_AUTHENTICATION_ID_DESC',
  ExternalAuthenticationTypeIdAsc = 'EXTERNAL_AUTHENTICATION_TYPE_ID_ASC',
  ExternalAuthenticationTypeIdDesc = 'EXTERNAL_AUTHENTICATION_TYPE_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UIdAsc = 'U_ID_ASC',
  UIdDesc = 'U_ID_DESC'
}
export type IndustriesConnection = {
  __typename?: 'IndustriesConnection';
  edges: Array<IndustriesEdge>;
  nodes: Array<Industry>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type IndustriesEdge = {
  __typename?: 'IndustriesEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: Industry;
};
export enum IndustriesOrderBy {
  IndustryIdAsc = 'INDUSTRY_ID_ASC',
  IndustryIdDesc = 'INDUSTRY_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type Industry = {
  __typename?: 'Industry';
  createdAt: Scalars['Datetime']['output'];
  deletedAt?: Maybe<Scalars['Datetime']['output']>;
  industryId: Scalars['String']['output'];
  industryName?: Maybe<Scalars['String']['output']>;
  organizationsByIndustryId: Array<Organization>;
  organizationsByIndustryIdConnection: OrganizationsConnection;
  updatedAt: Scalars['Datetime']['output'];
};
export type IndustryOrganizationsByIndustryIdArgs = {
  condition?: InputMaybe<OrganizationCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrganizationsOrderBy>>;
};
export type IndustryOrganizationsByIndustryIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OrganizationCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrganizationsOrderBy>>;
};
export type IndustryCondition = {
  industryId?: InputMaybe<Scalars['String']['input']>;
};
export type IndustryInput = {
  createdAt: Scalars['Datetime']['input'];
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  industryId: Scalars['String']['input'];
  industryName?: InputMaybe<Scalars['String']['input']>;
  updatedAt: Scalars['Datetime']['input'];
};
export type IndustryPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  industryId?: InputMaybe<Scalars['String']['input']>;
  industryName?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type Kpi = {
  __typename?: 'Kpi';
  achieveQty?: Maybe<Scalars['String']['output']>;
  charpStatus: EnumKpiCharpStatus;
  createdAt: Scalars['Datetime']['output'];
  deletedAt?: Maybe<Scalars['Datetime']['output']>;
  dependFlag?: Maybe<Scalars['Boolean']['output']>;
  driverId?: Maybe<Scalars['String']['output']>;
  dueData?: Maybe<Scalars['Date']['output']>;
  externalAuthenticationKpis: Array<ExternalAuthenticationKpi>;
  externalAuthenticationKpisConnection: ExternalAuthenticationKpisConnection;
  isCorporateKpi?: Maybe<Scalars['Boolean']['output']>;
  kpiDelegates: Array<KpiDelegate>;
  kpiDelegatesConnection: KpiDelegatesConnection;
  kpiHistories: Array<KpiHistory>;
  kpiHistoriesConnection: KpiHistoriesConnection;
  kpiId: Scalars['String']['output'];
  kpiType?: Maybe<Scalars['String']['output']>;
  meetingKpis: Array<MeetingKpi>;
  meetingKpisConnection: MeetingKpisConnection;
  objective?: Maybe<Scalars['String']['output']>;
  parentKpiId?: Maybe<Scalars['String']['output']>;
  performanceDirection?: Maybe<Scalars['String']['output']>;
  qty?: Maybe<Scalars['String']['output']>;
  reportingFrequency?: Maybe<Scalars['String']['output']>;
  standardKpiId?: Maybe<Scalars['String']['output']>;
  u?: Maybe<User>;
  uId?: Maybe<Scalars['String']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Datetime']['output'];
};
export type KpiExternalAuthenticationKpisArgs = {
  condition?: InputMaybe<ExternalAuthenticationKpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAuthenticationKpisOrderBy>>;
};
export type KpiExternalAuthenticationKpisConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ExternalAuthenticationKpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAuthenticationKpisOrderBy>>;
};
export type KpiKpiDelegatesArgs = {
  condition?: InputMaybe<KpiDelegateCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<KpiDelegatesOrderBy>>;
};
export type KpiKpiDelegatesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<KpiDelegateCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<KpiDelegatesOrderBy>>;
};
export type KpiKpiHistoriesArgs = {
  condition?: InputMaybe<KpiHistoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<KpiHistoriesOrderBy>>;
};
export type KpiKpiHistoriesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<KpiHistoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<KpiHistoriesOrderBy>>;
};
export type KpiMeetingKpisArgs = {
  condition?: InputMaybe<MeetingKpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingKpisOrderBy>>;
};
export type KpiMeetingKpisConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MeetingKpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingKpisOrderBy>>;
};
export type KpiCondition = {
  kpiId?: InputMaybe<Scalars['String']['input']>;
  uId?: InputMaybe<Scalars['String']['input']>;
};
export type KpiDelegate = {
  __typename?: 'KpiDelegate';
  createdAt: Scalars['Datetime']['output'];
  deactivationDate?: Maybe<Scalars['Datetime']['output']>;
  delegateStatus: Scalars['String']['output'];
  kpi?: Maybe<Kpi>;
  kpiDelegateId: Scalars['String']['output'];
  kpiId: Scalars['String']['output'];
  u?: Maybe<User>;
  uId: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
};
export type KpiDelegateCondition = {
  kpiDelegateId?: InputMaybe<Scalars['String']['input']>;
  kpiId?: InputMaybe<Scalars['String']['input']>;
  uId?: InputMaybe<Scalars['String']['input']>;
};
export type KpiDelegateInput = {
  createdAt: Scalars['Datetime']['input'];
  deactivationDate?: InputMaybe<Scalars['Datetime']['input']>;
  delegateStatus: Scalars['String']['input'];
  kpiDelegateId: Scalars['String']['input'];
  kpiId: Scalars['String']['input'];
  uId: Scalars['String']['input'];
  updatedAt: Scalars['Datetime']['input'];
};
export type KpiDelegatePatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  deactivationDate?: InputMaybe<Scalars['Datetime']['input']>;
  delegateStatus?: InputMaybe<Scalars['String']['input']>;
  kpiDelegateId?: InputMaybe<Scalars['String']['input']>;
  kpiId?: InputMaybe<Scalars['String']['input']>;
  uId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type KpiDelegatesConnection = {
  __typename?: 'KpiDelegatesConnection';
  edges: Array<KpiDelegatesEdge>;
  nodes: Array<KpiDelegate>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type KpiDelegatesEdge = {
  __typename?: 'KpiDelegatesEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: KpiDelegate;
};
export enum KpiDelegatesOrderBy {
  KpiDelegateIdAsc = 'KPI_DELEGATE_ID_ASC',
  KpiDelegateIdDesc = 'KPI_DELEGATE_ID_DESC',
  KpiIdAsc = 'KPI_ID_ASC',
  KpiIdDesc = 'KPI_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UIdAsc = 'U_ID_ASC',
  UIdDesc = 'U_ID_DESC'
}
export type KpiHistoriesConnection = {
  __typename?: 'KpiHistoriesConnection';
  edges: Array<KpiHistoriesEdge>;
  nodes: Array<KpiHistory>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type KpiHistoriesEdge = {
  __typename?: 'KpiHistoriesEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: KpiHistory;
};
export enum KpiHistoriesOrderBy {
  KpiHistoryIdAsc = 'KPI_HISTORY_ID_ASC',
  KpiHistoryIdDesc = 'KPI_HISTORY_ID_DESC',
  KpiIdAsc = 'KPI_ID_ASC',
  KpiIdDesc = 'KPI_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type KpiHistory = {
  __typename?: 'KpiHistory';
  actualAmount?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  budgetAmount?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['Datetime']['output'];
  deletedAt?: Maybe<Scalars['Datetime']['output']>;
  frequency?: Maybe<Scalars['String']['output']>;
  kpi?: Maybe<Kpi>;
  kpiHistoryId: Scalars['String']['output'];
  kpiId?: Maybe<Scalars['String']['output']>;
  metricType?: Maybe<Scalars['String']['output']>;
  reportDate?: Maybe<Scalars['Datetime']['output']>;
  updatedAt: Scalars['Datetime']['output'];
};
export type KpiHistoryCondition = {
  kpiHistoryId?: InputMaybe<Scalars['String']['input']>;
  kpiId?: InputMaybe<Scalars['String']['input']>;
};
export type KpiHistoryInput = {
  actualAmount?: InputMaybe<Scalars['Float']['input']>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  budgetAmount?: InputMaybe<Scalars['Float']['input']>;
  createdAt: Scalars['Datetime']['input'];
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  frequency?: InputMaybe<Scalars['String']['input']>;
  kpiHistoryId: Scalars['String']['input'];
  kpiId?: InputMaybe<Scalars['String']['input']>;
  metricType?: InputMaybe<Scalars['String']['input']>;
  reportDate?: InputMaybe<Scalars['Datetime']['input']>;
  updatedAt: Scalars['Datetime']['input'];
};
export type KpiHistoryPatch = {
  actualAmount?: InputMaybe<Scalars['Float']['input']>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  budgetAmount?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  frequency?: InputMaybe<Scalars['String']['input']>;
  kpiHistoryId?: InputMaybe<Scalars['String']['input']>;
  kpiId?: InputMaybe<Scalars['String']['input']>;
  metricType?: InputMaybe<Scalars['String']['input']>;
  reportDate?: InputMaybe<Scalars['Datetime']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type KpiInput = {
  achieveQty?: InputMaybe<Scalars['String']['input']>;
  charpStatus: EnumKpiCharpStatus;
  createdAt: Scalars['Datetime']['input'];
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  dependFlag?: InputMaybe<Scalars['Boolean']['input']>;
  driverId?: InputMaybe<Scalars['String']['input']>;
  dueData?: InputMaybe<Scalars['Date']['input']>;
  isCorporateKpi?: InputMaybe<Scalars['Boolean']['input']>;
  kpiId: Scalars['String']['input'];
  kpiType?: InputMaybe<Scalars['String']['input']>;
  objective?: InputMaybe<Scalars['String']['input']>;
  parentKpiId?: InputMaybe<Scalars['String']['input']>;
  performanceDirection?: InputMaybe<Scalars['String']['input']>;
  qty?: InputMaybe<Scalars['String']['input']>;
  reportingFrequency?: InputMaybe<Scalars['String']['input']>;
  standardKpiId?: InputMaybe<Scalars['String']['input']>;
  uId?: InputMaybe<Scalars['String']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
  updatedAt: Scalars['Datetime']['input'];
};
export type KpiPatch = {
  achieveQty?: InputMaybe<Scalars['String']['input']>;
  charpStatus?: InputMaybe<EnumKpiCharpStatus>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  dependFlag?: InputMaybe<Scalars['Boolean']['input']>;
  driverId?: InputMaybe<Scalars['String']['input']>;
  dueData?: InputMaybe<Scalars['Date']['input']>;
  isCorporateKpi?: InputMaybe<Scalars['Boolean']['input']>;
  kpiId?: InputMaybe<Scalars['String']['input']>;
  kpiType?: InputMaybe<Scalars['String']['input']>;
  objective?: InputMaybe<Scalars['String']['input']>;
  parentKpiId?: InputMaybe<Scalars['String']['input']>;
  performanceDirection?: InputMaybe<Scalars['String']['input']>;
  qty?: InputMaybe<Scalars['String']['input']>;
  reportingFrequency?: InputMaybe<Scalars['String']['input']>;
  standardKpiId?: InputMaybe<Scalars['String']['input']>;
  uId?: InputMaybe<Scalars['String']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type KpisConnection = {
  __typename?: 'KpisConnection';
  edges: Array<KpisEdge>;
  nodes: Array<Kpi>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type KpisEdge = {
  __typename?: 'KpisEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: Kpi;
};
export enum KpisOrderBy {
  KpiIdAsc = 'KPI_ID_ASC',
  KpiIdDesc = 'KPI_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UIdAsc = 'U_ID_ASC',
  UIdDesc = 'U_ID_DESC'
}
export type Meeting = {
  __typename?: 'Meeting';
  createdAt: Scalars['Datetime']['output'];
  deactivationDate?: Maybe<Scalars['Datetime']['output']>;
  frequencyInterval?: Maybe<Scalars['Int']['output']>;
  meetingDate: Scalars['Datetime']['output'];
  meetingFrequency: Scalars['String']['output'];
  meetingHistories: Array<MeetingHistory>;
  meetingHistoriesConnection: MeetingHistoriesConnection;
  meetingId: Scalars['String']['output'];
  meetingInterval?: Maybe<Scalars['String']['output']>;
  meetingKpis: Array<MeetingKpi>;
  meetingKpisConnection: MeetingKpisConnection;
  meetingName: Scalars['String']['output'];
  standardMeetingId?: Maybe<Scalars['String']['output']>;
  timerData?: Maybe<Scalars['JSON']['output']>;
  u?: Maybe<User>;
  uId: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
};
export type MeetingMeetingHistoriesArgs = {
  condition?: InputMaybe<MeetingHistoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingHistoriesOrderBy>>;
};
export type MeetingMeetingHistoriesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MeetingHistoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingHistoriesOrderBy>>;
};
export type MeetingMeetingKpisArgs = {
  condition?: InputMaybe<MeetingKpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingKpisOrderBy>>;
};
export type MeetingMeetingKpisConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MeetingKpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingKpisOrderBy>>;
};
export type MeetingCondition = {
  meetingId?: InputMaybe<Scalars['String']['input']>;
  uId?: InputMaybe<Scalars['String']['input']>;
};
export type MeetingHistoriesConnection = {
  __typename?: 'MeetingHistoriesConnection';
  edges: Array<MeetingHistoriesEdge>;
  nodes: Array<MeetingHistory>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type MeetingHistoriesEdge = {
  __typename?: 'MeetingHistoriesEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: MeetingHistory;
};
export enum MeetingHistoriesOrderBy {
  MeetingHistoryIdAsc = 'MEETING_HISTORY_ID_ASC',
  MeetingHistoryIdDesc = 'MEETING_HISTORY_ID_DESC',
  MeetingIdAsc = 'MEETING_ID_ASC',
  MeetingIdDesc = 'MEETING_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UIdAsc = 'U_ID_ASC',
  UIdDesc = 'U_ID_DESC'
}
export type MeetingHistory = {
  __typename?: 'MeetingHistory';
  createdAt: Scalars['Datetime']['output'];
  deactivationDate?: Maybe<Scalars['Datetime']['output']>;
  meeting?: Maybe<Meeting>;
  meetingDate: Scalars['Datetime']['output'];
  meetingHistoryId: Scalars['String']['output'];
  meetingId?: Maybe<Scalars['String']['output']>;
  meetingName: Scalars['String']['output'];
  meetingNotes?: Maybe<Scalars['String']['output']>;
  meetingScore?: Maybe<Scalars['Int']['output']>;
  scoreNotes?: Maybe<Scalars['String']['output']>;
  timerData?: Maybe<Scalars['JSON']['output']>;
  u?: Maybe<User>;
  uId: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
};
export type MeetingHistoryCondition = {
  meetingHistoryId?: InputMaybe<Scalars['String']['input']>;
  meetingId?: InputMaybe<Scalars['String']['input']>;
  uId?: InputMaybe<Scalars['String']['input']>;
};
export type MeetingHistoryInput = {
  createdAt: Scalars['Datetime']['input'];
  deactivationDate?: InputMaybe<Scalars['Datetime']['input']>;
  meetingDate: Scalars['Datetime']['input'];
  meetingHistoryId: Scalars['String']['input'];
  meetingId?: InputMaybe<Scalars['String']['input']>;
  meetingName: Scalars['String']['input'];
  meetingNotes?: InputMaybe<Scalars['String']['input']>;
  meetingScore?: InputMaybe<Scalars['Int']['input']>;
  scoreNotes?: InputMaybe<Scalars['String']['input']>;
  timerData?: InputMaybe<Scalars['JSON']['input']>;
  uId: Scalars['String']['input'];
  updatedAt: Scalars['Datetime']['input'];
};
export type MeetingHistoryPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  deactivationDate?: InputMaybe<Scalars['Datetime']['input']>;
  meetingDate?: InputMaybe<Scalars['Datetime']['input']>;
  meetingHistoryId?: InputMaybe<Scalars['String']['input']>;
  meetingId?: InputMaybe<Scalars['String']['input']>;
  meetingName?: InputMaybe<Scalars['String']['input']>;
  meetingNotes?: InputMaybe<Scalars['String']['input']>;
  meetingScore?: InputMaybe<Scalars['Int']['input']>;
  scoreNotes?: InputMaybe<Scalars['String']['input']>;
  timerData?: InputMaybe<Scalars['JSON']['input']>;
  uId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type MeetingInput = {
  createdAt: Scalars['Datetime']['input'];
  deactivationDate?: InputMaybe<Scalars['Datetime']['input']>;
  frequencyInterval?: InputMaybe<Scalars['Int']['input']>;
  meetingDate: Scalars['Datetime']['input'];
  meetingFrequency: Scalars['String']['input'];
  meetingId: Scalars['String']['input'];
  meetingInterval?: InputMaybe<Scalars['String']['input']>;
  meetingName: Scalars['String']['input'];
  standardMeetingId?: InputMaybe<Scalars['String']['input']>;
  timerData?: InputMaybe<Scalars['JSON']['input']>;
  uId: Scalars['String']['input'];
  updatedAt: Scalars['Datetime']['input'];
};
export type MeetingKpi = {
  __typename?: 'MeetingKpi';
  createdAt: Scalars['Datetime']['output'];
  deletedAt?: Maybe<Scalars['Datetime']['output']>;
  kpi?: Maybe<Kpi>;
  kpiId: Scalars['String']['output'];
  meeting?: Maybe<Meeting>;
  meetingId: Scalars['String']['output'];
  meetingKpiId: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
};
export type MeetingKpiCondition = {
  kpiId?: InputMaybe<Scalars['String']['input']>;
  meetingId?: InputMaybe<Scalars['String']['input']>;
  meetingKpiId?: InputMaybe<Scalars['String']['input']>;
};
export type MeetingKpiInput = {
  createdAt: Scalars['Datetime']['input'];
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  kpiId: Scalars['String']['input'];
  meetingId: Scalars['String']['input'];
  meetingKpiId: Scalars['String']['input'];
  updatedAt: Scalars['Datetime']['input'];
};
export type MeetingKpiPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  kpiId?: InputMaybe<Scalars['String']['input']>;
  meetingId?: InputMaybe<Scalars['String']['input']>;
  meetingKpiId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type MeetingKpisConnection = {
  __typename?: 'MeetingKpisConnection';
  edges: Array<MeetingKpisEdge>;
  nodes: Array<MeetingKpi>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type MeetingKpisEdge = {
  __typename?: 'MeetingKpisEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: MeetingKpi;
};
export enum MeetingKpisOrderBy {
  KpiIdAsc = 'KPI_ID_ASC',
  KpiIdDesc = 'KPI_ID_DESC',
  MeetingIdAsc = 'MEETING_ID_ASC',
  MeetingIdDesc = 'MEETING_ID_DESC',
  MeetingKpiIdAsc = 'MEETING_KPI_ID_ASC',
  MeetingKpiIdDesc = 'MEETING_KPI_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type MeetingPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  deactivationDate?: InputMaybe<Scalars['Datetime']['input']>;
  frequencyInterval?: InputMaybe<Scalars['Int']['input']>;
  meetingDate?: InputMaybe<Scalars['Datetime']['input']>;
  meetingFrequency?: InputMaybe<Scalars['String']['input']>;
  meetingId?: InputMaybe<Scalars['String']['input']>;
  meetingInterval?: InputMaybe<Scalars['String']['input']>;
  meetingName?: InputMaybe<Scalars['String']['input']>;
  standardMeetingId?: InputMaybe<Scalars['String']['input']>;
  timerData?: InputMaybe<Scalars['JSON']['input']>;
  uId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type MeetingUser = {
  __typename?: 'MeetingUser';
  createdAt: Scalars['Datetime']['output'];
  dataDisplay?: Maybe<Scalars['Boolean']['output']>;
  meetingId: Scalars['String']['output'];
  meetingUserId: Scalars['String']['output'];
  u?: Maybe<User>;
  uId: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
  userRole?: Maybe<Scalars['String']['output']>;
};
export type MeetingUserCondition = {
  meetingUserId?: InputMaybe<Scalars['String']['input']>;
  uId?: InputMaybe<Scalars['String']['input']>;
};
export type MeetingUserHistoriesConnection = {
  __typename?: 'MeetingUserHistoriesConnection';
  edges: Array<MeetingUserHistoriesEdge>;
  nodes: Array<MeetingUserHistory>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type MeetingUserHistoriesEdge = {
  __typename?: 'MeetingUserHistoriesEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: MeetingUserHistory;
};
export enum MeetingUserHistoriesOrderBy {
  MeetingUserHistoryIdAsc = 'MEETING_USER_HISTORY_ID_ASC',
  MeetingUserHistoryIdDesc = 'MEETING_USER_HISTORY_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UIdAsc = 'U_ID_ASC',
  UIdDesc = 'U_ID_DESC'
}
export type MeetingUserHistory = {
  __typename?: 'MeetingUserHistory';
  createdAt: Scalars['Datetime']['output'];
  meetingHistoryId: Scalars['String']['output'];
  meetingUserHistoryId: Scalars['String']['output'];
  u?: Maybe<User>;
  uId: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
  userRole?: Maybe<Scalars['String']['output']>;
  userStatus: Scalars['String']['output'];
};
export type MeetingUserHistoryCondition = {
  meetingUserHistoryId?: InputMaybe<Scalars['String']['input']>;
  uId?: InputMaybe<Scalars['String']['input']>;
};
export type MeetingUserHistoryInput = {
  createdAt: Scalars['Datetime']['input'];
  meetingHistoryId: Scalars['String']['input'];
  meetingUserHistoryId: Scalars['String']['input'];
  uId: Scalars['String']['input'];
  updatedAt: Scalars['Datetime']['input'];
  userRole?: InputMaybe<Scalars['String']['input']>;
  userStatus: Scalars['String']['input'];
};
export type MeetingUserHistoryPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  meetingHistoryId?: InputMaybe<Scalars['String']['input']>;
  meetingUserHistoryId?: InputMaybe<Scalars['String']['input']>;
  uId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userRole?: InputMaybe<Scalars['String']['input']>;
  userStatus?: InputMaybe<Scalars['String']['input']>;
};
export type MeetingUserInput = {
  createdAt: Scalars['Datetime']['input'];
  dataDisplay?: InputMaybe<Scalars['Boolean']['input']>;
  meetingId: Scalars['String']['input'];
  meetingUserId: Scalars['String']['input'];
  uId: Scalars['String']['input'];
  updatedAt: Scalars['Datetime']['input'];
  userRole?: InputMaybe<Scalars['String']['input']>;
};
export type MeetingUserPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  dataDisplay?: InputMaybe<Scalars['Boolean']['input']>;
  meetingId?: InputMaybe<Scalars['String']['input']>;
  meetingUserId?: InputMaybe<Scalars['String']['input']>;
  uId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userRole?: InputMaybe<Scalars['String']['input']>;
};
export type MeetingUsersConnection = {
  __typename?: 'MeetingUsersConnection';
  edges: Array<MeetingUsersEdge>;
  nodes: Array<MeetingUser>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type MeetingUsersEdge = {
  __typename?: 'MeetingUsersEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: MeetingUser;
};
export enum MeetingUsersOrderBy {
  MeetingUserIdAsc = 'MEETING_USER_ID_ASC',
  MeetingUserIdDesc = 'MEETING_USER_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UIdAsc = 'U_ID_ASC',
  UIdDesc = 'U_ID_DESC'
}
export type MeetingsConnection = {
  __typename?: 'MeetingsConnection';
  edges: Array<MeetingsEdge>;
  nodes: Array<Meeting>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type MeetingsEdge = {
  __typename?: 'MeetingsEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: Meeting;
};
export enum MeetingsOrderBy {
  MeetingIdAsc = 'MEETING_ID_ASC',
  MeetingIdDesc = 'MEETING_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UIdAsc = 'U_ID_ASC',
  UIdDesc = 'U_ID_DESC'
}
export type Mutation = {
  __typename?: 'Mutation';
  createAgent?: Maybe<CreateAgentPayload>;
  createChat?: Maybe<CreateChatPayload>;
  createChatMessage?: Maybe<CreateChatMessagePayload>;
  createComment?: Maybe<CreateCommentPayload>;
  createDepartment?: Maybe<CreateDepartmentPayload>;
  createDocument?: Maybe<CreateDocumentPayload>;
  createExternalApp?: Maybe<CreateExternalAppPayload>;
  createExternalAppEndpoint?: Maybe<CreateExternalAppEndpointPayload>;
  createExternalAuthentication?: Maybe<CreateExternalAuthenticationPayload>;
  createExternalAuthenticationKpi?: Maybe<CreateExternalAuthenticationKpiPayload>;
  createExternalAuthenticationType?: Maybe<CreateExternalAuthenticationTypePayload>;
  createIndustry?: Maybe<CreateIndustryPayload>;
  createKpi?: Maybe<CreateKpiPayload>;
  createKpiDelegate?: Maybe<CreateKpiDelegatePayload>;
  createKpiHistory?: Maybe<CreateKpiHistoryPayload>;
  createMeeting?: Maybe<CreateMeetingPayload>;
  createMeetingHistory?: Maybe<CreateMeetingHistoryPayload>;
  createMeetingKpi?: Maybe<CreateMeetingKpiPayload>;
  createMeetingUser?: Maybe<CreateMeetingUserPayload>;
  createMeetingUserHistory?: Maybe<CreateMeetingUserHistoryPayload>;
  createOrganization?: Maybe<CreateOrganizationPayload>;
  createProject?: Maybe<CreateProjectPayload>;
  createRole?: Maybe<CreateRolePayload>;
  createStandardKpi?: Maybe<CreateStandardKpiPayload>;
  createStandardMilestone?: Maybe<CreateStandardMilestonePayload>;
  createTask?: Maybe<CreateTaskPayload>;
  createUser?: Maybe<CreateUserPayload>;
  deleteAgent?: Maybe<DeleteAgentPayload>;
  deleteChat?: Maybe<DeleteChatPayload>;
  deleteChatMessage?: Maybe<DeleteChatMessagePayload>;
  deleteComment?: Maybe<DeleteCommentPayload>;
  deleteDepartment?: Maybe<DeleteDepartmentPayload>;
  deleteDocument?: Maybe<DeleteDocumentPayload>;
  deleteExternalApp?: Maybe<DeleteExternalAppPayload>;
  deleteExternalAppEndpoint?: Maybe<DeleteExternalAppEndpointPayload>;
  deleteExternalAuthentication?: Maybe<DeleteExternalAuthenticationPayload>;
  deleteExternalAuthenticationKpi?: Maybe<DeleteExternalAuthenticationKpiPayload>;
  deleteExternalAuthenticationType?: Maybe<DeleteExternalAuthenticationTypePayload>;
  deleteIndustry?: Maybe<DeleteIndustryPayload>;
  deleteKpi?: Maybe<DeleteKpiPayload>;
  deleteKpiDelegate?: Maybe<DeleteKpiDelegatePayload>;
  deleteKpiHistory?: Maybe<DeleteKpiHistoryPayload>;
  deleteMeeting?: Maybe<DeleteMeetingPayload>;
  deleteMeetingHistory?: Maybe<DeleteMeetingHistoryPayload>;
  deleteMeetingKpi?: Maybe<DeleteMeetingKpiPayload>;
  deleteMeetingUser?: Maybe<DeleteMeetingUserPayload>;
  deleteMeetingUserHistory?: Maybe<DeleteMeetingUserHistoryPayload>;
  deleteOrganization?: Maybe<DeleteOrganizationPayload>;
  deleteProject?: Maybe<DeleteProjectPayload>;
  deleteRole?: Maybe<DeleteRolePayload>;
  deleteStandardKpi?: Maybe<DeleteStandardKpiPayload>;
  deleteStandardMilestone?: Maybe<DeleteStandardMilestonePayload>;
  deleteTask?: Maybe<DeleteTaskPayload>;
  deleteUser?: Maybe<DeleteUserPayload>;
  deleteUserByEmail?: Maybe<DeleteUserPayload>;
  updateAgent?: Maybe<UpdateAgentPayload>;
  updateChat?: Maybe<UpdateChatPayload>;
  updateChatMessage?: Maybe<UpdateChatMessagePayload>;
  updateComment?: Maybe<UpdateCommentPayload>;
  updateDepartment?: Maybe<UpdateDepartmentPayload>;
  updateDocument?: Maybe<UpdateDocumentPayload>;
  updateExternalApp?: Maybe<UpdateExternalAppPayload>;
  updateExternalAppEndpoint?: Maybe<UpdateExternalAppEndpointPayload>;
  updateExternalAuthentication?: Maybe<UpdateExternalAuthenticationPayload>;
  updateExternalAuthenticationKpi?: Maybe<UpdateExternalAuthenticationKpiPayload>;
  updateExternalAuthenticationType?: Maybe<UpdateExternalAuthenticationTypePayload>;
  updateIndustry?: Maybe<UpdateIndustryPayload>;
  updateKpi?: Maybe<UpdateKpiPayload>;
  updateKpiDelegate?: Maybe<UpdateKpiDelegatePayload>;
  updateKpiHistory?: Maybe<UpdateKpiHistoryPayload>;
  updateMeeting?: Maybe<UpdateMeetingPayload>;
  updateMeetingHistory?: Maybe<UpdateMeetingHistoryPayload>;
  updateMeetingKpi?: Maybe<UpdateMeetingKpiPayload>;
  updateMeetingUser?: Maybe<UpdateMeetingUserPayload>;
  updateMeetingUserHistory?: Maybe<UpdateMeetingUserHistoryPayload>;
  updateOrganization?: Maybe<UpdateOrganizationPayload>;
  updateProject?: Maybe<UpdateProjectPayload>;
  updateRole?: Maybe<UpdateRolePayload>;
  updateStandardKpi?: Maybe<UpdateStandardKpiPayload>;
  updateStandardMilestone?: Maybe<UpdateStandardMilestonePayload>;
  updateTask?: Maybe<UpdateTaskPayload>;
  updateUser?: Maybe<UpdateUserPayload>;
  updateUserByEmail?: Maybe<UpdateUserPayload>;
};
export type MutationCreateAgentArgs = {
  input: CreateAgentInput;
};
export type MutationCreateChatArgs = {
  input: CreateChatInput;
};
export type MutationCreateChatMessageArgs = {
  input: CreateChatMessageInput;
};
export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};
export type MutationCreateDepartmentArgs = {
  input: CreateDepartmentInput;
};
export type MutationCreateDocumentArgs = {
  input: CreateDocumentInput;
};
export type MutationCreateExternalAppArgs = {
  input: CreateExternalAppInput;
};
export type MutationCreateExternalAppEndpointArgs = {
  input: CreateExternalAppEndpointInput;
};
export type MutationCreateExternalAuthenticationArgs = {
  input: CreateExternalAuthenticationInput;
};
export type MutationCreateExternalAuthenticationKpiArgs = {
  input: CreateExternalAuthenticationKpiInput;
};
export type MutationCreateExternalAuthenticationTypeArgs = {
  input: CreateExternalAuthenticationTypeInput;
};
export type MutationCreateIndustryArgs = {
  input: CreateIndustryInput;
};
export type MutationCreateKpiArgs = {
  input: CreateKpiInput;
};
export type MutationCreateKpiDelegateArgs = {
  input: CreateKpiDelegateInput;
};
export type MutationCreateKpiHistoryArgs = {
  input: CreateKpiHistoryInput;
};
export type MutationCreateMeetingArgs = {
  input: CreateMeetingInput;
};
export type MutationCreateMeetingHistoryArgs = {
  input: CreateMeetingHistoryInput;
};
export type MutationCreateMeetingKpiArgs = {
  input: CreateMeetingKpiInput;
};
export type MutationCreateMeetingUserArgs = {
  input: CreateMeetingUserInput;
};
export type MutationCreateMeetingUserHistoryArgs = {
  input: CreateMeetingUserHistoryInput;
};
export type MutationCreateOrganizationArgs = {
  input: CreateOrganizationInput;
};
export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};
export type MutationCreateRoleArgs = {
  input: CreateRoleInput;
};
export type MutationCreateStandardKpiArgs = {
  input: CreateStandardKpiInput;
};
export type MutationCreateStandardMilestoneArgs = {
  input: CreateStandardMilestoneInput;
};
export type MutationCreateTaskArgs = {
  input: CreateTaskInput;
};
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};
export type MutationDeleteAgentArgs = {
  input: DeleteAgentInput;
};
export type MutationDeleteChatArgs = {
  input: DeleteChatInput;
};
export type MutationDeleteChatMessageArgs = {
  input: DeleteChatMessageInput;
};
export type MutationDeleteCommentArgs = {
  input: DeleteCommentInput;
};
export type MutationDeleteDepartmentArgs = {
  input: DeleteDepartmentInput;
};
export type MutationDeleteDocumentArgs = {
  input: DeleteDocumentInput;
};
export type MutationDeleteExternalAppArgs = {
  input: DeleteExternalAppInput;
};
export type MutationDeleteExternalAppEndpointArgs = {
  input: DeleteExternalAppEndpointInput;
};
export type MutationDeleteExternalAuthenticationArgs = {
  input: DeleteExternalAuthenticationInput;
};
export type MutationDeleteExternalAuthenticationKpiArgs = {
  input: DeleteExternalAuthenticationKpiInput;
};
export type MutationDeleteExternalAuthenticationTypeArgs = {
  input: DeleteExternalAuthenticationTypeInput;
};
export type MutationDeleteIndustryArgs = {
  input: DeleteIndustryInput;
};
export type MutationDeleteKpiArgs = {
  input: DeleteKpiInput;
};
export type MutationDeleteKpiDelegateArgs = {
  input: DeleteKpiDelegateInput;
};
export type MutationDeleteKpiHistoryArgs = {
  input: DeleteKpiHistoryInput;
};
export type MutationDeleteMeetingArgs = {
  input: DeleteMeetingInput;
};
export type MutationDeleteMeetingHistoryArgs = {
  input: DeleteMeetingHistoryInput;
};
export type MutationDeleteMeetingKpiArgs = {
  input: DeleteMeetingKpiInput;
};
export type MutationDeleteMeetingUserArgs = {
  input: DeleteMeetingUserInput;
};
export type MutationDeleteMeetingUserHistoryArgs = {
  input: DeleteMeetingUserHistoryInput;
};
export type MutationDeleteOrganizationArgs = {
  input: DeleteOrganizationInput;
};
export type MutationDeleteProjectArgs = {
  input: DeleteProjectInput;
};
export type MutationDeleteRoleArgs = {
  input: DeleteRoleInput;
};
export type MutationDeleteStandardKpiArgs = {
  input: DeleteStandardKpiInput;
};
export type MutationDeleteStandardMilestoneArgs = {
  input: DeleteStandardMilestoneInput;
};
export type MutationDeleteTaskArgs = {
  input: DeleteTaskInput;
};
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};
export type MutationDeleteUserByEmailArgs = {
  input: DeleteUserByEmailInput;
};
export type MutationUpdateAgentArgs = {
  input: UpdateAgentInput;
};
export type MutationUpdateChatArgs = {
  input: UpdateChatInput;
};
export type MutationUpdateChatMessageArgs = {
  input: UpdateChatMessageInput;
};
export type MutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};
export type MutationUpdateDepartmentArgs = {
  input: UpdateDepartmentInput;
};
export type MutationUpdateDocumentArgs = {
  input: UpdateDocumentInput;
};
export type MutationUpdateExternalAppArgs = {
  input: UpdateExternalAppInput;
};
export type MutationUpdateExternalAppEndpointArgs = {
  input: UpdateExternalAppEndpointInput;
};
export type MutationUpdateExternalAuthenticationArgs = {
  input: UpdateExternalAuthenticationInput;
};
export type MutationUpdateExternalAuthenticationKpiArgs = {
  input: UpdateExternalAuthenticationKpiInput;
};
export type MutationUpdateExternalAuthenticationTypeArgs = {
  input: UpdateExternalAuthenticationTypeInput;
};
export type MutationUpdateIndustryArgs = {
  input: UpdateIndustryInput;
};
export type MutationUpdateKpiArgs = {
  input: UpdateKpiInput;
};
export type MutationUpdateKpiDelegateArgs = {
  input: UpdateKpiDelegateInput;
};
export type MutationUpdateKpiHistoryArgs = {
  input: UpdateKpiHistoryInput;
};
export type MutationUpdateMeetingArgs = {
  input: UpdateMeetingInput;
};
export type MutationUpdateMeetingHistoryArgs = {
  input: UpdateMeetingHistoryInput;
};
export type MutationUpdateMeetingKpiArgs = {
  input: UpdateMeetingKpiInput;
};
export type MutationUpdateMeetingUserArgs = {
  input: UpdateMeetingUserInput;
};
export type MutationUpdateMeetingUserHistoryArgs = {
  input: UpdateMeetingUserHistoryInput;
};
export type MutationUpdateOrganizationArgs = {
  input: UpdateOrganizationInput;
};
export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput;
};
export type MutationUpdateRoleArgs = {
  input: UpdateRoleInput;
};
export type MutationUpdateStandardKpiArgs = {
  input: UpdateStandardKpiInput;
};
export type MutationUpdateStandardMilestoneArgs = {
  input: UpdateStandardMilestoneInput;
};
export type MutationUpdateTaskArgs = {
  input: UpdateTaskInput;
};
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};
export type MutationUpdateUserByEmailArgs = {
  input: UpdateUserByEmailInput;
};
export type Organization = {
  __typename?: 'Organization';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Datetime']['output'];
  departmentsByOrgId: Array<Department>;
  departmentsByOrgIdConnection: DepartmentsConnection;
  email?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['Date']['output']>;
  features?: Maybe<Scalars['JSON']['output']>;
  industryByIndustryId?: Maybe<Industry>;
  industryId?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isStartup?: Maybe<Scalars['Boolean']['output']>;
  logoUrl?: Maybe<Scalars['String']['output']>;
  mission?: Maybe<Scalars['String']['output']>;
  orgId: Scalars['String']['output'];
  orgName?: Maybe<Scalars['String']['output']>;
  outcomeStatement?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  projectsByOrgId: Array<Project>;
  projectsByOrgIdConnection: ProjectsConnection;
  secretCode?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['Date']['output']>;
  updatedAt: Scalars['Datetime']['output'];
  values?: Maybe<Scalars['String']['output']>;
  vision?: Maybe<Scalars['String']['output']>;
};
export type OrganizationDepartmentsByOrgIdArgs = {
  condition?: InputMaybe<DepartmentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DepartmentsOrderBy>>;
};
export type OrganizationDepartmentsByOrgIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<DepartmentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DepartmentsOrderBy>>;
};
export type OrganizationProjectsByOrgIdArgs = {
  condition?: InputMaybe<ProjectCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
};
export type OrganizationProjectsByOrgIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ProjectCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
};
export type OrganizationCondition = {
  industryId?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['String']['input']>;
};
export type OrganizationInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  createdAt: Scalars['Datetime']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  features?: InputMaybe<Scalars['JSON']['input']>;
  industryId?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isStartup?: InputMaybe<Scalars['Boolean']['input']>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  mission?: InputMaybe<Scalars['String']['input']>;
  orgId: Scalars['String']['input'];
  orgName?: InputMaybe<Scalars['String']['input']>;
  outcomeStatement?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  secretCode?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  updatedAt: Scalars['Datetime']['input'];
  values?: InputMaybe<Scalars['String']['input']>;
  vision?: InputMaybe<Scalars['String']['input']>;
};
export type OrganizationPatch = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  features?: InputMaybe<Scalars['JSON']['input']>;
  industryId?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isStartup?: InputMaybe<Scalars['Boolean']['input']>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  mission?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['String']['input']>;
  orgName?: InputMaybe<Scalars['String']['input']>;
  outcomeStatement?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  secretCode?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  values?: InputMaybe<Scalars['String']['input']>;
  vision?: InputMaybe<Scalars['String']['input']>;
};
export type OrganizationsConnection = {
  __typename?: 'OrganizationsConnection';
  edges: Array<OrganizationsEdge>;
  nodes: Array<Organization>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type OrganizationsEdge = {
  __typename?: 'OrganizationsEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: Organization;
};
export enum OrganizationsOrderBy {
  IndustryIdAsc = 'INDUSTRY_ID_ASC',
  IndustryIdDesc = 'INDUSTRY_ID_DESC',
  Natural = 'NATURAL',
  OrgIdAsc = 'ORG_ID_ASC',
  OrgIdDesc = 'ORG_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};
export type Project = {
  __typename?: 'Project';
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  description: Scalars['String']['output'];
  endDate?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  org?: Maybe<Organization>;
  orgId?: Maybe<Scalars['String']['output']>;
  startDate: Scalars['Datetime']['output'];
  status: Scalars['String']['output'];
  teamIds: Array<Maybe<Scalars['String']['output']>>;
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
};
export type ProjectCondition = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  orgId?: InputMaybe<Scalars['String']['input']>;
};
export type ProjectInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description: Scalars['String']['input'];
  endDate?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name: Scalars['String']['input'];
  orgId?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['Datetime']['input'];
  status: Scalars['String']['input'];
  teamIds: Array<InputMaybe<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type ProjectPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Datetime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  teamIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type ProjectsConnection = {
  __typename?: 'ProjectsConnection';
  edges: Array<ProjectsEdge>;
  nodes: Array<Project>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type ProjectsEdge = {
  __typename?: 'ProjectsEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: Project;
};
export enum ProjectsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  OrgIdAsc = 'ORG_ID_ASC',
  OrgIdDesc = 'ORG_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type Query = {
  __typename?: 'Query';
  agent?: Maybe<Agent>;
  agents?: Maybe<Array<Agent>>;
  agentsConnection?: Maybe<AgentsConnection>;
  chat?: Maybe<Chat>;
  chatMessage?: Maybe<ChatMessage>;
  chatMessages?: Maybe<Array<ChatMessage>>;
  chatMessagesConnection?: Maybe<ChatMessagesConnection>;
  chats?: Maybe<Array<Chat>>;
  chatsConnection?: Maybe<ChatsConnection>;
  comment?: Maybe<Comment>;
  comments?: Maybe<Array<Comment>>;
  commentsConnection?: Maybe<CommentsConnection>;
  department?: Maybe<Department>;
  departments?: Maybe<Array<Department>>;
  departmentsConnection?: Maybe<DepartmentsConnection>;
  document?: Maybe<Document>;
  documents?: Maybe<Array<Document>>;
  documentsConnection?: Maybe<DocumentsConnection>;
  externalApp?: Maybe<ExternalApp>;
  externalAppEndpoint?: Maybe<ExternalAppEndpoint>;
  externalAppEndpoints?: Maybe<Array<ExternalAppEndpoint>>;
  externalAppEndpointsConnection?: Maybe<ExternalAppEndpointsConnection>;
  externalApps?: Maybe<Array<ExternalApp>>;
  externalAppsConnection?: Maybe<ExternalAppsConnection>;
  externalAuthentication?: Maybe<ExternalAuthentication>;
  externalAuthenticationKpi?: Maybe<ExternalAuthenticationKpi>;
  externalAuthenticationKpis?: Maybe<Array<ExternalAuthenticationKpi>>;
  externalAuthenticationKpisConnection?: Maybe<ExternalAuthenticationKpisConnection>;
  externalAuthenticationType?: Maybe<ExternalAuthenticationType>;
  externalAuthenticationTypes?: Maybe<Array<ExternalAuthenticationType>>;
  externalAuthenticationTypesConnection?: Maybe<ExternalAuthenticationTypesConnection>;
  externalAuthentications?: Maybe<Array<ExternalAuthentication>>;
  externalAuthenticationsConnection?: Maybe<ExternalAuthenticationsConnection>;
  industries?: Maybe<Array<Industry>>;
  industriesConnection?: Maybe<IndustriesConnection>;
  industry?: Maybe<Industry>;
  kpi?: Maybe<Kpi>;
  kpiDelegate?: Maybe<KpiDelegate>;
  kpiDelegates?: Maybe<Array<KpiDelegate>>;
  kpiDelegatesConnection?: Maybe<KpiDelegatesConnection>;
  kpiHistories?: Maybe<Array<KpiHistory>>;
  kpiHistoriesConnection?: Maybe<KpiHistoriesConnection>;
  kpiHistory?: Maybe<KpiHistory>;
  kpis?: Maybe<Array<Kpi>>;
  kpisConnection?: Maybe<KpisConnection>;
  meeting?: Maybe<Meeting>;
  meetingHistories?: Maybe<Array<MeetingHistory>>;
  meetingHistoriesConnection?: Maybe<MeetingHistoriesConnection>;
  meetingHistory?: Maybe<MeetingHistory>;
  meetingKpi?: Maybe<MeetingKpi>;
  meetingKpis?: Maybe<Array<MeetingKpi>>;
  meetingKpisConnection?: Maybe<MeetingKpisConnection>;
  meetingUser?: Maybe<MeetingUser>;
  meetingUserHistories?: Maybe<Array<MeetingUserHistory>>;
  meetingUserHistoriesConnection?: Maybe<MeetingUserHistoriesConnection>;
  meetingUserHistory?: Maybe<MeetingUserHistory>;
  meetingUsers?: Maybe<Array<MeetingUser>>;
  meetingUsersConnection?: Maybe<MeetingUsersConnection>;
  meetings?: Maybe<Array<Meeting>>;
  meetingsConnection?: Maybe<MeetingsConnection>;
  organization?: Maybe<Organization>;
  organizations?: Maybe<Array<Organization>>;
  organizationsConnection?: Maybe<OrganizationsConnection>;
  project?: Maybe<Project>;
  projects?: Maybe<Array<Project>>;
  projectsConnection?: Maybe<ProjectsConnection>;
  query: Query;
  role?: Maybe<Role>;
  roles?: Maybe<Array<Role>>;
  rolesConnection?: Maybe<RolesConnection>;
  standardKpi?: Maybe<StandardKpi>;
  standardKpis?: Maybe<Array<StandardKpi>>;
  standardKpisConnection?: Maybe<StandardKpisConnection>;
  standardMilestone?: Maybe<StandardMilestone>;
  standardMilestones?: Maybe<Array<StandardMilestone>>;
  standardMilestonesConnection?: Maybe<StandardMilestonesConnection>;
  task?: Maybe<Task>;
  tasks?: Maybe<Array<Task>>;
  tasksConnection?: Maybe<TasksConnection>;
  user?: Maybe<User>;
  userByEmail?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersConnection?: Maybe<UsersConnection>;
};
export type QueryAgentArgs = {
  id: Scalars['UUID']['input'];
};
export type QueryAgentsArgs = {
  condition?: InputMaybe<AgentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AgentsOrderBy>>;
};
export type QueryAgentsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AgentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AgentsOrderBy>>;
};
export type QueryChatArgs = {
  id: Scalars['UUID']['input'];
};
export type QueryChatMessageArgs = {
  id: Scalars['UUID']['input'];
};
export type QueryChatMessagesArgs = {
  condition?: InputMaybe<ChatMessageCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatMessagesOrderBy>>;
};
export type QueryChatMessagesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ChatMessageCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatMessagesOrderBy>>;
};
export type QueryChatsArgs = {
  condition?: InputMaybe<ChatCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatsOrderBy>>;
};
export type QueryChatsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ChatCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatsOrderBy>>;
};
export type QueryCommentArgs = {
  id: Scalars['UUID']['input'];
};
export type QueryCommentsArgs = {
  condition?: InputMaybe<CommentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};
export type QueryCommentsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CommentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};
export type QueryDepartmentArgs = {
  depId: Scalars['String']['input'];
};
export type QueryDepartmentsArgs = {
  condition?: InputMaybe<DepartmentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DepartmentsOrderBy>>;
};
export type QueryDepartmentsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<DepartmentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DepartmentsOrderBy>>;
};
export type QueryDocumentArgs = {
  id: Scalars['UUID']['input'];
};
export type QueryDocumentsArgs = {
  condition?: InputMaybe<DocumentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DocumentsOrderBy>>;
};
export type QueryDocumentsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<DocumentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DocumentsOrderBy>>;
};
export type QueryExternalAppArgs = {
  externalAppId: Scalars['String']['input'];
};
export type QueryExternalAppEndpointArgs = {
  externalAppEndpointId: Scalars['String']['input'];
};
export type QueryExternalAppEndpointsArgs = {
  condition?: InputMaybe<ExternalAppEndpointCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAppEndpointsOrderBy>>;
};
export type QueryExternalAppEndpointsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ExternalAppEndpointCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAppEndpointsOrderBy>>;
};
export type QueryExternalAppsArgs = {
  condition?: InputMaybe<ExternalAppCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAppsOrderBy>>;
};
export type QueryExternalAppsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ExternalAppCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAppsOrderBy>>;
};
export type QueryExternalAuthenticationArgs = {
  externalAuthenticationId: Scalars['String']['input'];
};
export type QueryExternalAuthenticationKpiArgs = {
  externalAuthenticationKpiId: Scalars['String']['input'];
};
export type QueryExternalAuthenticationKpisArgs = {
  condition?: InputMaybe<ExternalAuthenticationKpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAuthenticationKpisOrderBy>>;
};
export type QueryExternalAuthenticationKpisConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ExternalAuthenticationKpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAuthenticationKpisOrderBy>>;
};
export type QueryExternalAuthenticationTypeArgs = {
  externalAuthenticationTypeId: Scalars['String']['input'];
};
export type QueryExternalAuthenticationTypesArgs = {
  condition?: InputMaybe<ExternalAuthenticationTypeCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAuthenticationTypesOrderBy>>;
};
export type QueryExternalAuthenticationTypesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ExternalAuthenticationTypeCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAuthenticationTypesOrderBy>>;
};
export type QueryExternalAuthenticationsArgs = {
  condition?: InputMaybe<ExternalAuthenticationCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAuthenticationsOrderBy>>;
};
export type QueryExternalAuthenticationsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ExternalAuthenticationCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAuthenticationsOrderBy>>;
};
export type QueryIndustriesArgs = {
  condition?: InputMaybe<IndustryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<IndustriesOrderBy>>;
};
export type QueryIndustriesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<IndustryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<IndustriesOrderBy>>;
};
export type QueryIndustryArgs = {
  industryId: Scalars['String']['input'];
};
export type QueryKpiArgs = {
  kpiId: Scalars['String']['input'];
};
export type QueryKpiDelegateArgs = {
  kpiDelegateId: Scalars['String']['input'];
};
export type QueryKpiDelegatesArgs = {
  condition?: InputMaybe<KpiDelegateCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<KpiDelegatesOrderBy>>;
};
export type QueryKpiDelegatesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<KpiDelegateCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<KpiDelegatesOrderBy>>;
};
export type QueryKpiHistoriesArgs = {
  condition?: InputMaybe<KpiHistoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<KpiHistoriesOrderBy>>;
};
export type QueryKpiHistoriesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<KpiHistoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<KpiHistoriesOrderBy>>;
};
export type QueryKpiHistoryArgs = {
  kpiHistoryId: Scalars['String']['input'];
};
export type QueryKpisArgs = {
  condition?: InputMaybe<KpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<KpisOrderBy>>;
};
export type QueryKpisConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<KpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<KpisOrderBy>>;
};
export type QueryMeetingArgs = {
  meetingId: Scalars['String']['input'];
};
export type QueryMeetingHistoriesArgs = {
  condition?: InputMaybe<MeetingHistoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingHistoriesOrderBy>>;
};
export type QueryMeetingHistoriesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MeetingHistoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingHistoriesOrderBy>>;
};
export type QueryMeetingHistoryArgs = {
  meetingHistoryId: Scalars['String']['input'];
};
export type QueryMeetingKpiArgs = {
  meetingKpiId: Scalars['String']['input'];
};
export type QueryMeetingKpisArgs = {
  condition?: InputMaybe<MeetingKpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingKpisOrderBy>>;
};
export type QueryMeetingKpisConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MeetingKpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingKpisOrderBy>>;
};
export type QueryMeetingUserArgs = {
  meetingUserId: Scalars['String']['input'];
};
export type QueryMeetingUserHistoriesArgs = {
  condition?: InputMaybe<MeetingUserHistoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingUserHistoriesOrderBy>>;
};
export type QueryMeetingUserHistoriesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MeetingUserHistoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingUserHistoriesOrderBy>>;
};
export type QueryMeetingUserHistoryArgs = {
  meetingUserHistoryId: Scalars['String']['input'];
};
export type QueryMeetingUsersArgs = {
  condition?: InputMaybe<MeetingUserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingUsersOrderBy>>;
};
export type QueryMeetingUsersConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MeetingUserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingUsersOrderBy>>;
};
export type QueryMeetingsArgs = {
  condition?: InputMaybe<MeetingCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingsOrderBy>>;
};
export type QueryMeetingsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MeetingCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingsOrderBy>>;
};
export type QueryOrganizationArgs = {
  orgId: Scalars['String']['input'];
};
export type QueryOrganizationsArgs = {
  condition?: InputMaybe<OrganizationCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrganizationsOrderBy>>;
};
export type QueryOrganizationsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OrganizationCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrganizationsOrderBy>>;
};
export type QueryProjectArgs = {
  id: Scalars['UUID']['input'];
};
export type QueryProjectsArgs = {
  condition?: InputMaybe<ProjectCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
};
export type QueryProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ProjectCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
};
export type QueryRoleArgs = {
  rId: Scalars['String']['input'];
};
export type QueryRolesArgs = {
  condition?: InputMaybe<RoleCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
};
export type QueryRolesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RoleCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
};
export type QueryStandardKpiArgs = {
  standardKpiId: Scalars['String']['input'];
};
export type QueryStandardKpisArgs = {
  condition?: InputMaybe<StandardKpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StandardKpisOrderBy>>;
};
export type QueryStandardKpisConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<StandardKpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StandardKpisOrderBy>>;
};
export type QueryStandardMilestoneArgs = {
  standardMilestoneId: Scalars['String']['input'];
};
export type QueryStandardMilestonesArgs = {
  condition?: InputMaybe<StandardMilestoneCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StandardMilestonesOrderBy>>;
};
export type QueryStandardMilestonesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<StandardMilestoneCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StandardMilestonesOrderBy>>;
};
export type QueryTaskArgs = {
  id: Scalars['UUID']['input'];
};
export type QueryTasksArgs = {
  condition?: InputMaybe<TaskCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};
export type QueryTasksConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TaskCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};
export type QueryUserArgs = {
  uId: Scalars['String']['input'];
};
export type QueryUserByEmailArgs = {
  email: Scalars['String']['input'];
};
export type QueryUsersArgs = {
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};
export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};
export type Role = {
  __typename?: 'Role';
  createdAt: Scalars['Datetime']['output'];
  deletedAt?: Maybe<Scalars['Datetime']['output']>;
  dep?: Maybe<Department>;
  depId?: Maybe<Scalars['String']['output']>;
  leval?: Maybe<Scalars['String']['output']>;
  rId: Scalars['String']['output'];
  roleName?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Datetime']['output'];
  usersByRId: Array<User>;
  usersByRIdConnection: UsersConnection;
};
export type RoleUsersByRIdArgs = {
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};
export type RoleUsersByRIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};
export type RoleCondition = {
  depId?: InputMaybe<Scalars['String']['input']>;
  rId?: InputMaybe<Scalars['String']['input']>;
};
export type RoleInput = {
  createdAt: Scalars['Datetime']['input'];
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  depId?: InputMaybe<Scalars['String']['input']>;
  leval?: InputMaybe<Scalars['String']['input']>;
  rId: Scalars['String']['input'];
  roleName?: InputMaybe<Scalars['String']['input']>;
  updatedAt: Scalars['Datetime']['input'];
};
export type RolePatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  depId?: InputMaybe<Scalars['String']['input']>;
  leval?: InputMaybe<Scalars['String']['input']>;
  rId?: InputMaybe<Scalars['String']['input']>;
  roleName?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type RolesConnection = {
  __typename?: 'RolesConnection';
  edges: Array<RolesEdge>;
  nodes: Array<Role>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type RolesEdge = {
  __typename?: 'RolesEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: Role;
};
export enum RolesOrderBy {
  DepIdAsc = 'DEP_ID_ASC',
  DepIdDesc = 'DEP_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RIdAsc = 'R_ID_ASC',
  RIdDesc = 'R_ID_DESC'
}
export type StandardKpi = {
  __typename?: 'StandardKpi';
  appliesToStartup?: Maybe<Scalars['Boolean']['output']>;
  createdAt: Scalars['Datetime']['output'];
  deletedAt?: Maybe<Scalars['Datetime']['output']>;
  driverId?: Maybe<Scalars['String']['output']>;
  industry?: Maybe<Scalars['String']['output']>;
  isCorporateKpi?: Maybe<Scalars['Boolean']['output']>;
  kpiType?: Maybe<Scalars['String']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  objective?: Maybe<Scalars['String']['output']>;
  performanceDirection?: Maybe<Scalars['String']['output']>;
  reportingFrequency?: Maybe<Scalars['String']['output']>;
  standardKpiId: Scalars['String']['output'];
  standardMilestones: Array<StandardMilestone>;
  standardMilestonesConnection: StandardMilestonesConnection;
  target?: Maybe<Scalars['BigFloat']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Datetime']['output'];
};
export type StandardKpiStandardMilestonesArgs = {
  condition?: InputMaybe<StandardMilestoneCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StandardMilestonesOrderBy>>;
};
export type StandardKpiStandardMilestonesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<StandardMilestoneCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StandardMilestonesOrderBy>>;
};
export type StandardKpiCondition = {
  standardKpiId?: InputMaybe<Scalars['String']['input']>;
};
export type StandardKpiInput = {
  appliesToStartup?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt: Scalars['Datetime']['input'];
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  driverId?: InputMaybe<Scalars['String']['input']>;
  industry?: InputMaybe<Scalars['String']['input']>;
  isCorporateKpi?: InputMaybe<Scalars['Boolean']['input']>;
  kpiType?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  objective?: InputMaybe<Scalars['String']['input']>;
  performanceDirection?: InputMaybe<Scalars['String']['input']>;
  reportingFrequency?: InputMaybe<Scalars['String']['input']>;
  standardKpiId: Scalars['String']['input'];
  target?: InputMaybe<Scalars['BigFloat']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
  updatedAt: Scalars['Datetime']['input'];
};
export type StandardKpiPatch = {
  appliesToStartup?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  driverId?: InputMaybe<Scalars['String']['input']>;
  industry?: InputMaybe<Scalars['String']['input']>;
  isCorporateKpi?: InputMaybe<Scalars['Boolean']['input']>;
  kpiType?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  objective?: InputMaybe<Scalars['String']['input']>;
  performanceDirection?: InputMaybe<Scalars['String']['input']>;
  reportingFrequency?: InputMaybe<Scalars['String']['input']>;
  standardKpiId?: InputMaybe<Scalars['String']['input']>;
  target?: InputMaybe<Scalars['BigFloat']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type StandardKpisConnection = {
  __typename?: 'StandardKpisConnection';
  edges: Array<StandardKpisEdge>;
  nodes: Array<StandardKpi>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type StandardKpisEdge = {
  __typename?: 'StandardKpisEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: StandardKpi;
};
export enum StandardKpisOrderBy {
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  StandardKpiIdAsc = 'STANDARD_KPI_ID_ASC',
  StandardKpiIdDesc = 'STANDARD_KPI_ID_DESC'
}
export type StandardMilestone = {
  __typename?: 'StandardMilestone';
  achieveText?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Datetime']['output'];
  deletedAt?: Maybe<Scalars['Datetime']['output']>;
  dueDateIncrement?: Maybe<Scalars['Int']['output']>;
  milestoneNote?: Maybe<Scalars['String']['output']>;
  standardKpi?: Maybe<StandardKpi>;
  standardKpiId?: Maybe<Scalars['String']['output']>;
  standardMilestoneId: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
};
export type StandardMilestoneCondition = {
  standardKpiId?: InputMaybe<Scalars['String']['input']>;
  standardMilestoneId?: InputMaybe<Scalars['String']['input']>;
};
export type StandardMilestoneInput = {
  achieveText?: InputMaybe<Scalars['String']['input']>;
  createdAt: Scalars['Datetime']['input'];
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  dueDateIncrement?: InputMaybe<Scalars['Int']['input']>;
  milestoneNote?: InputMaybe<Scalars['String']['input']>;
  standardKpiId?: InputMaybe<Scalars['String']['input']>;
  standardMilestoneId: Scalars['String']['input'];
  updatedAt: Scalars['Datetime']['input'];
};
export type StandardMilestonePatch = {
  achieveText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  dueDateIncrement?: InputMaybe<Scalars['Int']['input']>;
  milestoneNote?: InputMaybe<Scalars['String']['input']>;
  standardKpiId?: InputMaybe<Scalars['String']['input']>;
  standardMilestoneId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type StandardMilestonesConnection = {
  __typename?: 'StandardMilestonesConnection';
  edges: Array<StandardMilestonesEdge>;
  nodes: Array<StandardMilestone>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type StandardMilestonesEdge = {
  __typename?: 'StandardMilestonesEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: StandardMilestone;
};
export enum StandardMilestonesOrderBy {
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  StandardKpiIdAsc = 'STANDARD_KPI_ID_ASC',
  StandardKpiIdDesc = 'STANDARD_KPI_ID_DESC',
  StandardMilestoneIdAsc = 'STANDARD_MILESTONE_ID_ASC',
  StandardMilestoneIdDesc = 'STANDARD_MILESTONE_ID_DESC'
}
export type Task = {
  __typename?: 'Task';
  assignee?: Maybe<User>;
  assigneeId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  description: Scalars['String']['output'];
  dueDate?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  priority: Scalars['String']['output'];
  projectId: Scalars['UUID']['output'];
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
};
export type TaskCondition = {
  assigneeId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
};
export type TaskInput = {
  assigneeId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description: Scalars['String']['input'];
  dueDate?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  priority: Scalars['String']['input'];
  projectId: Scalars['UUID']['input'];
  status: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type TaskPatch = {
  assigneeId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  priority?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['UUID']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type TasksConnection = {
  __typename?: 'TasksConnection';
  edges: Array<TasksEdge>;
  nodes: Array<Task>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type TasksEdge = {
  __typename?: 'TasksEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: Task;
};
export enum TasksOrderBy {
  AssigneeIdAsc = 'ASSIGNEE_ID_ASC',
  AssigneeIdDesc = 'ASSIGNEE_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type UpdateAgentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  patch: AgentPatch;
};
export type UpdateAgentPayload = {
  __typename?: 'UpdateAgentPayload';
  agent?: Maybe<Agent>;
  agentEdge?: Maybe<AgentsEdge>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
};
export type UpdateAgentPayloadAgentEdgeArgs = {
  orderBy?: InputMaybe<Array<AgentsOrderBy>>;
};
export type UpdateChatInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  patch: ChatPatch;
};
export type UpdateChatMessageInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  patch: ChatMessagePatch;
};
export type UpdateChatMessagePayload = {
  __typename?: 'UpdateChatMessagePayload';
  chat?: Maybe<Chat>;
  chatMessage?: Maybe<ChatMessage>;
  chatMessageEdge?: Maybe<ChatMessagesEdge>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
};
export type UpdateChatMessagePayloadChatMessageEdgeArgs = {
  orderBy?: InputMaybe<Array<ChatMessagesOrderBy>>;
};
export type UpdateChatPayload = {
  __typename?: 'UpdateChatPayload';
  chat?: Maybe<Chat>;
  chatEdge?: Maybe<ChatsEdge>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
};
export type UpdateChatPayloadChatEdgeArgs = {
  orderBy?: InputMaybe<Array<ChatsOrderBy>>;
};
export type UpdateCommentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  patch: CommentPatch;
};
export type UpdateCommentPayload = {
  __typename?: 'UpdateCommentPayload';
  author?: Maybe<User>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Comment>;
  commentEdge?: Maybe<CommentsEdge>;
  query?: Maybe<Query>;
};
export type UpdateCommentPayloadCommentEdgeArgs = {
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};
export type UpdateDepartmentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  depId: Scalars['String']['input'];
  patch: DepartmentPatch;
};
export type UpdateDepartmentPayload = {
  __typename?: 'UpdateDepartmentPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  department?: Maybe<Department>;
  departmentEdge?: Maybe<DepartmentsEdge>;
  org?: Maybe<Organization>;
  query?: Maybe<Query>;
};
export type UpdateDepartmentPayloadDepartmentEdgeArgs = {
  orderBy?: InputMaybe<Array<DepartmentsOrderBy>>;
};
export type UpdateDocumentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  patch: DocumentPatch;
};
export type UpdateDocumentPayload = {
  __typename?: 'UpdateDocumentPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  document?: Maybe<Document>;
  documentEdge?: Maybe<DocumentsEdge>;
  query?: Maybe<Query>;
};
export type UpdateDocumentPayloadDocumentEdgeArgs = {
  orderBy?: InputMaybe<Array<DocumentsOrderBy>>;
};
export type UpdateExternalAppEndpointInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalAppEndpointId: Scalars['String']['input'];
  patch: ExternalAppEndpointPatch;
};
export type UpdateExternalAppEndpointPayload = {
  __typename?: 'UpdateExternalAppEndpointPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  externalAppByExternalAppId?: Maybe<ExternalApp>;
  externalAppEndpoint?: Maybe<ExternalAppEndpoint>;
  externalAppEndpointEdge?: Maybe<ExternalAppEndpointsEdge>;
  query?: Maybe<Query>;
};
export type UpdateExternalAppEndpointPayloadExternalAppEndpointEdgeArgs = {
  orderBy?: InputMaybe<Array<ExternalAppEndpointsOrderBy>>;
};
export type UpdateExternalAppInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalAppId: Scalars['String']['input'];
  patch: ExternalAppPatch;
};
export type UpdateExternalAppPayload = {
  __typename?: 'UpdateExternalAppPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  externalApp?: Maybe<ExternalApp>;
  externalAppEdge?: Maybe<ExternalAppsEdge>;
  query?: Maybe<Query>;
};
export type UpdateExternalAppPayloadExternalAppEdgeArgs = {
  orderBy?: InputMaybe<Array<ExternalAppsOrderBy>>;
};
export type UpdateExternalAuthenticationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalAuthenticationId: Scalars['String']['input'];
  patch: ExternalAuthenticationPatch;
};
export type UpdateExternalAuthenticationKpiInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalAuthenticationKpiId: Scalars['String']['input'];
  patch: ExternalAuthenticationKpiPatch;
};
export type UpdateExternalAuthenticationKpiPayload = {
  __typename?: 'UpdateExternalAuthenticationKpiPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  externalAuthenticationByExternalAuthenticationId?: Maybe<ExternalAuthentication>;
  externalAuthenticationKpi?: Maybe<ExternalAuthenticationKpi>;
  externalAuthenticationKpiEdge?: Maybe<ExternalAuthenticationKpisEdge>;
  kpi?: Maybe<Kpi>;
  query?: Maybe<Query>;
};
export type UpdateExternalAuthenticationKpiPayloadExternalAuthenticationKpiEdgeArgs = {
  orderBy?: InputMaybe<Array<ExternalAuthenticationKpisOrderBy>>;
};
export type UpdateExternalAuthenticationPayload = {
  __typename?: 'UpdateExternalAuthenticationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  externalAppByExternalAppId?: Maybe<ExternalApp>;
  externalAuthentication?: Maybe<ExternalAuthentication>;
  externalAuthenticationEdge?: Maybe<ExternalAuthenticationsEdge>;
  externalAuthenticationTypeByExternalAuthenticationTypeId?: Maybe<ExternalAuthenticationType>;
  query?: Maybe<Query>;
};
export type UpdateExternalAuthenticationPayloadExternalAuthenticationEdgeArgs = {
  orderBy?: InputMaybe<Array<ExternalAuthenticationsOrderBy>>;
};
export type UpdateExternalAuthenticationTypeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalAuthenticationTypeId: Scalars['String']['input'];
  patch: ExternalAuthenticationTypePatch;
};
export type UpdateExternalAuthenticationTypePayload = {
  __typename?: 'UpdateExternalAuthenticationTypePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  externalAuthenticationType?: Maybe<ExternalAuthenticationType>;
  externalAuthenticationTypeEdge?: Maybe<ExternalAuthenticationTypesEdge>;
  query?: Maybe<Query>;
};
export type UpdateExternalAuthenticationTypePayloadExternalAuthenticationTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<ExternalAuthenticationTypesOrderBy>>;
};
export type UpdateIndustryInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  industryId: Scalars['String']['input'];
  patch: IndustryPatch;
};
export type UpdateIndustryPayload = {
  __typename?: 'UpdateIndustryPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  industry?: Maybe<Industry>;
  industryEdge?: Maybe<IndustriesEdge>;
  query?: Maybe<Query>;
};
export type UpdateIndustryPayloadIndustryEdgeArgs = {
  orderBy?: InputMaybe<Array<IndustriesOrderBy>>;
};
export type UpdateKpiDelegateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  kpiDelegateId: Scalars['String']['input'];
  patch: KpiDelegatePatch;
};
export type UpdateKpiDelegatePayload = {
  __typename?: 'UpdateKpiDelegatePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  kpi?: Maybe<Kpi>;
  kpiDelegate?: Maybe<KpiDelegate>;
  kpiDelegateEdge?: Maybe<KpiDelegatesEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type UpdateKpiDelegatePayloadKpiDelegateEdgeArgs = {
  orderBy?: InputMaybe<Array<KpiDelegatesOrderBy>>;
};
export type UpdateKpiHistoryInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  kpiHistoryId: Scalars['String']['input'];
  patch: KpiHistoryPatch;
};
export type UpdateKpiHistoryPayload = {
  __typename?: 'UpdateKpiHistoryPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  kpi?: Maybe<Kpi>;
  kpiHistory?: Maybe<KpiHistory>;
  kpiHistoryEdge?: Maybe<KpiHistoriesEdge>;
  query?: Maybe<Query>;
};
export type UpdateKpiHistoryPayloadKpiHistoryEdgeArgs = {
  orderBy?: InputMaybe<Array<KpiHistoriesOrderBy>>;
};
export type UpdateKpiInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  kpiId: Scalars['String']['input'];
  patch: KpiPatch;
};
export type UpdateKpiPayload = {
  __typename?: 'UpdateKpiPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  kpi?: Maybe<Kpi>;
  kpiEdge?: Maybe<KpisEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type UpdateKpiPayloadKpiEdgeArgs = {
  orderBy?: InputMaybe<Array<KpisOrderBy>>;
};
export type UpdateMeetingHistoryInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meetingHistoryId: Scalars['String']['input'];
  patch: MeetingHistoryPatch;
};
export type UpdateMeetingHistoryPayload = {
  __typename?: 'UpdateMeetingHistoryPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  meeting?: Maybe<Meeting>;
  meetingHistory?: Maybe<MeetingHistory>;
  meetingHistoryEdge?: Maybe<MeetingHistoriesEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type UpdateMeetingHistoryPayloadMeetingHistoryEdgeArgs = {
  orderBy?: InputMaybe<Array<MeetingHistoriesOrderBy>>;
};
export type UpdateMeetingInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meetingId: Scalars['String']['input'];
  patch: MeetingPatch;
};
export type UpdateMeetingKpiInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meetingKpiId: Scalars['String']['input'];
  patch: MeetingKpiPatch;
};
export type UpdateMeetingKpiPayload = {
  __typename?: 'UpdateMeetingKpiPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  kpi?: Maybe<Kpi>;
  meeting?: Maybe<Meeting>;
  meetingKpi?: Maybe<MeetingKpi>;
  meetingKpiEdge?: Maybe<MeetingKpisEdge>;
  query?: Maybe<Query>;
};
export type UpdateMeetingKpiPayloadMeetingKpiEdgeArgs = {
  orderBy?: InputMaybe<Array<MeetingKpisOrderBy>>;
};
export type UpdateMeetingPayload = {
  __typename?: 'UpdateMeetingPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  meeting?: Maybe<Meeting>;
  meetingEdge?: Maybe<MeetingsEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type UpdateMeetingPayloadMeetingEdgeArgs = {
  orderBy?: InputMaybe<Array<MeetingsOrderBy>>;
};
export type UpdateMeetingUserHistoryInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meetingUserHistoryId: Scalars['String']['input'];
  patch: MeetingUserHistoryPatch;
};
export type UpdateMeetingUserHistoryPayload = {
  __typename?: 'UpdateMeetingUserHistoryPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  meetingUserHistory?: Maybe<MeetingUserHistory>;
  meetingUserHistoryEdge?: Maybe<MeetingUserHistoriesEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type UpdateMeetingUserHistoryPayloadMeetingUserHistoryEdgeArgs = {
  orderBy?: InputMaybe<Array<MeetingUserHistoriesOrderBy>>;
};
export type UpdateMeetingUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meetingUserId: Scalars['String']['input'];
  patch: MeetingUserPatch;
};
export type UpdateMeetingUserPayload = {
  __typename?: 'UpdateMeetingUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  meetingUser?: Maybe<MeetingUser>;
  meetingUserEdge?: Maybe<MeetingUsersEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type UpdateMeetingUserPayloadMeetingUserEdgeArgs = {
  orderBy?: InputMaybe<Array<MeetingUsersOrderBy>>;
};
export type UpdateOrganizationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  orgId: Scalars['String']['input'];
  patch: OrganizationPatch;
};
export type UpdateOrganizationPayload = {
  __typename?: 'UpdateOrganizationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  industryByIndustryId?: Maybe<Industry>;
  organization?: Maybe<Organization>;
  organizationEdge?: Maybe<OrganizationsEdge>;
  query?: Maybe<Query>;
};
export type UpdateOrganizationPayloadOrganizationEdgeArgs = {
  orderBy?: InputMaybe<Array<OrganizationsOrderBy>>;
};
export type UpdateProjectInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  patch: ProjectPatch;
};
export type UpdateProjectPayload = {
  __typename?: 'UpdateProjectPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  org?: Maybe<Organization>;
  project?: Maybe<Project>;
  projectEdge?: Maybe<ProjectsEdge>;
  query?: Maybe<Query>;
};
export type UpdateProjectPayloadProjectEdgeArgs = {
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
};
export type UpdateRoleInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  patch: RolePatch;
  rId: Scalars['String']['input'];
};
export type UpdateRolePayload = {
  __typename?: 'UpdateRolePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  dep?: Maybe<Department>;
  query?: Maybe<Query>;
  role?: Maybe<Role>;
  roleEdge?: Maybe<RolesEdge>;
};
export type UpdateRolePayloadRoleEdgeArgs = {
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
};
export type UpdateStandardKpiInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  patch: StandardKpiPatch;
  standardKpiId: Scalars['String']['input'];
};
export type UpdateStandardKpiPayload = {
  __typename?: 'UpdateStandardKpiPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
  standardKpi?: Maybe<StandardKpi>;
  standardKpiEdge?: Maybe<StandardKpisEdge>;
};
export type UpdateStandardKpiPayloadStandardKpiEdgeArgs = {
  orderBy?: InputMaybe<Array<StandardKpisOrderBy>>;
};
export type UpdateStandardMilestoneInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  patch: StandardMilestonePatch;
  standardMilestoneId: Scalars['String']['input'];
};
export type UpdateStandardMilestonePayload = {
  __typename?: 'UpdateStandardMilestonePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
  standardKpi?: Maybe<StandardKpi>;
  standardMilestone?: Maybe<StandardMilestone>;
  standardMilestoneEdge?: Maybe<StandardMilestonesEdge>;
};
export type UpdateStandardMilestonePayloadStandardMilestoneEdgeArgs = {
  orderBy?: InputMaybe<Array<StandardMilestonesOrderBy>>;
};
export type UpdateTaskInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  patch: TaskPatch;
};
export type UpdateTaskPayload = {
  __typename?: 'UpdateTaskPayload';
  assignee?: Maybe<User>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
  task?: Maybe<Task>;
  taskEdge?: Maybe<TasksEdge>;
};
export type UpdateTaskPayloadTaskEdgeArgs = {
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};
export type UpdateUserByEmailInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  patch: UserPatch;
};
export type UpdateUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  patch: UserPatch;
  uId: Scalars['String']['input'];
};
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  dep?: Maybe<Department>;
  query?: Maybe<Query>;
  r?: Maybe<Role>;
  user?: Maybe<User>;
  userEdge?: Maybe<UsersEdge>;
};
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};
export type User = {
  __typename?: 'User';
  authoredComments: Array<Comment>;
  authoredCommentsConnection: CommentsConnection;
  avatar?: Maybe<Scalars['String']['output']>;
  coachUserId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Datetime']['output'];
  deactivationDate?: Maybe<Scalars['Datetime']['output']>;
  dep?: Maybe<Department>;
  depId?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  info?: Maybe<Scalars['JSON']['output']>;
  invitedAt?: Maybe<Scalars['Datetime']['output']>;
  isCoach?: Maybe<Scalars['Boolean']['output']>;
  kpiDelegatesByUId: Array<KpiDelegate>;
  kpiDelegatesByUIdConnection: KpiDelegatesConnection;
  kpisByUId: Array<Kpi>;
  kpisByUIdConnection: KpisConnection;
  lname?: Maybe<Scalars['String']['output']>;
  managerUserId?: Maybe<Scalars['String']['output']>;
  meetingHistoriesByUId: Array<MeetingHistory>;
  meetingHistoriesByUIdConnection: MeetingHistoriesConnection;
  meetingUserHistoriesByUId: Array<MeetingUserHistory>;
  meetingUserHistoriesByUIdConnection: MeetingUserHistoriesConnection;
  meetingUsersByUId: Array<MeetingUser>;
  meetingUsersByUIdConnection: MeetingUsersConnection;
  meetingsByUId: Array<Meeting>;
  meetingsByUIdConnection: MeetingsConnection;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  r?: Maybe<Role>;
  rId?: Maybe<Scalars['String']['output']>;
  resetCode?: Maybe<Scalars['String']['output']>;
  roleAdmin?: Maybe<Scalars['String']['output']>;
  skills?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  statement?: Maybe<Scalars['String']['output']>;
  tasksByAssigneeId: Array<Task>;
  tasksByAssigneeIdConnection: TasksConnection;
  textNotifications: Scalars['Boolean']['output'];
  uId: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
};
export type UserAuthoredCommentsArgs = {
  condition?: InputMaybe<CommentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};
export type UserAuthoredCommentsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CommentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};
export type UserKpiDelegatesByUIdArgs = {
  condition?: InputMaybe<KpiDelegateCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<KpiDelegatesOrderBy>>;
};
export type UserKpiDelegatesByUIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<KpiDelegateCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<KpiDelegatesOrderBy>>;
};
export type UserKpisByUIdArgs = {
  condition?: InputMaybe<KpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<KpisOrderBy>>;
};
export type UserKpisByUIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<KpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<KpisOrderBy>>;
};
export type UserMeetingHistoriesByUIdArgs = {
  condition?: InputMaybe<MeetingHistoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingHistoriesOrderBy>>;
};
export type UserMeetingHistoriesByUIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MeetingHistoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingHistoriesOrderBy>>;
};
export type UserMeetingUserHistoriesByUIdArgs = {
  condition?: InputMaybe<MeetingUserHistoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingUserHistoriesOrderBy>>;
};
export type UserMeetingUserHistoriesByUIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MeetingUserHistoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingUserHistoriesOrderBy>>;
};
export type UserMeetingUsersByUIdArgs = {
  condition?: InputMaybe<MeetingUserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingUsersOrderBy>>;
};
export type UserMeetingUsersByUIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MeetingUserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingUsersOrderBy>>;
};
export type UserMeetingsByUIdArgs = {
  condition?: InputMaybe<MeetingCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingsOrderBy>>;
};
export type UserMeetingsByUIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MeetingCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingsOrderBy>>;
};
export type UserTasksByAssigneeIdArgs = {
  condition?: InputMaybe<TaskCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};
export type UserTasksByAssigneeIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TaskCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};
export type UserCondition = {
  depId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  rId?: InputMaybe<Scalars['String']['input']>;
  uId?: InputMaybe<Scalars['String']['input']>;
};
export type UserInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  coachUserId?: InputMaybe<Scalars['String']['input']>;
  createdAt: Scalars['Datetime']['input'];
  deactivationDate?: InputMaybe<Scalars['Datetime']['input']>;
  depId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  info?: InputMaybe<Scalars['JSON']['input']>;
  invitedAt?: InputMaybe<Scalars['Datetime']['input']>;
  isCoach?: InputMaybe<Scalars['Boolean']['input']>;
  lname?: InputMaybe<Scalars['String']['input']>;
  managerUserId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  rId?: InputMaybe<Scalars['String']['input']>;
  resetCode?: InputMaybe<Scalars['String']['input']>;
  roleAdmin?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  statement?: InputMaybe<Scalars['String']['input']>;
  textNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  uId: Scalars['String']['input'];
  updatedAt: Scalars['Datetime']['input'];
};
export type UserPatch = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  coachUserId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  deactivationDate?: InputMaybe<Scalars['Datetime']['input']>;
  depId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  info?: InputMaybe<Scalars['JSON']['input']>;
  invitedAt?: InputMaybe<Scalars['Datetime']['input']>;
  isCoach?: InputMaybe<Scalars['Boolean']['input']>;
  lname?: InputMaybe<Scalars['String']['input']>;
  managerUserId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  rId?: InputMaybe<Scalars['String']['input']>;
  resetCode?: InputMaybe<Scalars['String']['input']>;
  roleAdmin?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  statement?: InputMaybe<Scalars['String']['input']>;
  textNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  uId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type UsersConnection = {
  __typename?: 'UsersConnection';
  edges: Array<UsersEdge>;
  nodes: Array<User>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type UsersEdge = {
  __typename?: 'UsersEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: User;
};
export enum UsersOrderBy {
  DepIdAsc = 'DEP_ID_ASC',
  DepIdDesc = 'DEP_ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RIdAsc = 'R_ID_ASC',
  RIdDesc = 'R_ID_DESC',
  UIdAsc = 'U_ID_ASC',
  UIdDesc = 'U_ID_DESC'
}
export type GetAgentsQueryVariables = Exact<{ [key: string]: never; }>;
export type GetAgentsQuery = { __typename?: 'Query', agents?: Array<{ __typename?: 'Agent', id: any, name: string, handle: string, status: string }> | null };
export type GetAgentQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;
export type GetAgentQuery = { __typename?: 'Query', agent?: { __typename?: 'Agent', id: any, name: string, handle: string, status: string } | null };
export type CreateAgentMutationVariables = Exact<{
  input: CreateAgentInput;
}>;
export type CreateAgentMutation = { __typename?: 'Mutation', createAgent?: { __typename?: 'CreateAgentPayload', agent?: { __typename?: 'Agent', id: any, name: string, handle: string, status: string } | null } | null };
export type UpdateAgentStatusMutationVariables = Exact<{
  input: UpdateAgentInput;
}>;
export type UpdateAgentStatusMutation = { __typename?: 'Mutation', updateAgent?: { __typename?: 'UpdateAgentPayload', agent?: { __typename?: 'Agent', id: any, status: string } | null } | null };
export type GetChatsQueryVariables = Exact<{ [key: string]: never; }>;
export type GetChatsQuery = { __typename?: 'Query', chats?: Array<{ __typename?: 'Chat', id: any, participantId: string, participantType: string, lastMessageAt: any, status: string }> | null };
export type GetChatMessagesQueryVariables = Exact<{ [key: string]: never; }>;
export type GetChatMessagesQuery = { __typename?: 'Query', chatMessages?: Array<{ __typename?: 'ChatMessage', id: any, chatId: any, content: string, sender: string, timestamp: any, metadata?: string | null }> | null };
export type CreateChatMutationVariables = Exact<{
  input: CreateChatInput;
}>;
export type CreateChatMutation = { __typename?: 'Mutation', createChat?: { __typename?: 'CreateChatPayload', chat?: { __typename?: 'Chat', id: any, participantId: string, participantType: string, lastMessageAt: any, status: string } | null } | null };
export type CreateChatMessageMutationVariables = Exact<{
  input: CreateChatMessageInput;
}>;
export type CreateChatMessageMutation = { __typename?: 'Mutation', createChatMessage?: { __typename?: 'CreateChatMessagePayload', chatMessage?: { __typename?: 'ChatMessage', id: any, content: string, sender: string, timestamp: any, metadata?: string | null } | null } | null };
export type GetDocumentsQueryVariables = Exact<{ [key: string]: never; }>;
export type GetDocumentsQuery = { __typename?: 'Query', documents?: Array<{ __typename?: 'Document', id: any, title: string, type: string, projectId: any }> | null };
export type GetProjectsQueryVariables = Exact<{ [key: string]: never; }>;
export type GetProjectsQuery = { __typename?: 'Query', projects?: Array<{ __typename?: 'Project', id: any, name: string, description: string, status: string, startDate: any, endDate?: any | null, teamIds: Array<string | null> }> | null };
export type GetProjectQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;
export type GetProjectQuery = { __typename?: 'Query', project?: { __typename?: 'Project', id: any, name: string, description: string, status: string, startDate: any, endDate?: any | null, teamIds: Array<string | null> } | null };
export type CreateProjectMutationVariables = Exact<{
  input: CreateProjectInput;
}>;
export type CreateProjectMutation = { __typename?: 'Mutation', createProject?: { __typename?: 'CreateProjectPayload', project?: { __typename?: 'Project', id: any, name: string, description: string, status: string, startDate: any, endDate?: any | null, teamIds: Array<string | null> } | null } | null };
export type GetProjectTasksQueryVariables = Exact<{ [key: string]: never; }>;
export type GetProjectTasksQuery = { __typename?: 'Query', tasks?: Array<{ __typename?: 'Task', id: any, title: string, description: string, status: string, assigneeId?: string | null, dueDate?: any | null, priority: string, projectId: any }> | null };
export type GetTaskQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;
export type GetTaskQuery = { __typename?: 'Query', task?: { __typename?: 'Task', id: any, title: string, description: string, status: string, assigneeId?: string | null, dueDate?: any | null, priority: string, projectId: any } | null };
export type CreateTaskMutationVariables = Exact<{
  input: CreateTaskInput;
}>;
export type CreateTaskMutation = { __typename?: 'Mutation', createTask?: { __typename?: 'CreateTaskPayload', task?: { __typename?: 'Task', id: any, title: string, description: string, status: string, assigneeId?: string | null, dueDate?: any | null, priority: string, projectId: any } | null } | null };
export type UpdateTaskMutationVariables = Exact<{
  input: UpdateTaskInput;
}>;
export type UpdateTaskMutation = { __typename?: 'Mutation', updateTask?: { __typename?: 'UpdateTaskPayload', task?: { __typename?: 'Task', id: any, title: string, description: string, status: string, assigneeId?: string | null, dueDate?: any | null, priority: string, projectId: any } | null } | null };
export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;
export type GetUsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', uId: string, name?: string | null, email?: string | null, rId?: string | null, lname?: string | null, statement?: string | null, roleAdmin?: string | null, info?: any | null, coachUserId?: string | null, isCoach?: boolean | null, managerUserId?: string | null, phoneNumber?: string | null, textNotifications: boolean }> | null };
export type GetUserQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;
export type GetUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', uId: string, name?: string | null, email?: string | null, rId?: string | null, lname?: string | null, statement?: string | null, roleAdmin?: string | null, info?: any | null, coachUserId?: string | null, isCoach?: boolean | null, managerUserId?: string | null, phoneNumber?: string | null, textNotifications: boolean } | null };
export type GetUserByEmailQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;
export type GetUserByEmailQuery = { __typename?: 'Query', userByEmail?: { __typename?: 'User', uId: string, name?: string | null, email?: string | null, rId?: string | null, lname?: string | null, statement?: string | null, roleAdmin?: string | null, info?: any | null, coachUserId?: string | null, isCoach?: boolean | null, managerUserId?: string | null, phoneNumber?: string | null, textNotifications: boolean } | null };
export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;
export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'CreateUserPayload', user?: { __typename?: 'User', uId: string, name?: string | null, email?: string | null, rId?: string | null, lname?: string | null, statement?: string | null, roleAdmin?: string | null, info?: any | null, coachUserId?: string | null, isCoach?: boolean | null, managerUserId?: string | null, phoneNumber?: string | null, textNotifications: boolean } | null } | null };
export const GetAgentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAgents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"handle"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<GetAgentsQuery, GetAgentsQueryVariables>;
export const GetAgentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAgent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"handle"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<GetAgentQuery, GetAgentQueryVariables>;
export const CreateAgentDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateAgent"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateAgentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAgent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"handle"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]} as unknown as DocumentNode<CreateAgentMutation, CreateAgentMutationVariables>;
export const UpdateAgentStatusDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAgentStatus"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateAgentInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateAgent"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"agent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateAgentStatusMutation, UpdateAgentStatusMutationVariables>;
export const GetChatsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chats"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"participantId"}},{"kind":"Field","name":{"kind":"Name","value":"participantType"}},{"kind":"Field","name":{"kind":"Name","value":"lastMessageAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]} as unknown as DocumentNode<GetChatsQuery, GetChatsQueryVariables>;
export const GetChatMessagesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetChatMessages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chatMessages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"chatId"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"sender"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}}]}}]}}]} as unknown as DocumentNode<GetChatMessagesQuery, GetChatMessagesQueryVariables>;
export const CreateChatDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateChat"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateChatInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createChat"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chat"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"participantId"}},{"kind":"Field","name":{"kind":"Name","value":"participantType"}},{"kind":"Field","name":{"kind":"Name","value":"lastMessageAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}}]}}]}}]}}]} as unknown as DocumentNode<CreateChatMutation, CreateChatMutationVariables>;
export const CreateChatMessageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateChatMessage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateChatMessageInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createChatMessage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"chatMessage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"sender"}},{"kind":"Field","name":{"kind":"Name","value":"timestamp"}},{"kind":"Field","name":{"kind":"Name","value":"metadata"}}]}}]}}]}}]} as unknown as DocumentNode<CreateChatMessageMutation, CreateChatMessageMutationVariables>;
export const GetDocumentsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDocuments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documents"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}}]}}]}}]} as unknown as DocumentNode<GetDocumentsQuery, GetDocumentsQueryVariables>;
export const GetProjectsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProjects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"projects"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"teamIds"}}]}}]}}]} as unknown as DocumentNode<GetProjectsQuery, GetProjectsQueryVariables>;
export const GetProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"teamIds"}}]}}]}}]} as unknown as DocumentNode<GetProjectQuery, GetProjectQueryVariables>;
export const CreateProjectDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateProjectInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"project"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"startDate"}},{"kind":"Field","name":{"kind":"Name","value":"endDate"}},{"kind":"Field","name":{"kind":"Name","value":"teamIds"}}]}}]}}]}}]} as unknown as DocumentNode<CreateProjectMutation, CreateProjectMutationVariables>;
export const GetProjectTasksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProjectTasks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tasks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"assigneeId"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}}]}}]}}]} as unknown as DocumentNode<GetProjectTasksQuery, GetProjectTasksQueryVariables>;
export const GetTaskDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTask"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"task"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"assigneeId"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}}]}}]}}]} as unknown as DocumentNode<GetTaskQuery, GetTaskQueryVariables>;
export const CreateTaskDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTask"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTaskInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTask"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"task"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"assigneeId"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}}]}}]}}]}}]} as unknown as DocumentNode<CreateTaskMutation, CreateTaskMutationVariables>;
export const UpdateTaskDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateTask"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateTaskInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateTask"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"task"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"assigneeId"}},{"kind":"Field","name":{"kind":"Name","value":"dueDate"}},{"kind":"Field","name":{"kind":"Name","value":"priority"}},{"kind":"Field","name":{"kind":"Name","value":"projectId"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateTaskMutation, UpdateTaskMutationVariables>;
export const GetUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUsers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"rId"}},{"kind":"Field","name":{"kind":"Name","value":"lname"}},{"kind":"Field","name":{"kind":"Name","value":"statement"}},{"kind":"Field","name":{"kind":"Name","value":"roleAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"info"}},{"kind":"Field","name":{"kind":"Name","value":"coachUserId"}},{"kind":"Field","name":{"kind":"Name","value":"isCoach"}},{"kind":"Field","name":{"kind":"Name","value":"managerUserId"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"textNotifications"}}]}}]}}]} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"uId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"rId"}},{"kind":"Field","name":{"kind":"Name","value":"lname"}},{"kind":"Field","name":{"kind":"Name","value":"statement"}},{"kind":"Field","name":{"kind":"Name","value":"roleAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"info"}},{"kind":"Field","name":{"kind":"Name","value":"coachUserId"}},{"kind":"Field","name":{"kind":"Name","value":"isCoach"}},{"kind":"Field","name":{"kind":"Name","value":"managerUserId"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"textNotifications"}}]}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const GetUserByEmailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserByEmail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userByEmail"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"rId"}},{"kind":"Field","name":{"kind":"Name","value":"lname"}},{"kind":"Field","name":{"kind":"Name","value":"statement"}},{"kind":"Field","name":{"kind":"Name","value":"roleAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"info"}},{"kind":"Field","name":{"kind":"Name","value":"coachUserId"}},{"kind":"Field","name":{"kind":"Name","value":"isCoach"}},{"kind":"Field","name":{"kind":"Name","value":"managerUserId"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"textNotifications"}}]}}]}}]} as unknown as DocumentNode<GetUserByEmailQuery, GetUserByEmailQueryVariables>;
export const CreateUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUser"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateUserInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"uId"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"rId"}},{"kind":"Field","name":{"kind":"Name","value":"lname"}},{"kind":"Field","name":{"kind":"Name","value":"statement"}},{"kind":"Field","name":{"kind":"Name","value":"roleAdmin"}},{"kind":"Field","name":{"kind":"Name","value":"info"}},{"kind":"Field","name":{"kind":"Name","value":"coachUserId"}},{"kind":"Field","name":{"kind":"Name","value":"isCoach"}},{"kind":"Field","name":{"kind":"Name","value":"managerUserId"}},{"kind":"Field","name":{"kind":"Name","value":"phoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"textNotifications"}}]}}]}}]}}]} as unknown as DocumentNode<CreateUserMutation, CreateUserMutationVariables>;
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigFloat: { input: any; output: any; }
  Cursor: { input: any; output: any; }
  Date: { input: any; output: any; }
  Datetime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  UUID: { input: any; output: any; }
};
export type Agent = {
  __typename?: 'Agent';
  handle: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  status: Scalars['String']['output'];
};
export type AgentCondition = {
  id?: InputMaybe<Scalars['UUID']['input']>;
};
export type AgentInput = {
  handle: Scalars['String']['input'];
  id?: InputMaybe<Scalars['UUID']['input']>;
  name: Scalars['String']['input'];
  status: Scalars['String']['input'];
};
export type AgentPatch = {
  handle?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};
export type AgentsConnection = {
  __typename?: 'AgentsConnection';
  edges: Array<AgentsEdge>;
  nodes: Array<Agent>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type AgentsEdge = {
  __typename?: 'AgentsEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: Agent;
};
export enum AgentsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type Chat = {
  __typename?: 'Chat';
  chatMessages: Array<ChatMessage>;
  chatMessagesConnection: ChatMessagesConnection;
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  lastMessageAt: Scalars['Datetime']['output'];
  participantId: Scalars['String']['output'];
  participantType: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
};
export type ChatChatMessagesArgs = {
  condition?: InputMaybe<ChatMessageCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatMessagesOrderBy>>;
};
export type ChatChatMessagesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ChatMessageCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatMessagesOrderBy>>;
};
export type ChatCondition = {
  id?: InputMaybe<Scalars['UUID']['input']>;
};
export type ChatInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  lastMessageAt: Scalars['Datetime']['input'];
  participantId: Scalars['String']['input'];
  participantType: Scalars['String']['input'];
  status: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type ChatMessage = {
  __typename?: 'ChatMessage';
  chat?: Maybe<Chat>;
  chatId: Scalars['UUID']['output'];
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  metadata?: Maybe<Scalars['String']['output']>;
  sender: Scalars['String']['output'];
  timestamp: Scalars['Datetime']['output'];
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
};
export type ChatMessageCondition = {
  chatId?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
};
export type ChatMessageInput = {
  chatId: Scalars['UUID']['input'];
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  sender: Scalars['String']['input'];
  timestamp: Scalars['Datetime']['input'];
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type ChatMessagePatch = {
  chatId?: InputMaybe<Scalars['UUID']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  metadata?: InputMaybe<Scalars['String']['input']>;
  sender?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['Datetime']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type ChatMessagesConnection = {
  __typename?: 'ChatMessagesConnection';
  edges: Array<ChatMessagesEdge>;
  nodes: Array<ChatMessage>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type ChatMessagesEdge = {
  __typename?: 'ChatMessagesEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: ChatMessage;
};
export enum ChatMessagesOrderBy {
  ChatIdAsc = 'CHAT_ID_ASC',
  ChatIdDesc = 'CHAT_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type ChatPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  lastMessageAt?: InputMaybe<Scalars['Datetime']['input']>;
  participantId?: InputMaybe<Scalars['String']['input']>;
  participantType?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type ChatsConnection = {
  __typename?: 'ChatsConnection';
  edges: Array<ChatsEdge>;
  nodes: Array<Chat>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type ChatsEdge = {
  __typename?: 'ChatsEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: Chat;
};
export enum ChatsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type Comment = {
  __typename?: 'Comment';
  author?: Maybe<User>;
  authorId: Scalars['String']['output'];
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  documentId?: Maybe<Scalars['UUID']['output']>;
  id: Scalars['UUID']['output'];
  projectId: Scalars['UUID']['output'];
  taskId?: Maybe<Scalars['UUID']['output']>;
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
};
export type CommentCondition = {
  authorId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
};
export type CommentInput = {
  authorId: Scalars['String']['input'];
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  documentId?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  projectId: Scalars['UUID']['input'];
  taskId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type CommentPatch = {
  authorId?: InputMaybe<Scalars['String']['input']>;
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  documentId?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  projectId?: InputMaybe<Scalars['UUID']['input']>;
  taskId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type CommentsConnection = {
  __typename?: 'CommentsConnection';
  edges: Array<CommentsEdge>;
  nodes: Array<Comment>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type CommentsEdge = {
  __typename?: 'CommentsEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: Comment;
};
export enum CommentsOrderBy {
  AuthorIdAsc = 'AUTHOR_ID_ASC',
  AuthorIdDesc = 'AUTHOR_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type CreateAgentInput = {
  agent: AgentInput;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};
export type CreateAgentPayload = {
  __typename?: 'CreateAgentPayload';
  agent?: Maybe<Agent>;
  agentEdge?: Maybe<AgentsEdge>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
};
export type CreateAgentPayloadAgentEdgeArgs = {
  orderBy?: InputMaybe<Array<AgentsOrderBy>>;
};
export type CreateChatInput = {
  chat: ChatInput;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};
export type CreateChatMessageInput = {
  chatMessage: ChatMessageInput;
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};
export type CreateChatMessagePayload = {
  __typename?: 'CreateChatMessagePayload';
  chat?: Maybe<Chat>;
  chatMessage?: Maybe<ChatMessage>;
  chatMessageEdge?: Maybe<ChatMessagesEdge>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
};
export type CreateChatMessagePayloadChatMessageEdgeArgs = {
  orderBy?: InputMaybe<Array<ChatMessagesOrderBy>>;
};
export type CreateChatPayload = {
  __typename?: 'CreateChatPayload';
  chat?: Maybe<Chat>;
  chatEdge?: Maybe<ChatsEdge>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
};
export type CreateChatPayloadChatEdgeArgs = {
  orderBy?: InputMaybe<Array<ChatsOrderBy>>;
};
export type CreateCommentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  comment: CommentInput;
};
export type CreateCommentPayload = {
  __typename?: 'CreateCommentPayload';
  author?: Maybe<User>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Comment>;
  commentEdge?: Maybe<CommentsEdge>;
  query?: Maybe<Query>;
};
export type CreateCommentPayloadCommentEdgeArgs = {
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};
export type CreateDepartmentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  department: DepartmentInput;
};
export type CreateDepartmentPayload = {
  __typename?: 'CreateDepartmentPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  department?: Maybe<Department>;
  departmentEdge?: Maybe<DepartmentsEdge>;
  org?: Maybe<Organization>;
  query?: Maybe<Query>;
};
export type CreateDepartmentPayloadDepartmentEdgeArgs = {
  orderBy?: InputMaybe<Array<DepartmentsOrderBy>>;
};
export type CreateDocumentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  document: DocumentInput;
};
export type CreateDocumentPayload = {
  __typename?: 'CreateDocumentPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  document?: Maybe<Document>;
  documentEdge?: Maybe<DocumentsEdge>;
  query?: Maybe<Query>;
};
export type CreateDocumentPayloadDocumentEdgeArgs = {
  orderBy?: InputMaybe<Array<DocumentsOrderBy>>;
};
export type CreateExternalAppEndpointInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalAppEndpoint: ExternalAppEndpointInput;
};
export type CreateExternalAppEndpointPayload = {
  __typename?: 'CreateExternalAppEndpointPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  externalAppByExternalAppId?: Maybe<ExternalApp>;
  externalAppEndpoint?: Maybe<ExternalAppEndpoint>;
  externalAppEndpointEdge?: Maybe<ExternalAppEndpointsEdge>;
  query?: Maybe<Query>;
};
export type CreateExternalAppEndpointPayloadExternalAppEndpointEdgeArgs = {
  orderBy?: InputMaybe<Array<ExternalAppEndpointsOrderBy>>;
};
export type CreateExternalAppInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalApp: ExternalAppInput;
};
export type CreateExternalAppPayload = {
  __typename?: 'CreateExternalAppPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  externalApp?: Maybe<ExternalApp>;
  externalAppEdge?: Maybe<ExternalAppsEdge>;
  query?: Maybe<Query>;
};
export type CreateExternalAppPayloadExternalAppEdgeArgs = {
  orderBy?: InputMaybe<Array<ExternalAppsOrderBy>>;
};
export type CreateExternalAuthenticationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalAuthentication: ExternalAuthenticationInput;
};
export type CreateExternalAuthenticationKpiInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalAuthenticationKpi: ExternalAuthenticationKpiInput;
};
export type CreateExternalAuthenticationKpiPayload = {
  __typename?: 'CreateExternalAuthenticationKpiPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  externalAuthenticationByExternalAuthenticationId?: Maybe<ExternalAuthentication>;
  externalAuthenticationKpi?: Maybe<ExternalAuthenticationKpi>;
  externalAuthenticationKpiEdge?: Maybe<ExternalAuthenticationKpisEdge>;
  kpi?: Maybe<Kpi>;
  query?: Maybe<Query>;
};
export type CreateExternalAuthenticationKpiPayloadExternalAuthenticationKpiEdgeArgs = {
  orderBy?: InputMaybe<Array<ExternalAuthenticationKpisOrderBy>>;
};
export type CreateExternalAuthenticationPayload = {
  __typename?: 'CreateExternalAuthenticationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  externalAppByExternalAppId?: Maybe<ExternalApp>;
  externalAuthentication?: Maybe<ExternalAuthentication>;
  externalAuthenticationEdge?: Maybe<ExternalAuthenticationsEdge>;
  externalAuthenticationTypeByExternalAuthenticationTypeId?: Maybe<ExternalAuthenticationType>;
  query?: Maybe<Query>;
};
export type CreateExternalAuthenticationPayloadExternalAuthenticationEdgeArgs = {
  orderBy?: InputMaybe<Array<ExternalAuthenticationsOrderBy>>;
};
export type CreateExternalAuthenticationTypeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalAuthenticationType: ExternalAuthenticationTypeInput;
};
export type CreateExternalAuthenticationTypePayload = {
  __typename?: 'CreateExternalAuthenticationTypePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  externalAuthenticationType?: Maybe<ExternalAuthenticationType>;
  externalAuthenticationTypeEdge?: Maybe<ExternalAuthenticationTypesEdge>;
  query?: Maybe<Query>;
};
export type CreateExternalAuthenticationTypePayloadExternalAuthenticationTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<ExternalAuthenticationTypesOrderBy>>;
};
export type CreateIndustryInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  industry: IndustryInput;
};
export type CreateIndustryPayload = {
  __typename?: 'CreateIndustryPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  industry?: Maybe<Industry>;
  industryEdge?: Maybe<IndustriesEdge>;
  query?: Maybe<Query>;
};
export type CreateIndustryPayloadIndustryEdgeArgs = {
  orderBy?: InputMaybe<Array<IndustriesOrderBy>>;
};
export type CreateKpiDelegateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  kpiDelegate: KpiDelegateInput;
};
export type CreateKpiDelegatePayload = {
  __typename?: 'CreateKpiDelegatePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  kpi?: Maybe<Kpi>;
  kpiDelegate?: Maybe<KpiDelegate>;
  kpiDelegateEdge?: Maybe<KpiDelegatesEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type CreateKpiDelegatePayloadKpiDelegateEdgeArgs = {
  orderBy?: InputMaybe<Array<KpiDelegatesOrderBy>>;
};
export type CreateKpiHistoryInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  kpiHistory: KpiHistoryInput;
};
export type CreateKpiHistoryPayload = {
  __typename?: 'CreateKpiHistoryPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  kpi?: Maybe<Kpi>;
  kpiHistory?: Maybe<KpiHistory>;
  kpiHistoryEdge?: Maybe<KpiHistoriesEdge>;
  query?: Maybe<Query>;
};
export type CreateKpiHistoryPayloadKpiHistoryEdgeArgs = {
  orderBy?: InputMaybe<Array<KpiHistoriesOrderBy>>;
};
export type CreateKpiInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  kpi: KpiInput;
};
export type CreateKpiPayload = {
  __typename?: 'CreateKpiPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  kpi?: Maybe<Kpi>;
  kpiEdge?: Maybe<KpisEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type CreateKpiPayloadKpiEdgeArgs = {
  orderBy?: InputMaybe<Array<KpisOrderBy>>;
};
export type CreateMeetingHistoryInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meetingHistory: MeetingHistoryInput;
};
export type CreateMeetingHistoryPayload = {
  __typename?: 'CreateMeetingHistoryPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  meeting?: Maybe<Meeting>;
  meetingHistory?: Maybe<MeetingHistory>;
  meetingHistoryEdge?: Maybe<MeetingHistoriesEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type CreateMeetingHistoryPayloadMeetingHistoryEdgeArgs = {
  orderBy?: InputMaybe<Array<MeetingHistoriesOrderBy>>;
};
export type CreateMeetingInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meeting: MeetingInput;
};
export type CreateMeetingKpiInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meetingKpi: MeetingKpiInput;
};
export type CreateMeetingKpiPayload = {
  __typename?: 'CreateMeetingKpiPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  kpi?: Maybe<Kpi>;
  meeting?: Maybe<Meeting>;
  meetingKpi?: Maybe<MeetingKpi>;
  meetingKpiEdge?: Maybe<MeetingKpisEdge>;
  query?: Maybe<Query>;
};
export type CreateMeetingKpiPayloadMeetingKpiEdgeArgs = {
  orderBy?: InputMaybe<Array<MeetingKpisOrderBy>>;
};
export type CreateMeetingPayload = {
  __typename?: 'CreateMeetingPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  meeting?: Maybe<Meeting>;
  meetingEdge?: Maybe<MeetingsEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type CreateMeetingPayloadMeetingEdgeArgs = {
  orderBy?: InputMaybe<Array<MeetingsOrderBy>>;
};
export type CreateMeetingUserHistoryInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meetingUserHistory: MeetingUserHistoryInput;
};
export type CreateMeetingUserHistoryPayload = {
  __typename?: 'CreateMeetingUserHistoryPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  meetingUserHistory?: Maybe<MeetingUserHistory>;
  meetingUserHistoryEdge?: Maybe<MeetingUserHistoriesEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type CreateMeetingUserHistoryPayloadMeetingUserHistoryEdgeArgs = {
  orderBy?: InputMaybe<Array<MeetingUserHistoriesOrderBy>>;
};
export type CreateMeetingUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meetingUser: MeetingUserInput;
};
export type CreateMeetingUserPayload = {
  __typename?: 'CreateMeetingUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  meetingUser?: Maybe<MeetingUser>;
  meetingUserEdge?: Maybe<MeetingUsersEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type CreateMeetingUserPayloadMeetingUserEdgeArgs = {
  orderBy?: InputMaybe<Array<MeetingUsersOrderBy>>;
};
export type CreateOrganizationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  organization: OrganizationInput;
};
export type CreateOrganizationPayload = {
  __typename?: 'CreateOrganizationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  industryByIndustryId?: Maybe<Industry>;
  organization?: Maybe<Organization>;
  organizationEdge?: Maybe<OrganizationsEdge>;
  query?: Maybe<Query>;
};
export type CreateOrganizationPayloadOrganizationEdgeArgs = {
  orderBy?: InputMaybe<Array<OrganizationsOrderBy>>;
};
export type CreateProjectInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  project: ProjectInput;
};
export type CreateProjectPayload = {
  __typename?: 'CreateProjectPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  org?: Maybe<Organization>;
  project?: Maybe<Project>;
  projectEdge?: Maybe<ProjectsEdge>;
  query?: Maybe<Query>;
};
export type CreateProjectPayloadProjectEdgeArgs = {
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
};
export type CreateRoleInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  role: RoleInput;
};
export type CreateRolePayload = {
  __typename?: 'CreateRolePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  dep?: Maybe<Department>;
  query?: Maybe<Query>;
  role?: Maybe<Role>;
  roleEdge?: Maybe<RolesEdge>;
};
export type CreateRolePayloadRoleEdgeArgs = {
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
};
export type CreateStandardKpiInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  standardKpi: StandardKpiInput;
};
export type CreateStandardKpiPayload = {
  __typename?: 'CreateStandardKpiPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
  standardKpi?: Maybe<StandardKpi>;
  standardKpiEdge?: Maybe<StandardKpisEdge>;
};
export type CreateStandardKpiPayloadStandardKpiEdgeArgs = {
  orderBy?: InputMaybe<Array<StandardKpisOrderBy>>;
};
export type CreateStandardMilestoneInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  standardMilestone: StandardMilestoneInput;
};
export type CreateStandardMilestonePayload = {
  __typename?: 'CreateStandardMilestonePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
  standardKpi?: Maybe<StandardKpi>;
  standardMilestone?: Maybe<StandardMilestone>;
  standardMilestoneEdge?: Maybe<StandardMilestonesEdge>;
};
export type CreateStandardMilestonePayloadStandardMilestoneEdgeArgs = {
  orderBy?: InputMaybe<Array<StandardMilestonesOrderBy>>;
};
export type CreateTaskInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  task: TaskInput;
};
export type CreateTaskPayload = {
  __typename?: 'CreateTaskPayload';
  assignee?: Maybe<User>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
  task?: Maybe<Task>;
  taskEdge?: Maybe<TasksEdge>;
};
export type CreateTaskPayloadTaskEdgeArgs = {
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};
export type CreateUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  user: UserInput;
};
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  dep?: Maybe<Department>;
  query?: Maybe<Query>;
  r?: Maybe<Role>;
  user?: Maybe<User>;
  userEdge?: Maybe<UsersEdge>;
};
export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};
export type DeleteAgentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};
export type DeleteAgentPayload = {
  __typename?: 'DeleteAgentPayload';
  agent?: Maybe<Agent>;
  agentEdge?: Maybe<AgentsEdge>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedAgentNodeId?: Maybe<Scalars['ID']['output']>;
  query?: Maybe<Query>;
};
export type DeleteAgentPayloadAgentEdgeArgs = {
  orderBy?: InputMaybe<Array<AgentsOrderBy>>;
};
export type DeleteChatInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};
export type DeleteChatMessageInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};
export type DeleteChatMessagePayload = {
  __typename?: 'DeleteChatMessagePayload';
  chat?: Maybe<Chat>;
  chatMessage?: Maybe<ChatMessage>;
  chatMessageEdge?: Maybe<ChatMessagesEdge>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedChatMessageNodeId?: Maybe<Scalars['ID']['output']>;
  query?: Maybe<Query>;
};
export type DeleteChatMessagePayloadChatMessageEdgeArgs = {
  orderBy?: InputMaybe<Array<ChatMessagesOrderBy>>;
};
export type DeleteChatPayload = {
  __typename?: 'DeleteChatPayload';
  chat?: Maybe<Chat>;
  chatEdge?: Maybe<ChatsEdge>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedChatNodeId?: Maybe<Scalars['ID']['output']>;
  query?: Maybe<Query>;
};
export type DeleteChatPayloadChatEdgeArgs = {
  orderBy?: InputMaybe<Array<ChatsOrderBy>>;
};
export type DeleteCommentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};
export type DeleteCommentPayload = {
  __typename?: 'DeleteCommentPayload';
  author?: Maybe<User>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Comment>;
  commentEdge?: Maybe<CommentsEdge>;
  deletedCommentNodeId?: Maybe<Scalars['ID']['output']>;
  query?: Maybe<Query>;
};
export type DeleteCommentPayloadCommentEdgeArgs = {
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};
export type DeleteDepartmentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  depId: Scalars['String']['input'];
};
export type DeleteDepartmentPayload = {
  __typename?: 'DeleteDepartmentPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedDepartmentNodeId?: Maybe<Scalars['ID']['output']>;
  department?: Maybe<Department>;
  departmentEdge?: Maybe<DepartmentsEdge>;
  org?: Maybe<Organization>;
  query?: Maybe<Query>;
};
export type DeleteDepartmentPayloadDepartmentEdgeArgs = {
  orderBy?: InputMaybe<Array<DepartmentsOrderBy>>;
};
export type DeleteDocumentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};
export type DeleteDocumentPayload = {
  __typename?: 'DeleteDocumentPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedDocumentNodeId?: Maybe<Scalars['ID']['output']>;
  document?: Maybe<Document>;
  documentEdge?: Maybe<DocumentsEdge>;
  query?: Maybe<Query>;
};
export type DeleteDocumentPayloadDocumentEdgeArgs = {
  orderBy?: InputMaybe<Array<DocumentsOrderBy>>;
};
export type DeleteExternalAppEndpointInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalAppEndpointId: Scalars['String']['input'];
};
export type DeleteExternalAppEndpointPayload = {
  __typename?: 'DeleteExternalAppEndpointPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedExternalAppEndpointNodeId?: Maybe<Scalars['ID']['output']>;
  externalAppByExternalAppId?: Maybe<ExternalApp>;
  externalAppEndpoint?: Maybe<ExternalAppEndpoint>;
  externalAppEndpointEdge?: Maybe<ExternalAppEndpointsEdge>;
  query?: Maybe<Query>;
};
export type DeleteExternalAppEndpointPayloadExternalAppEndpointEdgeArgs = {
  orderBy?: InputMaybe<Array<ExternalAppEndpointsOrderBy>>;
};
export type DeleteExternalAppInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalAppId: Scalars['String']['input'];
};
export type DeleteExternalAppPayload = {
  __typename?: 'DeleteExternalAppPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedExternalAppNodeId?: Maybe<Scalars['ID']['output']>;
  externalApp?: Maybe<ExternalApp>;
  externalAppEdge?: Maybe<ExternalAppsEdge>;
  query?: Maybe<Query>;
};
export type DeleteExternalAppPayloadExternalAppEdgeArgs = {
  orderBy?: InputMaybe<Array<ExternalAppsOrderBy>>;
};
export type DeleteExternalAuthenticationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalAuthenticationId: Scalars['String']['input'];
};
export type DeleteExternalAuthenticationKpiInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalAuthenticationKpiId: Scalars['String']['input'];
};
export type DeleteExternalAuthenticationKpiPayload = {
  __typename?: 'DeleteExternalAuthenticationKpiPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedExternalAuthenticationKpiNodeId?: Maybe<Scalars['ID']['output']>;
  externalAuthenticationByExternalAuthenticationId?: Maybe<ExternalAuthentication>;
  externalAuthenticationKpi?: Maybe<ExternalAuthenticationKpi>;
  externalAuthenticationKpiEdge?: Maybe<ExternalAuthenticationKpisEdge>;
  kpi?: Maybe<Kpi>;
  query?: Maybe<Query>;
};
export type DeleteExternalAuthenticationKpiPayloadExternalAuthenticationKpiEdgeArgs = {
  orderBy?: InputMaybe<Array<ExternalAuthenticationKpisOrderBy>>;
};
export type DeleteExternalAuthenticationPayload = {
  __typename?: 'DeleteExternalAuthenticationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedExternalAuthenticationNodeId?: Maybe<Scalars['ID']['output']>;
  externalAppByExternalAppId?: Maybe<ExternalApp>;
  externalAuthentication?: Maybe<ExternalAuthentication>;
  externalAuthenticationEdge?: Maybe<ExternalAuthenticationsEdge>;
  externalAuthenticationTypeByExternalAuthenticationTypeId?: Maybe<ExternalAuthenticationType>;
  query?: Maybe<Query>;
};
export type DeleteExternalAuthenticationPayloadExternalAuthenticationEdgeArgs = {
  orderBy?: InputMaybe<Array<ExternalAuthenticationsOrderBy>>;
};
export type DeleteExternalAuthenticationTypeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalAuthenticationTypeId: Scalars['String']['input'];
};
export type DeleteExternalAuthenticationTypePayload = {
  __typename?: 'DeleteExternalAuthenticationTypePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedExternalAuthenticationTypeNodeId?: Maybe<Scalars['ID']['output']>;
  externalAuthenticationType?: Maybe<ExternalAuthenticationType>;
  externalAuthenticationTypeEdge?: Maybe<ExternalAuthenticationTypesEdge>;
  query?: Maybe<Query>;
};
export type DeleteExternalAuthenticationTypePayloadExternalAuthenticationTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<ExternalAuthenticationTypesOrderBy>>;
};
export type DeleteIndustryInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  industryId: Scalars['String']['input'];
};
export type DeleteIndustryPayload = {
  __typename?: 'DeleteIndustryPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedIndustryNodeId?: Maybe<Scalars['ID']['output']>;
  industry?: Maybe<Industry>;
  industryEdge?: Maybe<IndustriesEdge>;
  query?: Maybe<Query>;
};
export type DeleteIndustryPayloadIndustryEdgeArgs = {
  orderBy?: InputMaybe<Array<IndustriesOrderBy>>;
};
export type DeleteKpiDelegateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  kpiDelegateId: Scalars['String']['input'];
};
export type DeleteKpiDelegatePayload = {
  __typename?: 'DeleteKpiDelegatePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedKpiDelegateNodeId?: Maybe<Scalars['ID']['output']>;
  kpi?: Maybe<Kpi>;
  kpiDelegate?: Maybe<KpiDelegate>;
  kpiDelegateEdge?: Maybe<KpiDelegatesEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type DeleteKpiDelegatePayloadKpiDelegateEdgeArgs = {
  orderBy?: InputMaybe<Array<KpiDelegatesOrderBy>>;
};
export type DeleteKpiHistoryInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  kpiHistoryId: Scalars['String']['input'];
};
export type DeleteKpiHistoryPayload = {
  __typename?: 'DeleteKpiHistoryPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedKpiHistoryNodeId?: Maybe<Scalars['ID']['output']>;
  kpi?: Maybe<Kpi>;
  kpiHistory?: Maybe<KpiHistory>;
  kpiHistoryEdge?: Maybe<KpiHistoriesEdge>;
  query?: Maybe<Query>;
};
export type DeleteKpiHistoryPayloadKpiHistoryEdgeArgs = {
  orderBy?: InputMaybe<Array<KpiHistoriesOrderBy>>;
};
export type DeleteKpiInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  kpiId: Scalars['String']['input'];
};
export type DeleteKpiPayload = {
  __typename?: 'DeleteKpiPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedKpiNodeId?: Maybe<Scalars['ID']['output']>;
  kpi?: Maybe<Kpi>;
  kpiEdge?: Maybe<KpisEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type DeleteKpiPayloadKpiEdgeArgs = {
  orderBy?: InputMaybe<Array<KpisOrderBy>>;
};
export type DeleteMeetingHistoryInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meetingHistoryId: Scalars['String']['input'];
};
export type DeleteMeetingHistoryPayload = {
  __typename?: 'DeleteMeetingHistoryPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedMeetingHistoryNodeId?: Maybe<Scalars['ID']['output']>;
  meeting?: Maybe<Meeting>;
  meetingHistory?: Maybe<MeetingHistory>;
  meetingHistoryEdge?: Maybe<MeetingHistoriesEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type DeleteMeetingHistoryPayloadMeetingHistoryEdgeArgs = {
  orderBy?: InputMaybe<Array<MeetingHistoriesOrderBy>>;
};
export type DeleteMeetingInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meetingId: Scalars['String']['input'];
};
export type DeleteMeetingKpiInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meetingKpiId: Scalars['String']['input'];
};
export type DeleteMeetingKpiPayload = {
  __typename?: 'DeleteMeetingKpiPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedMeetingKpiNodeId?: Maybe<Scalars['ID']['output']>;
  kpi?: Maybe<Kpi>;
  meeting?: Maybe<Meeting>;
  meetingKpi?: Maybe<MeetingKpi>;
  meetingKpiEdge?: Maybe<MeetingKpisEdge>;
  query?: Maybe<Query>;
};
export type DeleteMeetingKpiPayloadMeetingKpiEdgeArgs = {
  orderBy?: InputMaybe<Array<MeetingKpisOrderBy>>;
};
export type DeleteMeetingPayload = {
  __typename?: 'DeleteMeetingPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedMeetingNodeId?: Maybe<Scalars['ID']['output']>;
  meeting?: Maybe<Meeting>;
  meetingEdge?: Maybe<MeetingsEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type DeleteMeetingPayloadMeetingEdgeArgs = {
  orderBy?: InputMaybe<Array<MeetingsOrderBy>>;
};
export type DeleteMeetingUserHistoryInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meetingUserHistoryId: Scalars['String']['input'];
};
export type DeleteMeetingUserHistoryPayload = {
  __typename?: 'DeleteMeetingUserHistoryPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedMeetingUserHistoryNodeId?: Maybe<Scalars['ID']['output']>;
  meetingUserHistory?: Maybe<MeetingUserHistory>;
  meetingUserHistoryEdge?: Maybe<MeetingUserHistoriesEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type DeleteMeetingUserHistoryPayloadMeetingUserHistoryEdgeArgs = {
  orderBy?: InputMaybe<Array<MeetingUserHistoriesOrderBy>>;
};
export type DeleteMeetingUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meetingUserId: Scalars['String']['input'];
};
export type DeleteMeetingUserPayload = {
  __typename?: 'DeleteMeetingUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedMeetingUserNodeId?: Maybe<Scalars['ID']['output']>;
  meetingUser?: Maybe<MeetingUser>;
  meetingUserEdge?: Maybe<MeetingUsersEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type DeleteMeetingUserPayloadMeetingUserEdgeArgs = {
  orderBy?: InputMaybe<Array<MeetingUsersOrderBy>>;
};
export type DeleteOrganizationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  orgId: Scalars['String']['input'];
};
export type DeleteOrganizationPayload = {
  __typename?: 'DeleteOrganizationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedOrganizationNodeId?: Maybe<Scalars['ID']['output']>;
  industryByIndustryId?: Maybe<Industry>;
  organization?: Maybe<Organization>;
  organizationEdge?: Maybe<OrganizationsEdge>;
  query?: Maybe<Query>;
};
export type DeleteOrganizationPayloadOrganizationEdgeArgs = {
  orderBy?: InputMaybe<Array<OrganizationsOrderBy>>;
};
export type DeleteProjectInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};
export type DeleteProjectPayload = {
  __typename?: 'DeleteProjectPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedProjectNodeId?: Maybe<Scalars['ID']['output']>;
  org?: Maybe<Organization>;
  project?: Maybe<Project>;
  projectEdge?: Maybe<ProjectsEdge>;
  query?: Maybe<Query>;
};
export type DeleteProjectPayloadProjectEdgeArgs = {
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
};
export type DeleteRoleInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  rId: Scalars['String']['input'];
};
export type DeleteRolePayload = {
  __typename?: 'DeleteRolePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedRoleNodeId?: Maybe<Scalars['ID']['output']>;
  dep?: Maybe<Department>;
  query?: Maybe<Query>;
  role?: Maybe<Role>;
  roleEdge?: Maybe<RolesEdge>;
};
export type DeleteRolePayloadRoleEdgeArgs = {
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
};
export type DeleteStandardKpiInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  standardKpiId: Scalars['String']['input'];
};
export type DeleteStandardKpiPayload = {
  __typename?: 'DeleteStandardKpiPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedStandardKpiNodeId?: Maybe<Scalars['ID']['output']>;
  query?: Maybe<Query>;
  standardKpi?: Maybe<StandardKpi>;
  standardKpiEdge?: Maybe<StandardKpisEdge>;
};
export type DeleteStandardKpiPayloadStandardKpiEdgeArgs = {
  orderBy?: InputMaybe<Array<StandardKpisOrderBy>>;
};
export type DeleteStandardMilestoneInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  standardMilestoneId: Scalars['String']['input'];
};
export type DeleteStandardMilestonePayload = {
  __typename?: 'DeleteStandardMilestonePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedStandardMilestoneNodeId?: Maybe<Scalars['ID']['output']>;
  query?: Maybe<Query>;
  standardKpi?: Maybe<StandardKpi>;
  standardMilestone?: Maybe<StandardMilestone>;
  standardMilestoneEdge?: Maybe<StandardMilestonesEdge>;
};
export type DeleteStandardMilestonePayloadStandardMilestoneEdgeArgs = {
  orderBy?: InputMaybe<Array<StandardMilestonesOrderBy>>;
};
export type DeleteTaskInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};
export type DeleteTaskPayload = {
  __typename?: 'DeleteTaskPayload';
  assignee?: Maybe<User>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedTaskNodeId?: Maybe<Scalars['ID']['output']>;
  query?: Maybe<Query>;
  task?: Maybe<Task>;
  taskEdge?: Maybe<TasksEdge>;
};
export type DeleteTaskPayloadTaskEdgeArgs = {
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};
export type DeleteUserByEmailInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
};
export type DeleteUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  uId: Scalars['String']['input'];
};
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedUserNodeId?: Maybe<Scalars['ID']['output']>;
  dep?: Maybe<Department>;
  query?: Maybe<Query>;
  r?: Maybe<Role>;
  user?: Maybe<User>;
  userEdge?: Maybe<UsersEdge>;
};
export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};
export type Department = {
  __typename?: 'Department';
  createdAt: Scalars['Datetime']['output'];
  depId: Scalars['String']['output'];
  deptName?: Maybe<Scalars['String']['output']>;
  org?: Maybe<Organization>;
  orgId?: Maybe<Scalars['String']['output']>;
  rolesByDepId: Array<Role>;
  rolesByDepIdConnection: RolesConnection;
  updatedAt: Scalars['Datetime']['output'];
  usersByDepId: Array<User>;
  usersByDepIdConnection: UsersConnection;
};
export type DepartmentRolesByDepIdArgs = {
  condition?: InputMaybe<RoleCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
};
export type DepartmentRolesByDepIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RoleCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
};
export type DepartmentUsersByDepIdArgs = {
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};
export type DepartmentUsersByDepIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};
export type DepartmentCondition = {
  depId?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['String']['input']>;
};
export type DepartmentInput = {
  createdAt: Scalars['Datetime']['input'];
  depId: Scalars['String']['input'];
  deptName?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['String']['input']>;
  updatedAt: Scalars['Datetime']['input'];
};
export type DepartmentPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  depId?: InputMaybe<Scalars['String']['input']>;
  deptName?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type DepartmentsConnection = {
  __typename?: 'DepartmentsConnection';
  edges: Array<DepartmentsEdge>;
  nodes: Array<Department>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type DepartmentsEdge = {
  __typename?: 'DepartmentsEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: Department;
};
export enum DepartmentsOrderBy {
  DepIdAsc = 'DEP_ID_ASC',
  DepIdDesc = 'DEP_ID_DESC',
  Natural = 'NATURAL',
  OrgIdAsc = 'ORG_ID_ASC',
  OrgIdDesc = 'ORG_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type Document = {
  __typename?: 'Document';
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  projectId: Scalars['UUID']['output'];
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
};
export type DocumentCondition = {
  id?: InputMaybe<Scalars['UUID']['input']>;
};
export type DocumentInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  projectId: Scalars['UUID']['input'];
  title: Scalars['String']['input'];
  type: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type DocumentPatch = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  projectId?: InputMaybe<Scalars['UUID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type DocumentsConnection = {
  __typename?: 'DocumentsConnection';
  edges: Array<DocumentsEdge>;
  nodes: Array<Document>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type DocumentsEdge = {
  __typename?: 'DocumentsEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: Document;
};
export enum DocumentsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export enum EnumKpiCharpStatus {
  A = 'A',
  C = 'C',
  H = 'H',
  P = 'P',
  R = 'R'
}
export type ExternalApp = {
  __typename?: 'ExternalApp';
  authenticationUrl: Scalars['String']['output'];
  authorizationHeader?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Datetime']['output'];
  deletedAt?: Maybe<Scalars['Datetime']['output']>;
  externalAppEndpointsByExternalAppId: Array<ExternalAppEndpoint>;
  externalAppEndpointsByExternalAppIdConnection: ExternalAppEndpointsConnection;
  externalAppId: Scalars['String']['output'];
  externalAuthenticationsByExternalAppId: Array<ExternalAuthentication>;
  externalAuthenticationsByExternalAppIdConnection: ExternalAuthenticationsConnection;
  logoPath?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  redirectUri?: Maybe<Scalars['String']['output']>;
  scope?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Datetime']['output'];
};
export type ExternalAppExternalAppEndpointsByExternalAppIdArgs = {
  condition?: InputMaybe<ExternalAppEndpointCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAppEndpointsOrderBy>>;
};
export type ExternalAppExternalAppEndpointsByExternalAppIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ExternalAppEndpointCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAppEndpointsOrderBy>>;
};
export type ExternalAppExternalAuthenticationsByExternalAppIdArgs = {
  condition?: InputMaybe<ExternalAuthenticationCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAuthenticationsOrderBy>>;
};
export type ExternalAppExternalAuthenticationsByExternalAppIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ExternalAuthenticationCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAuthenticationsOrderBy>>;
};
export type ExternalAppCondition = {
  externalAppId?: InputMaybe<Scalars['String']['input']>;
};
export type ExternalAppEndpoint = {
  __typename?: 'ExternalAppEndpoint';
  createdAt: Scalars['Datetime']['output'];
  deletedAt?: Maybe<Scalars['Datetime']['output']>;
  endpointName: Scalars['String']['output'];
  endpointPath?: Maybe<Scalars['String']['output']>;
  endpointStatus: Scalars['String']['output'];
  externalAppByExternalAppId?: Maybe<ExternalApp>;
  externalAppEndpointId: Scalars['String']['output'];
  externalAppId: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
};
export type ExternalAppEndpointCondition = {
  externalAppEndpointId?: InputMaybe<Scalars['String']['input']>;
  externalAppId?: InputMaybe<Scalars['String']['input']>;
};
export type ExternalAppEndpointInput = {
  createdAt: Scalars['Datetime']['input'];
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  endpointName: Scalars['String']['input'];
  endpointPath?: InputMaybe<Scalars['String']['input']>;
  endpointStatus: Scalars['String']['input'];
  externalAppEndpointId: Scalars['String']['input'];
  externalAppId: Scalars['String']['input'];
  updatedAt: Scalars['Datetime']['input'];
};
export type ExternalAppEndpointPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  endpointName?: InputMaybe<Scalars['String']['input']>;
  endpointPath?: InputMaybe<Scalars['String']['input']>;
  endpointStatus?: InputMaybe<Scalars['String']['input']>;
  externalAppEndpointId?: InputMaybe<Scalars['String']['input']>;
  externalAppId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type ExternalAppEndpointsConnection = {
  __typename?: 'ExternalAppEndpointsConnection';
  edges: Array<ExternalAppEndpointsEdge>;
  nodes: Array<ExternalAppEndpoint>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type ExternalAppEndpointsEdge = {
  __typename?: 'ExternalAppEndpointsEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: ExternalAppEndpoint;
};
export enum ExternalAppEndpointsOrderBy {
  ExternalAppEndpointIdAsc = 'EXTERNAL_APP_ENDPOINT_ID_ASC',
  ExternalAppEndpointIdDesc = 'EXTERNAL_APP_ENDPOINT_ID_DESC',
  ExternalAppIdAsc = 'EXTERNAL_APP_ID_ASC',
  ExternalAppIdDesc = 'EXTERNAL_APP_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type ExternalAppInput = {
  authenticationUrl: Scalars['String']['input'];
  authorizationHeader?: InputMaybe<Scalars['String']['input']>;
  createdAt: Scalars['Datetime']['input'];
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  externalAppId: Scalars['String']['input'];
  logoPath?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  redirectUri?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  updatedAt: Scalars['Datetime']['input'];
};
export type ExternalAppPatch = {
  authenticationUrl?: InputMaybe<Scalars['String']['input']>;
  authorizationHeader?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  externalAppId?: InputMaybe<Scalars['String']['input']>;
  logoPath?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  redirectUri?: InputMaybe<Scalars['String']['input']>;
  scope?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type ExternalAppsConnection = {
  __typename?: 'ExternalAppsConnection';
  edges: Array<ExternalAppsEdge>;
  nodes: Array<ExternalApp>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type ExternalAppsEdge = {
  __typename?: 'ExternalAppsEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: ExternalApp;
};
export enum ExternalAppsOrderBy {
  ExternalAppIdAsc = 'EXTERNAL_APP_ID_ASC',
  ExternalAppIdDesc = 'EXTERNAL_APP_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type ExternalAuthentication = {
  __typename?: 'ExternalAuthentication';
  configuration: Scalars['JSON']['output'];
  createdAt: Scalars['Datetime']['output'];
  deletedAt?: Maybe<Scalars['Datetime']['output']>;
  externalAppByExternalAppId?: Maybe<ExternalApp>;
  externalAppId: Scalars['String']['output'];
  externalAuthenticationId: Scalars['String']['output'];
  externalAuthenticationKpisByExternalAuthenticationId: Array<ExternalAuthenticationKpi>;
  externalAuthenticationKpisByExternalAuthenticationIdConnection: ExternalAuthenticationKpisConnection;
  externalAuthenticationTypeByExternalAuthenticationTypeId?: Maybe<ExternalAuthenticationType>;
  externalAuthenticationTypeId: Scalars['String']['output'];
  uId: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
};
export type ExternalAuthenticationExternalAuthenticationKpisByExternalAuthenticationIdArgs = {
  condition?: InputMaybe<ExternalAuthenticationKpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAuthenticationKpisOrderBy>>;
};
export type ExternalAuthenticationExternalAuthenticationKpisByExternalAuthenticationIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ExternalAuthenticationKpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAuthenticationKpisOrderBy>>;
};
export type ExternalAuthenticationCondition = {
  externalAppId?: InputMaybe<Scalars['String']['input']>;
  externalAuthenticationId?: InputMaybe<Scalars['String']['input']>;
  externalAuthenticationTypeId?: InputMaybe<Scalars['String']['input']>;
  uId?: InputMaybe<Scalars['String']['input']>;
};
export type ExternalAuthenticationInput = {
  configuration: Scalars['JSON']['input'];
  createdAt: Scalars['Datetime']['input'];
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  externalAppId: Scalars['String']['input'];
  externalAuthenticationId: Scalars['String']['input'];
  externalAuthenticationTypeId: Scalars['String']['input'];
  uId: Scalars['String']['input'];
  updatedAt: Scalars['Datetime']['input'];
};
export type ExternalAuthenticationKpi = {
  __typename?: 'ExternalAuthenticationKpi';
  createdAt: Scalars['Datetime']['output'];
  dataEndpoint?: Maybe<Scalars['String']['output']>;
  dataLogic?: Maybe<Scalars['String']['output']>;
  deletedAt?: Maybe<Scalars['Datetime']['output']>;
  externalAppEndpointId?: Maybe<Scalars['String']['output']>;
  externalAuthenticationByExternalAuthenticationId?: Maybe<ExternalAuthentication>;
  externalAuthenticationId: Scalars['String']['output'];
  externalAuthenticationKpiId: Scalars['String']['output'];
  kpi?: Maybe<Kpi>;
  kpiId: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
};
export type ExternalAuthenticationKpiCondition = {
  externalAuthenticationId?: InputMaybe<Scalars['String']['input']>;
  externalAuthenticationKpiId?: InputMaybe<Scalars['String']['input']>;
  kpiId?: InputMaybe<Scalars['String']['input']>;
};
export type ExternalAuthenticationKpiInput = {
  createdAt: Scalars['Datetime']['input'];
  dataEndpoint?: InputMaybe<Scalars['String']['input']>;
  dataLogic?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  externalAppEndpointId?: InputMaybe<Scalars['String']['input']>;
  externalAuthenticationId: Scalars['String']['input'];
  externalAuthenticationKpiId: Scalars['String']['input'];
  kpiId: Scalars['String']['input'];
  updatedAt: Scalars['Datetime']['input'];
};
export type ExternalAuthenticationKpiPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  dataEndpoint?: InputMaybe<Scalars['String']['input']>;
  dataLogic?: InputMaybe<Scalars['String']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  externalAppEndpointId?: InputMaybe<Scalars['String']['input']>;
  externalAuthenticationId?: InputMaybe<Scalars['String']['input']>;
  externalAuthenticationKpiId?: InputMaybe<Scalars['String']['input']>;
  kpiId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type ExternalAuthenticationKpisConnection = {
  __typename?: 'ExternalAuthenticationKpisConnection';
  edges: Array<ExternalAuthenticationKpisEdge>;
  nodes: Array<ExternalAuthenticationKpi>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type ExternalAuthenticationKpisEdge = {
  __typename?: 'ExternalAuthenticationKpisEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: ExternalAuthenticationKpi;
};
export enum ExternalAuthenticationKpisOrderBy {
  ExternalAuthenticationIdAsc = 'EXTERNAL_AUTHENTICATION_ID_ASC',
  ExternalAuthenticationIdDesc = 'EXTERNAL_AUTHENTICATION_ID_DESC',
  ExternalAuthenticationKpiIdAsc = 'EXTERNAL_AUTHENTICATION_KPI_ID_ASC',
  ExternalAuthenticationKpiIdDesc = 'EXTERNAL_AUTHENTICATION_KPI_ID_DESC',
  KpiIdAsc = 'KPI_ID_ASC',
  KpiIdDesc = 'KPI_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type ExternalAuthenticationPatch = {
  configuration?: InputMaybe<Scalars['JSON']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  externalAppId?: InputMaybe<Scalars['String']['input']>;
  externalAuthenticationId?: InputMaybe<Scalars['String']['input']>;
  externalAuthenticationTypeId?: InputMaybe<Scalars['String']['input']>;
  uId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type ExternalAuthenticationType = {
  __typename?: 'ExternalAuthenticationType';
  authenticationType: Scalars['String']['output'];
  createdAt: Scalars['Datetime']['output'];
  deletedAt?: Maybe<Scalars['Datetime']['output']>;
  externalAuthenticationTypeId: Scalars['String']['output'];
  externalAuthenticationsByExternalAuthenticationTypeId: Array<ExternalAuthentication>;
  externalAuthenticationsByExternalAuthenticationTypeIdConnection: ExternalAuthenticationsConnection;
  updatedAt: Scalars['Datetime']['output'];
};
export type ExternalAuthenticationTypeExternalAuthenticationsByExternalAuthenticationTypeIdArgs = {
  condition?: InputMaybe<ExternalAuthenticationCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAuthenticationsOrderBy>>;
};
export type ExternalAuthenticationTypeExternalAuthenticationsByExternalAuthenticationTypeIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ExternalAuthenticationCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAuthenticationsOrderBy>>;
};
export type ExternalAuthenticationTypeCondition = {
  externalAuthenticationTypeId?: InputMaybe<Scalars['String']['input']>;
};
export type ExternalAuthenticationTypeInput = {
  authenticationType: Scalars['String']['input'];
  createdAt: Scalars['Datetime']['input'];
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  externalAuthenticationTypeId: Scalars['String']['input'];
  updatedAt: Scalars['Datetime']['input'];
};
export type ExternalAuthenticationTypePatch = {
  authenticationType?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  externalAuthenticationTypeId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type ExternalAuthenticationTypesConnection = {
  __typename?: 'ExternalAuthenticationTypesConnection';
  edges: Array<ExternalAuthenticationTypesEdge>;
  nodes: Array<ExternalAuthenticationType>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type ExternalAuthenticationTypesEdge = {
  __typename?: 'ExternalAuthenticationTypesEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: ExternalAuthenticationType;
};
export enum ExternalAuthenticationTypesOrderBy {
  ExternalAuthenticationTypeIdAsc = 'EXTERNAL_AUTHENTICATION_TYPE_ID_ASC',
  ExternalAuthenticationTypeIdDesc = 'EXTERNAL_AUTHENTICATION_TYPE_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type ExternalAuthenticationsConnection = {
  __typename?: 'ExternalAuthenticationsConnection';
  edges: Array<ExternalAuthenticationsEdge>;
  nodes: Array<ExternalAuthentication>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type ExternalAuthenticationsEdge = {
  __typename?: 'ExternalAuthenticationsEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: ExternalAuthentication;
};
export enum ExternalAuthenticationsOrderBy {
  ExternalAppIdAsc = 'EXTERNAL_APP_ID_ASC',
  ExternalAppIdDesc = 'EXTERNAL_APP_ID_DESC',
  ExternalAuthenticationIdAsc = 'EXTERNAL_AUTHENTICATION_ID_ASC',
  ExternalAuthenticationIdDesc = 'EXTERNAL_AUTHENTICATION_ID_DESC',
  ExternalAuthenticationTypeIdAsc = 'EXTERNAL_AUTHENTICATION_TYPE_ID_ASC',
  ExternalAuthenticationTypeIdDesc = 'EXTERNAL_AUTHENTICATION_TYPE_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UIdAsc = 'U_ID_ASC',
  UIdDesc = 'U_ID_DESC'
}
export type IndustriesConnection = {
  __typename?: 'IndustriesConnection';
  edges: Array<IndustriesEdge>;
  nodes: Array<Industry>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type IndustriesEdge = {
  __typename?: 'IndustriesEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: Industry;
};
export enum IndustriesOrderBy {
  IndustryIdAsc = 'INDUSTRY_ID_ASC',
  IndustryIdDesc = 'INDUSTRY_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type Industry = {
  __typename?: 'Industry';
  createdAt: Scalars['Datetime']['output'];
  deletedAt?: Maybe<Scalars['Datetime']['output']>;
  industryId: Scalars['String']['output'];
  industryName?: Maybe<Scalars['String']['output']>;
  organizationsByIndustryId: Array<Organization>;
  organizationsByIndustryIdConnection: OrganizationsConnection;
  updatedAt: Scalars['Datetime']['output'];
};
export type IndustryOrganizationsByIndustryIdArgs = {
  condition?: InputMaybe<OrganizationCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrganizationsOrderBy>>;
};
export type IndustryOrganizationsByIndustryIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OrganizationCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrganizationsOrderBy>>;
};
export type IndustryCondition = {
  industryId?: InputMaybe<Scalars['String']['input']>;
};
export type IndustryInput = {
  createdAt: Scalars['Datetime']['input'];
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  industryId: Scalars['String']['input'];
  industryName?: InputMaybe<Scalars['String']['input']>;
  updatedAt: Scalars['Datetime']['input'];
};
export type IndustryPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  industryId?: InputMaybe<Scalars['String']['input']>;
  industryName?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type Kpi = {
  __typename?: 'Kpi';
  achieveQty?: Maybe<Scalars['String']['output']>;
  charpStatus: EnumKpiCharpStatus;
  createdAt: Scalars['Datetime']['output'];
  deletedAt?: Maybe<Scalars['Datetime']['output']>;
  dependFlag?: Maybe<Scalars['Boolean']['output']>;
  driverId?: Maybe<Scalars['String']['output']>;
  dueData?: Maybe<Scalars['Date']['output']>;
  externalAuthenticationKpis: Array<ExternalAuthenticationKpi>;
  externalAuthenticationKpisConnection: ExternalAuthenticationKpisConnection;
  isCorporateKpi?: Maybe<Scalars['Boolean']['output']>;
  kpiDelegates: Array<KpiDelegate>;
  kpiDelegatesConnection: KpiDelegatesConnection;
  kpiHistories: Array<KpiHistory>;
  kpiHistoriesConnection: KpiHistoriesConnection;
  kpiId: Scalars['String']['output'];
  kpiType?: Maybe<Scalars['String']['output']>;
  meetingKpis: Array<MeetingKpi>;
  meetingKpisConnection: MeetingKpisConnection;
  objective?: Maybe<Scalars['String']['output']>;
  parentKpiId?: Maybe<Scalars['String']['output']>;
  performanceDirection?: Maybe<Scalars['String']['output']>;
  qty?: Maybe<Scalars['String']['output']>;
  reportingFrequency?: Maybe<Scalars['String']['output']>;
  standardKpiId?: Maybe<Scalars['String']['output']>;
  u?: Maybe<User>;
  uId?: Maybe<Scalars['String']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Datetime']['output'];
};
export type KpiExternalAuthenticationKpisArgs = {
  condition?: InputMaybe<ExternalAuthenticationKpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAuthenticationKpisOrderBy>>;
};
export type KpiExternalAuthenticationKpisConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ExternalAuthenticationKpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAuthenticationKpisOrderBy>>;
};
export type KpiKpiDelegatesArgs = {
  condition?: InputMaybe<KpiDelegateCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<KpiDelegatesOrderBy>>;
};
export type KpiKpiDelegatesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<KpiDelegateCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<KpiDelegatesOrderBy>>;
};
export type KpiKpiHistoriesArgs = {
  condition?: InputMaybe<KpiHistoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<KpiHistoriesOrderBy>>;
};
export type KpiKpiHistoriesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<KpiHistoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<KpiHistoriesOrderBy>>;
};
export type KpiMeetingKpisArgs = {
  condition?: InputMaybe<MeetingKpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingKpisOrderBy>>;
};
export type KpiMeetingKpisConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MeetingKpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingKpisOrderBy>>;
};
export type KpiCondition = {
  kpiId?: InputMaybe<Scalars['String']['input']>;
  uId?: InputMaybe<Scalars['String']['input']>;
};
export type KpiDelegate = {
  __typename?: 'KpiDelegate';
  createdAt: Scalars['Datetime']['output'];
  deactivationDate?: Maybe<Scalars['Datetime']['output']>;
  delegateStatus: Scalars['String']['output'];
  kpi?: Maybe<Kpi>;
  kpiDelegateId: Scalars['String']['output'];
  kpiId: Scalars['String']['output'];
  u?: Maybe<User>;
  uId: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
};
export type KpiDelegateCondition = {
  kpiDelegateId?: InputMaybe<Scalars['String']['input']>;
  kpiId?: InputMaybe<Scalars['String']['input']>;
  uId?: InputMaybe<Scalars['String']['input']>;
};
export type KpiDelegateInput = {
  createdAt: Scalars['Datetime']['input'];
  deactivationDate?: InputMaybe<Scalars['Datetime']['input']>;
  delegateStatus: Scalars['String']['input'];
  kpiDelegateId: Scalars['String']['input'];
  kpiId: Scalars['String']['input'];
  uId: Scalars['String']['input'];
  updatedAt: Scalars['Datetime']['input'];
};
export type KpiDelegatePatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  deactivationDate?: InputMaybe<Scalars['Datetime']['input']>;
  delegateStatus?: InputMaybe<Scalars['String']['input']>;
  kpiDelegateId?: InputMaybe<Scalars['String']['input']>;
  kpiId?: InputMaybe<Scalars['String']['input']>;
  uId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type KpiDelegatesConnection = {
  __typename?: 'KpiDelegatesConnection';
  edges: Array<KpiDelegatesEdge>;
  nodes: Array<KpiDelegate>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type KpiDelegatesEdge = {
  __typename?: 'KpiDelegatesEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: KpiDelegate;
};
export enum KpiDelegatesOrderBy {
  KpiDelegateIdAsc = 'KPI_DELEGATE_ID_ASC',
  KpiDelegateIdDesc = 'KPI_DELEGATE_ID_DESC',
  KpiIdAsc = 'KPI_ID_ASC',
  KpiIdDesc = 'KPI_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UIdAsc = 'U_ID_ASC',
  UIdDesc = 'U_ID_DESC'
}
export type KpiHistoriesConnection = {
  __typename?: 'KpiHistoriesConnection';
  edges: Array<KpiHistoriesEdge>;
  nodes: Array<KpiHistory>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type KpiHistoriesEdge = {
  __typename?: 'KpiHistoriesEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: KpiHistory;
};
export enum KpiHistoriesOrderBy {
  KpiHistoryIdAsc = 'KPI_HISTORY_ID_ASC',
  KpiHistoryIdDesc = 'KPI_HISTORY_ID_DESC',
  KpiIdAsc = 'KPI_ID_ASC',
  KpiIdDesc = 'KPI_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type KpiHistory = {
  __typename?: 'KpiHistory';
  actualAmount?: Maybe<Scalars['Float']['output']>;
  amount?: Maybe<Scalars['Float']['output']>;
  budgetAmount?: Maybe<Scalars['Float']['output']>;
  createdAt: Scalars['Datetime']['output'];
  deletedAt?: Maybe<Scalars['Datetime']['output']>;
  frequency?: Maybe<Scalars['String']['output']>;
  kpi?: Maybe<Kpi>;
  kpiHistoryId: Scalars['String']['output'];
  kpiId?: Maybe<Scalars['String']['output']>;
  metricType?: Maybe<Scalars['String']['output']>;
  reportDate?: Maybe<Scalars['Datetime']['output']>;
  updatedAt: Scalars['Datetime']['output'];
};
export type KpiHistoryCondition = {
  kpiHistoryId?: InputMaybe<Scalars['String']['input']>;
  kpiId?: InputMaybe<Scalars['String']['input']>;
};
export type KpiHistoryInput = {
  actualAmount?: InputMaybe<Scalars['Float']['input']>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  budgetAmount?: InputMaybe<Scalars['Float']['input']>;
  createdAt: Scalars['Datetime']['input'];
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  frequency?: InputMaybe<Scalars['String']['input']>;
  kpiHistoryId: Scalars['String']['input'];
  kpiId?: InputMaybe<Scalars['String']['input']>;
  metricType?: InputMaybe<Scalars['String']['input']>;
  reportDate?: InputMaybe<Scalars['Datetime']['input']>;
  updatedAt: Scalars['Datetime']['input'];
};
export type KpiHistoryPatch = {
  actualAmount?: InputMaybe<Scalars['Float']['input']>;
  amount?: InputMaybe<Scalars['Float']['input']>;
  budgetAmount?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  frequency?: InputMaybe<Scalars['String']['input']>;
  kpiHistoryId?: InputMaybe<Scalars['String']['input']>;
  kpiId?: InputMaybe<Scalars['String']['input']>;
  metricType?: InputMaybe<Scalars['String']['input']>;
  reportDate?: InputMaybe<Scalars['Datetime']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type KpiInput = {
  achieveQty?: InputMaybe<Scalars['String']['input']>;
  charpStatus: EnumKpiCharpStatus;
  createdAt: Scalars['Datetime']['input'];
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  dependFlag?: InputMaybe<Scalars['Boolean']['input']>;
  driverId?: InputMaybe<Scalars['String']['input']>;
  dueData?: InputMaybe<Scalars['Date']['input']>;
  isCorporateKpi?: InputMaybe<Scalars['Boolean']['input']>;
  kpiId: Scalars['String']['input'];
  kpiType?: InputMaybe<Scalars['String']['input']>;
  objective?: InputMaybe<Scalars['String']['input']>;
  parentKpiId?: InputMaybe<Scalars['String']['input']>;
  performanceDirection?: InputMaybe<Scalars['String']['input']>;
  qty?: InputMaybe<Scalars['String']['input']>;
  reportingFrequency?: InputMaybe<Scalars['String']['input']>;
  standardKpiId?: InputMaybe<Scalars['String']['input']>;
  uId?: InputMaybe<Scalars['String']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
  updatedAt: Scalars['Datetime']['input'];
};
export type KpiPatch = {
  achieveQty?: InputMaybe<Scalars['String']['input']>;
  charpStatus?: InputMaybe<EnumKpiCharpStatus>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  dependFlag?: InputMaybe<Scalars['Boolean']['input']>;
  driverId?: InputMaybe<Scalars['String']['input']>;
  dueData?: InputMaybe<Scalars['Date']['input']>;
  isCorporateKpi?: InputMaybe<Scalars['Boolean']['input']>;
  kpiId?: InputMaybe<Scalars['String']['input']>;
  kpiType?: InputMaybe<Scalars['String']['input']>;
  objective?: InputMaybe<Scalars['String']['input']>;
  parentKpiId?: InputMaybe<Scalars['String']['input']>;
  performanceDirection?: InputMaybe<Scalars['String']['input']>;
  qty?: InputMaybe<Scalars['String']['input']>;
  reportingFrequency?: InputMaybe<Scalars['String']['input']>;
  standardKpiId?: InputMaybe<Scalars['String']['input']>;
  uId?: InputMaybe<Scalars['String']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type KpisConnection = {
  __typename?: 'KpisConnection';
  edges: Array<KpisEdge>;
  nodes: Array<Kpi>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type KpisEdge = {
  __typename?: 'KpisEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: Kpi;
};
export enum KpisOrderBy {
  KpiIdAsc = 'KPI_ID_ASC',
  KpiIdDesc = 'KPI_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UIdAsc = 'U_ID_ASC',
  UIdDesc = 'U_ID_DESC'
}
export type Meeting = {
  __typename?: 'Meeting';
  createdAt: Scalars['Datetime']['output'];
  deactivationDate?: Maybe<Scalars['Datetime']['output']>;
  frequencyInterval?: Maybe<Scalars['Int']['output']>;
  meetingDate: Scalars['Datetime']['output'];
  meetingFrequency: Scalars['String']['output'];
  meetingHistories: Array<MeetingHistory>;
  meetingHistoriesConnection: MeetingHistoriesConnection;
  meetingId: Scalars['String']['output'];
  meetingInterval?: Maybe<Scalars['String']['output']>;
  meetingKpis: Array<MeetingKpi>;
  meetingKpisConnection: MeetingKpisConnection;
  meetingName: Scalars['String']['output'];
  standardMeetingId?: Maybe<Scalars['String']['output']>;
  timerData?: Maybe<Scalars['JSON']['output']>;
  u?: Maybe<User>;
  uId: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
};
export type MeetingMeetingHistoriesArgs = {
  condition?: InputMaybe<MeetingHistoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingHistoriesOrderBy>>;
};
export type MeetingMeetingHistoriesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MeetingHistoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingHistoriesOrderBy>>;
};
export type MeetingMeetingKpisArgs = {
  condition?: InputMaybe<MeetingKpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingKpisOrderBy>>;
};
export type MeetingMeetingKpisConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MeetingKpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingKpisOrderBy>>;
};
export type MeetingCondition = {
  meetingId?: InputMaybe<Scalars['String']['input']>;
  uId?: InputMaybe<Scalars['String']['input']>;
};
export type MeetingHistoriesConnection = {
  __typename?: 'MeetingHistoriesConnection';
  edges: Array<MeetingHistoriesEdge>;
  nodes: Array<MeetingHistory>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type MeetingHistoriesEdge = {
  __typename?: 'MeetingHistoriesEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: MeetingHistory;
};
export enum MeetingHistoriesOrderBy {
  MeetingHistoryIdAsc = 'MEETING_HISTORY_ID_ASC',
  MeetingHistoryIdDesc = 'MEETING_HISTORY_ID_DESC',
  MeetingIdAsc = 'MEETING_ID_ASC',
  MeetingIdDesc = 'MEETING_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UIdAsc = 'U_ID_ASC',
  UIdDesc = 'U_ID_DESC'
}
export type MeetingHistory = {
  __typename?: 'MeetingHistory';
  createdAt: Scalars['Datetime']['output'];
  deactivationDate?: Maybe<Scalars['Datetime']['output']>;
  meeting?: Maybe<Meeting>;
  meetingDate: Scalars['Datetime']['output'];
  meetingHistoryId: Scalars['String']['output'];
  meetingId?: Maybe<Scalars['String']['output']>;
  meetingName: Scalars['String']['output'];
  meetingNotes?: Maybe<Scalars['String']['output']>;
  meetingScore?: Maybe<Scalars['Int']['output']>;
  scoreNotes?: Maybe<Scalars['String']['output']>;
  timerData?: Maybe<Scalars['JSON']['output']>;
  u?: Maybe<User>;
  uId: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
};
export type MeetingHistoryCondition = {
  meetingHistoryId?: InputMaybe<Scalars['String']['input']>;
  meetingId?: InputMaybe<Scalars['String']['input']>;
  uId?: InputMaybe<Scalars['String']['input']>;
};
export type MeetingHistoryInput = {
  createdAt: Scalars['Datetime']['input'];
  deactivationDate?: InputMaybe<Scalars['Datetime']['input']>;
  meetingDate: Scalars['Datetime']['input'];
  meetingHistoryId: Scalars['String']['input'];
  meetingId?: InputMaybe<Scalars['String']['input']>;
  meetingName: Scalars['String']['input'];
  meetingNotes?: InputMaybe<Scalars['String']['input']>;
  meetingScore?: InputMaybe<Scalars['Int']['input']>;
  scoreNotes?: InputMaybe<Scalars['String']['input']>;
  timerData?: InputMaybe<Scalars['JSON']['input']>;
  uId: Scalars['String']['input'];
  updatedAt: Scalars['Datetime']['input'];
};
export type MeetingHistoryPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  deactivationDate?: InputMaybe<Scalars['Datetime']['input']>;
  meetingDate?: InputMaybe<Scalars['Datetime']['input']>;
  meetingHistoryId?: InputMaybe<Scalars['String']['input']>;
  meetingId?: InputMaybe<Scalars['String']['input']>;
  meetingName?: InputMaybe<Scalars['String']['input']>;
  meetingNotes?: InputMaybe<Scalars['String']['input']>;
  meetingScore?: InputMaybe<Scalars['Int']['input']>;
  scoreNotes?: InputMaybe<Scalars['String']['input']>;
  timerData?: InputMaybe<Scalars['JSON']['input']>;
  uId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type MeetingInput = {
  createdAt: Scalars['Datetime']['input'];
  deactivationDate?: InputMaybe<Scalars['Datetime']['input']>;
  frequencyInterval?: InputMaybe<Scalars['Int']['input']>;
  meetingDate: Scalars['Datetime']['input'];
  meetingFrequency: Scalars['String']['input'];
  meetingId: Scalars['String']['input'];
  meetingInterval?: InputMaybe<Scalars['String']['input']>;
  meetingName: Scalars['String']['input'];
  standardMeetingId?: InputMaybe<Scalars['String']['input']>;
  timerData?: InputMaybe<Scalars['JSON']['input']>;
  uId: Scalars['String']['input'];
  updatedAt: Scalars['Datetime']['input'];
};
export type MeetingKpi = {
  __typename?: 'MeetingKpi';
  createdAt: Scalars['Datetime']['output'];
  deletedAt?: Maybe<Scalars['Datetime']['output']>;
  kpi?: Maybe<Kpi>;
  kpiId: Scalars['String']['output'];
  meeting?: Maybe<Meeting>;
  meetingId: Scalars['String']['output'];
  meetingKpiId: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
};
export type MeetingKpiCondition = {
  kpiId?: InputMaybe<Scalars['String']['input']>;
  meetingId?: InputMaybe<Scalars['String']['input']>;
  meetingKpiId?: InputMaybe<Scalars['String']['input']>;
};
export type MeetingKpiInput = {
  createdAt: Scalars['Datetime']['input'];
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  kpiId: Scalars['String']['input'];
  meetingId: Scalars['String']['input'];
  meetingKpiId: Scalars['String']['input'];
  updatedAt: Scalars['Datetime']['input'];
};
export type MeetingKpiPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  kpiId?: InputMaybe<Scalars['String']['input']>;
  meetingId?: InputMaybe<Scalars['String']['input']>;
  meetingKpiId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type MeetingKpisConnection = {
  __typename?: 'MeetingKpisConnection';
  edges: Array<MeetingKpisEdge>;
  nodes: Array<MeetingKpi>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type MeetingKpisEdge = {
  __typename?: 'MeetingKpisEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: MeetingKpi;
};
export enum MeetingKpisOrderBy {
  KpiIdAsc = 'KPI_ID_ASC',
  KpiIdDesc = 'KPI_ID_DESC',
  MeetingIdAsc = 'MEETING_ID_ASC',
  MeetingIdDesc = 'MEETING_ID_DESC',
  MeetingKpiIdAsc = 'MEETING_KPI_ID_ASC',
  MeetingKpiIdDesc = 'MEETING_KPI_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type MeetingPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  deactivationDate?: InputMaybe<Scalars['Datetime']['input']>;
  frequencyInterval?: InputMaybe<Scalars['Int']['input']>;
  meetingDate?: InputMaybe<Scalars['Datetime']['input']>;
  meetingFrequency?: InputMaybe<Scalars['String']['input']>;
  meetingId?: InputMaybe<Scalars['String']['input']>;
  meetingInterval?: InputMaybe<Scalars['String']['input']>;
  meetingName?: InputMaybe<Scalars['String']['input']>;
  standardMeetingId?: InputMaybe<Scalars['String']['input']>;
  timerData?: InputMaybe<Scalars['JSON']['input']>;
  uId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type MeetingUser = {
  __typename?: 'MeetingUser';
  createdAt: Scalars['Datetime']['output'];
  dataDisplay?: Maybe<Scalars['Boolean']['output']>;
  meetingId: Scalars['String']['output'];
  meetingUserId: Scalars['String']['output'];
  u?: Maybe<User>;
  uId: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
  userRole?: Maybe<Scalars['String']['output']>;
};
export type MeetingUserCondition = {
  meetingUserId?: InputMaybe<Scalars['String']['input']>;
  uId?: InputMaybe<Scalars['String']['input']>;
};
export type MeetingUserHistoriesConnection = {
  __typename?: 'MeetingUserHistoriesConnection';
  edges: Array<MeetingUserHistoriesEdge>;
  nodes: Array<MeetingUserHistory>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type MeetingUserHistoriesEdge = {
  __typename?: 'MeetingUserHistoriesEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: MeetingUserHistory;
};
export enum MeetingUserHistoriesOrderBy {
  MeetingUserHistoryIdAsc = 'MEETING_USER_HISTORY_ID_ASC',
  MeetingUserHistoryIdDesc = 'MEETING_USER_HISTORY_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UIdAsc = 'U_ID_ASC',
  UIdDesc = 'U_ID_DESC'
}
export type MeetingUserHistory = {
  __typename?: 'MeetingUserHistory';
  createdAt: Scalars['Datetime']['output'];
  meetingHistoryId: Scalars['String']['output'];
  meetingUserHistoryId: Scalars['String']['output'];
  u?: Maybe<User>;
  uId: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
  userRole?: Maybe<Scalars['String']['output']>;
  userStatus: Scalars['String']['output'];
};
export type MeetingUserHistoryCondition = {
  meetingUserHistoryId?: InputMaybe<Scalars['String']['input']>;
  uId?: InputMaybe<Scalars['String']['input']>;
};
export type MeetingUserHistoryInput = {
  createdAt: Scalars['Datetime']['input'];
  meetingHistoryId: Scalars['String']['input'];
  meetingUserHistoryId: Scalars['String']['input'];
  uId: Scalars['String']['input'];
  updatedAt: Scalars['Datetime']['input'];
  userRole?: InputMaybe<Scalars['String']['input']>;
  userStatus: Scalars['String']['input'];
};
export type MeetingUserHistoryPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  meetingHistoryId?: InputMaybe<Scalars['String']['input']>;
  meetingUserHistoryId?: InputMaybe<Scalars['String']['input']>;
  uId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userRole?: InputMaybe<Scalars['String']['input']>;
  userStatus?: InputMaybe<Scalars['String']['input']>;
};
export type MeetingUserInput = {
  createdAt: Scalars['Datetime']['input'];
  dataDisplay?: InputMaybe<Scalars['Boolean']['input']>;
  meetingId: Scalars['String']['input'];
  meetingUserId: Scalars['String']['input'];
  uId: Scalars['String']['input'];
  updatedAt: Scalars['Datetime']['input'];
  userRole?: InputMaybe<Scalars['String']['input']>;
};
export type MeetingUserPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  dataDisplay?: InputMaybe<Scalars['Boolean']['input']>;
  meetingId?: InputMaybe<Scalars['String']['input']>;
  meetingUserId?: InputMaybe<Scalars['String']['input']>;
  uId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  userRole?: InputMaybe<Scalars['String']['input']>;
};
export type MeetingUsersConnection = {
  __typename?: 'MeetingUsersConnection';
  edges: Array<MeetingUsersEdge>;
  nodes: Array<MeetingUser>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type MeetingUsersEdge = {
  __typename?: 'MeetingUsersEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: MeetingUser;
};
export enum MeetingUsersOrderBy {
  MeetingUserIdAsc = 'MEETING_USER_ID_ASC',
  MeetingUserIdDesc = 'MEETING_USER_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UIdAsc = 'U_ID_ASC',
  UIdDesc = 'U_ID_DESC'
}
export type MeetingsConnection = {
  __typename?: 'MeetingsConnection';
  edges: Array<MeetingsEdge>;
  nodes: Array<Meeting>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type MeetingsEdge = {
  __typename?: 'MeetingsEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: Meeting;
};
export enum MeetingsOrderBy {
  MeetingIdAsc = 'MEETING_ID_ASC',
  MeetingIdDesc = 'MEETING_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UIdAsc = 'U_ID_ASC',
  UIdDesc = 'U_ID_DESC'
}
export type Mutation = {
  __typename?: 'Mutation';
  createAgent?: Maybe<CreateAgentPayload>;
  createChat?: Maybe<CreateChatPayload>;
  createChatMessage?: Maybe<CreateChatMessagePayload>;
  createComment?: Maybe<CreateCommentPayload>;
  createDepartment?: Maybe<CreateDepartmentPayload>;
  createDocument?: Maybe<CreateDocumentPayload>;
  createExternalApp?: Maybe<CreateExternalAppPayload>;
  createExternalAppEndpoint?: Maybe<CreateExternalAppEndpointPayload>;
  createExternalAuthentication?: Maybe<CreateExternalAuthenticationPayload>;
  createExternalAuthenticationKpi?: Maybe<CreateExternalAuthenticationKpiPayload>;
  createExternalAuthenticationType?: Maybe<CreateExternalAuthenticationTypePayload>;
  createIndustry?: Maybe<CreateIndustryPayload>;
  createKpi?: Maybe<CreateKpiPayload>;
  createKpiDelegate?: Maybe<CreateKpiDelegatePayload>;
  createKpiHistory?: Maybe<CreateKpiHistoryPayload>;
  createMeeting?: Maybe<CreateMeetingPayload>;
  createMeetingHistory?: Maybe<CreateMeetingHistoryPayload>;
  createMeetingKpi?: Maybe<CreateMeetingKpiPayload>;
  createMeetingUser?: Maybe<CreateMeetingUserPayload>;
  createMeetingUserHistory?: Maybe<CreateMeetingUserHistoryPayload>;
  createOrganization?: Maybe<CreateOrganizationPayload>;
  createProject?: Maybe<CreateProjectPayload>;
  createRole?: Maybe<CreateRolePayload>;
  createStandardKpi?: Maybe<CreateStandardKpiPayload>;
  createStandardMilestone?: Maybe<CreateStandardMilestonePayload>;
  createTask?: Maybe<CreateTaskPayload>;
  createUser?: Maybe<CreateUserPayload>;
  deleteAgent?: Maybe<DeleteAgentPayload>;
  deleteChat?: Maybe<DeleteChatPayload>;
  deleteChatMessage?: Maybe<DeleteChatMessagePayload>;
  deleteComment?: Maybe<DeleteCommentPayload>;
  deleteDepartment?: Maybe<DeleteDepartmentPayload>;
  deleteDocument?: Maybe<DeleteDocumentPayload>;
  deleteExternalApp?: Maybe<DeleteExternalAppPayload>;
  deleteExternalAppEndpoint?: Maybe<DeleteExternalAppEndpointPayload>;
  deleteExternalAuthentication?: Maybe<DeleteExternalAuthenticationPayload>;
  deleteExternalAuthenticationKpi?: Maybe<DeleteExternalAuthenticationKpiPayload>;
  deleteExternalAuthenticationType?: Maybe<DeleteExternalAuthenticationTypePayload>;
  deleteIndustry?: Maybe<DeleteIndustryPayload>;
  deleteKpi?: Maybe<DeleteKpiPayload>;
  deleteKpiDelegate?: Maybe<DeleteKpiDelegatePayload>;
  deleteKpiHistory?: Maybe<DeleteKpiHistoryPayload>;
  deleteMeeting?: Maybe<DeleteMeetingPayload>;
  deleteMeetingHistory?: Maybe<DeleteMeetingHistoryPayload>;
  deleteMeetingKpi?: Maybe<DeleteMeetingKpiPayload>;
  deleteMeetingUser?: Maybe<DeleteMeetingUserPayload>;
  deleteMeetingUserHistory?: Maybe<DeleteMeetingUserHistoryPayload>;
  deleteOrganization?: Maybe<DeleteOrganizationPayload>;
  deleteProject?: Maybe<DeleteProjectPayload>;
  deleteRole?: Maybe<DeleteRolePayload>;
  deleteStandardKpi?: Maybe<DeleteStandardKpiPayload>;
  deleteStandardMilestone?: Maybe<DeleteStandardMilestonePayload>;
  deleteTask?: Maybe<DeleteTaskPayload>;
  deleteUser?: Maybe<DeleteUserPayload>;
  deleteUserByEmail?: Maybe<DeleteUserPayload>;
  updateAgent?: Maybe<UpdateAgentPayload>;
  updateChat?: Maybe<UpdateChatPayload>;
  updateChatMessage?: Maybe<UpdateChatMessagePayload>;
  updateComment?: Maybe<UpdateCommentPayload>;
  updateDepartment?: Maybe<UpdateDepartmentPayload>;
  updateDocument?: Maybe<UpdateDocumentPayload>;
  updateExternalApp?: Maybe<UpdateExternalAppPayload>;
  updateExternalAppEndpoint?: Maybe<UpdateExternalAppEndpointPayload>;
  updateExternalAuthentication?: Maybe<UpdateExternalAuthenticationPayload>;
  updateExternalAuthenticationKpi?: Maybe<UpdateExternalAuthenticationKpiPayload>;
  updateExternalAuthenticationType?: Maybe<UpdateExternalAuthenticationTypePayload>;
  updateIndustry?: Maybe<UpdateIndustryPayload>;
  updateKpi?: Maybe<UpdateKpiPayload>;
  updateKpiDelegate?: Maybe<UpdateKpiDelegatePayload>;
  updateKpiHistory?: Maybe<UpdateKpiHistoryPayload>;
  updateMeeting?: Maybe<UpdateMeetingPayload>;
  updateMeetingHistory?: Maybe<UpdateMeetingHistoryPayload>;
  updateMeetingKpi?: Maybe<UpdateMeetingKpiPayload>;
  updateMeetingUser?: Maybe<UpdateMeetingUserPayload>;
  updateMeetingUserHistory?: Maybe<UpdateMeetingUserHistoryPayload>;
  updateOrganization?: Maybe<UpdateOrganizationPayload>;
  updateProject?: Maybe<UpdateProjectPayload>;
  updateRole?: Maybe<UpdateRolePayload>;
  updateStandardKpi?: Maybe<UpdateStandardKpiPayload>;
  updateStandardMilestone?: Maybe<UpdateStandardMilestonePayload>;
  updateTask?: Maybe<UpdateTaskPayload>;
  updateUser?: Maybe<UpdateUserPayload>;
  updateUserByEmail?: Maybe<UpdateUserPayload>;
};
export type MutationCreateAgentArgs = {
  input: CreateAgentInput;
};
export type MutationCreateChatArgs = {
  input: CreateChatInput;
};
export type MutationCreateChatMessageArgs = {
  input: CreateChatMessageInput;
};
export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};
export type MutationCreateDepartmentArgs = {
  input: CreateDepartmentInput;
};
export type MutationCreateDocumentArgs = {
  input: CreateDocumentInput;
};
export type MutationCreateExternalAppArgs = {
  input: CreateExternalAppInput;
};
export type MutationCreateExternalAppEndpointArgs = {
  input: CreateExternalAppEndpointInput;
};
export type MutationCreateExternalAuthenticationArgs = {
  input: CreateExternalAuthenticationInput;
};
export type MutationCreateExternalAuthenticationKpiArgs = {
  input: CreateExternalAuthenticationKpiInput;
};
export type MutationCreateExternalAuthenticationTypeArgs = {
  input: CreateExternalAuthenticationTypeInput;
};
export type MutationCreateIndustryArgs = {
  input: CreateIndustryInput;
};
export type MutationCreateKpiArgs = {
  input: CreateKpiInput;
};
export type MutationCreateKpiDelegateArgs = {
  input: CreateKpiDelegateInput;
};
export type MutationCreateKpiHistoryArgs = {
  input: CreateKpiHistoryInput;
};
export type MutationCreateMeetingArgs = {
  input: CreateMeetingInput;
};
export type MutationCreateMeetingHistoryArgs = {
  input: CreateMeetingHistoryInput;
};
export type MutationCreateMeetingKpiArgs = {
  input: CreateMeetingKpiInput;
};
export type MutationCreateMeetingUserArgs = {
  input: CreateMeetingUserInput;
};
export type MutationCreateMeetingUserHistoryArgs = {
  input: CreateMeetingUserHistoryInput;
};
export type MutationCreateOrganizationArgs = {
  input: CreateOrganizationInput;
};
export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};
export type MutationCreateRoleArgs = {
  input: CreateRoleInput;
};
export type MutationCreateStandardKpiArgs = {
  input: CreateStandardKpiInput;
};
export type MutationCreateStandardMilestoneArgs = {
  input: CreateStandardMilestoneInput;
};
export type MutationCreateTaskArgs = {
  input: CreateTaskInput;
};
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};
export type MutationDeleteAgentArgs = {
  input: DeleteAgentInput;
};
export type MutationDeleteChatArgs = {
  input: DeleteChatInput;
};
export type MutationDeleteChatMessageArgs = {
  input: DeleteChatMessageInput;
};
export type MutationDeleteCommentArgs = {
  input: DeleteCommentInput;
};
export type MutationDeleteDepartmentArgs = {
  input: DeleteDepartmentInput;
};
export type MutationDeleteDocumentArgs = {
  input: DeleteDocumentInput;
};
export type MutationDeleteExternalAppArgs = {
  input: DeleteExternalAppInput;
};
export type MutationDeleteExternalAppEndpointArgs = {
  input: DeleteExternalAppEndpointInput;
};
export type MutationDeleteExternalAuthenticationArgs = {
  input: DeleteExternalAuthenticationInput;
};
export type MutationDeleteExternalAuthenticationKpiArgs = {
  input: DeleteExternalAuthenticationKpiInput;
};
export type MutationDeleteExternalAuthenticationTypeArgs = {
  input: DeleteExternalAuthenticationTypeInput;
};
export type MutationDeleteIndustryArgs = {
  input: DeleteIndustryInput;
};
export type MutationDeleteKpiArgs = {
  input: DeleteKpiInput;
};
export type MutationDeleteKpiDelegateArgs = {
  input: DeleteKpiDelegateInput;
};
export type MutationDeleteKpiHistoryArgs = {
  input: DeleteKpiHistoryInput;
};
export type MutationDeleteMeetingArgs = {
  input: DeleteMeetingInput;
};
export type MutationDeleteMeetingHistoryArgs = {
  input: DeleteMeetingHistoryInput;
};
export type MutationDeleteMeetingKpiArgs = {
  input: DeleteMeetingKpiInput;
};
export type MutationDeleteMeetingUserArgs = {
  input: DeleteMeetingUserInput;
};
export type MutationDeleteMeetingUserHistoryArgs = {
  input: DeleteMeetingUserHistoryInput;
};
export type MutationDeleteOrganizationArgs = {
  input: DeleteOrganizationInput;
};
export type MutationDeleteProjectArgs = {
  input: DeleteProjectInput;
};
export type MutationDeleteRoleArgs = {
  input: DeleteRoleInput;
};
export type MutationDeleteStandardKpiArgs = {
  input: DeleteStandardKpiInput;
};
export type MutationDeleteStandardMilestoneArgs = {
  input: DeleteStandardMilestoneInput;
};
export type MutationDeleteTaskArgs = {
  input: DeleteTaskInput;
};
export type MutationDeleteUserArgs = {
  input: DeleteUserInput;
};
export type MutationDeleteUserByEmailArgs = {
  input: DeleteUserByEmailInput;
};
export type MutationUpdateAgentArgs = {
  input: UpdateAgentInput;
};
export type MutationUpdateChatArgs = {
  input: UpdateChatInput;
};
export type MutationUpdateChatMessageArgs = {
  input: UpdateChatMessageInput;
};
export type MutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};
export type MutationUpdateDepartmentArgs = {
  input: UpdateDepartmentInput;
};
export type MutationUpdateDocumentArgs = {
  input: UpdateDocumentInput;
};
export type MutationUpdateExternalAppArgs = {
  input: UpdateExternalAppInput;
};
export type MutationUpdateExternalAppEndpointArgs = {
  input: UpdateExternalAppEndpointInput;
};
export type MutationUpdateExternalAuthenticationArgs = {
  input: UpdateExternalAuthenticationInput;
};
export type MutationUpdateExternalAuthenticationKpiArgs = {
  input: UpdateExternalAuthenticationKpiInput;
};
export type MutationUpdateExternalAuthenticationTypeArgs = {
  input: UpdateExternalAuthenticationTypeInput;
};
export type MutationUpdateIndustryArgs = {
  input: UpdateIndustryInput;
};
export type MutationUpdateKpiArgs = {
  input: UpdateKpiInput;
};
export type MutationUpdateKpiDelegateArgs = {
  input: UpdateKpiDelegateInput;
};
export type MutationUpdateKpiHistoryArgs = {
  input: UpdateKpiHistoryInput;
};
export type MutationUpdateMeetingArgs = {
  input: UpdateMeetingInput;
};
export type MutationUpdateMeetingHistoryArgs = {
  input: UpdateMeetingHistoryInput;
};
export type MutationUpdateMeetingKpiArgs = {
  input: UpdateMeetingKpiInput;
};
export type MutationUpdateMeetingUserArgs = {
  input: UpdateMeetingUserInput;
};
export type MutationUpdateMeetingUserHistoryArgs = {
  input: UpdateMeetingUserHistoryInput;
};
export type MutationUpdateOrganizationArgs = {
  input: UpdateOrganizationInput;
};
export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput;
};
export type MutationUpdateRoleArgs = {
  input: UpdateRoleInput;
};
export type MutationUpdateStandardKpiArgs = {
  input: UpdateStandardKpiInput;
};
export type MutationUpdateStandardMilestoneArgs = {
  input: UpdateStandardMilestoneInput;
};
export type MutationUpdateTaskArgs = {
  input: UpdateTaskInput;
};
export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};
export type MutationUpdateUserByEmailArgs = {
  input: UpdateUserByEmailInput;
};
export type Organization = {
  __typename?: 'Organization';
  address?: Maybe<Scalars['String']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Datetime']['output'];
  departmentsByOrgId: Array<Department>;
  departmentsByOrgIdConnection: DepartmentsConnection;
  email?: Maybe<Scalars['String']['output']>;
  endDate?: Maybe<Scalars['Date']['output']>;
  features?: Maybe<Scalars['JSON']['output']>;
  industryByIndustryId?: Maybe<Industry>;
  industryId?: Maybe<Scalars['String']['output']>;
  isActive?: Maybe<Scalars['Boolean']['output']>;
  isStartup?: Maybe<Scalars['Boolean']['output']>;
  logoUrl?: Maybe<Scalars['String']['output']>;
  mission?: Maybe<Scalars['String']['output']>;
  orgId: Scalars['String']['output'];
  orgName?: Maybe<Scalars['String']['output']>;
  outcomeStatement?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  projectsByOrgId: Array<Project>;
  projectsByOrgIdConnection: ProjectsConnection;
  secretCode?: Maybe<Scalars['String']['output']>;
  startDate?: Maybe<Scalars['Date']['output']>;
  updatedAt: Scalars['Datetime']['output'];
  values?: Maybe<Scalars['String']['output']>;
  vision?: Maybe<Scalars['String']['output']>;
};
export type OrganizationDepartmentsByOrgIdArgs = {
  condition?: InputMaybe<DepartmentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DepartmentsOrderBy>>;
};
export type OrganizationDepartmentsByOrgIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<DepartmentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DepartmentsOrderBy>>;
};
export type OrganizationProjectsByOrgIdArgs = {
  condition?: InputMaybe<ProjectCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
};
export type OrganizationProjectsByOrgIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ProjectCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
};
export type OrganizationCondition = {
  industryId?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['String']['input']>;
};
export type OrganizationInput = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  createdAt: Scalars['Datetime']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  features?: InputMaybe<Scalars['JSON']['input']>;
  industryId?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isStartup?: InputMaybe<Scalars['Boolean']['input']>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  mission?: InputMaybe<Scalars['String']['input']>;
  orgId: Scalars['String']['input'];
  orgName?: InputMaybe<Scalars['String']['input']>;
  outcomeStatement?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  secretCode?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  updatedAt: Scalars['Datetime']['input'];
  values?: InputMaybe<Scalars['String']['input']>;
  vision?: InputMaybe<Scalars['String']['input']>;
};
export type OrganizationPatch = {
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Date']['input']>;
  features?: InputMaybe<Scalars['JSON']['input']>;
  industryId?: InputMaybe<Scalars['String']['input']>;
  isActive?: InputMaybe<Scalars['Boolean']['input']>;
  isStartup?: InputMaybe<Scalars['Boolean']['input']>;
  logoUrl?: InputMaybe<Scalars['String']['input']>;
  mission?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['String']['input']>;
  orgName?: InputMaybe<Scalars['String']['input']>;
  outcomeStatement?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  secretCode?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Date']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  values?: InputMaybe<Scalars['String']['input']>;
  vision?: InputMaybe<Scalars['String']['input']>;
};
export type OrganizationsConnection = {
  __typename?: 'OrganizationsConnection';
  edges: Array<OrganizationsEdge>;
  nodes: Array<Organization>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type OrganizationsEdge = {
  __typename?: 'OrganizationsEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: Organization;
};
export enum OrganizationsOrderBy {
  IndustryIdAsc = 'INDUSTRY_ID_ASC',
  IndustryIdDesc = 'INDUSTRY_ID_DESC',
  Natural = 'NATURAL',
  OrgIdAsc = 'ORG_ID_ASC',
  OrgIdDesc = 'ORG_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['Cursor']['output']>;
};
export type Project = {
  __typename?: 'Project';
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  description: Scalars['String']['output'];
  endDate?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  org?: Maybe<Organization>;
  orgId?: Maybe<Scalars['String']['output']>;
  startDate: Scalars['Datetime']['output'];
  status: Scalars['String']['output'];
  teamIds: Array<Maybe<Scalars['String']['output']>>;
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
};
export type ProjectCondition = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  orgId?: InputMaybe<Scalars['String']['input']>;
};
export type ProjectInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description: Scalars['String']['input'];
  endDate?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name: Scalars['String']['input'];
  orgId?: InputMaybe<Scalars['String']['input']>;
  startDate: Scalars['Datetime']['input'];
  status: Scalars['String']['input'];
  teamIds: Array<InputMaybe<Scalars['String']['input']>>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type ProjectPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  orgId?: InputMaybe<Scalars['String']['input']>;
  startDate?: InputMaybe<Scalars['Datetime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  teamIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type ProjectsConnection = {
  __typename?: 'ProjectsConnection';
  edges: Array<ProjectsEdge>;
  nodes: Array<Project>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type ProjectsEdge = {
  __typename?: 'ProjectsEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: Project;
};
export enum ProjectsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  OrgIdAsc = 'ORG_ID_ASC',
  OrgIdDesc = 'ORG_ID_DESC',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type Query = {
  __typename?: 'Query';
  agent?: Maybe<Agent>;
  agents?: Maybe<Array<Agent>>;
  agentsConnection?: Maybe<AgentsConnection>;
  chat?: Maybe<Chat>;
  chatMessage?: Maybe<ChatMessage>;
  chatMessages?: Maybe<Array<ChatMessage>>;
  chatMessagesConnection?: Maybe<ChatMessagesConnection>;
  chats?: Maybe<Array<Chat>>;
  chatsConnection?: Maybe<ChatsConnection>;
  comment?: Maybe<Comment>;
  comments?: Maybe<Array<Comment>>;
  commentsConnection?: Maybe<CommentsConnection>;
  department?: Maybe<Department>;
  departments?: Maybe<Array<Department>>;
  departmentsConnection?: Maybe<DepartmentsConnection>;
  document?: Maybe<Document>;
  documents?: Maybe<Array<Document>>;
  documentsConnection?: Maybe<DocumentsConnection>;
  externalApp?: Maybe<ExternalApp>;
  externalAppEndpoint?: Maybe<ExternalAppEndpoint>;
  externalAppEndpoints?: Maybe<Array<ExternalAppEndpoint>>;
  externalAppEndpointsConnection?: Maybe<ExternalAppEndpointsConnection>;
  externalApps?: Maybe<Array<ExternalApp>>;
  externalAppsConnection?: Maybe<ExternalAppsConnection>;
  externalAuthentication?: Maybe<ExternalAuthentication>;
  externalAuthenticationKpi?: Maybe<ExternalAuthenticationKpi>;
  externalAuthenticationKpis?: Maybe<Array<ExternalAuthenticationKpi>>;
  externalAuthenticationKpisConnection?: Maybe<ExternalAuthenticationKpisConnection>;
  externalAuthenticationType?: Maybe<ExternalAuthenticationType>;
  externalAuthenticationTypes?: Maybe<Array<ExternalAuthenticationType>>;
  externalAuthenticationTypesConnection?: Maybe<ExternalAuthenticationTypesConnection>;
  externalAuthentications?: Maybe<Array<ExternalAuthentication>>;
  externalAuthenticationsConnection?: Maybe<ExternalAuthenticationsConnection>;
  industries?: Maybe<Array<Industry>>;
  industriesConnection?: Maybe<IndustriesConnection>;
  industry?: Maybe<Industry>;
  kpi?: Maybe<Kpi>;
  kpiDelegate?: Maybe<KpiDelegate>;
  kpiDelegates?: Maybe<Array<KpiDelegate>>;
  kpiDelegatesConnection?: Maybe<KpiDelegatesConnection>;
  kpiHistories?: Maybe<Array<KpiHistory>>;
  kpiHistoriesConnection?: Maybe<KpiHistoriesConnection>;
  kpiHistory?: Maybe<KpiHistory>;
  kpis?: Maybe<Array<Kpi>>;
  kpisConnection?: Maybe<KpisConnection>;
  meeting?: Maybe<Meeting>;
  meetingHistories?: Maybe<Array<MeetingHistory>>;
  meetingHistoriesConnection?: Maybe<MeetingHistoriesConnection>;
  meetingHistory?: Maybe<MeetingHistory>;
  meetingKpi?: Maybe<MeetingKpi>;
  meetingKpis?: Maybe<Array<MeetingKpi>>;
  meetingKpisConnection?: Maybe<MeetingKpisConnection>;
  meetingUser?: Maybe<MeetingUser>;
  meetingUserHistories?: Maybe<Array<MeetingUserHistory>>;
  meetingUserHistoriesConnection?: Maybe<MeetingUserHistoriesConnection>;
  meetingUserHistory?: Maybe<MeetingUserHistory>;
  meetingUsers?: Maybe<Array<MeetingUser>>;
  meetingUsersConnection?: Maybe<MeetingUsersConnection>;
  meetings?: Maybe<Array<Meeting>>;
  meetingsConnection?: Maybe<MeetingsConnection>;
  organization?: Maybe<Organization>;
  organizations?: Maybe<Array<Organization>>;
  organizationsConnection?: Maybe<OrganizationsConnection>;
  project?: Maybe<Project>;
  projects?: Maybe<Array<Project>>;
  projectsConnection?: Maybe<ProjectsConnection>;
  query: Query;
  role?: Maybe<Role>;
  roles?: Maybe<Array<Role>>;
  rolesConnection?: Maybe<RolesConnection>;
  standardKpi?: Maybe<StandardKpi>;
  standardKpis?: Maybe<Array<StandardKpi>>;
  standardKpisConnection?: Maybe<StandardKpisConnection>;
  standardMilestone?: Maybe<StandardMilestone>;
  standardMilestones?: Maybe<Array<StandardMilestone>>;
  standardMilestonesConnection?: Maybe<StandardMilestonesConnection>;
  task?: Maybe<Task>;
  tasks?: Maybe<Array<Task>>;
  tasksConnection?: Maybe<TasksConnection>;
  user?: Maybe<User>;
  userByEmail?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersConnection?: Maybe<UsersConnection>;
};
export type QueryAgentArgs = {
  id: Scalars['UUID']['input'];
};
export type QueryAgentsArgs = {
  condition?: InputMaybe<AgentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AgentsOrderBy>>;
};
export type QueryAgentsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AgentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AgentsOrderBy>>;
};
export type QueryChatArgs = {
  id: Scalars['UUID']['input'];
};
export type QueryChatMessageArgs = {
  id: Scalars['UUID']['input'];
};
export type QueryChatMessagesArgs = {
  condition?: InputMaybe<ChatMessageCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatMessagesOrderBy>>;
};
export type QueryChatMessagesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ChatMessageCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatMessagesOrderBy>>;
};
export type QueryChatsArgs = {
  condition?: InputMaybe<ChatCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatsOrderBy>>;
};
export type QueryChatsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ChatCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatsOrderBy>>;
};
export type QueryCommentArgs = {
  id: Scalars['UUID']['input'];
};
export type QueryCommentsArgs = {
  condition?: InputMaybe<CommentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};
export type QueryCommentsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CommentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};
export type QueryDepartmentArgs = {
  depId: Scalars['String']['input'];
};
export type QueryDepartmentsArgs = {
  condition?: InputMaybe<DepartmentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DepartmentsOrderBy>>;
};
export type QueryDepartmentsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<DepartmentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DepartmentsOrderBy>>;
};
export type QueryDocumentArgs = {
  id: Scalars['UUID']['input'];
};
export type QueryDocumentsArgs = {
  condition?: InputMaybe<DocumentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DocumentsOrderBy>>;
};
export type QueryDocumentsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<DocumentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DocumentsOrderBy>>;
};
export type QueryExternalAppArgs = {
  externalAppId: Scalars['String']['input'];
};
export type QueryExternalAppEndpointArgs = {
  externalAppEndpointId: Scalars['String']['input'];
};
export type QueryExternalAppEndpointsArgs = {
  condition?: InputMaybe<ExternalAppEndpointCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAppEndpointsOrderBy>>;
};
export type QueryExternalAppEndpointsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ExternalAppEndpointCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAppEndpointsOrderBy>>;
};
export type QueryExternalAppsArgs = {
  condition?: InputMaybe<ExternalAppCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAppsOrderBy>>;
};
export type QueryExternalAppsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ExternalAppCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAppsOrderBy>>;
};
export type QueryExternalAuthenticationArgs = {
  externalAuthenticationId: Scalars['String']['input'];
};
export type QueryExternalAuthenticationKpiArgs = {
  externalAuthenticationKpiId: Scalars['String']['input'];
};
export type QueryExternalAuthenticationKpisArgs = {
  condition?: InputMaybe<ExternalAuthenticationKpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAuthenticationKpisOrderBy>>;
};
export type QueryExternalAuthenticationKpisConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ExternalAuthenticationKpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAuthenticationKpisOrderBy>>;
};
export type QueryExternalAuthenticationTypeArgs = {
  externalAuthenticationTypeId: Scalars['String']['input'];
};
export type QueryExternalAuthenticationTypesArgs = {
  condition?: InputMaybe<ExternalAuthenticationTypeCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAuthenticationTypesOrderBy>>;
};
export type QueryExternalAuthenticationTypesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ExternalAuthenticationTypeCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAuthenticationTypesOrderBy>>;
};
export type QueryExternalAuthenticationsArgs = {
  condition?: InputMaybe<ExternalAuthenticationCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAuthenticationsOrderBy>>;
};
export type QueryExternalAuthenticationsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ExternalAuthenticationCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ExternalAuthenticationsOrderBy>>;
};
export type QueryIndustriesArgs = {
  condition?: InputMaybe<IndustryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<IndustriesOrderBy>>;
};
export type QueryIndustriesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<IndustryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<IndustriesOrderBy>>;
};
export type QueryIndustryArgs = {
  industryId: Scalars['String']['input'];
};
export type QueryKpiArgs = {
  kpiId: Scalars['String']['input'];
};
export type QueryKpiDelegateArgs = {
  kpiDelegateId: Scalars['String']['input'];
};
export type QueryKpiDelegatesArgs = {
  condition?: InputMaybe<KpiDelegateCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<KpiDelegatesOrderBy>>;
};
export type QueryKpiDelegatesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<KpiDelegateCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<KpiDelegatesOrderBy>>;
};
export type QueryKpiHistoriesArgs = {
  condition?: InputMaybe<KpiHistoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<KpiHistoriesOrderBy>>;
};
export type QueryKpiHistoriesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<KpiHistoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<KpiHistoriesOrderBy>>;
};
export type QueryKpiHistoryArgs = {
  kpiHistoryId: Scalars['String']['input'];
};
export type QueryKpisArgs = {
  condition?: InputMaybe<KpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<KpisOrderBy>>;
};
export type QueryKpisConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<KpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<KpisOrderBy>>;
};
export type QueryMeetingArgs = {
  meetingId: Scalars['String']['input'];
};
export type QueryMeetingHistoriesArgs = {
  condition?: InputMaybe<MeetingHistoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingHistoriesOrderBy>>;
};
export type QueryMeetingHistoriesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MeetingHistoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingHistoriesOrderBy>>;
};
export type QueryMeetingHistoryArgs = {
  meetingHistoryId: Scalars['String']['input'];
};
export type QueryMeetingKpiArgs = {
  meetingKpiId: Scalars['String']['input'];
};
export type QueryMeetingKpisArgs = {
  condition?: InputMaybe<MeetingKpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingKpisOrderBy>>;
};
export type QueryMeetingKpisConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MeetingKpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingKpisOrderBy>>;
};
export type QueryMeetingUserArgs = {
  meetingUserId: Scalars['String']['input'];
};
export type QueryMeetingUserHistoriesArgs = {
  condition?: InputMaybe<MeetingUserHistoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingUserHistoriesOrderBy>>;
};
export type QueryMeetingUserHistoriesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MeetingUserHistoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingUserHistoriesOrderBy>>;
};
export type QueryMeetingUserHistoryArgs = {
  meetingUserHistoryId: Scalars['String']['input'];
};
export type QueryMeetingUsersArgs = {
  condition?: InputMaybe<MeetingUserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingUsersOrderBy>>;
};
export type QueryMeetingUsersConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MeetingUserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingUsersOrderBy>>;
};
export type QueryMeetingsArgs = {
  condition?: InputMaybe<MeetingCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingsOrderBy>>;
};
export type QueryMeetingsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MeetingCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingsOrderBy>>;
};
export type QueryOrganizationArgs = {
  orgId: Scalars['String']['input'];
};
export type QueryOrganizationsArgs = {
  condition?: InputMaybe<OrganizationCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrganizationsOrderBy>>;
};
export type QueryOrganizationsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<OrganizationCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<OrganizationsOrderBy>>;
};
export type QueryProjectArgs = {
  id: Scalars['UUID']['input'];
};
export type QueryProjectsArgs = {
  condition?: InputMaybe<ProjectCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
};
export type QueryProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ProjectCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
};
export type QueryRoleArgs = {
  rId: Scalars['String']['input'];
};
export type QueryRolesArgs = {
  condition?: InputMaybe<RoleCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
};
export type QueryRolesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<RoleCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
};
export type QueryStandardKpiArgs = {
  standardKpiId: Scalars['String']['input'];
};
export type QueryStandardKpisArgs = {
  condition?: InputMaybe<StandardKpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StandardKpisOrderBy>>;
};
export type QueryStandardKpisConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<StandardKpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StandardKpisOrderBy>>;
};
export type QueryStandardMilestoneArgs = {
  standardMilestoneId: Scalars['String']['input'];
};
export type QueryStandardMilestonesArgs = {
  condition?: InputMaybe<StandardMilestoneCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StandardMilestonesOrderBy>>;
};
export type QueryStandardMilestonesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<StandardMilestoneCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StandardMilestonesOrderBy>>;
};
export type QueryTaskArgs = {
  id: Scalars['UUID']['input'];
};
export type QueryTasksArgs = {
  condition?: InputMaybe<TaskCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};
export type QueryTasksConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TaskCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};
export type QueryUserArgs = {
  uId: Scalars['String']['input'];
};
export type QueryUserByEmailArgs = {
  email: Scalars['String']['input'];
};
export type QueryUsersArgs = {
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};
export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};
export type Role = {
  __typename?: 'Role';
  createdAt: Scalars['Datetime']['output'];
  deletedAt?: Maybe<Scalars['Datetime']['output']>;
  dep?: Maybe<Department>;
  depId?: Maybe<Scalars['String']['output']>;
  leval?: Maybe<Scalars['String']['output']>;
  rId: Scalars['String']['output'];
  roleName?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Datetime']['output'];
  usersByRId: Array<User>;
  usersByRIdConnection: UsersConnection;
};
export type RoleUsersByRIdArgs = {
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};
export type RoleUsersByRIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};
export type RoleCondition = {
  depId?: InputMaybe<Scalars['String']['input']>;
  rId?: InputMaybe<Scalars['String']['input']>;
};
export type RoleInput = {
  createdAt: Scalars['Datetime']['input'];
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  depId?: InputMaybe<Scalars['String']['input']>;
  leval?: InputMaybe<Scalars['String']['input']>;
  rId: Scalars['String']['input'];
  roleName?: InputMaybe<Scalars['String']['input']>;
  updatedAt: Scalars['Datetime']['input'];
};
export type RolePatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  depId?: InputMaybe<Scalars['String']['input']>;
  leval?: InputMaybe<Scalars['String']['input']>;
  rId?: InputMaybe<Scalars['String']['input']>;
  roleName?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type RolesConnection = {
  __typename?: 'RolesConnection';
  edges: Array<RolesEdge>;
  nodes: Array<Role>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type RolesEdge = {
  __typename?: 'RolesEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: Role;
};
export enum RolesOrderBy {
  DepIdAsc = 'DEP_ID_ASC',
  DepIdDesc = 'DEP_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RIdAsc = 'R_ID_ASC',
  RIdDesc = 'R_ID_DESC'
}
export type StandardKpi = {
  __typename?: 'StandardKpi';
  appliesToStartup?: Maybe<Scalars['Boolean']['output']>;
  createdAt: Scalars['Datetime']['output'];
  deletedAt?: Maybe<Scalars['Datetime']['output']>;
  driverId?: Maybe<Scalars['String']['output']>;
  industry?: Maybe<Scalars['String']['output']>;
  isCorporateKpi?: Maybe<Scalars['Boolean']['output']>;
  kpiType?: Maybe<Scalars['String']['output']>;
  level?: Maybe<Scalars['Int']['output']>;
  objective?: Maybe<Scalars['String']['output']>;
  performanceDirection?: Maybe<Scalars['String']['output']>;
  reportingFrequency?: Maybe<Scalars['String']['output']>;
  standardKpiId: Scalars['String']['output'];
  standardMilestones: Array<StandardMilestone>;
  standardMilestonesConnection: StandardMilestonesConnection;
  target?: Maybe<Scalars['BigFloat']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['Datetime']['output'];
};
export type StandardKpiStandardMilestonesArgs = {
  condition?: InputMaybe<StandardMilestoneCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StandardMilestonesOrderBy>>;
};
export type StandardKpiStandardMilestonesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<StandardMilestoneCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<StandardMilestonesOrderBy>>;
};
export type StandardKpiCondition = {
  standardKpiId?: InputMaybe<Scalars['String']['input']>;
};
export type StandardKpiInput = {
  appliesToStartup?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt: Scalars['Datetime']['input'];
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  driverId?: InputMaybe<Scalars['String']['input']>;
  industry?: InputMaybe<Scalars['String']['input']>;
  isCorporateKpi?: InputMaybe<Scalars['Boolean']['input']>;
  kpiType?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  objective?: InputMaybe<Scalars['String']['input']>;
  performanceDirection?: InputMaybe<Scalars['String']['input']>;
  reportingFrequency?: InputMaybe<Scalars['String']['input']>;
  standardKpiId: Scalars['String']['input'];
  target?: InputMaybe<Scalars['BigFloat']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
  updatedAt: Scalars['Datetime']['input'];
};
export type StandardKpiPatch = {
  appliesToStartup?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  driverId?: InputMaybe<Scalars['String']['input']>;
  industry?: InputMaybe<Scalars['String']['input']>;
  isCorporateKpi?: InputMaybe<Scalars['Boolean']['input']>;
  kpiType?: InputMaybe<Scalars['String']['input']>;
  level?: InputMaybe<Scalars['Int']['input']>;
  objective?: InputMaybe<Scalars['String']['input']>;
  performanceDirection?: InputMaybe<Scalars['String']['input']>;
  reportingFrequency?: InputMaybe<Scalars['String']['input']>;
  standardKpiId?: InputMaybe<Scalars['String']['input']>;
  target?: InputMaybe<Scalars['BigFloat']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type StandardKpisConnection = {
  __typename?: 'StandardKpisConnection';
  edges: Array<StandardKpisEdge>;
  nodes: Array<StandardKpi>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type StandardKpisEdge = {
  __typename?: 'StandardKpisEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: StandardKpi;
};
export enum StandardKpisOrderBy {
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  StandardKpiIdAsc = 'STANDARD_KPI_ID_ASC',
  StandardKpiIdDesc = 'STANDARD_KPI_ID_DESC'
}
export type StandardMilestone = {
  __typename?: 'StandardMilestone';
  achieveText?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Datetime']['output'];
  deletedAt?: Maybe<Scalars['Datetime']['output']>;
  dueDateIncrement?: Maybe<Scalars['Int']['output']>;
  milestoneNote?: Maybe<Scalars['String']['output']>;
  standardKpi?: Maybe<StandardKpi>;
  standardKpiId?: Maybe<Scalars['String']['output']>;
  standardMilestoneId: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
};
export type StandardMilestoneCondition = {
  standardKpiId?: InputMaybe<Scalars['String']['input']>;
  standardMilestoneId?: InputMaybe<Scalars['String']['input']>;
};
export type StandardMilestoneInput = {
  achieveText?: InputMaybe<Scalars['String']['input']>;
  createdAt: Scalars['Datetime']['input'];
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  dueDateIncrement?: InputMaybe<Scalars['Int']['input']>;
  milestoneNote?: InputMaybe<Scalars['String']['input']>;
  standardKpiId?: InputMaybe<Scalars['String']['input']>;
  standardMilestoneId: Scalars['String']['input'];
  updatedAt: Scalars['Datetime']['input'];
};
export type StandardMilestonePatch = {
  achieveText?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  deletedAt?: InputMaybe<Scalars['Datetime']['input']>;
  dueDateIncrement?: InputMaybe<Scalars['Int']['input']>;
  milestoneNote?: InputMaybe<Scalars['String']['input']>;
  standardKpiId?: InputMaybe<Scalars['String']['input']>;
  standardMilestoneId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type StandardMilestonesConnection = {
  __typename?: 'StandardMilestonesConnection';
  edges: Array<StandardMilestonesEdge>;
  nodes: Array<StandardMilestone>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type StandardMilestonesEdge = {
  __typename?: 'StandardMilestonesEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: StandardMilestone;
};
export enum StandardMilestonesOrderBy {
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  StandardKpiIdAsc = 'STANDARD_KPI_ID_ASC',
  StandardKpiIdDesc = 'STANDARD_KPI_ID_DESC',
  StandardMilestoneIdAsc = 'STANDARD_MILESTONE_ID_ASC',
  StandardMilestoneIdDesc = 'STANDARD_MILESTONE_ID_DESC'
}
export type Task = {
  __typename?: 'Task';
  assignee?: Maybe<User>;
  assigneeId?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  description: Scalars['String']['output'];
  dueDate?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  priority: Scalars['String']['output'];
  projectId: Scalars['UUID']['output'];
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
};
export type TaskCondition = {
  assigneeId?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
};
export type TaskInput = {
  assigneeId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description: Scalars['String']['input'];
  dueDate?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  priority: Scalars['String']['input'];
  projectId: Scalars['UUID']['input'];
  status: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type TaskPatch = {
  assigneeId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  dueDate?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  priority?: InputMaybe<Scalars['String']['input']>;
  projectId?: InputMaybe<Scalars['UUID']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type TasksConnection = {
  __typename?: 'TasksConnection';
  edges: Array<TasksEdge>;
  nodes: Array<Task>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type TasksEdge = {
  __typename?: 'TasksEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: Task;
};
export enum TasksOrderBy {
  AssigneeIdAsc = 'ASSIGNEE_ID_ASC',
  AssigneeIdDesc = 'ASSIGNEE_ID_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type UpdateAgentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  patch: AgentPatch;
};
export type UpdateAgentPayload = {
  __typename?: 'UpdateAgentPayload';
  agent?: Maybe<Agent>;
  agentEdge?: Maybe<AgentsEdge>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
};
export type UpdateAgentPayloadAgentEdgeArgs = {
  orderBy?: InputMaybe<Array<AgentsOrderBy>>;
};
export type UpdateChatInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  patch: ChatPatch;
};
export type UpdateChatMessageInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  patch: ChatMessagePatch;
};
export type UpdateChatMessagePayload = {
  __typename?: 'UpdateChatMessagePayload';
  chat?: Maybe<Chat>;
  chatMessage?: Maybe<ChatMessage>;
  chatMessageEdge?: Maybe<ChatMessagesEdge>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
};
export type UpdateChatMessagePayloadChatMessageEdgeArgs = {
  orderBy?: InputMaybe<Array<ChatMessagesOrderBy>>;
};
export type UpdateChatPayload = {
  __typename?: 'UpdateChatPayload';
  chat?: Maybe<Chat>;
  chatEdge?: Maybe<ChatsEdge>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
};
export type UpdateChatPayloadChatEdgeArgs = {
  orderBy?: InputMaybe<Array<ChatsOrderBy>>;
};
export type UpdateCommentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  patch: CommentPatch;
};
export type UpdateCommentPayload = {
  __typename?: 'UpdateCommentPayload';
  author?: Maybe<User>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Comment>;
  commentEdge?: Maybe<CommentsEdge>;
  query?: Maybe<Query>;
};
export type UpdateCommentPayloadCommentEdgeArgs = {
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};
export type UpdateDepartmentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  depId: Scalars['String']['input'];
  patch: DepartmentPatch;
};
export type UpdateDepartmentPayload = {
  __typename?: 'UpdateDepartmentPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  department?: Maybe<Department>;
  departmentEdge?: Maybe<DepartmentsEdge>;
  org?: Maybe<Organization>;
  query?: Maybe<Query>;
};
export type UpdateDepartmentPayloadDepartmentEdgeArgs = {
  orderBy?: InputMaybe<Array<DepartmentsOrderBy>>;
};
export type UpdateDocumentInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  patch: DocumentPatch;
};
export type UpdateDocumentPayload = {
  __typename?: 'UpdateDocumentPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  document?: Maybe<Document>;
  documentEdge?: Maybe<DocumentsEdge>;
  query?: Maybe<Query>;
};
export type UpdateDocumentPayloadDocumentEdgeArgs = {
  orderBy?: InputMaybe<Array<DocumentsOrderBy>>;
};
export type UpdateExternalAppEndpointInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalAppEndpointId: Scalars['String']['input'];
  patch: ExternalAppEndpointPatch;
};
export type UpdateExternalAppEndpointPayload = {
  __typename?: 'UpdateExternalAppEndpointPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  externalAppByExternalAppId?: Maybe<ExternalApp>;
  externalAppEndpoint?: Maybe<ExternalAppEndpoint>;
  externalAppEndpointEdge?: Maybe<ExternalAppEndpointsEdge>;
  query?: Maybe<Query>;
};
export type UpdateExternalAppEndpointPayloadExternalAppEndpointEdgeArgs = {
  orderBy?: InputMaybe<Array<ExternalAppEndpointsOrderBy>>;
};
export type UpdateExternalAppInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalAppId: Scalars['String']['input'];
  patch: ExternalAppPatch;
};
export type UpdateExternalAppPayload = {
  __typename?: 'UpdateExternalAppPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  externalApp?: Maybe<ExternalApp>;
  externalAppEdge?: Maybe<ExternalAppsEdge>;
  query?: Maybe<Query>;
};
export type UpdateExternalAppPayloadExternalAppEdgeArgs = {
  orderBy?: InputMaybe<Array<ExternalAppsOrderBy>>;
};
export type UpdateExternalAuthenticationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalAuthenticationId: Scalars['String']['input'];
  patch: ExternalAuthenticationPatch;
};
export type UpdateExternalAuthenticationKpiInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalAuthenticationKpiId: Scalars['String']['input'];
  patch: ExternalAuthenticationKpiPatch;
};
export type UpdateExternalAuthenticationKpiPayload = {
  __typename?: 'UpdateExternalAuthenticationKpiPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  externalAuthenticationByExternalAuthenticationId?: Maybe<ExternalAuthentication>;
  externalAuthenticationKpi?: Maybe<ExternalAuthenticationKpi>;
  externalAuthenticationKpiEdge?: Maybe<ExternalAuthenticationKpisEdge>;
  kpi?: Maybe<Kpi>;
  query?: Maybe<Query>;
};
export type UpdateExternalAuthenticationKpiPayloadExternalAuthenticationKpiEdgeArgs = {
  orderBy?: InputMaybe<Array<ExternalAuthenticationKpisOrderBy>>;
};
export type UpdateExternalAuthenticationPayload = {
  __typename?: 'UpdateExternalAuthenticationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  externalAppByExternalAppId?: Maybe<ExternalApp>;
  externalAuthentication?: Maybe<ExternalAuthentication>;
  externalAuthenticationEdge?: Maybe<ExternalAuthenticationsEdge>;
  externalAuthenticationTypeByExternalAuthenticationTypeId?: Maybe<ExternalAuthenticationType>;
  query?: Maybe<Query>;
};
export type UpdateExternalAuthenticationPayloadExternalAuthenticationEdgeArgs = {
  orderBy?: InputMaybe<Array<ExternalAuthenticationsOrderBy>>;
};
export type UpdateExternalAuthenticationTypeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  externalAuthenticationTypeId: Scalars['String']['input'];
  patch: ExternalAuthenticationTypePatch;
};
export type UpdateExternalAuthenticationTypePayload = {
  __typename?: 'UpdateExternalAuthenticationTypePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  externalAuthenticationType?: Maybe<ExternalAuthenticationType>;
  externalAuthenticationTypeEdge?: Maybe<ExternalAuthenticationTypesEdge>;
  query?: Maybe<Query>;
};
export type UpdateExternalAuthenticationTypePayloadExternalAuthenticationTypeEdgeArgs = {
  orderBy?: InputMaybe<Array<ExternalAuthenticationTypesOrderBy>>;
};
export type UpdateIndustryInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  industryId: Scalars['String']['input'];
  patch: IndustryPatch;
};
export type UpdateIndustryPayload = {
  __typename?: 'UpdateIndustryPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  industry?: Maybe<Industry>;
  industryEdge?: Maybe<IndustriesEdge>;
  query?: Maybe<Query>;
};
export type UpdateIndustryPayloadIndustryEdgeArgs = {
  orderBy?: InputMaybe<Array<IndustriesOrderBy>>;
};
export type UpdateKpiDelegateInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  kpiDelegateId: Scalars['String']['input'];
  patch: KpiDelegatePatch;
};
export type UpdateKpiDelegatePayload = {
  __typename?: 'UpdateKpiDelegatePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  kpi?: Maybe<Kpi>;
  kpiDelegate?: Maybe<KpiDelegate>;
  kpiDelegateEdge?: Maybe<KpiDelegatesEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type UpdateKpiDelegatePayloadKpiDelegateEdgeArgs = {
  orderBy?: InputMaybe<Array<KpiDelegatesOrderBy>>;
};
export type UpdateKpiHistoryInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  kpiHistoryId: Scalars['String']['input'];
  patch: KpiHistoryPatch;
};
export type UpdateKpiHistoryPayload = {
  __typename?: 'UpdateKpiHistoryPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  kpi?: Maybe<Kpi>;
  kpiHistory?: Maybe<KpiHistory>;
  kpiHistoryEdge?: Maybe<KpiHistoriesEdge>;
  query?: Maybe<Query>;
};
export type UpdateKpiHistoryPayloadKpiHistoryEdgeArgs = {
  orderBy?: InputMaybe<Array<KpiHistoriesOrderBy>>;
};
export type UpdateKpiInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  kpiId: Scalars['String']['input'];
  patch: KpiPatch;
};
export type UpdateKpiPayload = {
  __typename?: 'UpdateKpiPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  kpi?: Maybe<Kpi>;
  kpiEdge?: Maybe<KpisEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type UpdateKpiPayloadKpiEdgeArgs = {
  orderBy?: InputMaybe<Array<KpisOrderBy>>;
};
export type UpdateMeetingHistoryInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meetingHistoryId: Scalars['String']['input'];
  patch: MeetingHistoryPatch;
};
export type UpdateMeetingHistoryPayload = {
  __typename?: 'UpdateMeetingHistoryPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  meeting?: Maybe<Meeting>;
  meetingHistory?: Maybe<MeetingHistory>;
  meetingHistoryEdge?: Maybe<MeetingHistoriesEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type UpdateMeetingHistoryPayloadMeetingHistoryEdgeArgs = {
  orderBy?: InputMaybe<Array<MeetingHistoriesOrderBy>>;
};
export type UpdateMeetingInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meetingId: Scalars['String']['input'];
  patch: MeetingPatch;
};
export type UpdateMeetingKpiInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meetingKpiId: Scalars['String']['input'];
  patch: MeetingKpiPatch;
};
export type UpdateMeetingKpiPayload = {
  __typename?: 'UpdateMeetingKpiPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  kpi?: Maybe<Kpi>;
  meeting?: Maybe<Meeting>;
  meetingKpi?: Maybe<MeetingKpi>;
  meetingKpiEdge?: Maybe<MeetingKpisEdge>;
  query?: Maybe<Query>;
};
export type UpdateMeetingKpiPayloadMeetingKpiEdgeArgs = {
  orderBy?: InputMaybe<Array<MeetingKpisOrderBy>>;
};
export type UpdateMeetingPayload = {
  __typename?: 'UpdateMeetingPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  meeting?: Maybe<Meeting>;
  meetingEdge?: Maybe<MeetingsEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type UpdateMeetingPayloadMeetingEdgeArgs = {
  orderBy?: InputMaybe<Array<MeetingsOrderBy>>;
};
export type UpdateMeetingUserHistoryInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meetingUserHistoryId: Scalars['String']['input'];
  patch: MeetingUserHistoryPatch;
};
export type UpdateMeetingUserHistoryPayload = {
  __typename?: 'UpdateMeetingUserHistoryPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  meetingUserHistory?: Maybe<MeetingUserHistory>;
  meetingUserHistoryEdge?: Maybe<MeetingUserHistoriesEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type UpdateMeetingUserHistoryPayloadMeetingUserHistoryEdgeArgs = {
  orderBy?: InputMaybe<Array<MeetingUserHistoriesOrderBy>>;
};
export type UpdateMeetingUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  meetingUserId: Scalars['String']['input'];
  patch: MeetingUserPatch;
};
export type UpdateMeetingUserPayload = {
  __typename?: 'UpdateMeetingUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  meetingUser?: Maybe<MeetingUser>;
  meetingUserEdge?: Maybe<MeetingUsersEdge>;
  query?: Maybe<Query>;
  u?: Maybe<User>;
};
export type UpdateMeetingUserPayloadMeetingUserEdgeArgs = {
  orderBy?: InputMaybe<Array<MeetingUsersOrderBy>>;
};
export type UpdateOrganizationInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  orgId: Scalars['String']['input'];
  patch: OrganizationPatch;
};
export type UpdateOrganizationPayload = {
  __typename?: 'UpdateOrganizationPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  industryByIndustryId?: Maybe<Industry>;
  organization?: Maybe<Organization>;
  organizationEdge?: Maybe<OrganizationsEdge>;
  query?: Maybe<Query>;
};
export type UpdateOrganizationPayloadOrganizationEdgeArgs = {
  orderBy?: InputMaybe<Array<OrganizationsOrderBy>>;
};
export type UpdateProjectInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  patch: ProjectPatch;
};
export type UpdateProjectPayload = {
  __typename?: 'UpdateProjectPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  org?: Maybe<Organization>;
  project?: Maybe<Project>;
  projectEdge?: Maybe<ProjectsEdge>;
  query?: Maybe<Query>;
};
export type UpdateProjectPayloadProjectEdgeArgs = {
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
};
export type UpdateRoleInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  patch: RolePatch;
  rId: Scalars['String']['input'];
};
export type UpdateRolePayload = {
  __typename?: 'UpdateRolePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  dep?: Maybe<Department>;
  query?: Maybe<Query>;
  role?: Maybe<Role>;
  roleEdge?: Maybe<RolesEdge>;
};
export type UpdateRolePayloadRoleEdgeArgs = {
  orderBy?: InputMaybe<Array<RolesOrderBy>>;
};
export type UpdateStandardKpiInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  patch: StandardKpiPatch;
  standardKpiId: Scalars['String']['input'];
};
export type UpdateStandardKpiPayload = {
  __typename?: 'UpdateStandardKpiPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
  standardKpi?: Maybe<StandardKpi>;
  standardKpiEdge?: Maybe<StandardKpisEdge>;
};
export type UpdateStandardKpiPayloadStandardKpiEdgeArgs = {
  orderBy?: InputMaybe<Array<StandardKpisOrderBy>>;
};
export type UpdateStandardMilestoneInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  patch: StandardMilestonePatch;
  standardMilestoneId: Scalars['String']['input'];
};
export type UpdateStandardMilestonePayload = {
  __typename?: 'UpdateStandardMilestonePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
  standardKpi?: Maybe<StandardKpi>;
  standardMilestone?: Maybe<StandardMilestone>;
  standardMilestoneEdge?: Maybe<StandardMilestonesEdge>;
};
export type UpdateStandardMilestonePayloadStandardMilestoneEdgeArgs = {
  orderBy?: InputMaybe<Array<StandardMilestonesOrderBy>>;
};
export type UpdateTaskInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  patch: TaskPatch;
};
export type UpdateTaskPayload = {
  __typename?: 'UpdateTaskPayload';
  assignee?: Maybe<User>;
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
  task?: Maybe<Task>;
  taskEdge?: Maybe<TasksEdge>;
};
export type UpdateTaskPayloadTaskEdgeArgs = {
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};
export type UpdateUserByEmailInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  patch: UserPatch;
};
export type UpdateUserInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  patch: UserPatch;
  uId: Scalars['String']['input'];
};
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  dep?: Maybe<Department>;
  query?: Maybe<Query>;
  r?: Maybe<Role>;
  user?: Maybe<User>;
  userEdge?: Maybe<UsersEdge>;
};
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};
export type User = {
  __typename?: 'User';
  authoredComments: Array<Comment>;
  authoredCommentsConnection: CommentsConnection;
  avatar?: Maybe<Scalars['String']['output']>;
  coachUserId?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Datetime']['output'];
  deactivationDate?: Maybe<Scalars['Datetime']['output']>;
  dep?: Maybe<Department>;
  depId?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  info?: Maybe<Scalars['JSON']['output']>;
  invitedAt?: Maybe<Scalars['Datetime']['output']>;
  isCoach?: Maybe<Scalars['Boolean']['output']>;
  kpiDelegatesByUId: Array<KpiDelegate>;
  kpiDelegatesByUIdConnection: KpiDelegatesConnection;
  kpisByUId: Array<Kpi>;
  kpisByUIdConnection: KpisConnection;
  lname?: Maybe<Scalars['String']['output']>;
  managerUserId?: Maybe<Scalars['String']['output']>;
  meetingHistoriesByUId: Array<MeetingHistory>;
  meetingHistoriesByUIdConnection: MeetingHistoriesConnection;
  meetingUserHistoriesByUId: Array<MeetingUserHistory>;
  meetingUserHistoriesByUIdConnection: MeetingUserHistoriesConnection;
  meetingUsersByUId: Array<MeetingUser>;
  meetingUsersByUIdConnection: MeetingUsersConnection;
  meetingsByUId: Array<Meeting>;
  meetingsByUIdConnection: MeetingsConnection;
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  r?: Maybe<Role>;
  rId?: Maybe<Scalars['String']['output']>;
  resetCode?: Maybe<Scalars['String']['output']>;
  roleAdmin?: Maybe<Scalars['String']['output']>;
  skills?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  statement?: Maybe<Scalars['String']['output']>;
  tasksByAssigneeId: Array<Task>;
  tasksByAssigneeIdConnection: TasksConnection;
  textNotifications: Scalars['Boolean']['output'];
  uId: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
};
export type UserAuthoredCommentsArgs = {
  condition?: InputMaybe<CommentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};
export type UserAuthoredCommentsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CommentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};
export type UserKpiDelegatesByUIdArgs = {
  condition?: InputMaybe<KpiDelegateCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<KpiDelegatesOrderBy>>;
};
export type UserKpiDelegatesByUIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<KpiDelegateCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<KpiDelegatesOrderBy>>;
};
export type UserKpisByUIdArgs = {
  condition?: InputMaybe<KpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<KpisOrderBy>>;
};
export type UserKpisByUIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<KpiCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<KpisOrderBy>>;
};
export type UserMeetingHistoriesByUIdArgs = {
  condition?: InputMaybe<MeetingHistoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingHistoriesOrderBy>>;
};
export type UserMeetingHistoriesByUIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MeetingHistoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingHistoriesOrderBy>>;
};
export type UserMeetingUserHistoriesByUIdArgs = {
  condition?: InputMaybe<MeetingUserHistoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingUserHistoriesOrderBy>>;
};
export type UserMeetingUserHistoriesByUIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MeetingUserHistoryCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingUserHistoriesOrderBy>>;
};
export type UserMeetingUsersByUIdArgs = {
  condition?: InputMaybe<MeetingUserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingUsersOrderBy>>;
};
export type UserMeetingUsersByUIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MeetingUserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingUsersOrderBy>>;
};
export type UserMeetingsByUIdArgs = {
  condition?: InputMaybe<MeetingCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingsOrderBy>>;
};
export type UserMeetingsByUIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MeetingCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MeetingsOrderBy>>;
};
export type UserTasksByAssigneeIdArgs = {
  condition?: InputMaybe<TaskCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};
export type UserTasksByAssigneeIdConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TaskCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};
export type UserCondition = {
  depId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  rId?: InputMaybe<Scalars['String']['input']>;
  uId?: InputMaybe<Scalars['String']['input']>;
};
export type UserInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  coachUserId?: InputMaybe<Scalars['String']['input']>;
  createdAt: Scalars['Datetime']['input'];
  deactivationDate?: InputMaybe<Scalars['Datetime']['input']>;
  depId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  info?: InputMaybe<Scalars['JSON']['input']>;
  invitedAt?: InputMaybe<Scalars['Datetime']['input']>;
  isCoach?: InputMaybe<Scalars['Boolean']['input']>;
  lname?: InputMaybe<Scalars['String']['input']>;
  managerUserId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  rId?: InputMaybe<Scalars['String']['input']>;
  resetCode?: InputMaybe<Scalars['String']['input']>;
  roleAdmin?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  statement?: InputMaybe<Scalars['String']['input']>;
  textNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  uId: Scalars['String']['input'];
  updatedAt: Scalars['Datetime']['input'];
};
export type UserPatch = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  coachUserId?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  deactivationDate?: InputMaybe<Scalars['Datetime']['input']>;
  depId?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  info?: InputMaybe<Scalars['JSON']['input']>;
  invitedAt?: InputMaybe<Scalars['Datetime']['input']>;
  isCoach?: InputMaybe<Scalars['Boolean']['input']>;
  lname?: InputMaybe<Scalars['String']['input']>;
  managerUserId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  rId?: InputMaybe<Scalars['String']['input']>;
  resetCode?: InputMaybe<Scalars['String']['input']>;
  roleAdmin?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  statement?: InputMaybe<Scalars['String']['input']>;
  textNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  uId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type UsersConnection = {
  __typename?: 'UsersConnection';
  edges: Array<UsersEdge>;
  nodes: Array<User>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type UsersEdge = {
  __typename?: 'UsersEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: User;
};
export enum UsersOrderBy {
  DepIdAsc = 'DEP_ID_ASC',
  DepIdDesc = 'DEP_ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  RIdAsc = 'R_ID_ASC',
  RIdDesc = 'R_ID_DESC',
  UIdAsc = 'U_ID_ASC',
  UIdDesc = 'U_ID_DESC'
}
export type GetAgentsQueryVariables = Exact<{ [key: string]: never; }>;
export type GetAgentsQuery = { __typename?: 'Query', agents?: Array<{ __typename?: 'Agent', id: any, name: string, handle: string, status: string }> | null };
export type GetAgentQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;
export type GetAgentQuery = { __typename?: 'Query', agent?: { __typename?: 'Agent', id: any, name: string, handle: string, status: string } | null };
export type CreateAgentMutationVariables = Exact<{
  input: CreateAgentInput;
}>;
export type CreateAgentMutation = { __typename?: 'Mutation', createAgent?: { __typename?: 'CreateAgentPayload', agent?: { __typename?: 'Agent', id: any, name: string, handle: string, status: string } | null } | null };
export type UpdateAgentStatusMutationVariables = Exact<{
  input: UpdateAgentInput;
}>;
export type UpdateAgentStatusMutation = { __typename?: 'Mutation', updateAgent?: { __typename?: 'UpdateAgentPayload', agent?: { __typename?: 'Agent', id: any, status: string } | null } | null };
export type GetChatsQueryVariables = Exact<{ [key: string]: never; }>;
export type GetChatsQuery = { __typename?: 'Query', chats?: Array<{ __typename?: 'Chat', id: any, participantId: string, participantType: string, lastMessageAt: any, status: string }> | null };
export type GetChatMessagesQueryVariables = Exact<{ [key: string]: never; }>;
export type GetChatMessagesQuery = { __typename?: 'Query', chatMessages?: Array<{ __typename?: 'ChatMessage', id: any, chatId: any, content: string, sender: string, timestamp: any, metadata?: string | null }> | null };
export type CreateChatMutationVariables = Exact<{
  input: CreateChatInput;
}>;
export type CreateChatMutation = { __typename?: 'Mutation', createChat?: { __typename?: 'CreateChatPayload', chat?: { __typename?: 'Chat', id: any, participantId: string, participantType: string, lastMessageAt: any, status: string } | null } | null };
export type CreateChatMessageMutationVariables = Exact<{
  input: CreateChatMessageInput;
}>;
export type CreateChatMessageMutation = { __typename?: 'Mutation', createChatMessage?: { __typename?: 'CreateChatMessagePayload', chatMessage?: { __typename?: 'ChatMessage', id: any, content: string, sender: string, timestamp: any, metadata?: string | null } | null } | null };
export type GetDocumentsQueryVariables = Exact<{ [key: string]: never; }>;
export type GetDocumentsQuery = { __typename?: 'Query', documents?: Array<{ __typename?: 'Document', id: any, title: string, type: string, projectId: any }> | null };
export type GetProjectsQueryVariables = Exact<{ [key: string]: never; }>;
export type GetProjectsQuery = { __typename?: 'Query', projects?: Array<{ __typename?: 'Project', id: any, name: string, description: string, status: string, startDate: any, endDate?: any | null, teamIds: Array<string | null> }> | null };
export type GetProjectQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;
export type GetProjectQuery = { __typename?: 'Query', project?: { __typename?: 'Project', id: any, name: string, description: string, status: string, startDate: any, endDate?: any | null, teamIds: Array<string | null> } | null };
export type CreateProjectMutationVariables = Exact<{
  input: CreateProjectInput;
}>;
export type CreateProjectMutation = { __typename?: 'Mutation', createProject?: { __typename?: 'CreateProjectPayload', project?: { __typename?: 'Project', id: any, name: string, description: string, status: string, startDate: any, endDate?: any | null, teamIds: Array<string | null> } | null } | null };
export type GetProjectTasksQueryVariables = Exact<{ [key: string]: never; }>;
export type GetProjectTasksQuery = { __typename?: 'Query', tasks?: Array<{ __typename?: 'Task', id: any, title: string, description: string, status: string, assigneeId?: string | null, dueDate?: any | null, priority: string, projectId: any }> | null };
export type GetTaskQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;
export type GetTaskQuery = { __typename?: 'Query', task?: { __typename?: 'Task', id: any, title: string, description: string, status: string, assigneeId?: string | null, dueDate?: any | null, priority: string, projectId: any } | null };
export type CreateTaskMutationVariables = Exact<{
  input: CreateTaskInput;
}>;
export type CreateTaskMutation = { __typename?: 'Mutation', createTask?: { __typename?: 'CreateTaskPayload', task?: { __typename?: 'Task', id: any, title: string, description: string, status: string, assigneeId?: string | null, dueDate?: any | null, priority: string, projectId: any } | null } | null };
export type UpdateTaskMutationVariables = Exact<{
  input: UpdateTaskInput;
}>;
export type UpdateTaskMutation = { __typename?: 'Mutation', updateTask?: { __typename?: 'UpdateTaskPayload', task?: { __typename?: 'Task', id: any, title: string, description: string, status: string, assigneeId?: string | null, dueDate?: any | null, priority: string, projectId: any } | null } | null };
export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;
export type GetUsersQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', uId: string, name?: string | null, email?: string | null, rId?: string | null, lname?: string | null, statement?: string | null, roleAdmin?: string | null, info?: any | null, coachUserId?: string | null, isCoach?: boolean | null, managerUserId?: string | null, phoneNumber?: string | null, textNotifications: boolean }> | null };
export type GetUserQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;
export type GetUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', uId: string, name?: string | null, email?: string | null, rId?: string | null, lname?: string | null, statement?: string | null, roleAdmin?: string | null, info?: any | null, coachUserId?: string | null, isCoach?: boolean | null, managerUserId?: string | null, phoneNumber?: string | null, textNotifications: boolean } | null };
export type GetUserByEmailQueryVariables = Exact<{
  email: Scalars['String']['input'];
}>;
export type GetUserByEmailQuery = { __typename?: 'Query', userByEmail?: { __typename?: 'User', uId: string, name?: string | null, email?: string | null, rId?: string | null, lname?: string | null, statement?: string | null, roleAdmin?: string | null, info?: any | null, coachUserId?: string | null, isCoach?: boolean | null, managerUserId?: string | null, phoneNumber?: string | null, textNotifications: boolean } | null };
export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;
export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'CreateUserPayload', user?: { __typename?: 'User', uId: string, name?: string | null, email?: string | null, rId?: string | null, lname?: string | null, statement?: string | null, roleAdmin?: string | null, info?: any | null, coachUserId?: string | null, isCoach?: boolean | null, managerUserId?: string | null, phoneNumber?: string | null, textNotifications: boolean } | null } | null };
