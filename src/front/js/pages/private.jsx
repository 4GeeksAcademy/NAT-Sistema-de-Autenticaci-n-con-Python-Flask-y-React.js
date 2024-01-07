import React from "react";
import { Navigate } from "react-router-dom";

export const Private = () =>{
    const rainbowBackground = {
        backgroundImage: 'linear-gradient(45deg, red, orange, yellow, green, blue, indigo, violet)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        color: 'white',
        textAlign: 'center',
    };
    return(
        <div style={rainbowBackground}>

            <h1>Welcome to Wonderlan!!</h1>
            <h3>Where dreams come true 🍄</h3>
            <br></br>
            <h5>✨ Navigate Wonderland's maze; each twist holds the key to your unique adventure ✨</h5>
        </div>
    )
}