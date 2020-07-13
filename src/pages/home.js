import React, { Component } from 'react';
import '../App.css';

import logo from "../../src/img/logo.png";
import divider from "../../src/img/dividervert.png";
import nodepic from "../../src/img/node.png";
import expresspic from "../../src/img/express.png";
import reactpic from "../../src/img/react.png";
import mysqlpic from "../../src/img/mysql.png";
import mongopic from "../../src/img/mongo.png";


class Home extends Component {

  render() {

    return (

      <div className="container">
        <div className="row">

          <div className="col-4-sm sloganbox">
            <div className="row">
              <div className="firstletter">D</div><div className="slogan">igitally</div>
            </div>
            <div className="row">
              <div className="firstletter">D</div><div className="slogan">istinguished</div>
            </div>
            <div className="row">
              <div className="firstletter">D</div><div className="slogan">evelopment</div>
            </div>
          </div>
          <div className="col-1 dividerbox align-middle">
            <img className="homepic divider" src={divider} alt="KICKapps"></img>
          </div>
          <div className="col-7 logobox align-middle">
            <img className="homepic" src={logo} alt="KICKapps"></img>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-5-sm toolsbox1">
            <div className="card round shadow-sm ">
              <img className="nodepic" src={nodepic} alt="Node.js"></img>
            </div>
          </div>
          <div className="col-1-sm separater ml-2 mr-2">

          </div>
          <div className="col-7-sm toolsbox2">
            <div className="row justify-content-center">
              <div className="col-5-sm align-middle">
                <div className="card round shadow-sm m-2 mt-5">
                  <img className="expresspic" src={expresspic} alt="Express.js"></img>
                </div>
              </div>

              <div className="col-5-sm">
                <div className="card round shadow-sm mt-3">
                  <img className="reactpic" src={reactpic} alt="React.js"></img>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-5-sm">
                <div className="card round shadow-sm m-2">
                  <img className="mysqlpic" src={mysqlpic} alt="mySQL"></img>
                </div>
              </div>

              <div className="col-5-sm">
                <div className="card round shadow-sm mt-3">
                  <img className="mongopic" src={mongopic} alt="MongoDB"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}



export default Home;

