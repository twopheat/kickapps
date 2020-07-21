import React from "react";
import logo from "../../src/logo.png";
import "../App.css";

function Nav() {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-kick shadow-sm">
  <img src={logo} className="Applogo ml-3" alt="logo" href="#"/>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto1">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/about">About</a>
      </li>
      {/* <li className="nav-item">
        <a className="nav-link" href="/portfolio">Portfolio</a>
      </li> */}
      <li className="nav-item">
        <a className="nav-link" href="/contact">Contact</a>
      </li>
    </ul>
  </div>
</nav>

);
}
export default Nav;
