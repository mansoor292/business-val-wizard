import { Agent, Message } from '../data/interface';

export const messages: Message[] = [
  {
    id: '1',
    content: "Hi, I need help with our sales strategy for Q4.",
    sender: 'user',
    timestamp: '2024-01-10T10:30:00Z',
    agentId: 'sales',
    createdAt: new Date('2024-01-10T10:30:00Z'),
    updatedAt: new Date('2024-01-10T10:30:00Z')
  },
  {
    id: '2',
    content: "I'd be happy to help you with your Q4 sales strategy. What specific aspects would you like to focus on?",
    sender: 'agent',
    timestamp: '2024-01-10T10:30:30Z',
    agentId: 'sales',
    createdAt: new Date('2024-01-10T10:30:30Z'),
    updatedAt: new Date('2024-01-10T10:30:30Z')
  },
  {
    id: '3',
    content: "Can you help me understand the technical requirements for our new feature?",
    sender: 'user',
    timestamp: '2024-01-10T11:00:00Z',
    agentId: 'tech',
    createdAt: new Date('2024-01-10T11:00:00Z'),
    updatedAt: new Date('2024-01-10T11:00:00Z')
  },
  {
    id: '4',
    content: "Of course! I'll help you break down the technical requirements. What feature are you working on?",
    sender: 'agent',
    timestamp: '2024-01-10T11:00:30Z',
    agentId: 'tech',
    createdAt: new Date('2024-01-10T11:00:30Z'),
    updatedAt: new Date('2024-01-10T11:00:30Z')
  }
];

export const agents: Agent[] = [
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
    id: 'tech',
    name: 'Technical Support',
    type: 'SUPPORT',
    handle: '@tech',
    description: 'AI assistant for technical support',
    capabilities: ['Technical Support', 'Issue Resolution', 'Documentation'],
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: 'data',
    name: 'Data Analyst',
    type: 'ANALYTICS',
    handle: '@data',
    description: 'AI assistant for data analysis',
    capabilities: ['Data Analysis', 'Reporting', 'Insights'],
    createdAt: new Date(),
    updatedAt: new Date()
  }
];
