import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
  width: 100%;

  hr {
    margin: 3rem 0rem;
    color: black;
  }
`;

export const Image = styled.img`
  width: 55rem;
  height: 45rem;
  margin-bottom: 0.5rem;
`;

export const InfoMap = styled.div`
  display: flex;
  flex-direction: row;
  width: 65%;
  margin-bottom: 3rem;

  img {
    width: 30rem;
    height: 28rem;
    margin-bottom: 0.5rem;
    border-radius: 0.5rem;
    margin-right: 1.5rem;
  }
`

export const MapContainer = styled.div`
  width: 50%;
  height: 25rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 10px;
  overflow: hidden;
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 20px;
  white-space: pre-line;

  .info {
    font-family: Lexend;
    margin-right: 0.5rem;
    font-size: 1.3rem;
  }

  .content {
    font-family: LexendLight;
    font-size: 1.15rem;
  }
`;

export const Overview = styled.div`
  display: flex;
  flex-direction: column;
  height: 14rem;
  overflow: hidden;

  .info {
    font-family: Lexend;
    margin-bottom: 0.5rem;
    font-size: 1.3rem;
  }

  .content {
    font-family: LexendLight;
    font-size: 1.15rem;
  }
`;

export const ReviewContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
  width: 50%;
`;

export const ReviewForm = styled.div`
  margin-top: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 20px;
`;

export const ReviewItem = styled.div`
  border: 1px solid #ccc;
  padding: 0.8rem 1rem;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .time {
    font-family: Dosis;
    margin-bottom: 0.2rem;
    font-size: 0.9rem;
  }

  h3 {
    font-family: Lexend;
    margin-top: 0.8rem;
  }

  p {
    font-family: LexendLight;
    margin-top: 0.8rem;
  }

  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const ReviewActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const ReviewEditForm = styled.div`
margin-top: 10px;
padding: 10px;
background-color: #f5f5f5;
border-radius: 4px;
`;

export const SubmitButton = styled.button`
background-color: #385bf6;
  color: white;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
`;

export const CancelButton = styled.button`
  background-color: #ccc;
  color: white;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 4px;
`;

export const LikeButton = styled.button`
  background-color: ${props => (props.liked ? '#FFF' : '#FFF')};
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  font-size: 25px;
  margin-bottom: 2rem;
`;

export const Star = styled.span`
  font-size: 25px;
  cursor: pointer;
  color: ${props => (props.selected ? '#FFD700' : '#DDD')};
`;

export const HomepageLink = styled.a`
  color: #007bff;
  text-decoration: none;
`;

export const Title = styled.h1`
  font-size: 2rem;
  width: 60%;
  margin-top: 1rem;
  margin-bottom: 10px;
  font-family: Lexend;
  text-align: center;
`;

export const Subtitle = styled.h2`
  font-size: 25px;
  margin-bottom: 10px;
  font-family: Lexend;
`;

export const Input = styled.input`
width: 100%;
padding: 8px;
margin-bottom: 10px;
border: 1px solid #ccc;
border-radius: 4px;
`;

export const Textarea = styled.textarea`
width: 100%;
height: 8rem;
padding: 8px;
margin-bottom: 10px;
border: 1px solid #ccc;
border-radius: 4px;
resize: none;
`;

export const EditButton = styled.button`
    padding: 0.2rem 0.8rem;
    margin: 0.4rem;
    margin-right: 41rem;
    border-radius: 0.2rem;
    background-color: #f0f0f0;
    font-size: 0.8rem;
    cursor: pointer;
    transition: background-color 0.3s;
    border: 1px solid #000;

    &:hover {
        background-color: #e0e0e0;
    }
`;

export const DeleteButton = styled.button`
    padding: 0.4rem 0.9rem;
    margin: 0.4rem;
    margin-left: 0rem;
    border-radius: 0.2rem;
    background-color: #f0f0f0;
    font-size: 0.8rem;
    cursor: pointer;
    transition: background-color 0.3s;
    border: 1px solid #000;

    &:hover {
        background-color: #e0e0e0;
    }
`;

export const SaveButton = styled.button`
  background-color: #49db6b;
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.7rem;
`;

export const WriteReviewTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export function removeBreakTags(str) {
  return str.replace(/<br\s*\/?>/g, '\n'); // <br> 태그를 개행문자(\n)로 변환
}