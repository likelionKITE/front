import styled from 'styled-components';
import Slider from 'react-slick';


export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 4rem;
`;

// 배너
export const Banner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #fefeeb;
    padding: 0;
    margin: 0;

    p {
        font-size: 2rem;
        padding-top: 1rem;
        padding-bottom: 0.8rem;
        margin-right: 1rem;
        margin-left: 1.5rem;
        font-family: Lexend;
        color: #3d3d38;
        width: 100% // 이 부분을 3으로 설정
    }

    img {
        width: 100%; // 이 부분을 7로 설정
        height: 40rem;
        opacity: 0.85;
    }
`;




// 여행지
export const Travel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 4rem;
    width: 100%;

    p {
        font-size: 2rem;
        padding-bottom: 0.6rem;
        margin-right: 45rem;
    }

    div img {
        width: 15rem;
        height: 10rem;
        border-radius: 0.3rem;
    }

    div p {
        font-size: 1rem;
        padding-left: 0.3rem;
        margin-top: 0.2rem;
        margin-right: 0;
        text-align: center;
        width: 14.5rem;
        font-family: LexendLight;
    }
`

export const Festival = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 4rem;
    padding-bottom: 5rem;
    width: 100%;
`

export const YourSlider = styled(Slider)`
    opacity: 1;
    width: 62rem;
    transform: translate3d(0px, 0px, 0px);
    justify-content: center;
    margin-bottom: 6rem;

    div img {
        width: 15rem;
        height: 10rem;
        border-radius: 0.3rem;
    }

    div p {
        font-size: 1rem;
        padding-left: 0.3rem;
        margin-top: 0.2rem;
        margin-right: 0;
        text-align: center;
        width: 14.5rem;
        font-family: LexendLight;
    }
`;

export const Button = styled.div`
    display: flex;
    margin-right: 28rem;
    margin-bottom: 1rem;

    button {
        width: 5rem;
        height: 2.5rem;
        font-size: 1rem;
        border: none;
        border-radius: 0.3rem;
        margin-right: 0.5rem;
        transition: background-color 0.4s ease;
    }

    button:hover {
        background-color: #b5b3b3; /* 호버 시 배경색 진해지는 색상으로 변경 */
    }

    p {
        font-family: Dosis;
        font-size: 2rem;
        margin-right: 1rem;
    }
`

