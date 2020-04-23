// This is where GraphQL schema is.
// This is where you tell GraphQL how you’d like to structure your information.

const { gql } = require("apollo-server");

const typeDefs = gql `
  type User {
    fullName: String
    email: String!
    location: String
    age: String
    citizen: Boolean
  }

  type Query {
    users: [User]
  }
`

module.exports = typeDefs;