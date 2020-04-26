// This is the file where the GraphQL server is created

const { ApolloServer } = require("apollo-server");
const admin = require("firebase-admin");
require ('dotenv').config();
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const serviceAccount = require('../service-account.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const server = new ApolloServer({
  typeDefs,
  resolvers,
  engine: {
    apiKey: '<APOLLO ENGINE APIKEY HERE>'
  },
  introspection: true
});

server.listen({ port: process.env.GRAPHQL_LOCAL_SERVER_PORT || 4000 })
.then(({ url }) => {
  console.log(`🚀🚀🚀 Server has started at ${url} 🚀🚀🚀`);
})


