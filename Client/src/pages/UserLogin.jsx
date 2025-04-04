import React, { useState, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import BASEURL from '../confiq/BASEURL';
import { mycont } from "../UserContext";
import { auth, provider } from "../utils/firebase";
import { signInWithPopup } from "firebase/auth";

const UserLogin = () => {
  const [login, setLogin] = useState({});
  const navigate = useNavigate();
  const { btnstatus, setbtnstatus } = useContext(mycont);

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!login.email || !login.password) {
      toast.error("Please enter username and password");
    } else {
      const api = `${BASEURL}/user/login`;
      try {
        const response = await axios.post(api, login);
        toast.success(response.data.message);
        localStorage.setItem('token', response.data.token);
        setbtnstatus(true);
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } catch (error) {
        console.error(error);
        toast.error(error.response.data.message);
      }
    }
  };

  const googleLogin = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const user = response.user;
      const api = `${BASEURL}/user/googlelogin`;
      const resp = await axios.post(api, { name: user.displayName, email: user.email });
      localStorage.setItem("token", resp.data.token);
      toast.success("Login Successfully with Google");
      setbtnstatus(true);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      console.error(error);
      toast.error("Google login failed");
    }
  };

  return (
    <div className="user-login-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
      <div className="login-box" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.2)' }}>
        <h1 className="text-center" style={{ marginBottom: '20px' }}>User Login</h1>
        <form className="login-form" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div className="form-group">
            <label htmlFor="email" style={{ marginBottom: '10px' }}>Enter Username</label>
            <input type="email" id="email" name="email" placeholder="Enter Username" onChange={handleChange} style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <div className="form-group">
            <label htmlFor="password" style={{ marginBottom: '10px' }}>Enter Password</label>
            <input type="password" id="password" name="password" placeholder="Enter Password" onChange={handleChange} style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
          </div>
          <button type="submit" className="btn btn-primary" style={{ backgroundColor: '#4CAF50', color: '#fff', padding: '10px', borderRadius: '5px', border: 'none' }}>Login</button>
          <button type="button" className="btn btn-danger" style={{ backgroundColor: '#DB4437', color: '#fff', padding: '10px', borderRadius: '5px', border: 'none', marginTop: '10px' }} onClick={googleLogin}>
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" style={{ width: '20px', height: '20px' }} />
            Sign in with Google
          </button>
          <p style={{ marginTop: '10px', textAlign: 'center' }}>Don't have an account? <span style={{ cursor: 'pointer', textDecoration: 'underline', color: 'blue' }} onClick={() => navigate('/register')}>Signup</span></p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UserLogin;

