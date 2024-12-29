"use client";

import { useState, useCallback } from 'react';
import { DataAdapter, Initiative, InitiativeFilters, BaseEntity } from '../../types';

export function useInitiativeOperations(adapter: DataAdapter) {
  const [initiatives, setInitiatives] = useState<Initiative[]>([]);

  const getInitiative = useCallback(async (id: string) => {
    const initiative = await adapter.getInitiative(id);
    setInitiatives(prev => prev.map(i => i.id === id ? initiative : i));
    return initiative;
  }, [adapter]);

  const listInitiatives = useCallback(async (filters?: InitiativeFilters) => {
    const initiatives = await adapter.listInitiatives(filters);
    setInitiatives(initiatives);
    return initiatives;
  }, [adapter]);

  const createInitiative = useCallback(async (data: Omit<Initiative, keyof BaseEntity>) => {
    const initiative = await adapter.createInitiative(data);
    setInitiatives(prev => [...prev, initiative]);
    return initiative;
  }, [adapter]);

  const updateInitiative = useCallback(async (id: string, data: Partial<Initiative>) => {
    const initiative = await adapter.updateInitiative(id, data);
    setInitiatives(prev => prev.map(i => i.id === id ? initiative : i));
    return initiative;
  }, [adapter]);

  return {
    initiatives,
    getInitiative,
    listInitiatives,
    createInitiative,
    updateInitiative,
  };
}
