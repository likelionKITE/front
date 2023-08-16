import styled from 'styled-components';

export const TravelContainer = styled.div`
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
`;

export const Pagetitle = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 1rem 0rem;
    margin-bottom: 0.2rem;
    background-color: #e9fdfd;

    h1 {
    width: 65%;
    font-family: Lexend;
    margin-left: 0rem;
  }
`

export const Text = styled.p`
  color: #a9b0ba;
  font-size: 1.2rem;
  width: 100%;
  text-align: left;
  margin-bottom: 0.3rem;
  font-family: LexendLight;
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 7.5rem;
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const CategorySelect = styled.select`
  width: 25%;
  padding: 0.5rem 1rem;
  margin: 0.4rem;
  border-radius: 0.2rem;
  background-color: #f0f0f0;
  font-size: 0.95rem;
  cursor: pointer;
  border: ${(props) => (props.selected ? '1px solid #000' : 'none')};
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #e9fdfd;
  width: 100%;
  margin-top: 1rem;
  padding-top: 1rem;

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
      height: 12.9rem;
      border: 1px solid #ccc;
      border-radius: 0.3rem;
      margin-bottom: 0.5rem;
      padding-bottom: 0.5rem;
      background-color: #fdffff;
      box-shadow: 6px 5px 7px rgba(0, 0, 0, 0.1);

      img {
        width: 11.9rem;
          height: 9.5rem;
          border-radius: 0.3rem 0.3rem 0 0;
          margin-bottom: 0.3rem;
      }

      p {
        width: 11.8rem;
        word-wrap: break-word;
        font-size: 0.8rem;
        text-align: center;
        margin: 0.2rem 0;
        font-family: LexendLight;
      }
    }
  }
`;

export const SelectWrapper = styled.div`
display: flex;
flex-direction: column;
width: 65%;
align-items: center;
margin-top: 1rem;
margin-bottom: 1rem;

> div {
  margin-right: 2rem;
}
`;

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #e9fdfd;
    padding-bottom: 2rem;

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