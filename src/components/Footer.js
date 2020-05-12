import React from 'react';
import Link from 'gatsby-plugin-transition-link';
import logo from '../img/logo.svg';

const transitionProps = {
  exit: {
    length: 0
  },
  entry: {
    length: 0.3
  }
};

const Footer = ({ prefix }) => (
  <footer className="footer fade">
      <div className="footer__brand">
          <Link to={`${prefix}/`} title="Home" {...transitionProps}>
              <img src={logo} alt="" />
          </Link>
      </div>
      <nav className="footer__bar">
          <Link to={`${prefix}/work`} className="h3 heading menu-item" {...transitionProps}>
              {prefix ? 'Work' : 'Έργο'}
          </Link>
          <Link to={`${prefix}/bio`} className="h3 heading menu-item" {...transitionProps}>
              {prefix ? 'Bio' : 'Βίος'}
          </Link>
          <Link to={`${prefix}/news`} className="h3 heading menu-item" {...transitionProps}>
              {prefix ? 'News' : 'Νέα'}
          </Link>
          <Link to={`${prefix}/contact`} className="h3 heading menu-item" {...transitionProps}>
              {prefix ? 'Contact' : 'Επαφή'}
          </Link>
      </nav>
  </footer>
);

export default Footer;
