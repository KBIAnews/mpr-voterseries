import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import FullBanner from '../components/full-banner';

const IndexPage = ({data}) => (
  <div>
      <Helmet 
      title="Home - Beyond the Ballot"
      />
    <FullBanner gatsImage={data.bg.childImageSharp}/>
    <div className="post-index-container">
    {/* <h2>Explore All Stories</h2> */}
    <ul
    className={"post-index"}>
      {data.allMarkdownRemark.edges.map(
        post => (
          <li key={post.node.id}>
            <Link
              to={post.node.frontmatter.path}>
              <h3>{post.node.frontmatter.title}</h3>
              </Link>
          </li>
        )
      )}
    </ul>
    </div>
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
        bg:file(relativePath: { eq: "pattern.png" }) {
            childImageSharp {
                sizes(maxWidth:3840, maxHeight: 2160) {
                    ...GatsbyImageSharpSizes
                }
            }
        }
    }

`

export default IndexPage