import React, { Component } from 'react'

class Product extends Component {
  render () {
    return (
      <div>
        <div>
          PRODUCTS LIST
          {this.props.product.nombre} - {this.props.product.especialidad} - {this.props.product.categoria} 
        </div>
      </div>
    )
  }
}

export default Product