import React from 'react'
import { useEffect,useContext } from 'react'
import { mycont } from '../UserContext'
import { useNavigate } from 'react-router-dom'
const Checkout = () => {
  const {btnstatus}=useContext(mycont);
const navigate = useNavigate();
  useEffect(() => {
if(!btnstatus){
    navigate('/');
}
  },[])
  return (
    <>
        <div style={{ backgroundColor: '#212529', textAlign: 'center', color: 'white', marginBottom: '20px' }}>
        <h1>Checkout</h1>
      </div>  
    </>
  )
}

export default Checkout