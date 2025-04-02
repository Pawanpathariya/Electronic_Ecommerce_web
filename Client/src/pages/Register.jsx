import React, { useState } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import '../style/register.css'; // Assuming you have a CSS file for styling
import BASEURL from '../confiq/BASEURL';
import axios from 'axios';
const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("All fields are required!");
    } else {
 let api=`${BASEURL}/user/register`    
      try {
        let response=await axios.post(api,{name,email,password});
        toast.success(response.data.message);
        setName('');
        setEmail('');
        setPassword('');
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  }

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <label>
          Name:
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Enter your name" 
          />
        </label>
        <label>
          Email:
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email" 
          />
        </label>
        <label>
          Password:
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter your password" 
          />
        </label>
        <button type="submit" style={{ marginTop: '1rem',width:"20%" }}>Register</button>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Register;

