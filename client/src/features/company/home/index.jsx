import React from 'react'
import Navbar from '../Navbar'
import ProfileCard from '../../../components/ProfileCard'
import {RecomandExpertStyle} from './style.js'

const Index = () => {
  return (
    <div>
      <Navbar />
      <ProfileCard
        name="unizyr"
        role="tc.com"
        location="gandhinagar"
        bio="i am an expert company that runs the world"
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
