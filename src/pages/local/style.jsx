import styled from 'styled-components';

export const LocalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 20px;
`;

export const LocationButton = styled.button`
    padding: 10px 20px;
    margin: 5px;
    border: none;
    background-color: #f0f0f0;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #e0e0e0;
    }
`;

export const ImageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    margin-bottom: 20px;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;

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
    margin-bottom: 20px;
`;
