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
  Cursor: { input: any; output: any; }
  Datetime: { input: any; output: any; }
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
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  lastMessageAt: Scalars['Datetime']['output'];
  participantId: Scalars['String']['output'];
  participantType: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
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
  authorId: Scalars['UUID']['output'];
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  documentId?: Maybe<Scalars['UUID']['output']>;
  id: Scalars['UUID']['output'];
  projectId: Scalars['UUID']['output'];
  taskId?: Maybe<Scalars['UUID']['output']>;
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
};
export type CommentCondition = {
  id?: InputMaybe<Scalars['UUID']['input']>;
};
export type CommentInput = {
  authorId: Scalars['UUID']['input'];
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  documentId?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  projectId: Scalars['UUID']['input'];
  taskId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type CommentPatch = {
  authorId?: InputMaybe<Scalars['UUID']['input']>;
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
  clientMutationId?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Comment>;
  commentEdge?: Maybe<CommentsEdge>;
  query?: Maybe<Query>;
};
export type CreateCommentPayloadCommentEdgeArgs = {
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
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
export type CreateInitiativeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  initiative: InitiativeInput;
};
export type CreateInitiativePayload = {
  __typename?: 'CreateInitiativePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  initiative?: Maybe<Initiative>;
  initiativeEdge?: Maybe<InitiativesEdge>;
  query?: Maybe<Query>;
};
export type CreateInitiativePayloadInitiativeEdgeArgs = {
  orderBy?: InputMaybe<Array<InitiativesOrderBy>>;
};
export type CreateMetricInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  metric: MetricInput;
};
export type CreateMetricPayload = {
  __typename?: 'CreateMetricPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  metric?: Maybe<Metric>;
  metricEdge?: Maybe<MetricsEdge>;
  query?: Maybe<Query>;
};
export type CreateMetricPayloadMetricEdgeArgs = {
  orderBy?: InputMaybe<Array<MetricsOrderBy>>;
};
export type CreateProjectInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  project: ProjectInput;
};
export type CreateProjectPayload = {
  __typename?: 'CreateProjectPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  project?: Maybe<Project>;
  projectEdge?: Maybe<ProjectsEdge>;
  query?: Maybe<Query>;
};
export type CreateProjectPayloadProjectEdgeArgs = {
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
};
export type CreateTaskInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  task: TaskInput;
};
export type CreateTaskPayload = {
  __typename?: 'CreateTaskPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
  task?: Maybe<Task>;
  taskEdge?: Maybe<TasksEdge>;
};
export type CreateTaskPayloadTaskEdgeArgs = {
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};
export type CreateTeamMemberInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  teamMember: TeamMemberInput;
};
export type CreateTeamMemberPayload = {
  __typename?: 'CreateTeamMemberPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
  teamMember?: Maybe<TeamMember>;
  teamMemberEdge?: Maybe<TeamMembersEdge>;
};
export type CreateTeamMemberPayloadTeamMemberEdgeArgs = {
  orderBy?: InputMaybe<Array<TeamMembersOrderBy>>;
};
export type CreateValuePropositionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  valueProposition: ValuePropositionInput;
};
export type CreateValuePropositionPayload = {
  __typename?: 'CreateValuePropositionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
  valueProposition?: Maybe<ValueProposition>;
  valuePropositionEdge?: Maybe<ValuePropositionsEdge>;
};
export type CreateValuePropositionPayloadValuePropositionEdgeArgs = {
  orderBy?: InputMaybe<Array<ValuePropositionsOrderBy>>;
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
  clientMutationId?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Comment>;
  commentEdge?: Maybe<CommentsEdge>;
  deletedCommentNodeId?: Maybe<Scalars['ID']['output']>;
  query?: Maybe<Query>;
};
export type DeleteCommentPayloadCommentEdgeArgs = {
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
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
export type DeleteInitiativeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};
export type DeleteInitiativePayload = {
  __typename?: 'DeleteInitiativePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedInitiativeNodeId?: Maybe<Scalars['ID']['output']>;
  initiative?: Maybe<Initiative>;
  initiativeEdge?: Maybe<InitiativesEdge>;
  query?: Maybe<Query>;
};
export type DeleteInitiativePayloadInitiativeEdgeArgs = {
  orderBy?: InputMaybe<Array<InitiativesOrderBy>>;
};
export type DeleteMetricInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};
export type DeleteMetricPayload = {
  __typename?: 'DeleteMetricPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedMetricNodeId?: Maybe<Scalars['ID']['output']>;
  metric?: Maybe<Metric>;
  metricEdge?: Maybe<MetricsEdge>;
  query?: Maybe<Query>;
};
export type DeleteMetricPayloadMetricEdgeArgs = {
  orderBy?: InputMaybe<Array<MetricsOrderBy>>;
};
export type DeleteProjectInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};
export type DeleteProjectPayload = {
  __typename?: 'DeleteProjectPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedProjectNodeId?: Maybe<Scalars['ID']['output']>;
  project?: Maybe<Project>;
  projectEdge?: Maybe<ProjectsEdge>;
  query?: Maybe<Query>;
};
export type DeleteProjectPayloadProjectEdgeArgs = {
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
};
export type DeleteTaskInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};
export type DeleteTaskPayload = {
  __typename?: 'DeleteTaskPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedTaskNodeId?: Maybe<Scalars['ID']['output']>;
  query?: Maybe<Query>;
  task?: Maybe<Task>;
  taskEdge?: Maybe<TasksEdge>;
};
export type DeleteTaskPayloadTaskEdgeArgs = {
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};
export type DeleteTeamMemberByEmailInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
};
export type DeleteTeamMemberInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};
export type DeleteTeamMemberPayload = {
  __typename?: 'DeleteTeamMemberPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedTeamMemberNodeId?: Maybe<Scalars['ID']['output']>;
  query?: Maybe<Query>;
  teamMember?: Maybe<TeamMember>;
  teamMemberEdge?: Maybe<TeamMembersEdge>;
};
export type DeleteTeamMemberPayloadTeamMemberEdgeArgs = {
  orderBy?: InputMaybe<Array<TeamMembersOrderBy>>;
};
export type DeleteValuePropositionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};
export type DeleteValuePropositionPayload = {
  __typename?: 'DeleteValuePropositionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedValuePropositionNodeId?: Maybe<Scalars['ID']['output']>;
  query?: Maybe<Query>;
  valueProposition?: Maybe<ValueProposition>;
  valuePropositionEdge?: Maybe<ValuePropositionsEdge>;
};
export type DeleteValuePropositionPayloadValuePropositionEdgeArgs = {
  orderBy?: InputMaybe<Array<ValuePropositionsOrderBy>>;
};
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
export type Initiative = {
  __typename?: 'Initiative';
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  description: Scalars['String']['output'];
  endDate?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  startDate?: Maybe<Scalars['Datetime']['output']>;
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
  valuePropositionIds: Array<Maybe<Scalars['String']['output']>>;
};
export type InitiativeCondition = {
  id?: InputMaybe<Scalars['UUID']['input']>;
};
export type InitiativeInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description: Scalars['String']['input'];
  endDate?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  startDate?: InputMaybe<Scalars['Datetime']['input']>;
  status: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  valuePropositionIds: Array<InputMaybe<Scalars['String']['input']>>;
};
export type InitiativePatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  startDate?: InputMaybe<Scalars['Datetime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  valuePropositionIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};
export type InitiativesConnection = {
  __typename?: 'InitiativesConnection';
  edges: Array<InitiativesEdge>;
  nodes: Array<Initiative>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type InitiativesEdge = {
  __typename?: 'InitiativesEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: Initiative;
};
export enum InitiativesOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type Metric = {
  __typename?: 'Metric';
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  current: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  initiativeId: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  target: Scalars['Int']['output'];
  trend?: Maybe<Scalars['String']['output']>;
  unit: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
};
export type MetricCondition = {
  id?: InputMaybe<Scalars['UUID']['input']>;
};
export type MetricInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  current: Scalars['Int']['input'];
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['UUID']['input']>;
  initiativeId: Scalars['UUID']['input'];
  name: Scalars['String']['input'];
  target: Scalars['Int']['input'];
  trend?: InputMaybe<Scalars['String']['input']>;
  unit: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type MetricPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  current?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  initiativeId?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  target?: InputMaybe<Scalars['Int']['input']>;
  trend?: InputMaybe<Scalars['String']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type MetricsConnection = {
  __typename?: 'MetricsConnection';
  edges: Array<MetricsEdge>;
  nodes: Array<Metric>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type MetricsEdge = {
  __typename?: 'MetricsEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: Metric;
};
export enum MetricsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type Mutation = {
  __typename?: 'Mutation';
  createAgent?: Maybe<CreateAgentPayload>;
  createChat?: Maybe<CreateChatPayload>;
  createChatMessage?: Maybe<CreateChatMessagePayload>;
  createComment?: Maybe<CreateCommentPayload>;
  createDocument?: Maybe<CreateDocumentPayload>;
  createInitiative?: Maybe<CreateInitiativePayload>;
  createMetric?: Maybe<CreateMetricPayload>;
  createProject?: Maybe<CreateProjectPayload>;
  createTask?: Maybe<CreateTaskPayload>;
  createTeamMember?: Maybe<CreateTeamMemberPayload>;
  createValueProposition?: Maybe<CreateValuePropositionPayload>;
  deleteAgent?: Maybe<DeleteAgentPayload>;
  deleteChat?: Maybe<DeleteChatPayload>;
  deleteChatMessage?: Maybe<DeleteChatMessagePayload>;
  deleteComment?: Maybe<DeleteCommentPayload>;
  deleteDocument?: Maybe<DeleteDocumentPayload>;
  deleteInitiative?: Maybe<DeleteInitiativePayload>;
  deleteMetric?: Maybe<DeleteMetricPayload>;
  deleteProject?: Maybe<DeleteProjectPayload>;
  deleteTask?: Maybe<DeleteTaskPayload>;
  deleteTeamMember?: Maybe<DeleteTeamMemberPayload>;
  deleteTeamMemberByEmail?: Maybe<DeleteTeamMemberPayload>;
  deleteValueProposition?: Maybe<DeleteValuePropositionPayload>;
  updateAgent?: Maybe<UpdateAgentPayload>;
  updateChat?: Maybe<UpdateChatPayload>;
  updateChatMessage?: Maybe<UpdateChatMessagePayload>;
  updateComment?: Maybe<UpdateCommentPayload>;
  updateDocument?: Maybe<UpdateDocumentPayload>;
  updateInitiative?: Maybe<UpdateInitiativePayload>;
  updateMetric?: Maybe<UpdateMetricPayload>;
  updateProject?: Maybe<UpdateProjectPayload>;
  updateTask?: Maybe<UpdateTaskPayload>;
  updateTeamMember?: Maybe<UpdateTeamMemberPayload>;
  updateTeamMemberByEmail?: Maybe<UpdateTeamMemberPayload>;
  updateValueProposition?: Maybe<UpdateValuePropositionPayload>;
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
export type MutationCreateDocumentArgs = {
  input: CreateDocumentInput;
};
export type MutationCreateInitiativeArgs = {
  input: CreateInitiativeInput;
};
export type MutationCreateMetricArgs = {
  input: CreateMetricInput;
};
export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};
export type MutationCreateTaskArgs = {
  input: CreateTaskInput;
};
export type MutationCreateTeamMemberArgs = {
  input: CreateTeamMemberInput;
};
export type MutationCreateValuePropositionArgs = {
  input: CreateValuePropositionInput;
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
export type MutationDeleteDocumentArgs = {
  input: DeleteDocumentInput;
};
export type MutationDeleteInitiativeArgs = {
  input: DeleteInitiativeInput;
};
export type MutationDeleteMetricArgs = {
  input: DeleteMetricInput;
};
export type MutationDeleteProjectArgs = {
  input: DeleteProjectInput;
};
export type MutationDeleteTaskArgs = {
  input: DeleteTaskInput;
};
export type MutationDeleteTeamMemberArgs = {
  input: DeleteTeamMemberInput;
};
export type MutationDeleteTeamMemberByEmailArgs = {
  input: DeleteTeamMemberByEmailInput;
};
export type MutationDeleteValuePropositionArgs = {
  input: DeleteValuePropositionInput;
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
export type MutationUpdateDocumentArgs = {
  input: UpdateDocumentInput;
};
export type MutationUpdateInitiativeArgs = {
  input: UpdateInitiativeInput;
};
export type MutationUpdateMetricArgs = {
  input: UpdateMetricInput;
};
export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput;
};
export type MutationUpdateTaskArgs = {
  input: UpdateTaskInput;
};
export type MutationUpdateTeamMemberArgs = {
  input: UpdateTeamMemberInput;
};
export type MutationUpdateTeamMemberByEmailArgs = {
  input: UpdateTeamMemberByEmailInput;
};
export type MutationUpdateValuePropositionArgs = {
  input: UpdateValuePropositionInput;
};
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
  startDate: Scalars['Datetime']['output'];
  status: Scalars['String']['output'];
  teamIds: Array<Maybe<Scalars['String']['output']>>;
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
};
export type ProjectCondition = {
  id?: InputMaybe<Scalars['UUID']['input']>;
};
export type ProjectInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description: Scalars['String']['input'];
  endDate?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name: Scalars['String']['input'];
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
  document?: Maybe<Document>;
  documents?: Maybe<Array<Document>>;
  documentsConnection?: Maybe<DocumentsConnection>;
  initiative?: Maybe<Initiative>;
  initiatives?: Maybe<Array<Initiative>>;
  initiativesConnection?: Maybe<InitiativesConnection>;
  metric?: Maybe<Metric>;
  metrics?: Maybe<Array<Metric>>;
  metricsConnection?: Maybe<MetricsConnection>;
  project?: Maybe<Project>;
  projects?: Maybe<Array<Project>>;
  projectsConnection?: Maybe<ProjectsConnection>;
  query: Query;
  task?: Maybe<Task>;
  tasks?: Maybe<Array<Task>>;
  tasksConnection?: Maybe<TasksConnection>;
  teamMember?: Maybe<TeamMember>;
  teamMemberByEmail?: Maybe<TeamMember>;
  teamMembers?: Maybe<Array<TeamMember>>;
  teamMembersConnection?: Maybe<TeamMembersConnection>;
  valueProposition?: Maybe<ValueProposition>;
  valuePropositions?: Maybe<Array<ValueProposition>>;
  valuePropositionsConnection?: Maybe<ValuePropositionsConnection>;
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
export type QueryInitiativeArgs = {
  id: Scalars['UUID']['input'];
};
export type QueryInitiativesArgs = {
  condition?: InputMaybe<InitiativeCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InitiativesOrderBy>>;
};
export type QueryInitiativesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<InitiativeCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InitiativesOrderBy>>;
};
export type QueryMetricArgs = {
  id: Scalars['UUID']['input'];
};
export type QueryMetricsArgs = {
  condition?: InputMaybe<MetricCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MetricsOrderBy>>;
};
export type QueryMetricsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MetricCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MetricsOrderBy>>;
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
export type QueryTeamMemberArgs = {
  id: Scalars['UUID']['input'];
};
export type QueryTeamMemberByEmailArgs = {
  email: Scalars['String']['input'];
};
export type QueryTeamMembersArgs = {
  condition?: InputMaybe<TeamMemberCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TeamMembersOrderBy>>;
};
export type QueryTeamMembersConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TeamMemberCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TeamMembersOrderBy>>;
};
export type QueryValuePropositionArgs = {
  id: Scalars['UUID']['input'];
};
export type QueryValuePropositionsArgs = {
  condition?: InputMaybe<ValuePropositionCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ValuePropositionsOrderBy>>;
};
export type QueryValuePropositionsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ValuePropositionCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ValuePropositionsOrderBy>>;
};
export type Task = {
  __typename?: 'Task';
  assigneeId?: Maybe<Scalars['UUID']['output']>;
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
  id?: InputMaybe<Scalars['UUID']['input']>;
};
export type TaskInput = {
  assigneeId?: InputMaybe<Scalars['UUID']['input']>;
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
  assigneeId?: InputMaybe<Scalars['UUID']['input']>;
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
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type TeamMember = {
  __typename?: 'TeamMember';
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  department: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  reportsTo?: Maybe<Scalars['UUID']['output']>;
  role: Scalars['String']['output'];
  skills?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
};
export type TeamMemberCondition = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
};
export type TeamMemberInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  department: Scalars['String']['input'];
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['UUID']['input']>;
  name: Scalars['String']['input'];
  reportsTo?: InputMaybe<Scalars['UUID']['input']>;
  role: Scalars['String']['input'];
  skills?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type TeamMemberPatch = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  department?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reportsTo?: InputMaybe<Scalars['UUID']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type TeamMembersConnection = {
  __typename?: 'TeamMembersConnection';
  edges: Array<TeamMembersEdge>;
  nodes: Array<TeamMember>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type TeamMembersEdge = {
  __typename?: 'TeamMembersEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: TeamMember;
};
export enum TeamMembersOrderBy {
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
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
  clientMutationId?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Comment>;
  commentEdge?: Maybe<CommentsEdge>;
  query?: Maybe<Query>;
};
export type UpdateCommentPayloadCommentEdgeArgs = {
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
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
export type UpdateInitiativeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  patch: InitiativePatch;
};
export type UpdateInitiativePayload = {
  __typename?: 'UpdateInitiativePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  initiative?: Maybe<Initiative>;
  initiativeEdge?: Maybe<InitiativesEdge>;
  query?: Maybe<Query>;
};
export type UpdateInitiativePayloadInitiativeEdgeArgs = {
  orderBy?: InputMaybe<Array<InitiativesOrderBy>>;
};
export type UpdateMetricInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  patch: MetricPatch;
};
export type UpdateMetricPayload = {
  __typename?: 'UpdateMetricPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  metric?: Maybe<Metric>;
  metricEdge?: Maybe<MetricsEdge>;
  query?: Maybe<Query>;
};
export type UpdateMetricPayloadMetricEdgeArgs = {
  orderBy?: InputMaybe<Array<MetricsOrderBy>>;
};
export type UpdateProjectInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  patch: ProjectPatch;
};
export type UpdateProjectPayload = {
  __typename?: 'UpdateProjectPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  project?: Maybe<Project>;
  projectEdge?: Maybe<ProjectsEdge>;
  query?: Maybe<Query>;
};
export type UpdateProjectPayloadProjectEdgeArgs = {
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
};
export type UpdateTaskInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  patch: TaskPatch;
};
export type UpdateTaskPayload = {
  __typename?: 'UpdateTaskPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
  task?: Maybe<Task>;
  taskEdge?: Maybe<TasksEdge>;
};
export type UpdateTaskPayloadTaskEdgeArgs = {
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};
export type UpdateTeamMemberByEmailInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  patch: TeamMemberPatch;
};
export type UpdateTeamMemberInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  patch: TeamMemberPatch;
};
export type UpdateTeamMemberPayload = {
  __typename?: 'UpdateTeamMemberPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
  teamMember?: Maybe<TeamMember>;
  teamMemberEdge?: Maybe<TeamMembersEdge>;
};
export type UpdateTeamMemberPayloadTeamMemberEdgeArgs = {
  orderBy?: InputMaybe<Array<TeamMembersOrderBy>>;
};
export type UpdateValuePropositionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  patch: ValuePropositionPatch;
};
export type UpdateValuePropositionPayload = {
  __typename?: 'UpdateValuePropositionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
  valueProposition?: Maybe<ValueProposition>;
  valuePropositionEdge?: Maybe<ValuePropositionsEdge>;
};
export type UpdateValuePropositionPayloadValuePropositionEdgeArgs = {
  orderBy?: InputMaybe<Array<ValuePropositionsOrderBy>>;
};
export type ValueProposition = {
  __typename?: 'ValueProposition';
  confidence: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  description: Scalars['String']['output'];
  effort: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  impact: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
};
export type ValuePropositionCondition = {
  id?: InputMaybe<Scalars['UUID']['input']>;
};
export type ValuePropositionInput = {
  confidence: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description: Scalars['String']['input'];
  effort: Scalars['String']['input'];
  id?: InputMaybe<Scalars['UUID']['input']>;
  impact: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type ValuePropositionPatch = {
  confidence?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  effort?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  impact?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type ValuePropositionsConnection = {
  __typename?: 'ValuePropositionsConnection';
  edges: Array<ValuePropositionsEdge>;
  nodes: Array<ValueProposition>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type ValuePropositionsEdge = {
  __typename?: 'ValuePropositionsEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: ValueProposition;
};
export enum ValuePropositionsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
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
export type GetProjectTasksQuery = { __typename?: 'Query', tasks?: Array<{ __typename?: 'Task', id: any, title: string, description: string, status: string, assigneeId?: any | null, dueDate?: any | null, priority: string, projectId: any }> | null };
export type GetTaskQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;
export type GetTaskQuery = { __typename?: 'Query', task?: { __typename?: 'Task', id: any, title: string, description: string, status: string, assigneeId?: any | null, dueDate?: any | null, priority: string, projectId: any } | null };
export type CreateTaskMutationVariables = Exact<{
  input: CreateTaskInput;
}>;
export type CreateTaskMutation = { __typename?: 'Mutation', createTask?: { __typename?: 'CreateTaskPayload', task?: { __typename?: 'Task', id: any, title: string, description: string, status: string, assigneeId?: any | null, dueDate?: any | null, priority: string, projectId: any } | null } | null };
export type UpdateTaskMutationVariables = Exact<{
  input: UpdateTaskInput;
}>;
export type UpdateTaskMutation = { __typename?: 'Mutation', updateTask?: { __typename?: 'UpdateTaskPayload', task?: { __typename?: 'Task', id: any, title: string, description: string, status: string, assigneeId?: any | null, dueDate?: any | null, priority: string, projectId: any } | null } | null };
export type GetTeamMembersQueryVariables = Exact<{ [key: string]: never; }>;
export type GetTeamMembersQuery = { __typename?: 'Query', teamMembers?: Array<{ __typename?: 'TeamMember', id: any, name: string, role: string, email: string, avatar?: string | null, skills?: Array<string | null> | null, department: string, reportsTo?: any | null }> | null };
export type GetTeamMemberQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;
export type GetTeamMemberQuery = { __typename?: 'Query', teamMember?: { __typename?: 'TeamMember', id: any, name: string, role: string, email: string, avatar?: string | null, skills?: Array<string | null> | null, department: string, reportsTo?: any | null } | null };
export type CreateTeamMemberMutationVariables = Exact<{
  input: CreateTeamMemberInput;
}>;
export type CreateTeamMemberMutation = { __typename?: 'Mutation', createTeamMember?: { __typename?: 'CreateTeamMemberPayload', teamMember?: { __typename?: 'TeamMember', id: any, name: string, role: string, email: string, avatar?: string | null, skills?: Array<string | null> | null, department: string, reportsTo?: any | null } | null } | null };
export type GetValuePropositionsQueryVariables = Exact<{ [key: string]: never; }>;
export type GetValuePropositionsQuery = { __typename?: 'Query', valuePropositions?: Array<{ __typename?: 'ValueProposition', id: any, title: string, description: string, impact: string, effort: string, confidence: string }> | null };
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
export const GetTeamMembersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTeamMembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamMembers"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"skills"}},{"kind":"Field","name":{"kind":"Name","value":"department"}},{"kind":"Field","name":{"kind":"Name","value":"reportsTo"}}]}}]}}]} as unknown as DocumentNode<GetTeamMembersQuery, GetTeamMembersQueryVariables>;
export const GetTeamMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTeamMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UUID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamMember"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"skills"}},{"kind":"Field","name":{"kind":"Name","value":"department"}},{"kind":"Field","name":{"kind":"Name","value":"reportsTo"}}]}}]}}]} as unknown as DocumentNode<GetTeamMemberQuery, GetTeamMemberQueryVariables>;
export const CreateTeamMemberDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateTeamMember"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateTeamMemberInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTeamMember"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teamMember"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"role"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"avatar"}},{"kind":"Field","name":{"kind":"Name","value":"skills"}},{"kind":"Field","name":{"kind":"Name","value":"department"}},{"kind":"Field","name":{"kind":"Name","value":"reportsTo"}}]}}]}}]}}]} as unknown as DocumentNode<CreateTeamMemberMutation, CreateTeamMemberMutationVariables>;
export const GetValuePropositionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetValuePropositions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"valuePropositions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"impact"}},{"kind":"Field","name":{"kind":"Name","value":"effort"}},{"kind":"Field","name":{"kind":"Name","value":"confidence"}}]}}]}}]} as unknown as DocumentNode<GetValuePropositionsQuery, GetValuePropositionsQueryVariables>;
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Cursor: { input: any; output: any; }
  Datetime: { input: any; output: any; }
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
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  lastMessageAt: Scalars['Datetime']['output'];
  participantId: Scalars['String']['output'];
  participantType: Scalars['String']['output'];
  status: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
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
  authorId: Scalars['UUID']['output'];
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  documentId?: Maybe<Scalars['UUID']['output']>;
  id: Scalars['UUID']['output'];
  projectId: Scalars['UUID']['output'];
  taskId?: Maybe<Scalars['UUID']['output']>;
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
};
export type CommentCondition = {
  id?: InputMaybe<Scalars['UUID']['input']>;
};
export type CommentInput = {
  authorId: Scalars['UUID']['input'];
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  documentId?: InputMaybe<Scalars['UUID']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  projectId: Scalars['UUID']['input'];
  taskId?: InputMaybe<Scalars['UUID']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type CommentPatch = {
  authorId?: InputMaybe<Scalars['UUID']['input']>;
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
  clientMutationId?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Comment>;
  commentEdge?: Maybe<CommentsEdge>;
  query?: Maybe<Query>;
};
export type CreateCommentPayloadCommentEdgeArgs = {
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
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
export type CreateInitiativeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  initiative: InitiativeInput;
};
export type CreateInitiativePayload = {
  __typename?: 'CreateInitiativePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  initiative?: Maybe<Initiative>;
  initiativeEdge?: Maybe<InitiativesEdge>;
  query?: Maybe<Query>;
};
export type CreateInitiativePayloadInitiativeEdgeArgs = {
  orderBy?: InputMaybe<Array<InitiativesOrderBy>>;
};
export type CreateMetricInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  metric: MetricInput;
};
export type CreateMetricPayload = {
  __typename?: 'CreateMetricPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  metric?: Maybe<Metric>;
  metricEdge?: Maybe<MetricsEdge>;
  query?: Maybe<Query>;
};
export type CreateMetricPayloadMetricEdgeArgs = {
  orderBy?: InputMaybe<Array<MetricsOrderBy>>;
};
export type CreateProjectInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  project: ProjectInput;
};
export type CreateProjectPayload = {
  __typename?: 'CreateProjectPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  project?: Maybe<Project>;
  projectEdge?: Maybe<ProjectsEdge>;
  query?: Maybe<Query>;
};
export type CreateProjectPayloadProjectEdgeArgs = {
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
};
export type CreateTaskInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  task: TaskInput;
};
export type CreateTaskPayload = {
  __typename?: 'CreateTaskPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
  task?: Maybe<Task>;
  taskEdge?: Maybe<TasksEdge>;
};
export type CreateTaskPayloadTaskEdgeArgs = {
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};
export type CreateTeamMemberInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  teamMember: TeamMemberInput;
};
export type CreateTeamMemberPayload = {
  __typename?: 'CreateTeamMemberPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
  teamMember?: Maybe<TeamMember>;
  teamMemberEdge?: Maybe<TeamMembersEdge>;
};
export type CreateTeamMemberPayloadTeamMemberEdgeArgs = {
  orderBy?: InputMaybe<Array<TeamMembersOrderBy>>;
};
export type CreateValuePropositionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  valueProposition: ValuePropositionInput;
};
export type CreateValuePropositionPayload = {
  __typename?: 'CreateValuePropositionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
  valueProposition?: Maybe<ValueProposition>;
  valuePropositionEdge?: Maybe<ValuePropositionsEdge>;
};
export type CreateValuePropositionPayloadValuePropositionEdgeArgs = {
  orderBy?: InputMaybe<Array<ValuePropositionsOrderBy>>;
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
  clientMutationId?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Comment>;
  commentEdge?: Maybe<CommentsEdge>;
  deletedCommentNodeId?: Maybe<Scalars['ID']['output']>;
  query?: Maybe<Query>;
};
export type DeleteCommentPayloadCommentEdgeArgs = {
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
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
export type DeleteInitiativeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};
export type DeleteInitiativePayload = {
  __typename?: 'DeleteInitiativePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedInitiativeNodeId?: Maybe<Scalars['ID']['output']>;
  initiative?: Maybe<Initiative>;
  initiativeEdge?: Maybe<InitiativesEdge>;
  query?: Maybe<Query>;
};
export type DeleteInitiativePayloadInitiativeEdgeArgs = {
  orderBy?: InputMaybe<Array<InitiativesOrderBy>>;
};
export type DeleteMetricInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};
export type DeleteMetricPayload = {
  __typename?: 'DeleteMetricPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedMetricNodeId?: Maybe<Scalars['ID']['output']>;
  metric?: Maybe<Metric>;
  metricEdge?: Maybe<MetricsEdge>;
  query?: Maybe<Query>;
};
export type DeleteMetricPayloadMetricEdgeArgs = {
  orderBy?: InputMaybe<Array<MetricsOrderBy>>;
};
export type DeleteProjectInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};
export type DeleteProjectPayload = {
  __typename?: 'DeleteProjectPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedProjectNodeId?: Maybe<Scalars['ID']['output']>;
  project?: Maybe<Project>;
  projectEdge?: Maybe<ProjectsEdge>;
  query?: Maybe<Query>;
};
export type DeleteProjectPayloadProjectEdgeArgs = {
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
};
export type DeleteTaskInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};
export type DeleteTaskPayload = {
  __typename?: 'DeleteTaskPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedTaskNodeId?: Maybe<Scalars['ID']['output']>;
  query?: Maybe<Query>;
  task?: Maybe<Task>;
  taskEdge?: Maybe<TasksEdge>;
};
export type DeleteTaskPayloadTaskEdgeArgs = {
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};
export type DeleteTeamMemberByEmailInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
};
export type DeleteTeamMemberInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};
export type DeleteTeamMemberPayload = {
  __typename?: 'DeleteTeamMemberPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedTeamMemberNodeId?: Maybe<Scalars['ID']['output']>;
  query?: Maybe<Query>;
  teamMember?: Maybe<TeamMember>;
  teamMemberEdge?: Maybe<TeamMembersEdge>;
};
export type DeleteTeamMemberPayloadTeamMemberEdgeArgs = {
  orderBy?: InputMaybe<Array<TeamMembersOrderBy>>;
};
export type DeleteValuePropositionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};
export type DeleteValuePropositionPayload = {
  __typename?: 'DeleteValuePropositionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedValuePropositionNodeId?: Maybe<Scalars['ID']['output']>;
  query?: Maybe<Query>;
  valueProposition?: Maybe<ValueProposition>;
  valuePropositionEdge?: Maybe<ValuePropositionsEdge>;
};
export type DeleteValuePropositionPayloadValuePropositionEdgeArgs = {
  orderBy?: InputMaybe<Array<ValuePropositionsOrderBy>>;
};
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
export type Initiative = {
  __typename?: 'Initiative';
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  description: Scalars['String']['output'];
  endDate?: Maybe<Scalars['Datetime']['output']>;
  id: Scalars['UUID']['output'];
  startDate?: Maybe<Scalars['Datetime']['output']>;
  status: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
  valuePropositionIds: Array<Maybe<Scalars['String']['output']>>;
};
export type InitiativeCondition = {
  id?: InputMaybe<Scalars['UUID']['input']>;
};
export type InitiativeInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description: Scalars['String']['input'];
  endDate?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  startDate?: InputMaybe<Scalars['Datetime']['input']>;
  status: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  valuePropositionIds: Array<InputMaybe<Scalars['String']['input']>>;
};
export type InitiativePatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  endDate?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  startDate?: InputMaybe<Scalars['Datetime']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  valuePropositionIds?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};
export type InitiativesConnection = {
  __typename?: 'InitiativesConnection';
  edges: Array<InitiativesEdge>;
  nodes: Array<Initiative>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type InitiativesEdge = {
  __typename?: 'InitiativesEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: Initiative;
};
export enum InitiativesOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type Metric = {
  __typename?: 'Metric';
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  current: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  initiativeId: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  target: Scalars['Int']['output'];
  trend?: Maybe<Scalars['String']['output']>;
  unit: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
};
export type MetricCondition = {
  id?: InputMaybe<Scalars['UUID']['input']>;
};
export type MetricInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  current: Scalars['Int']['input'];
  description: Scalars['String']['input'];
  id?: InputMaybe<Scalars['UUID']['input']>;
  initiativeId: Scalars['UUID']['input'];
  name: Scalars['String']['input'];
  target: Scalars['Int']['input'];
  trend?: InputMaybe<Scalars['String']['input']>;
  unit: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type MetricPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  current?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  initiativeId?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  target?: InputMaybe<Scalars['Int']['input']>;
  trend?: InputMaybe<Scalars['String']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type MetricsConnection = {
  __typename?: 'MetricsConnection';
  edges: Array<MetricsEdge>;
  nodes: Array<Metric>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type MetricsEdge = {
  __typename?: 'MetricsEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: Metric;
};
export enum MetricsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type Mutation = {
  __typename?: 'Mutation';
  createAgent?: Maybe<CreateAgentPayload>;
  createChat?: Maybe<CreateChatPayload>;
  createChatMessage?: Maybe<CreateChatMessagePayload>;
  createComment?: Maybe<CreateCommentPayload>;
  createDocument?: Maybe<CreateDocumentPayload>;
  createInitiative?: Maybe<CreateInitiativePayload>;
  createMetric?: Maybe<CreateMetricPayload>;
  createProject?: Maybe<CreateProjectPayload>;
  createTask?: Maybe<CreateTaskPayload>;
  createTeamMember?: Maybe<CreateTeamMemberPayload>;
  createValueProposition?: Maybe<CreateValuePropositionPayload>;
  deleteAgent?: Maybe<DeleteAgentPayload>;
  deleteChat?: Maybe<DeleteChatPayload>;
  deleteChatMessage?: Maybe<DeleteChatMessagePayload>;
  deleteComment?: Maybe<DeleteCommentPayload>;
  deleteDocument?: Maybe<DeleteDocumentPayload>;
  deleteInitiative?: Maybe<DeleteInitiativePayload>;
  deleteMetric?: Maybe<DeleteMetricPayload>;
  deleteProject?: Maybe<DeleteProjectPayload>;
  deleteTask?: Maybe<DeleteTaskPayload>;
  deleteTeamMember?: Maybe<DeleteTeamMemberPayload>;
  deleteTeamMemberByEmail?: Maybe<DeleteTeamMemberPayload>;
  deleteValueProposition?: Maybe<DeleteValuePropositionPayload>;
  updateAgent?: Maybe<UpdateAgentPayload>;
  updateChat?: Maybe<UpdateChatPayload>;
  updateChatMessage?: Maybe<UpdateChatMessagePayload>;
  updateComment?: Maybe<UpdateCommentPayload>;
  updateDocument?: Maybe<UpdateDocumentPayload>;
  updateInitiative?: Maybe<UpdateInitiativePayload>;
  updateMetric?: Maybe<UpdateMetricPayload>;
  updateProject?: Maybe<UpdateProjectPayload>;
  updateTask?: Maybe<UpdateTaskPayload>;
  updateTeamMember?: Maybe<UpdateTeamMemberPayload>;
  updateTeamMemberByEmail?: Maybe<UpdateTeamMemberPayload>;
  updateValueProposition?: Maybe<UpdateValuePropositionPayload>;
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
export type MutationCreateDocumentArgs = {
  input: CreateDocumentInput;
};
export type MutationCreateInitiativeArgs = {
  input: CreateInitiativeInput;
};
export type MutationCreateMetricArgs = {
  input: CreateMetricInput;
};
export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};
export type MutationCreateTaskArgs = {
  input: CreateTaskInput;
};
export type MutationCreateTeamMemberArgs = {
  input: CreateTeamMemberInput;
};
export type MutationCreateValuePropositionArgs = {
  input: CreateValuePropositionInput;
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
export type MutationDeleteDocumentArgs = {
  input: DeleteDocumentInput;
};
export type MutationDeleteInitiativeArgs = {
  input: DeleteInitiativeInput;
};
export type MutationDeleteMetricArgs = {
  input: DeleteMetricInput;
};
export type MutationDeleteProjectArgs = {
  input: DeleteProjectInput;
};
export type MutationDeleteTaskArgs = {
  input: DeleteTaskInput;
};
export type MutationDeleteTeamMemberArgs = {
  input: DeleteTeamMemberInput;
};
export type MutationDeleteTeamMemberByEmailArgs = {
  input: DeleteTeamMemberByEmailInput;
};
export type MutationDeleteValuePropositionArgs = {
  input: DeleteValuePropositionInput;
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
export type MutationUpdateDocumentArgs = {
  input: UpdateDocumentInput;
};
export type MutationUpdateInitiativeArgs = {
  input: UpdateInitiativeInput;
};
export type MutationUpdateMetricArgs = {
  input: UpdateMetricInput;
};
export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput;
};
export type MutationUpdateTaskArgs = {
  input: UpdateTaskInput;
};
export type MutationUpdateTeamMemberArgs = {
  input: UpdateTeamMemberInput;
};
export type MutationUpdateTeamMemberByEmailArgs = {
  input: UpdateTeamMemberByEmailInput;
};
export type MutationUpdateValuePropositionArgs = {
  input: UpdateValuePropositionInput;
};
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
  startDate: Scalars['Datetime']['output'];
  status: Scalars['String']['output'];
  teamIds: Array<Maybe<Scalars['String']['output']>>;
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
};
export type ProjectCondition = {
  id?: InputMaybe<Scalars['UUID']['input']>;
};
export type ProjectInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description: Scalars['String']['input'];
  endDate?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name: Scalars['String']['input'];
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
  document?: Maybe<Document>;
  documents?: Maybe<Array<Document>>;
  documentsConnection?: Maybe<DocumentsConnection>;
  initiative?: Maybe<Initiative>;
  initiatives?: Maybe<Array<Initiative>>;
  initiativesConnection?: Maybe<InitiativesConnection>;
  metric?: Maybe<Metric>;
  metrics?: Maybe<Array<Metric>>;
  metricsConnection?: Maybe<MetricsConnection>;
  project?: Maybe<Project>;
  projects?: Maybe<Array<Project>>;
  projectsConnection?: Maybe<ProjectsConnection>;
  query: Query;
  task?: Maybe<Task>;
  tasks?: Maybe<Array<Task>>;
  tasksConnection?: Maybe<TasksConnection>;
  teamMember?: Maybe<TeamMember>;
  teamMemberByEmail?: Maybe<TeamMember>;
  teamMembers?: Maybe<Array<TeamMember>>;
  teamMembersConnection?: Maybe<TeamMembersConnection>;
  valueProposition?: Maybe<ValueProposition>;
  valuePropositions?: Maybe<Array<ValueProposition>>;
  valuePropositionsConnection?: Maybe<ValuePropositionsConnection>;
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
export type QueryInitiativeArgs = {
  id: Scalars['UUID']['input'];
};
export type QueryInitiativesArgs = {
  condition?: InputMaybe<InitiativeCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InitiativesOrderBy>>;
};
export type QueryInitiativesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<InitiativeCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InitiativesOrderBy>>;
};
export type QueryMetricArgs = {
  id: Scalars['UUID']['input'];
};
export type QueryMetricsArgs = {
  condition?: InputMaybe<MetricCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MetricsOrderBy>>;
};
export type QueryMetricsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MetricCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MetricsOrderBy>>;
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
export type QueryTeamMemberArgs = {
  id: Scalars['UUID']['input'];
};
export type QueryTeamMemberByEmailArgs = {
  email: Scalars['String']['input'];
};
export type QueryTeamMembersArgs = {
  condition?: InputMaybe<TeamMemberCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TeamMembersOrderBy>>;
};
export type QueryTeamMembersConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TeamMemberCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TeamMembersOrderBy>>;
};
export type QueryValuePropositionArgs = {
  id: Scalars['UUID']['input'];
};
export type QueryValuePropositionsArgs = {
  condition?: InputMaybe<ValuePropositionCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ValuePropositionsOrderBy>>;
};
export type QueryValuePropositionsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ValuePropositionCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ValuePropositionsOrderBy>>;
};
export type Task = {
  __typename?: 'Task';
  assigneeId?: Maybe<Scalars['UUID']['output']>;
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
  id?: InputMaybe<Scalars['UUID']['input']>;
};
export type TaskInput = {
  assigneeId?: InputMaybe<Scalars['UUID']['input']>;
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
  assigneeId?: InputMaybe<Scalars['UUID']['input']>;
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
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}
export type TeamMember = {
  __typename?: 'TeamMember';
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  department: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  reportsTo?: Maybe<Scalars['UUID']['output']>;
  role: Scalars['String']['output'];
  skills?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
};
export type TeamMemberCondition = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
};
export type TeamMemberInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  department: Scalars['String']['input'];
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['UUID']['input']>;
  name: Scalars['String']['input'];
  reportsTo?: InputMaybe<Scalars['UUID']['input']>;
  role: Scalars['String']['input'];
  skills?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type TeamMemberPatch = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  department?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  reportsTo?: InputMaybe<Scalars['UUID']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  skills?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type TeamMembersConnection = {
  __typename?: 'TeamMembersConnection';
  edges: Array<TeamMembersEdge>;
  nodes: Array<TeamMember>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type TeamMembersEdge = {
  __typename?: 'TeamMembersEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: TeamMember;
};
export enum TeamMembersOrderBy {
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
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
  clientMutationId?: Maybe<Scalars['String']['output']>;
  comment?: Maybe<Comment>;
  commentEdge?: Maybe<CommentsEdge>;
  query?: Maybe<Query>;
};
export type UpdateCommentPayloadCommentEdgeArgs = {
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
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
export type UpdateInitiativeInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  patch: InitiativePatch;
};
export type UpdateInitiativePayload = {
  __typename?: 'UpdateInitiativePayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  initiative?: Maybe<Initiative>;
  initiativeEdge?: Maybe<InitiativesEdge>;
  query?: Maybe<Query>;
};
export type UpdateInitiativePayloadInitiativeEdgeArgs = {
  orderBy?: InputMaybe<Array<InitiativesOrderBy>>;
};
export type UpdateMetricInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  patch: MetricPatch;
};
export type UpdateMetricPayload = {
  __typename?: 'UpdateMetricPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  metric?: Maybe<Metric>;
  metricEdge?: Maybe<MetricsEdge>;
  query?: Maybe<Query>;
};
export type UpdateMetricPayloadMetricEdgeArgs = {
  orderBy?: InputMaybe<Array<MetricsOrderBy>>;
};
export type UpdateProjectInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  patch: ProjectPatch;
};
export type UpdateProjectPayload = {
  __typename?: 'UpdateProjectPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  project?: Maybe<Project>;
  projectEdge?: Maybe<ProjectsEdge>;
  query?: Maybe<Query>;
};
export type UpdateProjectPayloadProjectEdgeArgs = {
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
};
export type UpdateTaskInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  patch: TaskPatch;
};
export type UpdateTaskPayload = {
  __typename?: 'UpdateTaskPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
  task?: Maybe<Task>;
  taskEdge?: Maybe<TasksEdge>;
};
export type UpdateTaskPayloadTaskEdgeArgs = {
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};
export type UpdateTeamMemberByEmailInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  patch: TeamMemberPatch;
};
export type UpdateTeamMemberInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  patch: TeamMemberPatch;
};
export type UpdateTeamMemberPayload = {
  __typename?: 'UpdateTeamMemberPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
  teamMember?: Maybe<TeamMember>;
  teamMemberEdge?: Maybe<TeamMembersEdge>;
};
export type UpdateTeamMemberPayloadTeamMemberEdgeArgs = {
  orderBy?: InputMaybe<Array<TeamMembersOrderBy>>;
};
export type UpdateValuePropositionInput = {
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  patch: ValuePropositionPatch;
};
export type UpdateValuePropositionPayload = {
  __typename?: 'UpdateValuePropositionPayload';
  clientMutationId?: Maybe<Scalars['String']['output']>;
  query?: Maybe<Query>;
  valueProposition?: Maybe<ValueProposition>;
  valuePropositionEdge?: Maybe<ValuePropositionsEdge>;
};
export type UpdateValuePropositionPayloadValuePropositionEdgeArgs = {
  orderBy?: InputMaybe<Array<ValuePropositionsOrderBy>>;
};
export type ValueProposition = {
  __typename?: 'ValueProposition';
  confidence: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['Datetime']['output']>;
  description: Scalars['String']['output'];
  effort: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  impact: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['Datetime']['output']>;
};
export type ValuePropositionCondition = {
  id?: InputMaybe<Scalars['UUID']['input']>;
};
export type ValuePropositionInput = {
  confidence: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description: Scalars['String']['input'];
  effort: Scalars['String']['input'];
  id?: InputMaybe<Scalars['UUID']['input']>;
  impact: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type ValuePropositionPatch = {
  confidence?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  effort?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  impact?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};
export type ValuePropositionsConnection = {
  __typename?: 'ValuePropositionsConnection';
  edges: Array<ValuePropositionsEdge>;
  nodes: Array<ValueProposition>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};
export type ValuePropositionsEdge = {
  __typename?: 'ValuePropositionsEdge';
  cursor?: Maybe<Scalars['Cursor']['output']>;
  node: ValueProposition;
};
export enum ValuePropositionsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
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
export type GetProjectTasksQuery = { __typename?: 'Query', tasks?: Array<{ __typename?: 'Task', id: any, title: string, description: string, status: string, assigneeId?: any | null, dueDate?: any | null, priority: string, projectId: any }> | null };
export type GetTaskQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;
export type GetTaskQuery = { __typename?: 'Query', task?: { __typename?: 'Task', id: any, title: string, description: string, status: string, assigneeId?: any | null, dueDate?: any | null, priority: string, projectId: any } | null };
export type CreateTaskMutationVariables = Exact<{
  input: CreateTaskInput;
}>;
export type CreateTaskMutation = { __typename?: 'Mutation', createTask?: { __typename?: 'CreateTaskPayload', task?: { __typename?: 'Task', id: any, title: string, description: string, status: string, assigneeId?: any | null, dueDate?: any | null, priority: string, projectId: any } | null } | null };
export type UpdateTaskMutationVariables = Exact<{
  input: UpdateTaskInput;
}>;
export type UpdateTaskMutation = { __typename?: 'Mutation', updateTask?: { __typename?: 'UpdateTaskPayload', task?: { __typename?: 'Task', id: any, title: string, description: string, status: string, assigneeId?: any | null, dueDate?: any | null, priority: string, projectId: any } | null } | null };
export type GetTeamMembersQueryVariables = Exact<{ [key: string]: never; }>;
export type GetTeamMembersQuery = { __typename?: 'Query', teamMembers?: Array<{ __typename?: 'TeamMember', id: any, name: string, role: string, email: string, avatar?: string | null, skills?: Array<string | null> | null, department: string, reportsTo?: any | null }> | null };
export type GetTeamMemberQueryVariables = Exact<{
  id: Scalars['UUID']['input'];
}>;
export type GetTeamMemberQuery = { __typename?: 'Query', teamMember?: { __typename?: 'TeamMember', id: any, name: string, role: string, email: string, avatar?: string | null, skills?: Array<string | null> | null, department: string, reportsTo?: any | null } | null };
export type CreateTeamMemberMutationVariables = Exact<{
  input: CreateTeamMemberInput;
}>;
export type CreateTeamMemberMutation = { __typename?: 'Mutation', createTeamMember?: { __typename?: 'CreateTeamMemberPayload', teamMember?: { __typename?: 'TeamMember', id: any, name: string, role: string, email: string, avatar?: string | null, skills?: Array<string | null> | null, department: string, reportsTo?: any | null } | null } | null };
export type GetValuePropositionsQueryVariables = Exact<{ [key: string]: never; }>;
export type GetValuePropositionsQuery = { __typename?: 'Query', valuePropositions?: Array<{ __typename?: 'ValueProposition', id: any, title: string, description: string, impact: string, effort: string, confidence: string }> | null };
