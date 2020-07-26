import React, { Component } from 'react';
import '../App.css';

import aboutpic from "../../src/img/coding.jpg";
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

      <div className="mt-5 mb-5 container appcontent">
        <div id="textkey" className="row justify-content-center">
         
          <div className="col-5-sm m-3 text-center ztop mb-4">
            <h5 className="text-white">Here at KICKapps we house a team of specialized programmers and business development professionals. Our streamlined build process and diverse skill-sets can help achieve your digital identity.</h5>
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

