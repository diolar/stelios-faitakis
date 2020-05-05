import React from 'react';
import PropTypes from 'prop-types';
import WorkList from '../components/WorkList';
import Pattern from '../components/Pattern';

const WorkPageTemplate = ({ title, description, locale }) => {
  return (
    <div className="page">
      <div className="page__grid grid grid--work">
        <div>
          <div className="page__letter">
            <div>
              <Pattern useSvgId="pattern1" />
            </div>
            <div className="letter">
              <svg viewBox="0 0 204 474" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref="#epsilon" />
              </svg>
            </div>
            <div>
              <Pattern useSvgId="pattern2" />
            </div>
          </div>
        </div>
        <div>
          <h1 className="h1 heading heading--gutters">{title}</h1>
          <p className="body">{description}</p>
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
