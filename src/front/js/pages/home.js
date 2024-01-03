import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="row row-4 text-center mt-5">
			
			<h1>Welcome!!</h1>
			<p>
				🥳😊🌷
			</p>
			<div className=" col row-4 text-center m-5">
				<fieldset><Link to="/login" className="btn btn-login">LOGIN 🦋 </Link></fieldset>
			</div>
			<div className=" col row-4 text-center m-5">
				<fieldset > <Link to="/register" className="btn btn-register">REGISTER 🐝 </Link></fieldset>
			</div>
		
		</div>
	);
};
