'use server'

import { executeGraphQL } from 'src/lib/graphql/actions';
import { GET_TEAM_MEMBERS, GET_TEAM_MEMBER, CREATE_TEAM_MEMBER } from 'src/lib/graphql/queries/team-members';
import type { 
  GetTeamMembersQuery, 
  GetTeamMembersQueryVariables,
  GetTeamMemberQuery,
  GetTeamMemberQueryVariables,
  CreateTeamMemberInput,
  CreateTeamMemberMutation,
  CreateTeamMemberMutationVariables
} from 'src/lib/graphql/generated/graphql';

export async function getTeamMembers() {
  const result = await executeGraphQL<GetTeamMembersQuery, GetTeamMembersQueryVariables>({
    query: GET_TEAM_MEMBERS
  });
  return result.teamMembers || [];
}

export async function getTeamMember(id: string) {
  const result = await executeGraphQL<GetTeamMemberQuery, GetTeamMemberQueryVariables>({
    query: GET_TEAM_MEMBER,
    variables: { id }
  });
  return result.teamMember;
}

export async function createTeamMember(input: CreateTeamMemberInput) {
  const result = await executeGraphQL<CreateTeamMemberMutation, CreateTeamMemberMutationVariables>({
    query: CREATE_TEAM_MEMBER,
    variables: { input }
  });
  return result.createTeamMember?.teamMember;
}
