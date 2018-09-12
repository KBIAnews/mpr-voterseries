import React from 'react'
import Link from 'gatsby-link'

import Headroom from 'react-headroom'

const Header = ({ siteTitle }) => (
  <Headroom>
  <div
    style={{
      background: '#444',
      marginBottom: '1.45rem',
    }}
  >
  
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1rem 1rem',
      }}
    >
      {/* <h1 style={{ margin: 0,
                  fontSize: '1rem' }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1> */}
    </div>
  </div>
  </Headroom>
)

export default Header
