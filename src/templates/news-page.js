import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import NewsList from '../components/NewsList/NewsList';
import PageLetter from '../components/PageLetter';
import Page from '../components/Page';
import {pattern3, pattern4} from '../constants/patterns';
import Ni from '../components/lettersSvg/Ni';
import {graphql} from 'gatsby';

const NewsPageTemplate = ({
  title,
  tags,
  locale,
  helmet,
  news,
  }) => {
  return (
    <Page locale={locale}>
      {helmet}
      <div className="page__grid grid grid--news">
        <div  className="order-3">
          <PageLetter
            patternLeft={pattern3}
            patternRight={pattern4}
            className="page__letter--right"
          >
            <Ni />
          </PageLetter>
        </div>

        <div className="order-2 fade">
          <h1 className="h1 heading heading--gutters">{title}</h1>
          {/*(tags && tags.length > 0) && (
            <div className="post__tags">
              <span className="heading h4">Tags:</span>{` `}
              <ul className="list list--horizontal">
                {tags.map(({ tag, title }) => (
                  <li key={tag}>
                    <Link
                      to={`${locale === 'en' ? '/en': ''}/tags/${tag.toLowerCase()}`}
                      className="tag">
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )*/}
        </div>
      </div>

      <div className="fade">
        <NewsList locale={locale} data={news} />
      </div>
    </Page>
  )
};

NewsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

const MewsPage = ({  pageContext: { title, description, tags, locale }, ...props }) => {
  return (
    <NewsPageTemplate
      title={title}
      description={description}
      locale={locale}
      tags={tags}
      news={props.data}
      helmet={
        <Helmet>
          <title>{title}</title>
          <meta
            name="description"
            content={description}
          />
        </Helmet>
      }
    />
  )
};

MewsPage.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default MewsPage;

export const newsQuery = graphql`
    query NewsListQuery($locale: String) {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" }, locale: { eq: $locale } } }
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
                        tags {
                            tag
                            title {
                                el
                                en
                            }
                        }
                    }
                }
            }
        }
    }
`