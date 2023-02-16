import React from "react";
import {  Outlet, Navigate } from 'react-router-dom';
const useAuth=()=>{
    const user = {loggedIN : true}
    return user && user.loggedIN
}

const ProtectedRoutes = () => {
    const isAuth = useAuth();
  return isAuth ? <Outlet/> : <Navigate to = '/selectRole' />
};

export default ProtectedRoutes;
