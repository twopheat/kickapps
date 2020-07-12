import React, { Component } from 'react';
import '../App.css';

import bkg1 from "../../src/img/bkg1.jpg";


class Home extends Component {
  
  render() {

    return (

      <div className="container">
        <div className="row">
          <div className="col-sm">
          <img className="homepic" src={bkg1} alt="KICKapps"></img>
          </div>
        </div>
        
       

      

        
      </div>
    );
  }

}



export default Home;

