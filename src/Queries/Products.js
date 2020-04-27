import gql from 'graphql-tag'

export const GET_PRODUCTS = gql `
  {
    productos {
      nombre
      categoria
      especialidad
      precio
      pvp
      existencias
    }
  }
`

// export const GET_PRODUCTS = gql`
//   query getProducts(
//     $nombre: String!
//     $categoria: String!
//     $especialidad: String!
//     $precio: Int
//     $pvp: Int
//     $existencias: Int
//   ){
//     productos {
//     nombre
//     categoria
//     especialidad
//     precio
//     pvp
//     existencias
//     }
//   }
// `