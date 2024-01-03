import React, {useEffect, useContext, useState} from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

import Swal from 'sweetalert2';



export const Register = () => {

  const { store, actions } = useContext(Context);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const token = localStorage.getItem("token");
  const navigate = useNavigate()

  useEffect(() => {
      if (store.user != null) {
          navigate("/")
      }
  })


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
      await actions.createUser(name, email, password)
      Swal.fire("User created!");

      setTimeout(() => {
          navigate("/")
      }, 2000);

      setTimeout(() => {
          window.location.reload(false)
      }, 2001);

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
      <form className="m-auto" style={{ maxWidth: '400px' }} noValidate onSubmit={handleSubmit} >
        <div className="mb-3">
          <label htmlFor="validationCustom01" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            value={name}
            onChange={(e) => setName(e.target.value)} 
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="mb-3">
          <label htmlFor="validationCustom02" className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>
        <div className="mb-3">
          <label htmlFor="validationCustom03" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="validationCustom03"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
        </div>
        <div className="text-center">
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </div>
    )
}