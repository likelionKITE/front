import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    width: 60%;
    background-color: #fefeeb;
    padding: 3rem 5rem;

    h2 {
        margin-bottom: 1rem;
        font-family: LexendLight;
    }

    hr {
        margin-bottom: 2rem;
        border-radius: 10rem;
    }
`

export const Nickname = styled.div`
    margin-bottom: 2rem;
`

export const Likes = styled.div`
    margin-bottom: 2rem;
    display: flex;
    flex-wrap: wrap;
    
    img {
        width: 11.9rem;
        height: 9.5rem;
        border-radius: 0.3rem 0.3rem 0 0;
        margin-bottom: 0.3rem;
    }

    p {
        font-size: 0.8rem;
        width: 11.8rem;
        margin-top: 0.1rem;
        text-align: center;
        color: #666;
        font-family: LexendLight;
    }
`

export const Box = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5rem;
    margin-right: 1rem;

    width: 12rem;
    height: 12.9rem;
    border: 1px solid #ccc;
    border-radius: 0.3rem;
    background-color: #fdffff;
    box-shadow: 6px 5px 7px rgba(0, 0, 0, 0.1);
`

export const Reviews = styled.div`
    margin-bottom: 2rem;

    div {
        margin-bottom: 2rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        padding: 1.5rem 1.5rem;
        background-color: #ffffff;

    }

    hr {
        margin-bottom: 1rem;
        border-radius: 10rem;
        width: 35rem;
        opacity: 0.3;
    }

    .tour {
        margin-bottom: 0.5rem;
        font-size: 1.5rem;
    }
    .title {
        font-size: 1.8rem;
        margin-bottom: 0.7rem;
    }

    .content {
        margin-top: 0.3rem;
        font-family: LexendLight;
    }
`