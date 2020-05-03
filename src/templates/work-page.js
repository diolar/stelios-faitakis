import React from 'react';
import PropTypes from 'prop-types';
import WorkList from '../components/WorkList';

const WorkPageTemplate = ({ title, description, locale }) => {
  return (
    <div className="container">
      <div className="work-grid">
        <div className="work-grid__letter">
          <div className="page-letter">
            <div>
              <svg viewBox="0 0 178 474" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref="#pattern1" />
              </svg>
            </div>
            <div className="letter">
              <svg viewBox="0 0 204 474" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref="#epsilon" />
              </svg>
            </div>
            <div>
              <svg viewBox="0 0 178 474" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref="#pattern2" />
              </svg>
            </div>
          </div>
        </div>
        <div className="work-grid__content">
          <h1 className="page-title">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
      <WorkList locale={locale} />
    </div>
  )
};

WorkPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

const WorkPage = ({ pageContext: { title, description, locale } }) => {
  return (
    <WorkPageTemplate
      title={title}
      description={description}
      locale={locale}
    />
  )
};

WorkPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WorkPage;
