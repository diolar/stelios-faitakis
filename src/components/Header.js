import React from 'react';
import Link from 'gatsby-plugin-transition-link';
import logo from '../img/logo.svg';
import { transitionProps } from '../constants/settings';

const Header = ({ title, locale, path }) => (
  <header className="header">
    <div className="header__brand">
      <Link to={locale === 'el' ? '/' : '/en'} title="Home" {...transitionProps}>
        <img src={logo} alt="" />
      </Link>
    </div>
    <div className="header__bar">
      <h1 className="header__name">{title}</h1>
      <div className="header__languages">
        {locale === 'el' ? (
          <>
            <span className="active">el</span>
            <Link to={`/en${path}`}>en</Link>
          </>
        ) : (
          <>
            <Link to={path}>el</Link>
            <span className="active">en</span>
          </>
        )}
      </div>
    </div>
  </header>
);

export default Header
