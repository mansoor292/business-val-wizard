"use client";

import { useEffect, useState } from "react";
import { useData } from "src/lib/data/context";
import { TeamMemberCard } from "src/components/team-member-card";
import { TeamMember } from "src/lib/data/types";

export function TeamMembersList() {
  const { listTeamMembers, teamMembers: contextTeamMembers } = useData();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTeamMembers = async () => {
      try {
        await listTeamMembers();
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading team members:", error);
        setIsLoading(false);
      }
    };

    loadTeamMembers();
  }, [listTeamMembers]);

  if (isLoading) {
    return <div>Loading team members...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">Team Members</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contextTeamMembers.map((member: TeamMember) => (
          <TeamMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}
