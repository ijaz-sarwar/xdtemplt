import React from "react";
import "./Center.css";
//import { Container } from "react-bootstrap";

function Center() {
  const BC = {
    backgroundImage: "url(/img/middle.jpg)",
  };
  return (
    <div className="center" style={BC}>
      <div className="container">
        <div className="row">
          <div className="col-sm-4 heading">
            <h1>Our Services</h1>
            <br />
            <p>
              National Brand With a Local Feel.
              <br />
              Experience The Fetch! Difference
            </p>
            <br />
            <p className="data">Enter Your Location And Fetch Your Services</p>
            <br />
            <input type="number" placeholder="Zip Code" />
            <hr className="d-sm-none" />
          </div>
          <div className="col-sm-8">
            <div className="image">
              <img src="/img2/dogwalking.jpg" alt="img" />
              <img src="/img2/petsiting.jpg" alt="img2" />
              <br />
              <img src="/img2/overnightcare.jpg" alt="img3" />
              <img src="/img2/otherservices.jpg" alt="img4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Center;
