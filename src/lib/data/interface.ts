export interface BaseEntity {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ValueProposition extends BaseEntity {
  title: string;
  description: string;
  impact: 'HIGH' | 'MEDIUM' | 'LOW';
  effort: 'LOW' | 'MEDIUM' | 'HIGH';
  confidence: 'HIGH' | 'MEDIUM' | 'LOW';
}

export interface Project extends BaseEntity {
  name: string;
  description: string;
  status: 'ACTIVE' | 'ON_HOLD' | 'COMPLETED' | 'CANCELLED';
  startDate: Date;
  endDate?: Date;
  teamIds: string[];
}

export enum TaskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  REVIEW = 'REVIEW',
  DONE = 'DONE'
}

export interface Task extends BaseEntity {
  title: string;
  description: string;
  status: TaskStatus;
  assigneeId: string;
  dueDate: Date;
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  projectId: string;
}

export interface Document extends BaseEntity {
  title: string;
  content: string;
  type: 'SPECIFICATION' | 'DESIGN' | 'DOCUMENTATION' | 'OTHER';
  projectId: string;
}

export interface TeamMember extends BaseEntity {
  name: string;
  role: string;
  email: string;
  avatar?: string;
  department: string;
  reportsTo: string | null;
  skills: string[];
}

export enum ParticipantType {
  AGENT = 'AGENT',
  TEAM_MEMBER = 'TEAM_MEMBER'
}

export interface Agent extends BaseEntity {
  name: string;
  type: string;
  handle: string;
  description: string;
  capabilities: string[];
}

export interface KPI extends BaseEntity {
  level: string;
  title: string;
  frequency: string;
  owner: string;
  ownerInitials: string;
  target: number;
  current: number;
  children: KPI[];
}

export interface BusinessDriver extends BaseEntity {
  name: string;
  percentage: number;
  color: string;
}

export interface Message extends BaseEntity {
  content: string;
  sender: 'user' | 'agent';
  timestamp: string;
  agentId: string;
}
