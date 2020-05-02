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
  // No trae el id como field

  return (
    <div>
      {() => productsToRender.map(product => 
      <Product key={product.id} product = {product}/>)} 
    </div>
  )
}