import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo.svg'

const Header = ({ locale, path }) => (
  <div className="container">
    <header className="header">
      <div className="header__brand">
        <Link to={locale === 'el' ? '/' : '/en'} title="Logo">
          <img src={logo} alt="stelios faitakis logo" />
        </Link>
      </div>
      <div className="header__bar">
        <h1 className="header__name">stelios faitakis</h1>
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
  </div>
);

export default Header
