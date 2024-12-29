'use client';

import { CreateProjectDialog } from '../../components/create-project-dialog';
import ProjectView from '../../components/project-view';
import { ProjectList } from '../../components/project-list';

function DashboardContent() {
  return (
    <div className="space-y-8">
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">All Projects</h2>
          <CreateProjectDialog />
        </div>
        <ProjectList />
      </section>

      <section className="bg-secondary/10 rounded-lg">
        <ProjectView />
      </section>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-6">
      <h1 className="text-2xl font-bold mb-6">Project Dashboard</h1>
        <DashboardContent />
    </div>
  );
}
