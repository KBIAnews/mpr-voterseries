import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './index.scss'
import { StaticQuery } from 'gatsby';

import {AudioContextProvider} from '../components/audio/audio-context'


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
    <AudioContextProvider value={{}}>
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
    </AudioContextProvider>
    )}
    
    />
    )
    