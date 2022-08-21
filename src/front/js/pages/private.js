import { Navigate, Outlet } from "react-router-dom";
import React from "react";
import { Dash } from "./dash";

export const Private = () => {
     
      return(
        sessionStorage.getItem("token")? <Outlet/> : <Navigate to="/dash"/>

      )  

  
};
