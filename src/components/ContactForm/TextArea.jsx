import React from 'react';
import string from 'lodash/string';

const TextArea = (props) => {
  const cap = string.capitalize(props.name);
  return (
    <div className="field">
      <label className="label" htmlFor={props.name}>
        {cap}
      </label>
      <div className="control">
        <textarea
          className="textarea"
          name={props.name}
          placeholder={cap}
          value={props.value}
          onChange={props.handleChange}
        />
      </div>
      {props.errors.map(error => (
        <p key={props.errors.indexOf(error)} className="help is-danger">
          {error}
        </p>
      ))}
    </div>
  );
};

export default TextArea;
