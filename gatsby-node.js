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
              tags {
                tag
                title {
                  el
                  en
                }
              }
              title
              titleEN
              description
              descriptionEN
              type
              bio {
                paragraph1 {
                  el
                  en
                }
                paragraph2 {
                  el
                  en
                }
                paragraph3 {
                  el
                  en
                }
              }
              timelineTitle {
                el
                en
              }
              terms {
                elTerms {
                  childMarkdownRemark {
                    html
                  }
                }
                enTerms {
                  childMarkdownRemark {
                    html
                  }
                }
              }
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
    let tags = [];

    // Create Tags pages
    posts.forEach(({ node: { id, frontmatter: fm } }, index) => {
      if (fm.templateKey != null) {
        Object.keys(locales).map(lang => {
          if (_.get(fm, `tags`)) {
            tags = tags.concat(fm.tags)
          }

          tags = _.uniqBy(tags, 'tag');
          // Make tag pages
          tags.forEach(({ tag, title }) => {
            const tagPath = `/tags/${_.kebabCase(tag)}/`;
            const localizedPath = locales[lang].default ? tagPath : locales[lang].path + tagPath;

            createPage({
              id,
              path: localizedPath,
              component: path.resolve(`src/templates/tags-page.js`),
              context: {
                tag: tag,
                title: title[lang],
                locale: lang,
                pathname: tagPath,
              },
            })
          })
        })
      }
    });

    posts.forEach(({ node: { id, frontmatter: fm, fields} }, index) => {
      if (fm.templateKey != null) {
        let prev, next;
        let localizedContext = {};

        Object.keys(locales).map(lang => {
          const pathname = fields.slug;
          const localizedPath = locales[lang].default ? pathname : locales[lang].path + pathname;
          const localizedTitle = locales[lang].default ? fm.title : fm.titleEN;
          const localizedDescription = locales[lang].default ? fm.description : fm.descriptionEN;

          if (fm.templateKey === 'about-page') {
            localizedContext = {
              ...localizedContext,
              ...{ content: {
                paragraph1: fm.bio.paragraph1[lang],
                paragraph2: fm.bio.paragraph2[lang],
                paragraph3: fm.bio.paragraph3[lang]}
              }
            };
            localizedContext = {...localizedContext, ...{timelineTitle: fm.timelineTitle[lang]}}
          }

          if (fm.templateKey === 'terms-page') {
            localizedContext = {
              ...localizedContext,
              ...{ content: fm['terms'][`${[lang]}Terms`].childMarkdownRemark.html}
            };
          }

          if (fm.templateKey === 'news-page') {
            const localizedTags = tags.map(({ tag, title }) => ({
              tag,
              title: title[lang]
            }));

            localizedContext = {
              ...localizedContext,
              tags: localizedTags,
            };
          }

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
              locale: lang,
              pathname,
              prev,
              next,
              ...localizedContext,
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
