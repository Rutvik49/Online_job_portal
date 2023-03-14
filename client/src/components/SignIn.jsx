import React, { useState } from 'react'
import { Style } from './style/authStyle'
import { Link, useNavigate } from 'react-router-dom'

const Signin = (props) => {
  let navigate = useNavigate()
  function goback() {
    navigate(-1)
  }
  let [login, setLogin] = useState({
    email: '',
    password: ''
  })
  function handleChange(e){
    setLogin({...login,[e.target.name]:e.target.value})
  }

  async function getLogin(){
    const res=await fetch('http://localhost:5000/api/auth/companysignin',{
      method:'POST',
      body: JSON.stringify(login),
      headers: {
        'Content-Type': 'application/json',
      }
    })
    let data= await res.json()
    // console.log(data);
    if(data.authtoken){
      localStorage.setItem('authtoken',data.authtoken)
      navigate('/companyHome')
    }

  }

  return (
      <Style>
        <div className="head">
          <img src="images/logo.svg" alt="logo" className='logo' />
        </div>
        <div className="card">
          <span className="signup">Sign In</span>
          <label for="email">Enter Email :</label>
          <input type="text" name="email" onChange={handleChange} id="fn" />
          <label for="password">Enter Password :</label>
          <input type="password" name="password" onChange={handleChange} id="fn" />
          <button type="submit" className="submit" onClick={getLogin}>
            Sign In
          </button>
          <span className="goto">Not Registered Yet ? : <Link onClick={goback}>Register</Link></span>
        </div>
      </Style>
  )
}

export default Signin
