import React from 'react'
import BlogRoll from '../../components/BlogRoll'


const BlogIndexPage = ({ title = 'Νεα', content = '' }) => (
  <div className="container">
    <div className="row row--news">
      <div className="column column--right">
        <div className="page-letter">
          <div>
            <svg viewBox="0 0 178 474" xmlns="http://www.w3.org/2000/svg">
              <use xlinkHref="#pattern3" />
            </svg>
          </div>
          <div className="letter">
            <svg viewBox="0 0 204 474" xmlns="http://www.w3.org/2000/svg">
              <use xlinkHref="#ni" />
            </svg>
          </div>
          <div>
            <svg viewBox="0 0 178 474" xmlns="http://www.w3.org/2000/svg">
              <use xlinkHref="#pattern4" />
            </svg>
          </div>
        </div>
      </div>

      <div className="column column--left">
        <h1 className="page-title">{title}</h1>
        <p>{content}</p>
      </div>

    </div>
    <BlogRoll />
  </div>
);

export default BlogIndexPage;