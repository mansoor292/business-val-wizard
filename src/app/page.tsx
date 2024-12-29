'use client';

import { useState, useEffect } from "react";
import { MetricsChart } from "src/components/metrics-chart";
import { Card } from "src/components/ui/card";
import { Header } from "src/components/header";
import { Sidebar } from "src/components/sidebar";
import { ValuePropositionsList } from "src/components/value-propositions-list";
import DashboardContent from "src/app/dashboard/project";
import TeamPage from "src/app/team/page";
export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex">
          <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
          <main className="flex-1">
            {activeTab === 'dashboard' ? (
              <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
              <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="p-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">
                      Total Projects
                    </p>
                    <p className="text-2xl font-bold">12</p>
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">
                      Active Tasks
                    </p>
                    <p className="text-2xl font-bold">48</p>
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">
                      Team Members
                    </p>
                    <p className="text-2xl font-bold">8</p>
                  </div>
                </Card>
                <Card className="p-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground">
                      Completion Rate
                    </p>
                    <p className="text-2xl font-bold">92%</p>
                  </div>
                </Card>
              </div>
              <div className="grid gap-4 grid-cols-1">
                <Card className="p-4">
                  <h3 className="text-lg font-medium mb-4">Value Propositions</h3>
                  <ValuePropositionsList />
                </Card>
              </div>
              <div className="grid gap-4 grid-cols-1 lg:grid-cols-2">
                <Card className="p-4">
                  <h3 className="text-lg font-medium mb-4">Project Metrics</h3>
                  <div className="h-[300px]">
                    <MetricsChart />
                  </div>
                </Card>
                <Card className="p-4">
                  <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <div>
                        <p className="text-sm font-medium">Project Alpha updated</p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <div>
                        <p className="text-sm font-medium">New team member added</p>
                        <p className="text-xs text-muted-foreground">5 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 rounded-full bg-yellow-500" />
                      <div>
                        <p className="text-sm font-medium">Task deadline updated</p>
                        <p className="text-xs text-muted-foreground">8 hours ago</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
              </div>
            ) : activeTab === 'projects' ? (
              <DashboardContent />
            ) : activeTab === 'team' ? (
              <TeamPage />
            ) : null}
          </main>
        </div>
      </div>
  );
}
