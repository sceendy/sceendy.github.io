const { createFilePath } = require('gatsby-source-filesystem');
const path = require('path');

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages/posts' });
    let date = node.frontmatter.date;
    let parsedDate = new Date(node.frontmatter.date);
    const year = parsedDate.getFullYear();

    createNodeField({
      node,
      name: 'slug',
      value: 'blog' + slug
    });
    createNodeField({
      node,
      name: 'date',
      value: date
    });
    createNodeField({
      node,
      name: 'year',
      value: year
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug,
                date
              },
              frontmatter {
                title
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.map(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/layouts/post.js`),
          context: {
            slug: node.fields.slug,
            date: node.fields.date
          },
        })
      })
      resolve();
    })
  })
}