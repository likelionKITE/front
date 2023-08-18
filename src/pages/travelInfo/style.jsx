import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  margin-top: 7rem;
  font-family: LexendLight;
`;

const CardTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 2rem;
  font-family: LexendLight;
`;

const CardSubtitle = styled.h4`
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: LexendLight;
`;

const Button = styled.button`
  margin-top: 10px;
  background-color: #bebce8;
  color: white;
  border: none;
  padding: 18px 30px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: LexendLight;

  &:hover {
    background-color: #6E7783;
  }
`;

const Section = styled.div`
  margin: 20px;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 10px;
    font-size: 1.5rem;
    font-family: LexendLight;
  }

  h4 {
    margin-top: 10px;
    color: #555;
    font-family: LexendLight;
  }
`;

const ImageLink = styled.a`
  display: inline-block;
  margin-right: 20px;
  overflow: hidden;
  transition: transform 0.3s;

  h5 {
    color: #555;
    font-family: LexendLight;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledImage = styled.img`
  width: 100px;
  height: auto;
  border-radius: 40px;
`;

export {
  Container,
  CardTitle,
  CardSubtitle,
  Button,
  Section,
  ImageLink,
  StyledImage
};