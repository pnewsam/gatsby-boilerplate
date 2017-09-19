import React from "react";
import Link from 'gatsby-link';

const Navbar = () => (
  <div className="navbar">
    <div className="navbar-brand">
      <div className="navbar-item">
        Brand
      </div>
      <div className="navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div className="navbar-menu">
      <div className="navbar-start">
      </div>
      <div className="navbar-end">
        <Link className="navbar-item" to="/" >Link</Link>
        <Link className="navbar-item" to="/" >Link</Link>
        <Link className="navbar-item" to="/" >Link</Link>
        <Link className="navbar-item" to="/" >Link</Link>
      </div>
    </div>
  </div>
)

export default Navbar;