import React from 'react'
import {Style} from '../../../components/style/filterStyle'
import ProfileCard from '../../../components/ProfileCard'

const Filter = () => {
  return (
    <div style={{ marginBottom: '2%' }}>
      <Style className="container" style={{ marginBottom: '2%' }}>
        <span className="s1">Filter Employes</span>
        <input type="text" className="Skill" placeholder="By Role" />
        <input type="text" className="Location" placeholder="By Location" />
        <button>Apply</button>
      </Style>
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
      <ProfileCard
        top="1%"
        name="rajat chaudhary"
        role="mern developer"
        location="ahmedabad"
        bio="i am a expert mern developer"
      />
    </div>
  )
}

export default Filter
