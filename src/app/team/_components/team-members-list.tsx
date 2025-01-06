"use client";

import { useEffect, useState } from "react";
import { getTeamMembers, createTeamMember } from "src/app/actions/team-members";
import type { User, CreateUserInput } from "src/lib/graphql/generated/graphql";
type PartialUser = Pick<User, 'uId' | 'name' | 'email' | 'info' | 'managerUserId'>;
import { Tabs, TabsContent, TabsList, TabsTrigger } from "src/components/ui/tabs";
import { Button } from "src/components/ui/button";
import { Plus } from "lucide-react";
import { TeamMemberCard } from "./team-member-card";
import { OrgChart } from "./org-chart";
import { AddTeamMemberDialog } from "./add-team-member-dialog";

export function TeamMembersList() {
  const [teamMembers, setTeamMembers] = useState<PartialUser[]>([]);
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

  const handleAddMember = async (member: Partial<PartialUser>) => {
    try {
      const input = {
        user: {
          name: member.name || '',
          email: member.email || '',
          managerUserId: member.managerUserId,
          info: member.info,
          textNotifications: false,
          rId: null,
          lname: '',
          statement: '',
          roleAdmin: null,
          coachUserId: null,
          isCoach: false,
          phoneNumber: null,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }
      } as CreateUserInput;
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
            {teamMembers.map((member: PartialUser) => (
              <TeamMemberCard key={member.uId} member={member} />
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
