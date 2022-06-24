import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4sb8k5w21cw01z6dx3mbin2/master",
  cache: new InMemoryCache(),
});
