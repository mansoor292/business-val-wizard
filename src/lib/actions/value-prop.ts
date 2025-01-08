'use server'

import { generateMockValuePropositions } from '../mock/business-data'
import { ValueProposition } from '../data/interface'

// Cache mock data to maintain consistency between calls
let mockValuePropositions: ValueProposition[] = []

// Initialize mock data
function initializeMockData() {
  if (mockValuePropositions.length === 0) {
    mockValuePropositions = generateMockValuePropositions(6).map(vp => ({
      ...vp,
      id: Math.random().toString(36).substring(7),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
  }
}

export async function getValuePropositions(): Promise<ValueProposition[]> {
  initializeMockData()
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 50))
  return mockValuePropositions
}

export async function getValuePropositionById(id: string): Promise<ValueProposition | null> {
  initializeMockData()
  await new Promise(resolve => setTimeout(resolve, 50))
  return mockValuePropositions.find(vp => vp.id === id) || null
}

export async function updateValueProposition(
  id: string,
  updates: Partial<ValueProposition>
): Promise<ValueProposition> {
  initializeMockData()
  await new Promise(resolve => setTimeout(resolve, 50))

  const vpIndex = mockValuePropositions.findIndex(vp => vp.id === id)
  if (vpIndex === -1) {
    throw new Error(`Value Proposition with id ${id} not found`)
  }

  mockValuePropositions[vpIndex] = {
    ...mockValuePropositions[vpIndex],
    ...updates,
    updatedAt: new Date()
  }

  return mockValuePropositions[vpIndex]
}
