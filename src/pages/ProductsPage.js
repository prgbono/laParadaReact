import React from 'react'
import { useQuery } from 'react-apollo'
import { GET_PRODUCTS } from '../Queries'
import { ProductsTable } from '../components/ProductsTable'

export const ProductsPage = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <div>Cargando productos...</div>
  if (error) return <div>Error cargando productos, `${error.message}`</div>
  const products = data.getProducts;

  return(
    <>
      <ProductsTable products = {products}/>
    </>
  )
}




