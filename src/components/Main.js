import React from "react";
import "../App.css";
import Home from '../pages/home';
import About from '../pages/about';
import Contact from '../pages/contact';
import Portfolio from '../pages/portfolio';


import {
  Switch,
  Route
} from "react-router-dom";



function Core () {
    return (
     
      <Switch>
      <Route path="/" exact component={Home} />

      <Route path="/about" component={About} />

      <Route path="/portfolio" component={Portfolio} />

      <Route path="/contact" component={Contact} />
      </Switch>
  
    );
  };

export default Core;