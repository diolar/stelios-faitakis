import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby';
import Timeline from '../components/Timeline';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';

export const AboutPageTemplate = ({ title, body, image, timeline }) => {
  return (
    <div className="container">
      <div className="grid grid--reverse grid--bio">
        <div className="grid__item" style={{ order: 3 }}>
          <h1 className="page-title">{title}</h1>

          <p>{body.paragraph1}</p>

          <figure className="figure">
            <PreviewCompatibleImage
              imageInfo={{
                image,
                alt: 'stelios faitakis',
                className: 'figure__image'
              }} />
            <figcaption className="figure__caption">© Stella Mouzi, 2012</figcaption>
          </figure>
        </div>

        <div className="grid__item" style={{ order: 2 }}>
          <div className="page-letter" role="presentation">
            <div>
              <svg viewBox="0 0 178 474" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref="#pattern2" />
              </svg>
            </div>
            <div id="beta-page" className="letter">
              <svg viewBox="0 0 204 474" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref="#beta" />
              </svg>
            </div>
            <div>
              <svg viewBox="0 0 178 474" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref="#pattern3" />
              </svg>
            </div>
          </div>

          <p>{body.paragraph2}</p>
          <p>{body.paragraph3}</p>

          <h2 className="page-title" style={{ textAlign: 'center' }}>
            {timeline.title}
          </h2>

          <Timeline events={timeline.events} />
          <div className="visually-hidden">
            <svg id="link-icon" className="stroked-icon" viewBox="0 0 85 148" xmlns="http://www.w3.org/2000/svg">
              <path d="M44.875,1 L40.125,1 C35.375,17 33,29 33,37 C33,45 35.375,57 40.125,73 L44.875,73 C49.625,61 52,49 52,37 C52,25 49.625,13 44.875,1 Z" />
              <path d="M44.875,75 L40.125,75 C35.375,91 33,103 33,111 C33,119 35.375,131 40.125,147 L44.875,147 C49.625,135 52,123 52,111 C52,99 49.625,87 44.875,75 Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.object,
  image: PropTypes.object,
};

const AboutPage = ({ data, pageContext: { title, description, content, timelineTitle } }) => {
  const { markdownRemark: post } = data;
  return (
    <AboutPageTemplate
      title={title}
      body={content}
      image={post.frontmatter.image}
      timeline={{
        title: timelineTitle,
        events: post.frontmatter.timelineEvents.sort((a, b) => a.year > b.year ? 1 : -1),
      }}
    />
  )
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const pageQuery = graphql`
    query AboutPageTemplate {
        markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
            frontmatter {
                title
                image {
                    childImageSharp {
                        fluid(maxWidth: 800, quality: 50) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                timelineEvents {
                    year
                    title
                    description
                }
            }
        }
    }
`;
