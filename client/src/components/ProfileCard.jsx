import React from "react";
import {NavStyle} from'./style/ProfileStyle'

const ProfileCard = (props) => {
  let top=props.top
  return <NavStyle style={{ marginTop: top}}>  
  <div className="container">
    <img src="" alt="Profiel" />
    <div className="discription">
        <span className="name">{props.name}</span>
        <span className="role site">{props.role}</span>
        <span className="location">{props.location}</span>
        <span className="bio">{props.bio}</span>
    </div>
    <span className="viewProfile">View Profile</span>
  </div>
  </NavStyle>;
};

export default ProfileCard;
