'use server'

import { generateMockTeamMembers } from '../mock/business-data'
import { TeamMember } from '../data/interface'

// Cache mock data to maintain consistency between calls
let mockTeamMembers: TeamMember[] = []

// Initialize mock data
function initializeMockData() {
  if (mockTeamMembers.length === 0) {
    mockTeamMembers = generateMockTeamMembers().map(member => ({
      ...member,
      id: Math.random().toString(36).substring(7),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
  }
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  initializeMockData()
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 50))
  return mockTeamMembers
}

export async function createTeamMember(
  member: Omit<TeamMember, 'id' | 'createdAt' | 'updatedAt'>
): Promise<TeamMember> {
  initializeMockData()
  await new Promise(resolve => setTimeout(resolve, 50))

  const newMember: TeamMember = {
    ...member,
    id: Math.random().toString(36).substring(7),
    createdAt: new Date(),
    updatedAt: new Date()
  }

  mockTeamMembers.push(newMember)
  return newMember
}

export async function updateTeamMember(
  id: string,
  updates: Partial<Omit<TeamMember, 'id' | 'createdAt' | 'updatedAt'>>
): Promise<TeamMember> {
  initializeMockData()
  await new Promise(resolve => setTimeout(resolve, 50))

  const memberIndex = mockTeamMembers.findIndex(m => m.id === id)
  if (memberIndex === -1) {
    throw new Error(`Team member with id ${id} not found`)
  }

  mockTeamMembers[memberIndex] = {
    ...mockTeamMembers[memberIndex],
    ...updates,
    updatedAt: new Date()
  }

  return mockTeamMembers[memberIndex]
}

export async function getTeamMemberById(id: string): Promise<TeamMember | null> {
  initializeMockData()
  await new Promise(resolve => setTimeout(resolve, 50))
  
  return mockTeamMembers.find(member => member.id === id) || null
}

export async function getTeamMembersByDepartment(department: string): Promise<TeamMember[]> {
  initializeMockData()
  await new Promise(resolve => setTimeout(resolve, 50))
  
  return mockTeamMembers.filter(member => member.department === department)
}

export async function getDirectReports(managerId: string): Promise<TeamMember[]> {
  initializeMockData()
  await new Promise(resolve => setTimeout(resolve, 50))
  
  return mockTeamMembers.filter(member => member.reportsTo === managerId)
}
