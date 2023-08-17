import styled from 'styled-components';
import Slider from 'react-slick';

export const Wrapper = styled.div`
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    h2 {
        width: 50%;
        margin-bottom: 0.5rem;
        font-family: LexendLight;
    }
`

export const Nickname = styled.div`
    width: 50%;
    margin-bottom: 2rem;
`

export const Likes = styled.div`
    margin-bottom: 2rem;
    width: 50%;
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
    width: 50%;
    margin-bottom: 5rem;

    div {
        margin-bottom: 2rem;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
        padding: 1rem 1.5rem;
    }

    .tour {
        margin-bottom: 0.5rem;
    }
    .title {
        font-size: 1.8rem;
        margin-bottom: 0.7rem;
    }

    .content {
        font-family: LexendLight;
    }
`