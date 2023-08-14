import styled from 'styled-components';

export const StyledFestivalList = styled.div`
  text-align: center;

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  select {
    font-size: 16px;
    padding: 8px;
    margin: 10px;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: #f5f5f5;
    border-radius: 5px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
    &:hover {
        background-color: #e0e0e0;
      }  

    img {
      max-width: 100px;
      max-height: 100px;
      margin-bottom: 10px;
    }

    h2 {
      font-size: 18px;
      margin: 0;
    }
  }

  .this_month {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    padding: 10px 0;
  }

  p {
    font-size: 18px;
  }
`;

export const StyledPageContainer = styled.div`
padding: 20px;
  background-color: #f9f9f9;
`;
