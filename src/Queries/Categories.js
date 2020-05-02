import gql from 'graphql-tag'

export const GET_CATEGORIES = gql`
  query getCategories{
    getCategories {
      nombre
    }
  }
`

export const ADD_CATEGORY = gql`
  mutation addCategory (
    $nombre: String!
  ){
    addCategory(nombre: $nombre){
      id
    }
  }
`

export const UPDATE_CATEGORY = gql`
  mutation setCategory(
    $nombre: String,
    $id: String!
  ){
    setCategory(nombre: $nombre){
      id
      nombre
    }
  }
`
