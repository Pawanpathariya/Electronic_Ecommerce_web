import React from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import { useState,useEffect } from 'react'
import BASEURL from '../confiq/BASEURL'
import "react-toastify/dist/ReactToastify.css";
const ViewOrders = () => {
  const [order, setOrder] = useState([]);

  const getOrder = async () => {
    try {
      let api=`${BASEURL}/admin/vieworder`;
      const response = await axios.get(api);
      setOrder(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getOrder();
  },[])
  return (
    <>
    <h1 align="center">Welcome to View Orders</h1>
    <Table striped>
      <thead>
        <tr>
          <th>Coustomer name</th>
          <th>Email</th>
          <th>Products</th>
          <th>Total amount</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {order.map((key)=>(
          <tr key={key._id}>
            <td>{key.name}</td>
            <td>{key.email}</td>
            <td>{key.productname}</td>
            <td>{key.totalamount}</td>
            <td>{key.Date}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    </> 
  )
}

export default ViewOrders
