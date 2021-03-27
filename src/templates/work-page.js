import React, {useState} from 'react';
import PropTypes from 'prop-types';
import WorkList from '../components/WorkList';
import PageLetter from '../components/PageLetter';
import Page from '../components/Page';
import {pattern1, pattern2} from '../constants/patterns';
import Epsilon from '../components/lettersSvg/Epsilon';
import Icon from '../components/Icon';
import {selectArrow} from '../constants/svg';

const WorkPageTemplate = ({ title, description, locale }) => {
  const [expanded, setExpanded] = useState(false);

  const onExpand = () => {
    if (expanded) {
      window.scrollTo({
        top: 0,
        left: 0,
      })
    }

    setExpanded(!expanded);
  }

  return (
    <Page locale={locale}>
      <div className="page__grid grid grid--work">
        <div>
          <PageLetter
            patternLeft={pattern1}
            patternRight={pattern2}
            className="page__letter--left"
          >
            <Epsilon />
          </PageLetter>
        </div>
        <div className="fade">
          <h1 className="h1 heading heading--gutters">{title}</h1>
          <div className={`expandable ${expanded ? 'expanded': ''}`}>
            <p className="body">{description}</p>
            <button className="button-reset" onClick={onExpand}>
              <Icon {...selectArrow} />
            </button>
          </div>
        </div>
      </div>
      <div className="fade">
        <WorkList locale={locale} />
      </div>
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
