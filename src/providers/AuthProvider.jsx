import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import app from '../firebase/firebase.config';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    //new user create
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //existing user sign in
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    //User authState Change
    //useEffect এ রাখার কারণ হলে যেহেতু এটাতে কোনো ইভেন্ট যুক্ত নাই, side effect হিসাবে কাজ করবে, reload দিলে Side effect বা ‍API call করবে। তাই একে useEffect এর মধ্যে রাখতে হবে।
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            console.log('logged in user inside auth state observer', loggedUser)

        });

        return () => {
            unsubscribe()
        }
    }, [])

    //sign out
    const logOut = () => {
        return signOut(auth);
    }
    //provider value
    const authInfo = {
        user,
        createUser,
        signIn,
        logOut,
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;