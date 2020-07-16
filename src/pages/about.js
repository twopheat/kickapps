import React, { Component } from 'react';
import '../App.css';

import aboutpic from "../../src/img/coding.jpg";
import divider from "../../src/img/dividervert.png";

class About extends Component {
  state = {
    trips: [],

    destination: "",
    startDate: "",
    endDate: ""
  }

  render() {

    return (

      <div className="mt-5 mb-5 container">
        <div id="textkey" className="row justify-content-center">
         
          <div className="col-5-sm leftcol ztop mb-4">
            <h5>We are a team of coders</h5><br></br><h5>spanning the entire US.</h5>
          </div>
          <div className="col-1 dividerbox ztop">
              <img className="divider2" src={divider} alt="KICKapps"></img>
            </div>
            <br></br>
          <div id="righttextkey" className="col-5-sm rightcol ztop mb-4">
              <h5>We have superior availabilty</h5><br></br><h5>and a simple, swift flow.</h5>
          </div>
      
        </div>
        <div id="aboutkey" className="card aboutcard round col-10 mb-5">
              <img className="aboutpic" src={aboutpic} alt="KICKapps Mission"></img>
            </div>
      </div>



    );
  }

}



export default About;

