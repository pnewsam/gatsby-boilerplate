import React from 'react';
import NavbarBurger from './NavbarBurger';

const NavbarBrand = props => (
  <div className="navbar-brand">
    <div className="navbar-item">{props.children}</div>
    <NavbarBurger />
  </div>
);

export default NavbarBrand;
