import { and, eq, ilike, or, sql } from 'drizzle-orm';
import * as schema from './schema';
import { 
  BaseEntity,
  Comment,
  CommentFilters,
  DataAdapter,
  Document,
  DocumentFilters,
  Initiative,
  InitiativeFilters,
  Metric,
  MetricFilters,
  Project,
  ProjectFilters,
  Task,
  TaskFilters,
  TeamMember,
  TeamMemberFilters,
  ValueProposition,
  ValuePropositionFilters
} from 'src/lib/data/interface';

export class DrizzleAdapter implements DataAdapter {
  constructor(private db: any) {}

  async initialize(): Promise<void> {
    // No-op as initialization is handled by migrations
  }

  // Value Proposition Operations
  async getValueProposition(id: string) {
    const result = await this.db.select().from(schema.valuePropositions)
      .where(eq(schema.valuePropositions.id, id))
      .limit(1);
    return result[0];
  }

  async listValuePropositions(filters?: ValuePropositionFilters): Promise<ValueProposition[]> {
    const conditions = [];
    if (filters) {
      if (filters.impact) {
        conditions.push(eq(schema.valuePropositions.impact, filters.impact));
      }
      if (filters.effort) {
        conditions.push(eq(schema.valuePropositions.effort, filters.effort));
      }
      if (filters.confidence) {
        conditions.push(eq(schema.valuePropositions.confidence, filters.confidence));
      }
      if (filters.searchTerm) {
        conditions.push(
          or(
            ilike(schema.valuePropositions.title, `%${filters.searchTerm}%`),
            ilike(schema.valuePropositions.description, `%${filters.searchTerm}%`)
          )
        );
      }
    }

    const query = this.db.select({
      id: schema.valuePropositions.id,
      title: schema.valuePropositions.title,
      description: schema.valuePropositions.description,
      impact: schema.valuePropositions.impact,
      effort: schema.valuePropositions.effort,
      confidence: schema.valuePropositions.confidence,
      createdAt: schema.valuePropositions.createdAt,
      updatedAt: schema.valuePropositions.updatedAt
    })
    .from(schema.valuePropositions)
    .where(conditions.length > 0 ? and(...conditions) : undefined);
    
    return await query;
  }

  async createValueProposition(data: Omit<ValueProposition, keyof BaseEntity>) {
    const result = await this.db.insert(schema.valuePropositions)
      .values(data)
      .returning();
    return result[0];
  }

  async updateValueProposition(id: string, data: Partial<ValueProposition>) {
    const result = await this.db.update(schema.valuePropositions)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(schema.valuePropositions.id, id))
      .returning();
    return result[0];
  }

  // Initiative Operations
  async getInitiative(id: string) {
    const result = await this.db.select().from(schema.initiatives)
      .where(eq(schema.initiatives.id, id))
      .limit(1);
    return result[0];
  }

  async listInitiatives(filters?: InitiativeFilters): Promise<Initiative[]> {
    const conditions = [];
    if (filters) {
      if (filters.status) {
        conditions.push(eq(schema.initiatives.status, filters.status));
      }
      if (filters.valuePropositionId) {
        conditions.push(sql`${schema.initiatives.valuePropositionIds} @> ARRAY[${filters.valuePropositionId}]::text[]`);
      }
      if (filters.dateRange) {
        conditions.push(
          sql`${schema.initiatives.startDate} >= ${filters.dateRange.start}`,
          sql`${schema.initiatives.endDate} <= ${filters.dateRange.end}`
        );
      }
    }

    const query = this.db.select({
      id: schema.initiatives.id,
      title: schema.initiatives.title,
      description: schema.initiatives.description,
      status: schema.initiatives.status,
      startDate: schema.initiatives.startDate,
      endDate: schema.initiatives.endDate,
      valuePropositionIds: schema.initiatives.valuePropositionIds,
      createdAt: schema.initiatives.createdAt,
      updatedAt: schema.initiatives.updatedAt
    })
    .from(schema.initiatives)
    .where(conditions.length > 0 ? and(...conditions) : undefined);
    
    return await query;
  }

  async createInitiative(data: Omit<Initiative, keyof BaseEntity>) {
    const result = await this.db.insert(schema.initiatives)
      .values(data)
      .returning();
    return result[0];
  }

  async updateInitiative(id: string, data: Partial<Initiative>) {
    const result = await this.db.update(schema.initiatives)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(schema.initiatives.id, id))
      .returning();
    return result[0];
  }

  // Metric Operations
  async getMetric(id: string) {
    const result = await this.db.select().from(schema.metrics)
      .where(eq(schema.metrics.id, id))
      .limit(1);
    return result[0];
  }

  async listMetrics(filters?: MetricFilters): Promise<Metric[]> {
    const conditions = [];
    if (filters) {
      if (filters.initiativeId) conditions.push(eq(schema.metrics.initiativeId, filters.initiativeId));
      if (filters.trend) {
        conditions.push(eq(schema.metrics.trend, filters.trend));
      }
      if (filters.searchTerm) {
        conditions.push(
          or(
            ilike(schema.metrics.name, `%${filters.searchTerm}%`),
            ilike(schema.metrics.description, `%${filters.searchTerm}%`)
          )
        );
      }
    }

    const query = this.db.select({
      id: schema.metrics.id,
      name: schema.metrics.name,
      description: schema.metrics.description,
      target: schema.metrics.target,
      current: schema.metrics.current,
      unit: schema.metrics.unit,
      trend: schema.metrics.trend,
      initiativeId: schema.metrics.initiativeId,
      createdAt: schema.metrics.createdAt,
      updatedAt: schema.metrics.updatedAt
    })
    .from(schema.metrics)
    .where(conditions.length > 0 ? and(...conditions) : undefined);
    
    return await query;
  }

  async createMetric(data: Omit<Metric, keyof BaseEntity>) {
    const result = await this.db.insert(schema.metrics)
      .values(data)
      .returning();
    return result[0];
  }

  async updateMetric(id: string, data: Partial<Metric>) {
    const result = await this.db.update(schema.metrics)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(schema.metrics.id, id))
      .returning();
    return result[0];
  }

  // Project Operations
  async getProject(id: string) {
    const result = await this.db.select().from(schema.projects)
      .where(eq(schema.projects.id, id))
      .limit(1);
    return result[0];
  }

  async listProjects(filters?: ProjectFilters): Promise<Project[]> {
    const conditions = [];
    if (filters) {
      if (filters.status) {
        conditions.push(eq(schema.projects.status, filters.status));
      }
      if (filters.searchTerm) {
        conditions.push(
          or(
            ilike(schema.projects.name, `%${filters.searchTerm}%`),
            ilike(schema.projects.description, `%${filters.searchTerm}%`)
          )
        );
      }
      if (filters.dateRange) {
        conditions.push(
          sql`${schema.projects.startDate} >= ${filters.dateRange.start}`,
          sql`${schema.projects.endDate} <= ${filters.dateRange.end}`
        );
      }
    }

    const query = this.db.select({
      id: schema.projects.id,
      name: schema.projects.name,
      description: schema.projects.description,
      status: schema.projects.status,
      startDate: schema.projects.startDate,
      endDate: schema.projects.endDate,
      teamIds: schema.projects.teamIds,
      createdAt: schema.projects.createdAt,
      updatedAt: schema.projects.updatedAt
    })
    .from(schema.projects)
    .where(conditions.length > 0 ? and(...conditions) : undefined);
    
    return await query;
  }

  async createProject(data: Omit<Project, keyof BaseEntity>) {
    const result = await this.db.insert(schema.projects)
      .values(data)
      .returning();
    return result[0];
  }

  async updateProject(id: string, data: Partial<Project>) {
    const result = await this.db.update(schema.projects)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(schema.projects.id, id))
      .returning();
    return result[0];
  }

  // Task Operations
  async getTask(id: string) {
    const result = await this.db.select().from(schema.tasks)
      .where(eq(schema.tasks.id, id))
      .limit(1);
    return result[0];
  }

  async listTasks(filters?: TaskFilters): Promise<Task[]> {
    const conditions = [];
    if (filters) {
      if (filters.status) {
        conditions.push(eq(schema.tasks.status, filters.status));
      }
      if (filters.projectId) conditions.push(eq(schema.tasks.projectId, filters.projectId));
      if (filters.assigneeId) conditions.push(eq(schema.tasks.assigneeId, filters.assigneeId));
      if (filters.priority) {
        conditions.push(eq(schema.tasks.priority, filters.priority));
      }
    }

    const query = this.db.select({
      id: schema.tasks.id,
      title: schema.tasks.title,
      description: schema.tasks.description,
      status: schema.tasks.status,
      priority: schema.tasks.priority,
      projectId: schema.tasks.projectId,
      dueDate: schema.tasks.dueDate,
      assigneeId: schema.tasks.assigneeId,
      createdAt: schema.tasks.createdAt,
      updatedAt: schema.tasks.updatedAt
    })
    .from(schema.tasks)
    .where(conditions.length > 0 ? and(...conditions) : undefined);
    
    return await query;
  }

  async createTask(data: Omit<Task, keyof BaseEntity>) {
    const result = await this.db.insert(schema.tasks)
      .values(data)
      .returning();
    return result[0];
  }

  async updateTask(id: string, data: Partial<Task>) {
    const result = await this.db.update(schema.tasks)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(schema.tasks.id, id))
      .returning();
    return result[0];
  }

  // Document Operations
  async getDocument(id: string) {
    const result = await this.db.select().from(schema.documents)
      .where(eq(schema.documents.id, id))
      .limit(1);
    return result[0];
  }

  async listDocuments(filters?: DocumentFilters): Promise<Document[]> {
    const conditions = [];
    if (filters) {
      if (filters.type) {
        conditions.push(eq(schema.documents.type, filters.type));
      }
      if (filters.projectId) conditions.push(eq(schema.documents.projectId, filters.projectId));
      if (filters.searchTerm) {
        conditions.push(
          or(
            ilike(schema.documents.title, `%${filters.searchTerm}%`),
            ilike(schema.documents.content, `%${filters.searchTerm}%`)
          )
        );
      }
    }

    const query = this.db.select({
      id: schema.documents.id,
      title: schema.documents.title,
      content: schema.documents.content,
      type: schema.documents.type,
      projectId: schema.documents.projectId,
      createdAt: schema.documents.createdAt,
      updatedAt: schema.documents.updatedAt
    })
    .from(schema.documents)
    .where(conditions.length > 0 ? and(...conditions) : undefined);
    
    return await query;
  }

  async createDocument(data: Omit<Document, keyof BaseEntity>) {
    const result = await this.db.insert(schema.documents)
      .values(data)
      .returning();
    return result[0];
  }

  async updateDocument(id: string, data: Partial<Document>) {
    const result = await this.db.update(schema.documents)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(schema.documents.id, id))
      .returning();
    return result[0];
  }

  // Comment Operations
  async getComment(id: string) {
    const result = await this.db.select().from(schema.comments)
      .where(eq(schema.comments.id, id))
      .limit(1);
    return result[0];
  }

  async listComments(filters?: CommentFilters): Promise<Comment[]> {
    const conditions = [];
    if (filters) {
      if (filters.projectId) conditions.push(eq(schema.comments.projectId, filters.projectId));
      if (filters.taskId) conditions.push(eq(schema.comments.taskId, filters.taskId));
      if (filters.documentId) conditions.push(eq(schema.comments.documentId, filters.documentId));
      if (filters.authorId) conditions.push(eq(schema.comments.authorId, filters.authorId));
    }

    const query = this.db.select({
      id: schema.comments.id,
      content: schema.comments.content,
      projectId: schema.comments.projectId,
      taskId: schema.comments.taskId,
      documentId: schema.comments.documentId,
      authorId: schema.comments.authorId,
      createdAt: schema.comments.createdAt,
      updatedAt: schema.comments.updatedAt
    })
    .from(schema.comments)
    .where(conditions.length > 0 ? and(...conditions) : undefined);
    
    return await query;
  }

  async createComment(data: Omit<Comment, keyof BaseEntity>) {
    const result = await this.db.insert(schema.comments)
      .values(data)
      .returning();
    return result[0];
  }

  async updateComment(id: string, data: Partial<Comment>) {
    const result = await this.db.update(schema.comments)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(schema.comments.id, id))
      .returning();
    return result[0];
  }

  // Team Member Operations
  async getTeamMember(id: string) {
    const result = await this.db.select().from(schema.teamMembers)
      .where(eq(schema.teamMembers.id, id))
      .limit(1);
    return result[0];
  }

  async listTeamMembers(filters?: TeamMemberFilters): Promise<TeamMember[]> {
    const conditions = [];
    if (filters) {
      if (filters.department) conditions.push(eq(schema.teamMembers.department, filters.department));
      if (filters.searchTerm) {
        conditions.push(
          or(
            ilike(schema.teamMembers.name, `%${filters.searchTerm}%`),
            ilike(schema.teamMembers.email, `%${filters.searchTerm}%`)
          )
        );
      }
    }

    const query = this.db.select({
      id: schema.teamMembers.id,
      name: schema.teamMembers.name,
      role: schema.teamMembers.role,
      email: schema.teamMembers.email,
      avatar: schema.teamMembers.avatar,
      skills: schema.teamMembers.skills,
      department: schema.teamMembers.department,
      reportsTo: schema.teamMembers.reportsTo,
      createdAt: schema.teamMembers.createdAt,
      updatedAt: schema.teamMembers.updatedAt
    })
    .from(schema.teamMembers)
    .where(conditions.length > 0 ? and(...conditions) : undefined);
    
    return await query;
  }

  async createTeamMember(data: Omit<TeamMember, keyof BaseEntity>) {
    const result = await this.db.insert(schema.teamMembers)
      .values(data)
      .returning();
    return result[0];
  }

  async updateTeamMember(id: string, data: Partial<TeamMember>) {
    const result = await this.db.update(schema.teamMembers)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(schema.teamMembers.id, id))
      .returning();
    return result[0];
  }

}
