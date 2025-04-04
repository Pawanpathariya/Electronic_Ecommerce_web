import React from 'react'
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { Link } from 'react-router-dom';
import "../style/Header.css"
import { useSelector } from 'react-redux';

const Header = () => {
  const product=useSelector(state=>state.addtocart.cart);
  const prolen=product.length;

  return (
    <div id="header">
      <div className="header-center">

      </div>
      <div className="header-right">
        
        <Link to="/carddata">
          <FaShoppingCart size={20} color="black" />
          <span className="cart-count">{prolen}</span>
        </Link>
        <Link to="/admin">
          <GrUserAdmin className="space" size={20} color="black" />
        </Link>
      </div>
    </div>
  )
}

export default Header

