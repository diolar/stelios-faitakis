import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from './PreviewCompatibleImage'

const filters = [{
  value: 'mural',
  d: 'M60 1c32.584 0 59 26.415 59 59s-26.416 59-59 59C27.414 119 1 92.585 1 60S27.415 1 60 1zm0 2C28.52 3 3 28.52 3 60s25.52 57 57 57 57-25.52 57-57S91.48 3 60 3zm-.25 8c26.924 0 48.75 21.826 48.75 48.75S86.674 108.5 59.75 108.5 11 86.674 11 59.75 32.826 11 59.75 11zm46.4 54.501V65.5l.021-.176a46.5 46.5 0 01-.021.177zM60.52 36.487a4.914 4.914 0 110 9.828 4.914 4.914 0 010-9.828zM60.4 38.5a2.9 2.9 0 100 5.8 2.9 2.9 0 000-5.8zm45.796 26.61c-.002.003-.001 0-.001-.001h.001zm.002-.015l.015-.15a102.434 102.434 0 01-.015.15zm.073-.683c.02-.194.04-.427.063-.7l-.057.63c-.019.199-.04.398-.062.596l.056-.526zm-92.957.786l.012.099.022.203c-.01-.1-.022-.2-.034-.302zm93.031-1.613l.007-.085c-.005.055-.01.11-.013.161l.006-.076zm.007-.085l.049-.676c.066-1.016.099-2.04.099-3.074C106.5 33.93 85.57 13 59.75 13S13 33.93 13 59.75c0 1.033.033 2.058.1 3.074l.048.676h93.204zm-.202 2.001h-92.8c2.834 23.106 22.528 40.999 46.4 40.999s43.566-17.893 46.4-40.999zm-92.836-.303l-.009-.088a72.42 72.42 0 01-.157-1.61l.007.085c.044.54.097 1.078.16 1.613z',
  title: 'mural',
}, {
  value: 'painting',
  d: 'M59 0c32.584 0 59 26.415 59 59s-26.416 59-59 59C26.414 118 0 91.585 0 59S26.415 0 59 0zm0 2C27.52 2 2 27.52 2 59s25.52 57 57 57 57-25.52 57-57S90.48 2 59 2zm-.25 8c26.924 0 48.75 21.826 48.75 48.75S85.674 107.5 58.75 107.5 10 85.674 10 58.75 31.826 10 58.75 10zm0 2c-25.568 0-46.343 20.526-46.744 46H12v2h.016c.663 25.241 21.333 45.5 46.734 45.5 25.401 0 46.071-20.259 46.734-45.5h.016v-2l-.007-.001v-.022C105.082 32.514 84.312 12 58.75 12zm30.402 11.368c.295.239.514.41.657.516.123.09.292.254.508.491l.111.125L61.5 58l43.993-.001.007.751c0 .418-.005.835-.016 1.25H61l30 32.5-1.848 1.685L59 61 29.156 94.868 27 93V60H12.016a47.635 47.635 0 01-.01-2H27V24.5l1.02-.934L58.5 58h.5l30.152-34.632zM57 60H29v32l28-32zM29 28v30h26.5L29 28z',
  title: 'painting',
}, {
  value: 'paper',
  d: 'M60 1c32.584 0 59 26.415 59 59s-26.416 59-59 59C27.414 119 1 92.585 1 60S27.415 1 60 1zm0 2C28.52 3 3 28.52 3 60s25.52 57 57 57 57-25.52 57-57S91.48 3 60 3zm-.25 8c26.924 0 48.75 21.826 48.75 48.75S86.674 108.5 59.75 108.5 11 86.674 11 59.75 32.826 11 59.75 11zm0 2C33.93 13 13 33.93 13 59.75s20.93 46.75 46.75 46.75 46.75-20.93 46.75-46.75S85.57 13 59.75 13zm5.906.54l2.045.313 9.074 46.21-9.074 45.67-2.045.36 9.088-46.03-9.088-46.522zm-19.522 1.643l8.746 44.904-8.746 44.211-2.068-.621 8.804-43.615-8.804-44.186 2.068-.693zm40.921 6.815l2.613 1.938L98.022 60l-8.354 35.477-2.613 2.173 8.773-37.588-8.773-38.064zm-61.708 6.31l9.017 31.755-9.017 31.15L24 89.601l8.325-29.538L24 29.819l1.347-1.51z',
  title: 'paper',
}];

const WorkList = ({ data }) => {
  const { edges: cases } = data.allMarkdownRemark;
  const [type, setType] = useState(null);
  const toggleType = value => setType(type === value ? null : value);
  return (
    <div>
      <div className="type-filters">
        {filters.map(({title, value, d}) =>
          <div key={value}>
            <button
              type="button"
              onClick={() => toggleType(value)}
              className={`filter ${value === type ? 'active' : ''}`}
            >
              <span className="filter__icon">
                <span className="icon">
                  <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                    <path d={d} />
                  </svg>
                </span>
              </span>
              <span className="filter__title">{title}</span>
            </button>
          </div>

        )}
      </div>
      <div className="work-list">
        {cases &&
        cases.map(({ node: item }) => {
          const hidden = type !== null && type !== item.frontmatter.type;
          return (
            <article
              key={item.id}
              className="case"
              aria-hidden={hidden}
            >
              <PreviewCompatibleImage
                imageInfo={{
                  image: item.frontmatter.image,
                  alt: `featured image thumbnail for case ${item.frontmatter.title}`,
                }}
              />
              <Link to={item.fields.slug} className="case__meta">
                <div>
                  <svg className="case__icon" viewBox="0 0 228 228" xmlns="http://www.w3.org/2000/svg">
                    <path d="M114 2c61.856 0 112 50.144 112 112s-50.144 112-112 112S2 175.856 2 114 52.144 2 114 2zm0 2C53.25 4 4 53.249 4 114s49.249 110 110 110 110-49.249 110-110S174.751 4 114 4zm-.446 67c31.821 0 59.6 17.243 74.553 42.882-14.953 25.639-42.732 42.882-74.553 42.882-14.033 0-27.28-3.353-38.988-9.301A86.71 86.71 0 0139 113.882C53.954 88.243 81.732 71 113.554 71zm.001 2C82.587 73 55.553 89.438 41 113.88c8.135 13.663 20.17 24.825 34.613 32.013 11.393 5.67 24.285 8.867 37.942 8.867 30.968 0 58.003-16.438 72.555-40.88C171.558 89.438 144.523 73 113.555 73zm.687 14c15.046 0 27.243 12.197 27.243 27.243s-12.197 27.243-27.243 27.243C99.197 141.486 87 129.289 87 114.243S99.197 87 114.242 87zm-.002 2C100.3 89 89 100.302 89 114.245c0 13.943 11.3 25.245 25.24 25.245 13.94 0 25.24-11.302 25.24-25.245 0-13.943-11.3-25.245-25.24-25.245z"/>
                  </svg>
                  <div className="case__title">
                    {item.frontmatter.title}
                  </div>
                </div>
              </Link>
            </article>
          )
        })}
      </div>
    </div>
  )
};

WorkList.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query WorkListQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "work-item" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                type
                date(formatString: "YYYY")
                image {
                  childImageSharp {
                    fluid(maxWidth: 800, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <WorkList data={data} count={count} />}
  />
)
