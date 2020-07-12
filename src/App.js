import React from 'react';
// import React, { Component } from "react";
import './App.css';
import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Core from './components/Main';
import Footer from './components/Footer';

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
           <div className="App-head">
           <Router>
             <Wrapper>
               <Header />
               <div id="maincontent">
                 <Core />
               </div>
               <Footer />
             </Wrapper>
           </Router>
           </div>
         </div>
  );
}

export default App;
