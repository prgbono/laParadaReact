import React, { Component } from 'react';
// import logo from '../logo.svg';
import '../styles/App.css';
import { ProductsList } from "./ProductsList";
import { CategoriesList } from "./CategoriesList";
import { Product } from "./Product";

// import { useUserProfiles } from "../hooks";
// import { Users } from "./Users";

// export const App = () => (
//   <div className="App">
//     <header className="App-header">
//       <p>Hello there!!</p>
//       <Users />
//       <ProductsList />
//     </header>
//   </div>
// ); 

// export default App

class App extends Component {
  render() {
    return ( 
    <>
      <CategoriesList />
      <ProductsList />
      {/* <Product /> */}
    </>  
    )
  }
}

export default App