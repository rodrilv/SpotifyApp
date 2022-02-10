import { Home } from "./home"
import { Navbar } from "./components/Navbar"
import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="container">
      <Navbar />
      <Home />
      </div>
    </div>
  );
}

export default App;
