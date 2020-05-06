import React from 'react';
import PropTypes from 'prop-types';
import WorkList from '../components/WorkList';
import PageLetter from '../components/PageLetter';
import Page from '../components/Page';

const WorkPageTemplate = ({ title, description, locale }) => {
  return (
    <Page locale={locale}>
      <div className="page__grid grid grid--work">
        <div>
          <PageLetter
            className="page__letter--left"
            id="epsilon"
            patternLeft="pattern1"
            patternRight="pattern2"
          />
        </div>
        <div>
          <h1 className="h1 heading heading--gutters">{title}</h1>
          <p className="body">{description}</p>
        </div>
      </div>
      <WorkList locale={locale} />
    </Page>
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
  pageContext: PropTypes.object.isRequired,
};

export default WorkPage;
