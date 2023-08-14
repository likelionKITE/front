import styled from 'styled-components';

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
    padding-bottom: 0;

    p {
        font-size: 2rem;
        padding-top: 1rem;
        padding-bottom: 0.8rem;
        margin-right: 1rem;
        margin-left: 1.5rem;
        font-family: Lexend;
        color: #3d3d38;
    }

    img {
        width: 100%;
        height: 40rem;
        opacity: 0.85;
    }
`;

// 여행지
export const StyledArrow = styled.div`
    display: block;
    width: 1rem;
    height: 1rem;
    background-color: #f00; // 배경색을 변경하려면 이 값을 변경하세요.
    color: #fff; // 화살표 색상을 변경하려면 이 값을 변경하세요.
    cursor: pointer;
    // 여기에 더 많은 스타일을 추가할 수 있습니다.
`;

export const Travel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 2rem;
    width: 100%;

    p {
        font-size: 2rem;
        padding-bottom: 0.6rem;
        margin-right: 42rem;
    }

    div img {
        width: 15rem;
        height: 10rem;
        border-radius: 0.3rem;
    }

    div p {
        font-size: 1rem;
        padding-left: 0.3rem;
        margin-right: 0;
        width: 15rem;
    }
`

