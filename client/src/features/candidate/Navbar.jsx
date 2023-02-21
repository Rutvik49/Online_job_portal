import React from 'react'
import { Link } from 'react-router-dom'
import { NavStyle } from '../../components/style/navStyle'

const Navbar = () => {
  return (
    <NavStyle>
      <img src="images/logo.svg" alt="" />
      <ul>
        <li>
          <input type="text" name="search" id="search" placeholder="Search" />
        </li>
        <Link to="/CandidateHome" className="link">
          <li>Home</li>
        </Link>
        <Link to="/jobs" className="link">
          <li>Jobs</li>
        </Link>
        <Link to="/candidatehome" className="link">
          <li>Applied Jobs</li>
        </Link>
        <Link to="/candidatehome" className="link">
          <li>Message</li>
        </Link>
        <Link to="/candidateProfile" className="link">
          <li>Profile</li>
        </Link>
      </ul>
    </NavStyle>
  )
}

export default Navbar
