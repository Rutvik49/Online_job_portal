import React from 'react'
import { Style } from './authStyle'
import { Link, useNavigate } from 'react-router-dom'

const Signin = (props) => {
  let navigate = useNavigate()
  function goback() {
    navigate(-1)
  }
  return (
      <Style>
        <div className="head">
          <img src="images/logo.svg" alt="" />
          <span className="welcome">Welcome To Online Job Portal</span>
          <hr />
        </div>
        <div className="card">
          <span className="signup">Sign In</span>
          <label for="email">Enter Email :</label>
          <input type="text" name="email" id="fn" />
          <label for="password">Enter Password :</label>
          <input type="password" name="password" id="fn" />
          <button type="submit" className="submit">
            Sign In
          </button>
          <span className="goto">Not Registered Yet ? : <Link onClick={goback}>Register</Link></span>
        </div>
      </Style>
  )
}

export default Signin
