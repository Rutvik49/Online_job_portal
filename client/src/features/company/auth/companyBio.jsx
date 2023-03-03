import React, { useState } from 'react'
import { Style } from '../../../features/candidate/auth/bioStyle'
import { useNavigate } from 'react-router-dom'

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
      resolve(fileReader.result)
    }
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
}

const CompanyBio = () => {

  const navigate = useNavigate();
  const [form, setForm] = useState({
    logo: '',
    website: '',
    location: '',
    description: '',
    companySize: '',
  })
  const handleChange = async (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    console.log(form)
  }
  const handleLogo = async (e) => {
    const file = e.target.files[0]
    const base64 = await convertToBase64(file)
    console.log(base64)
    setForm({ ...form, logo: base64 })
  }
  const submitorm = async () => {
    const res = await fetch('http://localhost:5000/api/addcompanybio', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json',
        'authtoken':localStorage.getItem('authtoken')
      },
    })
    // console.log(await res.json());
    let data= await res.json()
    console.log(data);
    if(data.check){
      navigate('/companyHome')
    }
  }

  return (
    <Style>
      <div className="head">
        <img src="images/logo.svg" alt="" />
      </div>
      <div className="card">
        <span className="signup">Setup Company Profile</span>
        <label className="profile">
          <input
            type="file"
            className="upload"
            name="logo"
            onChange={handleLogo}
          />
          <img src={form.logo} alt="" className="profile" />
        </label>
        <label for="website" className="username website">
          Enter Company Website :
        </label>
        <input type="url" name="website" id="cb" onChange={handleChange} />
        <label for="bio" className="bio location">
          Enter Location :
        </label>
        <input type="text" name="location" id="cb" onChange={handleChange} />
        <label for="bio" className="bio">
          Describe Company :
        </label>
        <textarea
          type="textarea"
          name="description"
          id="bio"
          onChange={handleChange}
        />
        <label for="size" className="bio companySize">
          Company Size :
        </label>
        <input
          type="number"
          name="companySize"
          id="cb"
          onChange={handleChange}
        />
        {/* <Link to="/companyHome" className="link"> */}
        <button type="submit" className="submit" onClick={submitorm}>
          Get Started
        </button>
        {/* </Link> */}
      </div>
    </Style>
  )
}

export default CompanyBio
