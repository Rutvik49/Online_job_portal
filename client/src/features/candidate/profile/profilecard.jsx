import React from 'react'
import {Style} from'./style'

const ProfileCard = () => {
  return (
    <Style className="container">
      <div className="head">
        <label className="profile">
          <input type="file" className="upload" />
        </label>
        <div className="texture">
            <span className='name'>Chaudhary Rutvik</span>
            <span className='about'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga beatae officiis hic,<br/> architecto enim placeat natus in? Distinctio blanditiis quisquam rem animi.
            </span>
            <span className='role'>Mern Developer</span>
            <span className='location'>Gandhinagar</span>
        </div>
      </div>
      <div className="body">
            <span className='study'>EDUCATION</span>
            <span className='edit'>edit</span>
        <div className="edu" disabled>
            <label for="degree" className='degree'>Study</label>
            <input type="text" name="study" id="sd" value="IT engineer" disabled/>
            <label for="Institute">Institute</label>
            <input type="text" name="college" id="sd" value="LDRP" disabled/>
            <label for="skills">Skills</label>
            <input type="text" name="study" id="sk" value="react, node, python" disabled/>
            <label for="project">Projects</label>
            <input type="text" name="project" id="pj" value="exp tracker, current" disabled/>
            <label for="github">GitHub Link (projects)</label>
            <input type="text" name="link" id="lk" value="gith ub.com/rutvik449" disabled/>
        </div>
            <span className='work'>EXPERIENCE</span>
        <div className="exp">
            <label for="cname" className='cname'>Company Name</label>
            <input type="text" name="company_name" id="cn" value="TC" disabled/>
            <label for="cweb">Company Website</label>
            <input type="text" name="company_website" id="cw" value="TC.com" disabled/>
            <label for="wrole">Working Role</label>
            <input type="text" name="Working_role" id="wr" value="MERN developer" disabled/>
            <label for="ts">Time Spend (years)</label>
            <input type="text" name="time_spend" id="ts" value="1 years" disabled/>
        </div>
      </div>
      <button disabled>SAVE</button>
    </Style>
  )
}

export default ProfileCard
