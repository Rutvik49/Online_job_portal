import React from 'react'
import JobCard from '../../../components/JobCard'
import { RecomandJobStyle } from './RecomandJobStyle'

const RecomandJob = () => {
  return (
    <div style={{ marginTop: '2%', marginBottom:'2%' }}>
      <RecomandJobStyle className="container">
        <span className="s1">Recommended Jobs</span>
        <span className="s2">
          Jobs where you're a top applicant based on your profile job search
        </span>
      </RecomandJobStyle>
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
    </div>
  )
}

export default RecomandJob
