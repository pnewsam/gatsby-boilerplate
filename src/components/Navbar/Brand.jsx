import React from 'react';
import Burger from './Burger';
import NavLink from './NavLink';

const Brand = props => (
  <div className="navbar-brand">
    <div className="navbar-item">
      <NavLink to="/">{props.children}</NavLink>
    </div>
    <Burger handleClick={props.handleClick} isActive={props.isActive} />
  </div>
);

export default Brand;
