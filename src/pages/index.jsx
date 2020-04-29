import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import IndexPageTemplate from '../templates/index-page'

const IndexPage = ({ pageContext: { locale, pathname }, data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <IndexPageTemplate {...frontmatter} locale={locale} pathname={pathname} />
  )
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate($locale: String) {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" }, locale: { eq: $locale } }) {
      frontmatter {
        title
        description
      }
    }
  }
`;
