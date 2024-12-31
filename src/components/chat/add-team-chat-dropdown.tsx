'use client';

import { getTeamMembers } from "src/app/actions/team-members";
import type { TeamMember } from "src/lib/graphql/generated/graphql";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "src/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

interface AddTeamChatDropdownProps {
  onSelect: (memberId: string) => void;
}

export function AddTeamChatDropdown({ onSelect }: AddTeamChatDropdownProps) {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const loadTeamMembers = async () => {
      const members = await getTeamMembers();
      setTeamMembers(members || []);
    };
    loadTeamMembers();
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button 
          className="text-muted-foreground hover:text-foreground"
          aria-label="Add new team chat"
        >
          <Plus className="w-4 h-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {teamMembers?.map((member: TeamMember) => (
          <DropdownMenuItem
            key={member.id}
            onClick={() => onSelect(member.id)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Avatar className="h-6 w-6">
              <AvatarImage src={member.avatar || ''} />
              <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span>{member.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
