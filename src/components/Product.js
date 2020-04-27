import React from 'react'

const Product = () => {
  console.log('Product Component: ',this.props)
  return (
    <div>
      <div>
        PRODUCTS LIST Component
        {this.props.product.nombre} - {this.props.product.especialidad} - {this.props.product.categoria} 
      </div>
    </div>
  )  
}

export default Product