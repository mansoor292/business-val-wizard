import React from 'react';
import { businessDrivers } from './data';

export const BusinessDrivers = () => {
  return (
    <div className="grid grid-cols-7 gap-4 mb-8">
      {businessDrivers.map((driver) => (
        <div key={driver.name} className="bg-muted p-4 rounded-lg">
          <div className="text-sm mb-2">{driver.name}</div>
          <div className={`text-2xl font-bold ${driver.color}`}>
            {driver.percentage}%
          </div>
        </div>
      ))}
    </div>
  );
};

export default BusinessDrivers;
