'use client';

import { cn } from "src/lib/utils";
import { ScrollArea } from "src/components/ui/scroll-area";
import { 
  Plus, 
  ChevronDown, 
  Search,
  Bot
} from "lucide-react";
import { useData } from "src/lib/data/context";

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  selectedAgent?: string;
  onAgentSelect?: (agentId: string) => void;
}

export function Sidebar({ className, selectedAgent = 'sales', onAgentSelect }: SidebarProps) {
  const { agents } = useData();

  return (
    <div className="w-64 flex flex-col bg-background border-r border-border">
      {/* Workspace Header */}
      <div className="px-4 h-14 flex items-center justify-between border-b border-border">
        <div className="flex items-center space-x-2">
          <span className="font-semibold">Catipult Workspace</span>
          <ChevronDown className="w-4 h-4 text-muted-foreground" />
        </div>
      </div>

      {/* Search Bar */}
      <div className="px-3 py-2">
        <div className="bg-muted rounded flex items-center px-3 py-1.5">
          <Search className="w-4 h-4 text-muted-foreground mr-2" />
          <input 
            type="text"
            placeholder="Search agents..."
            className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none w-full"
          />
        </div>
      </div>

      {/* Sidebar Sections */}
      <ScrollArea className="flex-1">
        <div className="px-2 py-4">
          {/* Agents Section */}
          <div className="flex items-center justify-between px-2 mb-2">
            <div className="flex items-center text-muted-foreground text-sm">
              <ChevronDown className="w-3 h-3 mr-1" />
              <span className="font-semibold">Agents</span>
            </div>
            <button 
              className="text-muted-foreground hover:text-foreground"
              aria-label="Add new agent"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
          
          {/* Agent List */}
          <div className="space-y-1">
            {agents.map((agent) => (
              <button
                key={agent.id}
                onClick={() => onAgentSelect?.(agent.id)}
                className={`flex items-center px-2 py-1.5 rounded cursor-pointer w-full
                  ${selectedAgent === agent.id 
                    ? 'bg-primary text-primary-foreground' 
                    : 'text-muted-foreground hover:bg-accent'}`}
              >
                <Bot className="w-4 h-4 mr-2" />
                <span className="text-sm">{agent.name}</span>
                {agent.status === 'active' && (
                  <div className="w-2 h-2 bg-green-500 rounded-full ml-auto" />
                )}
              </button>
            ))}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
