import React from 'react'
import { JobcardStyle } from './style/JobcardStyle'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {Style} from'./popupStyle.js'

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
          <Popup trigger={<button>Apply</button>} modal nested contentStyle={{borderRadius:'10px'}}>
            {(close) => (
              <div className="modal">
                <Style className="content">
                  <div className="companyInfo">
                    <span className="head">Apply To</span>
                    <img src="images/frontPage_2.jpg" alt="Profile" />
                    <span className="name">google</span>

                    <label for="location">Location :</label>
                    <span className="lname">Gandhinagar</span>

                    <label for="role">Job Role :</label>
                    <span className="jrole">Python Developer</span>

                    <label for="role">Salary :</label>
                    <span className="salaryCount">2k to 10k $</span>
                  </div>
                  <div className="apply">
                    <span className="head">Your Application</span>
                    <span className="name">Chaudhary Rutvik V</span>
                    <span className="role">MERN developer</span>
                    <span className="txt">
                      Let Recruiter know why you are a good fit.
                    </span>
                    <textarea
                      type="textarea"
                      name="discription"
                      id="disc"
                      placeholder="Write a note to Recuriter"
                    />
                    <div className="buttons">
                      <span onClick={() => close()} className='cancel' >Cancel</span>
                      <button className='send'>Send Application</button>
                    </div>
                  </div>
                </Style>
              </div>
            )}
          </Popup>
        </div>
      </div>
      <hr />
    </JobcardStyle>
  )
}

export default JobCard
