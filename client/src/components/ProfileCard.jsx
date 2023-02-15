import React from "react";
import {NavStyle} from'./ProfileStyle'

const ProfileCard = () => {
  return <NavStyle>
  <div className="container">
    <img src="" alt="Profiel" />
    <div className="discription">
        <span className="name">Chaudhary Rutvik</span>
        <span className="workingdomain">MERN Developer</span>
        <span className="location">Gandhinagar</span>
        <span className="bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nihil fugit laudantium recusandae cupiditate. Molestias, architecto. Non sit, aperiam cum nam suscipit officiis?</span>
    </div>
    <span className="viewProfile">View Profile</span>
  </div>
  </NavStyle>;
};

export default ProfileCard;
