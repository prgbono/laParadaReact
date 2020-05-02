import gql from 'graphql-tag'

export const GET_SPECIALTIES = gql`
  query getSpecialties{
    getSpecialties {
      nombre
    }
  }
`

export const ADD_SPECIALTY = gql`
  mutation addSpecialty($nombre: String!){
    addSpecialty(nombre: $nombre){
      nombre
    }
  }
`

export const SET_SPECIALTY = gql`
  mutation setSpecialty(
    $id: String!
    $nombre: String,
  ){
    setSpecialty(nombre: $nombre){
      nombre
    }
  }
`
