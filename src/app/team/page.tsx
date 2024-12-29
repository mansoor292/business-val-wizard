'use client';

import { TeamMembersList } from "src/components/team-members-list";

export default function TeamPage() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">Team Members</h1>
      <div className="bg-secondary/10 rounded-lg p-6">
        <TeamMembersList />
      </div>
    </div>
  );
}
