import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const IndexPageTemplate = ({
  title,
  description,
  locale,
  helmet,
}) => (
  <>{helmet}</>
);

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  locale: PropTypes.string,
};

const IndexPage = ({ pageContext: { title, description, locale, pathname } }) => {
  return (
    <IndexPageTemplate
      title={title}
      description={description}
      locale={locale}
      pathname={pathname}
      helmet={
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Helmet>
      }/>
  )
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage
