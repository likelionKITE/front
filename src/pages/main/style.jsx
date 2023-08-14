import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;

export const SliderWrapper = styled.div`
    overflow: hidden;
    
`;

export const Slides = styled.div`
    display: flex;
    width: 100%;
    transition: all 1s ease;
    transform: translateX(${(props) => (props.translateValue ? props.translateValue : 0)}%);
`;

export const Slide = styled.div`
    min-width: 100%;
    text-align: center;

    img {
    width: 70rem;
    max-height: 70rem;
    }
`;

export const ButtonWrapper = styled.div`
    text-align: center;
`;

export const Button = styled.button`
    padding: 10px;
    margin: 5px;
    cursor: pointer;
`;
