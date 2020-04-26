import React, { Component } from 'react'
import Product from './Product'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const GET_PRODUCTS = gql `
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

export class ProductsList extends Component {
  render () {
    // TODO traer los productos de FIrebase ??
    return (
      <Query query = {GET_PRODUCTS}>
        {({ loading, error, data}) => {
          if (loading) return <div>Cargando productos...</div>
          if (error) return <div>Error cargando productos</div>

          console.log('data received: ', data)
          const productsToRender = data.productos

          return (
            <div>
              {() => productsToRender.map(product => 
              <Product key={product.id} product = {product}/>)}
            </div>
          )
        }}
      </Query>
    )
  }
}

export default ProductsList