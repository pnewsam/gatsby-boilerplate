import React from 'react';

const BButton = props => (
  <button className="button is-primary" type={props.type}>
    {props.children}
  </button>
);

export default BButton;
