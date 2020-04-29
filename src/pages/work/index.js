import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import WorkList from '../../components/WorkList';
import WorkPageTemplate from '../../templates/work-page';


class WorkPage extends Component {
  render() {
    const { markdownRemark: post } = this.props.data;
    return (
      <WorkPageTemplate
        title={post.frontmatter.title}
        content={post.frontmatter.body}
        list={<WorkList />}
      />
    )
  }
}

WorkPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WorkPage;

export const pageQuery = graphql`
    query WorkPageTemplate($locale: String) {
        markdownRemark(frontmatter: { templateKey: { eq: "work-page" }, locale: { eq: $locale } }) {
            frontmatter {
                title
                body
            }
        }
    }
`;
