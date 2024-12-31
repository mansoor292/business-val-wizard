import { gql } from '../generated';

export const GET_AGENTS = gql(`
  query GetAgents {
    agents {
      id
      name
      handle
      status
    }
  }
`);

export const GET_AGENT = gql(`
  query GetAgent($id: UUID!) {
    agent(id: $id) {
      id
      name
      handle
      status
    }
  }
`);

export const CREATE_AGENT = gql(`
  mutation CreateAgent($input: CreateAgentInput!) {
    createAgent(input: $input) {
      agent {
        id
        name
        handle
        status
      }
    }
  }
`);

export const UPDATE_AGENT_STATUS = gql(`
  mutation UpdateAgentStatus($input: UpdateAgentInput!) {
    updateAgent(input: $input) {
      agent {
        id
        status
      }
    }
  }
`);
