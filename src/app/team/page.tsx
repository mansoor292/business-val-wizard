import { Suspense } from 'react'
import TeamView from './team-view'
import { getTeamMembers } from '../../lib/actions/team'
import { TeamMember } from '../../lib/data/interface'

async function getData() {
  const teamMembers = await getTeamMembers()
  return { teamMembers }
}

export default async function TeamPage() {
  const data = await getData()
  
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg text-muted-foreground">Loading team...</div>
      </div>
    }>
      <TeamView teamMembers={data.teamMembers} />
    </Suspense>
  )
}
