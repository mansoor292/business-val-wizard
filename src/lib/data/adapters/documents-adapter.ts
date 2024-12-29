import { BaseMemoryAdapter } from '../base-memory-adapter';
import { Document, DocumentFilters, BaseEntity } from '../types';

export class DocumentsAdapter extends BaseMemoryAdapter<Document> {
  constructor(private projectIds: string[]) {
    super();
  }

  async list(filters?: DocumentFilters): Promise<Document[]> {
    let filtered = [...this.items];
    if (filters) {
      if (filters.type !== undefined) {
        filtered = filtered.filter(d => d.type === filters.type);
      }
      if (filters.projectId !== undefined) {
        filtered = filtered.filter(d => d.projectId === filters.projectId);
      }
      if (filters.searchTerm !== undefined) {
        const term = filters.searchTerm.toLowerCase();
        filtered = filtered.filter(d => 
          d.title.toLowerCase().includes(term) || 
          d.content.toLowerCase().includes(term)
        );
      }
    }
    return filtered;
  }

  async create(data: Omit<Document, keyof BaseEntity>): Promise<Document> {
    // Validate project ID
    if (!this.projectIds.includes(data.projectId)) {
      throw new Error(`Invalid project ID: ${data.projectId}`);
    }
    return super.create(data);
  }

  async update(id: string, data: Partial<Omit<Document, keyof BaseEntity>>): Promise<Document> {
    if (data.projectId !== undefined) {
      // Validate project ID if provided
      if (!this.projectIds.includes(data.projectId)) {
        throw new Error(`Invalid project ID: ${data.projectId}`);
      }
    }
    return super.update(id, data);
  }
}
