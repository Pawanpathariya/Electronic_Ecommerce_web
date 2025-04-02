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
      }, 2000);
    } catch (error) {
      console.error(error);
      toast.error("Google login failed");
    }
  };

  return (
    <div className="user-login-container">
      <div className="login-box">
        <h1>User Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Enter Username</label>
          <input type="email" id="email" name="email" placeholder="Enter Username" onChange={handleChange} />
          <label htmlFor="password">Enter Password</label>
          <input type="password" id="password" name="password" placeholder="Enter Password" onChange={handleChange} />
          <button type="submit">Login</button>
          <button type="button" style={{ backgroundColor: "#DB4437", color: "white", borderRadius: "5px", padding: "10px", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginTop: "10px" }} onClick={googleLogin}>
            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google logo" style={{ width: "20px", height: "20px" }} />
            Sign in with Google
          </button>
          <p style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>Don't have an account? <span style={{ cursor: 'pointer', textDecoration: 'underline', color: 'blue' }} onClick={() => navigate('/register')}>Signup</span></p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default UserLogin;

