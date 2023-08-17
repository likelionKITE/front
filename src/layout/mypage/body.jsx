import React, { useState, useEffect } from "react";
import axios from "axios";
import { AuthContext } from '../../pages/AuthContext';
import { useContext } from 'react';
import { Wrapper, Nickname, Likes, Box, Reviews } from './style';
import { Link } from 'react-router-dom';
import { removeParenthesesContent } from '../../pages/local/body';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faPen } from "@fortawesome/free-solid-svg-icons";

function Mypage() {
    const { mypageData, setMyPageData } = useContext(AuthContext);
    const likes = mypageData ? mypageData.user_like_response : []
    const reviews = mypageData ? mypageData.user_review_response : []

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
        <Wrapper>
            <Nickname>
                <h1>Hello, {mypageData ? mypageData.nickname : ""} !</h1>
            </Nickname>

            <hr />

            <h2>My Likes <FontAwesomeIcon icon={faHeart} /></h2>
            <Likes>
                {likes.map((like, index) => (
                    <Link to={`/destiDetail/${like.content_id}`}>
                        <Box key={index}>
                            <img src={like.first_image} alt={like.title} />
                            <p>{removeParenthesesContent(like.title)}</p>
                        </Box>
                    </Link>
                ))}
            </Likes>

            <hr />

            <Reviews>
                <h2>My Review <FontAwesomeIcon icon={faPen} /></h2>
                {reviews.map((review, index) => (
                    <div>
                        <Link to={`/destiDetail/${review.real_content_id}`}>
                            <p className="tour" key={index}>{removeParenthesesContent(review.tour)}</p>
                            <hr />
                            <p>Title</p>
                            <p className="title" key={index}>{review.title}</p>
                            
                            <p>Content</p>
                            <p className="content" key={index}>{review.content}</p>
                        </Link>
                    </div>
                ))}
            </Reviews>

            <hr />

        </Wrapper>
    );
}

export default Mypage;