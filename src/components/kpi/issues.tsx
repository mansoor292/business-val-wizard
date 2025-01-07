import React from 'react';
import { issuesData } from './data';

export const Issues = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="text-xs bg-primary/10 px-2 py-1 rounded">
            All Issues
          </button>
          <button className="text-xs text-muted-foreground hover:text-foreground">
            My Issues
          </button>
        </div>
      </div>
      <div className="space-y-2">
        {issuesData.map((issue, index) => (
          <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
            <span className="text-sm">{issue.title}</span>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs">
                {issue.assignee.split(' ').map(word => word[0]).join('')}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Issues;
