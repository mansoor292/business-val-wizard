import { BaseMemoryAdapter } from '../base-memory-adapter';
import { Initiative, InitiativeFilters } from '../types';

export class InitiativesAdapter extends BaseMemoryAdapter<Initiative> {
  async list(filters?: InitiativeFilters): Promise<Initiative[]> {
    let filtered = [...this.items];
    if (filters) {
      if (filters.status) filtered = filtered.filter(i => i.status === filters.status);
      if (filters.valuePropositionId) {
        filtered = filtered.filter(i => 
          i.valuePropositionIds.includes(filters.valuePropositionId!)
        );
      }
      if (filters.dateRange) {
        filtered = filtered.filter(i => {
          const start = i.startDate ? new Date(i.startDate) : null;
          const end = i.endDate ? new Date(i.endDate) : null;
          return (
            (!start || start >= filters.dateRange!.start) &&
            (!end || end <= filters.dateRange!.end)
          );
        });
      }
    }
    return filtered;
  }
}
