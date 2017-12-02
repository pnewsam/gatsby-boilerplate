import React from 'react';
import Link from 'gatsby-link';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm/ContactForm';

const IndexPage = () => (
  <div>
    <Hero>
      <h1 className="title is-1">Title</h1>
      <h3 className="title is-3">Subtitle</h3>
    </Hero>
    <section className="section">
      <div className="container">
        <ContactForm />
      </div>
    </section>
  </div>
);

export default IndexPage;
