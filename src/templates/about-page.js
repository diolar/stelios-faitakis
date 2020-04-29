import React from 'react'
import PropTypes from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import bioImage from '../../static/img/bio-image.jpg';

const AboutPageTemplate = ({ title, paragraph1, paragraph2, paragraph3 }) => {
  return (
    <div className="container">
      <div className="row row--bio">
        <div className="column column--left">
          <div className="page-letter">
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
        </div>

        <div className="column column--right">
          <h1 className="page-title">{title}</h1>
          <p>{paragraph1}</p>
        </div>

        <p className="column column--left">{paragraph2}</p>

        <figure className="column column--right">
          <PreviewCompatibleImage imageInfo={{ image: bioImage, alt: 'stelios faitakis', style: { display: 'block', maxWidth: '100%' } }} />
          <figcaption>© Stella Mouzi, 2012</figcaption>
        </figure>

        <p className="column column--left">{paragraph3}</p>

      </div>
    </div>
  )
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

export default AboutPageTemplate;
