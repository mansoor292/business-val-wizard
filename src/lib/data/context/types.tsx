import {
  ValueProposition,
  Initiative,
  Metric,
  Project,
  Task,
  Document,
  Comment,
  TeamMember,
  Agent,
  Message,
  ValuePropositionFilters,
  InitiativeFilters,
  MetricFilters,
  ProjectFilters,
  TaskFilters,
  DocumentFilters,
  CommentFilters,
  TeamMemberFilters,
  BaseEntity,
  DataAdapter
} from '../types';

export interface DataContextType {
  // State
  valuePropositions: ValueProposition[];
  initiatives: Initiative[];
  metrics: Metric[];
  projects: Project[];
  tasks: Task[];
  documents: Document[];
  comments: Comment[];
  teamMembers: TeamMember[];
  selectedProjectId: string | null;
  agents: Agent[];
  messages: Message[];

  // Value Proposition operations
  getValueProposition: (id: string) => Promise<ValueProposition>;
  listValuePropositions: (filters?: ValuePropositionFilters) => Promise<ValueProposition[]>;
  createValueProposition: (data: Omit<ValueProposition, keyof BaseEntity>) => Promise<ValueProposition>;
  updateValueProposition: (id: string, data: Partial<ValueProposition>) => Promise<ValueProposition>;

  // Initiative operations
  getInitiative: (id: string) => Promise<Initiative>;
  listInitiatives: (filters?: InitiativeFilters) => Promise<Initiative[]>;
  createInitiative: (data: Omit<Initiative, keyof BaseEntity>) => Promise<Initiative>;
  updateInitiative: (id: string, data: Partial<Initiative>) => Promise<Initiative>;

  // Metric operations
  getMetric: (id: string) => Promise<Metric>;
  listMetrics: (filters?: MetricFilters) => Promise<Metric[]>;
  createMetric: (data: Omit<Metric, keyof BaseEntity>) => Promise<Metric>;
  updateMetric: (id: string, data: Partial<Metric>) => Promise<Metric>;

  // Project operations
  getProject: (id: string) => Promise<Project>;
  listProjects: (filters?: ProjectFilters) => Promise<Project[]>;
  createProject: (data: Omit<Project, keyof BaseEntity>) => Promise<Project>;
  updateProject: (id: string, data: Partial<Project>) => Promise<Project>;
  loadProject: (projectId: string) => Promise<void>;
  loadAllProjects: () => Promise<void>;

  // Task operations
  getTask: (id: string) => Promise<Task>;
  listTasks: (filters?: TaskFilters) => Promise<Task[]>;
  createTask: (data: Omit<Task, keyof BaseEntity>) => Promise<Task>;
  updateTask: (id: string, data: Partial<Task>) => Promise<Task>;
  updateTaskStatus: (taskId: string, newStatus: Task['status']) => Promise<void>;

  // Document operations
  getDocument: (id: string) => Promise<Document>;
  listDocuments: (filters?: DocumentFilters) => Promise<Document[]>;
  createDocument: (data: Omit<Document, keyof BaseEntity>) => Promise<Document>;
  updateDocument: (id: string, data: Partial<Document>) => Promise<Document>;

  // Comment operations
  getComment: (id: string) => Promise<Comment>;
  listComments: (filters?: CommentFilters) => Promise<Comment[]>;
  createComment: (data: Omit<Comment, keyof BaseEntity>) => Promise<Comment>;
  updateComment: (id: string, data: Partial<Comment>) => Promise<Comment>;

  // Team Member operations
  getTeamMember: (id: string) => Promise<TeamMember>;
  listTeamMembers: (filters?: TeamMemberFilters) => Promise<TeamMember[]>;
  createTeamMember: (data: Omit<TeamMember, keyof BaseEntity>) => Promise<TeamMember>;
  updateTeamMember: (id: string, data: Partial<TeamMember>) => Promise<TeamMember>;

  // Agent operations
  listAgents: () => Promise<Agent[]>;
  getAgent: (id: string) => Promise<Agent | undefined>;
  listMessages: (agentId: string) => Promise<Message[]>;
  sendMessage: (agentId: string, content: string) => Promise<Message>;
}

export interface DataProviderProps {
  children: React.ReactNode;
  adapter: DataAdapter;
}
