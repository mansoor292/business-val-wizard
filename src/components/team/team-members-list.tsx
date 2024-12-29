"use client";

import { useEffect, useState } from "react";
import { useData } from "src/lib/data/context";
import { TeamMemberCard } from "src/components/team/team-member-card";
import { TeamMember } from "src/lib/data/types";
import OrgChart from "./org-chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "src/components/ui/tabs";
import { Button } from "src/components/ui/button";
import { Plus } from "lucide-react";
import { AddTeamMemberDialog } from "./add-team-member-dialog";

export function TeamMembersList() {
  const { teamMembers, listTeamMembers, createTeamMember } = useData();
  const [hasLoaded, setHasLoaded] = useState(false);
  const [addDialogOpen, setAddDialogOpen] = useState(false);

  useEffect(() => {
    if (!hasLoaded && (!teamMembers || teamMembers.length === 0)) {
      listTeamMembers();
      setHasLoaded(true);
    }
  }, [hasLoaded, teamMembers, listTeamMembers]);

  const handleAddMember = async (member: Omit<TeamMember, "id" | "createdAt" | "updatedAt">) => {
    try {
      await createTeamMember(member);
      await listTeamMembers(); // Refresh the list
    } catch (error) {
      console.error('Failed to create team member:', error);
    }
  };

  if (!teamMembers || teamMembers.length === 0) {
    return <div>Loading team members...</div>;
  }

  return (
    <Tabs defaultValue="list" className="w-full">
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
