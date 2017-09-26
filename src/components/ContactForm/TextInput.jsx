import React from 'react';
import string from 'lodash/string';

const TextInput = (props) => {
  const cap = string.capitalize(props.name);
  let classes = 'input';
  if (props.errors.length > 0) {
    classes += ' is-danger';
  }
  return (
    <div className="field">
      <label className="label" htmlFor={props.name}>
        {cap}
      </label>
      <div className="control">
        <input
          type="text"
          className={classes}
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

export default TextInput;
