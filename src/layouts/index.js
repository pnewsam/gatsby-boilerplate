import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import './main.scss';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Boilerplate"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Navbar>
      <Link to="" className="navbar-item">
        Link
      </Link>
      <Link to="" className="navbar-item">
        Link
      </Link>
      <Link to="" className="navbar-item">
        Link
      </Link>
    </Navbar>
    {children()}
    <Footer>&copy; Business Name 2017</Footer>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
