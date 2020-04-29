import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import AboutPageTemplate from '../../templates/about-page';


const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <AboutPageTemplate
      title={post.frontmatter.title}
      paragraph1={post.frontmatter.paragraph1}
      paragraph2={post.frontmatter.paragraph2}
      paragraph3={post.frontmatter.paragraph3}
    />
  )
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const pageQuery = graphql`
    query AboutPageTemplate($locale: String) {
        markdownRemark(frontmatter: { templateKey: { eq: "about-page" }, locale: { eq: $locale } }) {
            frontmatter {
                title
                paragraph1
                paragraph2
                paragraph3
            }
        }
    }
`;
