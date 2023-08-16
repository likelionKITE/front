import React, { useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from '../../pages/AuthContext';
import { useContext } from 'react';
import { Margin } from './style';

function Mypage() {
    const { mypageData, setMyPageData } = useContext(AuthContext);

    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        console.log(token);

        axios.get("https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/member/mypage/", {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => {
            setMyPageData(response.data);
        })
        .catch(error => {
            console.log(error.response);
        });
    }, [setMyPageData]);

    return (
        <Margin>
            <AboutMe nickname={mypageData ? mypageData.nickname : ""} />
            <MyLikes likes={mypageData ? mypageData.user_like_response : []} />
            <MyReview reviews={mypageData ? mypageData.user_review_response : []} />
        </Margin>
    );
}


function AboutMe({ nickname }) {
    return (
        <div className='aboutme'>
            <h1>About Me</h1>
            <p>Nickname: {nickname}</p>
      // ... other components
        </div>
    );
}

function MyLikes({ likes }) {
    return (
        <div className='mylikes'>
            <h1>My Likes</h1>
            <ul>
                {likes.map((like, index) => (
                    <li key={index}>{like.title}</li>
                ))}
            </ul>
        </div>
    );
}

function MyReview({ reviews }) {
    return (
        <div className='myreview'>
            <h1>My Review</h1>
            <ul>
                {reviews.map((review, index) => (
                    <li key={index}>{review.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default Mypage;

