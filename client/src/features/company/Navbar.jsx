import React from "react";
import {NavStyle} from '../../components/style/navStyle'
const Navbar = () => {
  // style={{height: '13vh', display: 'block'}}
  return <div className="main" >
    <NavStyle >
        <img src="images/logo.svg" alt="" />
    <ul>
        <li><input type="text" name="search" id="search" placeholder="Search"/></li>
        <li>Home</li>
        <li>Talented Employees</li>
        <li>Job Applications</li>
        <li>Message</li>
        <li>Profile</li>
    </ul>
  </NavStyle>;
    </div>
};

export default Navbar;
