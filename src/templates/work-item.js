import React from 'react';
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import { PortalWithState } from 'react-portal';
import Content, { HTMLContent } from '../components/Content'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const WorkItemTemplate = ({
  content,
  contentComponent,
  description,
  title,
  image,
  helmet,
  prev,
  next
 }) => {
  const PostContent = contentComponent || Content;

  return (
    <div className="page">
      {helmet || ''}
      <div className="page__grid grid grid--work-item">

        <div>
          <PreviewCompatibleImage
            imageInfo={{
              image: image,
              alt: `featured image for post ${title}`,
            }}
          />
        </div>

        <div className="work-item">
          <div>
            <h1 className="h1 heading heading--gutters">
              {title}
            </h1>

            <p className="work-item__description body">{description}</p>

            <div className="wave stroked-icon">
              <svg viewBox="0 0 312 10" xmlns="http://www.w3.org/2000/svg">
                <path d="M311.484 9c-8.623 0-8.623-8-17.247-8-8.623 0-8.623 8-17.247 8-8.625 0-8.625-8-17.25-8-8.623 0-8.623 8-17.247 8s-8.624-8-17.249-8c-8.622 0-8.622 8-17.244 8-8.623 0-8.623-8-17.245-8-8.624 0-8.624 8-17.247 8-8.625 0-8.625-8-17.25-8-8.623 0-8.623 8-17.247 8s-8.624-8-17.248-8c-8.625 0-8.625 8-17.249 8-8.626 0-8.626-8-17.251-8-8.624 0-8.624 8-17.247 8-8.626 0-8.626-8-17.252-8-8.627 0-8.627 8-17.253 8-8.628 0-8.628-8-17.256-8S9.627 9 1 9" />
              </svg>
            </div>

            <PostContent content={content} />

            <PortalWithState
              closeOnOutsideClick
              closeOnEsc
              onOpen={() => document.body.classList.add('portal-open')}
              onClose={() => document.body.classList.remove('portal-open')}
            >
              {({ openPortal, closePortal, isOpen, portal }) => (
                <>
                  <button type="button" onClick={openPortal} className="animate-path icon-button button-reset">
                    <div className="icon icon--narrow">
                      <svg className="eye" viewBox="0 0 151 88" xmlns="http://www.w3.org/2000/svg">
                        <path d="M75.554 1c31.821 0 59.6 17.243 74.553 42.882-14.953 25.639-42.732 42.882-74.553 42.882-14.033 0-27.28-3.353-38.988-9.301A86.71 86.71 0 011 43.882C15.954 18.243 43.732 1 75.554 1zm.001 2C44.587 3 17.553 19.438 3 43.88c8.135 13.663 20.17 24.825 34.613 32.013 11.393 5.67 24.285 8.867 37.942 8.867 30.968 0 58.003-16.438 72.555-40.88C133.558 19.438 106.523 3 75.555 3zm.687 14c15.046 0 27.243 12.197 27.243 27.243S91.288 71.486 76.242 71.486C61.197 71.486 49 59.289 49 44.243S61.197 17 76.242 17zm-.002 2C62.3 19 51 30.302 51 44.245 51 58.188 62.3 69.49 76.24 69.49c13.94 0 25.24-11.302 25.24-25.245C101.48 30.302 90.18 19 76.24 19z" />
                        <path d="M75.982 70C59.303 70.667 50.309 61.667 49 43h53c-.667 17.333-9.34 26.333-26.018 27z"/>
                      </svg>
                    </div>
                  </button>
                  {portal(
                    <div className="portal">
                      <div className="portal__container">
                        <div className="portal__content">
                          <PreviewCompatibleImage
                            imageInfo={{
                              image: image,
                              alt: `featured image for post ${title}`,
                              style: { height: '100%' },
                              imgStyle: {
                                objectFit: 'contain',
                              },
                              objectFit: 'contain',
                            }}
                          />
                        </div>
                        <div className="portal__close">
                          <button type="button" onClick={closePortal} className="icon-button button-reset">
                            <div className="icon icon--narrow">
                              <svg className="eye" viewBox="0 0 151 88" xmlns="http://www.w3.org/2000/svg">
                                <path d="M75.554 1c31.821 0 59.6 17.243 74.553 42.882-14.953 25.639-42.732 42.882-74.553 42.882-14.033 0-27.28-3.353-38.988-9.301A86.71 86.71 0 011 43.882C15.954 18.243 43.732 1 75.554 1zm.001 2C44.587 3 17.553 19.438 3 43.88c8.135 13.663 20.17 24.825 34.613 32.013 11.393 5.67 24.285 8.867 37.942 8.867 30.968 0 58.003-16.438 72.555-40.88C133.558 19.438 106.523 3 75.555 3zm.687 14c15.046 0 27.243 12.197 27.243 27.243S91.288 71.486 76.242 71.486C61.197 71.486 49 59.289 49 44.243S61.197 17 76.242 17zm-.002 2C62.3 19 51 30.302 51 44.245 51 58.188 62.3 69.49 76.24 69.49c13.94 0 25.24-11.302 25.24-25.245C101.48 30.302 90.18 19 76.24 19z" />
                                <path d="M75.982 70C59.303 70.667 50.309 61.667 49 43h53c-.667 17.333-9.34 26.333-26.018 27z"/>
                              </svg>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}
            </PortalWithState>
          </div>

          <div className="pagination">
            <div className="pagination__prev">
              {prev && (
                <Link to={prev.to} title={prev.title}>
                  <div className="icon">
                    <svg viewBox="0 0 1600 240" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 113.309c481.047-4.843 994.38-4.843 1540 0-23.053-17.296-38.35-32.365-45.895-45.207-7.543-12.843-14.431-35.543-20.664-68.102h20.664c0 33.456 10.564 60.122 31.692 80 21.127 19.878 45.862 30.98 74.203 33.309v15.504c-20.112-.562-42.79 7.804-68.031 25.097-25.242 17.293-37.864 45.99-37.864 86.09h-20.664c5.414-31.78 12.302-54.655 20.664-68.625 8.363-13.97 23.661-28.157 45.895-42.563H0c-32.286-10.01-32.286-15.178 0-15.503z"/>
                    </svg>
                  </div>
                </Link>
              )}
            </div>
            <div className="pagination__letter">
              <div className="icon">
                <svg viewBox="0 0 178 483" xmlns="http://www.w3.org/2000/svg">
                  <path d="M174 2v65.586h-13.61c-14.806 0-26.892 3.955-36.948 12.088-10.916 8.83-20.075 20.023-27.22 33.27-7.492 13.891-13.437 29.201-17.669 45.505-2.844 10.935-5.11 21.502-6.778 31.583H174v65.586H67.652c.249 4.652.607 9.739 1.074 15.232.966 11.5 2.955 24.06 5.91 37.343 2.964 13.32 6.87 26.824 11.612 40.14 4.504 12.656 10.474 24.268 17.748 34.514 7.004 9.878 15.344 17.977 24.787 24.074 8.845 5.716 19.182 8.494 31.607 8.494H174V481h-13.61c-28.55 0-54.272-8.75-76.452-26.006-21.61-16.811-39.515-41.142-53.221-72.32-10.865-23.902-18.137-48.959-21.617-74.48C5.716 283.458 4 261.016 4 241.5c0-9 .432-19.231 1.284-30.412.845-11.224 2.249-23.104 4.17-35.295 1.941-12.297 4.657-25.035 8.073-37.863 3.48-13.094 7.914-25.737 13.176-37.572 13.691-31.166 31.61-55.529 53.235-72.351C106.118 10.75 131.84 2 160.39 2H174zm-14 14c-25.705 0-48.495 7.714-68.391 23.142C71.714 54.572 55.335 76.86 42.49 106c-4.973 11.15-9.121 22.932-12.434 35.357-3.323 12.435-5.907 24.538-7.772 36.322-1.865 11.792-3.215 23.142-4.041 34.071C17.408 222.678 17 232.432 17 241c0 18.863 1.652 40.4 4.975 64.608 3.312 24.217 10.15 47.68 20.516 70.392 12.844 29.15 29.223 51.428 49.118 66.857C111.505 458.286 134.295 466 160 466h0v-37.285c-14.921 0-27.88-3.536-38.859-10.608-10.987-7.071-20.516-16.282-28.6-27.643-8.082-11.35-14.61-23.997-19.584-37.928-4.974-13.923-9.015-27.854-12.124-41.786-3.109-13.922-5.188-27-6.217-39.215-1.04-12.214-1.555-22.39-1.555-30.536H160v-37.285H55.548c1.651-15.358 4.76-31.791 9.326-49.289 4.556-17.498 10.88-33.71 18.963-48.647 8.083-14.935 18.342-27.422 30.776-37.446 12.435-10.024 27.56-15.047 45.387-15.047h0z" />
                </svg>
              </div>
            </div>
            <div className="pagination__next">
              {next && (
                <Link to={next.to}  title={next.title}>
                  <div className="icon">
                    <svg viewBox="0 0 1600 240" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 113.309c481.047-4.843 994.38-4.843 1540 0-23.053-17.296-38.35-32.365-45.895-45.207-7.543-12.843-14.431-35.543-20.664-68.102h20.664c0 33.456 10.564 60.122 31.692 80 21.127 19.878 45.862 30.98 74.203 33.309v15.504c-20.112-.562-42.79 7.804-68.031 25.097-25.242 17.293-37.864 45.99-37.864 86.09h-20.664c5.414-31.78 12.302-54.655 20.664-68.625 8.363-13.97 23.661-28.157 45.895-42.563H0c-32.286-10.01-32.286-15.178 0-15.503z"/>
                    </svg>
                  </div>
                </Link>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>

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

const WorkItem = ({ data, pageContext: { prev, next, title } }) => {
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
      prev={prev}
      next={next}
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
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
