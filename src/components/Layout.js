import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Footer from '../components/Footer';
import './style.scss';
import useSiteMetadata from './SiteMetadata';
import NavBar from './Navbar';

const TemplateWrapper = ({ children, pageContext: { locale, pathname } }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <Helmet>
        <html lang={locale} />
        <title>{title}</title>
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/icons/icon-512x512.png" />
      </Helmet>

      <div className="container">
        <Header locale={locale} path={pathname} languageSwitcher />
        {children}
        {pathname !== '/' && (
          <Header locale={locale} path={pathname} />
        )}
        <NavBar prefix={locale === 'el'? '' : '/en'} />
        <Footer />
      </div>
    </>
  )
};

export default TemplateWrapper
