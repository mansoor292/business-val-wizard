import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetchData } from './fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Cursor: any;
  Date: any;
  Datetime: any;
  JSON: any;
  ShortId: any;
  UUID: any;
};

/** Logs administrative activities like enabling/disabling auditing */
export type AdminActivityLog = {
  __typename?: 'AdminActivityLog';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ShortId'];
  operation: Scalars['String'];
  performedAt: Scalars['Datetime'];
  performedBy?: Maybe<Scalars['ShortId']>;
};

/**
 * A condition to be used against `AdminActivityLog` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type AdminActivityLogCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['ShortId']>;
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
  totalCount: Scalars['Int'];
};

/** A `AdminActivityLog` edge in the connection. */
export type AdminActivityLogsEdge = {
  __typename?: 'AdminActivityLogsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
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
  changedAt: Scalars['Datetime'];
  /** ID of the user who made the change */
  changedBy?: Maybe<Scalars['ShortId']>;
  /** Unique identifier for the audit log entry */
  id: Scalars['ShortId'];
  /** New state of the record (for INSERT and UPDATE) */
  newData?: Maybe<Scalars['JSON']>;
  /** Previous state of the record (for UPDATE and DELETE) */
  oldData?: Maybe<Scalars['JSON']>;
  /** Type of operation performed (INSERT, UPDATE, DELETE) */
  operation: AuditOperation;
  /** ID of the record that was changed */
  recordId: Scalars['ShortId'];
  /** Name of the table where the change occurred */
  tableName: Scalars['String'];
};

/**
 * A condition to be used against `AuditLog` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type AuditLogCondition = {
  /** Checks for equality with the object’s `changedAt` field. */
  changedAt?: InputMaybe<Scalars['Datetime']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['ShortId']>;
  /** Checks for equality with the object’s `tableName` field. */
  tableName?: InputMaybe<Scalars['String']>;
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
  totalCount: Scalars['Int'];
};

/** A `AuditLog` edge in the connection. */
export type AuditLogsEdge = {
  __typename?: 'AuditLogsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
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
  totalCount: Scalars['Int'];
};

/** A `BaseEntity` edge in the connection. */
export type BaseEntitiesEdge = {
  __typename?: 'BaseEntitiesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
  /** The `BaseEntity` at the end of the edge. */
  node: BaseEntity;
};

/** Methods to use when ordering `BaseEntity`. */
export enum BaseEntitiesOrderBy {
  Natural = 'NATURAL'
}

export type BaseEntity = {
  __typename?: 'BaseEntity';
  createdAt: Scalars['Datetime'];
  createdBy?: Maybe<Scalars['ShortId']>;
  domainId?: Maybe<Scalars['ShortId']>;
  id: Scalars['ShortId'];
  name: Scalars['String'];
  updatedAt: Scalars['Datetime'];
  updatedBy?: Maybe<Scalars['ShortId']>;
};

/** An input for mutations affecting `BaseEntity` */
export type BaseEntityInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  createdBy?: InputMaybe<Scalars['ShortId']>;
  domainId?: InputMaybe<Scalars['ShortId']>;
  id?: InputMaybe<Scalars['ShortId']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  updatedBy?: InputMaybe<Scalars['ShortId']>;
};

export type BaseObject = {
  __typename?: 'BaseObject';
  createdAt: Scalars['Datetime'];
  createdBy?: Maybe<Scalars['ShortId']>;
  id: Scalars['ShortId'];
  updatedAt: Scalars['Datetime'];
};

/**
 * A condition to be used against `BaseObject` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type BaseObjectCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['ShortId']>;
};

/** An input for mutations affecting `BaseObject` */
export type BaseObjectInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  createdBy?: InputMaybe<Scalars['ShortId']>;
  id?: InputMaybe<Scalars['ShortId']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** Represents an update to a `BaseObject`. Fields that are set will be updated. */
export type BaseObjectPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  createdBy?: InputMaybe<Scalars['ShortId']>;
  id?: InputMaybe<Scalars['ShortId']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
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
  totalCount: Scalars['Int'];
};

/** A `BaseObject` edge in the connection. */
export type BaseObjectsEdge = {
  __typename?: 'BaseObjectsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
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
  clientMutationId?: InputMaybe<Scalars['String']>;
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
  clientMutationId?: Maybe<Scalars['String']>;
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
  clientMutationId?: InputMaybe<Scalars['String']>;
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
  clientMutationId?: Maybe<Scalars['String']>;
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
  clientMutationId?: InputMaybe<Scalars['String']>;
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
  clientMutationId?: Maybe<Scalars['String']>;
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
  clientMutationId?: InputMaybe<Scalars['String']>;
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
  clientMutationId?: Maybe<Scalars['String']>;
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
  clientMutationId?: InputMaybe<Scalars['String']>;
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
  clientMutationId?: Maybe<Scalars['String']>;
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
  clientMutationId?: InputMaybe<Scalars['String']>;
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
  clientMutationId?: Maybe<Scalars['String']>;
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
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['ShortId'];
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
  clientMutationId?: Maybe<Scalars['String']>;
  deletedBaseObjectNodeId?: Maybe<Scalars['ID']>;
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
  clientMutationId?: InputMaybe<Scalars['String']>;
  domainId: Scalars['ShortId'];
  userId: Scalars['ShortId'];
};

/** The output of our delete `DomainAccess` mutation. */
export type DeleteDomainAccessPayload = {
  __typename?: 'DeleteDomainAccessPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedDomainAccessNodeId?: Maybe<Scalars['ID']>;
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
  clientMutationId?: InputMaybe<Scalars['String']>;
  code: Scalars['String'];
};

/** All input for the `deleteDomainById` mutation. */
export type DeleteDomainByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['ShortId'];
};

/** The output of our delete `Domain` mutation. */
export type DeleteDomainPayload = {
  __typename?: 'DeleteDomainPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedDomainNodeId?: Maybe<Scalars['ID']>;
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
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['ShortId'];
};

/** All input for the `deleteTeamMemberByUserId` mutation. */
export type DeleteTeamMemberByUserIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  userId: Scalars['ShortId'];
};

/** The output of our delete `TeamMember` mutation. */
export type DeleteTeamMemberPayload = {
  __typename?: 'DeleteTeamMemberPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedTeamMemberNodeId?: Maybe<Scalars['ID']>;
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
  clientMutationId?: InputMaybe<Scalars['String']>;
  cognitoId: Scalars['UUID'];
};

/** All input for the `deleteUserByEmail` mutation. */
export type DeleteUserByEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
};

/** All input for the `deleteUserById` mutation. */
export type DeleteUserByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['ShortId'];
};

/** The output of our delete `User` mutation. */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  deletedUserNodeId?: Maybe<Scalars['ID']>;
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
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our `disableAuditing` mutation. */
export type DisableAuditingPayload = {
  __typename?: 'DisableAuditingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

export type Domain = {
  __typename?: 'Domain';
  code: Scalars['String'];
  createdAt: Scalars['Datetime'];
  createdBy?: Maybe<Scalars['ShortId']>;
  /** Reads and enables pagination through a set of `DomainAccess`. */
  domainAccesses: Array<DomainAccess>;
  /** Reads and enables pagination through a set of `DomainAccess`. */
  domainAccessesConnection: DomainAccessesConnection;
  id: Scalars['ShortId'];
  updatedAt: Scalars['Datetime'];
  /** Reads and enables pagination through a set of `User`. */
  users: Array<User>;
  /** Reads and enables pagination through a set of `User`. */
  usersConnection: UsersConnection;
};


export type DomainDomainAccessesArgs = {
  condition?: InputMaybe<DomainAccessCondition>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DomainAccessesOrderBy>>;
};


export type DomainDomainAccessesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<DomainAccessCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DomainAccessesOrderBy>>;
};


export type DomainUsersArgs = {
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};


export type DomainUsersConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

export type DomainAccess = {
  __typename?: 'DomainAccess';
  createdAt: Scalars['Datetime'];
  /** Reads a single `Domain` that is related to this `DomainAccess`. */
  domain?: Maybe<Domain>;
  domainId: Scalars['ShortId'];
  isAdmin?: Maybe<Scalars['Boolean']>;
  /** Reads a single `User` that is related to this `DomainAccess`. */
  user?: Maybe<User>;
  userId: Scalars['ShortId'];
};

/**
 * A condition to be used against `DomainAccess` object types. All fields are
 * tested for equality and combined with a logical ‘and.’
 */
export type DomainAccessCondition = {
  /** Checks for equality with the object’s `domainId` field. */
  domainId?: InputMaybe<Scalars['ShortId']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['ShortId']>;
};

/** An input for mutations affecting `DomainAccess` */
export type DomainAccessInput = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  domainId: Scalars['ShortId'];
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  userId: Scalars['ShortId'];
};

/** Represents an update to a `DomainAccess`. Fields that are set will be updated. */
export type DomainAccessPatch = {
  createdAt?: InputMaybe<Scalars['Datetime']>;
  domainId?: InputMaybe<Scalars['ShortId']>;
  isAdmin?: InputMaybe<Scalars['Boolean']>;
  userId?: InputMaybe<Scalars['ShortId']>;
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
  totalCount: Scalars['Int'];
};

/** A `DomainAccess` edge in the connection. */
export type DomainAccessesEdge = {
  __typename?: 'DomainAccessesEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
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
  code?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['ShortId']>;
};

/** An input for mutations affecting `Domain` */
export type DomainInput = {
  code: Scalars['String'];
  createdAt?: InputMaybe<Scalars['Datetime']>;
  createdBy?: InputMaybe<Scalars['ShortId']>;
  id?: InputMaybe<Scalars['ShortId']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
};

/** Represents an update to a `Domain`. Fields that are set will be updated. */
export type DomainPatch = {
  code?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  createdBy?: InputMaybe<Scalars['ShortId']>;
  id?: InputMaybe<Scalars['ShortId']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
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
  totalCount: Scalars['Int'];
};

/** A `Domain` edge in the connection. */
export type DomainsEdge = {
  __typename?: 'DomainsEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
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
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our `enableAuditing` mutation. */
export type EnableAuditingPayload = {
  __typename?: 'EnableAuditingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `executeWithoutAuditing` mutation. */
export type ExecuteWithoutAuditingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  operation?: InputMaybe<Scalars['String']>;
};

/** The output of our `executeWithoutAuditing` mutation. */
export type ExecuteWithoutAuditingPayload = {
  __typename?: 'ExecuteWithoutAuditingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

/** All input for the `generateShortId` mutation. */
export type GenerateShortIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
};

/** The output of our `generateShortId` mutation. */
export type GenerateShortIdPayload = {
  __typename?: 'GenerateShortIdPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
  shortId?: Maybe<Scalars['ShortId']>;
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
  endCursor?: Maybe<Scalars['Cursor']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['Cursor']>;
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
  currentUserId?: Maybe<Scalars['ShortId']>;
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
  shouldAudit?: Maybe<Scalars['Boolean']>;
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
  id: Scalars['ShortId'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAdminActivityLogsArgs = {
  condition?: InputMaybe<AdminActivityLogCondition>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AdminActivityLogsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAdminActivityLogsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<AdminActivityLogCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AdminActivityLogsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAuditHistoryArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  pRecordId?: InputMaybe<Scalars['ShortId']>;
  pTableName?: InputMaybe<Scalars['String']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAuditHistoryConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  pRecordId?: InputMaybe<Scalars['ShortId']>;
  pTableName?: InputMaybe<Scalars['String']>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAuditLogArgs = {
  id: Scalars['ShortId'];
};


/** The root query type which gives access points into the data universe. */
export type QueryAuditLogsArgs = {
  condition?: InputMaybe<AuditLogCondition>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuditLogsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryAuditLogsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<AuditLogCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<AuditLogsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryBaseEntitiesArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BaseEntitiesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryBaseEntitiesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BaseEntitiesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryBaseObjectArgs = {
  id: Scalars['ShortId'];
};


/** The root query type which gives access points into the data universe. */
export type QueryBaseObjectsArgs = {
  condition?: InputMaybe<BaseObjectCondition>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BaseObjectsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryBaseObjectsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<BaseObjectCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<BaseObjectsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryDomainAccessArgs = {
  domainId: Scalars['ShortId'];
  userId: Scalars['ShortId'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDomainAccessesArgs = {
  condition?: InputMaybe<DomainAccessCondition>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DomainAccessesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryDomainAccessesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<DomainAccessCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DomainAccessesOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryDomainByCodeArgs = {
  code: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDomainByIdArgs = {
  id: Scalars['ShortId'];
};


/** The root query type which gives access points into the data universe. */
export type QueryDomainsArgs = {
  condition?: InputMaybe<DomainCondition>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DomainsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryDomainsConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<DomainCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DomainsOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryTeamMemberByIdArgs = {
  id: Scalars['ShortId'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTeamMemberByUserIdArgs = {
  userId: Scalars['ShortId'];
};


/** The root query type which gives access points into the data universe. */
export type QueryTeamMembersArgs = {
  condition?: InputMaybe<TeamMemberCondition>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TeamMembersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryTeamMembersConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<TeamMemberCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TeamMembersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByCognitoIdArgs = {
  cognitoId: Scalars['UUID'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByEmailArgs = {
  email: Scalars['String'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUserByIdArgs = {
  id: Scalars['ShortId'];
};


/** The root query type which gives access points into the data universe. */
export type QueryUsersArgs = {
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};


/** The root query type which gives access points into the data universe. */
export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<UserCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<UsersOrderBy>>;
};

/** All input for the `setupTableAuditing` mutation. */
export type SetupTableAuditingInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  targetTable?: InputMaybe<Scalars['String']>;
};

/** The output of our `setupTableAuditing` mutation. */
export type SetupTableAuditingPayload = {
  __typename?: 'SetupTableAuditingPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
  /** Our root query field type. Allows us to run any query from our mutation payload. */
  query?: Maybe<Query>;
};

export type TeamMember = {
  __typename?: 'TeamMember';
  /**         Get audit history for this entity */
  auditHistory?: Maybe<Array<AuditLog>>;
  /**         Get audit history for this entity */
  auditHistoryConnection: AuditLogsConnection;
  bio?: Maybe<Scalars['String']>;
  createdAt: Scalars['Datetime'];
  createdBy?: Maybe<Scalars['ShortId']>;
  department?: Maybe<Scalars['String']>;
  domainId?: Maybe<Scalars['ShortId']>;
  employmentStatus: Scalars['String'];
  hireDate?: Maybe<Scalars['Date']>;
  id: Scalars['ShortId'];
  jobTitle?: Maybe<Scalars['String']>;
  manager?: Maybe<Scalars['ShortId']>;
  name: Scalars['String'];
  officeLocation?: Maybe<Scalars['String']>;
  /** Reads a single `TeamMember` that is related to this `TeamMember`. */
  teamMemberByManager?: Maybe<TeamMember>;
  /** Reads and enables pagination through a set of `TeamMember`. */
  teamMembersByManager: Array<TeamMember>;
  /** Reads and enables pagination through a set of `TeamMember`. */
  teamMembersByManagerConnection: TeamMembersConnection;
  updatedAt: Scalars['Datetime'];
  updatedBy?: Maybe<Scalars['ShortId']>;
  /** Reads a single `User` that is related to this `TeamMember`. */
  user?: Maybe<User>;
  userId?: Maybe<Scalars['ShortId']>;
  workEmail?: Maybe<Scalars['String']>;
  workPhone?: Maybe<Scalars['String']>;
};


export type TeamMemberAuditHistoryArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type TeamMemberAuditHistoryConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type TeamMemberTeamMembersByManagerArgs = {
  condition?: InputMaybe<TeamMemberCondition>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TeamMembersOrderBy>>;
};


export type TeamMemberTeamMembersByManagerConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<TeamMemberCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<TeamMembersOrderBy>>;
};

/**
 * A condition to be used against `TeamMember` object types. All fields are tested
 * for equality and combined with a logical ‘and.’
 */
export type TeamMemberCondition = {
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['ShortId']>;
  /** Checks for equality with the object’s `manager` field. */
  manager?: InputMaybe<Scalars['ShortId']>;
  /** Checks for equality with the object’s `userId` field. */
  userId?: InputMaybe<Scalars['ShortId']>;
};

/** An input for mutations affecting `TeamMember` */
export type TeamMemberInput = {
  bio?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  createdBy?: InputMaybe<Scalars['ShortId']>;
  department?: InputMaybe<Scalars['String']>;
  domainId?: InputMaybe<Scalars['ShortId']>;
  employmentStatus?: InputMaybe<Scalars['String']>;
  hireDate?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ShortId']>;
  jobTitle?: InputMaybe<Scalars['String']>;
  manager?: InputMaybe<Scalars['ShortId']>;
  name: Scalars['String'];
  officeLocation?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  updatedBy?: InputMaybe<Scalars['ShortId']>;
  userId?: InputMaybe<Scalars['ShortId']>;
  workEmail?: InputMaybe<Scalars['String']>;
  workPhone?: InputMaybe<Scalars['String']>;
};

/** Represents an update to a `TeamMember`. Fields that are set will be updated. */
export type TeamMemberPatch = {
  bio?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  createdBy?: InputMaybe<Scalars['ShortId']>;
  department?: InputMaybe<Scalars['String']>;
  domainId?: InputMaybe<Scalars['ShortId']>;
  employmentStatus?: InputMaybe<Scalars['String']>;
  hireDate?: InputMaybe<Scalars['Date']>;
  id?: InputMaybe<Scalars['ShortId']>;
  jobTitle?: InputMaybe<Scalars['String']>;
  manager?: InputMaybe<Scalars['ShortId']>;
  name?: InputMaybe<Scalars['String']>;
  officeLocation?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  updatedBy?: InputMaybe<Scalars['ShortId']>;
  userId?: InputMaybe<Scalars['ShortId']>;
  workEmail?: InputMaybe<Scalars['String']>;
  workPhone?: InputMaybe<Scalars['String']>;
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
  totalCount: Scalars['Int'];
};

/** A `TeamMember` edge in the connection. */
export type TeamMembersEdge = {
  __typename?: 'TeamMembersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
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
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['ShortId'];
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
  clientMutationId?: Maybe<Scalars['String']>;
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
  clientMutationId?: InputMaybe<Scalars['String']>;
  domainId: Scalars['ShortId'];
  /** An object where the defined keys will be set on the `DomainAccess` being updated. */
  patch: DomainAccessPatch;
  userId: Scalars['ShortId'];
};

/** The output of our update `DomainAccess` mutation. */
export type UpdateDomainAccessPayload = {
  __typename?: 'UpdateDomainAccessPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
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
  clientMutationId?: InputMaybe<Scalars['String']>;
  code: Scalars['String'];
  /** An object where the defined keys will be set on the `Domain` being updated. */
  patch: DomainPatch;
};

/** All input for the `updateDomainById` mutation. */
export type UpdateDomainByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['ShortId'];
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
  clientMutationId?: Maybe<Scalars['String']>;
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
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['ShortId'];
  /** An object where the defined keys will be set on the `TeamMember` being updated. */
  patch: TeamMemberPatch;
};

/** All input for the `updateTeamMemberByUserId` mutation. */
export type UpdateTeamMemberByUserIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  /** An object where the defined keys will be set on the `TeamMember` being updated. */
  patch: TeamMemberPatch;
  userId: Scalars['ShortId'];
};

/** The output of our update `TeamMember` mutation. */
export type UpdateTeamMemberPayload = {
  __typename?: 'UpdateTeamMemberPayload';
  /**
   * The exact same `clientMutationId` that was provided in the mutation input,
   * unchanged and unused. May be used by a client to track mutations.
   */
  clientMutationId?: Maybe<Scalars['String']>;
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
  clientMutationId?: InputMaybe<Scalars['String']>;
  cognitoId: Scalars['UUID'];
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch;
};

/** All input for the `updateUserByEmail` mutation. */
export type UpdateUserByEmailInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  /** An object where the defined keys will be set on the `User` being updated. */
  patch: UserPatch;
};

/** All input for the `updateUserById` mutation. */
export type UpdateUserByIdInput = {
  /**
   * An arbitrary string value with no semantic meaning. Will be included in the
   * payload verbatim. May be used to track mutations by the client.
   */
  clientMutationId?: InputMaybe<Scalars['String']>;
  id: Scalars['ShortId'];
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
  clientMutationId?: Maybe<Scalars['String']>;
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
  cognitoId: Scalars['UUID'];
  createdAt: Scalars['Datetime'];
  createdBy?: Maybe<Scalars['ShortId']>;
  /** Reads a single `Domain` that is related to this `User`. */
  domain?: Maybe<Domain>;
  /** Reads and enables pagination through a set of `DomainAccess`. */
  domainAccesses: Array<DomainAccess>;
  /** Reads and enables pagination through a set of `DomainAccess`. */
  domainAccessesConnection: DomainAccessesConnection;
  domainId?: Maybe<Scalars['ShortId']>;
  email: Scalars['String'];
  id: Scalars['ShortId'];
  name: Scalars['String'];
  /** Reads a single `TeamMember` that is related to this `User`. */
  teamMember?: Maybe<TeamMember>;
  updatedAt: Scalars['Datetime'];
  updatedBy?: Maybe<Scalars['ShortId']>;
};


export type UserDomainAccessesArgs = {
  condition?: InputMaybe<DomainAccessCondition>;
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DomainAccessesOrderBy>>;
};


export type UserDomainAccessesConnectionArgs = {
  after?: InputMaybe<Scalars['Cursor']>;
  before?: InputMaybe<Scalars['Cursor']>;
  condition?: InputMaybe<DomainAccessCondition>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Array<DomainAccessesOrderBy>>;
};

/** A condition to be used against `User` object types. All fields are tested for equality and combined with a logical ‘and.’ */
export type UserCondition = {
  /** Checks for equality with the object’s `cognitoId` field. */
  cognitoId?: InputMaybe<Scalars['UUID']>;
  /** Checks for equality with the object’s `domainId` field. */
  domainId?: InputMaybe<Scalars['ShortId']>;
  /** Checks for equality with the object’s `email` field. */
  email?: InputMaybe<Scalars['String']>;
  /** Checks for equality with the object’s `id` field. */
  id?: InputMaybe<Scalars['ShortId']>;
};

/** An input for mutations affecting `User` */
export type UserInput = {
  cognitoId: Scalars['UUID'];
  createdAt?: InputMaybe<Scalars['Datetime']>;
  createdBy?: InputMaybe<Scalars['ShortId']>;
  domainId?: InputMaybe<Scalars['ShortId']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['ShortId']>;
  name: Scalars['String'];
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  updatedBy?: InputMaybe<Scalars['ShortId']>;
};

/** Represents an update to a `User`. Fields that are set will be updated. */
export type UserPatch = {
  cognitoId?: InputMaybe<Scalars['UUID']>;
  createdAt?: InputMaybe<Scalars['Datetime']>;
  createdBy?: InputMaybe<Scalars['ShortId']>;
  domainId?: InputMaybe<Scalars['ShortId']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ShortId']>;
  name?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['Datetime']>;
  updatedBy?: InputMaybe<Scalars['ShortId']>;
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
  totalCount: Scalars['Int'];
};

/** A `User` edge in the connection. */
export type UsersEdge = {
  __typename?: 'UsersEdge';
  /** A cursor for use in pagination. */
  cursor?: Maybe<Scalars['Cursor']>;
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



export const MyQueryDocument = `
    query MyQuery {
  users {
    createdAt
    name
  }
}
    `;

export const useMyQueryQuery = <
      TData = MyQueryQuery,
      TError = unknown
    >(
      variables?: MyQueryQueryVariables,
      options?: UseQueryOptions<MyQueryQuery, TError, TData>
    ) => {
    
    return useQuery<MyQueryQuery, TError, TData>(
      variables === undefined ? ['MyQuery'] : ['MyQuery', variables],
      fetchData<MyQueryQuery, MyQueryQueryVariables>(MyQueryDocument, variables),
      options
    )};
