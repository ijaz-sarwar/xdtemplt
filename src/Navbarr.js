import React from "react";
import "./Navbar.css";
import { Navbar, Nav } from "react-bootstrap";

function Navbarr() {
  return (
    <div className="header">
      <Navbar variant="dark" collapseOnSelect expand="lg">
        <Navbar.Brand href="#home">
          <img className="img" src="/img/headerlogo.jpg" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto ">
            <Nav.Link
              className=" fontsize"
              href="https://peekaboo.guru/lahore/branches/4323/first-care-pets-clinic/13161/johar-town-lahore-branch"
            >
              Location
            </Nav.Link>
            <Nav.Link
              className=" fontsize"
              href="https://blog.feedspot.com/dog_blogs/"
            >
              Blog
            </Nav.Link>
            <Nav.Link
              className=" fontsize"
              href="https://services.petsmart.com/"
            >
              Services
            </Nav.Link>
            <Nav.Link
              className=" fontsize"
              href="https://www.lifehack.org/about"
            >
              About Us
            </Nav.Link>
            <Nav.Link
              className=" fontsize"
              href="https://www.franchisechatter.com/2018/03/17/the-10-best-pet-franchises-of-2018/"
            >
              Franchise With Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navbarr;
