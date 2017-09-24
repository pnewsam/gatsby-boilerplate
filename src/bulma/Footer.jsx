import React from 'react';
import Link from 'gatsby-link';

const Footer = props => (
  <footer className="footer">
    <div className="container">
      <div className="content">{props.children}</div>
    </div>
  </footer>
);

export default Footer;
