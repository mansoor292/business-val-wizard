'use client';

import { useState } from "react";
import { Sidebar } from "../layout/sidebar";
import { ChirpView } from "./chirp-view";
import { ParticipantType } from "../../lib/data/interface";
import { initializeChat } from "../../lib/actions/chat";

export function ChirpContainer() {
  const [selectedParticipant, setSelectedParticipant] = useState('sales');
  const [selectedType, setSelectedType] = useState<ParticipantType>(ParticipantType.AGENT);

  const handleParticipantSelect = async (id: string, type: ParticipantType) => {
    try {
      await initializeChat(id, type);
      setSelectedParticipant(id);
      setSelectedType(type);
    } catch (error) {
      console.error('Failed to initialize chat:', error);
    }
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
