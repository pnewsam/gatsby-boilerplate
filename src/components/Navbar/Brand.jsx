import React from 'react';
import Burger from './Burger';

const Brand = props => (
  <div className="navbar-brand">
    <div className="navbar-item">{props.children}</div>
    <Burger toggleMenu={props.toggleMenu} />
  </div>
);

export default Brand;
