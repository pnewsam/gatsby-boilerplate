import React from 'react';

const NavbarMenu = (props) => {
  let classes = 'navbar-menu';
  if (props.isActive) {
    classes += ' is-active';
  }
  return (
    <div className={classes}>
      <div className="navbar-start" />
      <div className="navbar-end">{props.children}</div>
    </div>
  );
};

export default NavbarMenu;
