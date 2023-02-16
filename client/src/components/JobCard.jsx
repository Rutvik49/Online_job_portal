import React from 'react'
import { JobcardStyle } from './style/JobcardStyle'

const JobCard = () => {
  return (
    <JobcardStyle>
      <div className="container">
        <img src="" alt="Profile" />
        <div className="discription">
          <span className="job_role">Python Developer</span>
          <span className="name">google</span>
          <span className="location">Gandhinagar</span>
          <span className="salary">Salary : 2k to 10k $</span>
        </div>
        <div className="apply">
          <button>Apply</button>
        </div>
      </div>
      <hr />
    </JobcardStyle>
  )
}

export default JobCard
