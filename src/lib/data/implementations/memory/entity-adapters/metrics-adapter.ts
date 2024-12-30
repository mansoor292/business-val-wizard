import { BaseMemoryAdapter } from '../base';
import type { Metric, MetricFilters } from '../../../interface';

export class MetricsAdapter extends BaseMemoryAdapter<Metric> {
  async list(filters?: MetricFilters): Promise<Metric[]> {
    let filtered = [...this.items];
    if (filters) {
      if (filters.initiativeId) filtered = filtered.filter(m => m.initiativeId === filters.initiativeId);
      if (filters.trend) filtered = filtered.filter(m => m.trend === filters.trend);
      if (filters.searchTerm) {
        const term = filters.searchTerm.toLowerCase();
        filtered = filtered.filter(m => 
          m.name.toLowerCase().includes(term) || 
          m.description.toLowerCase().includes(term)
        );
      }
    }
    return filtered;
  }
}
