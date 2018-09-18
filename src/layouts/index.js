import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './index.scss'
import { StaticQuery } from 'gatsby';


export default  ({children}) => (
  <StaticQuery 
    query={graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `}
  render={data => (
    <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <div
      className={'injected-page-content'}
    >
      {children}
    </div>
    <Footer />
  </div>
  )}
  
  />
)

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout

// export const query = graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
//`


// export default ({ children }) => (
//   +   <StaticQuery
//   +     query={graphql`
//   +       query LayoutQuery {
//   +         site {
//   +           siteMetadata {
//   +             title
//   +           }
//   +         }
//   +       }
//   +     `}
//   +     render={data => (
//   +       <>
//   +         <Helmet titleTemplate={`%s | ${data.site.siteMetadata.title}`} defaultTitle={data.site.siteMetadata.title} />
//   +         <div>
//   +           {children}
//   +         </div>
//   +       </>
//   +     )}
//   +   />
//   + )