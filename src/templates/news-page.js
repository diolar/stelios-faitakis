import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import NewsList from '../components/NewsList/NewsList';
import Pattern from '../components/Pattern';

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
        <div style={{ order: 3 }}>
          <div className="page__letter">
            <div>
              <Pattern useSvgId="pattern3" />
            </div>
            <div className="letter">
              <svg viewBox="0 0 204 474" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref="#ni" />
              </svg>
            </div>
            <div>
              <Pattern useSvgId="pattern4" />
            </div>
          </div>
        </div>

        <div style={{ order: 2}}>
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
