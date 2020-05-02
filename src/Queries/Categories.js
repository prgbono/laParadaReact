import gql from 'graphql-tag'

export const GET_CATEGORIES = gql`
  query getCategories{
    getCategories {
      nombre
    }
  }
`

export const ADD_CATEGORY = gql`
  mutation addCategory($nombre: String!){
    addCategory(nombre: $nombre){
      nombre
    }
  }
`

export const SET_CATEGORY = gql`
  mutation setCategory(
    $id: String!
    $nombre: String,
  ){
    setCategory(nombre: $nombre){
      nombre
    }
  }
`
