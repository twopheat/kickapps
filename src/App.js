import React from 'react';
import logo from './logo.png';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Our site is being built right here!
        </p>
      </header>
    </div>
  );
}

export default App;
