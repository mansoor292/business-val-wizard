import { Suspense } from 'react'
import { ChirpView } from 'src/components/chat/chirp-view'
import { getAgents } from 'src/lib/actions/chat'
import { getTeamMembers } from 'src/lib/actions/team'
import { ParticipantType } from 'src/lib/data/interface'

interface ChatPageProps {
  params: {
    type: string
    id: string
  }
}

async function getData(type: string, id: string) {
  const [agents, teamMembers] = await Promise.all([
    getAgents(),
    getTeamMembers()
  ])

  return {
    agents,
    teamMembers,
    participantType: type.toUpperCase() as ParticipantType,
    participantId: id
  }
}

export default async function ChatPage({ params }: ChatPageProps) {
  const data = await getData(params.type, params.id)
  
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-muted-foreground">Loading chat...</div>
      </div>
    }>
      <ChirpView 
        participantId={data.participantId}
        participantType={data.participantType}
      />
    </Suspense>
  )
}
