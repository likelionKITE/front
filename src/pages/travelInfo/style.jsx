import styled from 'styled-components';
const Container = styled.div`
  text-align: center;
  border: 40px;

  h1 {
    margin-bottom: 20px;
    font-size: 2rem;
  }

  hr {
    margin: 30px;
    border: none;
    border-top: 2px solid #ccc;
  }
`;

const EmbassySection = styled.div`
margin: 20px 0;

h2 {
  margin-bottom: 10px;
  font-size: 1.5rem;
}

h4 {
  margin-top: 10px;
  color: #555;
}

button {
  margin-top: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
}
`;

const TransportationSection = styled.div`
margin: 20px 0;

h2 {
  margin-bottom: 10px;
  font-size: 1.5rem;
  text-align: center;
}

ul {
  list-style: none;
  padding-left: 0;
  text-align: center;

  li {
    margin-bottom: 10px;
    line-height: 1.5;
  }
}

a {
  display: inline-block;
  margin-right: 10px;
}
`;
const ImageLink = styled.a`
display: inline-block;
margin-right: 10px;
overflow: hidden;
transition: transform 0.3s;
h5{
    color: #555;
}

&:hover {
  transform: scale(1.05);
}
`;

const StyledImage = styled.img`
  width: 200px;
  height: auto;
  border-radius: 40px;
`;
export {
    Container, EmbassySection, TransportationSection, ImageLink, StyledImage
}