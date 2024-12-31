import { gql } from '../generated';

export const GET_DOCUMENTS = gql(`
  query GetDocuments {
    documents {
      id
      title
      type
      projectId
    }
  }
`);
