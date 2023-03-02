import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { NavStyle } from '../../components/style/navStyle'

const Navbar = () => {
  const navigate = useNavigate()
  function logout() {
    localStorage.clear()
    navigate('/')
  }
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
        <li onClick={logout}>Logout</li>
      </ul>
    </NavStyle>
  )
}

export default Navbar
