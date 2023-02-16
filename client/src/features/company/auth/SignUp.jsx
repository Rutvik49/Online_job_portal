import React from 'react'
import { Style } from '../../../components/style/authStyle'
import { Link } from 'react-router-dom'

const CompanySignUp = () => {
  return (
    <Style>
      <div className="head">
        <img src="images/logo.svg" alt="" />
        <span className="welcome">Welcome To Online Job Portal</span>
        <hr />
      </div>
      <div className="card">
        <span className="signup">Let's Have Onbord...</span>
        <label for="company_id">Enter Company ID :</label>
        <input type="text" name="company_id" id="id" />

        <label for="name">Enter Company Name :</label>
        <input type="text" name="company_name" id="name" />

        <label for="email">Enter Email :</label>
        <input type="text" name="email" id="fn" />

        <label for="password">Enter Password :</label>
        <input type="password" name="password" id="fn" />
        <label for="otp">Enter OTP :</label>
        <div className="otp">
          <input className="otpinp" type="number" name="otp" id="fn" />
          <button className="otp">Send OTP</button>
        </div>
        <button type="submit" className="submit">
          Sign Up
        </button>
        <span className="goto">
          already Signed Up ? :
          <Link to="/SignIn">Sign In</Link>
        </span>
      </div>
    </Style>
  )
}

export default CompanySignUp
