import { GraphQLClient } from 'graphql-request';

export const graphQLClient = new GraphQLClient("http://localhost:5000/graphql", {
  credentials: 'include',
});
