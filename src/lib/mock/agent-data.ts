import { Agent, Message } from '../data/types';

export const messages: Message[] = [
  {
    id: '1',
    content: "Hi, I need help with our sales strategy for Q4.",
    sender: 'user',
    timestamp: '2024-01-10T10:30:00Z',
    agentId: 'sales'
  },
  {
    id: '2',
    content: "I'd be happy to help you with your Q4 sales strategy. What specific aspects would you like to focus on?",
    sender: 'agent',
    timestamp: '2024-01-10T10:30:30Z',
    agentId: 'sales'
  },
  {
    id: '3',
    content: "Can you help me understand the technical requirements for our new feature?",
    sender: 'user',
    timestamp: '2024-01-10T11:00:00Z',
    agentId: 'tech'
  },
  {
    id: '4',
    content: "Of course! I'll help you break down the technical requirements. What feature are you working on?",
    sender: 'agent',
    timestamp: '2024-01-10T11:00:30Z',
    agentId: 'tech'
  }
];

export const agents: Agent[] = [
  { id: 'sales', name: 'Sales Assistant', handle: '@sales', status: 'active' as const },
  { id: 'tech', name: 'Technical Support', handle: '@tech', status: 'idle' as const },
  { id: 'data', name: 'Data Analyst', handle: '@data', status: 'active' as const }
];
