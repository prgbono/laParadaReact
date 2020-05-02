import React from 'react'
import { useQuery } from 'react-apollo'
import { GET_PRODUCT } from '../Queries';


export const Product = (product) => {
  // TODO docId hardcodeado
  const { loading, error, data } = useQuery(GET_PRODUCT, {variables: { id: 'awhHSsD8AtuyBjWyIJ4m' }} )
  
  console.log('Component Product, product: ', product);
  console.log('Component Product, loading: ', loading);
  console.log('Component Product, error: ', error);
  console.log('Component Product, data: ', data);

  if (loading) return <div>Cargando producto...</div>
  if (error) return <div>Error cargando producto, `${error.message}`</div>

  console.log('Component PRoduct data retrieving, data: ', data);
  return (
    <div>
      <div>
        PRODUCT Component
        {data.product.nombre} - {data.product.especialidad} - {data.product.categoria} 
      </div>
    </div>
  )  
}

export default Product