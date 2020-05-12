import React from 'react';
import Footer from './Footer';

const Page = ({ children, locale, isHomePage }) => (
  <section className="page">
    {children}
    {!isHomePage && (
      <Footer prefix={locale === 'el' ? '' : '/en'}/>
    )}
  </section>
);

export default Page;
