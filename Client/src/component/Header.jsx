import React from 'react'
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { Link } from 'react-router-dom';
import "../style/Header.css"

const Header = () => {
  return (
    <div id="header">
      <div className="header-center">
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
          />
          <Link to="/search">
            <FaSearch className="search-icon-inside" size={20} color="black" />
          </Link>
        </div>
      </div>
      <div className="header-right">
        <Link to="/carddata">
          <FaShoppingCart size={20} color="black" />
          <span className="cart-count">0</span>
        </Link>
        <Link to="/admin">
          <GrUserAdmin className="space" size={20} color="black" />
        </Link>
      </div>
    </div>
  )
}

export default Header

