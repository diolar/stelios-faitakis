import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql, StaticQuery } from 'gatsby';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import Icon from '../Icon';
import { shortArrow } from '../../constants/svg';
import './style.scss';

const NewsList = ({ data: { allMarkdownRemark: { edges : posts }}, locale }) => (
  <div className="post-list">
    {posts &&
    posts.map(({ node: post }) => (
      <div key={post.id}>
        <article className="post">
          <div>
            {post.frontmatter.featuredimage ? (
              <PreviewCompatibleImage
                imageInfo={{
                  image: post.frontmatter.featuredimage,
                  alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                  className: 'post__thumb'
                }}
              />
            ) : null}
          </div>
          <div className="post__content">
            <header className="post__header">
              <Link to={post.fields.slug} className="post__title h2 heading">
                {post.frontmatter.title}
              </Link>
              <span className="post__date body">
                <Icon {...shortArrow} />
                  {post.frontmatter.date}
                </span>
            </header>
            <p className="post__excerpt body">
              {post.excerpt}
            </p>
            <div className="post__footer">
              <div className="post__more">
                <div className="wave stroked-icon">
                  <svg viewBox="0 0 312 10" xmlns="http://www.w3.org/2000/svg">
                    <path d="M311.484 9c-8.623 0-8.623-8-17.247-8-8.623 0-8.623 8-17.247 8-8.625 0-8.625-8-17.25-8-8.623 0-8.623 8-17.247 8s-8.624-8-17.249-8c-8.622 0-8.622 8-17.244 8-8.623 0-8.623-8-17.245-8-8.624 0-8.624 8-17.247 8-8.625 0-8.625-8-17.25-8-8.623 0-8.623 8-17.247 8s-8.624-8-17.248-8c-8.625 0-8.625 8-17.249 8-8.626 0-8.626-8-17.251-8-8.624 0-8.624 8-17.247 8-8.626 0-8.626-8-17.252-8-8.627 0-8.627 8-17.253 8-8.628 0-8.628-8-17.256-8S9.627 9 1 9" />
                  </svg>
                </div>
                <Link to={post.fields.slug} className="heading h3">
                  <div className="label">
                    <div className="text">
                      {locale === 'en' ? 'more' : 'περισσότερα'}
                    </div>
                    <div className="graphic">
                      <div className="icon icon--narrow">
                        <svg className="eye" viewBox="0 0 151 88" xmlns="http://www.w3.org/2000/svg">
                          <path d="M75.554 1c31.821 0 59.6 17.243 74.553 42.882-14.953 25.639-42.732 42.882-74.553 42.882-14.033 0-27.28-3.353-38.988-9.301A86.71 86.71 0 011 43.882C15.954 18.243 43.732 1 75.554 1zm.001 2C44.587 3 17.553 19.438 3 43.88c8.135 13.663 20.17 24.825 34.613 32.013 11.393 5.67 24.285 8.867 37.942 8.867 30.968 0 58.003-16.438 72.555-40.88C133.558 19.438 106.523 3 75.555 3zm.687 14c15.046 0 27.243 12.197 27.243 27.243S91.288 71.486 76.242 71.486C61.197 71.486 49 59.289 49 44.243S61.197 17 76.242 17zm-.002 2C62.3 19 51 30.302 51 44.245 51 58.188 62.3 69.49 76.24 69.49c13.94 0 25.24-11.302 25.24-25.245C101.48 30.302 90.18 19 76.24 19z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              {(post.frontmatter.tags && post.frontmatter.tags.length > 0) && (
                <div className="post__tags">
                  <span className="heading h4">Tags:</span>{` `}
                  <ul className="list list--horizontal">
                    {post.frontmatter.tags.map(({ tag, title }) => (
                      <li key={tag}>
                        <Link
                          to={`${locale === 'en' ? '/en': ''}/tags/${tag.toLowerCase()}`}
                          className="tag">
                          {title[locale]}
                        </Link>
                      </li>
                    ))}
                  </ul>

                </div>
              )}
            </div>
          </div>
        </article>
      </div>
    ))}
  </div>
);

NewsList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default ({ locale }) => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
                tags {
                    tag
                    title {
                        el
                        en
                    }
                }
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
    `}
    render={(data) => <NewsList data={data} locale={locale} />}
  />
)
