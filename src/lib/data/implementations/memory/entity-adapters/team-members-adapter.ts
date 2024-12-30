import { BaseMemoryAdapter } from '../base';
import type { TeamMember, TeamMemberFilters, BaseEntity } from '../../../interface';

export class TeamMembersAdapter extends BaseMemoryAdapter<TeamMember> {
  async list(filters?: TeamMemberFilters): Promise<TeamMember[]> {
    let filtered = [...this.items];
    if (filters) {
      if (filters.department) filtered = filtered.filter(m => m.department === filters.department);
      if (filters.searchTerm) {
        const term = filters.searchTerm.toLowerCase();
        filtered = filtered.filter(m => 
          m.name.toLowerCase().includes(term) || 
          m.role.toLowerCase().includes(term) ||
          m.email.toLowerCase().includes(term)
        );
      }
    }
    return filtered;
  }

  getIds(): string[] {
    return this.items.map(m => m.id);
  }

  async create(data: Omit<TeamMember, keyof BaseEntity>): Promise<TeamMember> {
    // Validate reportsTo if provided
    if (data.reportsTo) {
      const manager = this.items.find(m => m.email === data.reportsTo);
      if (!manager) {
        throw new Error(`Invalid manager email: ${data.reportsTo}`);
      }
    }
    return super.create(data);
  }

  async update(id: string, data: Partial<Omit<TeamMember, keyof BaseEntity>>): Promise<TeamMember> {
    // Validate reportsTo if provided
    if (data.reportsTo) {
      const manager = this.items.find(m => m.email === data.reportsTo);
      if (!manager) {
        throw new Error(`Invalid manager email: ${data.reportsTo}`);
      }
    }
    return super.update(id, data);
  }
}
