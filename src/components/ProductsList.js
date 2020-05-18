import React from 'react'
import Product from './Product'
import { useQuery } from 'react-apollo'
import { GET_PRODUCTS } from '../Queries'

export const ProductsList = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <div>Cargando productos...</div>
  if (error) return <div>Error cargando productos, `${error.message}`</div>
  const productsToRender = data.getProducts;
  console.log('ProductsList: ',productsToRender);

  return(
    <>
    {productsToRender.map(product => {
      return(
        <Product
          key={product}
          product = {product}
        >
        </Product>
      )
    })}
    </>
  )
}



