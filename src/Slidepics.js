import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Slidepics.css";

function Slidepics() {
  return (
    <div className="slide hi-slide">
      <div className="hi-prev"></div>
      <div className="hi-next"></div>
      <div>
        <p className="p_owners">
          Here's what pet owners have to
          <br />
          say about Fetch! Pet care
        </p>
      </div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQaDisDBHBOMl5lzggfUCiW6YawD-tgtNU1Jg&usqp=CAU"
            alt="#dog1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.posh-pooches.co/wp-content/uploads/2016/12/dog-slider-1.jpg"
            alt="dog2"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://pbs.twimg.com/media/D9gr6hCWsAEdOR6.jpg"
            alt="dog3"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slidepics;
