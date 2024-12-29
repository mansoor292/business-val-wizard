"use client";

import { useState, useCallback } from 'react';
import { Agent, Message } from "../../types";
import { agents as mockAgents, messages as mockMessages } from "src/lib/mock/agent-data";

export function useAgentOperations() {
  const [agents, setAgents] = useState<Agent[]>(() => mockAgents);
  const [messages, setMessages] = useState<Message[]>(() => mockMessages);

  const listAgents = useCallback(async () => {
    return agents;
  }, [agents]);

  const getAgent = useCallback(async (id: string) => {
    return agents.find(a => a.id === id);
  }, [agents]);

  const listMessages = useCallback(async (agentId: string) => {
    return messages.filter(m => m.agentId === agentId);
  }, [messages]);

  const sendMessage = useCallback(async (agentId: string, content: string) => {
    const newMessage: Message = {
      id: String(messages.length + 1),
      content,
      sender: 'user',
      timestamp: new Date().toISOString(),
      agentId
    };
    setMessages(prev => [...prev, newMessage]);
    return newMessage;
  }, [messages]);

  return {
    agents,
    messages,
    listAgents,
    getAgent,
    listMessages,
    sendMessage,
  };
}
