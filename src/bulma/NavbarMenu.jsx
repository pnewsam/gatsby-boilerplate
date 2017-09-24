import React from 'react';

const NavbarMenu = props => (
  <div className="navbar-menu">
    <div className="navbar-start" />
    <div className="navbar-end">{props.children}</div>
  </div>
);

export default NavbarMenu;
