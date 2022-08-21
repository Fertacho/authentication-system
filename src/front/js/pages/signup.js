import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Signup = () => {

    const [Nombre, setNombre] = useState("");
    const [Pass, setPass] = useState("");
    const {store,actions} = useContext(Context)
    const info = {
        email:Nombre,
        password:Pass,
        is_active:true

    }
    console.log(info)
    const handleSubmit = (e) => {
    actions.register(info)
    }

    return <div>
        <h1>Registro</h1><form>
    <div className="mb-3">
      <label className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
      onChange={(e) => {setNombre(e.target.value);}}/>
      <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
      <label className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleInputPassword1"
      onChange={(e) => {setPass(e.target.value);}}/>
    </div>
    <div className="mb-3 form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
      <label className="form-check-label">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
  </form>
  </div>
}