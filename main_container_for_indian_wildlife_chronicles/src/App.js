import React from 'react';
import './App.css';
import MainContainer from './components/MainContainer';

/**
 * Root component of the Indian Wildlife Chronicles application
 */
function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div className="logo">
              <span className="logo-symbol">🐯</span> Indian Wildlife Chronicles
            </div>
            <div className="nav-links">
              <a href="#species">Species</a>
              <a href="#conservation">Conservation</a>
              <a href="#about">About</a>
              <button className="btn">Contribute</button>
            </div>
          </div>
        </div>
      </nav>

      <MainContainer />
    </div>
  );
}

export default App;