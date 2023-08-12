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
        /* margin-left: 50px;
        margin-right: 50px; */
        
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
    }
    .sub_over_view{
        margin-left: 100px;
        margin-right: 100px;
        display: none
    }
    .each{
        margin-top: 10px;

    }

    .review_info{
        margin-top: 50px;
    }
    
    /* .review_posting{
        display: flex;
        justify-content: center ;
    }
    .review_posting_detail{
        display: flex;
        justify-content: center ;
        
    }

    .review_posted{
        display: flex;
        justify-content: center ;
    } */

`
