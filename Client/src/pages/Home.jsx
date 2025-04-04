import React, { useState, useEffect } from 'react';
import ban2 from "../images/banner.jpg";
import shop from "../images/shopbnr1.jpg";

import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import BASEURL from '../confiq/BASEURL';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { add } from '../redux/cartSlice';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTrendingProducts = async () => {
      const api = `${BASEURL}/product/trendingproduct`;
      try {
        const response = await axios.get(api);
        setTrending(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrendingProducts();
  }, []);

  const trendingProducts = trending.map((p) => (
    <Card className="product-card" style={{ width: '18rem', padding: "10px" }} key={p._id}>
      <Card.Img variant="top" src={`${BASEURL}/${p.defaultimage}`} height="200px" width="200px" />
      <Card.Body>
        <Card.Title><b>Name : </b>{p.proname}</Card.Title>
        <Card.Text>
          <b>Brand : </b> {p.brand}
          <br />
          <b>Category : </b> {p.category}
          <br />
          <b>Description : </b> {p.description}
          <br />
          <b>Price : </b>{p.price} RS.
          <Button variant="primary" className="cart-btn" onClick={() => dispatch(add({ id: p._id, proname: p.proname, price: p.price, defaultimage: p.defaultimage , quantity: 1,brand:p.brand,description:p.description,category:p.category}))}>Add to Cart</Button>
        </Card.Text>
      </Card.Body>
    </Card>
  ));

  return (
    <>
      <Carousel>
        {[...Array(3)].map((_, index) => (
          <Carousel.Item key={index}>
            <img src={ban2} width="100%" height="380" className="caro" alt={`Slide ${index + 1}`} />
            <Carousel.Caption>
              {/* Placeholder for captions */}
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="bg">
      <div style={{ backgroundColor: '#212529', textAlign: 'center', color: 'white', marginBottom: '20px',padding:"10px" }}>
        <h1>Trending Products</h1>
      </div>         <div className="main-container">
          {trendingProducts}
        </div>
        <div className="Shopbnr1">
          <img
            src={shop}
            width="100%"
            height="300px"
            style={{ borderRadius: "10px" }}
            alt="Shop Banner"
          />
        </div>
      </div>
    </>
  );
}

export default Home;

