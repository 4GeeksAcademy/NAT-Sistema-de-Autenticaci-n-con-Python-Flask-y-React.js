import React from 'react';
import { Navigate } from 'react-router-dom';

export const Privatete = () => {
    ({ redirectPath = '/', children }) => {
        const token = localStorage.getItem('token');
    
        if (!token) {
            return <Navigate to={redirectPath} replace />
        }
    
        return children
    }
}
    
   
    

