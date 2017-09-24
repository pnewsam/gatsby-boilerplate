import React from 'react';

const CenteredColumn = props => (
  <div className="columns">
    <div className="column is-8 is-offset-2">{props.children}</div>
  </div>
);

export default CenteredColumn;
