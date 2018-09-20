import React from 'react'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'
import './index.scss'
import { StaticQuery } from 'gatsby';
import { graphql } from 'gatsby'

import {AudioContextProvider} from '../components/audio/audio-context'

export default class Layout extends React.Component {

  constructor(props){
    super(props);
    console.log("new layout")
  }

  render(){
    return (
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
        <AudioContextProvider>
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
        {this.props.children}
        </div>
        <Footer />
        </div>
        </AudioContextProvider>
        )}
        
        />
        )
      }
    }
    
    