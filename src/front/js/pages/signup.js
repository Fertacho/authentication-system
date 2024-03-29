import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";
import { useEffect } from "react";

function Signup() {

  const { store, actions } = useContext(Context);
  const navigate =useNavigate()
  useEffect(() => {

  }, [])

  useEffect(() => {
      if(store.currentUser !== null) navigate('/');
  }, [store])

 

  return (
    <form onSubmit={(e) =>  actions.handleRegister(e,navigate)} >
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input
          type="text"
          className="form-control w-50"
          id="email" 
          name="email"
          aria-describedby="emailHelp"
          placeholder="Email"
          value={store.email}
          onChange={actions.handleChange} 
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="text"
          className="form-control w-50"
          id="password" 
          name="password"
          placeholder="Password"
          value={store.password}
          onChange={actions.handleChange} 
        />
      </div>

      <button 
  
      type="submit" className="btn btn-primary mt-2">
        Create User
      </button>
    </form>
  );
}

export default Signup;