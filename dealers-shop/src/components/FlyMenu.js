import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './FltMenu.css';// Make sure your CSS file is properly linked
import { FaShoppingCart, FaUserPlus, FaUserCheck, FaHome } from 'react-icons/fa';

const FlyMenu = () => {
  return (
    <div className="fly-menu">
      <nav className="navbar">
        <Link to="/" className="nav-link">
          <FaHome />
          <p>Products</p>
        </Link>
        <Link to="/components/signUp" className="nav-link">
          <FaUserPlus />
          <p>Sign Up</p>
        </Link>
        <Link to="/components/Login" className="nav-link">
          <FaUserCheck />
          <p>Login</p>
        </Link>
        <Link to="/cart" className="nav-link">
          <FaShoppingCart />
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default FlyMenu;