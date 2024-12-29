"use client";

import { useState, useCallback } from 'react';
import { DataAdapter, Metric, MetricFilters, BaseEntity } from '../../types';

export function useMetricOperations(adapter: DataAdapter) {
  const [metrics, setMetrics] = useState<Metric[]>([]);

  const getMetric = useCallback(async (id: string) => {
    const metric = await adapter.getMetric(id);
    setMetrics(prev => prev.map(m => m.id === id ? metric : m));
    return metric;
  }, [adapter]);

  const listMetrics = useCallback(async (filters?: MetricFilters) => {
    const metrics = await adapter.listMetrics(filters);
    setMetrics(metrics);
    return metrics;
  }, [adapter]);

  const createMetric = useCallback(async (data: Omit<Metric, keyof BaseEntity>) => {
    const metric = await adapter.createMetric(data);
    setMetrics(prev => [...prev, metric]);
    return metric;
  }, [adapter]);

  const updateMetric = useCallback(async (id: string, data: Partial<Metric>) => {
    const metric = await adapter.updateMetric(id, data);
    setMetrics(prev => prev.map(m => m.id === id ? metric : m));
    return metric;
  }, [adapter]);

  return {
    metrics,
    getMetric,
    listMetrics,
    createMetric,
    updateMetric,
  };
}
