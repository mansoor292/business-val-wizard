'use server'

import { executeGraphQL } from 'src/lib/graphql/actions';
import { GET_PROJECTS, GET_PROJECT, CREATE_PROJECT } from 'src/lib/graphql/queries/projects';
import type { 
  GetProjectsQuery, 
  GetProjectsQueryVariables,
  GetProjectQuery,
  GetProjectQueryVariables,
  CreateProjectInput,
  CreateProjectMutation,
  CreateProjectMutationVariables
} from 'src/lib/graphql/generated/graphql';

export async function getProjects() {
  const result = await executeGraphQL<GetProjectsQuery, GetProjectsQueryVariables>({
    query: GET_PROJECTS
  });
  return result.projects || [];
}

export async function getProject(id: string) {
  const result = await executeGraphQL<GetProjectQuery, GetProjectQueryVariables>({
    query: GET_PROJECT,
    variables: { id }
  });
  return result.project;
}

export async function createProject(input: CreateProjectInput) {
  const result = await executeGraphQL<CreateProjectMutation, CreateProjectMutationVariables>({
    query: CREATE_PROJECT,
    variables: { input }
  });
  return result.createProject?.project;
}
