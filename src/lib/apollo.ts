import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oua1430z2x01xn4wr4de7k/master',
    cache: new InMemoryCache()
})