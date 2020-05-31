import React from 'react';
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Link from 'gatsby-plugin-transition-link';
import Modal from '../components/Modal';
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Page from '../components/Page';
import Pagination from '../components/Pagination';
import { transitionProps } from '../constants/settings';

export const WorkItemTemplate = ({
  content,
  contentComponent,
  description,
  title,
  image,
  images,
  helmet,
  prev,
  next,
  locale
 }) => {
  const PostContent = contentComponent || Content;

  return (
    <Page locale={locale}>
      {helmet || ''}
      <div className="page__grid grid grid--work-item fade">

        <div className="work-item__image">
          <Modal
            trigger={
              <PreviewCompatibleImage
                imageInfo={{
                  image: image,
                  alt: `featured image for post ${title}`,
                  imgStyle: {
                    objectFit: 'contain',
                  },
                  className: 'work-item__img',
                }}
              />
            }>
            <PreviewCompatibleImage
              imageInfo={{
                image: image,
                alt: `featured image for work ${title}`,
                style: { height: '100%' },
                imgStyle: {
                  objectFit: 'contain',
                },
              }}
            />
          </Modal>
        </div>

        <div className="work-item">
          <div className="work-item__meta">
            <h1 className="h1 heading heading--gutters">
              {title}
            </h1>

            <p className="work-item__description">{description}</p>

            <div className="wave stroked-icon">
              <svg viewBox="0 0 312 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M311.484 9c-8.623 0-8.623-8-17.247-8-8.623 0-8.623 8-17.247 8-8.625 0-8.625-8-17.25-8-8.623 0-8.623 8-17.247 8s-8.624-8-17.249-8c-8.622 0-8.622 8-17.244 8-8.623 0-8.623-8-17.245-8-8.624 0-8.624 8-17.247 8-8.625 0-8.625-8-17.25-8-8.623 0-8.623 8-17.247 8s-8.624-8-17.248-8c-8.625 0-8.625 8-17.249 8-8.626 0-8.626-8-17.251-8-8.624 0-8.624 8-17.247 8-8.626 0-8.626-8-17.252-8-8.627 0-8.627 8-17.253 8-8.628 0-8.628-8-17.256-8S9.627 9 1 9" />
              </svg>
            </div>

            {content && <PostContent content={content} />}
          </div>

          <div className="work-item__pagination">
            <Pagination prev={prev} next={next}>
              <Link to={locale === 'el' ? '/work' : '/en/work'} {...transitionProps}>
                <div className="icon">
                  <svg viewBox="0 0 178 483" xmlns="http://www.w3.org/2000/svg">
                    <path d="M174 2v65.586h-13.61c-14.806 0-26.892 3.955-36.948 12.088-10.916 8.83-20.075 20.023-27.22 33.27-7.492 13.891-13.437 29.201-17.669 45.505-2.844 10.935-5.11 21.502-6.778 31.583H174v65.586H67.652c.249 4.652.607 9.739 1.074 15.232.966 11.5 2.955 24.06 5.91 37.343 2.964 13.32 6.87 26.824 11.612 40.14 4.504 12.656 10.474 24.268 17.748 34.514 7.004 9.878 15.344 17.977 24.787 24.074 8.845 5.716 19.182 8.494 31.607 8.494H174V481h-13.61c-28.55 0-54.272-8.75-76.452-26.006-21.61-16.811-39.515-41.142-53.221-72.32-10.865-23.902-18.137-48.959-21.617-74.48C5.716 283.458 4 261.016 4 241.5c0-9 .432-19.231 1.284-30.412.845-11.224 2.249-23.104 4.17-35.295 1.941-12.297 4.657-25.035 8.073-37.863 3.48-13.094 7.914-25.737 13.176-37.572 13.691-31.166 31.61-55.529 53.235-72.351C106.118 10.75 131.84 2 160.39 2H174zm-14 14c-25.705 0-48.495 7.714-68.391 23.142C71.714 54.572 55.335 76.86 42.49 106c-4.973 11.15-9.121 22.932-12.434 35.357-3.323 12.435-5.907 24.538-7.772 36.322-1.865 11.792-3.215 23.142-4.041 34.071C17.408 222.678 17 232.432 17 241c0 18.863 1.652 40.4 4.975 64.608 3.312 24.217 10.15 47.68 20.516 70.392 12.844 29.15 29.223 51.428 49.118 66.857C111.505 458.286 134.295 466 160 466h0v-37.285c-14.921 0-27.88-3.536-38.859-10.608-10.987-7.071-20.516-16.282-28.6-27.643-8.082-11.35-14.61-23.997-19.584-37.928-4.974-13.923-9.015-27.854-12.124-41.786-3.109-13.922-5.188-27-6.217-39.215-1.04-12.214-1.555-22.39-1.555-30.536H160v-37.285H55.548c1.651-15.358 4.76-31.791 9.326-49.289 4.556-17.498 10.88-33.71 18.963-48.647 8.083-14.935 18.342-27.422 30.776-37.446 12.435-10.024 27.56-15.047 45.387-15.047h0z" />
                  </svg>
                </div>
              </Link>
            </Pagination>
          </div>

        </div>
      </div>

      {(images && images.length > 0) && (
        <div className="page__grid grid grid--work-item fade">
          <div className="work-item__collection">
            {images.map(({ image, alt }, index) => (
              <Modal
                key={index}
                trigger={
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: image,
                      alt: alt || `image for post ${title}`,
                      imgStyle: {
                        objectFit: 'contain',
                      },
                    }}
                  />
                }>
                <PreviewCompatibleImage
                  imageInfo={{
                    image: image,
                    alt: alt || `image for work ${title}`,
                    style: { height: '100%' },
                    imgStyle: {
                      objectFit: 'contain',
                    },
                  }}
                />
              </Modal>
            ))}
          </div>
        </div>
      )}
    </Page>

  )
};

WorkItemTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
  image: PropTypes.object,
};

const WorkItem = ({ data, pageContext: { prev, next, title, locale } }) => {
  const { markdownRemark: post } = data;
  return (
    <WorkItemTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={
        <Helmet>
          <title>{title}</title>
          <meta
            name="description"
            content={`${post.frontmatter.description}`}
          />
        </Helmet>
      }
      title={title}
      image={post.frontmatter.image}
      images={post.frontmatter.images}
      prev={prev}
      next={next}
      locale={locale}
    />
  )
};

WorkItem.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default WorkItem;

export const pageQuery = graphql`
  query WorkItemByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        titleEN
        description
        descriptionEN
        image {
          childImageSharp {
            fluid(maxWidth: 800, quality: 50) {
                ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        images {
            image {
                childImageSharp {
                    fluid(maxWidth: 800, quality: 50) {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
      }
    }
  }
`
