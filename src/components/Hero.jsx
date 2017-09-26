import React from 'react';

const Hero = props => (
  <section className="hero is-primary is-large">
    <div className="hero-body">
      <div className="container">{props.children}</div>
    </div>
  </section>
);

export default Hero;
