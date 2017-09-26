import React from 'react';
import Link from 'gatsby-link';
import Hero from '../components/Hero';
import Title1 from '../components/Title1';
import Section from '../components/Section';
import ContactForm from '../components/ContactForm/ContactForm';

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
