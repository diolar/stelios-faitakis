import React from 'react';
import { Helmet } from 'react-helmet';
import CookieConsent from 'react-cookie-consent';
import Header from './Header';
import Footer from '../components/Footer';
import './style.scss';
import useSiteMetadata from './SiteMetadata';

const TemplateWrapper = ({ children, pageContext: { locale, pathname } }) => {
  const { title, description } = useSiteMetadata();
  const defaultLang = locale === 'el';
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
        <Header component="header" locale={locale} path={pathname} languageSwitcher />
        {children}
        <Footer prefix={defaultLang ? '' : '/en'} />
      </div>
      <CookieConsent
        disableStyles={true}
        buttonClasses="button-reset cookie-notice__button"
        containerClasses="cookie-notice"
        contentClasses="cookie-notice__content"
        location="bottom"
        buttonText={defaultLang ? "Αποδοχή" : "Allow"}
        declineButtonText={defaultLang ? "Να μην επιτρέπονται" : "Decline"}
        cookieName="gatsby-gdpr-google-analytics">
        {defaultLang ? "Ο ιστότοπος χρησιμοποιεί cookies" : "This website uses cookies"}
      </CookieConsent>
    </>
  )
};

export default TemplateWrapper
