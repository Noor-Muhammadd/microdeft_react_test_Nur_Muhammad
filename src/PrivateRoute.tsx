import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: ReactNode }) => {
    const token = !!localStorage.getItem('authToken')
    const location = useLocation();
    if (!token) {
        return <Navigate to="/login" state={{ from: location }} replace={true} />;
    }

    return children;
};

export default PrivateRoute;
