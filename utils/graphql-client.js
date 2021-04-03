import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.SERVER_GRAPHQL_URL;

export const graphQLClient = new GraphQLClient(endpoint, {
//   headers: {
//     authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNA_SECRET}`,
//     'X-Schema-Preview': 'partial-update-mutation',
//   },
});