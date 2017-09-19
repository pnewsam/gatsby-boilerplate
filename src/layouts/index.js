import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import "./main.scss";

import Navbar from "./Navbar";
import Footer from "./Footer";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Navbar />
    <section className="section">
      <div className="container">
        {children()}
      </div>
    </section>
    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
