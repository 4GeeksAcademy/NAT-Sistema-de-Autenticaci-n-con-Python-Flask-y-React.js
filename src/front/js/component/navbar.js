import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

export const Navbar = () => {

	const token = localStorage.getItem('token');

	const navigate = useNavigate()

	const handleCerrarSesion = () => {
		localStorage.removeItem('token');

		Swal.fire({
			title: "See you soon 👽",
		});

		setTimeout(() => {
			navigate("/")
		}, 1500);

		setTimeout(() => {
			window.location.reload(false)
		}, 500);

	}
	

	return (
		<nav className="navbar ">
			<div className="container">
				<Link to="/"style={{ textDecoration: 'none' }}>
					<span className="navbar-brand mb-0 h1"style={{ fontSize: '2rem', color: '#800080'}}>Home 🧚‍♀️</span>
				</Link>
				
			</div>

			<div className=" me-5">
				{!token ? (
					<>
						
					</>
				) : (
					<>
						<button className="btn " type="button" onClick={handleCerrarSesion}>
						<span className="navbar-brand mb-0 h1"style={{ fontSize: '2rem', color: '#800081'}}>logOut</span>
						</button>
					
					</>
				)

				}


			</div>

		</nav>
	);
};
