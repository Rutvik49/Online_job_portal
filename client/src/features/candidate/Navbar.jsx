import React from "react";
import {NavStyle} from '../../components/navStyle'
const Navbar = () => {
  return <NavStyle>
    <img src="images/logo.svg" alt="" />
    <ul>
        <li><input type="text" name="search" id="search" placeholder="Search"/></li>
        <li>Home</li>
        <li>Jobs</li>
        <li>Applied Jobs</li>
        <li>Message</li>
        <li>Profile</li>
    </ul>
  </NavStyle>;
};

export default Navbar;
