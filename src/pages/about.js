import React, { Component } from 'react';
import '../App.css';

import aboutpic from "../../src/img/about.png";
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
        <div className="row justify-content-center">
          <div className="col-5-sm leftcol mb-4">
            <h5>We are a team of coders</h5><br></br><h5>spanning the entire US.</h5>
          </div>
          <div className="col-1 dividerbox">
              <img className="divider2" src={divider} alt="KICKapps"></img>
            </div>
            <br></br>
          <div className="col-5-sm rightcol mb-4">
              <h5>We have superior availabilty</h5><br></br><h5>and a simple, swift flow.</h5>
          </div>
            <div className="card round col-10 aboutcard shadow-sm mb-5">
              <img className="aboutpic" src={aboutpic} alt="KICKapps Mission"></img>
            </div>
        </div>
      </div>



    );
  }

}



export default About;

