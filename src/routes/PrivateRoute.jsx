// private route কে অনেক সময় protected, authRequired etc. নাম দেয়া হয়।
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    /* const navigate = useNavigate();
    if (!user) {
        navigate('/login');
    } */
    return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;

/**
 * STEPS
 * 1. check User is Logged in or not
 * 2. if user is logged in, then allow them to visit the route
 * 3. else redirect user to login page
 *  
 */
