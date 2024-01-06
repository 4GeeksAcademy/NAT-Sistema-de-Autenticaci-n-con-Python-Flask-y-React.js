import React from 'react';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ path, element }) => {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/login" />;
    }

    return <Route path={path} element={element} />;
};
    

