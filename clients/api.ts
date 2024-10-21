import { GraphQLClient } from 'graphql-request';

export const graphQLClient = new GraphQLClient("https://mellow-moments-server-4.onrender.com/graphql", {
  credentials: 'include',
});
