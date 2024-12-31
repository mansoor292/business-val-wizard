import { gql } from '../generated';

export const GET_TEAM_MEMBERS = gql(`
  query GetTeamMembers {
    teamMembers {
      id
      name
      role
      email
      avatar
      skills
      department
      reportsTo
    }
  }
`);

export const GET_TEAM_MEMBER = gql(`
  query GetTeamMember($id: UUID!) {
    teamMember(id: $id) {
      id
      name
      role
      email
      avatar
      skills
      department
      reportsTo
    }
  }
`);

export const CREATE_TEAM_MEMBER = gql(`
  mutation CreateTeamMember($input: CreateTeamMemberInput!) {
    createTeamMember(input: $input) {
      teamMember {
        id
        name
        role
        email
        avatar
        skills
        department
        reportsTo
      }
    }
  }
`);
