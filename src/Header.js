import React from "react";
import Navbarr from "./Navbarr";
import "./Header.css";

function Header() {
  const BG = {
    backgroundImage: "url(/img/header1.jpg)",
  };
  return (
    <div className="header" style={BG}>
      <Navbarr />
      <div className="headdata">
        <h1>We Get Pet Care!</h1>
        <br />
        <p>
          For over 17 Years, Fetch! Pet Care has been a trusted partner in
          keeping pets healthy and happy!
        </p>
        <div className="w-100 d-flex header_p">
          <button>Schedule Servic</button>
          <p>Or Call 866.380.2468</p>
        </div>
        <div className="logo">
          <img src="/img/centerdog.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
