import React, {useEffect, useContext, useState} from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

import Swal from 'sweetalert2';

export const Login = () => {
    const { store, actions } = useContext(Context);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    const handleIn = async (e) => {
        e.preventDefault()
        try {
            const response = await actions.login(email, password);
           
            const token = response.token; 

            setTimeout(() => {
                navigate("/");
            }, 1500);

            setTimeout(() => {
                window.location.reload(false);
            }, 1500);

        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Check your data!",
            });
            console.log("error en el login componente", error)

            setEmail("");
            setPassword("");
        }
    };



    return (
        <div className="m-3 p-4">
      <h4 className="text-center mb-4">Login</h4>
      <form className="m-auto needs-validation" style={{ maxWidth: '400px' }} noValidate onSubmit={handleIn} >
       
        <div className="mb-3">
          <label htmlFor="vvalidationEmailLogin" className="form-label">Email</label>
          <input
            type="email"
            placeholder="User Email"
            className="form-control"
            id="validationEmailLogin"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="validationPassLogin" className="form-label">Password</label>
          <input
            type="password"
            placeholder="User Password"
            className="form-control"
            id="validationPassLogin"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required
          />
        </div>
        <div className="text-center">
          <button className="btn btn-primary" type="submit">Enter</button>
        </div>
      </form>
    </div>
    )
}