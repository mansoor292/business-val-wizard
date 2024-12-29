import { BaseMemoryAdapter } from '../base-memory-adapter';
import { Task, TaskFilters, BaseEntity } from '../types';

export class TasksAdapter extends BaseMemoryAdapter<Task> {
  constructor(
    private projectIds: string[],
    private teamIds: string[]
  ) {
    super();
  }

  async list(filters?: TaskFilters): Promise<Task[]> {
    let filtered = [...this.items];
    if (filters) {
      if (filters.status !== undefined) {
        filtered = filtered.filter(t => t.status === filters.status);
      }
      if (filters.projectId !== undefined && typeof filters.projectId === 'string') {
        filtered = filtered.filter(t => t.projectId === filters.projectId);
      }
      if (filters.assigneeId !== undefined && typeof filters.assigneeId === 'string') {
        filtered = filtered.filter(t => t.assigneeId === filters.assigneeId);
      }
      if (filters.priority !== undefined) {
        filtered = filtered.filter(t => t.priority === filters.priority);
      }
    }
    return filtered;
  }

  async create(data: Omit<Task, keyof BaseEntity>): Promise<Task> {
    // Validate project ID
    if (!this.projectIds.includes(data.projectId)) {
      throw new Error(`Invalid project ID: ${data.projectId}`);
    }
    // Validate assignee ID if provided
    if (typeof data.assigneeId === 'string' && !this.teamIds.includes(data.assigneeId)) {
      throw new Error(`Invalid assignee ID: ${data.assigneeId}`);
    }
    return super.create(data);
  }

  async update(id: string, data: Partial<Omit<Task, keyof BaseEntity>>): Promise<Task> {
    if (data.projectId !== undefined && typeof data.projectId === 'string') {
      // Validate project ID if provided
      if (!this.projectIds.includes(data.projectId)) {
        throw new Error(`Invalid project ID: ${data.projectId}`);
      }
    }
    if (data.assigneeId !== undefined && typeof data.assigneeId === 'string') {
      // Validate assignee ID if provided
      if (!this.teamIds.includes(data.assigneeId)) {
        throw new Error(`Invalid assignee ID: ${data.assigneeId}`);
      }
    }
    return super.update(id, data);
  }
}
