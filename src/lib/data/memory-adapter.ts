import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';
import { generateMockProjects, generateMockTasks, generateMockDocuments, generateMockTeamMembers } from '../mock/business-data';
import {
  DataAdapter,
  ValueProposition,
  Initiative,
  Metric,
  Project,
  Task,
  Document,
  Comment,
  TeamMember,
  ValuePropositionFilters,
  InitiativeFilters,
  MetricFilters,
  ProjectFilters,
  TaskFilters,
  DocumentFilters,
  CommentFilters,
  TeamMemberFilters,
  BaseEntity
} from './types';

export class MemoryAdapter implements DataAdapter {
  private valuePropositions: ValueProposition[] = [];
  private initiatives: Initiative[] = [];
  private metrics: Metric[] = [];
  private projects: Project[] = [];
  private tasks: Task[] = [];
  private documents: Document[] = [];
  private comments: Comment[] = [];
  private teamMembers: TeamMember[] = [];

  constructor() {
    // Initialize with mock team members first
    const mockTeamMembers = generateMockTeamMembers(10).map(m => this.createEntity<TeamMember>(m));
    this.teamMembers = mockTeamMembers;
    const teamMemberIds = mockTeamMembers.map(m => m.id);

    // Initialize projects with real team member IDs
    const mockProjects = generateMockProjects(5).map(p => {
      const numTeamMembers = faker.number.int({ min: 2, max: 5 });
      const projectTeamIds = faker.helpers.arrayElements(teamMemberIds, numTeamMembers);
      return this.createEntity<Project>({ ...p, teamIds: projectTeamIds });
    });
    this.projects = mockProjects;
    
    // Generate tasks and documents for each project
    mockProjects.forEach(project => {
      const projectTeamIds = project.teamIds;
      const mockTasks = generateMockTasks(project.id, 8).map(t => 
        this.createEntity<Task>({
          ...t,
          assigneeId: faker.helpers.arrayElement(projectTeamIds)
        })
      );
      const mockDocs = generateMockDocuments(project.id, 4).map(d => 
        this.createEntity<Document>(d)
      );
      
      this.tasks.push(...mockTasks);
      this.documents.push(...mockDocs);
    });
  }

  private createEntity<T extends BaseEntity>(data: Omit<T, keyof BaseEntity>): T {
    const now = new Date();
    return {
      ...data,
      id: uuidv4(),
      createdAt: now,
      updatedAt: now,
    } as T;
  }

  private updateEntity<T extends BaseEntity>(entity: T, data: Partial<T>): T {
    return {
      ...entity,
      ...data,
      updatedAt: new Date(),
    };
  }

  // Value Proposition operations
  async getValueProposition(id: string): Promise<ValueProposition> {
    const vp = this.valuePropositions.find(vp => vp.id === id);
    if (!vp) throw new Error(`Value proposition not found: ${id}`);
    return vp;
  }

  async listValuePropositions(filters?: ValuePropositionFilters): Promise<ValueProposition[]> {
    let filtered = [...this.valuePropositions];
    if (filters) {
      if (filters.impact) filtered = filtered.filter(vp => vp.impact === filters.impact);
      if (filters.effort) filtered = filtered.filter(vp => vp.effort === filters.effort);
      if (filters.confidence) filtered = filtered.filter(vp => vp.confidence === filters.confidence);
      if (filters.searchTerm) {
        const term = filters.searchTerm.toLowerCase();
        filtered = filtered.filter(vp => 
          vp.title.toLowerCase().includes(term) || 
          vp.description.toLowerCase().includes(term)
        );
      }
    }
    return filtered;
  }

  async createValueProposition(data: Omit<ValueProposition, keyof BaseEntity>): Promise<ValueProposition> {
    const vp = this.createEntity<ValueProposition>(data);
    this.valuePropositions.push(vp);
    return vp;
  }

  async updateValueProposition(id: string, data: Partial<ValueProposition>): Promise<ValueProposition> {
    const index = this.valuePropositions.findIndex(vp => vp.id === id);
    if (index === -1) throw new Error(`Value proposition not found: ${id}`);
    const updated = this.updateEntity(this.valuePropositions[index], data);
    this.valuePropositions[index] = updated;
    return updated;
  }

  // Initiative operations
  async getInitiative(id: string): Promise<Initiative> {
    const initiative = this.initiatives.find(i => i.id === id);
    if (!initiative) throw new Error(`Initiative not found: ${id}`);
    return initiative;
  }

  async listInitiatives(filters?: InitiativeFilters): Promise<Initiative[]> {
    let filtered = [...this.initiatives];
    if (filters) {
      if (filters.status) filtered = filtered.filter(i => i.status === filters.status);
      if (filters.valuePropositionId) {
        filtered = filtered.filter(i => 
          i.valuePropositionIds.includes(filters.valuePropositionId!)
        );
      }
      if (filters.dateRange) {
        filtered = filtered.filter(i => {
          const start = i.startDate ? new Date(i.startDate) : null;
          const end = i.endDate ? new Date(i.endDate) : null;
          return (
            (!start || start >= filters.dateRange!.start) &&
            (!end || end <= filters.dateRange!.end)
          );
        });
      }
    }
    return filtered;
  }

  async createInitiative(data: Omit<Initiative, keyof BaseEntity>): Promise<Initiative> {
    const initiative = this.createEntity<Initiative>(data);
    this.initiatives.push(initiative);
    return initiative;
  }

  async updateInitiative(id: string, data: Partial<Initiative>): Promise<Initiative> {
    const index = this.initiatives.findIndex(i => i.id === id);
    if (index === -1) throw new Error(`Initiative not found: ${id}`);
    const updated = this.updateEntity(this.initiatives[index], data);
    this.initiatives[index] = updated;
    return updated;
  }

  // Metric operations
  async getMetric(id: string): Promise<Metric> {
    const metric = this.metrics.find(m => m.id === id);
    if (!metric) throw new Error(`Metric not found: ${id}`);
    return metric;
  }

  async listMetrics(filters?: MetricFilters): Promise<Metric[]> {
    let filtered = [...this.metrics];
    if (filters) {
      if (filters.initiativeId) filtered = filtered.filter(m => m.initiativeId === filters.initiativeId);
      if (filters.trend) filtered = filtered.filter(m => m.trend === filters.trend);
      if (filters.searchTerm) {
        const term = filters.searchTerm.toLowerCase();
        filtered = filtered.filter(m => 
          m.name.toLowerCase().includes(term) || 
          m.description.toLowerCase().includes(term)
        );
      }
    }
    return filtered;
  }

  async createMetric(data: Omit<Metric, keyof BaseEntity>): Promise<Metric> {
    const metric = this.createEntity<Metric>(data);
    this.metrics.push(metric);
    return metric;
  }

  async updateMetric(id: string, data: Partial<Metric>): Promise<Metric> {
    const index = this.metrics.findIndex(m => m.id === id);
    if (index === -1) throw new Error(`Metric not found: ${id}`);
    const updated = this.updateEntity(this.metrics[index], data);
    this.metrics[index] = updated;
    return updated;
  }

  // Project operations
  async getProject(id: string): Promise<Project> {
    const project = this.projects.find(p => p.id === id);
    if (!project) throw new Error(`Project not found: ${id}`);
    return project;
  }

  async listProjects(filters?: ProjectFilters): Promise<Project[]> {
    let filtered = [...this.projects];
    if (filters) {
      if (filters.status) filtered = filtered.filter(p => p.status === filters.status);
      if (filters.searchTerm) {
        const term = filters.searchTerm.toLowerCase();
        filtered = filtered.filter(p => 
          p.name.toLowerCase().includes(term) || 
          p.description.toLowerCase().includes(term)
        );
      }
      if (filters.dateRange) {
        filtered = filtered.filter(p => {
          const start = new Date(p.startDate);
          const end = p.endDate ? new Date(p.endDate) : null;
          return (
            start >= filters.dateRange!.start &&
            (!end || end <= filters.dateRange!.end)
          );
        });
      }
    }
    return filtered;
  }

  async createProject(data: Omit<Project, keyof BaseEntity>): Promise<Project> {
    const project = this.createEntity<Project>(data);
    this.projects.push(project);
    return project;
  }

  async updateProject(id: string, data: Partial<Project>): Promise<Project> {
    const index = this.projects.findIndex(p => p.id === id);
    if (index === -1) throw new Error(`Project not found: ${id}`);
    const updated = this.updateEntity(this.projects[index], data);
    this.projects[index] = updated;
    return updated;
  }

  // Task operations
  async getTask(id: string): Promise<Task> {
    const task = this.tasks.find(t => t.id === id);
    if (!task) throw new Error(`Task not found: ${id}`);
    return task;
  }

  async listTasks(filters?: TaskFilters): Promise<Task[]> {
    let filtered = [...this.tasks];
    if (filters) {
      if (filters.status) filtered = filtered.filter(t => t.status === filters.status);
      if (filters.projectId) filtered = filtered.filter(t => t.projectId === filters.projectId);
      if (filters.assigneeId) filtered = filtered.filter(t => t.assigneeId === filters.assigneeId);
      if (filters.priority) filtered = filtered.filter(t => t.priority === filters.priority);
    }
    return filtered;
  }

  async createTask(data: Omit<Task, keyof BaseEntity>): Promise<Task> {
    const task = this.createEntity<Task>(data);
    this.tasks.push(task);
    return task;
  }

  async updateTask(id: string, data: Partial<Task>): Promise<Task> {
    const index = this.tasks.findIndex(t => t.id === id);
    if (index === -1) throw new Error(`Task not found: ${id}`);
    const updated = this.updateEntity(this.tasks[index], data);
    this.tasks[index] = updated;
    return updated;
  }

  // Document operations
  async getDocument(id: string): Promise<Document> {
    const document = this.documents.find(d => d.id === id);
    if (!document) throw new Error(`Document not found: ${id}`);
    return document;
  }

  async listDocuments(filters?: DocumentFilters): Promise<Document[]> {
    let filtered = [...this.documents];
    if (filters) {
      if (filters.type) filtered = filtered.filter(d => d.type === filters.type);
      if (filters.projectId) filtered = filtered.filter(d => d.projectId === filters.projectId);
      if (filters.searchTerm) {
        const term = filters.searchTerm.toLowerCase();
        filtered = filtered.filter(d => 
          d.title.toLowerCase().includes(term) || 
          d.content.toLowerCase().includes(term)
        );
      }
    }
    return filtered;
  }

  async createDocument(data: Omit<Document, keyof BaseEntity>): Promise<Document> {
    const document = this.createEntity<Document>(data);
    this.documents.push(document);
    return document;
  }

  async updateDocument(id: string, data: Partial<Document>): Promise<Document> {
    const index = this.documents.findIndex(d => d.id === id);
    if (index === -1) throw new Error(`Document not found: ${id}`);
    const updated = this.updateEntity(this.documents[index], data);
    this.documents[index] = updated;
    return updated;
  }

  // Comment operations
  async getComment(id: string): Promise<Comment> {
    const comment = this.comments.find(c => c.id === id);
    if (!comment) throw new Error(`Comment not found: ${id}`);
    return comment;
  }

  async listComments(filters?: CommentFilters): Promise<Comment[]> {
    let filtered = [...this.comments];
    if (filters) {
      if (filters.projectId) filtered = filtered.filter(c => c.projectId === filters.projectId);
      if (filters.taskId) filtered = filtered.filter(c => c.taskId === filters.taskId);
      if (filters.documentId) filtered = filtered.filter(c => c.documentId === filters.documentId);
      if (filters.authorId) filtered = filtered.filter(c => c.authorId === filters.authorId);
    }
    return filtered;
  }

  async createComment(data: Omit<Comment, keyof BaseEntity>): Promise<Comment> {
    const comment = this.createEntity<Comment>(data);
    this.comments.push(comment);
    return comment;
  }

  async updateComment(id: string, data: Partial<Comment>): Promise<Comment> {
    const index = this.comments.findIndex(c => c.id === id);
    if (index === -1) throw new Error(`Comment not found: ${id}`);
    const updated = this.updateEntity(this.comments[index], data);
    this.comments[index] = updated;
    return updated;
  }

  // Team Member operations
  async getTeamMember(id: string): Promise<TeamMember> {
    const member = this.teamMembers.find(m => m.id === id);
    if (!member) throw new Error(`Team member not found: ${id}`);
    return member;
  }

  async listTeamMembers(filters?: TeamMemberFilters): Promise<TeamMember[]> {
    let filtered = [...this.teamMembers];
    if (filters) {
      if (filters.department) filtered = filtered.filter(m => m.department === filters.department);
      if (filters.searchTerm) {
        const term = filters.searchTerm.toLowerCase();
        filtered = filtered.filter(m => 
          m.name.toLowerCase().includes(term) || 
          m.email.toLowerCase().includes(term) ||
          m.role.toLowerCase().includes(term)
        );
      }
    }
    return filtered;
  }

  async createTeamMember(data: Omit<TeamMember, keyof BaseEntity>): Promise<TeamMember> {
    const member = this.createEntity<TeamMember>(data);
    this.teamMembers.push(member);
    return member;
  }

  async updateTeamMember(id: string, data: Partial<TeamMember>): Promise<TeamMember> {
    const index = this.teamMembers.findIndex(m => m.id === id);
    if (index === -1) throw new Error(`Team member not found: ${id}`);
    const updated = this.updateEntity(this.teamMembers[index], data);
    this.teamMembers[index] = updated;
    return updated;
  }
}
