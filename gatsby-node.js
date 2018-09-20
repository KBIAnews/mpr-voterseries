/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = ({ actions, graphql }) => {
  const {createPage} = actions;
  const postTemplate = path.resolve('src/templates/post.js');
  return graphql(`{
    allMarkdownRemark {
      edges {
        node {
          fileAbsolutePath
          html
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  }`).then( result => {
    if(result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allMarkdownRemark.edges.forEach(
      ({node}) => {
        createPage({
          path: node.frontmatter.path,
          enclosingDirectory: node.fileAbsolutePath.split("\/").reverse()[1],
          component: postTemplate
        })
      }
    )
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
