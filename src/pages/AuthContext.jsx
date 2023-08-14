import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    // mypageData를 관리하기 위한 상태 추가
    const [mypageData, setMyPageData] = useState(null);

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        const mypageData = JSON.parse(localStorage.getItem('mypageData')); // 로컬 저장소에서 mypageData 가져오기

        if (accessToken && mypageData) {
            // accessToken과 mypageData가 모두 있다면 로그인 상태로 판단
            setIsSignedIn(true);
            setCurrentUser(mypageData.nickname);
            setMyPageData(mypageData); // mypageData 상태 설정
        }
    }, []);

    return (
        <AuthContext.Provider value={{ isSignedIn, setIsSignedIn, currentUser, setCurrentUser, mypageData, setMyPageData }}>
            {children}
        </AuthContext.Provider>
    );
};
