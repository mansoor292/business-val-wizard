"use client";

import { Send, Plus, User } from "lucide-react";
import { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn } from "src/lib/utils";
import { Card } from "../ui/card";
import { TeamMember } from "src/lib/data/types";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'member';
  timestamp: string;
}

interface TeamMemberChatProps {
  member: TeamMember;
  className?: string;
}

export function TeamMemberChat({ member, className }: TeamMemberChatProps) {
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: `Hi! I'm ${member.name}. How can I help you today?`,
      sender: 'member',
      timestamp: new Date().toISOString(),
    },
  ]);

  const handleSendMessage = () => {
    if (!messageInput.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      content: messageInput,
      sender: 'user',
      timestamp: new Date().toISOString(),
    }]);
    
    setMessageInput("");
    
    // Simulate member response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        content: `Thanks for your message! I'll get back to you soon.`,
        sender: 'member',
        timestamp: new Date().toISOString(),
      }]);
    }, 1000);
  };

  return (
    <Card className={cn("flex flex-col h-[400px]", className)}>
      {/* Chat Header */}
      <div className="h-14 border-b border-border flex items-center px-4">
        <div className="flex items-center gap-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={member.avatar || ''} />
            <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <span className="font-semibold">
            {member.name}
          </span>
        </div>
      </div>

      {/* Messages Area */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex items-start gap-3 max-w-[80%]",
                message.sender === 'user' ? "ml-auto" : ""
              )}
            >
              {message.sender === 'member' && (
                <Avatar className="h-8 w-8">
                  <AvatarImage src={member.avatar || ''} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
              )}
              <div
                className={cn(
                  "rounded-lg p-3",
                  message.sender === 'user'
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                )}
              >
                {message.content}
              </div>
              {message.sender === 'user' && (
                <Avatar className="h-8 w-8">
                  <User className="h-5 w-5" />
                </Avatar>
              )}
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Message Input */}
      <div className="p-4 border-t border-border">
        <div className="flex items-center bg-muted rounded-lg p-2">
          <button 
            className="p-2 hover:bg-accent rounded"
            aria-label="Add attachment"
          >
            <Plus className="h-5 w-5 text-muted-foreground" />
          </button>
          <input
            type="text"
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            placeholder="Type a message..."
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
            <Send className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </Card>
  );
}
