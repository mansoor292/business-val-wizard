'use client';

import { TeamMembersList } from "src/components/team/team-members-list";
//import { OrgChart } from "src/components/team/org-chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "src/components/ui/tabs";

export default function TeamPage() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">Team Members</h1>
      <Tabs defaultValue="list" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="org">Organization Chart</TabsTrigger>
        </TabsList>
        <TabsContent value="list" className="bg-secondary/10 rounded-lg p-6">
          <TeamMembersList />
        </TabsContent>
        <TabsContent value="org" className="bg-secondary/10 rounded-lg">
          {/* <OrgChart /> */}
        </TabsContent>
      </Tabs>
    </div>
  );
}
