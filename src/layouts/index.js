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
          { name: 'description', content: 'Find out what Missouri voters are really looking for in the November midterm election.' },
          { name: 'og-image', content: 'https://s3.amazonaws.com/media.kbia.org/2018/beyond-ballot-media/patternonly.png'},
          { name: 'keywords', content: 'elections' }
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
    
    