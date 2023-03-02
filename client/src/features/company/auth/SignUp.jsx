import React, { useState } from 'react'
import { Style } from '../../../components/style/authStyle'
import { Link,useNavigate  } from 'react-router-dom'

const CompanySignUp = () => {
  const navigate = useNavigate();
  let [Company, setCompany] = useState({
    company_id: '',
    company_name: '',
    company_email: '',
    password: '',
    OTP: '',
  })
  function handleInput(e) {
    setCompany({ ...Company, [e.target.name]: e.target.value })
  }
  // console.log(Company)
  async function getSignUp() {
    const res = await fetch('http://localhost:5000/api/auth/companysignup', {
      method: 'POST',
      body: JSON.stringify(Company),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    // console.log(await res.json());
    let data= await res.json()
    console.log(data.authtoken);
    if(data.authtoken){
      localStorage.setItem('authtoken',data.authtoken)
      navigate('/companyHome')
    }
  }

  return (
    <Style>
      <div className="head">
        <img src="images/logo.svg" alt="logo" className="logo" />
        <span className="welcome">Welcome To Online Job Portal</span>
      </div>
      <div className="card">
        <span className="signup">Let's Have Onbord...</span>
        <label for="company_id">Enter Company ID :</label>
        <input type="text" name="company_id" id="id" onChange={handleInput} />

        <label for="name">Enter Company Name :</label>
        <input
          type="text"
          name="company_name"
          id="name"
          onChange={handleInput}
        />

        <label for="email">Enter Email :</label>
        <input
          type="text"
          name="company_email"
          id="fn"
          onChange={handleInput}
        />

        <label for="password">Enter Password :</label>
        <input type="password" name="password" id="fn" onChange={handleInput} />
        <label for="otp">Enter OTP :</label>
        <div className="otp">
          <input
            className="otpinp"
            type="number"
            name="OTP"
            id="fn"
            onChange={handleInput}
          />
          <button className="sendotp">Send OTP</button>
        </div>
        <button type="submit" className="submit" onClick={getSignUp}>
          Sign Up
        </button>
        <span className="goto">
          already Signed Up ? :<Link to="/SignIn">Sign In</Link>
        </span>
      </div>
    </Style>
  )
}

export default CompanySignUp
