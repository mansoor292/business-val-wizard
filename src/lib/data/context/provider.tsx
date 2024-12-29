"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { DataContext } from './hooks';
import { DataProviderProps, DataContextType } from './types';
import { useValuePropositionOperations } from './operations/value-propositions';
import { useInitiativeOperations } from './operations/initiatives';
import { useMetricOperations } from './operations/metrics';
import { useProjectOperations } from './operations/projects';
import { useTaskOperations } from './operations/tasks';
import { useDocumentOperations } from './operations/documents';
import { useCommentOperations } from './operations/comments';
import { useTeamMemberOperations } from './operations/team-members';
import { useAgentOperations } from './operations/agents';
import { Chat, Message, ParticipantType } from '../types/chat';

// Mock responses for agents and team members
const getMockResponse = (participantType: ParticipantType, message: string) => {
  if (participantType === 'AGENT') {
    const responses = [
      "I understand your request. Let me help you with that.",
      "Based on your message, here's what I can suggest...",
      "I've analyzed your input and here's my recommendation...",
      "That's an interesting point. Here's my perspective...",
      "I can definitely assist you with that. Here's what we can do..."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  } else {
    const responses = [
      "Thanks for reaching out! I'll look into this and get back to you soon.",
      "I've received your message and will review it shortly.",
      "Thanks for the update. I'll check this and respond when I have more details.",
      "Got it! Let me review this and I'll follow up with you.",
      "Thanks for letting me know. I'll work on this and get back to you."
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
};

export function DataProvider({ children, adapter }: DataProviderProps) {
  const [isInitialized, setIsInitialized] = useState(false);
  
  // Initialize state
  const [chats, setChats] = useState<Chat[]>([]);
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  const [activeChat, setActiveChat] = useState<string | null>(null);
  
  const valuePropositionOps = useValuePropositionOperations(adapter);
  const initiativeOps = useInitiativeOperations(adapter);
  const metricOps = useMetricOperations(adapter);
  const taskOps = useTaskOperations(adapter);
  const documentOps = useDocumentOperations(adapter);
  const commentOps = useCommentOperations(adapter);
  const teamMemberOps = useTeamMemberOperations(adapter);
  const projectOps = useProjectOperations(adapter, taskOps, documentOps, commentOps);
  const agentOps = useAgentOperations();

  // Load initial data
  useEffect(() => {
    const loadInitialData = async () => {
      try {
        await adapter.initialize();
        
        // Load chat data from session storage
        const savedChats = sessionStorage.getItem('chats');
        const savedMessages = sessionStorage.getItem('chatMessages');
        
        if (savedChats) {
          const parsedChats = JSON.parse(savedChats);
          setChats(parsedChats.map((chat: any) => ({
            ...chat,
            lastMessageAt: new Date(chat.lastMessageAt),
            createdAt: new Date(chat.createdAt),
            updatedAt: new Date(chat.updatedAt)
          })));
        }
        
        if (savedMessages) {
          const parsedMessages = JSON.parse(savedMessages);
          setChatMessages(parsedMessages.map((msg: any) => ({
            ...msg,
            timestamp: new Date(msg.timestamp),
            createdAt: new Date(msg.createdAt),
            updatedAt: new Date(msg.updatedAt)
          })));
        }
        
        setIsInitialized(true);
      } catch (error) {
        console.error('Failed to initialize:', error);
      }
    };

    loadInitialData();
  }, [adapter]);

  // Save data on unmount
  useEffect(() => {
    return () => {
      sessionStorage.setItem('chats', JSON.stringify(chats));
      sessionStorage.setItem('chatMessages', JSON.stringify(chatMessages));
    };
  }, []);

  // Chat operations
  const initializeChat = useCallback(async (participantId: string, participantType: ParticipantType) => {
    // Find existing active chat
    const existingChat = chats.find(c => 
      c.participantId === participantId && 
      c.participantType === participantType && 
      c.status === 'ACTIVE'
    );

    if (existingChat) {
      setActiveChat(existingChat.id);
      return existingChat;
    }

    // Create new chat if none exists
    const newChat: Chat = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      participantId,
      participantType,
      lastMessageAt: new Date(),
      status: 'ACTIVE',
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    // Update state atomically
    setChats(prev => [...prev, newChat]);
    setActiveChat(newChat.id);

    // Send initial welcome message
    const welcomeMessage = participantType === 'AGENT' 
      ? "Hello! I'm your AI assistant. How can I help you today?"
      : "Hi there! Feel free to leave me a message and I'll get back to you.";

    const initialMessage: Message = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      chatId: newChat.id,
      content: welcomeMessage,
      sender: 'PARTICIPANT',
      timestamp: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    setChatMessages(prev => [...prev, initialMessage]);
    return newChat;
  }, [chats]);

  const listChats = useCallback(async (filters?: any) => {
    let filteredChats = [...chats];
    
    if (filters?.participantType) {
      filteredChats = filteredChats.filter(c => c.participantType === filters.participantType);
    }
    
    if (filters?.participantId) {
      filteredChats = filteredChats.filter(c => c.participantId === filters.participantId);
    }
    
    if (filters?.status) {
      filteredChats = filteredChats.filter(c => c.status === filters.status);
    }
    
    return filteredChats;
  }, [chats]);

  const getChat = useCallback(async (id: string) => {
    return chats.find(c => c.id === id);
  }, [chats]);

  const listChatMessages = useCallback(async (filters?: any) => {
    let filteredMessages = [...chatMessages];
    
    if (filters?.chatId) {
      filteredMessages = filteredMessages.filter(m => m.chatId === filters.chatId);
    }
    
    if (filters?.sender) {
      filteredMessages = filteredMessages.filter(m => m.sender === filters.sender);
    }
    
    if (filters?.dateRange) {
      filteredMessages = filteredMessages.filter(m => {
        const messageDate = m.timestamp;
        return messageDate >= filters.dateRange!.start && messageDate <= filters.dateRange!.end;
      });
    }
    
    return filteredMessages.sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime());
  }, [chatMessages]);

  // Helper function for atomic state updates
  const updateChatAndMessages = useCallback((chatId: string, newMessage: Message) => {
    setChatMessages(prev => [...prev, newMessage]);
    setChats(prev => prev.map(c => 
      c.id === chatId 
        ? { ...c, lastMessageAt: new Date(), updatedAt: new Date() }
        : c
    ));
  }, []);

  const sendChatMessage = useCallback(async (chatId: string, content: string, sender: Message['sender'], participantType?: ParticipantType) => {
    const chat = chats.find(c => c.id === chatId);
    if (!chat) {
      throw new Error(`Chat not found: ${chatId}`);
    }

    const newMessage: Message = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
      chatId,
      content,
      sender,
      timestamp: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    // Update state atomically
    updateChatAndMessages(chatId, newMessage);

    // Generate mock response if this was a user message
    if (sender === 'USER') {
      const responseMessage: Message = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        chatId,
        content: getMockResponse(chat.participantType, content),
        sender: 'PARTICIPANT',
        timestamp: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      
      // Delay the response update
      setTimeout(() => {
        updateChatAndMessages(chatId, responseMessage);
      }, 1000);
    }
    
    return newMessage;
  }, [chats, updateChatAndMessages]);

  const archiveChat = useCallback(async (chatId: string) => {
    setChats(prev => prev.map(chat => 
      chat.id === chatId 
        ? { ...chat, status: 'ARCHIVED', updatedAt: new Date() }
        : chat
    ));
  }, []);

  const value: DataContextType = {
    // Value Proposition operations
    ...valuePropositionOps,

    // Initiative operations
    ...initiativeOps,

    // Metric operations
    ...metricOps,

    // Project operations
    ...projectOps,

    // Task operations
    ...taskOps,

    // Document operations
    ...documentOps,

    // Comment operations
    ...commentOps,

    // Team Member operations
    ...teamMemberOps,

    // Agent operations
    ...agentOps,

    // Chat operations
    chats,
    chatMessages,
    activeChat,
    initializeChat,
    listChats,
    getChat,
    listChatMessages,
    sendChatMessage,
    archiveChat,
  };

  if (!isInitialized) {
    return <div>Loading...</div>;
  }

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
}
