import { BaseMemoryAdapter } from '../base';
import type { Document, DocumentFilters, BaseEntity } from '../../../interface';

export class DocumentsAdapter extends BaseMemoryAdapter<Document> {
  constructor(private projectIds: string[]) {
    super();
  }

  async list(filters?: DocumentFilters): Promise<Document[]> {
    let filtered = [...this.items];
    if (filters) {
      if (filters.projectId) filtered = filtered.filter(d => d.projectId === filters.projectId);
      if (filters.type) filtered = filtered.filter(d => d.type === filters.type);
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

  async create(data: Omit<Document, keyof BaseEntity>): Promise<Document> {
    // Validate project ID
    if (!this.projectIds.includes(data.projectId)) {
      throw new Error(`Invalid project ID: ${data.projectId}`);
    }
    return super.create(data);
  }

  async update(id: string, data: Partial<Omit<Document, keyof BaseEntity>>): Promise<Document> {
    // Validate project ID if provided
    if (data.projectId && !this.projectIds.includes(data.projectId)) {
      throw new Error(`Invalid project ID: ${data.projectId}`);
    }
    return super.update(id, data);
  }
}
