import logo from './logo.svg';
import React from "react";
import Pokedex from "./Pokedex";
import cardDetails from "./carddetails";
import './App.css';

function App() {
  return (
    <Pokedex cardDetails={cardDetails}/>
  );
}

export default App;
