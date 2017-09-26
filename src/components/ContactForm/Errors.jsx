import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`text-align: center;`;

const Errors = (props) => {
  if (props.errors.length > 0) {
    return (
      <StyledDiv className="notification is-danger">
        {props.errors.map(error => <p>{error}</p>)}
      </StyledDiv>
    );
  }
  return <div />;
};

export default Errors;
