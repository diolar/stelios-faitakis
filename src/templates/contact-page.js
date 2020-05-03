import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

const ContactPageTemplate = ({
  title,
  email,
  instagram,
  facebook
}) => {
  return (
    <div className="container">
      <div className="contact-grid">
        <div className="contact-grid__content">
          <h1 className="page-title">{title}</h1>
          <ul className="list">
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
          </ul>
        </div>
        <div className="contact-grid__letter">
          <div className="page-letter" role="presentation">
            <div>
              <svg viewBox="0 0 178 474" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref="#pattern4" />
              </svg>
            </div>
            <div className="letter">
              <svg viewBox="0 0 204 474" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref="#epsilon" />
              </svg>
            </div>
            <div>
              <svg viewBox="0 0 178 474" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref="#pattern5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  email: PropTypes.string,
  instagram: PropTypes.string,
  facebook: PropTypes.string,
};

const ContactPage = ({ data, pageContext: { title } }) => {
  const { markdownRemark: post } = data;
  return (
    <ContactPageTemplate
      title={title}
      email={post.frontmatter.email}
      instagram={post.frontmatter.instagram}
      facebook={post.frontmatter.facebook} />
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


