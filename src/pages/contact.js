import React, { Component } from 'react';
import '../App.css';

import calipic from "../../src/img/cali.png";
import colopic from "../../src/img/colo.png";
import tennpic from "../../src/img/tenn.png";

class Contact extends Component {

  render() {

    return (
      <div className="appcontent">
      <div className="mt-5 mb-5 container appcontent">
        <div className="row">

        <h5 className="col-12 ptitle text-light">Contact Us</h5>
        <br></br>
        <h5 className="col-12 email">
          <a href="mailto:info@kickapps.com">info@kickapps.com</a>
        </h5>

        <br></br>
        <h4 className="col-12 phone">
          <a href="tel:951-956-6966">951.956.6966</a>
        </h4>
        </div>
        <br></br>
        <div className="row">
          <div className="col-sm">
            <img className="calipic" src={calipic} alt="cali"></img>
            <h4 className="riverside">riverside,ca</h4>
          </div>
          <br></br>
          <div className="col-sm">
            <img className="colopic" src={colopic} alt="colo"></img>
            <h4 className="denver">denver,co</h4>
          </div>
          <br></br>
          <div className="col-sm">
            <img className="tennpic" src={tennpic} alt="tenn"></img>
            <h4 className="nashville">nashville,tn</h4>
            <br></br>
          </div>
        </div>






      </div>
      </div>
    );
  }

}



export default Contact;

