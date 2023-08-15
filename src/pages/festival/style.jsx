import styled from 'styled-components';
import Slider from 'react-slick';

export const FestivalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  padding: 2rem;
  max-width: 1200px;

  h1 {
    font-size: 2.5rem;
    color: #333;
    margin-bottom: 1.5rem;
  }

  h2 {
    font-size: 2rem;
    color: #333;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    color: #666;
  }
`;

export const YourSlider = styled(Slider)`
  width: 65rem;
  opacity: 1;
  transform: translate3d(0px, 0px, 0px);

  .slick-slide {
    transition: opacity 0.5s ease-in-out;

    img {
      max-height: 12rem;
    }

    h2 {
      font-size: 1.5rem;
      margin-top: 0.5rem;
      color: #333;
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

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #e9fdfd;
  width: 100%;
  margin-top: 2rem;
  padding: 2rem 0;

  .wrapper {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    width: 100%;
    margin: 0 auto;
    padding-top: 2rem;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      border: 1px solid #ccc;
      border-radius: 0.3rem;
      padding: 1rem;
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      img {
        width: 100%;
        max-height: 12rem;
        object-fit: cover;
        border-radius: 0.3rem 0.3rem 0 0;
        margin-bottom: 1rem;
      }

      p {
        font-size: 1rem;
        text-align: center;
        margin: 0.5rem 0;
      }
    }
  }
`;
