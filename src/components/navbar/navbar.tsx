import React from 'react'
import { Link } from 'react-router-dom'

import './navbar.css'

const Navbar: React.FC = () => {
  return (
    <div className="navbar">
      <Link to="/about">About</Link>
      <Link to="/main">Main</Link>
    </div>
  )
}

export default Navbar
