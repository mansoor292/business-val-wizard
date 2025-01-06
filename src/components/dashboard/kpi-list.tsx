"use client";

import { useEffect, useState } from 'react';
import type { Kpi } from 'src/lib/graphql/generated/graphql';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'src/components/ui/card';
import { Badge } from 'src/components/ui/badge';

export function KPIList() {
  const [kpis, setKpis] = useState<Kpi[]>([]);

  useEffect(() => {
    // TODO: Replace with actual KPI data fetch
    const mockKpis = [
      {
        kpiId: '1',
        objective: 'Increase Revenue',
        qty: '1000000',
        unit: 'USD',
        charpStatus: 'C',
        achieveQty: '750000',
        performanceDirection: 'INCREASE'
      },
      {
        kpiId: '2',
        objective: 'Customer Satisfaction',
        qty: '95',
        unit: '%',
        charpStatus: 'H',
        achieveQty: '87',
        performanceDirection: 'INCREASE'
      },
      {
        kpiId: '3',
        objective: 'Employee Retention',
        qty: '90',
        unit: '%',
        charpStatus: 'A',
        achieveQty: '85',
        performanceDirection: 'INCREASE'
      }
    ];
    setKpis(mockKpis as Kpi[]);
  }, []);

  function getStatusColor(status: string) {
    switch (status) {
      case 'C':
        return 'bg-green-500';
      case 'H':
        return 'bg-yellow-500';
      case 'A':
        return 'bg-blue-500';
      case 'R':
        return 'bg-red-500';
      case 'P':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  }

  function calculateProgress(achieved: string, target: string): number {
    const achievedNum = parseFloat(achieved);
    const targetNum = parseFloat(target);
    return Math.round((achievedNum / targetNum) * 100);
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {kpis.map((kpi) => (
        <Card key={kpi.kpiId}>
          <CardHeader>
            <CardTitle>{kpi.objective}</CardTitle>
            <CardDescription>
              Target: {kpi.qty} {kpi.unit}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Badge className={getStatusColor(kpi.charpStatus)}>
                  Status: {kpi.charpStatus}
                </Badge>
                <Badge variant="outline">
                  Progress: {calculateProgress(kpi.achieveQty || '0', kpi.qty || '100')}%
                </Badge>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-primary h-2.5 rounded-full" 
                  style={{ 
                    width: `${calculateProgress(kpi.achieveQty || '0', kpi.qty || '100')}%` 
                  }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
