import { BaseMemoryAdapter } from '../base-memory-adapter';
import { Project, ProjectFilters, BaseEntity } from '../types';

export class ProjectsAdapter extends BaseMemoryAdapter<Project> {
  constructor(private teamIds: string[]) {
    super();
  }

  async list(filters?: ProjectFilters): Promise<Project[]> {
    let filtered = [...this.items];
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

  async create(data: Omit<Project, keyof BaseEntity>): Promise<Project> {
    // Ensure teamIds are valid before creating project
    const invalidTeamIds = data.teamIds.filter(id => !this.teamIds.includes(id));
    if (invalidTeamIds.length > 0) {
      throw new Error(`Invalid team member IDs: ${invalidTeamIds.join(', ')}`);
    }
    return super.create(data);
  }

  async update(id: string, data: Partial<Omit<Project, keyof BaseEntity>>): Promise<Project> {
    // Ensure teamIds are valid before updating project
    if (data.teamIds) {
      const invalidTeamIds = data.teamIds.filter(id => !this.teamIds.includes(id));
      if (invalidTeamIds.length > 0) {
        throw new Error(`Invalid team member IDs: ${invalidTeamIds.join(', ')}`);
      }
    }
    return super.update(id, data);
  }
}
