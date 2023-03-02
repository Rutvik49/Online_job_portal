import React from "react";
import {  Outlet, Navigate } from 'react-router-dom';
const useAuth=()=>{
  let token=localStorage.getItem('authtoken') || true
    const user = {loggedIN : true}
    return token && user.loggedIN
}

const ProtectedRoutes = () => {
    const isAuth = useAuth();
  return isAuth ? <Outlet/> : <Navigate to = '/selectRole' />
};

export default ProtectedRoutes;
