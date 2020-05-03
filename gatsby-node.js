const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

const locales = {
  el: {
    path: 'el',
    locale: 'Greek',
    default: true,
  },
  en: {
    path: 'en',
    locale: 'English',
  },
};

const hasPrevNextLinks = ['work-item', 'blog-post'];

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(
        sort: {
          fields: [frontmatter___type, frontmatter___date]
          order: ASC
        }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
              title
              titleEN
              description
              descriptionEN
              body {
                paragraph1
                paragraph2
                paragraph3
              }
              bodyEN {
                paragraph1
                paragraph2
                paragraph3
              }
              type
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach(({ node: { id, frontmatter: fm, fields} }, index) => {
      if (fm.templateKey != null) {
        let prev, next;

        Object.keys(locales).map(lang => {
          const pathname = fields.slug;
          const localizedPath = locales[lang].default ? pathname : locales[lang].path + pathname;
          const localizedTitle = locales[lang].default ? fm.title : fm.titleEN;
          const localizedDescription = locales[lang].default ? fm.description : fm.descriptionEN;
          const localizedBody = locales[lang].default ? fm.body : fm.bodyEN;

          /* Add a previous and next url to the work-item and blog-post pages */
          if (hasPrevNextLinks.includes(fm.templateKey)) {
            const nextNode = index === 0 ? false : posts[index - 1].node;
            const prevNode = index === posts.length - 1 ? false : posts[index + 1].node;

            if (prevNode && prevNode.frontmatter.type === fm.type) {
              prev = {
                to: locales[lang].default ? prevNode.fields.slug : locales[lang].path + prevNode.fields.slug,
                title:  locales[lang].default ? prevNode.frontmatter.title : prevNode.frontmatter.titleEN,
              };
            }

            if (nextNode && nextNode.frontmatter.type === fm.type) {
              next = {
                to: locales[lang].default ? nextNode.fields.slug : locales[lang].path + nextNode.fields.slug,
                title:  locales[lang].default ? nextNode.frontmatter.title : nextNode.frontmatter.titleEN,
              };
            }
          }

          console.log('localizedPath', localizedPath);
          return createPage({
            id,
            path: localizedPath,
            component: path.resolve(
              `src/templates/${String(fm.templateKey)}.js`
            ),
            context: {
              id,
              title: localizedTitle,
              description: localizedDescription,
              body: localizedBody,
              locale: lang,
              pathname,
              prev,
              next
            },
          })
        });
      }
    })
  })
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  return new Promise(resolve => {
    deletePage(page);

    Object.keys(locales).map(lang => {
      const localizedPath = locales[lang].default ? page.path : locales[lang].path + page.path;
      const pathname = page.path;
      return createPage({
        ...page,
        path: localizedPath,
        pathname,
        context: {
          locale: lang,
          pathname,
        },
      })
    });
    resolve()
  })
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
};
