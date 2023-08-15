import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [mypageData, setMyPageData] = useState(null);

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        const savedUser = localStorage.getItem('currentUser');
    
        if (accessToken) {
            setIsSignedIn(true);
            setCurrentUser(savedUser);
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isSignedIn, setIsSignedIn, currentUser, setCurrentUser, mypageData, setMyPageData }}>
            {children}
        </AuthContext.Provider>
    );
};
