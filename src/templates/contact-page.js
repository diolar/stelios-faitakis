import React from 'react';
import PropTypes from 'prop-types';
import {graphql, Link} from 'gatsby';
import PageLetter from '../components/PageLetter';
import Page from '../components/Page';
import {pattern4, pattern5} from '../constants/patterns';
import Epsilon from '../components/lettersSvg/Epsilon';

const ContactPageTemplate = ({
  title,
  email,
  instagram,
  facebook,
  locale,
}) => {
  const prefix = locale === 'el' ? '' : '/en';
  return (
    <Page locale={locale}>
      <div className="page__grid grid grid--contact">
        <div className="order-3">
          <PageLetter
            patternLeft={pattern4}
            patternRight={pattern5}
            className="page__letter--right"
          >
            <Epsilon />
          </PageLetter>
        </div>

        <div className="order-2 fade">
          <h1 className="h1 heading heading--gutters">{title}</h1>
          <ul className="list body">
            {email &&
            <li>
              <a className="external-link" href={`mailto:${email}`}>{email}</a>
            </li>
            }
            {instagram &&
            <li>Insta: <a className="external-link" href={`https://www.instagram.com/${instagram}`}>@{instagram}</a>
            </li>
            }
            {facebook &&
            <li>fb: @{facebook}</li>
            }
            <li>
              <Link to={`${prefix}/terms-of-sale`}>{prefix ? 'Terms of Sale' : 'Όροι Πώλησης'}</Link>
            </li>
          </ul>
        </div>
      </div>
    </Page>
  )
};

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  email: PropTypes.string,
  instagram: PropTypes.string,
  facebook: PropTypes.string,
};

const ContactPage = ({ data, pageContext: { title, locale } }) => {
  const { markdownRemark: post } = data;
  return (
    <ContactPageTemplate
      title={title}
      email={post.frontmatter.email}
      instagram={post.frontmatter.instagram}
      facebook={post.frontmatter.facebook}
      locale={locale}
    />
  )
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ContactPage;

export const pageQuery = graphql`
    query ContactPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
            frontmatter {
                title
                email
                instagram
                facebook
            }
        }
    }
`;


