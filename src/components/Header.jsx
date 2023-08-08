import React from 'react'
import PropTypes from 'prop-types'


function Header({text, bgColor, textColor}) {
  
  const headerStype = {
    backgroundColor: {bgColor}, color: {textColor}
  }

  return (
    <header style={headerStype}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'FeedBack UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
}

Header.prototypes = {
  text: PropTypes.string,
}

export default Header
