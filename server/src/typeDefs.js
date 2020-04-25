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

  type Producto {
    nombre: String!
    categoria: String!
    especialidad: String!
    existencias: Float
    precio: Float
    pvp: Float
  }

  type Especialidad {
    nombre: String!
  }

  type Categoria {
    nombre: String!
  }

  type Query {
    users: [User],
    categorias: [Categoria],
    especialidades: [Especialidad],
    productos: [Producto],
  }

  type Mutation {
    crearCategoria (nombre: String!): Categoria!
    crearEspecialidad (nombre: String!): Especialidad
  }
`

module.exports = typeDefs;