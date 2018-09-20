import React from 'react'

import Headroom from 'react-headroom'

import {AudioContextConsumer} from './audio/audio-context'

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
        <AudioContextConsumer>
          {(context) => (
            <React.Fragment>
            <p>
              The button has been clicked {context.state.buttonClickedCount} times.
            </p>
            </React.Fragment>
          )}
        </AudioContextConsumer>
        </div>
      </Headroom>
      );
  }
}
  
export default Header
