import React from 'react';
import NavbarBrand from './NavbarBrand';
import NavbarMenu from './NavbarMenu';

const Navbar = props => (
  <nav className="navbar">
    <NavbarBrand>Brand</NavbarBrand>
    <NavbarMenu>{props.children}</NavbarMenu>
  </nav>
);

export default Navbar;
