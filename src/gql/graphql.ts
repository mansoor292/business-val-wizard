/* eslint-disable */
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
  /** The day, does not include a time. */
  Date: { input: any; output: any; }
  /**
   * A point in time as described by the [ISO
   * 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. May or may not include a timezone.
   */
  Datetime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  ShortId: { input: any; output: any; }
  /** A universally unique identifier as defined by [RFC 4122](https://tools.ietf.org/html/rfc4122). */
  UUID: { input: any; output: any; }
};

/** Logs administrative activities like enabling/disabling auditing */
export type AdminActivityLog = {
  __typename?: 'AdminActivityLog';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ShortId']['output'];
  operation: Scalars['String']['output'];
  performedAt: Scalars['Datetime']['output'];
  performedBy?: Maybe<Scalars['ShortId']['output']>;
};

/**
 * A condition to be used against `AdminActivityLog` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type AdminActivityLogCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['ShortId']['input']>;
};

/** A connection to a list of `AdminActivityLog` values. */
export type AdminActivityLogsConnection = {
  __typename?: 'AdminActivityLogsConnection';
  /** A list of edges which contains the `AdminActivityLog` and cursor to aid in pagination. */
  edges: Array<AdminActivityLogsEdge>;
  /** A list of `AdminActivityLog` objects. */
  nodes: Array<AdminActivityLog>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `AdminActivityLog` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `AdminActivityLog` edge in the connection. */
export type AdminActivityLogsEdge = {
  __typename?: 'AdminActivityLogsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `AdminActivityLog` at the end of the edge. */
  node: AdminActivityLog;
};

/** Methods to use when ordering `AdminActivityLog`. */
export enum AdminActivityLogsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** Track all changes to audited tables */
export type AuditLog = {
  __typename?: 'AuditLog';
  /** Timestamp when the change occurred */
  changedAt: Scalars['Datetime']['output'];
  /** ID of the user who made the change */
  changedBy?: Maybe<Scalars['ShortId']['output']>;
  /** Unique identifier for the audit log entry */
  id: Scalars['ShortId']['output'];
  /** New state of the record (for INSERT and UPDATE) */
  newData?: Maybe<Scalars['JSON']['output']>;
  /** Previous state of the record (for UPDATE and DELETE) */
  oldData?: Maybe<Scalars['JSON']['output']>;
  /** Type of operation performed (INSERT, UPDATE, DELETE) */
  operation: AuditOperation;
  /** ID of the record that was changed */
  recordId: Scalars['ShortId']['output'];
  /** Name of the table where the change occurred */
  tableName: Scalars['String']['output'];
};

/**
 * A condition to be used against `AuditLog` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type AuditLogCondition = {
  /** Checks for equality with the object’s `changedAt` field. */
  changedAt?: InputMaybe<Scalars['Datetime']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['ShortId']['input']>;
  /** Checks for equality with the object’s `tableName` field. */
  tableName?: InputMaybe<Scalars['String']['input']>;
};

/** A connection to a list of `AuditLog` values. */
export type AuditLogsConnection = {
  __typename?: 'AuditLogsConnection';
  /** A list of edges which contains the `AuditLog` and cursor to aid in pagination. */
  edges: Array<AuditLogsEdge>;
  /** A list of `AuditLog` objects. */
  nodes: Array<AuditLog>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `AuditLog` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `AuditLog` edge in the connection. */
export type AuditLogsEdge = {
  __typename?: 'AuditLogsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `AuditLog` at the end of the edge. */
  node: AuditLog;
};

/** Methods to use when ordering `AuditLog`. */
export enum AuditLogsOrderBy {
  ChangedAtAsc = 'CHANGED_AT_ASC',
  ChangedAtDesc = 'CHANGED_AT_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  TableNameAsc = 'TABLE_NAME_ASC',
  TableNameDesc = 'TABLE_NAME_DESC'
}

export enum AuditOperation {
  Delete = 'DELETE',
  Insert = 'INSERT',
  Update = 'UPDATE'
}

/** A connection to a list of `BaseEntity` values. */
export type BaseEntitiesConnection = {
  __typename?: 'BaseEntitiesConnection';
  /** A list of edges which contains the `BaseEntity` and cursor to aid in pagination. */
  edges: Array<BaseEntitiesEdge>;
  /** A list of `BaseEntity` objects. */
  nodes: Array<BaseEntity>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `BaseEntity` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `BaseEntity` edge in the connection. */
export type BaseEntitiesEdge = {
  __typename?: 'BaseEntitiesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `BaseEntity` at the end of the edge. */
  node: BaseEntity;
};

/** Methods to use when ordering `BaseEntity`. */
export enum BaseEntitiesOrderBy {
  Natural = 'NATURAL'
}

export type BaseEntity = {
  __typename?: 'BaseEntity';
  createdAt: Scalars['Datetime']['output'];
  createdBy?: Maybe<Scalars['ShortId']['output']>;
  domainId?: Maybe<Scalars['ShortId']['output']>;
  id: Scalars['ShortId']['output'];
  name: Scalars['String']['output'];
  updatedAt: Scalars['Datetime']['output'];
  updatedBy?: Maybe<Scalars['ShortId']['output']>;
};

/** An input for mutations affecting `BaseEntity` */
export type BaseEntityInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdBy?: InputMaybe<Scalars['ShortId']['input']>;
  domainId?: InputMaybe<Scalars['ShortId']['input']>;
  id?: InputMaybe<Scalars['ShortId']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  updatedBy?: InputMaybe<Scalars['ShortId']['input']>;
};

export type BaseObject = {
  __typename?: 'BaseObject';
  createdAt: Scalars['Datetime']['output'];
  createdBy?: Maybe<Scalars['ShortId']['output']>;
  id: Scalars['ShortId']['output'];
  updatedAt: Scalars['Datetime']['output'];
};

/**
 * A condition to be used against `BaseObject` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type BaseObjectCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['ShortId']['input']>;
};

/** An input for mutations affecting `BaseObject` */
export type BaseObjectInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdBy?: InputMaybe<Scalars['ShortId']['input']>;
  id?: InputMaybe<Scalars['ShortId']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Represents an update to a `BaseObject`. Fields that are set will be updated. */
export type BaseObjectPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdBy?: InputMaybe<Scalars['ShortId']['input']>;
  id?: InputMaybe<Scalars['ShortId']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** A connection to a list of `BaseObject` values. */
export type BaseObjectsConnection = {
  __typename?: 'BaseObjectsConnection';
  /** A list of edges which contains the `BaseObject` and cursor to aid in pagination. */
  edges: Array<BaseObjectsEdge>;
  /** A list of `BaseObject` objects. */
  nodes: Array<BaseObject>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `BaseObject` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `BaseObject` edge in the connection. */
export type BaseObjectsEdge = {
  __typename?: 'BaseObjectsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `BaseObject` at the end of the edge. */
  node: BaseObject;
};

/** Methods to use when ordering `BaseObject`. */
export enum BaseObjectsOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC'
}

/** All input for the create `BaseEntity` mutation. */
export type CreateBaseEntityInput = {
  /** The `BaseEntity` to be created by this mutation. */
  baseEntity: BaseEntityInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `BaseEntity` mutation. */
export type CreateBaseEntityPayload = {
  __typename?: 'CreateBaseEntityPayload';
  /** The `BaseEntity` that was created by this mutation. */
  baseEntity?: Maybe<BaseEntity>;
  /** An edge for our `BaseEntity`. May be used by Relay 1. */
  baseEntityEdge?: Maybe<BaseEntitiesEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `BaseEntity` mutation. */
export type CreateBaseEntityPayloadBaseEntityEdgeArgs = {
  orderBy?: InputMaybe<Array<BaseEntitiesOrderBy>>;
};

/** All input for the create `BaseObject` mutation. */
export type CreateBaseObjectInput = {
  /** The `BaseObject` to be created by this mutation. */
  baseObject: BaseObjectInput;
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our create `BaseObject` mutation. */
export type CreateBaseObjectPayload = {
  __typename?: 'CreateBaseObjectPayload';
  /** The `BaseObject` that was created by this mutation. */
  baseObject?: Maybe<BaseObject>;
  /** An edge for our `BaseObject`. May be used by Relay 1. */
  baseObjectEdge?: Maybe<BaseObjectsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `BaseObject` mutation. */
export type CreateBaseObjectPayloadBaseObjectEdgeArgs = {
  orderBy?: InputMaybe<Array<BaseObjectsOrderBy>>;
};

/** All input for the create `DomainAccess` mutation. */
export type CreateDomainAccessInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `DomainAccess` to be created by this mutation. */
  domainAccess: DomainAccessInput;
};

/** The output of our create `DomainAccess` mutation. */
export type CreateDomainAccessPayload = {
  __typename?: 'CreateDomainAccessPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Domain` that is related to this `DomainAccess`. */
  domain?: Maybe<Domain>;
  /** The `DomainAccess` that was created by this mutation. */
  domainAccess?: Maybe<DomainAccess>;
  /** An edge for our `DomainAccess`. May be used by Relay 1. */
  domainAccessEdge?: Maybe<DomainAccessesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `DomainAccess`. */
  user?: Maybe<User>;
};


/** The output of our create `DomainAccess` mutation. */
export type CreateDomainAccessPayloadDomainAccessEdgeArgs = {
  orderBy?: InputMaybe<Array<DomainAccessesOrderBy>>;
};

/** All input for the create `Domain` mutation. */
export type CreateDomainInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `Domain` to be created by this mutation. */
  domain: DomainInput;
};

/** The output of our create `Domain` mutation. */
export type CreateDomainPayload = {
  __typename?: 'CreateDomainPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Domain` that was created by this mutation. */
  domain?: Maybe<Domain>;
  /** An edge for our `Domain`. May be used by Relay 1. */
  domainEdge?: Maybe<DomainsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our create `Domain` mutation. */
export type CreateDomainPayloadDomainEdgeArgs = {
  orderBy?: InputMaybe<Array<DomainsOrderBy>>;
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
  /** Reads a single `TeamMember` that is related to this `TeamMember`. */
  teamMemberByManager?: Maybe<TeamMember>;
  /** An edge for our `TeamMember`. May be used by Relay 1. */
  teamMemberEdge?: Maybe<TeamMembersEdge>;
  /** Reads a single `User` that is related to this `TeamMember`. */
  user?: Maybe<User>;
};


/** The output of our create `TeamMember` mutation. */
export type CreateTeamMemberPayloadTeamMemberEdgeArgs = {
  orderBy?: InputMaybe<Array<TeamMembersOrderBy>>;
};

/** All input for the create `User` mutation. */
export type CreateUserInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** The `User` to be created by this mutation. */
  user: UserInput;
};

/** The output of our create `User` mutation. */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Domain` that is related to this `User`. */
  domain?: Maybe<Domain>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was created by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our create `User` mutation. */
export type CreateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the `deleteBaseObject` mutation. */
export type DeleteBaseObjectInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ShortId']['input'];
};

/** The output of our delete `BaseObject` mutation. */
export type DeleteBaseObjectPayload = {
  __typename?: 'DeleteBaseObjectPayload';
  /** The `BaseObject` that was deleted by this mutation. */
  baseObject?: Maybe<BaseObject>;
  /** An edge for our `BaseObject`. May be used by Relay 1. */
  baseObjectEdge?: Maybe<BaseObjectsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedBaseObjectNodeId?: Maybe<Scalars['ID']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `BaseObject` mutation. */
export type DeleteBaseObjectPayloadBaseObjectEdgeArgs = {
  orderBy?: InputMaybe<Array<BaseObjectsOrderBy>>;
};

/** All input for the `deleteDomainAccess` mutation. */
export type DeleteDomainAccessInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  domainId: Scalars['ShortId']['input'];
  userId: Scalars['ShortId']['input'];
};

/** The output of our delete `DomainAccess` mutation. */
export type DeleteDomainAccessPayload = {
  __typename?: 'DeleteDomainAccessPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedDomainAccessNodeId?: Maybe<Scalars['ID']['output']>;
  /** Reads a single `Domain` that is related to this `DomainAccess`. */
  domain?: Maybe<Domain>;
  /** The `DomainAccess` that was deleted by this mutation. */
  domainAccess?: Maybe<DomainAccess>;
  /** An edge for our `DomainAccess`. May be used by Relay 1. */
  domainAccessEdge?: Maybe<DomainAccessesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `DomainAccess`. */
  user?: Maybe<User>;
};


/** The output of our delete `DomainAccess` mutation. */
export type DeleteDomainAccessPayloadDomainAccessEdgeArgs = {
  orderBy?: InputMaybe<Array<DomainAccessesOrderBy>>;
};

/** All input for the `deleteDomainByCode` mutation. */
export type DeleteDomainByCodeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code: Scalars['String']['input'];
};

/** All input for the `deleteDomainById` mutation. */
export type DeleteDomainByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ShortId']['input'];
};

/** The output of our delete `Domain` mutation. */
export type DeleteDomainPayload = {
  __typename?: 'DeleteDomainPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedDomainNodeId?: Maybe<Scalars['ID']['output']>;
  /** The `Domain` that was deleted by this mutation. */
  domain?: Maybe<Domain>;
  /** An edge for our `Domain`. May be used by Relay 1. */
  domainEdge?: Maybe<DomainsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our delete `Domain` mutation. */
export type DeleteDomainPayloadDomainEdgeArgs = {
  orderBy?: InputMaybe<Array<DomainsOrderBy>>;
};

/** All input for the `deleteTeamMemberById` mutation. */
export type DeleteTeamMemberByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ShortId']['input'];
};

/** All input for the `deleteTeamMemberByUserId` mutation. */
export type DeleteTeamMemberByUserIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  userId: Scalars['ShortId']['input'];
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
  /** Reads a single `TeamMember` that is related to this `TeamMember`. */
  teamMemberByManager?: Maybe<TeamMember>;
  /** An edge for our `TeamMember`. May be used by Relay 1. */
  teamMemberEdge?: Maybe<TeamMembersEdge>;
  /** Reads a single `User` that is related to this `TeamMember`. */
  user?: Maybe<User>;
};


/** The output of our delete `TeamMember` mutation. */
export type DeleteTeamMemberPayloadTeamMemberEdgeArgs = {
  orderBy?: InputMaybe<Array<TeamMembersOrderBy>>;
};

/** All input for the `deleteUserByCognitoId` mutation. */
export type DeleteUserByCognitoIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  cognitoId: Scalars['UUID']['input'];
};

/** All input for the `deleteUserByEmail` mutation. */
export type DeleteUserByEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
};

/** All input for the `deleteUserById` mutation. */
export type DeleteUserByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ShortId']['input'];
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  deletedUserNodeId?: Maybe<Scalars['ID']['output']>;
  /** Reads a single `Domain` that is related to this `User`. */
  domain?: Maybe<Domain>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was deleted by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our delete `User` mutation. */
export type DeleteUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the `disableAuditing` mutation. */
export type DisableAuditingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our `disableAuditing` mutation. */
export type DisableAuditingPayload = {
  __typename?: 'DisableAuditingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

export type Domain = {
  __typename?: 'Domain';
  code: Scalars['String']['output'];
  createdAt: Scalars['Datetime']['output'];
  createdBy?: Maybe<Scalars['ShortId']['output']>;
  /** Reads and enables pagination through a set of `DomainAccess`. */
  domainAccesses: Array<DomainAccess>;
  /** Reads and enables pagination through a set of `DomainAccess`. */
  domainAccessesConnection: DomainAccessesConnection;
  id: Scalars['ShortId']['output'];
  updatedAt: Scalars['Datetime']['output'];
  /** Reads and enables pagination through a set of `User`. */
  users: Array<User>;
  /** Reads and enables pagination through a set of `User`. */
  usersConnection: UsersConnection;
};


export type DomainDomainAccessesArgs = {
  condition?: InputMaybe<DomainAccessCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DomainAccessesOrderBy>>;
};


export type DomainDomainAccessesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<DomainAccessCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DomainAccessesOrderBy>>;
};


export type DomainUsersArgs = {
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};


export type DomainUsersConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

export type DomainAccess = {
  __typename?: 'DomainAccess';
  createdAt: Scalars['Datetime']['output'];
  /** Reads a single `Domain` that is related to this `DomainAccess`. */
  domain?: Maybe<Domain>;
  domainId: Scalars['ShortId']['output'];
  isAdmin?: Maybe<Scalars['Boolean']['output']>;
  /** Reads a single `User` that is related to this `DomainAccess`. */
  user?: Maybe<User>;
  userId: Scalars['ShortId']['output'];
};

/**
 * A condition to be used against `DomainAccess` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type DomainAccessCondition = {
  /** Checks for equality with the object’s `domainId` field. */
  domainId?: InputMaybe<Scalars['ShortId']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['ShortId']['input']>;
};

/** An input for mutations affecting `DomainAccess` */
export type DomainAccessInput = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  domainId: Scalars['ShortId']['input'];
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  userId: Scalars['ShortId']['input'];
};

/** Represents an update to a `DomainAccess`. Fields that are set will be updated. */
export type DomainAccessPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  domainId?: InputMaybe<Scalars['ShortId']['input']>;
  isAdmin?: InputMaybe<Scalars['Boolean']['input']>;
  userId?: InputMaybe<Scalars['ShortId']['input']>;
};

/** A connection to a list of `DomainAccess` values. */
export type DomainAccessesConnection = {
  __typename?: 'DomainAccessesConnection';
  /** A list of edges which contains the `DomainAccess` and cursor to aid in pagination. */
  edges: Array<DomainAccessesEdge>;
  /** A list of `DomainAccess` objects. */
  nodes: Array<DomainAccess>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `DomainAccess` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `DomainAccess` edge in the connection. */
export type DomainAccessesEdge = {
  __typename?: 'DomainAccessesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `DomainAccess` at the end of the edge. */
  node: DomainAccess;
};

/** Methods to use when ordering `DomainAccess`. */
export enum DomainAccessesOrderBy {
  DomainIdAsc = 'DOMAIN_ID_ASC',
  DomainIdDesc = 'DOMAIN_ID_DESC',
  Natural = 'NATURAL',
  PrimaryKeyAsc = 'PRIMARY_KEY_ASC',
  PrimaryKeyDesc = 'PRIMARY_KEY_DESC',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** A condition to be used against `Domain` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type DomainCondition = {
  /** Checks for equality with the object’s `code` field. */
  code?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['ShortId']['input']>;
};

/** An input for mutations affecting `Domain` */
export type DomainInput = {
  code: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdBy?: InputMaybe<Scalars['ShortId']['input']>;
  id?: InputMaybe<Scalars['ShortId']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Represents an update to a `Domain`. Fields that are set will be updated. */
export type DomainPatch = {
  code?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdBy?: InputMaybe<Scalars['ShortId']['input']>;
  id?: InputMaybe<Scalars['ShortId']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
};

/** A connection to a list of `Domain` values. */
export type DomainsConnection = {
  __typename?: 'DomainsConnection';
  /** A list of edges which contains the `Domain` and cursor to aid in pagination. */
  edges: Array<DomainsEdge>;
  /** A list of `Domain` objects. */
  nodes: Array<Domain>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `Domain` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `Domain` edge in the connection. */
export type DomainsEdge = {
  __typename?: 'DomainsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `Domain` at the end of the edge. */
  node: Domain;
};

/** Methods to use when ordering `Domain`. */
export enum DomainsOrderBy {
  CodeAsc = 'CODE_ASC',
  CodeDesc = 'CODE_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL'
}

/** All input for the `enableAuditing` mutation. */
export type EnableAuditingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our `enableAuditing` mutation. */
export type EnableAuditingPayload = {
  __typename?: 'EnableAuditingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `executeWithoutAuditing` mutation. */
export type ExecuteWithoutAuditingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  operation?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our `executeWithoutAuditing` mutation. */
export type ExecuteWithoutAuditingPayload = {
  __typename?: 'ExecuteWithoutAuditingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `generateShortId` mutation. */
export type GenerateShortIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our `generateShortId` mutation. */
export type GenerateShortIdPayload = {
  __typename?: 'GenerateShortIdPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  shortId?: Maybe<Scalars['ShortId']['output']>;
};

/** The root mutation type which contains root level fields which mutate data. */
export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a single `BaseEntity`. */
  createBaseEntity?: Maybe<CreateBaseEntityPayload>;
  /** Creates a single `BaseObject`. */
  createBaseObject?: Maybe<CreateBaseObjectPayload>;
  /** Creates a single `Domain`. */
  createDomain?: Maybe<CreateDomainPayload>;
  /** Creates a single `DomainAccess`. */
  createDomainAccess?: Maybe<CreateDomainAccessPayload>;
  /** Creates a single `TeamMember`. */
  createTeamMember?: Maybe<CreateTeamMemberPayload>;
  /** Creates a single `User`. */
  createUser?: Maybe<CreateUserPayload>;
  /** Deletes a single `BaseObject` using a unique key. */
  deleteBaseObject?: Maybe<DeleteBaseObjectPayload>;
  /** Deletes a single `DomainAccess` using a unique key. */
  deleteDomainAccess?: Maybe<DeleteDomainAccessPayload>;
  /** Deletes a single `Domain` using a unique key. */
  deleteDomainByCode?: Maybe<DeleteDomainPayload>;
  /** Deletes a single `Domain` using a unique key. */
  deleteDomainById?: Maybe<DeleteDomainPayload>;
  /** Deletes a single `TeamMember` using a unique key. */
  deleteTeamMemberById?: Maybe<DeleteTeamMemberPayload>;
  /** Deletes a single `TeamMember` using a unique key. */
  deleteTeamMemberByUserId?: Maybe<DeleteTeamMemberPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserByCognitoId?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserByEmail?: Maybe<DeleteUserPayload>;
  /** Deletes a single `User` using a unique key. */
  deleteUserById?: Maybe<DeleteUserPayload>;
  /**
   * Temporarily disable audit logging for bulk operations.
   * Requires admin role.
   */
  disableAuditing?: Maybe<DisableAuditingPayload>;
  /**
   * Re-enable audit logging after it has been disabled.
   * Requires admin role.
   */
  enableAuditing?: Maybe<EnableAuditingPayload>;
  /**
   * Executes the given SQL operation with auditing temporarily disabled.
   * Requires admin role. All audit disabling/enabling is logged.
   */
  executeWithoutAuditing?: Maybe<ExecuteWithoutAuditingPayload>;
  generateShortId?: Maybe<GenerateShortIdPayload>;
  /**
   * Sets up auditing for the specified table.
   * The table must have id and updated_at columns.
   * Creates:
   * - Audit trigger
   * - Audit history function
   * - Updates RLS policies
   */
  setupTableAuditing?: Maybe<SetupTableAuditingPayload>;
  /** Updates a single `BaseObject` using a unique key and a patch. */
  updateBaseObject?: Maybe<UpdateBaseObjectPayload>;
  /** Updates a single `DomainAccess` using a unique key and a patch. */
  updateDomainAccess?: Maybe<UpdateDomainAccessPayload>;
  /** Updates a single `Domain` using a unique key and a patch. */
  updateDomainByCode?: Maybe<UpdateDomainPayload>;
  /** Updates a single `Domain` using a unique key and a patch. */
  updateDomainById?: Maybe<UpdateDomainPayload>;
  /** Updates a single `TeamMember` using a unique key and a patch. */
  updateTeamMemberById?: Maybe<UpdateTeamMemberPayload>;
  /** Updates a single `TeamMember` using a unique key and a patch. */
  updateTeamMemberByUserId?: Maybe<UpdateTeamMemberPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserByCognitoId?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserByEmail?: Maybe<UpdateUserPayload>;
  /** Updates a single `User` using a unique key and a patch. */
  updateUserById?: Maybe<UpdateUserPayload>;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateBaseEntityArgs = {
  input: CreateBaseEntityInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateBaseObjectArgs = {
  input: CreateBaseObjectInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateDomainArgs = {
  input: CreateDomainInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateDomainAccessArgs = {
  input: CreateDomainAccessInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateTeamMemberArgs = {
  input: CreateTeamMemberInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteBaseObjectArgs = {
  input: DeleteBaseObjectInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDomainAccessArgs = {
  input: DeleteDomainAccessInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDomainByCodeArgs = {
  input: DeleteDomainByCodeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteDomainByIdArgs = {
  input: DeleteDomainByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTeamMemberByIdArgs = {
  input: DeleteTeamMemberByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteTeamMemberByUserIdArgs = {
  input: DeleteTeamMemberByUserIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByCognitoIdArgs = {
  input: DeleteUserByCognitoIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByEmailArgs = {
  input: DeleteUserByEmailInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDeleteUserByIdArgs = {
  input: DeleteUserByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationDisableAuditingArgs = {
  input: DisableAuditingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationEnableAuditingArgs = {
  input: EnableAuditingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationExecuteWithoutAuditingArgs = {
  input: ExecuteWithoutAuditingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationGenerateShortIdArgs = {
  input: GenerateShortIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationSetupTableAuditingArgs = {
  input: SetupTableAuditingInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateBaseObjectArgs = {
  input: UpdateBaseObjectInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDomainAccessArgs = {
  input: UpdateDomainAccessInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDomainByCodeArgs = {
  input: UpdateDomainByCodeInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateDomainByIdArgs = {
  input: UpdateDomainByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTeamMemberByIdArgs = {
  input: UpdateTeamMemberByIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateTeamMemberByUserIdArgs = {
  input: UpdateTeamMemberByUserIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByCognitoIdArgs = {
  input: UpdateUserByCognitoIdInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByEmailArgs = {
  input: UpdateUserByEmailInput;
};


/** The root mutation type which contains root level fields which mutate data. */
export type MutationUpdateUserByIdArgs = {
  input: UpdateUserByIdInput;
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

/** The root query type which gives access points into the data universe. */
export type Query = {
  __typename?: 'Query';
  adminActivityLog?: Maybe<AdminActivityLog>;
  /** Reads a set of `AdminActivityLog`. */
  adminActivityLogs?: Maybe<Array<AdminActivityLog>>;
  /** Reads and enables pagination through a set of `AdminActivityLog`. */
  adminActivityLogsConnection?: Maybe<AdminActivityLogsConnection>;
  /** Retrieves the audit history for a specific record */
  auditHistory?: Maybe<Array<AuditLog>>;
  /** Retrieves the audit history for a specific record */
  auditHistoryConnection?: Maybe<AuditLogsConnection>;
  auditLog?: Maybe<AuditLog>;
  /** Reads a set of `AuditLog`. */
  auditLogs?: Maybe<Array<AuditLog>>;
  /** Reads and enables pagination through a set of `AuditLog`. */
  auditLogsConnection?: Maybe<AuditLogsConnection>;
  /** Reads a set of `BaseEntity`. */
  baseEntities?: Maybe<Array<BaseEntity>>;
  /** Reads and enables pagination through a set of `BaseEntity`. */
  baseEntitiesConnection?: Maybe<BaseEntitiesConnection>;
  baseObject?: Maybe<BaseObject>;
  /** Reads a set of `BaseObject`. */
  baseObjects?: Maybe<Array<BaseObject>>;
  /** Reads and enables pagination through a set of `BaseObject`. */
  baseObjectsConnection?: Maybe<BaseObjectsConnection>;
  currentUserId?: Maybe<Scalars['ShortId']['output']>;
  domainAccess?: Maybe<DomainAccess>;
  /** Reads a set of `DomainAccess`. */
  domainAccesses?: Maybe<Array<DomainAccess>>;
  /** Reads and enables pagination through a set of `DomainAccess`. */
  domainAccessesConnection?: Maybe<DomainAccessesConnection>;
  domainByCode?: Maybe<Domain>;
  domainById?: Maybe<Domain>;
  /** Reads a set of `Domain`. */
  domains?: Maybe<Array<Domain>>;
  /** Reads and enables pagination through a set of `Domain`. */
  domainsConnection?: Maybe<DomainsConnection>;
  /**
   * Exposes the root query type nested one level down. This is helpful for Relay 1
   * which can only query top level fields if they are in a particular form.
   */
  query: Query;
  shouldAudit?: Maybe<Scalars['Boolean']['output']>;
  teamMemberById?: Maybe<TeamMember>;
  teamMemberByUserId?: Maybe<TeamMember>;
  /** Reads a set of `TeamMember`. */
  teamMembers?: Maybe<Array<TeamMember>>;
  /** Reads and enables pagination through a set of `TeamMember`. */
  teamMembersConnection?: Maybe<TeamMembersConnection>;
  userByCognitoId?: Maybe<User>;
  userByEmail?: Maybe<User>;
  userById?: Maybe<User>;
  /** Reads a set of `User`. */
  users?: Maybe<Array<User>>;
  /** Reads and enables pagination through a set of `User`. */
  usersConnection?: Maybe<UsersConnection>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAdminActivityLogArgs = {
  id: Scalars['ShortId']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAdminActivityLogsArgs = {
  condition?: InputMaybe<AdminActivityLogCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AdminActivityLogsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAdminActivityLogsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AdminActivityLogCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AdminActivityLogsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAuditHistoryArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  pRecordId?: InputMaybe<Scalars['ShortId']['input']>;
  pTableName?: InputMaybe<Scalars['String']['input']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAuditHistoryConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  pRecordId?: InputMaybe<Scalars['ShortId']['input']>;
  pTableName?: InputMaybe<Scalars['String']['input']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAuditLogArgs = {
  id: Scalars['ShortId']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAuditLogsArgs = {
  condition?: InputMaybe<AuditLogCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuditLogsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAuditLogsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<AuditLogCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<AuditLogsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryBaseEntitiesArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BaseEntitiesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryBaseEntitiesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BaseEntitiesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryBaseObjectArgs = {
  id: Scalars['ShortId']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBaseObjectsArgs = {
  condition?: InputMaybe<BaseObjectCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BaseObjectsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryBaseObjectsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<BaseObjectCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<BaseObjectsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryDomainAccessArgs = {
  domainId: Scalars['ShortId']['input'];
  userId: Scalars['ShortId']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDomainAccessesArgs = {
  condition?: InputMaybe<DomainAccessCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DomainAccessesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryDomainAccessesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<DomainAccessCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DomainAccessesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryDomainByCodeArgs = {
  code: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDomainByIdArgs = {
  id: Scalars['ShortId']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDomainsArgs = {
  condition?: InputMaybe<DomainCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DomainsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryDomainsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<DomainCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DomainsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryTeamMemberByIdArgs = {
  id: Scalars['ShortId']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTeamMemberByUserIdArgs = {
  userId: Scalars['ShortId']['input'];
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
export type QueryUserByCognitoIdArgs = {
  cognitoId: Scalars['UUID']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByEmailArgs = {
  email: Scalars['String']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByIdArgs = {
  id: Scalars['ShortId']['input'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUsersArgs = {
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the `setupTableAuditing` mutation. */
export type SetupTableAuditingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  targetTable?: InputMaybe<Scalars['String']['input']>;
};

/** The output of our `setupTableAuditing` mutation. */
export type SetupTableAuditingPayload = {
  __typename?: 'SetupTableAuditingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

export type TeamMember = {
  __typename?: 'TeamMember';
  /**         Get audit history for this entity */
  auditHistory?: Maybe<Array<AuditLog>>;
  /**         Get audit history for this entity */
  auditHistoryConnection: AuditLogsConnection;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['Datetime']['output'];
  createdBy?: Maybe<Scalars['ShortId']['output']>;
  department?: Maybe<Scalars['String']['output']>;
  domainId?: Maybe<Scalars['ShortId']['output']>;
  employmentStatus: Scalars['String']['output'];
  hireDate?: Maybe<Scalars['Date']['output']>;
  id: Scalars['ShortId']['output'];
  jobTitle?: Maybe<Scalars['String']['output']>;
  manager?: Maybe<Scalars['ShortId']['output']>;
  name: Scalars['String']['output'];
  officeLocation?: Maybe<Scalars['String']['output']>;
  /** Reads a single `TeamMember` that is related to this `TeamMember`. */
  teamMemberByManager?: Maybe<TeamMember>;
  /** Reads and enables pagination through a set of `TeamMember`. */
  teamMembersByManager: Array<TeamMember>;
  /** Reads and enables pagination through a set of `TeamMember`. */
  teamMembersByManagerConnection: TeamMembersConnection;
  updatedAt: Scalars['Datetime']['output'];
  updatedBy?: Maybe<Scalars['ShortId']['output']>;
  /** Reads a single `User` that is related to this `TeamMember`. */
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ShortId']['output']>;
  workEmail?: Maybe<Scalars['String']['output']>;
  workPhone?: Maybe<Scalars['String']['output']>;
};


export type TeamMemberAuditHistoryArgs = {
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type TeamMemberAuditHistoryConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};


export type TeamMemberTeamMembersByManagerArgs = {
  condition?: InputMaybe<TeamMemberCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TeamMembersOrderBy>>;
};


export type TeamMemberTeamMembersByManagerConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<TeamMemberCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TeamMembersOrderBy>>;
};

/**
 * A condition to be used against `TeamMember` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type TeamMemberCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['ShortId']['input']>;
  /** Checks for equality with the object’s `manager` field. */
  manager?: InputMaybe<Scalars['ShortId']['input']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['ShortId']['input']>;
};

/** An input for mutations affecting `TeamMember` */
export type TeamMemberInput = {
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdBy?: InputMaybe<Scalars['ShortId']['input']>;
  department?: InputMaybe<Scalars['String']['input']>;
  domainId?: InputMaybe<Scalars['ShortId']['input']>;
  employmentStatus?: InputMaybe<Scalars['String']['input']>;
  hireDate?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ShortId']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  manager?: InputMaybe<Scalars['ShortId']['input']>;
  name: Scalars['String']['input'];
  officeLocation?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  updatedBy?: InputMaybe<Scalars['ShortId']['input']>;
  userId?: InputMaybe<Scalars['ShortId']['input']>;
  workEmail?: InputMaybe<Scalars['String']['input']>;
  workPhone?: InputMaybe<Scalars['String']['input']>;
};

/** Represents an update to a `TeamMember`. Fields that are set will be updated. */
export type TeamMemberPatch = {
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdBy?: InputMaybe<Scalars['ShortId']['input']>;
  department?: InputMaybe<Scalars['String']['input']>;
  domainId?: InputMaybe<Scalars['ShortId']['input']>;
  employmentStatus?: InputMaybe<Scalars['String']['input']>;
  hireDate?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['ShortId']['input']>;
  jobTitle?: InputMaybe<Scalars['String']['input']>;
  manager?: InputMaybe<Scalars['ShortId']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  officeLocation?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  updatedBy?: InputMaybe<Scalars['ShortId']['input']>;
  userId?: InputMaybe<Scalars['ShortId']['input']>;
  workEmail?: InputMaybe<Scalars['String']['input']>;
  workPhone?: InputMaybe<Scalars['String']['input']>;
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
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  ManagerAsc = 'MANAGER_ASC',
  ManagerDesc = 'MANAGER_DESC',
  Natural = 'NATURAL',
  UserIdAsc = 'USER_ID_ASC',
  UserIdDesc = 'USER_ID_DESC'
}

/** All input for the `updateBaseObject` mutation. */
export type UpdateBaseObjectInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ShortId']['input'];
  /** An object where the defined keys will be set on the `BaseObject` being updated. */
  patch: BaseObjectPatch;
};

/** The output of our update `BaseObject` mutation. */
export type UpdateBaseObjectPayload = {
  __typename?: 'UpdateBaseObjectPayload';
  /** The `BaseObject` that was updated by this mutation. */
  baseObject?: Maybe<BaseObject>;
  /** An edge for our `BaseObject`. May be used by Relay 1. */
  baseObjectEdge?: Maybe<BaseObjectsEdge>;
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `BaseObject` mutation. */
export type UpdateBaseObjectPayloadBaseObjectEdgeArgs = {
  orderBy?: InputMaybe<Array<BaseObjectsOrderBy>>;
};

/** All input for the `updateDomainAccess` mutation. */
export type UpdateDomainAccessInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  domainId: Scalars['ShortId']['input'];
  /** An object where the defined keys will be set on the `DomainAccess` being updated. */
  patch: DomainAccessPatch;
  userId: Scalars['ShortId']['input'];
};

/** The output of our update `DomainAccess` mutation. */
export type UpdateDomainAccessPayload = {
  __typename?: 'UpdateDomainAccessPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Domain` that is related to this `DomainAccess`. */
  domain?: Maybe<Domain>;
  /** The `DomainAccess` that was updated by this mutation. */
  domainAccess?: Maybe<DomainAccess>;
  /** An edge for our `DomainAccess`. May be used by Relay 1. */
  domainAccessEdge?: Maybe<DomainAccessesEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** Reads a single `User` that is related to this `DomainAccess`. */
  user?: Maybe<User>;
};


/** The output of our update `DomainAccess` mutation. */
export type UpdateDomainAccessPayloadDomainAccessEdgeArgs = {
  orderBy?: InputMaybe<Array<DomainAccessesOrderBy>>;
};

/** All input for the `updateDomainByCode` mutation. */
export type UpdateDomainByCodeInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  code: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `Domain` being updated. */
  patch: DomainPatch;
};

/** All input for the `updateDomainById` mutation. */
export type UpdateDomainByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ShortId']['input'];
  /** An object where the defined keys will be set on the `Domain` being updated. */
  patch: DomainPatch;
};

/** The output of our update `Domain` mutation. */
export type UpdateDomainPayload = {
  __typename?: 'UpdateDomainPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** The `Domain` that was updated by this mutation. */
  domain?: Maybe<Domain>;
  /** An edge for our `Domain`. May be used by Relay 1. */
  domainEdge?: Maybe<DomainsEdge>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};


/** The output of our update `Domain` mutation. */
export type UpdateDomainPayloadDomainEdgeArgs = {
  orderBy?: InputMaybe<Array<DomainsOrderBy>>;
};

/** All input for the `updateTeamMemberById` mutation. */
export type UpdateTeamMemberByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ShortId']['input'];
  /** An object where the defined keys will be set on the `TeamMember` being updated. */
  patch: TeamMemberPatch;
};

/** All input for the `updateTeamMemberByUserId` mutation. */
export type UpdateTeamMemberByUserIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  /** An object where the defined keys will be set on the `TeamMember` being updated. */
  patch: TeamMemberPatch;
  userId: Scalars['ShortId']['input'];
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
  /** Reads a single `TeamMember` that is related to this `TeamMember`. */
  teamMemberByManager?: Maybe<TeamMember>;
  /** An edge for our `TeamMember`. May be used by Relay 1. */
  teamMemberEdge?: Maybe<TeamMembersEdge>;
  /** Reads a single `User` that is related to this `TeamMember`. */
  user?: Maybe<User>;
};


/** The output of our update `TeamMember` mutation. */
export type UpdateTeamMemberPayloadTeamMemberEdgeArgs = {
  orderBy?: InputMaybe<Array<TeamMembersOrderBy>>;
};

/** All input for the `updateUserByCognitoId` mutation. */
export type UpdateUserByCognitoIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  cognitoId: Scalars['UUID']['input'];
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch;
};

/** All input for the `updateUserByEmail` mutation. */
export type UpdateUserByEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch;
};

/** All input for the `updateUserById` mutation. */
export type UpdateUserByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ShortId']['input'];
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch;
};

/** The output of our update `User` mutation. */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  /** Reads a single `Domain` that is related to this `User`. */
  domain?: Maybe<Domain>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  /** The `User` that was updated by this mutation. */
  user?: Maybe<User>;
  /** An edge for our `User`. May be used by Relay 1. */
  userEdge?: Maybe<UsersEdge>;
};


/** The output of our update `User` mutation. */
export type UpdateUserPayloadUserEdgeArgs = {
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

export type User = {
  __typename?: 'User';
  cognitoId: Scalars['UUID']['output'];
  createdAt: Scalars['Datetime']['output'];
  createdBy?: Maybe<Scalars['ShortId']['output']>;
  /** Reads a single `Domain` that is related to this `User`. */
  domain?: Maybe<Domain>;
  /** Reads and enables pagination through a set of `DomainAccess`. */
  domainAccesses: Array<DomainAccess>;
  /** Reads and enables pagination through a set of `DomainAccess`. */
  domainAccessesConnection: DomainAccessesConnection;
  domainId?: Maybe<Scalars['ShortId']['output']>;
  email: Scalars['String']['output'];
  id: Scalars['ShortId']['output'];
  name: Scalars['String']['output'];
  /** Reads a single `TeamMember` that is related to this `User`. */
  teamMember?: Maybe<TeamMember>;
  updatedAt: Scalars['Datetime']['output'];
  updatedBy?: Maybe<Scalars['ShortId']['output']>;
};


export type UserDomainAccessesArgs = {
  condition?: InputMaybe<DomainAccessCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DomainAccessesOrderBy>>;
};


export type UserDomainAccessesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  condition?: InputMaybe<DomainAccessCondition>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DomainAccessesOrderBy>>;
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `cognitoId` field. */
  cognitoId?: InputMaybe<Scalars['UUID']['input']>;
  /** Checks for equality with the object’s `domainId` field. */
  domainId?: InputMaybe<Scalars['ShortId']['input']>;
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['ShortId']['input']>;
};

/** An input for mutations affecting `User` */
export type UserInput = {
  cognitoId: Scalars['UUID']['input'];
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdBy?: InputMaybe<Scalars['ShortId']['input']>;
  domainId?: InputMaybe<Scalars['ShortId']['input']>;
  email: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ShortId']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  updatedBy?: InputMaybe<Scalars['ShortId']['input']>;
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  cognitoId?: InputMaybe<Scalars['UUID']['input']>;
  createdAt?: InputMaybe<Scalars['Datetime']['input']>;
  createdBy?: InputMaybe<Scalars['ShortId']['input']>;
  domainId?: InputMaybe<Scalars['ShortId']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ShortId']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['Datetime']['input']>;
  updatedBy?: InputMaybe<Scalars['ShortId']['input']>;
};

/** A connection to a list of `User` values. */
export type UsersConnection = {
  __typename?: 'UsersConnection';
  /** A list of edges which contains the `User` and cursor to aid in pagination. */
  edges: Array<UsersEdge>;
  /** A list of `User` objects. */
  nodes: Array<User>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** The count of *all* `User` you could get from the connection. */
  totalCount: Scalars['Int']['output'];
};

/** A `User` edge in the connection. */
export type UsersEdge = {
  __typename?: 'UsersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']['output']>;
  /** The `User` at the end of the edge. */
  node: User;
};

/** Methods to use when ordering `User`. */
export enum UsersOrderBy {
  CognitoIdAsc = 'COGNITO_ID_ASC',
  CognitoIdDesc = 'COGNITO_ID_DESC',
  DomainIdAsc = 'DOMAIN_ID_ASC',
  DomainIdDesc = 'DOMAIN_ID_DESC',
  EmailAsc = 'EMAIL_ASC',
  EmailDesc = 'EMAIL_DESC',
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  Natural = 'NATURAL'
}

export type MyQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MyQueryQuery = { __typename?: 'Query', users?: Array<{ __typename?: 'User', createdAt: any, name: string }> | null };


export const MyQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MyQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"users"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<MyQueryQuery, MyQueryQueryVariables>;