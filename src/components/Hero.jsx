import React from 'react';
import styled from 'styled-components';
// import hero from '../assets/hero.jpg';

const StyledSection = styled.section`
  background: url(${''}) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`;

const Hero = props => (
  <StyledSection className="hero is-primary is-fullheight">
    <div className="hero-body">
      <div className="container">{props.children}</div>
    </div>
  </StyledSection>
);

export default Hero;
