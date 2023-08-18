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
  font-family: LexendLight;
  margin-bottom: 30px;
  color: #555;
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
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  h2 {
    margin-top: 1rem;
    margin-bottom: 10px;
    font-size: 1.5rem;
    font-family: LexendLight;
  }

  h4 {
    /* margin-top: 10px; */
    margin: 1rem 1rem;
    color: #555;
    font-family: LexendLight;
  }
`;

const AppDescription = styled.a`
  /* margin-top: 10px; */
`

const ImageLink = styled.a`
  display: inline-block;

  width: 130px;
  height: 150px;

  margin-top: 10px;
  margin-right: 30px;
  margin-left: 30px;

  overflow: hidden;
  transition: transform 0.3s;

  h4 {
    margin-bottom: 0.5rem;
  }

  h5 {
    color: #555;
    font-family: Dosis;
  }

  &:hover {
    transform: scale(1.05);
  }
`;

const StyledImage = styled.img`
  width: 80px;
  height: auto;
  border-radius: 20px;


`;

export {
  Container,
  CardTitle,
  CardSubtitle,
  Button,
  Section,
  AppDescription,
  ImageLink,
  StyledImage
};