import React from 'react';
import { Link } from 'gatsby';

const Footer = ({ prefix }) => (
  <footer className="footer center">
    <span className="disclaimer">
      <span>{`©Stelios Faitakis ${new Date().getFullYear()} ||`}</span>
      <span>Designed by Susami ||</span>{' '}
      <Link to={`${prefix}/terms-of-sale`}>
        {prefix ? 'Terms of Sale' : 'Όροι Πώλησης'}
      </Link>
    </span>
  </footer>
);

export default Footer;
