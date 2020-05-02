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

  type Product {
    nombre: String!
    categoria: String!
    especialidad: String!
    existencias: Float
    precio: Float
    pvp: Float
  }

  type Specialty {
    nombre: String!
  }

  type Category {
    nombre: String!
    id: ID
  }

  type Query {
    getUsers: [User],
    getCategories: [Category],
    getSpecialties: [Specialty],
    getProducts: [Product],
    getProduct(id: ID!): Product,
  }

  type Mutation {
    addCategory (nombre: String!): Category!,
    addSpecialty (nombre: String!): Specialty,

    setCategory (nombre: String!): Category!,
    setSpecialty (nombre: String!): Specialty!,
    
  }
`

module.exports = typeDefs;