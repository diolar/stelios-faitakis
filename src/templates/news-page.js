import React from 'react';
import PropTypes from 'prop-types';
import BlogRoll from '../components/BlogRoll';
import Helmet from 'react-helmet';

const NewsPageTemplate = ({
  title,
  description,
  helmet,
  }) => {
  return (
    <>
      {helmet}
      <div className="grid grid--news">
        <div>
          <h1 className="h1">{title}</h1>
          <p>{description}</p>
        </div>

        <div>
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
      </div>

      <BlogRoll />
    </>
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
      description={description}
      helmet={
        <Helmet>
          <title>{title}</title>
          <meta
            name="description"
            content={description}
          />
        </Helmet>
      }/>
  )
};

MewsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MewsPage;
