/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`);
const slugify = require('slugify');

// Adapted from the Gatsby tutorial
// https://www.gatsbyjs.org/tutorial/part-seven/
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `blogPosts` && node.id != 'dummy') {
    const slug = slugify(node.title, { lower: true, strict: true });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query BlogPostsQuery {
      allBlogPosts {
        edges {
          node {
            id
            title
            authors
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allBlogPosts.edges
    .filter(({ node }) => {
      return node.id !== 'dummy';
    })
    .forEach(({ node }) => {
      createPage({
        path: `/post/${node.fields.slug}`,
        component: path.resolve(`./src/templates/blog-post.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          postId: node.id,
        },
      });
    });
};
