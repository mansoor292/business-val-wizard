import { BaseMemoryAdapter } from '../base-memory-adapter';
import { TeamMember, TeamMemberFilters, BaseEntity } from '../types';

export class TeamMembersAdapter extends BaseMemoryAdapter<TeamMember> {
  async list(filters?: TeamMemberFilters): Promise<TeamMember[]> {
    let filtered = [...this.items];
    if (filters) {
      if (filters.department !== undefined) {
        filtered = filtered.filter(m => m.department === filters.department);
      }
      if (filters.searchTerm !== undefined) {
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

  getIds(): string[] {
    return this.items.map(member => member.id);
  }
}
