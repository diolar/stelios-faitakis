import React from 'react';
import NavBar from './Navbar';
import Header from './Header';

const Page = ({ children, locale, isHomePage }) => (
  <section className="page">
    {children}
    <div className="page__footer">
      {!isHomePage && (
        <Header locale={locale} />
      )}
      <NavBar prefix={locale === 'el' ? '' : '/en'} />
    </div>
  </section>
);

export default Page;