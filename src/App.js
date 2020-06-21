import React from 'react';
import './App.css';

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import JoinUs from "./components/JoinUs/JoinUs";
import Features from "./components/Features/Features";
import Sale from "./components/Sale/Sale";
import Pricing from "./components/Pricing/Pricing";
import Gallery from "./components/Gallery/Gallery";
import Trainers from "./components/Trainers/Trainers";
import Summer from "./components/Summer/Summer";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <JoinUs />
      <Features />
      <Sale />
      <Pricing />
      <Gallery />
      <Trainers />
      <Summer />
      <Footer />
    </div >
  );
}

export default App;
