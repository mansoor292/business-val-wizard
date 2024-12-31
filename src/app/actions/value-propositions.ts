'use server'

import { executeGraphQL } from 'src/lib/graphql/actions';
import { GET_VALUE_PROPOSITIONS } from 'src/lib/graphql/queries/value-propositions';
import type { GetValuePropositionsQuery, GetValuePropositionsQueryVariables } from 'src/lib/graphql/generated/graphql';

export async function getValuePropositions() {
  const result = await executeGraphQL<GetValuePropositionsQuery, GetValuePropositionsQueryVariables>({
    query: GET_VALUE_PROPOSITIONS
  });
  return result.valuePropositions || [];
}
