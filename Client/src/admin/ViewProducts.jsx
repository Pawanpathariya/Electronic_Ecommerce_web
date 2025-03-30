import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import BASEURL from '../confiq/BASEURL'
import Card from 'react-bootstrap/Card';
const ViewProducts = () => {
  const [product, setProduct] = useState([]);
useEffect(()=>{
  loaddata();
},[])
const loaddata=async(req,res)=>{
  let api=`${BASEURL}/admin/getproduct`

try {
  let response=await axios.get(api);
  setProduct(response.data)
} catch (error) {
  console.log(error)
}
}

const ans=product.map((p)=>{
return(
  <Card className="product-card" style={{ width: '18rem' ,padding:"10px"}}>
  <Card.Img variant="top" src={`${BASEURL}/${p.images[0]}`} height="200px" width="200px" />
  <Card.Body>
    <Card.Title><b>Name : </b>{p.proname}</Card.Title>
    <Card.Text>
      <b>Brand : </b> {p.brand}
      <br/>
   <b>  Category : </b> {p.category}
      <br/>
    <b> Description : </b> {p.description}
      <br/>
      <b>Price : </b>{p.price} RS.
    </Card.Text>
  </Card.Body>
</Card>
)
})
  return (
    <>
    <div className="product-container">
    <h1 align="center" className="product-title"> Welcome to View Products Page!!</h1>
    <div className="product-display">
    {ans}
    </div>
    </div>
    </>
  )
}

export default ViewProducts

