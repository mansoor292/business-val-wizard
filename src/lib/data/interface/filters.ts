import type {
  ValueProposition,
  Initiative,
  Metric,
  Project,
  Task,
  Document
} from "./entities";

export interface ValuePropositionFilters {
  impact?: ValueProposition['impact'];
  effort?: ValueProposition['effort'];
  confidence?: ValueProposition['confidence'];
  searchTerm?: string;
}

export interface InitiativeFilters {
  status?: Initiative['status'];
  valuePropositionId?: string;
  dateRange?: { start: Date; end: Date };
}

export interface MetricFilters {
  initiativeId?: string;
  trend?: Metric['trend'];
  searchTerm?: string;
}

export interface ProjectFilters {
  status?: Project['status'];
  searchTerm?: string;
  dateRange?: { start: Date; end: Date };
}

export interface TaskFilters {
  status?: Task['status'];
  projectId?: string;
  assigneeId?: string;
  priority?: Task['priority'];
}

export interface DocumentFilters {
  type?: Document['type'];
  projectId?: string;
  searchTerm?: string;
}

export interface CommentFilters {
  projectId?: string;
  taskId?: string;
  documentId?: string;
  authorId?: string;
}

export interface TeamMemberFilters {
  department?: string;
  searchTerm?: string;
}
