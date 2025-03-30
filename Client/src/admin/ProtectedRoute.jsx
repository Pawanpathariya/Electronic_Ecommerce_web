import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const ProtectedRoute = ({Component}) => {
    const navigate=useNavigate();
useEffect(()=>{
    const user=localStorage.getItem('user');
    if(!user){
     navigate('/')
    }
    if(user=="admin"){
        navigate('/admindashboard')
    }
  else{
    navigate('/')
  }

},[])
  return (
    <>
    <Component/>
    </>
  )
}

export default ProtectedRoute