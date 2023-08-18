import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { removeParenthesesContent } from '../local/body';
import styled from 'styled-components';
import {
  Container,
  MapContainer,
  DetailContainer,
  Overview,
  ReviewContainer,
  ReviewForm,
  ReviewItem,
  ReviewActions,
  ReviewEditForm,
  SubmitButton,
  CancelButton,
  LikeButton,
  HomepageLink,
  Title,
  Subtitle,
  Text,
  Input,
  Textarea,
  EditButton,
  DeleteButton,
  SaveButton,
  RatingContainer,
  WriteReviewTitle,
  removeBreakTags,
  InfoMap,
} from './style'
const Star = styled.span`
  font-size: 24px;
  cursor: pointer;
  color: ${props => (props.selected ? '#FFD700' : '#DDD')};
`;

const FestiDetail = () => {
  const { content_id } = useParams();
  const [detailData, setDetailData] = useState({});
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    title: '',
    content: '',
    rank: 5 // 기본 평점 설정
  });
  const [editingReviewId, setEditingReviewId] = useState(null); // 현재 수정 중인 리뷰의 id
  const [editingReview, setEditingReview] = useState({
    title: '',
    content: '',
    rank: 5
  });
  // 로그인한 유저 정보
  const currentUser = localStorage.getItem('currentUser');

  // 여행지 정보
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/festival/detail/${content_id}/`);
      setDetailData(response.data || response.data[0]);
    } catch (error) {
      console.error('Error fetching detail data:', error);
    }
  };

  // 이하 지도구현

  const { kakao } = window;

  useEffect(() => {
    fetchData();
    fetchReviews(); // 리뷰 목록 불러오기
  }, [content_id]);

  useEffect(() => {
    if (window.kakao) { // kakao 객체가 있는지 확인
      if (detailData && detailData.mapx && detailData.mapy) {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(detailData.mapy, detailData.mapx), // window.kakao 사용
          level: 5,
        };
        const map = new window.kakao.maps.Map(container, options);

      // 지도에 마커 생성 및 호출
      const markerPosition = new kakao.maps.LatLng(detailData.mapy, detailData.mapx);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);
    }}
  }, [detailData]);

  // 찜
  useEffect(() => {
    const fetchLikeData = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        if (!token) {
          console.error('Access token not found.');
          return;
        }
  
        const likeResponse = await axios.get(
          `https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/festival/like/${content_id}/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setLikeCount(likeResponse.data.like_cnt);
  
        axios.get(
          `https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/festival/detail/${content_id}/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(likeState => {
          if (likeState.data.like_user_exists == "False") {
            setLiked(false);
            
          } else {
            setLiked(true);
          };
          console.log(liked);
          console.log(likeState.data.like_user_exists);
        })
        .catch(error => {
          console.error('Error fetching like information:', error);
        });
        
      } catch (error) {
        console.error('Error fetching like information:', error);
      }
    };
    fetchLikeData();
  }, [content_id]);


  const handleLike = () => {
    const token = localStorage.getItem('accessToken');
    if (!token) {
      console.error('Access token not found.');
      return;
    }
  
    axios.post(
      `https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/festival/like/${content_id}/`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then(response => {
      if (response.data.message === 'added') {
        setLiked(true);
      } else {
        setLiked(false);
      }
      setLikeCount(response.data.like_cnt);
    })
    .catch(error => {
      console.error('Error liking content:', error);
    });
  };
  

  // 별점

  const Rating = ({ initialValue, onChange }) => {
    const [selectedStars, setSelectedStars] = useState(initialValue);

    const handleStarClick = starIndex => {
      setSelectedStars(starIndex + 1);
      onChange(starIndex + 1); // 선택한 별점 값을 부모 컴포넌트로 전달
    };

    return (
      <div>
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            selected={index < selectedStars}
            onClick={() => handleStarClick(index)}
          >
            ★
          </Star>
        ))}
      </div>
    );
  };

  const handleRatingChange = (value) => {
    setNewReview({
      ...newReview,
      rank: value // 선택한 별점 값을 newReview의 rank로 설정
    });
  };

  // 리뷰 작성
  const handleAddReview = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      if (!accessToken) {
        console.error('Access token not found.');
        return;
      }

      const response = await axios.post(
        `https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/festival/review/${content_id}/`,
        {
          title: newReview.title,
          content: newReview.content,
          rank: newReview.rank // 기본 평점 또는 선택한 평점 값을 전달
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      );

      setReviews([...reviews, response.data]);
      setNewReview({
        title: '',
        content: '',
        rank: 5
      });

      await fetchReviews();
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };

  // 리뷰 삭제
  const handleDeleteReview = async (reviewId) => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      if (!accessToken) {
        console.error('Access token not found.');
        return;
      }

      await axios.delete(
        `https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/festival/review/${content_id}/detail/${reviewId}/`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      );

      // 삭제한 리뷰를 화면에서 제거하기 위해 리뷰 상태 업데이트
      setReviews(reviews.filter((review) => review.id !== reviewId));
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  // 리뷰 수정
  const handleEditReview = (review) => {
    setEditingReviewId(review.id);
    setEditingReview({
      title: review.title,
      content: review.content,
      rank: review.rank
    });
  };

  const handleCancelEdit = () => {
    setEditingReviewId(null);
    setEditingReview({
      title: '',
      content: '',
      rank: 5
    });
  };

  const handleSaveEdit = async (reviewId) => {
    try {
      const accessToken = localStorage.getItem('accessToken');

      if (!accessToken) {
        console.error('Access token not found.');
        return;
      }

      const response = await axios.put(
        `https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/festival/review/${content_id}/detail/${reviewId}/`,
        {
          title: editingReview.title,
          content: editingReview.content,
          rank: editingReview.rank
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        },
        console.log()
      );

      // 수정한 리뷰를 화면에서 업데이트하기 위해 리뷰 상태 업데이트
      setReviews(reviews.map((review) => (review.id === reviewId ? response.data : review)));
      setEditingReviewId(null); // 수정 상태 해제
    } catch (error) {
      console.error('Error editing review:', error);
    }
  };

  // 리뷰 목록 불러오기
  const fetchReviews = async () => {
    try {
      const response = await axios.get(
        `https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/festival/review/${content_id}/`
      );
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  // 홈페이지 추출
  const homepageHtml = detailData.detailCommon && detailData.detailCommon[0]?.homepage;

  const regex = /href="([^"]+)"/; // href 속성값을 추출하기 위한 정규식
  const match = homepageHtml ? homepageHtml.match(regex) : null;

  let domain = '';
  if (match && match[1]) {
    const url = match[1];
    domain = new URL(url).hostname; // 도메인 이름만 추출

  }

  const telPattern = /\d{2,}-\d{2,}-\d{3,}-\d{4,}/;
  const telMatch = detailData.tel ? detailData.tel.match(telPattern) : null;
  const extractedTel = telMatch ? telMatch[0] : "";

  return (
    <Container>

      {Object.keys(detailData).length > 0 && (
        <>
          <Title>{detailData.title && removeParenthesesContent(detailData.title)}</Title>
          {/* 찜 */}
          <LikeButton onClick={handleLike}>
            {liked ? '♥' : '♡'} {likeCount}
          </LikeButton>

          {/* 여행지 설명 */}
          <InfoMap>
            <img src={detailData.first_image} alt={detailData.title} />
            <DetailContainer>
              <Text>
                <p className='info'>Address</p>
                <p className='content'>{detailData.addr1}</p>
              </Text>
              <Text>
                <p className='info'>Tel</p>
                <p className='content'>{extractedTel}</p>
              </Text>
              {domain && (
                <Text>
                  <p className='info'>Homepage</p>
                  <p className='content'><HomepageLink href={match[1]} target="_blank" rel="noopener noreferrer">{domain}</HomepageLink></p>
                </Text>
              )}
              <Text>
                <p className='info'>Event Place</p>
                <p className='content'>{detailData.detail_intro_fest[0]?.event_place}</p>
              </Text>
              <Text>
                <p className='info'>Event Dates</p>
                <p className='content'>{detailData.detail_intro_fest[0]?.event_start_date} -{' '}
                  {detailData.detail_intro_fest[0]?.event_end_date}</p>
              </Text>
              <Overview>
                <p className='info'>Overview</p>
                <p className='content'>{removeBreakTags(detailData.detailCommon && detailData.detailCommon[0]?.overview)}</p>
              </Overview>
            </DetailContainer>
          </InfoMap>

          {/* 지도 */}
          <MapContainer id="map"></MapContainer>

          {/* 리뷰 */}
          <ReviewContainer>
            <Subtitle>Reviews</Subtitle>
            {reviews.map((review) => (
              <ReviewItem key={review.id}>
                {editingReviewId === review.id ? (
                  <ReviewEditForm>
                    <Input
                      type="text"
                      value={editingReview.title}
                      onChange={(e) => setEditingReview({ ...editingReview, title: e.target.value })}
                    />
                    <Textarea
                      value={editingReview.content}
                      onChange={(e) => setEditingReview({ ...editingReview, content: e.target.value })}
                    />
                    <RatingContainer>
                      <Rating initialValue={editingReview.rank} onChange={(value) => setEditingReview({ ...editingReview, rank: value })} />
                    </RatingContainer>
                    <ReviewActions>
                      <SaveButton onClick={() => handleSaveEdit(review.id)}>Save</SaveButton>
                      <CancelButton onClick={handleCancelEdit}>Cancel</CancelButton>
                    </ReviewActions>
                  </ReviewEditForm>
                ) : (
                  <div>
                    <Rating initialValue={review.rank} readOnly />
                    <h3>{review.title}</h3>
                    <p>{review.content}</p>

                    <hr />

                    <p className='time'>Writer  {review.user}</p>
                    <p className='time'>Created At {review.created_at} Updated At {review.updated_at}</p>
                    {currentUser && review.user === currentUser && (
                      <ReviewActions>
                        <DeleteButton onClick={() => handleDeleteReview(review.id)}>Delete</DeleteButton>
                        <EditButton onClick={() => handleEditReview(review)}>Edit</EditButton>
                      </ReviewActions>
                    )}
                  </div>
                )}
              </ReviewItem>
            ))}

            <ReviewForm>
              <WriteReviewTitle>Write a Review</WriteReviewTitle>
              <RatingContainer>
                <Rating initialValue={newReview.rank} onChange={handleRatingChange} />
              </RatingContainer>
              <Input
                type="text"
                placeholder="Title"
                value={newReview.title}
                onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
              />
              <Textarea
                placeholder="Content"
                value={newReview.content}
                onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
              />

              {currentUser ? (
                <SubmitButton onClick={handleAddReview}>Submit</SubmitButton>
              ) : (
                <Link to="/signin"><SubmitButton>Submit</SubmitButton></Link>
              )}
            </ReviewForm>
          </ReviewContainer>
        </>
      )}
    </Container>
  );
};

export default FestiDetail;