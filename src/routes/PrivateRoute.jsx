// private route কে অনেক সময় protected, authRequired etc. নাম দেয়া হয়।
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    //race condition এর জন্য loading use করা হয়েছে। race condition হলো page reload করলে login in page এ যাওয়া আটানোর জন্য।
    if (loading) {
        return <Spinner animation='border' variant='primary' />
    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to='/login' replace></Navigate> //location কে  login route এর state এ সেট করা হয়েছে।
};

export default PrivateRoute;

/**
 * STEPS
 * 1. check User is Logged in or not
 * 2. if user is logged in, then allow them to visit the route
 * 3. else redirect user to login page
 *  4. setup the private router
 * 5. handle loading
 */
