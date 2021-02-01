import { ApolloServer } from 'apollo-server';
import resolvers from './grahpql/resolvers';
import typeDefs from './grahpql/typeDefs';

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});