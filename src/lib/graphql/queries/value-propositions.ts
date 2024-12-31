import { gql } from '../generated';

export const GET_VALUE_PROPOSITIONS = gql(`
  query GetValuePropositions {
    valuePropositions {
      id
      title
      description
      impact
      effort
      confidence
    }
  }
`);
