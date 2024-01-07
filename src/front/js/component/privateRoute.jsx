import React from 'react';
import {  Route, Navigate } from 'react-router-dom';
import { Private } from '../pages/private.jsx';

export const PrivateRoute = ({ redirectPath = '/', children }) => {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to={redirectPath} replace />
    }

    return children
}
    

