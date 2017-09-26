import React from 'react';

const Burger = props => (
  <div className="navbar-burger" onClick={props.toggleMenu}>
    <span />
    <span />
    <span />
  </div>
);

export default Burger;
