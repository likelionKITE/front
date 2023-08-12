// style.jsx
import styled from 'styled-components';

export const LocalContainer = styled.div`
    padding: 20px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const LocationButton = styled.button`
    margin: 5px;
`;

export const ImageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;

    img {
    width: 200px; // 원하는 너비로 설정
    height: auto; // 높이는 자동으로 조절되게 함
    }
`;
