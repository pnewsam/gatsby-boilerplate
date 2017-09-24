import React from 'react';
import Link from 'gatsby-link';
import NavbarBrand from '../bulma/NavbarBrand';
import NavbarMenu from '../bulma/NavbarMenu';

const Navbar = () => (
  <div className="navbar">
    <NavbarBrand>Brand</NavbarBrand>
    <NavbarMenu>
      <Link className="navbar-item" to="/">
        Link
      </Link>
      <Link className="navbar-item" to="/">
        Link
      </Link>
      <Link className="navbar-item" to="/">
        Link
      </Link>
      <Link className="navbar-item" to="/">
        Link
      </Link>
    </NavbarMenu>
  </div>
);

export default Navbar;
