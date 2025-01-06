'use server'

import { executeGraphQL } from 'src/lib/graphql/actions';
import { GET_USERS, GET_USER, CREATE_USER } from 'src/lib/graphql/queries/users';
import type { 
  GetUsersQuery, 
  GetUsersQueryVariables,
  GetUserQuery,
  GetUserQueryVariables,
  CreateUserInput,
  CreateUserMutation,
  CreateUserMutationVariables
} from 'src/lib/graphql/generated/graphql';

export async function getTeamMembers() {
  const result = await executeGraphQL<GetUsersQuery, GetUsersQueryVariables>({
    query: GET_USERS
  });
  return result.users || [];
}

export async function getTeamMember(id: string) {
  const result = await executeGraphQL<GetUserQuery, GetUserQueryVariables>({
    query: GET_USER,
    variables: { id }
  });
  return result.user;
}

export async function createTeamMember(input: CreateUserInput) {
  const result = await executeGraphQL<CreateUserMutation, CreateUserMutationVariables>({
    query: CREATE_USER,
    variables: { input }
  });
  return result.createUser?.user;
}
