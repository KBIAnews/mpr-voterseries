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
    <h1>Hi people</h1>
    <h1>Hi people</h1>
    <h1>Hi people</h1>
    <h1>Hi people</h1>
    <h1>Hi people</h1>
    <h1>Hi people</h1>

    <h1>Hi people</h1>
    <h1>Hi people</h1>
    <h1>Hi people</h1>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <h2>Index</h2>
    <ul
    className={"post-index"}>
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
        bg:file(relativePath: { eq: "peoplediag-03.png" }) {
            childImageSharp {
                sizes(maxWidth:3840, maxHeight: 2160) {
                    ...GatsbyImageSharpSizes
                }
            }
        }
    }

`

export default IndexPage