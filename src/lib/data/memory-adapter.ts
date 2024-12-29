import { faker } from '@faker-js/faker';
import { generateMockProjects, generateMockTasks, generateMockDocuments, generateMockTeamMembers, generateMockValuePropositions } from '../mock/business-data';
import type {
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

import { ValuePropositionsAdapter } from './adapters/value-propositions-adapter';
import { InitiativesAdapter } from './adapters/initiatives-adapter';
import { MetricsAdapter } from './adapters/metrics-adapter';
import { ProjectsAdapter } from './adapters/projects-adapter';
import { TasksAdapter } from './adapters/tasks-adapter';
import { DocumentsAdapter } from './adapters/documents-adapter';
import { CommentsAdapter } from './adapters/comments-adapter';
import { TeamMembersAdapter } from './adapters/team-members-adapter';

export class MemoryAdapter implements DataAdapter {
  private valuePropositions: ValuePropositionsAdapter;
  private initiatives: InitiativesAdapter;
  private metrics: MetricsAdapter;
  private projects: ProjectsAdapter;
  private tasks: TasksAdapter;
  private documents: DocumentsAdapter;
  private comments: CommentsAdapter;
  private teamMembers: TeamMembersAdapter;

  constructor() {
    // Initialize all adapters first
    this.teamMembers = new TeamMembersAdapter();
    this.valuePropositions = new ValuePropositionsAdapter();
    this.initiatives = new InitiativesAdapter();
    this.metrics = new MetricsAdapter();
    this.projects = new ProjectsAdapter([]);  // Empty array initially
    this.tasks = new TasksAdapter([], []);    // Empty arrays initially
    this.documents = new DocumentsAdapter([]); // Empty array initially
    this.comments = new CommentsAdapter([], [], [], []); // Empty arrays initially

    // Initialize with mock data
    this.initializeMockData().catch(error => {
      console.error('Failed to initialize mock data:', error);
    });
  }

  private async initializeMockData(): Promise<void> {
    try {
      // Initialize value propositions
      const mockValueProps = generateMockValuePropositions(10);
      for (const vp of mockValueProps) {
        await this.valuePropositions.create(vp);
      }

      // Initialize team members first
      const mockTeamMembers = generateMockTeamMembers();
      for (const member of mockTeamMembers) {
        await this.teamMembers.create(member);
      }
      const teamMemberIds = this.teamMembers.getIds();

      // Recreate adapters with team member IDs
      this.projects = new ProjectsAdapter(teamMemberIds);
      this.tasks = new TasksAdapter([], teamMemberIds);
      this.comments = new CommentsAdapter([], [], [], teamMemberIds);

      // Initialize projects with real team member IDs
      const mockProjects = generateMockProjects(5).map(p => ({
        ...p,
        teamIds: faker.helpers.arrayElements(
          teamMemberIds,
          faker.number.int({ min: 2, max: 5 })
        ),
      }));
      
      for (const project of mockProjects) {
        await this.projects.create(project);
      }
      const projectIds = (await this.projects.list()).map(p => p.id);

      // Recreate adapters with project IDs
      this.tasks = new TasksAdapter(projectIds, teamMemberIds);
      this.documents = new DocumentsAdapter(projectIds);
      this.comments = new CommentsAdapter(projectIds, [], [], teamMemberIds);

      // Generate tasks and documents for each project
      for (const projectId of projectIds) {
        const projectTeamIds = (await this.projects.get(projectId)).teamIds;

        // Create tasks
        const mockTasks = generateMockTasks(projectId, 8).map(t => ({
          ...t,
          assigneeId: faker.helpers.arrayElement(projectTeamIds),
        }));
        for (const task of mockTasks) {
          await this.tasks.create(task);
        }

        // Create documents
        const mockDocs = generateMockDocuments(projectId, 4);
        for (const doc of mockDocs) {
          await this.documents.create(doc);
        }
      }

      // Update comments adapter with task and document IDs
      const taskIds = (await this.tasks.list()).map(t => t.id);
      const documentIds = (await this.documents.list()).map(d => d.id);
      this.comments = new CommentsAdapter(projectIds, taskIds, documentIds, teamMemberIds);
    } catch (error) {
      console.error('Failed to initialize mock data:', error);
      throw error;
    }
  }

  // Value Proposition operations
  async getValueProposition(id: string): Promise<ValueProposition> {
    return this.valuePropositions.get(id);
  }

  async listValuePropositions(filters?: ValuePropositionFilters): Promise<ValueProposition[]> {
    return this.valuePropositions.list(filters);
  }

  async createValueProposition(data: Omit<ValueProposition, keyof BaseEntity>): Promise<ValueProposition> {
    return this.valuePropositions.create(data);
  }

  async updateValueProposition(id: string, data: Partial<ValueProposition>): Promise<ValueProposition> {
    return this.valuePropositions.update(id, data);
  }

  // Initiative operations
  async getInitiative(id: string): Promise<Initiative> {
    return this.initiatives.get(id);
  }

  async listInitiatives(filters?: InitiativeFilters): Promise<Initiative[]> {
    return this.initiatives.list(filters);
  }

  async createInitiative(data: Omit<Initiative, keyof BaseEntity>): Promise<Initiative> {
    return this.initiatives.create(data);
  }

  async updateInitiative(id: string, data: Partial<Initiative>): Promise<Initiative> {
    return this.initiatives.update(id, data);
  }

  // Metric operations
  async getMetric(id: string): Promise<Metric> {
    return this.metrics.get(id);
  }

  async listMetrics(filters?: MetricFilters): Promise<Metric[]> {
    return this.metrics.list(filters);
  }

  async createMetric(data: Omit<Metric, keyof BaseEntity>): Promise<Metric> {
    return this.metrics.create(data);
  }

  async updateMetric(id: string, data: Partial<Metric>): Promise<Metric> {
    return this.metrics.update(id, data);
  }

  // Project operations
  async getProject(id: string): Promise<Project> {
    return this.projects.get(id);
  }

  async listProjects(filters?: ProjectFilters): Promise<Project[]> {
    return this.projects.list(filters);
  }

  async createProject(data: Omit<Project, keyof BaseEntity>): Promise<Project> {
    return this.projects.create(data);
  }

  async updateProject(id: string, data: Partial<Project>): Promise<Project> {
    return this.projects.update(id, data);
  }

  // Task operations
  async getTask(id: string): Promise<Task> {
    return this.tasks.get(id);
  }

  async listTasks(filters?: TaskFilters): Promise<Task[]> {
    return this.tasks.list(filters);
  }

  async createTask(data: Omit<Task, keyof BaseEntity>): Promise<Task> {
    return this.tasks.create(data);
  }

  async updateTask(id: string, data: Partial<Task>): Promise<Task> {
    return this.tasks.update(id, data);
  }

  // Document operations
  async getDocument(id: string): Promise<Document> {
    return this.documents.get(id);
  }

  async listDocuments(filters?: DocumentFilters): Promise<Document[]> {
    return this.documents.list(filters);
  }

  async createDocument(data: Omit<Document, keyof BaseEntity>): Promise<Document> {
    return this.documents.create(data);
  }

  async updateDocument(id: string, data: Partial<Document>): Promise<Document> {
    return this.documents.update(id, data);
  }

  // Comment operations
  async getComment(id: string): Promise<Comment> {
    return this.comments.get(id);
  }

  async listComments(filters?: CommentFilters): Promise<Comment[]> {
    return this.comments.list(filters);
  }

  async createComment(data: Omit<Comment, keyof BaseEntity>): Promise<Comment> {
    return this.comments.create(data);
  }

  async updateComment(id: string, data: Partial<Comment>): Promise<Comment> {
    return this.comments.update(id, data);
  }

  // Team Member operations
  async getTeamMember(id: string): Promise<TeamMember> {
    return this.teamMembers.get(id);
  }

  async listTeamMembers(filters?: TeamMemberFilters): Promise<TeamMember[]> {
    return this.teamMembers.list(filters);
  }

  async createTeamMember(data: Omit<TeamMember, keyof BaseEntity>): Promise<TeamMember> {
    return this.teamMembers.create(data);
  }

  async updateTeamMember(id: string, data: Partial<TeamMember>): Promise<TeamMember> {
    return this.teamMembers.update(id, data);
  }
}
