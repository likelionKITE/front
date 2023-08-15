import styled from 'styled-components';
import Slider from "react-slick";


export const LocalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
    width: 100%;

    h1 {
        text-align: left;
        width: 70%;
        margin-left: 7rem;
        margin-bottom: 0.2rem;
    }
`

export const Text = styled.p`
    color: #a9b0ba;
        font-size: 1.2rem;
        text-align: left;
        width: 70%;
        margin-left: 7.5rem;
        margin-bottom: 1rem;
`

export const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;
    width: 70%;
`;

export const LocationButton = styled.button`
    padding: 0.5rem 1rem;
    margin: 0.4rem;
    border-radius: 0.2rem;
    background-color: #f0f0f0;
    font-size: 0.95rem;
    cursor: pointer;
    transition: background-color 0.3s;

    border: ${props => props.selected ? '1px solid #000' : 'none'};

    &:hover {
        background-color: #e0e0e0;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: #e9fdfd;
    width: 100%;
    margin-top: 1rem;

    .wrapper {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(2, 1fr);
        gap: 10px;
        width: 65%;
        padding-top: 2rem;
        padding-bottom: 1rem;

        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 11rem;
            border: 1px solid #ccc;
            border-radius: 0.3rem;
            padding-bottom: 0.5rem;
            background-color: #fdffff;
            box-shadow: 6px 5px 7px rgba(0, 0, 0, 0.1);

            img {
            width: 11rem;
            height: 8.5rem;
            border-radius: 0.3rem 0.3rem 0 0;
            margin-bottom: 0.3rem;
        }

            p {
                width: 10rem;
                word-wrap: break-word;
                font-size: 0.9rem;
                text-align: center;
            }
        }
}
`;

export const Festival = styled.div`
    display: flex;
    flex-wrap: wrap;

    img {
        width: 10rem;
        height: 10rem;
    }

    p {
        width: 10rem;
        word-wrap: break-word;
        font-size: 12px;
        text-align: center;
    }
`;

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #e9fdfd;
    padding-bottom: 1.5rem;
    margin-bottom: 5rem;

    button {
        padding: 0.2rem 0.5rem;
        margin: 0.2rem;
        border: 1px solid #ccc;
        border-radius: 0.2rem;
        background-color: #fdffff;
        font-size: 0.95rem;
        cursor: pointer;
        transition: background-color 0.3s;

    &:hover {
        background-color: #e0e0e0;
    }
    }
`;
