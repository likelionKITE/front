import styled from 'styled-components';
import Slider from 'react-slick';
//margin: 2rem auto;
//padding: 2rem;
//max-width: 1200px;
// h1 {
//     text-align: left;
//     width: 70%;
//     margin-left: 7rem;
//     margin-bottom: 0.2rem;
//   }
//Image container
//margin-top: 2rem;
//padding: 2rem 0;
export const FestivalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5rem;
  width: 100%;

  h2 {
    font-size: 1.7rem;
    color: #333;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    font-family: Lexend;
  }

  p {
    font-size: 1rem;
    color: #666;
    font-family: LexendLight;
  }
`;

export const Pagetitle = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 1rem 0rem;
    margin-bottom: 0.2rem;
    background-color: #e2f5e2;

    h1 {
    width: 65%;
    font-family: Lexend;
  }
`

export const YourSlider = styled(Slider)`
  opacity: 1;
  width: 62rem;
  transform: translate3d(0px, 0px, 0px);
  justify-content: center;
  margin-bottom: 4rem;

  .slick-slide {
    transition: opacity 0.5s ease-in-out;

    img {
      width: 16rem;
      height: 21rem;
      object-fit: cover;
      margin-bottom:0.4 rem;
    }

    p {
      font-size: 0.9rem;
      width: 16rem;
      margin-top: 0.2rem;
      text-align: center;
    }
  }
`;

export const CategorySelect = styled.select`
padding: 0.5rem 1rem;
margin: 0.4rem;
border-radius: 0.2rem;
background-color: #f0f0f0;
font-size: 1rem;
cursor: pointer;
border: none;
`;

export const CategorySelectWrapper = styled.div`
  display: flex; 
  flex-direction: row;
  align-items: center;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #e2f5e2;
  width: 100%;
  margin-top: 1rem;

  .wrapper {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 10px;
    width: 65%;
    padding-top: 2rem;
    padding-bottom: 1rem;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 12rem;
      height: 13rem;
      border: 1px solid #ccc;
      border-radius: 0.3rem;
      padding-bottom: 0.5rem;
      margin-bottom: 0.5rem;
      background-color: #fdffff;
      box-shadow: 6px 5px 7px rgba(0, 0, 0, 0.1);

      img {
        width: 11.9rem;
          height: 9.5rem;
          border-radius: 0.3rem 0.3rem 0 0;
          margin-bottom: 0.3rem;
      }

      p {
        width: 100%;
        word-wrap: break-word;
        font-size: 0.8rem;
        text-align: center;
        margin: 0.13rem 0.1rem;
      }
    }
  }
`;
//브랜치 실수 확인용
