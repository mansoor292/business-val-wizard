'use client';

import { cn } from "../../lib/utils";
import { useEffect, useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { 
  Plus, 
  ChevronDown, 
  Search,
  Bot,
  User
} from "lucide-react";
import { ParticipantType, TeamMember, Agent } from "../../lib/data/interface";
import { AddTeamChatDropdown } from "../chat/add-team-chat-dropdown";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getAgents, getChatMessages, initializeChat } from "../../lib/actions/chat";
import { getTeamMembers } from "../../lib/actions/team";

interface Chat {
  id: string;
  participantId: string;
  participantType: ParticipantType;
}

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  selectedParticipant?: string;
  selectedType?: ParticipantType;
  onParticipantSelect?: (id: string, type: ParticipantType) => void;
}

export function Sidebar({ 
  className, 
  selectedParticipant,
  selectedType = ParticipantType.AGENT,
  onParticipantSelect 
}: SidebarProps) {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [chats, setChats] = useState<Chat[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        setIsLoading(true);
        const [agentsData, teamMembersData] = await Promise.all([
          getAgents(),
          getTeamMembers()
        ]);
        setAgents(agentsData);
        setTeamMembers(teamMembersData);

        // Initialize chats for team members
        const teamChats = teamMembersData.map(member => ({
          id: `team-${member.id}`,
          participantId: member.id,
          participantType: ParticipantType.TEAM_MEMBER
        }));
        setChats(teamChats);
      } catch (error) {
        console.error('Failed to load sidebar data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  // Filter chats to get only team member chats
  const teamChats = chats.filter(chat => chat.participantType === ParticipantType.TEAM_MEMBER);

  const handleParticipantSelect = async (id: string, type: ParticipantType) => {
    try {
      await initializeChat(id, type);
      onParticipantSelect?.(id, type);
    } catch (error) {
      console.error('Failed to initialize chat:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="w-64 flex flex-col bg-background border-r border-border">
        <div className="flex items-center justify-center h-full">
          <div className="text-sm text-muted-foreground">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("w-64 flex flex-col bg-background border-r border-border", className)}>
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
            placeholder="Search..."
            className="bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none w-full"
          />
        </div>
      </div>

      {/* Sidebar Sections */}
      <ScrollArea className="flex-1">
        <div className="px-2 py-4">
          {/* Team Members Section */}
          <div>
            <div className="flex items-center justify-between px-2 mb-2">
              <div className="flex items-center text-muted-foreground text-sm">
                <ChevronDown className="w-3 h-3 mr-1" />
                <span className="font-semibold">Team Members</span>
              </div>
              <AddTeamChatDropdown 
                onSelect={(memberId) => handleParticipantSelect(memberId, ParticipantType.TEAM_MEMBER)}
              />
            </div>
            
            {/* Team Members List */}
            <div className="space-y-1 mb-6">
              {teamChats.map((chat) => {
                const member = teamMembers.find(m => m.id === chat.participantId);
                if (!member) return null;
                
                return (
                  <button
                    key={chat.id}
                    onClick={() => handleParticipantSelect(chat.participantId, ParticipantType.TEAM_MEMBER)}
                    className={`flex items-center px-2 py-1.5 rounded cursor-pointer w-full
                      ${selectedParticipant === chat.participantId && selectedType === ParticipantType.TEAM_MEMBER
                        ? 'bg-primary text-primary-foreground' 
                        : 'text-muted-foreground hover:bg-accent'}`}
                  >
                    <Avatar className="h-6 w-6 mr-2">
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{member.name}</span>
                  </button>
                );
              })}
            </div>

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
                  onClick={() => handleParticipantSelect(agent.id, ParticipantType.AGENT)}
                  className={`flex items-center px-2 py-1.5 rounded cursor-pointer w-full
                    ${selectedParticipant === agent.id && selectedType === ParticipantType.AGENT
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:bg-accent'}`}
                >
                  <Bot className="w-4 h-4 mr-2" />
                  <span className="text-sm">{agent.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
