import React from 'react'
import { Link } from 'react-router-dom'
import { Role } from '../components/style/roleStyle.js'

const SelectRole = () => {
  // window.location.pathname.slice(1)
  return (
    <Role>
      <Link to="/CandidateSignup" className="candidate">
        <span>I am Job Seeker</span>
        <p>Looking For Job.</p>
      </Link>
      <Link to="/CompanySignup" className="company" >
        <span>I am Company</span>
        <p>Looking For Good Skilled Employees.</p>
      </Link>
    </Role>
  )
}

export default SelectRole
