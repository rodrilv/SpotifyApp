import { Home } from "./home"
import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Spotify App!</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Github Repo!</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      
      <Home />
      </div>
    </div>
  );
}

export default App;
