'use server'

import { executeGraphQL } from 'src/lib/graphql/actions';
import { GET_AGENTS, GET_AGENT, CREATE_AGENT, UPDATE_AGENT_STATUS } from 'src/lib/graphql/queries/agents';
import type { 
  GetAgentsQuery, 
  GetAgentsQueryVariables,
  GetAgentQuery,
  GetAgentQueryVariables,
  CreateAgentInput,
  CreateAgentMutation,
  CreateAgentMutationVariables,
  UpdateAgentInput,
  UpdateAgentStatusMutation,
  UpdateAgentStatusMutationVariables
} from 'src/lib/graphql/generated/graphql';

export async function getAgents() {
  const result = await executeGraphQL<GetAgentsQuery, GetAgentsQueryVariables>({
    query: GET_AGENTS
  });
  return result.agents || [];
}

export async function getAgent(id: string) {
  const result = await executeGraphQL<GetAgentQuery, GetAgentQueryVariables>({
    query: GET_AGENT,
    variables: { id }
  });
  return result.agent;
}

export async function createAgent(input: CreateAgentInput) {
  const result = await executeGraphQL<CreateAgentMutation, CreateAgentMutationVariables>({
    query: CREATE_AGENT,
    variables: { input }
  });
  return result.createAgent?.agent;
}

export async function updateAgentStatus(input: UpdateAgentInput) {
  const result = await executeGraphQL<UpdateAgentStatusMutation, UpdateAgentStatusMutationVariables>({
    query: UPDATE_AGENT_STATUS,
    variables: { input }
  });
  return result.updateAgent?.agent;
}
