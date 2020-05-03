import React from 'react';
import PropTypes from 'prop-types';
import BlogRoll from '../components/BlogRoll';

const NewsPageTemplate = ({
  title,
  description,
  }) => {
  return (
    <div className="container">
      <div className="row row--news">
        <div className="column column--right">
          <div className="page-letter">
            <div>
              <svg viewBox="0 0 178 474" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref="#pattern3" />
              </svg>
            </div>
            <div className="letter">
              <svg viewBox="0 0 204 474" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref="#ni" />
              </svg>
            </div>
            <div>
              <svg viewBox="0 0 178 474" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref="#pattern4" />
              </svg>
            </div>
          </div>
        </div>

        <div className="column column--left">
          <h1 className="page-title">{title}</h1>
          <p>{description}</p>
        </div>

      </div>
      <BlogRoll />
    </div>
  )
};

NewsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

const MewsPage = ({  pageContext: { title, description } }) => {
  return (
    <NewsPageTemplate
      title={title}
      description={description} />
  )
};

MewsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MewsPage;
