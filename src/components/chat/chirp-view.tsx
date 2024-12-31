"use client";

import { Bot, Info, Settings, Plus, Send, User } from "lucide-react";
import { useState, useEffect, useMemo, useRef } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "src/lib/utils";
import { createChatMessage, getChats, getChatMessages } from "src/app/actions/chats";
import { getAgents } from "src/app/actions/agents";
import { getTeamMembers } from "src/app/actions/team-members";
import type { Chat, ChatMessage, Agent, TeamMember } from "src/lib/graphql/generated/graphql";

export enum ParticipantType {
  AGENT = 'AGENT',
  TEAM_MEMBER = 'TEAM_MEMBER'
}


interface ChirpViewProps {
  participantId: string;
  participantType: ParticipantType;
}

export function ChirpView({ participantId, participantType }: ChirpViewProps) {
  const [messageInput, setMessageInput] = useState("");
  const [activeChat, setActiveChat] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [agents, setAgents] = useState<Agent[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load agents and team members
  useEffect(() => {
    const loadParticipants = async () => {
      const [agentsData, teamMembersData] = await Promise.all([
        getAgents(),
        getTeamMembers()
      ]);
      setAgents(agentsData || []);
      setTeamMembers(teamMembersData || []);
    };
    loadParticipants();
  }, []);

  useEffect(() => {
    const loadChat = async () => {
      const chats = await getChats();
      const chat = chats.find(c => 
        c.participantId === participantId && 
        c.participantType === participantType
      );
      if (chat) {
        setActiveChat(chat.id);
        const chatMessages = await getChatMessages();
        setMessages(chatMessages.filter(m => m.chatId === chat.id));
      }
    };
    loadChat();
  }, [participantId, participantType]);

  // Get participant details
  const participant = participantType === 'AGENT' 
    ? agents?.find(a => a.id === participantId)
    : teamMembers?.find(t => t.id === participantId);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async () => {
    if (!messageInput.trim() || !activeChat) return;

    const result = await createChatMessage({
      chatMessage: {
        chatId: activeChat,
        content: messageInput,
        sender: 'USER',
        timestamp: new Date(),
      }
    });

    if (result) {
      setMessages(prev => [...prev, {
        ...result,
        chatId: activeChat
      }]);
    }
    setMessageInput("");
  };

  if (!participant) return null;

  const showWelcomeScreen = messages.length === 0;

  return (
    <div className="flex-1 flex flex-col bg-background relative">
      {/* Channel Header */}
      <div className="h-14 border-b border-border flex items-center justify-between px-4">
        <div className="flex items-center">
          {participantType === 'AGENT' ? (
            <Bot className="w-5 h-5 mr-2" />
          ) : (
            <Avatar className="h-8 w-8 mr-2">
              <AvatarImage src={(participant as TeamMember).avatar || ''} />
              <AvatarFallback>{(participant as TeamMember).name.charAt(0)}</AvatarFallback>
            </Avatar>
          )}
          <span className="font-semibold">
            {participantType === 'AGENT' 
              ? (participant as Agent).name
              : (participant as TeamMember).name
            }
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            className="text-muted-foreground hover:text-foreground"
            aria-label="View info"
          >
            <Info className="w-5 h-5" />
          </button>
          <button 
            className="text-muted-foreground hover:text-foreground"
            aria-label="Settings"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <ScrollArea className="flex-1 p-4 pb-24">
        <div className="max-w-3xl mx-auto space-y-4 relative">
          {showWelcomeScreen ? (
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                {participantType === 'AGENT' ? (
                  <Bot className="w-8 h-8 text-muted-foreground" />
                ) : (
                  <User className="w-8 h-8 text-muted-foreground" />
                )}
              </div>
              <h2 className="text-2xl font-bold mb-2">
                Welcome to {participant.name}
              </h2>
              <p className="text-muted-foreground mb-4">
                This is the start of your conversation with {
                  participantType === 'AGENT' ? 'your AI assistant' : 'your team member'
                }.
              </p>
            </div>
          ) : (
            messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex items-start gap-3 max-w-[80%] transition-all duration-200",
                  message.sender === 'USER' ? "ml-auto" : "",
                  message.id.includes('temp') ? "opacity-50 translate-y-1" : "opacity-100 translate-y-0"
                )}
              >
                {message.sender === 'PARTICIPANT' && (
                  participantType === 'AGENT' ? (
                    <Avatar className="w-8 h-8">
                      <Bot className="w-5 h-5" />
                    </Avatar>
                  ) : (
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={(participant as TeamMember).avatar || ''} />
                      <AvatarFallback>{(participant as TeamMember).name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )
                )}
                <div
                  className={cn(
                    "rounded-lg p-3",
                    message.sender === 'USER'
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  )}
                >
                  {message.content}
                </div>
                {message.sender === 'USER' && (
                  <Avatar className="w-8 h-8">
                    <User className="w-5 h-5" />
                  </Avatar>
                )}
              </div>
            ))
          )}
          <div ref={messagesEndRef} className="h-px w-full" />
        </div>
      </ScrollArea>

      {/* Message Input */}
      <div className="fixed bottom-0 left-0 right-0 bg-background p-4 border-t border-border z-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center bg-muted rounded-lg p-2">
            <button 
              className="p-2 hover:bg-accent rounded"
              aria-label="Add attachment"
            >
              <Plus className="w-5 h-5 text-muted-foreground" />
            </button>
            <input
              type="text"
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              placeholder={`Message ${
                participantType === 'AGENT' ? 'your agent' : participant.name
              }...`}
              className="flex-1 bg-transparent px-4 text-foreground placeholder:text-muted-foreground focus:outline-none"
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
            <button 
              className="p-2 hover:bg-accent rounded"
              aria-label="Send message"
              onClick={handleSendMessage}
            >
              <Send className="w-5 h-5 text-muted-foreground" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
