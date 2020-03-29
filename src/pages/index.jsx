import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import IndexPageTemplate from '../templates/index-page'

const IndexPage = ({ pageContext: { locale }, data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate {...frontmatter} locale={locale} />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

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
`
