import React from 'react'
import Product from './Product'
import { useQuery } from 'react-apollo'
import { GET_PRODUCTS } from '../Queries'


export function ProductsList(){
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <div>Cargando productos...</div>
  if (error) return <div>Error cargando productos, `${error.message}`</div>
  const productsToRender = data.productos;
  console.log('ProductList : ',productsToRender);

  return (
    <div>
      {() => productsToRender.map(product => 
      <Product key={product.id} product = {product}/>)} 
    </div>
  )
}