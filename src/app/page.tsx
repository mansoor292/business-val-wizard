'use client';

import { useState } from "react";
import { cn } from "src/lib/utils";
import { Header, ActiveView } from "src/components/layout/header";
import { Sidebar } from "src/components/layout/sidebar";
import { ChirpView } from "src/components/chat/chirp-view";
import ProjectDashboardView from "./dashboard/project-dashboard-view";
import { DashboardView } from "src/components/dashboard/dashboard-view";
import TeamView from "./team/team-view";


export default function Home() {
  const [activeView, setActiveView] = useState<ActiveView>('chirp');
  const [selectedAgent, setSelectedAgent] = useState('sales');

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <div className="container mx-auto p-6"><DashboardView /></div>;
      case 'chirp':
        return (
          <>
            <Sidebar 
              selectedAgent={selectedAgent} 
              onAgentSelect={setSelectedAgent}
            />
            <div className="flex-1">
              <ChirpView 
                key={selectedAgent} 
                participantId={selectedAgent} 
                participantType="AGENT" 
              />
            </div>
          </>
        );
      case 'projects':
        return <ProjectDashboardView />;
      case 'team':
        return <div className="container mx-auto p-6"><TeamView /></div>;
      default:
        return <div className="container mx-auto p-6">Content coming soon...</div>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header activeView={activeView} onViewChange={setActiveView} />
      <div className="flex-1 flex">
        {renderContent()}
      </div>
    </div>
  );
}
