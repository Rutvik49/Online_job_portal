import React from 'react'
import { Link } from 'react-router-dom'
import { Start } from '../components/style/starterStyle'

const getStarted = () => {
  return (
    <Start>
      <div className="header">
        <img src="images/logo.svg" alt="" />
      </div>
      <hr />
      <div className="body">
        <div className="texts">
          <h3>Looking For Job..!</h3>
          <h3>Wanna Grow Your Company..!</h3>
          <h3>Let's Get Started...</h3>
          <Link to="/selectRole" className="link">
            <button>Get Started</button>
          </Link>
        </div>
        <img src="images/frontPage_2.jpg" alt="" />
      </div>
    </Start>
  )
}

export default getStarted
