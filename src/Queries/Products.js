import gql from 'graphql-tag'

export const GET_PRODUCTS = gql`
  query getProducts {
    getProducts {
      nombre
      categoria
      especialidad
      precio
      pvp
      existencias
    }
  }
`


export const GET_PRODUCT = gql`
  query getProduct($nombre: String) {
    getProduct(nombre: $nombre) {
      nombre
      especialidad
      categoria
    }
  }
`


