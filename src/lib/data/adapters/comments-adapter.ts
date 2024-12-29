import { BaseMemoryAdapter } from '../base-memory-adapter';
import { Comment, CommentFilters, BaseEntity } from '../types';

export class CommentsAdapter extends BaseMemoryAdapter<Comment> {
  constructor(
    private projectIds: string[],
    private taskIds: string[],
    private documentIds: string[],
    private teamIds: string[]
  ) {
    super();
  }

  async list(filters?: CommentFilters): Promise<Comment[]> {
    let filtered = [...this.items];
    if (filters) {
      if (filters.projectId !== undefined) {
        filtered = filtered.filter(c => c.projectId === filters.projectId);
      }
      if (filters.taskId !== undefined) {
        filtered = filtered.filter(c => c.taskId === filters.taskId);
      }
      if (filters.documentId !== undefined) {
        filtered = filtered.filter(c => c.documentId === filters.documentId);
      }
      if (filters.authorId !== undefined) {
        filtered = filtered.filter(c => c.authorId === filters.authorId);
      }
    }
    return filtered;
  }

  async create(data: Omit<Comment, keyof BaseEntity>): Promise<Comment> {
    // Validate project ID if provided
    if (data.projectId && !this.projectIds.includes(data.projectId)) {
      throw new Error(`Invalid project ID: ${data.projectId}`);
    }
    // Validate task ID if provided
    if (data.taskId && !this.taskIds.includes(data.taskId)) {
      throw new Error(`Invalid task ID: ${data.taskId}`);
    }
    // Validate document ID if provided
    if (data.documentId && !this.documentIds.includes(data.documentId)) {
      throw new Error(`Invalid document ID: ${data.documentId}`);
    }
    // Validate author ID
    if (!this.teamIds.includes(data.authorId)) {
      throw new Error(`Invalid author ID: ${data.authorId}`);
    }
    return super.create(data);
  }

  async update(id: string, data: Partial<Omit<Comment, keyof BaseEntity>>): Promise<Comment> {
    if (data.projectId !== undefined) {
      if (!this.projectIds.includes(data.projectId)) {
        throw new Error(`Invalid project ID: ${data.projectId}`);
      }
    }
    if (data.taskId !== undefined) {
      if (!this.taskIds.includes(data.taskId)) {
        throw new Error(`Invalid task ID: ${data.taskId}`);
      }
    }
    if (data.documentId !== undefined) {
      if (!this.documentIds.includes(data.documentId)) {
        throw new Error(`Invalid document ID: ${data.documentId}`);
      }
    }
    if (data.authorId !== undefined) {
      if (!this.teamIds.includes(data.authorId)) {
        throw new Error(`Invalid author ID: ${data.authorId}`);
      }
    }
    return super.update(id, data);
  }
}
