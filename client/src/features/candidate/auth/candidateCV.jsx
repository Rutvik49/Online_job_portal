import React from "react";
import { Style } from '../../../components/style/authStyle'
// import { Link } from 'react-router-dom'

const CandidateCV = () => {
  return <Style>
  <div className="head">
    <img src="images/logo.svg" className='logo'  alt="logo" />
    <span className="welcome">Welcome To Online Job Portal</span>
  </div>
  <div className="card">
    <span className="signup">Setup Resume</span>
    <label for="fullname">Education</label>
    <input type="text" name="education" id="en" />
    <label for="skills">Select Skills :</label>
    <select name="top_skills" id="top_skills">
      <option value="react">react</option>
      <option value="node">node</option>
      <option value="javaScript">javaScript</option>
      <option value="python">python</option>
    </select>
    <label for="project">Enter Projects ? :</label>
    <input type="text" name="projects" id="pj" />
    <label for="url">Github Profile Link :</label>
    <input type="url" name="github_link" />
    <label for="experience">Work Experience ? : (yes/no)</label>
    <input type="text" name="experience"/>

    <label for="company_name">Company Name :</label>
    <input type="text" name="company_name"/>

    <label for="company_website">Company Website :</label>
    <input type="url" name="company_website" />

    <label for="working_role">Working Role :</label>
    <input type="text" name="working_role"/>

    <label for="time_spend">working Span : (years)</label>
    <input type="text" name="experience" id="fn" />
    <button type="submit" className='submit'>Let's Explore</button>
  </div>
</Style>;
};

export default CandidateCV;
