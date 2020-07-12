import React from "react";
import "../App.css";
import Home from '../routes/home';
import About from '../routes/about';
import Contact from '../routes/contact';
import Portfolio from '../routes/portfolio';


import {
  Switch,
  Route
} from "react-router";



function Main () {
    return (
     
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/portfolio">
        <Portfolio />
      </Route>
    </Switch>
  
    );
  };

export default Main;