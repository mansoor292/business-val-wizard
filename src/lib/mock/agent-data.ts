import { Agent, ChatMessage } from 'src/lib/graphql/generated/graphql';

export const messages: ChatMessage[] = [
  {
    id: '1',
    content: "Hi, I need help with our sales strategy for Q4.",
    sender: 'user',
    timestamp: '2024-01-10T10:30:00Z',
    chatId: 'sales'
  },
  {
    id: '2',
    content: "I'd be happy to help you with your Q4 sales strategy. What specific aspects would you like to focus on?",
    sender: 'agent',
    timestamp: '2024-01-10T10:30:30Z',
    chatId: 'sales'
  },
  {
    id: '3',
    content: "Can you help me understand the technical requirements for our new feature?",
    sender: 'user',
    timestamp: '2024-01-10T11:00:00Z',
    chatId: 'tech'
  },
  {
    id: '4',
    content: "Of course! I'll help you break down the technical requirements. What feature are you working on?",
    sender: 'agent',
    timestamp: '2024-01-10T11:00:30Z',
    chatId: 'tech'
  }
];

export const agents: Agent[] = [
  { id: 'sales', name: 'Sales Assistant', handle: '@sales', status: 'active' as const },
  { id: 'tech', name: 'Technical Support', handle: '@tech', status: 'idle' as const },
  { id: 'data', name: 'Data Analyst', handle: '@data', status: 'active' as const }
];
