import { BaseMemoryAdapter } from '../base';
import type { Task, TaskFilters, BaseEntity } from '../../../interface';

export class TasksAdapter extends BaseMemoryAdapter<Task> {
  constructor(
    private projectIds: string[],
    private teamMemberIds: string[]
  ) {
    super();
  }

  async list(filters?: TaskFilters): Promise<Task[]> {
    let filtered = [...this.items];
    if (filters) {
      if (filters.projectId) filtered = filtered.filter(t => t.projectId === filters.projectId);
      if (filters.assigneeId) filtered = filtered.filter(t => t.assigneeId === filters.assigneeId);
      if (filters.status) filtered = filtered.filter(t => t.status === filters.status);
      if (filters.priority) filtered = filtered.filter(t => t.priority === filters.priority);
    }
    return filtered;
  }

  async create(data: Omit<Task, keyof BaseEntity>): Promise<Task> {
    // Validate project ID
    if (!this.projectIds.includes(data.projectId)) {
      throw new Error(`Invalid project ID: ${data.projectId}`);
    }

    // Validate assignee ID if provided
    if (data.assigneeId && !this.teamMemberIds.includes(data.assigneeId)) {
      throw new Error(`Invalid assignee ID: ${data.assigneeId}`);
    }

    return super.create(data);
  }

  async update(id: string, data: Partial<Omit<Task, keyof BaseEntity>>): Promise<Task> {
    // Validate project ID if provided
    if (data.projectId && !this.projectIds.includes(data.projectId)) {
      throw new Error(`Invalid project ID: ${data.projectId}`);
    }

    // Validate assignee ID if provided
    if (data.assigneeId && !this.teamMemberIds.includes(data.assigneeId)) {
      throw new Error(`Invalid assignee ID: ${data.assigneeId}`);
    }

    return super.update(id, data);
  }
}
