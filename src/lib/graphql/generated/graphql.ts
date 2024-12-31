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
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: { input: any; output: any; }
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: { input: any; output: any; }
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: { input: any; output: any; }
};

export type Agent = {
  __typename?: 'Agent';
  handle: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

/** A condition to be used against `Agent` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AgentCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `Agent` */
export type AgentInput = {
  handle: Scalars['String']['input'];
  id?: InputMaybe<Scalars['UUID']['input']>;
  name: Scalars['String']['input'];
  status: Scalars['String']['input'];
};

/** Represents an update to a `Agent`. Fields that are set will be updated. */
export type AgentPatch = {
  handle?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `Agent` values. */
export type AgentsConnection = {
  __typename?: 'AgentsConnection';
  /** A list of edges which contains the `Agent` and cursor to aid in pagination. */
  edges: Array<AgentsEdge>;
  /** A list of `Agent` objects. */
  nodes: Array<Agent>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Agent` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Agent` edge in the connection. */
export type AgentsEdge = {
  __typename?: 'AgentsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Agent` at the end of the edge. */
  node: Agent;
};

/** Methods to use when ordering `Agent`. */
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

/** A condition to be used against `Chat` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ChatCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `Chat` */
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

/**
 * A condition to be used against `ChatMessage` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type ChatMessageCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `ChatMessage` */
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

/** Represents an update to a `ChatMessage`. Fields that are set will be updated. */
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

/** A connection to a list of `ChatMessage` values. */
export type ChatMessagesConnection = {
  __typename?: 'ChatMessagesConnection';
  /** A list of edges which contains the `ChatMessage` and cursor to aid in pagination. */
  edges: Array<ChatMessagesEdge>;
  /** A list of `ChatMessage` objects. */
  nodes: Array<ChatMessage>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ChatMessage` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `ChatMessage` edge in the connection. */
export type ChatMessagesEdge = {
  __typename?: 'ChatMessagesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `ChatMessage` at the end of the edge. */
  node: ChatMessage;
};

/** Methods to use when ordering `ChatMessage`. */
export enum ChatMessagesOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** Represents an update to a `Chat`. Fields that are set will be updated. */
export type ChatPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  lastMessageAt?: InputMaybe<Scalars['Datetime']['input']>;
  participantId?: InputMaybe<Scalars['String']['input']>;
  participantType?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** A connection to a list of `Chat` values. */
export type ChatsConnection = {
  __typename?: 'ChatsConnection';
  /** A list of edges which contains the `Chat` and cursor to aid in pagination. */
  edges: Array<ChatsEdge>;
  /** A list of `Chat` objects. */
  nodes: Array<Chat>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Chat` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Chat` edge in the connection. */
export type ChatsEdge = {
  __typename?: 'ChatsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Chat` at the end of the edge. */
  node: Chat;
};

/** Methods to use when ordering `Chat`. */
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

/** A condition to be used against `Comment` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type CommentCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `Comment` */
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

/** Represents an update to a `Comment`. Fields that are set will be updated. */
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

/** A connection to a list of `Comment` values. */
export type CommentsConnection = {
  __typename?: 'CommentsConnection';
  /** A list of edges which contains the `Comment` and cursor to aid in pagination. */
  edges: Array<CommentsEdge>;
  /** A list of `Comment` objects. */
  nodes: Array<Comment>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Comment` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Comment` edge in the connection. */
export type CommentsEdge = {
  __typename?: 'CommentsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Comment` at the end of the edge. */
  node: Comment;
};

/** Methods to use when ordering `Comment`. */
export enum CommentsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** All input for the create `Agent` mutation. */
export type CreateAgentInput = {
  /** The `Agent` to be created by this mutation. */
  agent: AgentInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `Agent` mutation. */
export type CreateAgentPayload = {
  __typename?: 'CreateAgentPayload';
  /** The `Agent` that was created by this mutation. */
  agent?: Maybe<Agent>;
  /** An edge for our `Agent`. May be used by Relay 1. */
  agentEdge?: Maybe<AgentsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Agent` mutation. */
export type CreateAgentPayloadAgentEdgeArgs = {
  orderBy?: InputMaybe<Array<AgentsOrderBy>>;
};

/** All input for the create `Chat` mutation. */
export type CreateChatInput = {
  /** The `Chat` to be created by this mutation. */
  chat: ChatInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the create `ChatMessage` mutation. */
export type CreateChatMessageInput = {
  /** The `ChatMessage` to be created by this mutation. */
  chatMessage: ChatMessageInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `ChatMessage` mutation. */
export type CreateChatMessagePayload = {
  __typename?: 'CreateChatMessagePayload';
  /** The `ChatMessage` that was created by this mutation. */
  chatMessage?: Maybe<ChatMessage>;
  /** An edge for our `ChatMessage`. May be used by Relay 1. */
  chatMessageEdge?: Maybe<ChatMessagesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `ChatMessage` mutation. */
export type CreateChatMessagePayloadChatMessageEdgeArgs = {
  orderBy?: InputMaybe<Array<ChatMessagesOrderBy>>;
};

/** The output of our create `Chat` mutation. */
export type CreateChatPayload = {
  __typename?: 'CreateChatPayload';
  /** The `Chat` that was created by this mutation. */
  chat?: Maybe<Chat>;
  /** An edge for our `Chat`. May be used by Relay 1. */
  chatEdge?: Maybe<ChatsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Chat` mutation. */
export type CreateChatPayloadChatEdgeArgs = {
  orderBy?: InputMaybe<Array<ChatsOrderBy>>;
};

/** All input for the create `Comment` mutation. */
export type CreateCommentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Comment` to be created by this mutation. */
  comment: CommentInput;
};

/** The output of our create `Comment` mutation. */
export type CreateCommentPayload = {
  __typename?: 'CreateCommentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Comment` that was created by this mutation. */
  comment?: Maybe<Comment>;
  /** An edge for our `Comment`. May be used by Relay 1. */
  commentEdge?: Maybe<CommentsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Comment` mutation. */
export type CreateCommentPayloadCommentEdgeArgs = {
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};

/** All input for the create `Document` mutation. */
export type CreateDocumentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Document` to be created by this mutation. */
  document: DocumentInput;
};

/** The output of our create `Document` mutation. */
export type CreateDocumentPayload = {
  __typename?: 'CreateDocumentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Document` that was created by this mutation. */
  document?: Maybe<Document>;
  /** An edge for our `Document`. May be used by Relay 1. */
  documentEdge?: Maybe<DocumentsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Document` mutation. */
export type CreateDocumentPayloadDocumentEdgeArgs = {
  orderBy?: InputMaybe<Array<DocumentsOrderBy>>;
};

/** All input for the create `Initiative` mutation. */
export type CreateInitiativeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Initiative` to be created by this mutation. */
  initiative: InitiativeInput;
};

/** The output of our create `Initiative` mutation. */
export type CreateInitiativePayload = {
  __typename?: 'CreateInitiativePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Initiative` that was created by this mutation. */
  initiative?: Maybe<Initiative>;
  /** An edge for our `Initiative`. May be used by Relay 1. */
  initiativeEdge?: Maybe<InitiativesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Initiative` mutation. */
export type CreateInitiativePayloadInitiativeEdgeArgs = {
  orderBy?: InputMaybe<Array<InitiativesOrderBy>>;
};

/** All input for the create `Metric` mutation. */
export type CreateMetricInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Metric` to be created by this mutation. */
  metric: MetricInput;
};

/** The output of our create `Metric` mutation. */
export type CreateMetricPayload = {
  __typename?: 'CreateMetricPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Metric` that was created by this mutation. */
  metric?: Maybe<Metric>;
  /** An edge for our `Metric`. May be used by Relay 1. */
  metricEdge?: Maybe<MetricsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Metric` mutation. */
export type CreateMetricPayloadMetricEdgeArgs = {
  orderBy?: InputMaybe<Array<MetricsOrderBy>>;
};

/** All input for the create `Project` mutation. */
export type CreateProjectInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Project` to be created by this mutation. */
  project: ProjectInput;
};

/** The output of our create `Project` mutation. */
export type CreateProjectPayload = {
  __typename?: 'CreateProjectPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Project` that was created by this mutation. */
  project?: Maybe<Project>;
  /** An edge for our `Project`. May be used by Relay 1. */
  projectEdge?: Maybe<ProjectsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Project` mutation. */
export type CreateProjectPayloadProjectEdgeArgs = {
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
};

/** All input for the create `Task` mutation. */
export type CreateTaskInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Task` to be created by this mutation. */
  task: TaskInput;
};

/** The output of our create `Task` mutation. */
export type CreateTaskPayload = {
  __typename?: 'CreateTaskPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Task` that was created by this mutation. */
  task?: Maybe<Task>;
  /** An edge for our `Task`. May be used by Relay 1. */
  taskEdge?: Maybe<TasksEdge>;
};


/** The output of our create `Task` mutation. */
export type CreateTaskPayloadTaskEdgeArgs = {
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};

/** All input for the create `TeamMember` mutation. */
export type CreateTeamMemberInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `TeamMember` to be created by this mutation. */
  teamMember: TeamMemberInput;
};

/** The output of our create `TeamMember` mutation. */
export type CreateTeamMemberPayload = {
  __typename?: 'CreateTeamMemberPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `TeamMember` that was created by this mutation. */
  teamMember?: Maybe<TeamMember>;
  /** An edge for our `TeamMember`. May be used by Relay 1. */
  teamMemberEdge?: Maybe<TeamMembersEdge>;
};


/** The output of our create `TeamMember` mutation. */
export type CreateTeamMemberPayloadTeamMemberEdgeArgs = {
  orderBy?: InputMaybe<Array<TeamMembersOrderBy>>;
};

/** All input for the create `ValueProposition` mutation. */
export type CreateValuePropositionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `ValueProposition` to be created by this mutation. */
  valueProposition: ValuePropositionInput;
};

/** The output of our create `ValueProposition` mutation. */
export type CreateValuePropositionPayload = {
  __typename?: 'CreateValuePropositionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `ValueProposition` that was created by this mutation. */
  valueProposition?: Maybe<ValueProposition>;
  /** An edge for our `ValueProposition`. May be used by Relay 1. */
  valuePropositionEdge?: Maybe<ValuePropositionsEdge>;
};


/** The output of our create `ValueProposition` mutation. */
export type CreateValuePropositionPayloadValuePropositionEdgeArgs = {
  orderBy?: InputMaybe<Array<ValuePropositionsOrderBy>>;
};

/** All input for the `deleteAgent` mutation. */
export type DeleteAgentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Agent` mutation. */
export type DeleteAgentPayload = {
  __typename?: 'DeleteAgentPayload';
  /** The `Agent` that was deleted by this mutation. */
  agent?: Maybe<Agent>;
  /** An edge for our `Agent`. May be used by Relay 1. */
  agentEdge?: Maybe<AgentsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedAgentNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Agent` mutation. */
export type DeleteAgentPayloadAgentEdgeArgs = {
  orderBy?: InputMaybe<Array<AgentsOrderBy>>;
};

/** All input for the `deleteChat` mutation. */
export type DeleteChatInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** All input for the `deleteChatMessage` mutation. */
export type DeleteChatMessageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `ChatMessage` mutation. */
export type DeleteChatMessagePayload = {
  __typename?: 'DeleteChatMessagePayload';
  /** The `ChatMessage` that was deleted by this mutation. */
  chatMessage?: Maybe<ChatMessage>;
  /** An edge for our `ChatMessage`. May be used by Relay 1. */
  chatMessageEdge?: Maybe<ChatMessagesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedChatMessageNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `ChatMessage` mutation. */
export type DeleteChatMessagePayloadChatMessageEdgeArgs = {
  orderBy?: InputMaybe<Array<ChatMessagesOrderBy>>;
};

/** The output of our delete `Chat` mutation. */
export type DeleteChatPayload = {
  __typename?: 'DeleteChatPayload';
  /** The `Chat` that was deleted by this mutation. */
  chat?: Maybe<Chat>;
  /** An edge for our `Chat`. May be used by Relay 1. */
  chatEdge?: Maybe<ChatsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedChatNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Chat` mutation. */
export type DeleteChatPayloadChatEdgeArgs = {
  orderBy?: InputMaybe<Array<ChatsOrderBy>>;
};

/** All input for the `deleteComment` mutation. */
export type DeleteCommentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Comment` mutation. */
export type DeleteCommentPayload = {
  __typename?: 'DeleteCommentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Comment` that was deleted by this mutation. */
  comment?: Maybe<Comment>;
  /** An edge for our `Comment`. May be used by Relay 1. */
  commentEdge?: Maybe<CommentsEdge>;
  deletedCommentNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Comment` mutation. */
export type DeleteCommentPayloadCommentEdgeArgs = {
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};

/** All input for the `deleteDocument` mutation. */
export type DeleteDocumentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Document` mutation. */
export type DeleteDocumentPayload = {
  __typename?: 'DeleteDocumentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedDocumentNodeId?: Maybe<Scalars['ID']['output']>;
  /** The `Document` that was deleted by this mutation. */
  document?: Maybe<Document>;
  /** An edge for our `Document`. May be used by Relay 1. */
  documentEdge?: Maybe<DocumentsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Document` mutation. */
export type DeleteDocumentPayloadDocumentEdgeArgs = {
  orderBy?: InputMaybe<Array<DocumentsOrderBy>>;
};

/** All input for the `deleteInitiative` mutation. */
export type DeleteInitiativeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Initiative` mutation. */
export type DeleteInitiativePayload = {
  __typename?: 'DeleteInitiativePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedInitiativeNodeId?: Maybe<Scalars['ID']['output']>;
  /** The `Initiative` that was deleted by this mutation. */
  initiative?: Maybe<Initiative>;
  /** An edge for our `Initiative`. May be used by Relay 1. */
  initiativeEdge?: Maybe<InitiativesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Initiative` mutation. */
export type DeleteInitiativePayloadInitiativeEdgeArgs = {
  orderBy?: InputMaybe<Array<InitiativesOrderBy>>;
};

/** All input for the `deleteMetric` mutation. */
export type DeleteMetricInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Metric` mutation. */
export type DeleteMetricPayload = {
  __typename?: 'DeleteMetricPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedMetricNodeId?: Maybe<Scalars['ID']['output']>;
  /** The `Metric` that was deleted by this mutation. */
  metric?: Maybe<Metric>;
  /** An edge for our `Metric`. May be used by Relay 1. */
  metricEdge?: Maybe<MetricsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Metric` mutation. */
export type DeleteMetricPayloadMetricEdgeArgs = {
  orderBy?: InputMaybe<Array<MetricsOrderBy>>;
};

/** All input for the `deleteProject` mutation. */
export type DeleteProjectInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Project` mutation. */
export type DeleteProjectPayload = {
  __typename?: 'DeleteProjectPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedProjectNodeId?: Maybe<Scalars['ID']['output']>;
  /** The `Project` that was deleted by this mutation. */
  project?: Maybe<Project>;
  /** An edge for our `Project`. May be used by Relay 1. */
  projectEdge?: Maybe<ProjectsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Project` mutation. */
export type DeleteProjectPayloadProjectEdgeArgs = {
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
};

/** All input for the `deleteTask` mutation. */
export type DeleteTaskInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Task` mutation. */
export type DeleteTaskPayload = {
  __typename?: 'DeleteTaskPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedTaskNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Task` that was deleted by this mutation. */
  task?: Maybe<Task>;
  /** An edge for our `Task`. May be used by Relay 1. */
  taskEdge?: Maybe<TasksEdge>;
};


/** The output of our delete `Task` mutation. */
export type DeleteTaskPayloadTaskEdgeArgs = {
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};

/** All input for the `deleteTeamMemberByEmail` mutation. */
export type DeleteTeamMemberByEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
};

/** All input for the `deleteTeamMember` mutation. */
export type DeleteTeamMemberInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `TeamMember` mutation. */
export type DeleteTeamMemberPayload = {
  __typename?: 'DeleteTeamMemberPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedTeamMemberNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `TeamMember` that was deleted by this mutation. */
  teamMember?: Maybe<TeamMember>;
  /** An edge for our `TeamMember`. May be used by Relay 1. */
  teamMemberEdge?: Maybe<TeamMembersEdge>;
};


/** The output of our delete `TeamMember` mutation. */
export type DeleteTeamMemberPayloadTeamMemberEdgeArgs = {
  orderBy?: InputMaybe<Array<TeamMembersOrderBy>>;
};

/** All input for the `deleteValueProposition` mutation. */
export type DeleteValuePropositionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `ValueProposition` mutation. */
export type DeleteValuePropositionPayload = {
  __typename?: 'DeleteValuePropositionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedValuePropositionNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `ValueProposition` that was deleted by this mutation. */
  valueProposition?: Maybe<ValueProposition>;
  /** An edge for our `ValueProposition`. May be used by Relay 1. */
  valuePropositionEdge?: Maybe<ValuePropositionsEdge>;
};


/** The output of our delete `ValueProposition` mutation. */
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

/**
 * A condition to be used against `Document` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type DocumentCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `Document` */
export type DocumentInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  projectId: Scalars['UUID']['input'];
  title: Scalars['String']['input'];
  type: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Represents an update to a `Document`. Fields that are set will be updated. */
export type DocumentPatch = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  projectId?: InputMaybe<Scalars['UUID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** A connection to a list of `Document` values. */
export type DocumentsConnection = {
  __typename?: 'DocumentsConnection';
  /** A list of edges which contains the `Document` and cursor to aid in pagination. */
  edges: Array<DocumentsEdge>;
  /** A list of `Document` objects. */
  nodes: Array<Document>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Document` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Document` edge in the connection. */
export type DocumentsEdge = {
  __typename?: 'DocumentsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Document` at the end of the edge. */
  node: Document;
};

/** Methods to use when ordering `Document`. */
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

/**
 * A condition to be used against `Initiative` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type InitiativeCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `Initiative` */
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

/** Represents an update to a `Initiative`. Fields that are set will be updated. */
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

/** A connection to a list of `Initiative` values. */
export type InitiativesConnection = {
  __typename?: 'InitiativesConnection';
  /** A list of edges which contains the `Initiative` and cursor to aid in pagination. */
  edges: Array<InitiativesEdge>;
  /** A list of `Initiative` objects. */
  nodes: Array<Initiative>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Initiative` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Initiative` edge in the connection. */
export type InitiativesEdge = {
  __typename?: 'InitiativesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Initiative` at the end of the edge. */
  node: Initiative;
};

/** Methods to use when ordering `Initiative`. */
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

/** A condition to be used against `Metric` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type MetricCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `Metric` */
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

/** Represents an update to a `Metric`. Fields that are set will be updated. */
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

/** A connection to a list of `Metric` values. */
export type MetricsConnection = {
  __typename?: 'MetricsConnection';
  /** A list of edges which contains the `Metric` and cursor to aid in pagination. */
  edges: Array<MetricsEdge>;
  /** A list of `Metric` objects. */
  nodes: Array<Metric>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Metric` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Metric` edge in the connection. */
export type MetricsEdge = {
  __typename?: 'MetricsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Metric` at the end of the edge. */
  node: Metric;
};

/** Methods to use when ordering `Metric`. */
export enum MetricsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Agent`. */
  createAgent?: Maybe<CreateAgentPayload>;
  /** Creates a single `Chat`. */
  createChat?: Maybe<CreateChatPayload>;
  /** Creates a single `ChatMessage`. */
  createChatMessage?: Maybe<CreateChatMessagePayload>;
  /** Creates a single `Comment`. */
  createComment?: Maybe<CreateCommentPayload>;
  /** Creates a single `Document`. */
  createDocument?: Maybe<CreateDocumentPayload>;
  /** Creates a single `Initiative`. */
  createInitiative?: Maybe<CreateInitiativePayload>;
  /** Creates a single `Metric`. */
  createMetric?: Maybe<CreateMetricPayload>;
  /** Creates a single `Project`. */
  createProject?: Maybe<CreateProjectPayload>;
  /** Creates a single `Task`. */
  createTask?: Maybe<CreateTaskPayload>;
  /** Creates a single `TeamMember`. */
  createTeamMember?: Maybe<CreateTeamMemberPayload>;
  /** Creates a single `ValueProposition`. */
  createValueProposition?: Maybe<CreateValuePropositionPayload>;
  /** Deletes a single `Agent` using a unique key. */
  deleteAgent?: Maybe<DeleteAgentPayload>;
  /** Deletes a single `Chat` using a unique key. */
  deleteChat?: Maybe<DeleteChatPayload>;
  /** Deletes a single `ChatMessage` using a unique key. */
  deleteChatMessage?: Maybe<DeleteChatMessagePayload>;
  /** Deletes a single `Comment` using a unique key. */
  deleteComment?: Maybe<DeleteCommentPayload>;
  /** Deletes a single `Document` using a unique key. */
  deleteDocument?: Maybe<DeleteDocumentPayload>;
  /** Deletes a single `Initiative` using a unique key. */
  deleteInitiative?: Maybe<DeleteInitiativePayload>;
  /** Deletes a single `Metric` using a unique key. */
  deleteMetric?: Maybe<DeleteMetricPayload>;
  /** Deletes a single `Project` using a unique key. */
  deleteProject?: Maybe<DeleteProjectPayload>;
  /** Deletes a single `Task` using a unique key. */
  deleteTask?: Maybe<DeleteTaskPayload>;
  /** Deletes a single `TeamMember` using a unique key. */
  deleteTeamMember?: Maybe<DeleteTeamMemberPayload>;
  /** Deletes a single `TeamMember` using a unique key. */
  deleteTeamMemberByEmail?: Maybe<DeleteTeamMemberPayload>;
  /** Deletes a single `ValueProposition` using a unique key. */
  deleteValueProposition?: Maybe<DeleteValuePropositionPayload>;
  /** Updates a single `Agent` using a unique key and a patch. */
  updateAgent?: Maybe<UpdateAgentPayload>;
  /** Updates a single `Chat` using a unique key and a patch. */
  updateChat?: Maybe<UpdateChatPayload>;
  /** Updates a single `ChatMessage` using a unique key and a patch. */
  updateChatMessage?: Maybe<UpdateChatMessagePayload>;
  /** Updates a single `Comment` using a unique key and a patch. */
  updateComment?: Maybe<UpdateCommentPayload>;
  /** Updates a single `Document` using a unique key and a patch. */
  updateDocument?: Maybe<UpdateDocumentPayload>;
  /** Updates a single `Initiative` using a unique key and a patch. */
  updateInitiative?: Maybe<UpdateInitiativePayload>;
  /** Updates a single `Metric` using a unique key and a patch. */
  updateMetric?: Maybe<UpdateMetricPayload>;
  /** Updates a single `Project` using a unique key and a patch. */
  updateProject?: Maybe<UpdateProjectPayload>;
  /** Updates a single `Task` using a unique key and a patch. */
  updateTask?: Maybe<UpdateTaskPayload>;
  /** Updates a single `TeamMember` using a unique key and a patch. */
  updateTeamMember?: Maybe<UpdateTeamMemberPayload>;
  /** Updates a single `TeamMember` using a unique key and a patch. */
  updateTeamMemberByEmail?: Maybe<UpdateTeamMemberPayload>;
  /** Updates a single `ValueProposition` using a unique key and a patch. */
  updateValueProposition?: Maybe<UpdateValuePropositionPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAgentArgs = {
  input: CreateAgentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateChatArgs = {
  input: CreateChatInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateChatMessageArgs = {
  input: CreateChatMessageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateDocumentArgs = {
  input: CreateDocumentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateInitiativeArgs = {
  input: CreateInitiativeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMetricArgs = {
  input: CreateMetricInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTaskArgs = {
  input: CreateTaskInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTeamMemberArgs = {
  input: CreateTeamMemberInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateValuePropositionArgs = {
  input: CreateValuePropositionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAgentArgs = {
  input: DeleteAgentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteChatArgs = {
  input: DeleteChatInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteChatMessageArgs = {
  input: DeleteChatMessageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCommentArgs = {
  input: DeleteCommentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDocumentArgs = {
  input: DeleteDocumentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteInitiativeArgs = {
  input: DeleteInitiativeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMetricArgs = {
  input: DeleteMetricInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteProjectArgs = {
  input: DeleteProjectInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTaskArgs = {
  input: DeleteTaskInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTeamMemberArgs = {
  input: DeleteTeamMemberInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTeamMemberByEmailArgs = {
  input: DeleteTeamMemberByEmailInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteValuePropositionArgs = {
  input: DeleteValuePropositionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAgentArgs = {
  input: UpdateAgentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateChatArgs = {
  input: UpdateChatInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateChatMessageArgs = {
  input: UpdateChatMessageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDocumentArgs = {
  input: UpdateDocumentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateInitiativeArgs = {
  input: UpdateInitiativeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMetricArgs = {
  input: UpdateMetricInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTaskArgs = {
  input: UpdateTaskInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTeamMemberArgs = {
  input: UpdateTeamMemberInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTeamMemberByEmailArgs = {
  input: UpdateTeamMemberByEmailInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateValuePropositionArgs = {
  input: UpdateValuePropositionInput;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
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

/** A condition to be used against `Project` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ProjectCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `Project` */
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

/** Represents an update to a `Project`. Fields that are set will be updated. */
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

/** A connection to a list of `Project` values. */
export type ProjectsConnection = {
  __typename?: 'ProjectsConnection';
  /** A list of edges which contains the `Project` and cursor to aid in pagination. */
  edges: Array<ProjectsEdge>;
  /** A list of `Project` objects. */
  nodes: Array<Project>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Project` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Project` edge in the connection. */
export type ProjectsEdge = {
  __typename?: 'ProjectsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Project` at the end of the edge. */
  node: Project;
};

/** Methods to use when ordering `Project`. */
export enum ProjectsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** The root query type which gives access points into the data universe. */
export type Query = {
  __typename?: 'Query';
  agent?: Maybe<Agent>;
  /** Reads a set of `Agent`. */
  agents?: Maybe<Array<Agent>>;
  /** Reads and enables pagination through a set of `Agent`. */
  agentsConnection?: Maybe<AgentsConnection>;
  chat?: Maybe<Chat>;
  chatMessage?: Maybe<ChatMessage>;
  /** Reads a set of `ChatMessage`. */
  chatMessages?: Maybe<Array<ChatMessage>>;
  /** Reads and enables pagination through a set of `ChatMessage`. */
  chatMessagesConnection?: Maybe<ChatMessagesConnection>;
  /** Reads a set of `Chat`. */
  chats?: Maybe<Array<Chat>>;
  /** Reads and enables pagination through a set of `Chat`. */
  chatsConnection?: Maybe<ChatsConnection>;
  comment?: Maybe<Comment>;
  /** Reads a set of `Comment`. */
  comments?: Maybe<Array<Comment>>;
  /** Reads and enables pagination through a set of `Comment`. */
  commentsConnection?: Maybe<CommentsConnection>;
  document?: Maybe<Document>;
  /** Reads a set of `Document`. */
  documents?: Maybe<Array<Document>>;
  /** Reads and enables pagination through a set of `Document`. */
  documentsConnection?: Maybe<DocumentsConnection>;
  initiative?: Maybe<Initiative>;
  /** Reads a set of `Initiative`. */
  initiatives?: Maybe<Array<Initiative>>;
  /** Reads and enables pagination through a set of `Initiative`. */
  initiativesConnection?: Maybe<InitiativesConnection>;
  metric?: Maybe<Metric>;
  /** Reads a set of `Metric`. */
  metrics?: Maybe<Array<Metric>>;
  /** Reads and enables pagination through a set of `Metric`. */
  metricsConnection?: Maybe<MetricsConnection>;
  project?: Maybe<Project>;
  /** Reads a set of `Project`. */
  projects?: Maybe<Array<Project>>;
  /** Reads and enables pagination through a set of `Project`. */
  projectsConnection?: Maybe<ProjectsConnection>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  task?: Maybe<Task>;
  /** Reads a set of `Task`. */
  tasks?: Maybe<Array<Task>>;
  /** Reads and enables pagination through a set of `Task`. */
  tasksConnection?: Maybe<TasksConnection>;
  teamMember?: Maybe<TeamMember>;
  teamMemberByEmail?: Maybe<TeamMember>;
  /** Reads a set of `TeamMember`. */
  teamMembers?: Maybe<Array<TeamMember>>;
  /** Reads and enables pagination through a set of `TeamMember`. */
  teamMembersConnection?: Maybe<TeamMembersConnection>;
  valueProposition?: Maybe<ValueProposition>;
  /** Reads a set of `ValueProposition`. */
  valuePropositions?: Maybe<Array<ValueProposition>>;
  /** Reads and enables pagination through a set of `ValueProposition`. */
  valuePropositionsConnection?: Maybe<ValuePropositionsConnection>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAgentArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAgentsArgs = {
  condition?: InputMaybe<AgentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AgentsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAgentsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AgentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AgentsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryChatArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryChatMessageArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryChatMessagesArgs = {
  condition?: InputMaybe<ChatMessageCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatMessagesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryChatMessagesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ChatMessageCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatMessagesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryChatsArgs = {
  condition?: InputMaybe<ChatCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryChatsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ChatCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCommentArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCommentsArgs = {
  condition?: InputMaybe<CommentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCommentsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CommentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryDocumentArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDocumentsArgs = {
  condition?: InputMaybe<DocumentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DocumentsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryDocumentsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<DocumentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DocumentsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryInitiativeArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryInitiativesArgs = {
  condition?: InputMaybe<InitiativeCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InitiativesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryInitiativesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<InitiativeCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InitiativesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryMetricArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMetricsArgs = {
  condition?: InputMaybe<MetricCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MetricsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryMetricsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MetricCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MetricsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryProjectArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryProjectsArgs = {
  condition?: InputMaybe<ProjectCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ProjectCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryTaskArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTasksArgs = {
  condition?: InputMaybe<TaskCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryTasksConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TaskCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryTeamMemberArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTeamMemberByEmailArgs = {
  email: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTeamMembersArgs = {
  condition?: InputMaybe<TeamMemberCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TeamMembersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryTeamMembersConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TeamMemberCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TeamMembersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryValuePropositionArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryValuePropositionsArgs = {
  condition?: InputMaybe<ValuePropositionCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ValuePropositionsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
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

/** A condition to be used against `Task` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type TaskCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `Task` */
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

/** Represents an update to a `Task`. Fields that are set will be updated. */
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

/** A connection to a list of `Task` values. */
export type TasksConnection = {
  __typename?: 'TasksConnection';
  /** A list of edges which contains the `Task` and cursor to aid in pagination. */
  edges: Array<TasksEdge>;
  /** A list of `Task` objects. */
  nodes: Array<Task>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Task` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Task` edge in the connection. */
export type TasksEdge = {
  __typename?: 'TasksEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Task` at the end of the edge. */
  node: Task;
};

/** Methods to use when ordering `Task`. */
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

/**
 * A condition to be used against `TeamMember` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type TeamMemberCondition = {
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `TeamMember` */
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

/** Represents an update to a `TeamMember`. Fields that are set will be updated. */
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

/** A connection to a list of `TeamMember` values. */
export type TeamMembersConnection = {
  __typename?: 'TeamMembersConnection';
  /** A list of edges which contains the `TeamMember` and cursor to aid in pagination. */
  edges: Array<TeamMembersEdge>;
  /** A list of `TeamMember` objects. */
  nodes: Array<TeamMember>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `TeamMember` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `TeamMember` edge in the connection. */
export type TeamMembersEdge = {
  __typename?: 'TeamMembersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `TeamMember` at the end of the edge. */
  node: TeamMember;
};

/** Methods to use when ordering `TeamMember`. */
export enum TeamMembersOrderBy {
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** All input for the `updateAgent` mutation. */
export type UpdateAgentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Agent` being updated. */
  patch: AgentPatch;
};

/** The output of our update `Agent` mutation. */
export type UpdateAgentPayload = {
  __typename?: 'UpdateAgentPayload';
  /** The `Agent` that was updated by this mutation. */
  agent?: Maybe<Agent>;
  /** An edge for our `Agent`. May be used by Relay 1. */
  agentEdge?: Maybe<AgentsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Agent` mutation. */
export type UpdateAgentPayloadAgentEdgeArgs = {
  orderBy?: InputMaybe<Array<AgentsOrderBy>>;
};

/** All input for the `updateChat` mutation. */
export type UpdateChatInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Chat` being updated. */
  patch: ChatPatch;
};

/** All input for the `updateChatMessage` mutation. */
export type UpdateChatMessageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `ChatMessage` being updated. */
  patch: ChatMessagePatch;
};

/** The output of our update `ChatMessage` mutation. */
export type UpdateChatMessagePayload = {
  __typename?: 'UpdateChatMessagePayload';
  /** The `ChatMessage` that was updated by this mutation. */
  chatMessage?: Maybe<ChatMessage>;
  /** An edge for our `ChatMessage`. May be used by Relay 1. */
  chatMessageEdge?: Maybe<ChatMessagesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `ChatMessage` mutation. */
export type UpdateChatMessagePayloadChatMessageEdgeArgs = {
  orderBy?: InputMaybe<Array<ChatMessagesOrderBy>>;
};

/** The output of our update `Chat` mutation. */
export type UpdateChatPayload = {
  __typename?: 'UpdateChatPayload';
  /** The `Chat` that was updated by this mutation. */
  chat?: Maybe<Chat>;
  /** An edge for our `Chat`. May be used by Relay 1. */
  chatEdge?: Maybe<ChatsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Chat` mutation. */
export type UpdateChatPayloadChatEdgeArgs = {
  orderBy?: InputMaybe<Array<ChatsOrderBy>>;
};

/** All input for the `updateComment` mutation. */
export type UpdateCommentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Comment` being updated. */
  patch: CommentPatch;
};

/** The output of our update `Comment` mutation. */
export type UpdateCommentPayload = {
  __typename?: 'UpdateCommentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Comment` that was updated by this mutation. */
  comment?: Maybe<Comment>;
  /** An edge for our `Comment`. May be used by Relay 1. */
  commentEdge?: Maybe<CommentsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Comment` mutation. */
export type UpdateCommentPayloadCommentEdgeArgs = {
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};

/** All input for the `updateDocument` mutation. */
export type UpdateDocumentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Document` being updated. */
  patch: DocumentPatch;
};

/** The output of our update `Document` mutation. */
export type UpdateDocumentPayload = {
  __typename?: 'UpdateDocumentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Document` that was updated by this mutation. */
  document?: Maybe<Document>;
  /** An edge for our `Document`. May be used by Relay 1. */
  documentEdge?: Maybe<DocumentsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Document` mutation. */
export type UpdateDocumentPayloadDocumentEdgeArgs = {
  orderBy?: InputMaybe<Array<DocumentsOrderBy>>;
};

/** All input for the `updateInitiative` mutation. */
export type UpdateInitiativeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Initiative` being updated. */
  patch: InitiativePatch;
};

/** The output of our update `Initiative` mutation. */
export type UpdateInitiativePayload = {
  __typename?: 'UpdateInitiativePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Initiative` that was updated by this mutation. */
  initiative?: Maybe<Initiative>;
  /** An edge for our `Initiative`. May be used by Relay 1. */
  initiativeEdge?: Maybe<InitiativesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Initiative` mutation. */
export type UpdateInitiativePayloadInitiativeEdgeArgs = {
  orderBy?: InputMaybe<Array<InitiativesOrderBy>>;
};

/** All input for the `updateMetric` mutation. */
export type UpdateMetricInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Metric` being updated. */
  patch: MetricPatch;
};

/** The output of our update `Metric` mutation. */
export type UpdateMetricPayload = {
  __typename?: 'UpdateMetricPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Metric` that was updated by this mutation. */
  metric?: Maybe<Metric>;
  /** An edge for our `Metric`. May be used by Relay 1. */
  metricEdge?: Maybe<MetricsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Metric` mutation. */
export type UpdateMetricPayloadMetricEdgeArgs = {
  orderBy?: InputMaybe<Array<MetricsOrderBy>>;
};

/** All input for the `updateProject` mutation. */
export type UpdateProjectInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Project` being updated. */
  patch: ProjectPatch;
};

/** The output of our update `Project` mutation. */
export type UpdateProjectPayload = {
  __typename?: 'UpdateProjectPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Project` that was updated by this mutation. */
  project?: Maybe<Project>;
  /** An edge for our `Project`. May be used by Relay 1. */
  projectEdge?: Maybe<ProjectsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Project` mutation. */
export type UpdateProjectPayloadProjectEdgeArgs = {
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
};

/** All input for the `updateTask` mutation. */
export type UpdateTaskInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Task` being updated. */
  patch: TaskPatch;
};

/** The output of our update `Task` mutation. */
export type UpdateTaskPayload = {
  __typename?: 'UpdateTaskPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Task` that was updated by this mutation. */
  task?: Maybe<Task>;
  /** An edge for our `Task`. May be used by Relay 1. */
  taskEdge?: Maybe<TasksEdge>;
};


/** The output of our update `Task` mutation. */
export type UpdateTaskPayloadTaskEdgeArgs = {
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};

/** All input for the `updateTeamMemberByEmail` mutation. */
export type UpdateTeamMemberByEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `TeamMember` being updated. */
  patch: TeamMemberPatch;
};

/** All input for the `updateTeamMember` mutation. */
export type UpdateTeamMemberInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `TeamMember` being updated. */
  patch: TeamMemberPatch;
};

/** The output of our update `TeamMember` mutation. */
export type UpdateTeamMemberPayload = {
  __typename?: 'UpdateTeamMemberPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `TeamMember` that was updated by this mutation. */
  teamMember?: Maybe<TeamMember>;
  /** An edge for our `TeamMember`. May be used by Relay 1. */
  teamMemberEdge?: Maybe<TeamMembersEdge>;
};


/** The output of our update `TeamMember` mutation. */
export type UpdateTeamMemberPayloadTeamMemberEdgeArgs = {
  orderBy?: InputMaybe<Array<TeamMembersOrderBy>>;
};

/** All input for the `updateValueProposition` mutation. */
export type UpdateValuePropositionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `ValueProposition` being updated. */
  patch: ValuePropositionPatch;
};

/** The output of our update `ValueProposition` mutation. */
export type UpdateValuePropositionPayload = {
  __typename?: 'UpdateValuePropositionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `ValueProposition` that was updated by this mutation. */
  valueProposition?: Maybe<ValueProposition>;
  /** An edge for our `ValueProposition`. May be used by Relay 1. */
  valuePropositionEdge?: Maybe<ValuePropositionsEdge>;
};


/** The output of our update `ValueProposition` mutation. */
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

/**
 * A condition to be used against `ValueProposition` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type ValuePropositionCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `ValueProposition` */
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

/** Represents an update to a `ValueProposition`. Fields that are set will be updated. */
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

/** A connection to a list of `ValueProposition` values. */
export type ValuePropositionsConnection = {
  __typename?: 'ValuePropositionsConnection';
  /** A list of edges which contains the `ValueProposition` and cursor to aid in pagination. */
  edges: Array<ValuePropositionsEdge>;
  /** A list of `ValueProposition` objects. */
  nodes: Array<ValueProposition>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ValueProposition` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `ValueProposition` edge in the connection. */
export type ValuePropositionsEdge = {
  __typename?: 'ValuePropositionsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `ValueProposition` at the end of the edge. */
  node: ValueProposition;
};

/** Methods to use when ordering `ValueProposition`. */
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
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A location in a connection that can be used for resuming pagination. */
  Cursor: { input: any; output: any; }
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: { input: any; output: any; }
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: { input: any; output: any; }
};

export type Agent = {
  __typename?: 'Agent';
  handle: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  status: Scalars['String']['output'];
};

/** A condition to be used against `Agent` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type AgentCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `Agent` */
export type AgentInput = {
  handle: Scalars['String']['input'];
  id?: InputMaybe<Scalars['UUID']['input']>;
  name: Scalars['String']['input'];
  status: Scalars['String']['input'];
};

/** Represents an update to a `Agent`. Fields that are set will be updated. */
export type AgentPatch = {
  handle?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `Agent` values. */
export type AgentsConnection = {
  __typename?: 'AgentsConnection';
  /** A list of edges which contains the `Agent` and cursor to aid in pagination. */
  edges: Array<AgentsEdge>;
  /** A list of `Agent` objects. */
  nodes: Array<Agent>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Agent` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Agent` edge in the connection. */
export type AgentsEdge = {
  __typename?: 'AgentsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Agent` at the end of the edge. */
  node: Agent;
};

/** Methods to use when ordering `Agent`. */
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

/** A condition to be used against `Chat` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ChatCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `Chat` */
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

/**
 * A condition to be used against `ChatMessage` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type ChatMessageCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `ChatMessage` */
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

/** Represents an update to a `ChatMessage`. Fields that are set will be updated. */
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

/** A connection to a list of `ChatMessage` values. */
export type ChatMessagesConnection = {
  __typename?: 'ChatMessagesConnection';
  /** A list of edges which contains the `ChatMessage` and cursor to aid in pagination. */
  edges: Array<ChatMessagesEdge>;
  /** A list of `ChatMessage` objects. */
  nodes: Array<ChatMessage>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ChatMessage` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `ChatMessage` edge in the connection. */
export type ChatMessagesEdge = {
  __typename?: 'ChatMessagesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `ChatMessage` at the end of the edge. */
  node: ChatMessage;
};

/** Methods to use when ordering `ChatMessage`. */
export enum ChatMessagesOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** Represents an update to a `Chat`. Fields that are set will be updated. */
export type ChatPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  lastMessageAt?: InputMaybe<Scalars['Datetime']['input']>;
  participantId?: InputMaybe<Scalars['String']['input']>;
  participantType?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** A connection to a list of `Chat` values. */
export type ChatsConnection = {
  __typename?: 'ChatsConnection';
  /** A list of edges which contains the `Chat` and cursor to aid in pagination. */
  edges: Array<ChatsEdge>;
  /** A list of `Chat` objects. */
  nodes: Array<Chat>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Chat` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Chat` edge in the connection. */
export type ChatsEdge = {
  __typename?: 'ChatsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Chat` at the end of the edge. */
  node: Chat;
};

/** Methods to use when ordering `Chat`. */
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

/** A condition to be used against `Comment` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type CommentCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `Comment` */
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

/** Represents an update to a `Comment`. Fields that are set will be updated. */
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

/** A connection to a list of `Comment` values. */
export type CommentsConnection = {
  __typename?: 'CommentsConnection';
  /** A list of edges which contains the `Comment` and cursor to aid in pagination. */
  edges: Array<CommentsEdge>;
  /** A list of `Comment` objects. */
  nodes: Array<Comment>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Comment` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Comment` edge in the connection. */
export type CommentsEdge = {
  __typename?: 'CommentsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Comment` at the end of the edge. */
  node: Comment;
};

/** Methods to use when ordering `Comment`. */
export enum CommentsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** All input for the create `Agent` mutation. */
export type CreateAgentInput = {
  /** The `Agent` to be created by this mutation. */
  agent: AgentInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `Agent` mutation. */
export type CreateAgentPayload = {
  __typename?: 'CreateAgentPayload';
  /** The `Agent` that was created by this mutation. */
  agent?: Maybe<Agent>;
  /** An edge for our `Agent`. May be used by Relay 1. */
  agentEdge?: Maybe<AgentsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Agent` mutation. */
export type CreateAgentPayloadAgentEdgeArgs = {
  orderBy?: InputMaybe<Array<AgentsOrderBy>>;
};

/** All input for the create `Chat` mutation. */
export type CreateChatInput = {
  /** The `Chat` to be created by this mutation. */
  chat: ChatInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** All input for the create `ChatMessage` mutation. */
export type CreateChatMessageInput = {
  /** The `ChatMessage` to be created by this mutation. */
  chatMessage: ChatMessageInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `ChatMessage` mutation. */
export type CreateChatMessagePayload = {
  __typename?: 'CreateChatMessagePayload';
  /** The `ChatMessage` that was created by this mutation. */
  chatMessage?: Maybe<ChatMessage>;
  /** An edge for our `ChatMessage`. May be used by Relay 1. */
  chatMessageEdge?: Maybe<ChatMessagesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `ChatMessage` mutation. */
export type CreateChatMessagePayloadChatMessageEdgeArgs = {
  orderBy?: InputMaybe<Array<ChatMessagesOrderBy>>;
};

/** The output of our create `Chat` mutation. */
export type CreateChatPayload = {
  __typename?: 'CreateChatPayload';
  /** The `Chat` that was created by this mutation. */
  chat?: Maybe<Chat>;
  /** An edge for our `Chat`. May be used by Relay 1. */
  chatEdge?: Maybe<ChatsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Chat` mutation. */
export type CreateChatPayloadChatEdgeArgs = {
  orderBy?: InputMaybe<Array<ChatsOrderBy>>;
};

/** All input for the create `Comment` mutation. */
export type CreateCommentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Comment` to be created by this mutation. */
  comment: CommentInput;
};

/** The output of our create `Comment` mutation. */
export type CreateCommentPayload = {
  __typename?: 'CreateCommentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Comment` that was created by this mutation. */
  comment?: Maybe<Comment>;
  /** An edge for our `Comment`. May be used by Relay 1. */
  commentEdge?: Maybe<CommentsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Comment` mutation. */
export type CreateCommentPayloadCommentEdgeArgs = {
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};

/** All input for the create `Document` mutation. */
export type CreateDocumentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Document` to be created by this mutation. */
  document: DocumentInput;
};

/** The output of our create `Document` mutation. */
export type CreateDocumentPayload = {
  __typename?: 'CreateDocumentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Document` that was created by this mutation. */
  document?: Maybe<Document>;
  /** An edge for our `Document`. May be used by Relay 1. */
  documentEdge?: Maybe<DocumentsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Document` mutation. */
export type CreateDocumentPayloadDocumentEdgeArgs = {
  orderBy?: InputMaybe<Array<DocumentsOrderBy>>;
};

/** All input for the create `Initiative` mutation. */
export type CreateInitiativeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Initiative` to be created by this mutation. */
  initiative: InitiativeInput;
};

/** The output of our create `Initiative` mutation. */
export type CreateInitiativePayload = {
  __typename?: 'CreateInitiativePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Initiative` that was created by this mutation. */
  initiative?: Maybe<Initiative>;
  /** An edge for our `Initiative`. May be used by Relay 1. */
  initiativeEdge?: Maybe<InitiativesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Initiative` mutation. */
export type CreateInitiativePayloadInitiativeEdgeArgs = {
  orderBy?: InputMaybe<Array<InitiativesOrderBy>>;
};

/** All input for the create `Metric` mutation. */
export type CreateMetricInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Metric` to be created by this mutation. */
  metric: MetricInput;
};

/** The output of our create `Metric` mutation. */
export type CreateMetricPayload = {
  __typename?: 'CreateMetricPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Metric` that was created by this mutation. */
  metric?: Maybe<Metric>;
  /** An edge for our `Metric`. May be used by Relay 1. */
  metricEdge?: Maybe<MetricsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Metric` mutation. */
export type CreateMetricPayloadMetricEdgeArgs = {
  orderBy?: InputMaybe<Array<MetricsOrderBy>>;
};

/** All input for the create `Project` mutation. */
export type CreateProjectInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Project` to be created by this mutation. */
  project: ProjectInput;
};

/** The output of our create `Project` mutation. */
export type CreateProjectPayload = {
  __typename?: 'CreateProjectPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Project` that was created by this mutation. */
  project?: Maybe<Project>;
  /** An edge for our `Project`. May be used by Relay 1. */
  projectEdge?: Maybe<ProjectsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Project` mutation. */
export type CreateProjectPayloadProjectEdgeArgs = {
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
};

/** All input for the create `Task` mutation. */
export type CreateTaskInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Task` to be created by this mutation. */
  task: TaskInput;
};

/** The output of our create `Task` mutation. */
export type CreateTaskPayload = {
  __typename?: 'CreateTaskPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Task` that was created by this mutation. */
  task?: Maybe<Task>;
  /** An edge for our `Task`. May be used by Relay 1. */
  taskEdge?: Maybe<TasksEdge>;
};


/** The output of our create `Task` mutation. */
export type CreateTaskPayloadTaskEdgeArgs = {
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};

/** All input for the create `TeamMember` mutation. */
export type CreateTeamMemberInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `TeamMember` to be created by this mutation. */
  teamMember: TeamMemberInput;
};

/** The output of our create `TeamMember` mutation. */
export type CreateTeamMemberPayload = {
  __typename?: 'CreateTeamMemberPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `TeamMember` that was created by this mutation. */
  teamMember?: Maybe<TeamMember>;
  /** An edge for our `TeamMember`. May be used by Relay 1. */
  teamMemberEdge?: Maybe<TeamMembersEdge>;
};


/** The output of our create `TeamMember` mutation. */
export type CreateTeamMemberPayloadTeamMemberEdgeArgs = {
  orderBy?: InputMaybe<Array<TeamMembersOrderBy>>;
};

/** All input for the create `ValueProposition` mutation. */
export type CreateValuePropositionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `ValueProposition` to be created by this mutation. */
  valueProposition: ValuePropositionInput;
};

/** The output of our create `ValueProposition` mutation. */
export type CreateValuePropositionPayload = {
  __typename?: 'CreateValuePropositionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `ValueProposition` that was created by this mutation. */
  valueProposition?: Maybe<ValueProposition>;
  /** An edge for our `ValueProposition`. May be used by Relay 1. */
  valuePropositionEdge?: Maybe<ValuePropositionsEdge>;
};


/** The output of our create `ValueProposition` mutation. */
export type CreateValuePropositionPayloadValuePropositionEdgeArgs = {
  orderBy?: InputMaybe<Array<ValuePropositionsOrderBy>>;
};

/** All input for the `deleteAgent` mutation. */
export type DeleteAgentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Agent` mutation. */
export type DeleteAgentPayload = {
  __typename?: 'DeleteAgentPayload';
  /** The `Agent` that was deleted by this mutation. */
  agent?: Maybe<Agent>;
  /** An edge for our `Agent`. May be used by Relay 1. */
  agentEdge?: Maybe<AgentsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedAgentNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Agent` mutation. */
export type DeleteAgentPayloadAgentEdgeArgs = {
  orderBy?: InputMaybe<Array<AgentsOrderBy>>;
};

/** All input for the `deleteChat` mutation. */
export type DeleteChatInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** All input for the `deleteChatMessage` mutation. */
export type DeleteChatMessageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `ChatMessage` mutation. */
export type DeleteChatMessagePayload = {
  __typename?: 'DeleteChatMessagePayload';
  /** The `ChatMessage` that was deleted by this mutation. */
  chatMessage?: Maybe<ChatMessage>;
  /** An edge for our `ChatMessage`. May be used by Relay 1. */
  chatMessageEdge?: Maybe<ChatMessagesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedChatMessageNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `ChatMessage` mutation. */
export type DeleteChatMessagePayloadChatMessageEdgeArgs = {
  orderBy?: InputMaybe<Array<ChatMessagesOrderBy>>;
};

/** The output of our delete `Chat` mutation. */
export type DeleteChatPayload = {
  __typename?: 'DeleteChatPayload';
  /** The `Chat` that was deleted by this mutation. */
  chat?: Maybe<Chat>;
  /** An edge for our `Chat`. May be used by Relay 1. */
  chatEdge?: Maybe<ChatsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedChatNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Chat` mutation. */
export type DeleteChatPayloadChatEdgeArgs = {
  orderBy?: InputMaybe<Array<ChatsOrderBy>>;
};

/** All input for the `deleteComment` mutation. */
export type DeleteCommentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Comment` mutation. */
export type DeleteCommentPayload = {
  __typename?: 'DeleteCommentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Comment` that was deleted by this mutation. */
  comment?: Maybe<Comment>;
  /** An edge for our `Comment`. May be used by Relay 1. */
  commentEdge?: Maybe<CommentsEdge>;
  deletedCommentNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Comment` mutation. */
export type DeleteCommentPayloadCommentEdgeArgs = {
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};

/** All input for the `deleteDocument` mutation. */
export type DeleteDocumentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Document` mutation. */
export type DeleteDocumentPayload = {
  __typename?: 'DeleteDocumentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedDocumentNodeId?: Maybe<Scalars['ID']['output']>;
  /** The `Document` that was deleted by this mutation. */
  document?: Maybe<Document>;
  /** An edge for our `Document`. May be used by Relay 1. */
  documentEdge?: Maybe<DocumentsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Document` mutation. */
export type DeleteDocumentPayloadDocumentEdgeArgs = {
  orderBy?: InputMaybe<Array<DocumentsOrderBy>>;
};

/** All input for the `deleteInitiative` mutation. */
export type DeleteInitiativeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Initiative` mutation. */
export type DeleteInitiativePayload = {
  __typename?: 'DeleteInitiativePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedInitiativeNodeId?: Maybe<Scalars['ID']['output']>;
  /** The `Initiative` that was deleted by this mutation. */
  initiative?: Maybe<Initiative>;
  /** An edge for our `Initiative`. May be used by Relay 1. */
  initiativeEdge?: Maybe<InitiativesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Initiative` mutation. */
export type DeleteInitiativePayloadInitiativeEdgeArgs = {
  orderBy?: InputMaybe<Array<InitiativesOrderBy>>;
};

/** All input for the `deleteMetric` mutation. */
export type DeleteMetricInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Metric` mutation. */
export type DeleteMetricPayload = {
  __typename?: 'DeleteMetricPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedMetricNodeId?: Maybe<Scalars['ID']['output']>;
  /** The `Metric` that was deleted by this mutation. */
  metric?: Maybe<Metric>;
  /** An edge for our `Metric`. May be used by Relay 1. */
  metricEdge?: Maybe<MetricsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Metric` mutation. */
export type DeleteMetricPayloadMetricEdgeArgs = {
  orderBy?: InputMaybe<Array<MetricsOrderBy>>;
};

/** All input for the `deleteProject` mutation. */
export type DeleteProjectInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Project` mutation. */
export type DeleteProjectPayload = {
  __typename?: 'DeleteProjectPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedProjectNodeId?: Maybe<Scalars['ID']['output']>;
  /** The `Project` that was deleted by this mutation. */
  project?: Maybe<Project>;
  /** An edge for our `Project`. May be used by Relay 1. */
  projectEdge?: Maybe<ProjectsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Project` mutation. */
export type DeleteProjectPayloadProjectEdgeArgs = {
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
};

/** All input for the `deleteTask` mutation. */
export type DeleteTaskInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `Task` mutation. */
export type DeleteTaskPayload = {
  __typename?: 'DeleteTaskPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedTaskNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Task` that was deleted by this mutation. */
  task?: Maybe<Task>;
  /** An edge for our `Task`. May be used by Relay 1. */
  taskEdge?: Maybe<TasksEdge>;
};


/** The output of our delete `Task` mutation. */
export type DeleteTaskPayloadTaskEdgeArgs = {
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};

/** All input for the `deleteTeamMemberByEmail` mutation. */
export type DeleteTeamMemberByEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
};

/** All input for the `deleteTeamMember` mutation. */
export type DeleteTeamMemberInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `TeamMember` mutation. */
export type DeleteTeamMemberPayload = {
  __typename?: 'DeleteTeamMemberPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedTeamMemberNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `TeamMember` that was deleted by this mutation. */
  teamMember?: Maybe<TeamMember>;
  /** An edge for our `TeamMember`. May be used by Relay 1. */
  teamMemberEdge?: Maybe<TeamMembersEdge>;
};


/** The output of our delete `TeamMember` mutation. */
export type DeleteTeamMemberPayloadTeamMemberEdgeArgs = {
  orderBy?: InputMaybe<Array<TeamMembersOrderBy>>;
};

/** All input for the `deleteValueProposition` mutation. */
export type DeleteValuePropositionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
};

/** The output of our delete `ValueProposition` mutation. */
export type DeleteValuePropositionPayload = {
  __typename?: 'DeleteValuePropositionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedValuePropositionNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `ValueProposition` that was deleted by this mutation. */
  valueProposition?: Maybe<ValueProposition>;
  /** An edge for our `ValueProposition`. May be used by Relay 1. */
  valuePropositionEdge?: Maybe<ValuePropositionsEdge>;
};


/** The output of our delete `ValueProposition` mutation. */
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

/**
 * A condition to be used against `Document` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type DocumentCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `Document` */
export type DocumentInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  projectId: Scalars['UUID']['input'];
  title: Scalars['String']['input'];
  type: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Represents an update to a `Document`. Fields that are set will be updated. */
export type DocumentPatch = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  projectId?: InputMaybe<Scalars['UUID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** A connection to a list of `Document` values. */
export type DocumentsConnection = {
  __typename?: 'DocumentsConnection';
  /** A list of edges which contains the `Document` and cursor to aid in pagination. */
  edges: Array<DocumentsEdge>;
  /** A list of `Document` objects. */
  nodes: Array<Document>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Document` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Document` edge in the connection. */
export type DocumentsEdge = {
  __typename?: 'DocumentsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Document` at the end of the edge. */
  node: Document;
};

/** Methods to use when ordering `Document`. */
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

/**
 * A condition to be used against `Initiative` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type InitiativeCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `Initiative` */
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

/** Represents an update to a `Initiative`. Fields that are set will be updated. */
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

/** A connection to a list of `Initiative` values. */
export type InitiativesConnection = {
  __typename?: 'InitiativesConnection';
  /** A list of edges which contains the `Initiative` and cursor to aid in pagination. */
  edges: Array<InitiativesEdge>;
  /** A list of `Initiative` objects. */
  nodes: Array<Initiative>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Initiative` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Initiative` edge in the connection. */
export type InitiativesEdge = {
  __typename?: 'InitiativesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Initiative` at the end of the edge. */
  node: Initiative;
};

/** Methods to use when ordering `Initiative`. */
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

/** A condition to be used against `Metric` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type MetricCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `Metric` */
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

/** Represents an update to a `Metric`. Fields that are set will be updated. */
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

/** A connection to a list of `Metric` values. */
export type MetricsConnection = {
  __typename?: 'MetricsConnection';
  /** A list of edges which contains the `Metric` and cursor to aid in pagination. */
  edges: Array<MetricsEdge>;
  /** A list of `Metric` objects. */
  nodes: Array<Metric>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Metric` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Metric` edge in the connection. */
export type MetricsEdge = {
  __typename?: 'MetricsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Metric` at the end of the edge. */
  node: Metric;
};

/** Methods to use when ordering `Metric`. */
export enum MetricsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `Agent`. */
  createAgent?: Maybe<CreateAgentPayload>;
  /** Creates a single `Chat`. */
  createChat?: Maybe<CreateChatPayload>;
  /** Creates a single `ChatMessage`. */
  createChatMessage?: Maybe<CreateChatMessagePayload>;
  /** Creates a single `Comment`. */
  createComment?: Maybe<CreateCommentPayload>;
  /** Creates a single `Document`. */
  createDocument?: Maybe<CreateDocumentPayload>;
  /** Creates a single `Initiative`. */
  createInitiative?: Maybe<CreateInitiativePayload>;
  /** Creates a single `Metric`. */
  createMetric?: Maybe<CreateMetricPayload>;
  /** Creates a single `Project`. */
  createProject?: Maybe<CreateProjectPayload>;
  /** Creates a single `Task`. */
  createTask?: Maybe<CreateTaskPayload>;
  /** Creates a single `TeamMember`. */
  createTeamMember?: Maybe<CreateTeamMemberPayload>;
  /** Creates a single `ValueProposition`. */
  createValueProposition?: Maybe<CreateValuePropositionPayload>;
  /** Deletes a single `Agent` using a unique key. */
  deleteAgent?: Maybe<DeleteAgentPayload>;
  /** Deletes a single `Chat` using a unique key. */
  deleteChat?: Maybe<DeleteChatPayload>;
  /** Deletes a single `ChatMessage` using a unique key. */
  deleteChatMessage?: Maybe<DeleteChatMessagePayload>;
  /** Deletes a single `Comment` using a unique key. */
  deleteComment?: Maybe<DeleteCommentPayload>;
  /** Deletes a single `Document` using a unique key. */
  deleteDocument?: Maybe<DeleteDocumentPayload>;
  /** Deletes a single `Initiative` using a unique key. */
  deleteInitiative?: Maybe<DeleteInitiativePayload>;
  /** Deletes a single `Metric` using a unique key. */
  deleteMetric?: Maybe<DeleteMetricPayload>;
  /** Deletes a single `Project` using a unique key. */
  deleteProject?: Maybe<DeleteProjectPayload>;
  /** Deletes a single `Task` using a unique key. */
  deleteTask?: Maybe<DeleteTaskPayload>;
  /** Deletes a single `TeamMember` using a unique key. */
  deleteTeamMember?: Maybe<DeleteTeamMemberPayload>;
  /** Deletes a single `TeamMember` using a unique key. */
  deleteTeamMemberByEmail?: Maybe<DeleteTeamMemberPayload>;
  /** Deletes a single `ValueProposition` using a unique key. */
  deleteValueProposition?: Maybe<DeleteValuePropositionPayload>;
  /** Updates a single `Agent` using a unique key and a patch. */
  updateAgent?: Maybe<UpdateAgentPayload>;
  /** Updates a single `Chat` using a unique key and a patch. */
  updateChat?: Maybe<UpdateChatPayload>;
  /** Updates a single `ChatMessage` using a unique key and a patch. */
  updateChatMessage?: Maybe<UpdateChatMessagePayload>;
  /** Updates a single `Comment` using a unique key and a patch. */
  updateComment?: Maybe<UpdateCommentPayload>;
  /** Updates a single `Document` using a unique key and a patch. */
  updateDocument?: Maybe<UpdateDocumentPayload>;
  /** Updates a single `Initiative` using a unique key and a patch. */
  updateInitiative?: Maybe<UpdateInitiativePayload>;
  /** Updates a single `Metric` using a unique key and a patch. */
  updateMetric?: Maybe<UpdateMetricPayload>;
  /** Updates a single `Project` using a unique key and a patch. */
  updateProject?: Maybe<UpdateProjectPayload>;
  /** Updates a single `Task` using a unique key and a patch. */
  updateTask?: Maybe<UpdateTaskPayload>;
  /** Updates a single `TeamMember` using a unique key and a patch. */
  updateTeamMember?: Maybe<UpdateTeamMemberPayload>;
  /** Updates a single `TeamMember` using a unique key and a patch. */
  updateTeamMemberByEmail?: Maybe<UpdateTeamMemberPayload>;
  /** Updates a single `ValueProposition` using a unique key and a patch. */
  updateValueProposition?: Maybe<UpdateValuePropositionPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateAgentArgs = {
  input: CreateAgentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateChatArgs = {
  input: CreateChatInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateChatMessageArgs = {
  input: CreateChatMessageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateCommentArgs = {
  input: CreateCommentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateDocumentArgs = {
  input: CreateDocumentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateInitiativeArgs = {
  input: CreateInitiativeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateMetricArgs = {
  input: CreateMetricInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateProjectArgs = {
  input: CreateProjectInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTaskArgs = {
  input: CreateTaskInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTeamMemberArgs = {
  input: CreateTeamMemberInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateValuePropositionArgs = {
  input: CreateValuePropositionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteAgentArgs = {
  input: DeleteAgentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteChatArgs = {
  input: DeleteChatInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteChatMessageArgs = {
  input: DeleteChatMessageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteCommentArgs = {
  input: DeleteCommentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDocumentArgs = {
  input: DeleteDocumentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteInitiativeArgs = {
  input: DeleteInitiativeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteMetricArgs = {
  input: DeleteMetricInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteProjectArgs = {
  input: DeleteProjectInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTaskArgs = {
  input: DeleteTaskInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTeamMemberArgs = {
  input: DeleteTeamMemberInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTeamMemberByEmailArgs = {
  input: DeleteTeamMemberByEmailInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteValuePropositionArgs = {
  input: DeleteValuePropositionInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateAgentArgs = {
  input: UpdateAgentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateChatArgs = {
  input: UpdateChatInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateChatMessageArgs = {
  input: UpdateChatMessageInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDocumentArgs = {
  input: UpdateDocumentInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateInitiativeArgs = {
  input: UpdateInitiativeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateMetricArgs = {
  input: UpdateMetricInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateProjectArgs = {
  input: UpdateProjectInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTaskArgs = {
  input: UpdateTaskInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTeamMemberArgs = {
  input: UpdateTeamMemberInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTeamMemberByEmailArgs = {
  input: UpdateTeamMemberByEmailInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateValuePropositionArgs = {
  input: UpdateValuePropositionInput;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['Cursor']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
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

/** A condition to be used against `Project` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type ProjectCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `Project` */
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

/** Represents an update to a `Project`. Fields that are set will be updated. */
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

/** A connection to a list of `Project` values. */
export type ProjectsConnection = {
  __typename?: 'ProjectsConnection';
  /** A list of edges which contains the `Project` and cursor to aid in pagination. */
  edges: Array<ProjectsEdge>;
  /** A list of `Project` objects. */
  nodes: Array<Project>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Project` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Project` edge in the connection. */
export type ProjectsEdge = {
  __typename?: 'ProjectsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Project` at the end of the edge. */
  node: Project;
};

/** Methods to use when ordering `Project`. */
export enum ProjectsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** The root query type which gives access points into the data universe. */
export type Query = {
  __typename?: 'Query';
  agent?: Maybe<Agent>;
  /** Reads a set of `Agent`. */
  agents?: Maybe<Array<Agent>>;
  /** Reads and enables pagination through a set of `Agent`. */
  agentsConnection?: Maybe<AgentsConnection>;
  chat?: Maybe<Chat>;
  chatMessage?: Maybe<ChatMessage>;
  /** Reads a set of `ChatMessage`. */
  chatMessages?: Maybe<Array<ChatMessage>>;
  /** Reads and enables pagination through a set of `ChatMessage`. */
  chatMessagesConnection?: Maybe<ChatMessagesConnection>;
  /** Reads a set of `Chat`. */
  chats?: Maybe<Array<Chat>>;
  /** Reads and enables pagination through a set of `Chat`. */
  chatsConnection?: Maybe<ChatsConnection>;
  comment?: Maybe<Comment>;
  /** Reads a set of `Comment`. */
  comments?: Maybe<Array<Comment>>;
  /** Reads and enables pagination through a set of `Comment`. */
  commentsConnection?: Maybe<CommentsConnection>;
  document?: Maybe<Document>;
  /** Reads a set of `Document`. */
  documents?: Maybe<Array<Document>>;
  /** Reads and enables pagination through a set of `Document`. */
  documentsConnection?: Maybe<DocumentsConnection>;
  initiative?: Maybe<Initiative>;
  /** Reads a set of `Initiative`. */
  initiatives?: Maybe<Array<Initiative>>;
  /** Reads and enables pagination through a set of `Initiative`. */
  initiativesConnection?: Maybe<InitiativesConnection>;
  metric?: Maybe<Metric>;
  /** Reads a set of `Metric`. */
  metrics?: Maybe<Array<Metric>>;
  /** Reads and enables pagination through a set of `Metric`. */
  metricsConnection?: Maybe<MetricsConnection>;
  project?: Maybe<Project>;
  /** Reads a set of `Project`. */
  projects?: Maybe<Array<Project>>;
  /** Reads and enables pagination through a set of `Project`. */
  projectsConnection?: Maybe<ProjectsConnection>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  task?: Maybe<Task>;
  /** Reads a set of `Task`. */
  tasks?: Maybe<Array<Task>>;
  /** Reads and enables pagination through a set of `Task`. */
  tasksConnection?: Maybe<TasksConnection>;
  teamMember?: Maybe<TeamMember>;
  teamMemberByEmail?: Maybe<TeamMember>;
  /** Reads a set of `TeamMember`. */
  teamMembers?: Maybe<Array<TeamMember>>;
  /** Reads and enables pagination through a set of `TeamMember`. */
  teamMembersConnection?: Maybe<TeamMembersConnection>;
  valueProposition?: Maybe<ValueProposition>;
  /** Reads a set of `ValueProposition`. */
  valuePropositions?: Maybe<Array<ValueProposition>>;
  /** Reads and enables pagination through a set of `ValueProposition`. */
  valuePropositionsConnection?: Maybe<ValuePropositionsConnection>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAgentArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAgentsArgs = {
  condition?: InputMaybe<AgentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AgentsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAgentsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AgentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AgentsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryChatArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryChatMessageArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryChatMessagesArgs = {
  condition?: InputMaybe<ChatMessageCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatMessagesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryChatMessagesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ChatMessageCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatMessagesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryChatsArgs = {
  condition?: InputMaybe<ChatCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryChatsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ChatCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ChatsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCommentArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryCommentsArgs = {
  condition?: InputMaybe<CommentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryCommentsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<CommentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryDocumentArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDocumentsArgs = {
  condition?: InputMaybe<DocumentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DocumentsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryDocumentsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<DocumentCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DocumentsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryInitiativeArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryInitiativesArgs = {
  condition?: InputMaybe<InitiativeCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InitiativesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryInitiativesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<InitiativeCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<InitiativesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryMetricArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryMetricsArgs = {
  condition?: InputMaybe<MetricCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MetricsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryMetricsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<MetricCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MetricsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryProjectArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryProjectsArgs = {
  condition?: InputMaybe<ProjectCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryProjectsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<ProjectCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryTaskArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTasksArgs = {
  condition?: InputMaybe<TaskCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryTasksConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TaskCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryTeamMemberArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTeamMemberByEmailArgs = {
  email: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTeamMembersArgs = {
  condition?: InputMaybe<TeamMemberCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TeamMembersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryTeamMembersConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TeamMemberCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TeamMembersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryValuePropositionArgs = {
  id: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryValuePropositionsArgs = {
  condition?: InputMaybe<ValuePropositionCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<ValuePropositionsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
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

/** A condition to be used against `Task` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type TaskCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `Task` */
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

/** Represents an update to a `Task`. Fields that are set will be updated. */
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

/** A connection to a list of `Task` values. */
export type TasksConnection = {
  __typename?: 'TasksConnection';
  /** A list of edges which contains the `Task` and cursor to aid in pagination. */
  edges: Array<TasksEdge>;
  /** A list of `Task` objects. */
  nodes: Array<Task>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Task` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Task` edge in the connection. */
export type TasksEdge = {
  __typename?: 'TasksEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Task` at the end of the edge. */
  node: Task;
};

/** Methods to use when ordering `Task`. */
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

/**
 * A condition to be used against `TeamMember` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type TeamMemberCondition = {
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `TeamMember` */
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

/** Represents an update to a `TeamMember`. Fields that are set will be updated. */
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

/** A connection to a list of `TeamMember` values. */
export type TeamMembersConnection = {
  __typename?: 'TeamMembersConnection';
  /** A list of edges which contains the `TeamMember` and cursor to aid in pagination. */
  edges: Array<TeamMembersEdge>;
  /** A list of `TeamMember` objects. */
  nodes: Array<TeamMember>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `TeamMember` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `TeamMember` edge in the connection. */
export type TeamMembersEdge = {
  __typename?: 'TeamMembersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `TeamMember` at the end of the edge. */
  node: TeamMember;
};

/** Methods to use when ordering `TeamMember`. */
export enum TeamMembersOrderBy {
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** All input for the `updateAgent` mutation. */
export type UpdateAgentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Agent` being updated. */
  patch: AgentPatch;
};

/** The output of our update `Agent` mutation. */
export type UpdateAgentPayload = {
  __typename?: 'UpdateAgentPayload';
  /** The `Agent` that was updated by this mutation. */
  agent?: Maybe<Agent>;
  /** An edge for our `Agent`. May be used by Relay 1. */
  agentEdge?: Maybe<AgentsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Agent` mutation. */
export type UpdateAgentPayloadAgentEdgeArgs = {
  orderBy?: InputMaybe<Array<AgentsOrderBy>>;
};

/** All input for the `updateChat` mutation. */
export type UpdateChatInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Chat` being updated. */
  patch: ChatPatch;
};

/** All input for the `updateChatMessage` mutation. */
export type UpdateChatMessageInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `ChatMessage` being updated. */
  patch: ChatMessagePatch;
};

/** The output of our update `ChatMessage` mutation. */
export type UpdateChatMessagePayload = {
  __typename?: 'UpdateChatMessagePayload';
  /** The `ChatMessage` that was updated by this mutation. */
  chatMessage?: Maybe<ChatMessage>;
  /** An edge for our `ChatMessage`. May be used by Relay 1. */
  chatMessageEdge?: Maybe<ChatMessagesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `ChatMessage` mutation. */
export type UpdateChatMessagePayloadChatMessageEdgeArgs = {
  orderBy?: InputMaybe<Array<ChatMessagesOrderBy>>;
};

/** The output of our update `Chat` mutation. */
export type UpdateChatPayload = {
  __typename?: 'UpdateChatPayload';
  /** The `Chat` that was updated by this mutation. */
  chat?: Maybe<Chat>;
  /** An edge for our `Chat`. May be used by Relay 1. */
  chatEdge?: Maybe<ChatsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Chat` mutation. */
export type UpdateChatPayloadChatEdgeArgs = {
  orderBy?: InputMaybe<Array<ChatsOrderBy>>;
};

/** All input for the `updateComment` mutation. */
export type UpdateCommentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Comment` being updated. */
  patch: CommentPatch;
};

/** The output of our update `Comment` mutation. */
export type UpdateCommentPayload = {
  __typename?: 'UpdateCommentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Comment` that was updated by this mutation. */
  comment?: Maybe<Comment>;
  /** An edge for our `Comment`. May be used by Relay 1. */
  commentEdge?: Maybe<CommentsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Comment` mutation. */
export type UpdateCommentPayloadCommentEdgeArgs = {
  orderBy?: InputMaybe<Array<CommentsOrderBy>>;
};

/** All input for the `updateDocument` mutation. */
export type UpdateDocumentInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Document` being updated. */
  patch: DocumentPatch;
};

/** The output of our update `Document` mutation. */
export type UpdateDocumentPayload = {
  __typename?: 'UpdateDocumentPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Document` that was updated by this mutation. */
  document?: Maybe<Document>;
  /** An edge for our `Document`. May be used by Relay 1. */
  documentEdge?: Maybe<DocumentsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Document` mutation. */
export type UpdateDocumentPayloadDocumentEdgeArgs = {
  orderBy?: InputMaybe<Array<DocumentsOrderBy>>;
};

/** All input for the `updateInitiative` mutation. */
export type UpdateInitiativeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Initiative` being updated. */
  patch: InitiativePatch;
};

/** The output of our update `Initiative` mutation. */
export type UpdateInitiativePayload = {
  __typename?: 'UpdateInitiativePayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Initiative` that was updated by this mutation. */
  initiative?: Maybe<Initiative>;
  /** An edge for our `Initiative`. May be used by Relay 1. */
  initiativeEdge?: Maybe<InitiativesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Initiative` mutation. */
export type UpdateInitiativePayloadInitiativeEdgeArgs = {
  orderBy?: InputMaybe<Array<InitiativesOrderBy>>;
};

/** All input for the `updateMetric` mutation. */
export type UpdateMetricInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Metric` being updated. */
  patch: MetricPatch;
};

/** The output of our update `Metric` mutation. */
export type UpdateMetricPayload = {
  __typename?: 'UpdateMetricPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Metric` that was updated by this mutation. */
  metric?: Maybe<Metric>;
  /** An edge for our `Metric`. May be used by Relay 1. */
  metricEdge?: Maybe<MetricsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Metric` mutation. */
export type UpdateMetricPayloadMetricEdgeArgs = {
  orderBy?: InputMaybe<Array<MetricsOrderBy>>;
};

/** All input for the `updateProject` mutation. */
export type UpdateProjectInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Project` being updated. */
  patch: ProjectPatch;
};

/** The output of our update `Project` mutation. */
export type UpdateProjectPayload = {
  __typename?: 'UpdateProjectPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Project` that was updated by this mutation. */
  project?: Maybe<Project>;
  /** An edge for our `Project`. May be used by Relay 1. */
  projectEdge?: Maybe<ProjectsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Project` mutation. */
export type UpdateProjectPayloadProjectEdgeArgs = {
  orderBy?: InputMaybe<Array<ProjectsOrderBy>>;
};

/** All input for the `updateTask` mutation. */
export type UpdateTaskInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `Task` being updated. */
  patch: TaskPatch;
};

/** The output of our update `Task` mutation. */
export type UpdateTaskPayload = {
  __typename?: 'UpdateTaskPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `Task` that was updated by this mutation. */
  task?: Maybe<Task>;
  /** An edge for our `Task`. May be used by Relay 1. */
  taskEdge?: Maybe<TasksEdge>;
};


/** The output of our update `Task` mutation. */
export type UpdateTaskPayloadTaskEdgeArgs = {
  orderBy?: InputMaybe<Array<TasksOrderBy>>;
};

/** All input for the `updateTeamMemberByEmail` mutation. */
export type UpdateTeamMemberByEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `TeamMember` being updated. */
  patch: TeamMemberPatch;
};

/** All input for the `updateTeamMember` mutation. */
export type UpdateTeamMemberInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `TeamMember` being updated. */
  patch: TeamMemberPatch;
};

/** The output of our update `TeamMember` mutation. */
export type UpdateTeamMemberPayload = {
  __typename?: 'UpdateTeamMemberPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `TeamMember` that was updated by this mutation. */
  teamMember?: Maybe<TeamMember>;
  /** An edge for our `TeamMember`. May be used by Relay 1. */
  teamMemberEdge?: Maybe<TeamMembersEdge>;
};


/** The output of our update `TeamMember` mutation. */
export type UpdateTeamMemberPayloadTeamMemberEdgeArgs = {
  orderBy?: InputMaybe<Array<TeamMembersOrderBy>>;
};

/** All input for the `updateValueProposition` mutation. */
export type UpdateValuePropositionInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `ValueProposition` being updated. */
  patch: ValuePropositionPatch;
};

/** The output of our update `ValueProposition` mutation. */
export type UpdateValuePropositionPayload = {
  __typename?: 'UpdateValuePropositionPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `ValueProposition` that was updated by this mutation. */
  valueProposition?: Maybe<ValueProposition>;
  /** An edge for our `ValueProposition`. May be used by Relay 1. */
  valuePropositionEdge?: Maybe<ValuePropositionsEdge>;
};


/** The output of our update `ValueProposition` mutation. */
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

/**
 * A condition to be used against `ValueProposition` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type ValuePropositionCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['UUID']['input']>;
};

/** An input for mutations affecting `ValueProposition` */
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

/** Represents an update to a `ValueProposition`. Fields that are set will be updated. */
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

/** A connection to a list of `ValueProposition` values. */
export type ValuePropositionsConnection = {
  __typename?: 'ValuePropositionsConnection';
  /** A list of edges which contains the `ValueProposition` and cursor to aid in pagination. */
  edges: Array<ValuePropositionsEdge>;
  /** A list of `ValueProposition` objects. */
  nodes: Array<ValueProposition>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `ValueProposition` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `ValueProposition` edge in the connection. */
export type ValuePropositionsEdge = {
  __typename?: 'ValuePropositionsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `ValueProposition` at the end of the edge. */
  node: ValueProposition;
};

/** Methods to use when ordering `ValueProposition`. */
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
