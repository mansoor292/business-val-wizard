'use client';

import { useState } from "react";
import { Header, ActiveView } from "src/components/layout/header";
import { Sidebar } from "src/components/layout/sidebar";
import { AgentView } from "src/components/agent/agent-view";
import ProjectView from "src/app/projects";
import { DashboardView } from "src/components/dashboard/dashboard-view";
import TeamView from "src/app/team";
import { KPIView } from "src/components/kpi";

export default function Home() {
  const [activeView, setActiveView] = useState<ActiveView>('dashboard');
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
        return <ProjectView />;
      case 'team':
        return <div className="container mx-auto p-6"><TeamView /></div>;
      case 'kpi':
        return <div className="container mx-auto p-6"><KPIView /></div>;
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
