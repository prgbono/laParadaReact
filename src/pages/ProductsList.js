import React from 'react'
import Product from '../components/Product'
import { useQuery } from 'react-apollo'
import { GET_PRODUCTS } from '../Queries'
import { ProductsTable } from '../components/ProductsTable'

export const ProductsList = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <div>Cargando productos...</div>
  if (error) return <div>Error cargando productos, `${error.message}`</div>
  const productsToRender = data.getProducts;
  console.log('ProductsList: ',productsToRender);

  return(
    <>
    <ProductsTable />
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



