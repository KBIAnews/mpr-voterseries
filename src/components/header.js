import React from 'react'
import Link from 'gatsby-link'
import Headroom from 'react-headroom'

// Context Consumers
import {AudioContextConsumer} from './audio/audio-context'

// Custom Components
import AudioControlsComponent from './audio/audio-controls'

class Header extends React.Component {
  
  
  render(){
    return (
      <Headroom
        style={{
          color: '#fff'
        }}>
        <div
        className={'head-contain'}
        >
        <AudioControlsComponent />
        <div className="site-title">
        <Link to="/">Beyond the Ballot</Link>
        </div>
        <AudioContextConsumer>
          {(context) => (
            <React.Fragment>
            {/* <p>
              The button has been clicked {context.state.buttonClickedCount} times.
            </p> */}
            </React.Fragment>
          )}
        </AudioContextConsumer>
        </div>
      </Headroom>
      );
  }
}
  
export default Header
