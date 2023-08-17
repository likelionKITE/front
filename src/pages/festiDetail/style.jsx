import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:15rem;
  padding-top:7rem;
`;

export const Image = styled.img`
  width: 55rem;
  height: 40rem;
  margin-bottom: 20px;
`;

export const MapContainer = styled.div`
  width: 30rem;
  height: 30rem;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 55rem;
  margin-bottom: 10px;
`;
export const DetailContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 55rem;
  margin-bottom: 20px;
  text-align:justify;
`;

export const ReviewContainer = styled.div`
  margin-top: 20px;
  width: 100%;
`;

export const ReviewForm = styled.div`
  margin-top: 20px;
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 20px;
`;

export const ReviewItem = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
background-color: #007bff;
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
  font-size: 30px;
  margin-bottom: 10px;
`;

export const Subtitle = styled.h2`
  font-size: 25px;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
  white-space: pre-line;
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
padding: 8px;
margin-bottom: 10px;
border: 1px solid #ccc;
border-radius: 4px;
resize: none;
`;

export const EditButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  margin-right: 750px;
`;

export const DeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
`;

export const SaveButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const WriteReviewTitle = styled.h3`
  font-size: 15px;
  margin-bottom: 10px;
`;
export function removeBreakTags(str) {
  return str.replace(/<br\s*\/?>/g, '\n'); // <br> 태그를 개행문자(\n)로 변환
}