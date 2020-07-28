import React, { Component } from 'react';
import '../App.css';

import logo from "../../src/img/logo1inv.png";
import nodepic from "../../src/img/node.png";
import expresspic from "../../src/img/express.png";
import reactpic from "../../src/img/react.png";
import mysqlpic from "../../src/img/mysql.png";
import mongopic from "../../src/img/mongo.png";


class Home extends Component {

  render() {

    return (
      <div className="appcontent">
        <div className="container appcontent">
          <div className="row">

            <div className="col-sm-9 logobox mt-5">
              <img className="homepic" src={logo} alt="KICKapps"></img>
            </div>

            <div className="col-sm-3 order-last sloganbox mt-5">
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
          <div className="row justify-content-center mt-5 mb-5">
            <div className="col-5-sm toolsbox1">
              <div id="nodekey" className="card round nodecard">
                <img id="nodepickey" className="nodepic" src={nodepic} alt="Node.js"></img>
              </div>
            </div>
            {/* <div className="col-1-sm separater ml-2 mr-2">

          </div> */}
            <div className="col-7-sm toolsbox2">
              <div className="row justify-content-center">
                <div className="col-5-sm align-middle">
                  <div id="expresskey" className="card round expresscard m-2 mt-5">
                    <img id="expresspickey" className="expresspic" src={expresspic} alt="Express.js"></img>
                  </div>
                </div>

                <div className="col-5-sm">
                  <div id="reactkey" className="card round reactcard  mt-3">
                    <img id="reactpickey" className="reactpic" src={reactpic} alt="React.js"></img>
                  </div>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-5-sm">
                  <div id="mysqlkey" className="card round mysqlcard m-2">
                    <img id="mysqlpickey" className="mysqlpic" src={mysqlpic} alt="mySQL"></img>
                  </div>
                </div>

                <div className="col-5-sm">
                  <div id="mongokey" className="card round mongocard mt-3">
                    <img id="mongopickey" className="mongopic" src={mongopic} alt="MongoDB"></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-5 mb-5">
            <div className="col-5-sm">
              <quote id="quotekey" className="text-white">"We are constantly learning and perfecting new libraries, frameworks and technologies." -Justin Moore | Co-founder</quote>
            </div>
          </div>
        </div>
      </div>
    );
  }

}



export default Home;

