import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Page from '../components/Page';
import Pagination from '../components/Pagination';
import Ni from '../components/lettersSvg/Ni';
import {transitionProps} from '../constants/settings';
import Link from 'gatsby-plugin-transition-link';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  image,
  title,
  date,
  helmet,
  prev,
  next,
  locale,
}) => {
  const PostContent = contentComponent || Content

  return (
    <Page locale={locale}>
      <div className="post-page fade">
        {helmet || ''}
        <div className="post-page__image">
          <PreviewCompatibleImage
            imageInfo={{
              image: image,
              alt: `featured image for post ${title}`,
            }}
          />
        </div>
        <div>
          <div className="post-page__header">
            <h1 className="h2 heading">
              {title}
            </h1>
            {/*
            <span className="body post-page__date">
              <Icon {...shortArrow} />
              {date}
            </span>
            */}
          </div>


          <PostContent content={content} className="post-page__body" />

          <div className="post-page__divider stroked-icon">
            <svg viewBox="0 0 312 10" xmlns="http://www.w3.org/2000/svg">
              <path d="M311.484 9c-8.623 0-8.623-8-17.247-8-8.623 0-8.623 8-17.247 8-8.625 0-8.625-8-17.25-8-8.623 0-8.623 8-17.247 8s-8.624-8-17.249-8c-8.622 0-8.622 8-17.244 8-8.623 0-8.623-8-17.245-8-8.624 0-8.624 8-17.247 8-8.625 0-8.625-8-17.25-8-8.623 0-8.623 8-17.247 8s-8.624-8-17.248-8c-8.625 0-8.625 8-17.249 8-8.626 0-8.626-8-17.251-8-8.624 0-8.624 8-17.247 8-8.626 0-8.626-8-17.252-8-8.627 0-8.627 8-17.253 8-8.628 0-8.628-8-17.256-8S9.627 9 1 9" />
            </svg>
          </div>

          <div className="post-page__pagination">
            <Pagination next={next} prev={prev}>
              <Link to={locale === 'el' ? '/news' : '/en/news'} {...transitionProps}>
                <div className="icon">
                  <Ni/>
                </div>
              </Link>
            </Pagination>
          </div>
        </div>
      </div>
    </Page>
  )
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data, pageContext: { locale, next, prev } }) => {
  const { markdownRemark: post } = data;

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      image={post.frontmatter.featuredimage}
      prev={prev}
      next={next}
      helmet={
        <Helmet titleTemplate="%s | News">
          <title>{`${post.frontmatter.title}`}</title>
          <meta
            name="description"
            content={`${post.frontmatter.description}`}
          />
        </Helmet>
      }
      title={post.frontmatter.title}
      date={post.frontmatter.date}
      locale={locale}
    />
  )
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMM DD, YYYY")
        title
        description
        featuredimage {
            childImageSharp {
                fluid(maxWidth: 1440, quality: 50) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
      }
    }
  }
`
