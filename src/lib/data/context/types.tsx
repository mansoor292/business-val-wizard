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
  Message as AgentMessage,
  ValuePropositionFilters,
  InitiativeFilters,
  MetricFilters,
  ProjectFilters,
  TaskFilters,
  DocumentFilters,
  CommentFilters,
  TeamMemberFilters,
  DataAdapter,
  BaseEntity
} from '../types';

import {
  Chat,
  Message,
  ParticipantType,
  ChatFilters,
  MessageFilters
} from '../types/chat';

export interface DataProviderProps {
  children: React.ReactNode;
  adapter: DataAdapter;
}

export interface DataContextType {
  // Value Proposition operations
  valuePropositions: ValueProposition[];
  listValuePropositions: (filters?: ValuePropositionFilters) => Promise<ValueProposition[]>;
  getValueProposition: (id: string) => Promise<ValueProposition | undefined>;
  createValueProposition: (data: Omit<ValueProposition, keyof BaseEntity>) => Promise<ValueProposition>;
  updateValueProposition: (id: string, data: Partial<ValueProposition>) => Promise<ValueProposition>;

  // Initiative operations
  initiatives: Initiative[];
  listInitiatives: (filters?: InitiativeFilters) => Promise<Initiative[]>;
  getInitiative: (id: string) => Promise<Initiative | undefined>;
  createInitiative: (data: Omit<Initiative, keyof BaseEntity>) => Promise<Initiative>;
  updateInitiative: (id: string, data: Partial<Initiative>) => Promise<Initiative>;

  // Metric operations
  metrics: Metric[];
  listMetrics: (filters?: MetricFilters) => Promise<Metric[]>;
  getMetric: (id: string) => Promise<Metric | undefined>;
  createMetric: (data: Omit<Metric, keyof BaseEntity>) => Promise<Metric>;
  updateMetric: (id: string, data: Partial<Metric>) => Promise<Metric>;

  // Project operations
  projects: Project[];
  selectedProjectId: string | null;
  listProjects: (filters?: ProjectFilters) => Promise<Project[]>;
  getProject: (id: string) => Promise<Project | undefined>;
  createProject: (data: Omit<Project, keyof BaseEntity>) => Promise<Project>;
  updateProject: (id: string, data: Partial<Project>) => Promise<Project>;
  loadProject: (projectId: string) => Promise<void>;
  loadAllProjects: () => Promise<void>;

  // Task operations
  tasks: Task[];
  listTasks: (filters?: TaskFilters) => Promise<Task[]>;
  getTask: (id: string) => Promise<Task | undefined>;
  createTask: (data: Omit<Task, keyof BaseEntity>) => Promise<Task>;
  updateTask: (id: string, data: Partial<Task>) => Promise<Task>;
  updateTaskStatus: (taskId: string, newStatus: Task['status']) => Promise<void>;

  // Document operations
  documents: Document[];
  listDocuments: (filters?: DocumentFilters) => Promise<Document[]>;
  getDocument: (id: string) => Promise<Document | undefined>;
  createDocument: (data: Omit<Document, keyof BaseEntity>) => Promise<Document>;
  updateDocument: (id: string, data: Partial<Document>) => Promise<Document>;

  // Comment operations
  comments: Comment[];
  listComments: (filters?: CommentFilters) => Promise<Comment[]>;
  getComment: (id: string) => Promise<Comment | undefined>;
  createComment: (data: Omit<Comment, keyof BaseEntity>) => Promise<Comment>;
  updateComment: (id: string, data: Partial<Comment>) => Promise<Comment>;

  // Team Member operations
  teamMembers: TeamMember[];
  listTeamMembers: (filters?: TeamMemberFilters) => Promise<TeamMember[]>;
  getTeamMember: (id: string) => Promise<TeamMember | undefined>;
  createTeamMember: (data: Omit<TeamMember, keyof BaseEntity>) => Promise<TeamMember>;
  updateTeamMember: (id: string, data: Partial<TeamMember>) => Promise<TeamMember>;

  // Agent operations
  agents: Agent[];
  messages: AgentMessage[];
  listAgents: () => Promise<Agent[]>;
  getAgent: (id: string) => Promise<Agent | undefined>;
  listMessages: (agentId: string) => Promise<AgentMessage[]>;
  sendMessage: (agentId: string, content: string) => Promise<AgentMessage>;

  // Chat operations
  chats: Chat[];
  chatMessages: Message[];
  activeChat: string | null;
  initializeChat: (participantId: string, participantType: ParticipantType) => Promise<Chat>;
  listChats: (filters?: ChatFilters) => Promise<Chat[]>;
  getChat: (id: string) => Promise<Chat | undefined>;
  listChatMessages: (filters?: MessageFilters) => Promise<Message[]>;
  sendChatMessage: (chatId: string, content: string, sender: Message['sender'], participantType?: ParticipantType) => Promise<Message>;
  archiveChat: (chatId: string) => Promise<void>;
}
