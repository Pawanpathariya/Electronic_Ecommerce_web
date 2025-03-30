import React from 'react'
import { useState ,useEffect} from 'react'
import axios from 'axios'
import BASEURL from "../confiq/BASEURL"
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {

useEffect(() => {
  const user=localStorage.getItem('user');
  if(user=="admin"){
    navigate('/admindashboard')
  }
}, [])


  const [login, setLogin] = useState({})
 const navigate=useNavigate();
const handleChange=(e)=>{
  setLogin({...login,[e.target.name]:e.target.value})
}

const handleSubmit=async(e)=>{
  if(!login.username || !login.password){
    toast.error("Please enter username and password")
  }
else{
  let api=`${BASEURL}/admin/login`
try {
 let response=await axios.post(api,login)
 toast.success(response.data.message)
localStorage.setItem('user',response.data.user)
setTimeout(() => {
  navigate('/admindashboard') 
},1000)
} catch (error) {
  toast.error(error.response.data.message)
}
}
}


  return (
    <>
    <div id='adminlogin'>
    <div id='log'>
      <h1>Admin Login</h1>
<label>Enter Username</label>
<input type="text" name="username" placeholder="Enter Username" onChange={handleChange}/>
<label>Enter Password</label>
<input type="password" name="password" placeholder="Enter password" onChange={handleChange}/>
<button onClick={handleSubmit}>Login</button>
    </div>
    </div>
    <ToastContainer/>
    </>
  )
}

export default Login