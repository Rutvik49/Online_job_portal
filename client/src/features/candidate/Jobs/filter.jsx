import React from 'react'
import {Style} from '../../../components/style/filterStyle'
import JobCard from '../../../components/JobCard'

const Filter = () => {
  return (
    <div style={{marginBottom: '2%' }}>
      <Style
        className="container"
        style={{marginBottom: '2%' }}
      >
        <span className="s1">Filter Jobs</span>
          <input type="text" className="Skill" placeholder="By Role" />
          <input
            type="text"
            className="Location"
            placeholder="By Location"
          />
          <button>Apply</button>
      </Style>
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
      <JobCard />
    </div>
  )
}

export default Filter
