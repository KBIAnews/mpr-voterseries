import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'

// Responsive Audio Player
import AudioPlayer from 'react-responsive-audio-player';

export default function Template({data}){
  const {markdownRemark: post} = data;
  return (
    <article>
      <Helmet 
      title={`${post.frontmatter.title} - Beyond the Banner`}
      />
      <header>
        <h1>{post.frontmatter.title}</h1>
        <p className="credit">
        {
          post.frontmatter.author && (
            <React.Fragment>
              by {post.frontmatter.author}{
                post.frontmatter.station && (
                  <React.Fragment>
                    , {post.frontmatter.station}&nbsp;
                  </React.Fragment>
                )
              }
            </React.Fragment>
          )
        }
        {
          post.frontmatter.editor && (
            <React.Fragment>
              |&nbsp;Edited by {post.frontmatter.editor}
            </React.Fragment>
          )
        }
        </p>
        <AudioPlayer 
        playlist={[
          {
            url: post.frontmatter.audio,
            title: post.frontmatter.title
          }
        ]}
        />
      </header>
      <section dangerouslySetInnerHTML={{__html:post.html}}/>
    </article>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!){
      markdownRemark(frontmatter: { path: { eq: $path } }){
          html
          frontmatter {
              path
              title
              author
              station
              editor
              audio
          }
      }
  }
`
