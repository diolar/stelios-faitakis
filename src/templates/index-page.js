import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const IndexPageTemplate = ({
  title,
  description,
  locale
}) => (
  <div>
    <Link to={locale === 'el' ? '/en' : '/'}>
      {locale}
    </Link>
    <h1>
      {title}
    </h1>
    <h3>
      {description}
    </h3>
  </div>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  locale: PropTypes.string,
}

export default IndexPageTemplate;
