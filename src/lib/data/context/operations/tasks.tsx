"use client";

import { useState, useCallback } from 'react';
import { DataAdapter, Task, TaskFilters, BaseEntity } from '../../types';

export function useTaskOperations(adapter: DataAdapter) {
  // Initialize with empty array to prevent undefined
  const [tasks, setTasks] = useState<Task[]>(() => []);

  const getTask = useCallback(async (id: string) => {
    const task = await adapter.getTask(id);
    setTasks(prev => prev.map(t => t.id === id ? task : t));
    return task;
  }, [adapter]);

  const listTasks = useCallback(async (filters?: TaskFilters) => {
    const tasks = await adapter.listTasks(filters);
    setTasks(tasks);
    return tasks;
  }, [adapter]);

  const createTask = useCallback(async (data: Omit<Task, keyof BaseEntity>) => {
    const task = await adapter.createTask(data);
    setTasks(prev => [...prev, task]);
    return task;
  }, [adapter]);

  const updateTask = useCallback(async (id: string, data: Partial<Task>) => {
    const task = await adapter.updateTask(id, data);
    setTasks(prev => prev.map(t => t.id === id ? task : t));
    return task;
  }, [adapter]);

  const updateTaskStatus = useCallback(async (taskId: string, newStatus: Task['status']) => {
    const updatedTask = await adapter.updateTask(taskId, { status: newStatus });
    setTasks(prev => prev.map(task => task.id === taskId ? updatedTask : task));
  }, [adapter]);

  return {
    tasks,
    getTask,
    listTasks,
    createTask,
    updateTask,
    updateTaskStatus,
    setTasks,
  };
}
