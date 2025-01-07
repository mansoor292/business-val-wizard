import React from 'react';
import { actionItems } from './data';

export const ActionItems = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-medium">45-Day Action Items</h3>
      <div className="space-y-4">
        {actionItems.map((item, index) => (
          <div key={index} className="border-b border-border pb-4 last:border-0 last:pb-0">
            <div className="text-sm mb-1">{item.title}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <span>Action Item Due Date:</span>
              <span className="ml-2">{item.dueDate}</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs">
                {item.assignee.split(' ').map(word => word[0]).join('')}
              </div>
              <span className="text-xs">{item.assignee}</span>
              <span className="text-xs text-blue-500 ml-auto">
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActionItems;
