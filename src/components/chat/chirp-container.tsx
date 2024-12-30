'use client';

import { useState, useEffect } from "react";
import { Sidebar } from "src/components/layout/sidebar";
import { ChirpView } from "src/components/chat/chirp-view";
import { useData } from "src/lib/data/context";
import { ParticipantType } from "src/lib/data";

export function ChirpContainer() {
  const [selectedParticipant, setSelectedParticipant] = useState('sales');
  const [selectedType, setSelectedType] = useState<ParticipantType>(ParticipantType.AGENT);

  const { initializeChat } = useData();

  const handleParticipantSelect = async (id: string, type: ParticipantType) => {
    setSelectedParticipant(id);
    setSelectedType(type);
    await initializeChat(id, type);
  };

  return (
    <>
      <Sidebar 
        selectedParticipant={selectedParticipant}
        selectedType={selectedType}
        onParticipantSelect={handleParticipantSelect}
      />
      <div className="flex-1">
        <ChirpView 
          key={`${selectedType}-${selectedParticipant}`}
          participantId={selectedParticipant} 
          participantType={selectedType}
        />
      </div>
    </>
  );
}
