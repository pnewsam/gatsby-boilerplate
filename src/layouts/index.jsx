import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import './main.scss';
// import favicon from '../assets/favicon.ico';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import DeferredStyles from '../components/DeferredStyles';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Boilerplate"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
      link={[
        {
          /* {
          rel: 'icon',
          href: favicon,
          type: 'image/x-icon',
        }, */
        },
      ]}
    />
    <Navbar />
    {children()}
    <Footer>&copy; Business Name 2017</Footer>
    <DeferredStyles />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
