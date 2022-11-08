import React from 'react'
import "./Nav.css"

function Nav() {
  return (
    <div className="navbar-container">
      <ul className="left_section_navbar">
        <li>HOME</li>
        <li>EXPLORE</li>
        <li>SEARCH</li>
        <li>PROFILE</li>
        <li>ABOUT</li>
      </ul>
      <span>LOGO</span>
    </div>
  )
}

export default Nav