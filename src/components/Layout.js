import React from 'react';
import { Helmet } from 'react-helmet';
import CookieConsent from 'react-cookie-consent';
import Link from 'gatsby-plugin-transition-link'
import Header from './Header';
import '../styles/global.scss';
import useSiteMetadata from './SiteMetadata';
import BackToTop from '../components/BackToTop';
import {transitionProps} from '../constants/settings';

const TemplateWrapper = ({ children, pageContext: { locale, pathname } }) => {
  const { title, description, headerTitle } = useSiteMetadata();
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
        <Header title={headerTitle[locale]} locale={locale} path={pathname} />
      </div>
      {children}
      <div className="credits">
        <ul className="list list--horizontal disclaimer">
          <li>{`©Stelios Faitakis ${new Date().getFullYear()}`}</li>
          <li>
            <Link to={`${defaultLang ? '/' : '/en'}/terms-of-sale`} {...transitionProps}>
              {defaultLang ? 'Όροι πώλησης' : 'Terms of sale'}
            </Link>
          </li>
          <li>
            {defaultLang ? 'Σχεδιασμός ' : 'Designed by '}
            <a href="https://susamicreative.com/" rel="noopener noreferrer">Susami</a>
          </li>
        </ul>
      </div>
      <BackToTop />
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
