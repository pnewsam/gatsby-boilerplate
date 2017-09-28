import React from 'react';
import Burger from './Burger';
import Link from 'gatsby-link';

const Brand = props => (
  <div className="navbar-brand">
    <div className="navbar-item">
      <Link to="/">{props.children}</Link>
    </div>
    <Burger toggleMenu={props.toggleMenu} />
  </div>
);

export default Brand;
