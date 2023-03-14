import React, { useState,useEffect } from 'react'
import Navbar from '../Navbar'
import ProfileCard from '../../../components/ProfileCard'
import {RecomandExpertStyle} from './style.js'

const Index = () => {
  let [form,setForm]=useState({
    status: "sucess",
    company_name: "name",
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
useEffect(() => {
  const GetCompanyHome = async () => {
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
  GetCompanyHome()
  return () => {
  };
}, []);


  console.log(form);
  return (
    <div>
      <Navbar />
      <ProfileCard
        logo={ localStorage.getItem('logo') || form.companyBio.logo}
        name={form.company_name}
        role={form.companyBio.website}
        location={form.companyBio.location}
        bio={form.companyBio.description}
      />
      <div className="recomandexperts" style={{ marginTop: '2%', marginBottom:'2%' }}>
      <RecomandExpertStyle className="container">
        <span className="s1">Recommended Experts</span>
        <span className="s2">
          Expert Peoples where you're a top applicant based on your profile job search
        </span>
        </RecomandExpertStyle>
        <ProfileCard
          top="1%"
          name="rajat chaudhary"
          role="mern developer"
          location="ahmedabad"
          bio="i am a expert mern developer"
        />
        <ProfileCard
          top="1%"
          name="rajat chaudhary"
          role="mern developer"
          location="ahmedabad"
          bio="i am a expert mern developer"
        />
        <ProfileCard
          top="1%"
          name="rajat chaudhary"
          role="mern developer"
          location="ahmedabad"
          bio="i am a expert mern developer"
        />
        <ProfileCard
          top="1%"
          name="rajat chaudhary"
          role="mern developer"
          location="ahmedabad"
          bio="i am a expert mern developer"
        />
      </div>
    </div>
  )
}

export default Index
