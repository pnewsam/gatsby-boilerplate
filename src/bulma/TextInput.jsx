import React from 'react';

const TextInput = props => (
  <input
    className="input"
    type="text"
    name={props.name}
    onChange={props.handleChange}
    value={props.value}
  />
);

export default TextInput;
