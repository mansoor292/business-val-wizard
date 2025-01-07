import React, { useState } from 'react';
import Issues from './issues';

type Tab = 'issue' | 'task';

export const SidebarTabs = () => {
  const [activeTab, setActiveTab] = useState<Tab>('issue');

  return (
    <div className="w-80">
      <div className="flex gap-2 mb-4">
        <button
          className={`px-4 py-1 text-sm ${
            activeTab === 'issue'
              ? 'border-b-2 border-primary font-medium'
              : 'text-muted-foreground hover:text-foreground'
          }`}
          onClick={() => setActiveTab('issue')}
        >
          Issue
        </button>
        <button
          className={`px-4 py-1 text-sm ${
            activeTab === 'task'
              ? 'border-b-2 border-primary font-medium'
              : 'text-muted-foreground hover:text-foreground'
          }`}
          onClick={() => setActiveTab('task')}
        >
          Task
        </button>
      </div>
      <div className="bg-background">
        <Issues />
      </div>
    </div>
  );
};

export default SidebarTabs;
