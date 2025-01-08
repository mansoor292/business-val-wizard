'use server'

import { Agent, ParticipantType, TeamMember } from '../data/interface'

interface ChatMessage {
  id: string
  chatId: string
  content: string
  sender: 'USER' | 'PARTICIPANT'
  createdAt: Date
}

// Mock data storage
let mockAgents: Agent[] = [
  {
    id: 'sales',
    name: 'Sales Assistant',
    type: 'SALES',
    handle: '@sales',
    description: 'AI assistant for sales-related queries',
    capabilities: ['Lead Generation', 'Sales Pipeline', 'Customer Relations'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'support',
    name: 'Support Assistant',
    type: 'SUPPORT',
    handle: '@support',
    description: 'AI assistant for customer support',
    capabilities: ['Technical Support', 'Issue Resolution', 'Customer Service'],
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

let mockChats: { [key: string]: ChatMessage[] } = {}
let mockActiveChats: { [key: string]: string } = {}

export async function getAgents(): Promise<Agent[]> {
  await new Promise(resolve => setTimeout(resolve, 50))
  return mockAgents
}

export async function initializeChat(participantId: string, participantType: ParticipantType): Promise<string> {
  await new Promise(resolve => setTimeout(resolve, 50))
  
  const chatId = `${participantType}-${participantId}-${Date.now()}`
  mockChats[chatId] = []
  mockActiveChats[participantId] = chatId
  
  return chatId
}

export async function getChatMessages(chatId: string): Promise<ChatMessage[]> {
  await new Promise(resolve => setTimeout(resolve, 50))
  return mockChats[chatId] || []
}

export async function sendChatMessage(
  chatId: string,
  content: string,
  sender: 'USER' | 'PARTICIPANT',
  participantType: ParticipantType
): Promise<ChatMessage> {
  await new Promise(resolve => setTimeout(resolve, 50))

  const message: ChatMessage = {
    id: Math.random().toString(36).substring(7),
    chatId,
    content,
    sender,
    createdAt: new Date()
  }

  if (!mockChats[chatId]) {
    mockChats[chatId] = []
  }

  mockChats[chatId].push(message)

  // If user sent a message, simulate a response from the participant
  if (sender === 'USER') {
    const responseContent = participantType === ParticipantType.AGENT
      ? `This is an AI response from ${mockAgents.find(a => a.id === chatId.split('-')[1])?.name}`
      : 'This is a simulated team member response.'

    const response: ChatMessage = {
      id: Math.random().toString(36).substring(7),
      chatId,
      content: responseContent,
      sender: 'PARTICIPANT',
      createdAt: new Date()
    }

    mockChats[chatId].push(response)
  }

  return message
}

export async function getActiveChatId(participantId: string): Promise<string | null> {
  await new Promise(resolve => setTimeout(resolve, 50))
  return mockActiveChats[participantId] || null
}

export async function clearChat(chatId: string): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, 50))
  mockChats[chatId] = []
}
