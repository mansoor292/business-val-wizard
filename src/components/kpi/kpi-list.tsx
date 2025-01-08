import React from 'react';
import { ChevronRight, ChevronDown, ArrowRight, UserPlus, UserMinus } from 'lucide-react';
import { KPI } from '../../lib/data/interface';

interface KPIListProps {
  kpis: KPI[];
  expandedKPIs: Set<string>;
  toggleExpand: (id: string) => void;
}

interface KPIRowProps {
  kpi: KPI;
  level?: number;
  expandedKPIs: Set<string>;
  toggleExpand: (id: string) => void;
}

const KPIRow = ({ kpi, level = 0, expandedKPIs, toggleExpand }: KPIRowProps) => {
  const progress = (kpi.current / kpi.target) * 100;
  const hasChildren = kpi.children.length > 0;

  return (
    <>
      <div 
        className={`flex items-center py-2 hover:bg-accent/50 rounded-md ${
          level === 0 ? 'bg-background' :
          level === 1 ? 'bg-accent/10' :
          level === 2 ? 'bg-accent/20' :
          level === 3 ? 'bg-accent/30' :
          level === 4 ? 'bg-accent/40' :
          'bg-accent/50'
        }`}
        style={{ paddingLeft: `${level * 24}px` }}
      >
        {hasChildren && (
          <button
            onClick={() => toggleExpand(kpi.id)}
            className="p-1 hover:bg-accent rounded-md mr-2"
          >
            {expandedKPIs.has(kpi.id) ? 
              <ChevronDown className="w-4 h-4" /> : 
              <ChevronRight className="w-4 h-4" />
            }
          </button>
        )}
        <div className="flex-1 flex items-center gap-4">
          <span className="text-xs font-medium bg-primary/10 px-2 py-0.5 rounded">
            {kpi.level}
          </span>
          <span className="flex-1 text-sm">{kpi.title}</span>
          <div className="flex items-center gap-4">
            <span className="text-xs bg-accent/50 px-2 py-1 rounded">
              {kpi.frequency}
            </span>
            <div className="flex items-center gap-2">
              <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <span className="text-xs font-medium w-12">
                {progress.toFixed(1)}%
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button 
                className="p-1 hover:bg-accent rounded-md"
                aria-label="Forward KPI"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                className="p-1 hover:bg-accent rounded-md"
                aria-label="Add user to KPI"
              >
                <UserPlus className="w-4 h-4" />
              </button>
              <button 
                className="p-1 hover:bg-accent rounded-md"
                aria-label="Remove user from KPI"
              >
                <UserMinus className="w-4 h-4" />
              </button>
              <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs">
                {kpi.ownerInitials}
              </span>
            </div>
          </div>
        </div>
      </div>
      {expandedKPIs.has(kpi.id) && kpi.children.map(child => (
        <KPIRow 
          key={child.id}
          kpi={child}
          level={level + 1}
          expandedKPIs={expandedKPIs}
          toggleExpand={toggleExpand}
        />
      ))}
    </>
  );
};

export const KPIList = ({ kpis, expandedKPIs, toggleExpand }: KPIListProps) => {
  return (
    <div className="space-y-1">
      {kpis.map(kpi => (
        <KPIRow
          key={kpi.id}
          kpi={kpi}
          expandedKPIs={expandedKPIs}
          toggleExpand={toggleExpand}
        />
      ))}
    </div>
  );
};

export default KPIList;
