"use client";

import { useState, useCallback } from 'react';
import { DataAdapter, TeamMember, TeamMemberFilters, BaseEntity } from '../../types';

export function useTeamMemberOperations(adapter: DataAdapter) {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  const getTeamMember = useCallback(async (id: string) => {
    const member = await adapter.getTeamMember(id);
    setTeamMembers(prev => prev.map(m => m.id === id ? member : m));
    return member;
  }, [adapter]);

  const listTeamMembers = useCallback(async (filters?: TeamMemberFilters) => {
    const members = await adapter.listTeamMembers(filters);
    setTeamMembers(members);
    return members;
  }, [adapter]);

  const createTeamMember = useCallback(async (data: Omit<TeamMember, keyof BaseEntity>) => {
    const member = await adapter.createTeamMember(data);
    setTeamMembers(prev => [...prev, member]);
    return member;
  }, [adapter]);

  const updateTeamMember = useCallback(async (id: string, data: Partial<TeamMember>) => {
    const member = await adapter.updateTeamMember(id, data);
    setTeamMembers(prev => prev.map(m => m.id === id ? member : m));
    return member;
  }, [adapter]);

  return {
    teamMembers,
    getTeamMember,
    listTeamMembers,
    createTeamMember,
    updateTeamMember,
  };
}
