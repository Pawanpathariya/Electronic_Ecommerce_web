import React from 'react'
import BASEURL from '../confiq/BASEURL'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { increaseQuantity,decreaseQuantity } from '../redux/cartSlice';
const CardData = () => {
  const dispatch=useDispatch();
const product=useSelector(state=>state.addtocart.cart);

const [total, setTotal] = useState(0);

React.useEffect(() => {
  let totalprice=0;
  product.forEach((p) => {
    totalprice += p.quantity*p.price;
  });
  setTotal(totalprice);
}, [product]);

  return (
    <>
    <div className="main-container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {product.map((p) => (
            <tr key={p._id}>
              <td><img src={`${BASEURL}/${p.defaultimage}`} height="150px" width="150px" /></td>
              <td>{p.proname}</td>
              <td>{p.brand}</td>
              <td>{p.category}</td>
              <td>{p.description}</td>
              <td>{p.price} RS.</td>
              <td style={{display:'flex'}}>
                <Button variant="success" style={{marginRight:'10px'}} onClick={() => { dispatch(increaseQuantity(p.id)) }}> + </Button>
                { p.quantity }
                <Button variant="danger" style={{marginLeft:'10px'}} onClick={() => { dispatch(decreaseQuantity(p.id)) }}> - </Button>
                </td>
                <td>
                  {p.quantity*p.price}
                </td>
            </tr>
          ))}
          <tr></tr>
                <tr style={{marginTop:'10px'}}>
          <td colSpan={6} style={{textAlign:'right'}}><b>Total Amount :</b></td>
          <td colSpan={2}><b>{total} RS</b></td>
        </tr>
        </tbody>
      </Table>
    </div>
  </>
  )
}

export default CardData

