import React from 'react';

const Response = (props) => {
  if (props.response === 'success') {
    return (
      <p className="notification is-success">
        Your message was successfully sent.
      </p>
    );
  } else if (props.response === 'failure') {
    return (
      <p className="notification is-danger">
        Something went wrong. Please try again.
      </p>
    );
  } else {
    return <div />;
  }
};

export default Response;
