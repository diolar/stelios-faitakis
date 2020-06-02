import React from 'react';
import Footer from './Footer';

const Page = ({ children, locale, isHomePage }) => (
  <section className="page">
    <div className="container">
      {children}
      {!isHomePage && (
        <Footer prefix={locale === 'el' ? '' : '/en'}/>
      )}
    </div>
  </section>
);

export default Page;
