import React from 'react';
import '../styles/App.css';
import { ProductsList } from "./ProductsList";
import { CategoriesList } from "./CategoriesList";
// import { Product } from "./Product";
// import { AddCategory } from "./AddCategory";
import { SpecialtiesList } from "./SpecialtiesList";
// import { useUserProfiles } from "../hooks";
// import { Users } from "./Users";
import '../styles/App.css';
import { Router } from '@reach/router'
import Dashboard from '../pages/Dashboard';

const App = () => {
  let InicioMenuButton = () => (
    <Dashboard />
  )

  // const ProductsMenuButton = () => {
  //   const params = useParams()
  //   console.log('params: ', params)
  //   return (
  //     <div>
  //       <h1>Productos</h1>
  //       {/* <h1>Productos {params.id}</h1> */}
  //     </div>
  //   )
  // }

  const ProductsListMenuButton = () => {
    console.log('App.js - ProductsListMenuButton');
    return(
      <ProductsList />
    )
  }
  
  // const CategoriesMenuButton = () => (
  //   <div>
  //     <h1>Categorías</h1>
  //     <nav>
  //       <Link to="/">Inicio</Link> |{" "}
  //       <Link to="products">Productos</Link> |{" "}
  //       <Link to="categories">Categorias</Link> |{" "}
  //       <Link to="specialties">Especialidades</Link> 
  //     </nav>
  //   </div>
  // )

  const CategoriesListMenuButton = () => {
    return(
      <div>
        <p>Esto es la página CategoriesList</p>
        <CategoriesList />
      </div>
    )
  }

  // const SpecialtiesMenuButton = () => (
  //   <div>
  //     <h1>Especialidades</h1>
  //   </div>
  // )

  const SpecialtiesListMenuButton = () => {
    return(
      <div>
        <p>Esto es la página SpecialtiesList</p>
        <SpecialtiesList />
      </div>
    )
  }

  return(
    <div className="App">
      {/* <nav>
        <Link to="/">Inicio</Link> |{" "}
        <Link to="products">Productos</Link> |{" "}
        <Link to="products/123">Producto 123</Link> |{" "}
        <Link to="categories">Categorias</Link> |{" "}
        <Link to="specialties">Especialidades</Link> 
      </nav> */}
      <Router>
        <InicioMenuButton path="/" />
        {/* <ProductsMenuButton path="products/:productId" /> */}
        <ProductsListMenuButton path="products" />
        {/* <CategoriesMenuButton path="categories/:categorieId" /> */}
        <CategoriesListMenuButton path="categories" />
        {/* <SpecialtiesMenuButton path="specialties/:specialtiesId" /> */}
        <SpecialtiesListMenuButton path="specialties" />
      </Router>
    </div>
  )

}; 

export default App