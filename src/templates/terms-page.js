import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet';
import { HTMLContent } from '../components/Content'
import Page from '../components/Page';

export const TermsPageTemplate = ({ title, content, helmet, locale }) => {
  return (
    <Page locale={locale}>
      {helmet}
      <h1 className="h2 center">{title}</h1>
      <HTMLContent className="terms" content={content} />
    </Page>
  )
};

TermsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.object,
};

const TermsPage = ({ pageContext: { title, description, content, locale } }) => {
  return (
    <TermsPageTemplate
      title={title}
      content={content}
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

TermsPage.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default TermsPage;
