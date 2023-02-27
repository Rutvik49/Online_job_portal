import React from 'react'
import { Style } from './style.js'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import { CardStyle } from './popupStyle.js'

const Profile = () => {
  return (
    <Style className="container" style={{marginTop: '7%'}}>
      <div className="head">
        <label className="profile">
          <input type="file" className="upload" />
          <img src="images/frontpage_2.jpg" alt="" className="pimg" />
        </label>
        <div className="texture">
          <span className="name">Trusted Communities</span>
          <span className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga beatae
            officiis hic,
            <br /> architecto enim placeat natus in? Distinctio blanditiis
            quisquam rem animi.
          </span>
          <span className="email">Email : tc@gmail.com</span>
          <span className="email">Website : tructedcommunities.org</span>
          <span className="email">company Size : 27 emp</span>
          <span className="location">Location : Gandhinagar</span>
        </div>
      </div>
      <div className="buttons">
        <Popup
          trigger={<button className="postjob">Post Job</button>}
          modal
          nested
          contentStyle={{ borderRadius: '10px' }}
        >
          {(close) => (
            <CardStyle className="modal">
              <div className="content">
                <span className="text">Post Job</span>

                <label for="name">Company name:</label>
                <input type="text" name="name" id="nme" />

                <label for="JobRole">Job Role:</label>
                <input type="text" name="job_role" id="jr" />

                <label for="name">Require Skills:</label>
                <input type="text" name="skills" id="sk" />

                <label for="Location">Job Location:</label>
                <input type="text" name="location" id="jd" />

                <label for="minsalary">Min salary :</label>
                <input type="text" name="min_salary" id="mis" />

                <label for="maxsalary">Max salary :</label>
                <input type="text" name="max_slalary" id="mxs" />
                <div className="button">
                  <span onClick={() => close()} className="cancel">
                    Cancel
                  </span>
                  <button className="send">Post Job</button>
                </div>
              </div>
            </CardStyle>
          )}
        </Popup>
        <span className="edit">Edit Profile</span>
      </div>
      <div className="postedjobs">
        <span className="pj">Posted jobs</span>
        <div className="card">
          <div className="info">
            <span className="role">MERN developer</span>
            <span className="disc">javascript,php | 20000$ to 50000$</span>
          </div>
          <span className="delet">Delet Job</span>
        </div>
      </div>
    </Style>
  )
}

export default Profile
