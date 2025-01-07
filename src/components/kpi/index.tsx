import React, { useState } from 'react';
import { Calendar, Users, Settings, Printer } from 'lucide-react';
import BusinessDrivers from './business-drivers';
import KPIList from './kpi-list';
import SidebarTabs from './sidebar-tabs';
import ActionItems from './action-items';

export const KPIView = () => {
  const [expandedKPIs, setExpandedKPIs] = useState(new Set(['L1']));

  const toggleExpand = (id: string) => {
    const newExpanded = new Set(expandedKPIs);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedKPIs(newExpanded);
  };

  return (
    <div className="flex gap-6 p-4 md:p-8">
      <div className="flex-1 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight">Your World Class Business Plan</h2>
        </div>
        
        <div className="flex items-center gap-4 mb-6">
          <button 
            className="bg-muted hover:bg-accent px-4 py-2 rounded-md flex items-center space-x-2"
            aria-label="Select time period"
          >
            <Calendar className="w-4 h-4" />
            <span>Quarterly</span>
          </button>
          <button 
            className="bg-muted hover:bg-accent px-4 py-2 rounded-md flex items-center space-x-2"
            aria-label="Select team filter"
          >
            <Users className="w-4 h-4" />
            <span>All Teams</span>
          </button>
          <div className="flex-1" />
          <button 
            className="p-2 hover:bg-accent rounded-md"
            aria-label="Open settings"
          >
            <Settings className="w-5 h-5" />
          </button>
          <button 
            className="p-2 hover:bg-accent rounded-md"
            aria-label="Print view"
          >
            <Printer className="w-5 h-5" />
          </button>
        </div>

        <BusinessDrivers />

        <div className="bg-background rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <button className="text-xs bg-primary/10 px-2 py-1 rounded">
                List of KPIs
              </button>
              <button className="text-xs text-muted-foreground hover:text-foreground">
                Cascaded KPIs
              </button>
            </div>
          </div>
          <KPIList expandedKPIs={expandedKPIs} toggleExpand={toggleExpand} />
        </div>
      </div>

      <div className="space-y-8">
        <SidebarTabs />
        <ActionItems />
      </div>
    </div>
  );
};

export default KPIView;
