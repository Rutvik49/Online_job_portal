import React from 'react'
import {Style} from'./style.js'
const Application = () => {
  return (
    <Style className="container">
      <div className="content">
        <span className="txt">Recieved Applications</span>
        <div className="card">
          <div className="info">
            <span className="role">MERN developer</span>
            <span className="applicant">
              Applicant : Rutvik Chaudhary
              <span className="view">View Profile</span>
            </span>
          </div>
          <div className="links">
            <span className="reject">Reject</span>
            <span className="message">Message</span>
          </div>
        </div>
      </div>
    </Style>
  )
}

export default Application
