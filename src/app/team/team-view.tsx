'use client';

import { TeamMembersList } from "./_components/team-members-list";

export default function TeamView() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">Team Members</h1>
      <TeamMembersList />
    </div>
  );
}
