import React from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import { useState,useEffect } from 'react'
import BASEURL from '../confiq/BASEURL'
import { Button } from 'react-bootstrap';
import "react-toastify/dist/ReactToastify.css";
const ManageUsers = () => {
  const [user, setuser] = useState([]);

  const getOrder = async () => {
    try {
      let api=`${BASEURL}/admin/viewuser`;
      const response = await axios.get(api);
      setuser(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getOrder();
  },[])



  return (
   <>
   <h1 align="center">Welcome to Manage Users</h1>
       <Table striped>
         <thead>
           <tr>
         <th>User name</th>
         <th>Email</th>
         <th>Delete</th>
           </tr>
         </thead>
         <tbody>
           {user.map((key)=>(
             <tr key={key._id}>
           <td>{key.name}</td>
           <td>{key.email}</td>
           <td><Button variant="danger">Delete</Button></td>
             </tr>
           ))}
         </tbody>
       </Table>
   </>
  )
}

export default ManageUsers