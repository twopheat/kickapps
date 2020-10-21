import React, { Component } from 'react';
import '../App.css';

import aboutpic from "../../src/img/coding.jpg";
import logoApic from "../../src/img/octopimplogo.png";
// import divider from "../../src/img/dividervert.png";

class About extends Component {


  render() {

    return (

      <div className="mt-5 mb-5 container appcontent">
        <div id="textkey" className="row justify-content-center">

          <div className="col-5-sm m-3 text-center ztop mb-4">
            <h5>Here at KICKapps we house a team of specialized programmers and business development professionals. Our streamlined build process and diverse skill-sets can help achieve your digital identity.</h5>
          </div>
        


        <div className="col-sm-12 sloganbox mt-5">
              <div className="row digitalkey">
                <span className="firstletter col-2">D</span><span className="slogan col-8">igitally</span>
              </div>
              <div className="row distkey">
                <span className="firstletter col-2">D</span><span className="slogan col-8">istinguished</span>
              </div>
              <div className="row developkey">
                <span className="firstletter col-2">D</span><span className="slogan col-8">evelopment</span>
              </div>
            </div>
      </div>
      </div>



    );
  }

}



export default About;

