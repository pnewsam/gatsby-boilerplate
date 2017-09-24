import React from 'react';
import Link from 'gatsby-link';
import SocialIcons from './SocialIcons';

const Footer = props => (
  <footer className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <SocialIcons />
        {props.children}
      </div>
    </div>
  </footer>
);

export default Footer;
