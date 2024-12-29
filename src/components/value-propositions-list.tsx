"use client";

import { useEffect, useState } from 'react';
import { useData } from 'src/lib/data/context';
import { ValueProposition } from 'src/lib/data/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'src/components/ui/card';
import { Badge } from 'src/components/ui/badge';


export function ValuePropositionsList() {
  const { valuePropositions, listValuePropositions } = useData();

  useEffect(() => {
    listValuePropositions();
  }, [listValuePropositions]);

  function getImpactColor(impact: ValueProposition['impact']) {
    switch (impact) {
      case 'HIGH':
        return 'bg-green-500';
      case 'MEDIUM':
        return 'bg-yellow-500';
      case 'LOW':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {valuePropositions.map((vp) => (
        <Card key={vp.id}>
          <CardHeader>
            <CardTitle>{vp.title}</CardTitle>
            <CardDescription>{vp.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2">
              <Badge className={getImpactColor(vp.impact)}>
                Impact: {vp.impact}
              </Badge>
              <Badge variant="outline">
                Effort: {vp.effort}
              </Badge>
              <Badge variant="outline">
                Confidence: {vp.confidence}
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}