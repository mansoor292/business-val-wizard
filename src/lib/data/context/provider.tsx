"use client";

import React from 'react';
import { DataContext } from './hooks';
import { DataProviderProps } from './types';
import { useValuePropositionOperations } from './operations/value-propositions';
import { useInitiativeOperations } from './operations/initiatives';
import { useMetricOperations } from './operations/metrics';
import { useProjectOperations } from './operations/projects';
import { useTaskOperations } from './operations/tasks';
import { useDocumentOperations } from './operations/documents';
import { useCommentOperations } from './operations/comments';
import { useTeamMemberOperations } from './operations/team-members';
import { useAgentOperations } from './operations/agents';

export function DataProvider({ children, adapter }: DataProviderProps) {
  const valuePropositionOps = useValuePropositionOperations(adapter);
  const initiativeOps = useInitiativeOperations(adapter);
  const metricOps = useMetricOperations(adapter);
  const taskOps = useTaskOperations(adapter);
  const documentOps = useDocumentOperations(adapter);
  const commentOps = useCommentOperations(adapter);
  const teamMemberOps = useTeamMemberOperations(adapter);
  const projectOps = useProjectOperations(adapter, taskOps, documentOps, commentOps);
  const agentOps = useAgentOperations();

  const value = {
    // Value Proposition operations
    ...valuePropositionOps,

    // Initiative operations
    ...initiativeOps,

    // Metric operations
    ...metricOps,

    // Project operations
    ...projectOps,

    // Task operations
    ...taskOps,

    // Document operations
    ...documentOps,

    // Comment operations
    ...commentOps,

    // Team Member operations
    ...teamMemberOps,

    // Agent operations
    ...agentOps,
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
}
