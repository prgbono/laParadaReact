import React from 'react'
import { Table } from 'antd';
import { productColumns } from '../utils/columns'

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
      pvp: product.pvp,
      stock: product.existencias,
      // TODO - completar query accordingly
      //minStock: product.minStock
    })
  })
  

  function onChange(pagination, filters, sorter, extra) {
    console.log('ProductsTable onChange params', pagination, filters, sorter, extra);
  }

  return(
    <Table columns={columns} dataSource={data} onChange={onChange} />
  )
}



export default ProductsTable