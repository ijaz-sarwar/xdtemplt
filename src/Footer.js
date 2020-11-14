import React from "react";
import "./Footer.css";
import footer from "react-bootstrap";
function Footer() {
  return (
    <footer className="page-footer font-small footer ">
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-md-3 mx-auto">
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">About</h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!">Locations</a>
              </li>
              <li>
                <a href="#!">Frenchise With Us</a>
              </li>
              <li>
                <a href="#!">Partners</a>
              </li>
              <li>
                <a href="#!">About Us</a>
              </li>
              <li>
                <a href="#!">Make Fetch Happen!</a>
              </li>
            </ul>
          </div>

          <hr className="clearfix w-100 d-md-none" />

          <div className="col-md-3 mx-auto">
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
              Resources
            </h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!">Reviews</a>
              </li>
              <li>
                <a href="#!">Pet Resource Center</a>
              </li>
              <li>
                <a href="#!">Media Fact Sheet</a>
              </li>
              <li>
                <a href="#!">Blog </a>
              </li>
              <li>
                <a href="#!">News </a>
              </li>
            </ul>
          </div>

          <hr className="clearfix w-100 d-md-none" />

          <div className="col-md-3 mx-auto">
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
              {" "}
              Services
            </h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!">Gift Cards</a>
              </li>
              <li>
                <a href="#!">Services</a>
              </li>
              <li>
                <a href="#!">Frenchise LogIn</a>
              </li>
              <li>
                <a href="#!">Terms Of Use </a>
              </li>
              <li>
                <a href="#!">Privacy Policy </a>
              </li>
            </ul>
          </div>

          <hr className="clearfix w-100 d-md-none" />

          <div className="col-md-3 mx-auto">
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">
              NewsLetter
            </h5>

            <ul className="list-unstyled">
              <li>
                <a href="#!">
                  Sign Up to recieve the Fetch! <br />
                  Family NewsLetter
                </a>
              </li>
              <li>
                <input type="Email" placeholder="Email Adress" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-copyright text-center py-3">
        © 2020 Copyright:
        <a href="http://www.intelliscence.com/"> INTELLISCENCE</a>
      </div>
    </footer>
  );
}

export default Footer;
