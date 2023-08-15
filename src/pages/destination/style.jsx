import styled from 'styled-components';

export const TravelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  width: 100%;

  h1 {
    text-align: left;
    width: 70%;
    margin-left: 7rem;
    margin-bottom: 0.2rem;
  }
`;

export const Text = styled.p`
  color: #a9b0ba;
  font-size: 1.2rem;
  text-align: left;
  margin-bottom: 1rem;
`;

export const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  width: 70%;
  margin-left: 7.5rem;
`;

export const CategorySelect = styled.select`
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
      width: 11rem;
      border: 1px solid #ccc;
      border-radius: 0.3rem;
      padding-bottom: 0.5rem;
      background-color: #fdffff;
      box-shadow: 6px 5px 7px rgba(0, 0, 0, 0.1);

      img {
        width: 11rem;
          height: 8.5rem;
          border-radius: 0.3rem 0.3rem 0 0;
          margin-bottom: 0.3rem;
      }

      p {
        width: 100%;
        word-wrap: break-word;
        font-size: 0.9rem;
        text-align: center;
        margin: 0.5rem 0;
      }
    }
  }
`;
export const SelectWrapper = styled.div`
display: flex;
align-items: center;
margin-bottom: 1rem;

> div {
  margin-right: 2rem;
}
`;