import React from 'react'
import Typed from 'react-typed'
import './Header.css'

function Header() {
  return (
    <div className='main-info'>
      <h1>What am I ?</h1>
      <Typed
        strings={[
            "",
            "A software engineer",
            "Also known as an",
            "Front-end developer",
            "Back-end developer",
            "Full stack developer",
            "OR!!",
            "A coder",
            " "," "]}
            typeSpeed={40}
            backSpeed={50}
            loop
        /> 
                
    </div>
  )
}

export default Header
