import React from 'react';
// import logo from '../logo.svg';
import '../styles/App.css';


import { useUserProfiles } from "../hooks";
import { Users } from "./Users";


export const App = () => (
  <div className="App">
    <header className="App-header">
      <p>Hello there!!</p>
      <Users />
    </header>
  </div>
); 

export default App