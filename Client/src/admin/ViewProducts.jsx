import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import BASEURL from '../confiq/BASEURL'
import Card from 'react-bootstrap/Card';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
const ViewProducts = () => {
  const [product, setProduct] = useState([]);
useEffect(()=>{
  loaddata();
},[])


const changeTrending=async(id)=>{
  let api=`${BASEURL}/admin/changetrending`;
  try {
    let response=await axios.post(api,{id});
    toast.success(response.data.message);
    loaddata();
  } catch (error) {
    toast.error(error.response.data.message)
  }
}


const deleteProduct=async(id)=>{
  let api1=`${BASEURL}/admin/deleteproduct`;
  try {
    let response=await axios.post(api1,{id});
    toast.success(response.data.message);
    loaddata();
  } catch (error) {
   toast.error(error.response.data.message)
  }
}
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
  <Card.Img variant="top" src={`${BASEURL}/${p.defaultimage}`} height="200px" width="200px" />
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
      <div >
     {p.trending === 'false' ? <p><button type="button" className="btn btn-primary" onClick={()=>{changeTrending(p._id)}}>Add to Trending</button>
      </p> : <p><button type="button" className="btn btn-primary"  onClick={()=>{changeTrending(p._id)}}>Remove From Trending</button>
      </p>}
      <button type="button" className="btn btn-danger"  onClick={()=>{deleteProduct(p._id)}}>Remove Product</button>
      </div>
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
    <ToastContainer />
    </>
  )
}

export default ViewProducts

