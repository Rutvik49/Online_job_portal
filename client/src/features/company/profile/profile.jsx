import React, { useState,useEffect } from 'react'
import { Style,CardStyle } from './style.js'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

const Profile = () => {

  let [form,setForm]=useState({
    status: "sucess",
    company_name: "name",
    company_email: "email",
    companyBio: {
        _id: "",
        companyID: "",
        logo: "",
        website: "web",
        location: "location",
        description: "description",
        companySize: 0,
        __v: 0
    }
})
localStorage.setItem('logo',form.companyBio.logo)

let [job,setJob]=useState(
  {
    company_name: '',
    job_role: '',
    location:'',
    require_skills: '',
    job_description: '',
    min_salary: '',
    max_salary: '',
  }
)

function handleInput(e){
 setJob({...job, [e.target.name]: e.target.value })
}

async function postJob(){
  console.log(job);
  const res = await fetch('http://localhost:5000/api/postjob', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authtoken':localStorage.getItem('authtoken')
      },
      body:JSON.stringify(job)
    })
    let data= await res.json()
    if(data.status){
      console.log(data);
    }
    
}

useEffect(() => {
  const GetCompanyProfile = async () => {
    const res = await fetch('http://localhost:5000/api/getcompanybio', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authtoken':localStorage.getItem('authtoken')
      },
    })
    let data= await res.json()
    if(data.status){
      console.log(data);
      setForm(data)
    }
  }
  GetCompanyProfile()
  return () => {
  };
}, []);

  return (
    <Style className="container" style={{marginTop: '7%'}}>
      <div className="head">
        <label className="profile">
          <input type="file" className="upload" disabled/>
          <img src={form.companyBio.logo} alt="" className="pimg" />
        </label>
        <div className="texture">
          <span className="name">{form.company_name}</span>
          <span className="about">
            {form.companyBio.description}
          </span>
          <span className="email">Email : {form.company_email}</span>
          <span className="email">Website : {form.companyBio.website}</span>
          <span className="email">company Size : {form.companyBio.companySize} emp</span>
          <span className="location">Location : {form.companyBio.location}</span>
        </div>
      </div>
      <div className="buttons">
        <Popup
          trigger={<button className="postjob">Post Job</button>}
          modal
          nested
          contentStyle={{ borderRadius: '10px' }}
        >
          {(close) => (
            <CardStyle className="modal">
              <div className="content">
                <span className="text">Post Job</span>

                <label for="name">Company name:</label>
                <input type="text" name="company_name" id="nme" onChange={handleInput} />

                <label for="JobRole">Job Role:</label>
                <input type="text" name="job_role" id="jr" onChange={handleInput} />

                <label for="Location">Job Location:</label>
                <input type="text" name="location" id="jd" onChange={handleInput} />

                <label for="name">Require Skills:</label>
                <input type="text" name="require_skills" id="sk" onChange={handleInput} />

                <label for="Location">Job Description:</label>
                <input type="text" name="job_description" id="jd" onChange={handleInput} />

                <label for="minsalary">Min salary :</label>
                <input type="text" name="min_salary" id="mis" onChange={handleInput} />

                <label for="maxsalary">Max salary :</label>
                <input type="text" name="max_salary" id="mxs" onChange={handleInput} />
                <div className="button">
                  <span onClick={() => close()} className="cancel">
                    Cancel
                  </span>
                  <button className="send" onClick={postJob} >Post Job</button>
                </div>
              </div>
            </CardStyle>
          )}
        </Popup>
        <span className="edit">Edit Profile</span>
      </div>
      <div className="postedjobs">
        <span className="pj">Posted jobs</span>
        <div className="card">
          <div className="info">
            <span className="role">MERN developer</span>
            <span className="disc">javascript,php | 20000$ to 50000$</span>
          </div>
          <span className="delet">Delet Job</span>
        </div>
      </div>
    </Style>
  )
}

export default Profile
