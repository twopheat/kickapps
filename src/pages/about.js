import React, { Component } from 'react';
import '../App.css';

// import aboutpic from "../../src/img/coding.jpg";
// import divider from "../../src/img/dividervert.png";

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
         
          <div className="col-5-sm m-3 text-center ztop mb-4">
            <h5>We are a team of coders spanning the entire US. We have superior availabilty and a simple, effective process.</h5>
          </div>

      
        </div>
        <div id="aboutkey" className="card aboutcard round col-10-sm mb-5">
              <img className="aboutpic" src={aboutpic} alt="KICKapps Mission"></img>
            </div>
      </div>



    );
  }

}



export default About;

