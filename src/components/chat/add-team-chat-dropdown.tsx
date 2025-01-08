'use client';

import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { TeamMember } from "../../lib/data/interface";
import { getTeamMembers } from "../../lib/actions/team";

interface AddTeamChatDropdownProps {
  onSelect: (memberId: string) => void;
}

export function AddTeamChatDropdown({ onSelect }: AddTeamChatDropdownProps) {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTeamMembers = async () => {
      try {
        setIsLoading(true);
        const members = await getTeamMembers();
        setTeamMembers(members);
      } catch (error) {
        console.error('Failed to load team members:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadTeamMembers();
  }, []);

  if (isLoading) {
    return (
      <button 
        className="text-muted-foreground hover:text-foreground"
        aria-label="Loading team members..."
        disabled
      >
        <Plus className="w-4 h-4" />
      </button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button 
          className="text-muted-foreground hover:text-foreground"
          aria-label="Add team chat"
        >
          <Plus className="w-4 h-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {teamMembers.map((member) => (
          <DropdownMenuItem
            key={member.id}
            onClick={() => onSelect(member.id)}
          >
            <span>{member.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
