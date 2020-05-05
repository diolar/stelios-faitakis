import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import PageLetter from '../components/PageLetter';

const ContactPageTemplate = ({
  title,
  email,
  instagram,
  facebook
}) => {
  return (
    <div className="page">
      <div className="page__grid grid grid--contact">
        <div className="order-3">
          <PageLetter
            className="page__letter--right"
            id="epsilon"
            patternLeft="pattern4"
            patternRight="pattern5"
          />
        </div>

        <div className="order-2">
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
          </ul>
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


