import React from 'react'
import { Link } from 'react-router-dom'

import './about.css'

const About: React.FC = () => {
  return (
    <div>
      <div>about page</div>
      <Link to="/main">Back to Todos</Link>
    </div>
  )
}

export default About
