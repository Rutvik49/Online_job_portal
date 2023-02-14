import React from 'react'
import { Style } from '../../../components/style'
import { Link } from 'react-router-dom'

const CandidateSignUp = () => {
  return (
      <Style>
        <div className="head">
          <img src="images/logo.svg" alt="" />
          <span className="welcome">Welcome To Online Job Portal</span>
          <hr />
        </div>
        <div className="card">
          <span className="signup">Let's Have Onbord...</span>
          <label for="fullname">Enter Fullname :</label>
          <input type="text" name="fullname" id="fn" />
          <label for="email">Enter Email :</label>
          <input type="text" name="email" id="fn" />
          <label for="skills">Select Skills :</label>
          <select name="top_skills" id="top_skills">
            <option value="react">react</option>
            <option value="node">node</option>
            <option value="javaScript">javaScript</option>
            <option value="python">python</option>
          </select>
          <label for="number">Enter Mobile No :</label>
          <input type="number" name="number" id="fn" />
          <label for="password">Enter Password :</label>
          <input type="password" name="password" id="fn" />
          <label for="otp">Enter OTP :</label>
          <div className="otp">
            <input className="otpinp" type="number" name="otp" id="fn" />
            <button className="otp">Send OTP</button>
          </div>
          <button type="submit" className='submit'>Sign Up</button>
          <span className='goto'>already Signed Up ? : <Link to = '/SignIn'>Sign In</Link></span>
        </div>
      </Style>
  )
}

export default CandidateSignUp
