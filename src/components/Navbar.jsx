import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">MY APP</div>
      <div className="list">
        <ul className="list-items">
          <li className="item">
            <Link to="/">Home</Link>
          </li>
          <li className="item">
            <Link to="/products">Products</Link>
          </li>
          <li className="item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="item">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
