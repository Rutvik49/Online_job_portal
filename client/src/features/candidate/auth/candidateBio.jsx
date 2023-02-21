import React from 'react'
import { Link } from 'react-router-dom'
import {Style} from './bioStyle'

const CandidateBio = () => {
  return (
    <Style>
      <div className="head">
        <img src="images/logo.svg" alt="" />
      </div>
      <div className="card">
      <span className="signup">Setup Profile</span>
        <label className="profile">
          <input type="file" className='upload'/>
        </label>
        <label for="username" className='username'>Enter username :</label>
        <input type="text" name="username" id="un" />
        <label for="bio" className='bio'>Describe Yourself :</label>
        <textarea type="textarea" name="bio" id="bio" />
        <Link to="/candidateCV" className='link'>
        <button type="submit" className='submit'>Next
        </button>
        </Link>
      </div>
    </Style>
  )
}

export default CandidateBio
