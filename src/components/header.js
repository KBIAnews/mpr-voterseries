import React from 'react'

import Headroom from 'react-headroom'

import {AudioContextConsumer} from './audio/audio-context'

class Header extends React.Component {
  
  
  render(){
    return (
      <Headroom>
        <div
        className={'head-contain'}
        >
        <AudioContextConsumer>
          {(context) => (
            <p>
              {typeof context}
            </p>
          )}
        </AudioContextConsumer>
        </div>
      </Headroom>
      );
  }
}
  
export default Header
