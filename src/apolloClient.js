import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "https://oghrx5hywfhadgpdijjif6j57y.appsync-api.us-east-1.amazonaws.com/graphql", // Replace with your AppSync API URL
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "x-api-key": "da2-aojly7dtgvf2tkg6q6koms5cxi", // Replace with your API key or use a different authentication method
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;