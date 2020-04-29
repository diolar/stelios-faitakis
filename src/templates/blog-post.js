import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const BlogPostTemplate = ({
  content,
  contentComponent,
  image,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <section className="post single-post">
      {helmet || ''}
      <div className="container">
        <div className="single-post__image">
          <PreviewCompatibleImage
            imageInfo={{
              image: image,
              alt: `featured image for post ${title}`,
            }}
          />
        </div>

        <h1 className="post__title">
          {title}
        </h1>
        <PostContent content={content} className="post__excerpt" />
      </div>
    </section>
  )
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      image={post.frontmatter.featuredimage}
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
        date(formatString: "MMMM DD, YYYY")
        title
        description
        featuredimage {
            childImageSharp {
                fluid(maxWidth: 1440, quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
      }
    }
  }
`
