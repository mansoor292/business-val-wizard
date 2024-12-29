'use client';

import { useState } from "react";
import { Header, ActiveView } from "src/components/header";
import { Sidebar } from "src/components/sidebar";
import { AgentView } from "src/components/agent-view";
import DashboardPage from "src/app/dashboard/project";
import { DashboardView } from "src/components/dashboard-view";
import TeamPage from "src/app/team/page";


export default function Home() {
  const [activeView, setActiveView] = useState<ActiveView>('agents');
  const [selectedAgent, setSelectedAgent] = useState('sales');

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <div className="container mx-auto p-6"><DashboardView /></div>;
      case 'agents':
        return (
          <>
            <Sidebar 
              selectedAgent={selectedAgent} 
              onAgentSelect={setSelectedAgent}
            />
            <AgentView selectedAgent={selectedAgent} />
          </>
        );
      case 'projects':
        return <DashboardPage />;
      case 'team':
        return <div className="container mx-auto p-6"><TeamPage /></div>;
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
