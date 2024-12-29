"use client";

import { useState, useCallback } from 'react';
import { DataAdapter, ValueProposition, ValuePropositionFilters, BaseEntity } from '../../types';

export function useValuePropositionOperations(adapter: DataAdapter) {
  const [valuePropositions, setValuePropositions] = useState<ValueProposition[]>([]);

  const getValueProposition = useCallback(async (id: string) => {
    const vp = await adapter.getValueProposition(id);
    setValuePropositions(prev => prev.map(p => p.id === id ? vp : p));
    return vp;
  }, [adapter]);

  const listValuePropositions = useCallback(async (filters?: ValuePropositionFilters) => {
    const vps = await adapter.listValuePropositions(filters);
    setValuePropositions(vps);
    return vps;
  }, [adapter]);

  const createValueProposition = useCallback(async (data: Omit<ValueProposition, keyof BaseEntity>) => {
    const vp = await adapter.createValueProposition(data);
    setValuePropositions(prev => [...prev, vp]);
    return vp;
  }, [adapter]);

  const updateValueProposition = useCallback(async (id: string, data: Partial<ValueProposition>) => {
    const vp = await adapter.updateValueProposition(id, data);
    setValuePropositions(prev => prev.map(p => p.id === id ? vp : p));
    return vp;
  }, [adapter]);

  return {
    valuePropositions,
    getValueProposition,
    listValuePropositions,
    createValueProposition,
    updateValueProposition,
  };
}
