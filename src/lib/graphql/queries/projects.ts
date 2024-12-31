import { gql } from '../generated';

export const GET_PROJECTS = gql(`
  query GetProjects {
    projects {
      id
      name
      description
      status
      startDate
      endDate
      teamIds
    }
  }
`);

export const GET_PROJECT = gql(`
  query GetProject($id: UUID!) {
    project(id: $id) {
      id
      name
      description
      status
      startDate
      endDate
      teamIds
    }
  }
`);

export const CREATE_PROJECT = gql(`
  mutation CreateProject($input: CreateProjectInput!) {
    createProject(input: $input) {
      project {
        id
        name
        description
        status
        startDate
        endDate
        teamIds
      }
    }
  }
`);
