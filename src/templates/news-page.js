import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import NewsList from '../components/NewsList/NewsList';
import PageLetter from '../components/PageLetter';

const NewsPageTemplate = ({
  title,
  description,
  locale,
  helmet,
  }) => {
  return (
    <div className="page">
      {helmet}
      <div className="page__grid grid grid--news">
        <div  className="order-3">
          <PageLetter
            className="page__letter--right"
            id="ni"
            patternLeft="pattern3"
            patternRight="pattern2"
          />
        </div>

        <div className="order-2">
          <h1 className="h1 heading heading--gutters">{title}</h1>
          <p className="body">{description}</p>
        </div>
      </div>

      <NewsList locale={locale} />
    </div>
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
  data: PropTypes.object.isRequired,
};

export default MewsPage;
