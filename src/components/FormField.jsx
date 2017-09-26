import React from 'react';

const FormField = props => (
  <div className="field">
    <label htmlFor={props.label} className="label">
      {props.label}
    </label>
    <div className="control">{props.children}</div>
  </div>
);

export default FormField;
