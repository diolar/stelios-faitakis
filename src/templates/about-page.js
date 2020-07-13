import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby';
import Link from 'gatsby-plugin-transition-link';
import Helmet from 'react-helmet';
import Page from '../components/Page';
import Timeline from '../components/Timeline';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import PageLetter from '../components/PageLetter';
import Beta from '../components/lettersSvg/Beta';
import { pattern2, pattern3 } from '../constants/patterns';
import Icon from '../components/Icon';
import { iconPublications, iconCV } from '../constants/svg'

export const AboutPageTemplate = ({ title, body, image, timeline, helmet, publications, cv,  locale }) => {
  return (
    <Page locale={locale}>
      {helmet}
      <div className="page__grid grid grid--bio">
        <PageLetter
          patternLeft={pattern2}
          patternRight={pattern3}
          className="page__letter--left hidden-lg"
        >
          <Beta />
        </PageLetter>

        <div className="order-3 fade">
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
          <PageLetter
            patternLeft={pattern2}
            patternRight={pattern3}
            className="page__letter--left visible-md"
          >
            <Beta />
          </PageLetter>

          <div className="fade">
            <p className="body" style={{ marginTop: '2em' }}>{body.paragraph2}</p>
            <p className="body">{body.paragraph3}</p>

            {(publications || cv) && (
              <div className="icon-list">
                {cv && (
                  <a className="h3" href={cv} target="_blank" rel="noopener noreferrer">
                    <Icon {...iconCV} />
                    <div className="heading heading--gutters heading--center">
                      {locale === 'en' ? 'Curriculum Vitae' :  'Πλήρες Βιογραφικό'}
                    </div>
                  </a>
                )}

                {publications && (
                  <Link className="h3" to={`/tags/${publications}`}>
                    <Icon {...iconPublications} />
                    <div className="heading heading--gutters heading--center">
                      {locale === 'en' ? 'Publications' :  'Δημοσιεύσεις'}
                    </div>
                  </Link>
                )}

              </div>
            )}

            <h2 className="h1 heading heading--gutters heading--center">
              {timeline.title}
            </h2>

            <Timeline events={timeline.events} />
          </div>

          <div className="visually-hidden">
            <svg id="link-icon" className="stroked-icon" viewBox="0 0 85 148" xmlns="http://www.w3.org/2000/svg">
              <path d="M44.875,1 L40.125,1 C35.375,17 33,29 33,37 C33,45 35.375,57 40.125,73 L44.875,73 C49.625,61 52,49 52,37 C52,25 49.625,13 44.875,1 Z" />
              <path d="M44.875,75 L40.125,75 C35.375,91 33,103 33,111 C33,119 35.375,131 40.125,147 L44.875,147 C49.625,135 52,123 52,111 C52,99 49.625,87 44.875,75 Z" />
            </svg>
          </div>
        </div>
      </div>
    </Page>
  )
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.object,
  image: PropTypes.object,
};

const AboutPage = ({ data, pageContext: { title, description, content, timelineTitle, locale } }) => {
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
      publications={post.frontmatter.publications}
      cv={post.frontmatter.cv}
      locale={locale}
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
                publications
                cv
            }
        }
    }
`;
