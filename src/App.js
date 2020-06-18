import React from 'react';
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Joinus from "./components/JoinUs/JoinUs";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Joinus />
    </div >
  );
}

export default App;
