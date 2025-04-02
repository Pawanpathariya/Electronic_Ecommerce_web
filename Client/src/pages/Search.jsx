import React, { useState } from 'react'
import BASEURL from '../confiq/BASEURL'
import axios from 'axios'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { add } from '../redux/cartSlice';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState({
    proname: '',
    category: ''
  })
const [results, setResults] = useState([]);
  const handleSearch = (e) => {
    setSearch({ ...search, [e.target.name]: e.target.value })
  }

  const categories = ['mobile', 'laptop', 'computer']

const handlesubmit=async(e)=>{
  e.preventDefault();
  if(!search.proname && !search.category){
    toast.error("Please enter product name or category");
  }
  else{
  let api=`${BASEURL}/product/searchproduct`;
  try {
    let response=await axios.post(api,search);
    setResults(response.data);
    toast.success("Product found");
  } catch (error) {
    toast.error(error.response.data.message)
  }
}
}

  const ans = results.map((p) => (
    <Col key={p._id} xs={12} md={4} lg={3} className="mb-4">
      <Card className="h-100">
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
    <div className="search-container" style={{width:"300px" ,margin:"auto",marginTop:"20px",marginBottom:"20px",padding:"20px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
      <h2>Search</h2>
      <form>
        <div className="form-group">
          <label>Product Name</label>
          <input type="text" name="proname" value={search.proname} onChange={handleSearch} className="form-control" />
        </div>
        <div className="form-group">
          <label>Category</label>
          <select name="category" value={search.category} onChange={handleSearch} className="form-control">
            <option value="">Select</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary" style={{marginTop:"10px"}} onClick={handlesubmit}>Search</button>
      </form>
    </div>

<div className="search-results">
<Container fluid>
        <Row>
          {ans}
        </Row>
      </Container>
</div>
<ToastContainer/>
    </>
  )
}

export default Search
