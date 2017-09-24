import React from 'react';
import Link from 'gatsby-link';
import Hero from '../bulma/Hero';
import Title1 from '../bulma/Title1';
import Section from '../bulma/Section';
import ContactForm from '../bulma/ContactForm';

const IndexPage = () => (
  <div>
    <Hero>
      <Title1 title="Title" subtitle="Subtitle" />
    </Hero>
    <Section>
      <ContactForm />
    </Section>
  </div>
);

export default IndexPage;
