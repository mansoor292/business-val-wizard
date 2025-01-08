'use client';

import { Suspense, useState, useEffect } from "react";
import { Header, ActiveView } from "../components/layout/header";
import { ChirpContainer } from "../components/chat/chirp-container";
import ProjectDashboardView from "./dashboard/project-dashboard-view";
import { DashboardView } from "../components/dashboard/dashboard-view";
import TeamView from "./team/team-view";
import { getTeamMembers } from "../lib/actions/team";
import { getProjects, getTasks, getDocuments } from "../lib/actions/project";
import { getAgents } from "../lib/actions/chat";
import { TeamMember, Project, Task, Document, Agent } from "../lib/data/interface";

interface ViewData {
  teamMembers?: TeamMember[];
  projects?: Project[];
  tasks?: Task[];
  documents?: Document[];
  agents?: Agent[];
}

export default function Home() {
  const [activeView, setActiveView] = useState<ActiveView>('chirp');
  const [data, setData] = useState<ViewData>({});

  // Fetch data for the active view
  const loadData = async () => {
    try {
      switch (activeView) {
        case 'team':
          const teamMembers = await getTeamMembers();
          setData({ teamMembers });
          break;
        case 'projects':
          const [projects, tasks, documents] = await Promise.all([
            getProjects(),
            getTasks(),
            getDocuments()
          ]);
          setData({ projects, tasks, documents });
          break;
        case 'chirp':
          const agents = await getAgents();
          setData({ agents });
          break;
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  // Load data when active view changes
  useEffect(() => {
    loadData();
  }, [activeView]);

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <div className="container mx-auto p-6"><DashboardView /></div>;
      case 'chirp':
        return <ChirpContainer />;
      case 'projects':
        return data.projects && data.tasks && data.documents ? (
          <ProjectDashboardView 
            projects={data.projects}
            tasks={data.tasks}
            documents={data.documents}
          />
        ) : null;
      case 'team':
        return data.teamMembers ? (
          <div className="container mx-auto p-6">
            <TeamView teamMembers={data.teamMembers} />
          </div>
        ) : null;
      default:
        return <div className="container mx-auto p-6">Content coming soon...</div>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header activeView={activeView} onViewChange={setActiveView} />
      <div className="flex-1 flex">
        <Suspense fallback={<div>Loading...</div>}>
          {renderContent()}
        </Suspense>
      </div>
    </div>
  );
}
