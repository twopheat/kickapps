import React, { Component } from 'react';
import '../App.css';
import '../parallax.css';

import agtpic from '../img/agtbkg.jpg';
import kickappslogo from '../img/logo.png';
import octopimplogo from '../img/octopimplogo.png';
import windowpic from '../img/window.png';
import wallpic from '../img/deepbkgwall.jpg';



class Portfolio extends Component {

  render() {
    
    return (

      <div>
            <div className="parallax">
              <div id="group1" className="parallax__group">
                <div className="parallax__layer parallax__layer--base">
                  <div className="title text-white">just a few of our past projects<br></br>ꜜ</div>
                </div>
              </div>
              <div id="group2" className="parallax__group row">
                <div className="parallax__layer parallax__layer--base col col-12-sm">
                  <div className="shadow-lg pl-5"><div className="col-sm-4 sloganbox mt-5">
                <div className="row digitalkey">
                  <span className="firstletter col-2">D</span><span className="slogan col-8">igitally</span>
                </div>
                <div className="row distkey">
                  <span className="firstletter col-2">D</span><span className="slogan col-8">istinguished</span>
                </div>
                <div className="row developkey">
                  <span className="firstletter col-2">D</span><span className="slogan col-8">evelopment</span>
                </div>
                <br></br>
                <br></br>
              </div>
              </div>
                </div>
                <div className="parallax__layer parallax__layer--back">
                  <div className="title"><img alt='' className="windowpic" src={windowpic}></img></div>
                </div>
              </div>
              <div id="group3" className="parallax__group">
                <div className="parallax__layer parallax__layer--fore">
                <div className="title black-text card shadow-lg"><b>Any Given T-Shirt Lets friends "soft-bet" on NFL outcomes by buying the opposing team t-shirt and wagering it on the outcome of the game.</b></div>
                </div>
                <div className="parallax__layer parallax__layer--base whitebkg">
                  <div className="title"><img alt='' className="parallaxpic" src={agtpic}></img></div>
                </div>
              </div>
              <div id="group4" className="parallax__group">
                <div className="parallax__layer parallax__layer--base">
                  <div className="title">Base Layer 4</div>
                </div>
                <div className="parallax__layer parallax__layer--back">
                  <div className="title">Background Layer 2</div>
                </div>
                <div className="parallax__layer parallax__layer--deep">
                  <div className="title"><img alt='' className="wallpic" src={wallpic}></img></div>
                </div>
              </div>
              <div id="group5" className="parallax__group">
                <div className="parallax__layer parallax__layer--fore row">
                  <div className="col col-12-sm title"><img alt='' className="octopimpsmall right" src={octopimplogo}></img></div>
                </div>
                <div className="parallax__layer parallax__layer--base">
                  <div className="title">Base Layer 5</div>
                </div>
              </div>
              <div id="group6" className="parallax__group">
                <div className="parallax__layer parallax__layer--back">
                  <div className="title">Background Layer 3</div>
                </div>
                <div className="parallax__layer parallax__layer--base">
                  <div className="title"><img alt='' className="kickappslogo" src={kickappslogo}></img></div>
                </div>
              </div>
              <div id="group7" className="parallax__group">
                <div className="parallax__layer parallax__layer--base">
                  <div className="title">Base Layer 7</div>
                </div>

          </div>
          {/* <div className="debug">
            <label>
              Debug
          <select value={this.state.value} onChange={this.handleChange}>
                <option value="on">On</option>
                <option value="off">Off</option>
              </select>
            </label>
          </div> */}
        </div>
      </div>
    )
  }

}



export default Portfolio;

