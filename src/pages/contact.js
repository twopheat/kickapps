import React, { Component } from 'react';
import '../App.css';



class Contact extends Component {
  
  render() {

    return (

      <div className="mt-5 container">
        
        <h5 className="ptitle text-dark">Contact Us</h5>
        <br></br>
        <div className="row">
          <div className="col-sm">
            <h4 className="riverside">riverside,ca</h4>
            </div>
            <br></br>
            <div className="col-sm">
            <h4 className="denver">denver,co</h4>
            </div>
            <br></br>
            <div className="col-sm">
            <h4 className="nashville">nashville,tn</h4>
            <br></br>
          </div>
        </div>
        <h5 className="email">info@kickapps.com</h5>
        <br></br>
        <h4 className="phone">951.956.6966</h4>


      

        
      </div>
    );
  }

}



export default Contact;

