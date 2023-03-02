import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { NavStyle } from '../../components/style/navStyle'
const Navbar = () => {
  const navigate = useNavigate()
  // style={{height: '13vh', display: 'block'}}
  function logout() {
    localStorage.clear()
    navigate('/')
  }
  return (
    <div className="main">
      <NavStyle>
        <img src="images/logo.svg" alt="" />
        <ul>
          <li>
            <input type="text" name="search" id="search" placeholder="Search" />
          </li>
          <Link to="/CompanyHome" className="link">
            <li>Home</li>
          </Link>
          <Link to="/TalentedEmployees" className="link">
            <li>Talented Employees</li>
          </Link>
          <Link to="/JobApplication" className="link">
            <li>Job Applications</li>
          </Link>
          <Link to="/companyHome" className="link">
            <li>Message</li>
          </Link>
          <Link to="/CompanyProfile" className="link">
            <li>Profile</li>
          </Link>
          <li onClick={logout}>Logout</li>
        </ul>
      </NavStyle>
      ;
    </div>
  )
}

export default Navbar
