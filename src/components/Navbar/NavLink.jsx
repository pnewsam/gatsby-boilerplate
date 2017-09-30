import React from 'react';
import Link from 'gatsby-link';

const NavLink = props => (
  <Link
    to={props.to}
    className={props.className || 'navbar-item'}
    onClick={props.handleClick}
  >
    {props.children}
  </Link>
);

export default NavLink;
