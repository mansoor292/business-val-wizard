'use client';

import { Bot, Info, Settings, PlusCircle, MessageCircle, Plus, Send } from "lucide-react";
import { useState } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Avatar } from "./ui/avatar";
import { cn } from "src/lib/utils";
import { useData } from "src/lib/data/context";

interface AgentViewProps {
  selectedAgent: string;
}

export function AgentView({ selectedAgent }: AgentViewProps) {
  const { agents, messages, sendMessage } = useData();
  const currentAgent = agents.find(a => a.id === selectedAgent);
  const [messageInput, setMessageInput] = useState("");
  const [showWelcome, setShowWelcome] = useState(true);
  
  const agentMessages = messages.filter(m => m.agentId === selectedAgent);
  
  const handleSendMessage = async () => {
    if (!messageInput.trim()) return;
    await sendMessage(selectedAgent, messageInput);
    setMessageInput("");
    setShowWelcome(false);
  };

  return (
    <div className="flex-1 flex flex-col bg-background">
      {/* Channel Header */}
      <div className="h-14 border-b border-border flex items-center justify-between px-4">
        <div className="flex items-center">
          <Bot className="w-5 h-5 mr-2" />
          <span className="font-semibold">
            {currentAgent?.name}
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <button 
            className="text-muted-foreground hover:text-foreground"
            aria-label="View agent info"
          >
            <Info className="w-5 h-5" />
          </button>
          <button 
            className="text-muted-foreground hover:text-foreground"
            aria-label="Agent settings"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <ScrollArea className="flex-1 p-4">
        <div className="max-w-3xl mx-auto space-y-4">
          {showWelcome && agentMessages.length === 0 ? (
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="w-8 h-8 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-bold mb-2">
                Welcome to {currentAgent?.name}
              </h2>
              <p className="text-muted-foreground mb-4">
                This is the start of your conversation with your AI assistant.
              </p>
              <button 
                className="inline-flex items-center px-4 py-2 rounded bg-primary text-primary-foreground hover:bg-primary/90"
                onClick={() => setShowWelcome(false)}
              >
                <PlusCircle className="w-4 h-4 mr-2" />
                Start New Conversation
              </button>
            </div>
          ) : (
            agentMessages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  "flex items-start gap-3 max-w-[80%]",
                  message.sender === 'user' ? "ml-auto" : ""
                )}
              >
                {message.sender === 'agent' && (
                  <Avatar className="w-8 h-8">
                    <Bot className="w-5 h-5" />
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
                  <Avatar className="w-8 h-8">
                    <div className="w-full h-full bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                      U
                    </div>
                  </Avatar>
                )}
              </div>
            ))
          )}
        </div>
      </ScrollArea>

      {/* Message Input */}
      <div className="p-4 border-t border-border">
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
              placeholder="Message your agent..."
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
