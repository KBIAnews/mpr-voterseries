import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({data}) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <h2>Index</h2>
    <ul>
      {data.allMarkdownRemark.edges.map(
        post => (
          <li key={post.node.id}>
            <Link
              to={post.node.frontmatter.path}>
              {post.node.frontmatter.title}
              </Link>
          </li>
        )
      )}
    </ul>
  </div>
)

export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark {
            edges {
                node {
                    id
                    html
                    frontmatter {
                        path
                        title
                    }
                }
            }
        }
        bg:file(relativePath: { eq: "cow.jpg" }) {
            childImageSharp {
                sizes(maxWidth:400, maxHeight: 250) {
                    ...GatsbyImageSharpSizes
                }
            }
        }
    }

`

export default IndexPage
/*
file(relativePath: { eq: "images/cow.jpg" }) {
            childImageSharp {
                sizes(maxWidth:400, maxHeight: 250) {
                    ...GatsbyImageSharpSizes
                }
            }
        }
*/