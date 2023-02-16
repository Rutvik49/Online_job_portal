import React from 'react'
import Navbar from '../Navbar'
import ProfileCard from '../../../components/ProfileCard'
import RecomandJob from './RecomandJob'

const Index = () => {
  return (
    <>
      <Navbar />
      <ProfileCard name='rajat chaudhary' role='mern developer' location='ahmedabad' bio='i am a expert mern developer' />
      <RecomandJob />
    </>
  )
}

export default Index
