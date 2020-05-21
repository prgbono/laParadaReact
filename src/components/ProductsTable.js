import React from 'react'
import { Table } from 'antd';
import { productColumns } from '../utils'
import styled from '@emotion/styled'

export const ProductsTable = ({products}) => {

  const columns = productColumns.map(column => {
    return column
  })
  
  const data = products.map(product => {
    return ({
      // TODO key: ,
      name: product.nombre,
      category: product.categoria,
      specialty: product.especialidad,
      pvp: `${product.pvp}€`,
      stock: <Cell minStock={product.existencias - product.minStock <= 0}>{product.existencias}</Cell> 
    })
  })

  // TODO f(x) que se ejecuta al ordenar/modificar elementos de la tabla
  function onChange(pagination, filters, sorter, extra) {
    console.log('ProductsTable onChange params', pagination, filters, sorter, extra);
  }

  return(
    <Table columns={columns} dataSource={data} onChange={onChange} />
  )
}

export default ProductsTable

const Cell = styled.span`
  color: ${props => (props.minStock ? 'red' : 'green')};
`