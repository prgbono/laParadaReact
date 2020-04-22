// This is the file where the GraphQL server is created

import express from 'express';
import { ApolloServer } from 'apollo-server-express'
import firebase from 'firebase';
require ('dotenv').config();
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return {
      headers: req.headers, 
    };
  }
});

server.applyMiddleware({ app });

app.listen({ port:4000 }, () => {
  console.log("Server has started 🚀 http://localhost:4000/graphql");
})