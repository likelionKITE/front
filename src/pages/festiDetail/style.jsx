import React from 'react';
import styled, { css } from 'styled-components';

export const Festi_info = styled.div`
    /* .fest_info{
        text-align: center;
    } */
    h1{
        margin-bottom: 30px;
        margin-left: 50px;
    }
    //첫번째 박스
    .fest_info_top{
        text-align: center;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin-left: 50px;
        margin-right: 50px;
        
    }
    .fest_info_img{
        width: 450px;
        height: 350px;
        /* max-width: 90%;
        max-height: 90%; */

    }
    .fest_info_hub{
        margin-top: 50px;
        margin-left: 50px;
        margin-right: 20px;

        font-size: 30px;
        font-weight: bold;
    }
    .hub_p_tag{
        font-size: 20px;
    }
    .like_button{
        font-size: 30px;
        border: none;
        background-color: white;

    }
    //두번째 박스
    .fest_info_bottom{
        margin: 50px;  
        border: solid 2px #b8b8b8;
    }
    .sub_homepagesub_tel{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    .fest_info_bottom_else{
        margin: 30px;   
        font-size: 15px;


    }
    .fest_info_bottom_else_details{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    .sub_p_tag{
        text-align: center;
        font-size: 30px;
        font-weight: bold;

    }
    .sub_p_tag_0{
        font-size: 10px;
        text-align: center;
    }
    .sub_over_view{
        margin-left: 100px;
        margin-right: 100px;
        margin-bottom: 50px;
        display: none
    }
    .fest_info_map{
        display: flex;
        justify-content: center;
    }



/* 이하 리뷰 부분 css */
    .review_info{
        margin-top: 50px;
        padding: 20px;
        padding-left: 30px;
    }
    .review_posting_input{
        margin-top: 30px;
        margin-left: 50px;
    }
    
    #title_text{
        width: 90%;
        padding-bottom: 0px;
        border: none;
        font-size: 20px;
        border-bottom: solid 2px #b8b8b8;
        font-weight: bold;
    }
    #content_text{
        width: 90%;
        padding-bottom: 0px;
        resize: none;
        border: none;
        border-bottom: solid 2px #b8b8b8;
        font-size: 40px;
    }
    #content_text:focus{ outline: none; }
    #title_text:focus{outline: none;}
    .posting_button{
        margin-left:10px;
        border: none;
        background-color: #b2b594;
        border-radius: 5px;
        font-size: 20px;
    }
    .review_posted{
        margin-top: 30px;
        margin-left: 50px;
    }
    
    /* .review_posting{
        display: flex;
        justify-content: center ;
    }
    .review_posting_detail{
        display: flex;
        justify-content: center ;
        
    } */


`
