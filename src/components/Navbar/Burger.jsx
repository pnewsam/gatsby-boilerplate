import React from 'react';

const Burger = (props) => {
  let classes = 'navbar-burger';
  if (props.isActive) {
    classes += ' is-active';
  }
  return (
    <div className={classes} onClick={props.handleClick}>
      <span />
      <span />
      <span />
    </div>
  );
};

export default Burger;
