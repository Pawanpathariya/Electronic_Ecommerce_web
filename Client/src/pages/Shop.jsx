import React from 'react';
import BASEURL from '../confiq/BASEURL';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { add } from '../redux/cartSlice';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Shop = () => {
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTrendingProducts = async () => {
      const api = `${BASEURL}/product/allproducts`;
      try {
        const response = await axios.get(api);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrendingProducts();
  }, []);

  const ans = product.map((p) => (
    <Col key={p._id} xs={12} md={4} lg={3} className="mb-4">
      <Card className="h-100" style={{ padding: '10px' }}>
        <Card.Img variant="top" src={`${BASEURL}/${p.defaultimage}`} height="200px" width="200px" />
        <Card.Body>
          <Card.Title className="text-primary"><b>Name: </b>{p.proname}</Card.Title>
          <Card.Text>
            <b>Brand: </b> {p.brand}
            <br />
            <b>Category: </b> {p.category}
            <br />
            <b>Description: </b> {p.description}
            <br />
            <b>Price: </b>{p.price} RS.
          </Card.Text>
          <Button variant="primary" className="cart-btn" onClick={() => dispatch(add({ id: p._id, proname: p.proname, price: p.price, defaultimage: p.defaultimage, quantity: 1, brand: p.brand, description: p.description, category: p.category }))}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  ));

  return (
    <>
      <div style={{ backgroundColor: '#212529', textAlign: 'center', color: 'white', marginBottom: '20px' }}>
        <h1>Our Products</h1>
      </div>      <Container>
        <Row>
          {ans}
        </Row>
      </Container>
    </>
  );
}

export default Shop;

