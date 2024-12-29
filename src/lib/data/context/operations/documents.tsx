"use client";

import { useState, useCallback } from 'react';
import { DataAdapter, Document, DocumentFilters, BaseEntity } from '../../types';

export function useDocumentOperations(adapter: DataAdapter) {
  // Initialize with empty array to prevent undefined
  const [documents, setDocuments] = useState<Document[]>(() => []);

  const getDocument = useCallback(async (id: string) => {
    const document = await adapter.getDocument(id);
    setDocuments(prev => prev.map(d => d.id === id ? document : d));
    return document;
  }, [adapter]);

  const listDocuments = useCallback(async (filters?: DocumentFilters) => {
    const documents = await adapter.listDocuments(filters);
    setDocuments(documents);
    return documents;
  }, [adapter]);

  const createDocument = useCallback(async (data: Omit<Document, keyof BaseEntity>) => {
    const document = await adapter.createDocument(data);
    setDocuments(prev => [...prev, document]);
    return document;
  }, [adapter]);

  const updateDocument = useCallback(async (id: string, data: Partial<Document>) => {
    const document = await adapter.updateDocument(id, data);
    setDocuments(prev => prev.map(d => d.id === id ? document : d));
    return document;
  }, [adapter]);

  return {
    documents,
    getDocument,
    listDocuments,
    createDocument,
    updateDocument,
    setDocuments,
  };
}
