"use client";

import { useState, useCallback } from 'react';
import { DataAdapter, Comment, CommentFilters, BaseEntity } from '../../types';

export function useCommentOperations(adapter: DataAdapter) {
  const [comments, setComments] = useState<Comment[]>([]);

  const getComment = useCallback(async (id: string) => {
    const comment = await adapter.getComment(id);
    setComments(prev => prev.map(c => c.id === id ? comment : c));
    return comment;
  }, [adapter]);

  const listComments = useCallback(async (filters?: CommentFilters) => {
    const comments = await adapter.listComments(filters);
    setComments(comments);
    return comments;
  }, [adapter]);

  const createComment = useCallback(async (data: Omit<Comment, keyof BaseEntity>) => {
    const comment = await adapter.createComment(data);
    setComments(prev => [...prev, comment]);
    return comment;
  }, [adapter]);

  const updateComment = useCallback(async (id: string, data: Partial<Comment>) => {
    const comment = await adapter.updateComment(id, data);
    setComments(prev => prev.map(c => c.id === id ? comment : c));
    return comment;
  }, [adapter]);

  return {
    comments,
    getComment,
    listComments,
    createComment,
    updateComment,
  };
}
