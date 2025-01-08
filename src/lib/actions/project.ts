'use server'

import { generateMockProjects, generateMockTasks, generateMockDocuments } from '../mock/business-data'
import { Project, Task, Document } from '../data/interface'

// Cache mock data to maintain consistency between calls
let mockProjects: Project[] = []
let mockTasks: Task[] = []
let mockDocuments: Document[] = []

// Initialize mock data
function initializeMockData() {
  if (mockProjects.length === 0) {
    mockProjects = generateMockProjects(5).map(project => ({
      ...project,
      id: Math.random().toString(36).substring(7),
      createdAt: new Date(),
      updatedAt: new Date()
    }))

    // Generate tasks and documents for each project
    mockProjects.forEach(project => {
      const projectTasks = generateMockTasks(project.id, 8).map(task => ({
        ...task,
        id: Math.random().toString(36).substring(7),
        createdAt: new Date(),
        updatedAt: new Date()
      }))
      mockTasks.push(...projectTasks)

      const projectDocs = generateMockDocuments(project.id, 4).map(doc => ({
        ...doc,
        id: Math.random().toString(36).substring(7),
        createdAt: new Date(),
        updatedAt: new Date()
      }))
      mockDocuments.push(...projectDocs)
    })
  }
}

export async function getProjects(): Promise<Project[]> {
  initializeMockData()
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 50))
  return mockProjects
}

export async function getTasks(): Promise<Task[]> {
  initializeMockData()
  await new Promise(resolve => setTimeout(resolve, 50))
  return mockTasks
}

export async function getDocuments(): Promise<Document[]> {
  initializeMockData()
  await new Promise(resolve => setTimeout(resolve, 50))
  return mockDocuments
}

export async function updateTaskStatus(taskId: string, newStatus: Task['status']): Promise<Task> {
  initializeMockData()
  await new Promise(resolve => setTimeout(resolve, 50))

  const taskIndex = mockTasks.findIndex(task => task.id === taskId)
  if (taskIndex === -1) {
    throw new Error(`Task with id ${taskId} not found`)
  }

  mockTasks[taskIndex] = {
    ...mockTasks[taskIndex],
    status: newStatus,
    updatedAt: new Date()
  }

  return mockTasks[taskIndex]
}

export async function getProjectById(projectId: string): Promise<Project | null> {
  initializeMockData()
  await new Promise(resolve => setTimeout(resolve, 50))
  
  return mockProjects.find(project => project.id === projectId) || null
}

export async function getTasksByProjectId(projectId: string): Promise<Task[]> {
  initializeMockData()
  await new Promise(resolve => setTimeout(resolve, 50))
  
  return mockTasks.filter(task => task.projectId === projectId)
}

export async function getDocumentsByProjectId(projectId: string): Promise<Document[]> {
  initializeMockData()
  await new Promise(resolve => setTimeout(resolve, 50))
  
  return mockDocuments.filter(doc => doc.projectId === projectId)
}
