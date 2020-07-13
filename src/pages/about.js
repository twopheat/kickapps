import React, { Component } from 'react';
import '../App.css';

import aboutpic from "../../src/img/about.png";


class About extends Component {
  state = {
    trips: [],

    destination: "",
    startDate: "",
    endDate: ""
  }

  render() {

    return (

      <div className="mt-5">
        <div className="row justify-content-center mt-5">
          <div className="col-5-sm aboutbox">
            <h5>We are a team of coders spanning the entire US.</h5><br></br> <h5>We have superior availabilty and a simple, swift flow.</h5><br></br>
            <div className="card round aboutcard shadow-sm ">

              <img className="aboutpic" src={aboutpic} alt="KICKapps Mission"></img>
            </div>
          </div>
        </div>



      </div>
    );
  }

}



export default About;

