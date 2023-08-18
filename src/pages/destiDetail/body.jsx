import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { removeParenthesesContent } from '../local/body';
import styled from 'styled-components';
import {
  Container,
  Image,
  MapContainer,
  DetailContainer,
  DetailContainer2,
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
  Overview
} from '../festiDetail/style'

const Star = styled.span`
  font-size: 24px;
  cursor: pointer;
  color: ${props => (props.selected ? '#FFD700' : '#DDD')};
`;

const DestiDetail = () => {
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
  console.log(detailData)
  console.log(detailData.mapx)
  console.log(detailData.first_image)

  // 로그인한 유저 정보
  const currentUser = localStorage.getItem('currentUser');

  // 여행지 정보
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/travel/detail/${content_id}/`);
      setDetailData(response.data);
    } catch (error) {
      console.error('Error fetching detail data:', error);
    }
  };

  // 지도

  const { kakao } = window;

  useEffect(() => {
    // 조건부 렌더링을 사용하여 detailData가 존재할 때만 지도를 렌더링합니다.
    if (detailData && detailData.mapx && detailData.mapy) {
      const container = document.getElementById('map');
      const options = {
        center: new kakao.maps.LatLng(detailData.mapy, detailData.mapx),
        level: 5,
      };
      const map = new kakao.maps.Map(container, options);

      // 지도에 마커 생성 및 호출
      const markerPosition = new kakao.maps.LatLng(detailData.mapy, detailData.mapx);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });
      marker.setMap(map);
    }
  }, [detailData]);
  // 지도 끝

  // 찜
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        if (!token) {
          console.error('Access token not found.');
          return;
        }

        const likeResponse = await axios.get(
          `https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/travel/like/${content_id}/`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setLikeCount(likeResponse.data.like_cnt);
      } catch (error) {
        console.error('Error fetching like information:', error);
      }
    };
    fetchData();
  }, [content_id]);

  const handleLike = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        console.error('Access token not found.');
        //로그인 페이지로 이동
        <Link to="/signin" />;

        return;
      }

      const response = await axios.post(
        `https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/travel/like/${content_id}/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLiked(!liked);
      setLikeCount(response.data.like_cnt);
    } catch (error) {
      console.error('Error liking content:', error);
    }
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
        `https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/travel/review/${content_id}/`,
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
        `https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/travel/review/${content_id}/detail/${reviewId}/`,
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
        `https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/travel/review/${content_id}/detail/${reviewId}/`,
        {
          title: editingReview.title,
          content: editingReview.content,
          rank: editingReview.rank
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
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
      const response = await axios.get(`https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/travel/review/${content_id}/`);
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  useEffect(() => {
    fetchData();
    fetchReviews(); // 리뷰 목록 불러오기
  }, [content_id]);


  // 홈페이지 추출
  const homepageHtml = detailData.detailCommon && detailData.detailCommon[0]?.homepage;

  const regex = /href="([^"]+)"/; // href 속성값을 추출하기 위한 정규식
  const match = homepageHtml ? homepageHtml.match(regex) : null;

  let domain = '';
  if (match && match[1]) {
    const url = match[1];
    domain = new URL(url).hostname; // 도메인 이름만 추출

  }

  return (
    <Container>

      {Object.keys(detailData).length > 0 && (
        <>
          <Title>{detailData.title && removeParenthesesContent(detailData.title)}</Title>

          {/* 찜 */}
          {currentUser ? (
            <LikeButton onClick={handleLike}>
              {liked ? '♥' : '♡'} {likeCount}
            </LikeButton>
          ) : (
            <Link to="/signin"><LikeButton >
              {liked ? '♥' : '♡'}  Total Like: ({likeCount})
            </LikeButton></Link>
          )}

          {/* 여행지 설명 */}
          <InfoMap>
            <Image src={detailData.first_image} alt={detailData.title} />

            <DetailContainer>
              <Text>
                <p className='info'>Address</p>
                <p className='content'>{detailData.addr1}</p>
              </Text>
              <Text>
                <p className='info'>Tel</p>
                <p className='content'>{detailData.tel}</p>
              </Text>
              {domain && (
                <Text>
                  <p className='info'>Homepage</p>
                  <p className='content'><HomepageLink href={match[1]} target="_blank" rel="noopener noreferrer">{domain}</HomepageLink></p>
                </Text>
              )}
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

export default DestiDetail;
