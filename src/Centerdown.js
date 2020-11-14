import React from "react";
import "./Centerdown.css";
//import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Centerdown() {
  return (
    <Row>
      <Col ml="auto">
        <div className="centerdown1"></div>
      </Col>

      <Col className="centerdown">
        <p className="headingp">How its Work</p>
        <br />
        <br />
        <p className="headingpp">
          Becasue finding a good
          <br /> pet sitter shouldn't be
          <br /> a haseel.With Fetch ! it's as easy as....
        </p>
        <br />
        <p className="headingppp">Enter Your Location and Fetch Our Services</p>
        <input type="number" placeholder="Zip Code" />
      </Col>
    </Row>
  );
}

export default Centerdown;
