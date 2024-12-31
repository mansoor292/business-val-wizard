'use client';

import { useState, useEffect } from "react";
import { Sidebar } from "src/components/layout/sidebar";
import { ChirpView } from "src/components/chat/chirp-view";
import { createChat } from "src/app/actions/chats";

enum ParticipantType {
  AGENT = 'AGENT',
  TEAM_MEMBER = 'TEAM_MEMBER'
}

export function ChirpContainer() {
  const [selectedParticipant, setSelectedParticipant] = useState('sales');
  const [selectedType, setSelectedType] = useState<ParticipantType>(ParticipantType.AGENT);

  const handleParticipantSelect = async (id: string, type: ParticipantType) => {
    setSelectedParticipant(id);
    setSelectedType(type);
    await createChat({
      chat: {
        participantId: id,
        participantType: type,
        lastMessageAt: new Date(),
        status: 'active'
      }
    });
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
