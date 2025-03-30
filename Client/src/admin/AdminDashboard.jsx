

import React, { useState } from "react";
import "../style/AdminDashboard.css";
import { Link, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const AdminDashboard = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const navigate=useNavigate();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const logout=()=>{
    localStorage.clear();
    navigate('/')
  }
  return (
    <>
      <div id="adminHeader">
        <button id="hamburgerMenu" onClick={toggleMenu} >
          ☰
        </button>
        <h4 >Welcome to Admin Dashboard</h4>
      </div>
      <div id="adminContainer">
        {menuOpen && (
          <div id="adminMenu">
            <h4 className="menuTitle">Admin Menu</h4>
            <Link to="adminhome" className="menuLink">Home</Link>
            <Link to="insertpro" className="menuLink">Insert Product</Link>
            <Link to="viewpro" className="menuLink">View Products</Link>
            <Link to="manusers" className="menuLink">Manage Users</Link>
            <Link to="orders" className="menuLink">View Orders</Link>
            <button type="button" className="btn btn-danger" onClick={logout}>Logout</button>
          </div>
        )}
        <div id="adminContent">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;

