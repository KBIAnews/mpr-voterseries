import React from 'react'
import Link from 'gatsby-link'

import Headroom from 'react-headroom'

class Header extends React.Component {
  
  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <Headroom>
        <div
        className={'head-contain'}
        >
        
        </div>
      </Headroom>
      );
  }
}
  
export default Header
