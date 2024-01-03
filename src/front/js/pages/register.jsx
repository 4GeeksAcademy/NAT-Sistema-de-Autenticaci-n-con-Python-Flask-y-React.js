import React from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Register = () => {
    return (
        <div className="container">
            <div className="input-group mb-3">
                
                <div className="card registro">
                    <div className="card-body">
                        <h3>Register</h3>
                        <form className="row needs-validation" novalidate>
                            <div>
                                <label>Name</label>
                            </div>
                        </form>
                    </div>
                </div>
                </div>

        </div>
    )
}