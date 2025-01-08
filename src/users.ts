import { gql } from '../gql';

export const testQuery = gql(`
query MyQuery {
  users {
    createdAt
    name
  }
}
`);