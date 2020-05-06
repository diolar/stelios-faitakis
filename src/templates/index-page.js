import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Page from '../components/Page';

const IndexPageTemplate = ({locale, helmet }) => (
  <Page locale={locale} isHomePage>
    {helmet}
  </Page>
);

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  locale: PropTypes.string,
};

const IndexPage = ({ pageContext: { title, description, locale } }) => {
  return (
    <IndexPageTemplate
      locale={locale}
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
