import React, { Component } from 'react';
import '../App.css';

// import aboutpic from "../../src/img/coding.jpg";
import logoApic from "../../src/img/logo.png";
// import divider from "../../src/img/dividervert.png";
import gitbrad from "../../src/img/gitbrad.jpg";
import gitjustin from "../../src/img/gitjustin.jpg";
import gitderek from "../../src/img/gitderek.jpg";

class About extends Component {


  render() {

    return (

      <div className="mt-5 mb-5 container appcontent">
        <div id="textkey" className="row justify-content-center">

          <div className="col-sm-12 m-3 text-center ztop mb-4">
            <h5>Here at KICKapps we house a team of specialized programmers and business development professionals. Our streamlined build process and diverse skill-sets can help achieve your digital identity.</h5>
          </div>


        </div>
            <div className="col">
             <div className="row">
              <div className="col-sm-8 logobox mt-5 mb-5">
                <img className="homepic" src={logoApic} alt="KICKapps"></img>
              </div>

              
              </div>

              <div className='row picrow'>
                <div className="col-md mb-5">
                  <img className='avatar' title="Brad Johnston" alt="Brad Johnston" src={gitbrad}></img>
                  <h3 className="text-white">Brad Johnston</h3>
                </div>
                <div className="col-md mb-5">
                  <img className='avatar' title="Derek Minney" alt="Derek Minney" src={gitderek}></img>
                  <h3 className="text-white">Derek Minney</h3>
                </div>
                <div className="col-md">
                  <img className='avatar' title="Justin Moore" alt="Justin Moore" src={gitjustin}></img>
                  <h3 className="text-white">Justin Moore</h3>
                </div>
              </div>

        </div>

      </div>



    );
  }

}



export default About;

