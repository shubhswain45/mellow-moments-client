import { GraphQLClient } from 'graphql-request';

export const graphQLClient = new GraphQLClient("https://mellow-moments-server.onrender.com/graphql", {
  credentials: 'include',
});
