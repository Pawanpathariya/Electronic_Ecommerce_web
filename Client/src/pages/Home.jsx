import React from 'react'
import ban1 from "../images/sldr1.jpg";
import shop from "../images/shopbnr1.jpg";

import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Home = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src={ban1} width="100%" height="380" className="caro" />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={ban1} width="100%" height="380" className="caro" />
          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={ban1} width="100%" height="380" className="caro" />
          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="bg">
        <div className="main-container">
          <div className="main-container-box-1">
            <div className="main-box img1"></div>
            <h5>Laptop</h5>
          </div>
          <div className="main-container-box-1">
            <div className="main-box img2"></div>
            <h5>Mobile</h5>
          </div>
          <div className="main-container-box-1">
            <div className="main-box img3"></div>

            <h5>Computer</h5>
          </div>
        </div>
        <div className="Shopbnr1">
          <img
            src={shop}
            width="100%"
            height="300px"
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>
    </>
  )
}

export default Home
