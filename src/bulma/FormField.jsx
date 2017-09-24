import React from 'react';

const FormField = props => (
  <div className="field">
    <div className="control">{props.children}</div>
  </div>
);

export default FormField;
