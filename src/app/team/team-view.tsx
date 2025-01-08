'use client';

import { TeamMembersList } from "./_components/team-members-list";

interface TeamViewProps {
  teamMembers: any[];  // TODO: Replace 'any' with proper type once available
}

export default function TeamView({ teamMembers }: TeamViewProps) {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">Team Members</h1>
      <TeamMembersList teamMembers={teamMembers} />
    </div>
  );
}
