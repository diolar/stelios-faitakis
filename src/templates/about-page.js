import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby';
import Timeline from '../components/Timeline';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Pattern from '../components/Pattern';
import Helmet from 'react-helmet';

export const AboutPageTemplate = ({ title, body, image, timeline, helmet }) => {
  return (
    <div className="page">
      {helmet}
      <div className="grid grid--bio">
        <div className="page__letter hidden-md" role="presentation">
          <div>
            <Pattern useSvgId="pattern2" />
          </div>
          <div id="beta-page" className="letter">
            <svg viewBox="0 0 204 474" xmlns="http://www.w3.org/2000/svg">
              <use xlinkHref="#beta" />
            </svg>
          </div>
          <div>
            <Pattern useSvgId="pattern3" />
          </div>
        </div>

        <div className="order-3">
          <h1 className="h1 heading heading--gutters">{title}</h1>

          <p className="body">{body.paragraph1}</p>

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

        <div className="order-2">
          <div className="page__letter hidden-sm" role="presentation">
            <div>
              <Pattern useSvgId="pattern2" />
            </div>
            <div id="beta-page" className="letter">
              <svg viewBox="0 0 204 474" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref="#beta" />
              </svg>
            </div>
            <div>
              <Pattern useSvgId="pattern3" />
            </div>
          </div>

          <p className="body" style={{ marginTop: '2em' }}>{body.paragraph2}</p>
          <p className="body">{body.paragraph3}</p>

          <h2 className="h1 heading heading--gutters" style={{ textAlign: 'center' }}>
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
