"use client";

import { useEffect, useState } from "react";
import { getTeamMembers, createTeamMember } from "src/app/actions/team-members";
import type { TeamMember, CreateTeamMemberInput } from "src/lib/graphql/generated/graphql";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "src/components/ui/tabs";
import { Button } from "src/components/ui/button";
import { Plus } from "lucide-react";
import { TeamMemberCard } from "./team-member-card";
import { OrgChart } from "./org-chart";
import { AddTeamMemberDialog } from "./add-team-member-dialog";

export function TeamMembersList() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [addDialogOpen, setAddDialogOpen] = useState(false);

  const loadTeamMembers = async () => {
    const data = await getTeamMembers();
    setTeamMembers(data);
    setIsLoading(false);
  };

  useEffect(() => {
    loadTeamMembers();
  }, []);

  const handleAddMember = async (member: Omit<TeamMember, "id" | "createdAt" | "updatedAt">) => {
    try {
      const input: CreateTeamMemberInput = {
        teamMember: {
          name: member.name,
          role: member.role,
          email: member.email,
          department: member.department,
          reportsTo: member.reportsTo,
          avatar: member.avatar,
          skills: member.skills
        }
      };
      await createTeamMember(input);
      await loadTeamMembers(); // Refresh the list
    } catch (error) {
      console.error('Failed to create team member:', error);
    }
  };

  if (isLoading) {
    return <div>Loading team members...</div>;
  }

  if (teamMembers.length === 0) {
    return <div>No team members found.</div>;
  }

  return (
    <Tabs defaultValue="org" className="w-full">
      <TabsList className="mb-4">
        <TabsTrigger value="list">List View</TabsTrigger>
        <TabsTrigger value="org">Organization Chart</TabsTrigger>
      </TabsList>
      <TabsContent value="list" className="bg-secondary/10 rounded-lg p-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold tracking-tight">Team Members</h2>
            <Button onClick={() => setAddDialogOpen(true)}>
              <Plus className="mr-2 h-4 w-4" />
              Add Member
            </Button>
          </div>
          <AddTeamMemberDialog
            open={addDialogOpen}
            onOpenChange={setAddDialogOpen}
            reportsTo={null}
            onAdd={handleAddMember}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamMembers.map((member: TeamMember) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </TabsContent>
      <TabsContent value="org" className="bg-secondary/10 rounded-lg">
        <OrgChart 
          teamMembers={teamMembers} 
          onAddMember={handleAddMember}
        />
      </TabsContent>
    </Tabs>
  );
}
