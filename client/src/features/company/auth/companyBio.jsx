import React from "react";
import { Style } from '../../../features/candidate/auth/bioStyle'
import { Link } from 'react-router-dom'

const CompanyBio = () => {
  return <Style>
  <div className="head">
        <img src="images/logo.svg" alt="" />
      </div>
      <div className="card">
      <span className="signup">Setup Company Profile</span>
        <label className="profile">
          <input type="file" className='upload'/>
        </label>
        <label for="website" className='username website'>Enter Company Website :</label>
        <input type="url" name="website" id="cb" />
        <label for="bio" className='bio location'>Enter Location :</label>
        <input type="text" name="location" id="cb" />
        <label for="bio" className='bio'>Describe Company :</label>
        <textarea type="textarea" name="decsription" id="bio" />
        <label for="size" className='bio companySize'>Company Size :</label>
        <input type="number" name="company_size" id="cb" />
        <Link to="/companyHome" className='link'>
        <button type="submit" className='submit'>Get Started
        </button>
        </Link>
      </div>
</Style>;
};

export default CompanyBio;
