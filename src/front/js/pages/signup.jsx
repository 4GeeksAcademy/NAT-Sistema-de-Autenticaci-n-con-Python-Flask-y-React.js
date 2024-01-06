import React, {useEffect, useContext, useState} from "react";
import { Context } from "../store/appContext.js";
import { useNavigate } from "react-router-dom";

import Swal from 'sweetalert2';



export const Signup = () => {

  const { store, actions } = useContext(Context);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const token = localStorage.getItem("token");


  useEffect(() => {
      if (store.user != null) {
          navigate("/")
      }
  },[])


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const userData = await actions.createUser(name, email, password)
      if (userData) {
        Swal.fire("User created!");

        setTimeout(() => {
            navigate("/")
        }, 2000);
  
        setTimeout(() => {
            window.location.reload(false)
        }, 2001);

      }else{
        throw new Error("no se puede crear el user")
      }
     
  } catch (error) {
      console.log("error al crear el user", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Try again later",
      });
  }
}
    return (
        <div className="m-3 p-4">
      <h4 className="text-center mb-4">Register</h4>
      <form className="m-auto needs-validation" style={{ maxWidth: '400px' }} noValidate onSubmit={handleSubmit} >
        <div className="mb-3">
          <label htmlFor="validationNameRegister" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="validationNameRegister"
            value={name}
            onChange={(e) => setName(e.target.value)} 
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="mb-3">
          <label htmlFor="validationEmailRegister" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="validationEmailRegister"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="mb-3">
          <label htmlFor="validationPasswordRegister" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="validationPasswordRegister"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
        </div>
        <div className="text-center">
          <button className="btn btn-primary" type="submit">Signup</button>
        </div>
      </form>
    </div>
    )
}