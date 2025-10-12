// const { createFilePath } = require('gatsby-source-filesystem');
// const path = require('path');

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions;

//   if (node.internal.type === 'MarkdownRemark') {
//     const slug = createFilePath({ node, getNode, basePath: 'pages/posts' });
//     let date = node.frontmatter.date;
//     let parsedDate = new Date(node.frontmatter.date);
//     const year = parsedDate.getFullYear();

//     createNodeField({
//       node,
//       name: 'slug',
//       value: 'blog' + slug
//     });
//     createNodeField({
//       node,
//       name: 'date',
//       value: date
//     });
//     createNodeField({
//       node,
//       name: 'year',
//       value: year
//     });
//   }
// };

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions;
//   return new Promise((resolve, reject) => {
//     const blogPostTemplate = path.resolve(`src/templates/post.js`);
//     resolve(
//       graphql(`{
//         allMarkdownRemark {
//           edges {
//             node {
//               fields {
//                 slug,
//                 date
//               },
//               frontmatter {
//                 title
//               }
//             }
//           }
//         }
//       }
//     `).then(result => {
//       if (result.errors) {
//         reject(result.errors);
//       }

//       const posts = result.data.allMarkdownRemark.edges;

//       posts.forEach(({ node }) => {
//         createPage({
//           path: node.fields.slug,
//           component: blogPostTemplate,
//           context: {
//             slug: node.fields.slug,
//             date: node.fields.date
//           },
//         })
//       })
//       return
//     }))
//   })
// }