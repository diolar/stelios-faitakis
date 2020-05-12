import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import NewsList from '../components/NewsList/NewsList';
import PageLetter from '../components/PageLetter';
import Page from '../components/Page';
import {pattern3, pattern4} from '../constants/patterns';
import Ni from '../components/lettersSvg/Ni';

const NewsPageTemplate = ({
  title,
  description,
  locale,
  helmet,
  }) => {
  return (
    <Page locale={locale}>
      {helmet}
      <div className="page__grid grid grid--news">
        <div  className="order-3">
          <PageLetter
            patternLeft={pattern3}
            patternRight={pattern4}
            className="page__letter--right"
          >
            <Ni />
          </PageLetter>
        </div>

        <div className="order-2 fade">
          <h1 className="h1 heading heading--gutters">{title}</h1>
          <p className="body">{description}</p>
        </div>
      </div>

      <div className="fade">
        <NewsList locale={locale} />
      </div>
    </Page>
  )
};

NewsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

const MewsPage = ({  pageContext: { title, description, locale } }) => {
  return (
    <NewsPageTemplate
      title={title}
      description={description}
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

MewsPage.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default MewsPage;
