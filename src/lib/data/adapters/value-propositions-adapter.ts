import { BaseMemoryAdapter } from '../base-memory-adapter';
import { ValueProposition, ValuePropositionFilters } from '../types';

export class ValuePropositionsAdapter extends BaseMemoryAdapter<ValueProposition> {
  async list(filters?: ValuePropositionFilters): Promise<ValueProposition[]> {
    let filtered = [...this.items];
    if (filters) {
      if (filters.impact) filtered = filtered.filter(vp => vp.impact === filters.impact);
      if (filters.effort) filtered = filtered.filter(vp => vp.effort === filters.effort);
      if (filters.confidence) filtered = filtered.filter(vp => vp.confidence === filters.confidence);
      if (filters.searchTerm) {
        const term = filters.searchTerm.toLowerCase();
        filtered = filtered.filter(vp => 
          vp.title.toLowerCase().includes(term) || 
          vp.description.toLowerCase().includes(term)
        );
      }
    }
    return filtered;
  }
}
