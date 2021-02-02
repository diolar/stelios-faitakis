import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import TagsList from '../components/NewsList/TagsList';
import Page from '../components/Page';
import {graphql} from 'gatsby';

const TagsPageTemplate = ({
  title,
  locale,
  helmet,
  data,
}) => {
  return (
    <Page locale={locale}>
      {helmet}
      <div className="page__grid grid grid--news">

        <div className="order-2 fade">
          <h1 className="h1 heading">{title}</h1>
        </div>
      </div>

      <div className="fade">
        <TagsList data={data} locale={locale} />
      </div>
    </Page>
  )
};

TagsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
};

const TagsPage = ({  data, pageContext: { title, locale } }) => {
  return (
    <TagsPageTemplate
      title={title}
      data={data}
      locale={locale}
      helmet={
        <Helmet>
          <title>{title}</title>
        </Helmet>
      }
    />
  )
};

TagsPage.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default TagsPage;

export const tagPageQuery = graphql`
    query TagPage($tag: String, $locale: String) {
        allMarkdownRemark(
            limit: 1000
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { elemMatch: { tag: { in: [$tag] }} }, locale: { eq: $locale }}}
        ) {
            edges {
                node {
                    excerpt(pruneLength: 280)
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        templateKey
                        date(formatString: "MMM DD, YYYY")
                        featuredimage {
                            childImageSharp {
                                fluid(maxWidth: 280, quality: 50) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`