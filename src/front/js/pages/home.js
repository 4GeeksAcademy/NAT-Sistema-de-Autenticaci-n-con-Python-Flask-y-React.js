import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="row row-4 text-center mt-5" 
		style={{
			color: '#990066', // Color del texto
			fontFamily: 'Arial, sans-serif', // Fuente del texto
			textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Sombra del texto
		  }}>
			
			<h1 style={{ fontSize: '5rem'}}>Welcome!!</h1>
			<p style={{ fontSize: '2rem'}}>
				🥳😊🌷
			</p>
			<div className=" col row-4 text-center m-5">
				<fieldset><Link to="/login" className="btn btn-login"style={{ fontSize: '2rem'}}>LOGIN 🦋 </Link></fieldset>
			</div>
			<div className=" col row-4 text-center m-5">
				<fieldset > <Link to="/signup" className="btn btn-register" style={{ fontSize: '2rem'}}>SignUp 🐝 </Link></fieldset>
			</div>
		
		</div>
	);
};
