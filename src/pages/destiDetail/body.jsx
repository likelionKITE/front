import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { removeParenthesesContent } from '../local/body';

const DestiDetail = () => {
  const { content_id } = useParams();
  const [detailData, setDetailData] = useState({});
  const [likeCount, setLikeCount] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    title: '',
    content: '',
    rank: 5 // 기본 평점 설정
  });
  const [editingReviewId, setEditingReviewId] = useState(null); // 현재 수정 중인 리뷰의 id
  const [editingReview, setEditingReview] = useState({
    title: '',
    content: ''
  });

  // 여행지 정보
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/travel/detail/${content_id}/`);
      setDetailData(response.data[0]);
    } catch (error) {
      console.error('Error fetching detail data:', error);
    }
  };

  // 찜
  const handleLike = async () => {
    try {
      const accessToken = localStorage.getItem('accessToken');
  
      if (!accessToken) {
        console.error('Access token not found.');
        return;
      }
  
      const response = await axios.post(
        `https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/travel/like/${content_id}/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      );
  
      // 좋아요 개수 업데이트
      setLikeCount(response.data.like_cnt);
    } catch (error) {
      console.error('Error adding like:', error);
    }
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
          rank: newReview.rank
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      );

      // 새 리뷰 데이터를 화면에 표시하기 위해 리뷰 상태 업데이트
      setReviews([...reviews, response.data]);

      // 작성한 리뷰 폼 초기화
      setNewReview({
        title: '',
        content: '',
        rank: 5
      });

      // 리뷰 목록 다시 불러오기
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
      content: review.content
    });
  };

  const handleCancelEdit = () => {
    setEditingReviewId(null);
    setEditingReview({
      title: '',
      content: ''
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
          rank: 5
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

  return (
    <div>
      {/* 여행지 설명 */}
      <img src={detailData.first_image} alt={detailData.title} />
      <h1>{detailData.title && removeParenthesesContent(detailData.title)}</h1>
      <p>{detailData.addr1}</p>

      {/* 찜 */}
      <button onClick={handleLike}>Like ({likeCount})</button>

      {/* 리뷰 */}
      <div>
        <h2>Reviews</h2>
        {reviews.map((review) => (
          <div key={review.id}>
            {editingReviewId === review.id ? (
              <div>
                <input
                  type="text"
                  value={editingReview.title}
                  onChange={(e) => setEditingReview({ ...editingReview, title: e.target.value })}
                />
                <textarea
                  value={editingReview.content}
                  onChange={(e) => setEditingReview({ ...editingReview, content: e.target.value })}
                />
                <button onClick={() => handleSaveEdit(review.id)}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </div>
            ) : (
              <div>
                <h3>{review.title}</h3>
                <p>{review.content}</p>
                <button onClick={() => handleDeleteReview(review.id)}>Delete</button>
                <button onClick={() => handleEditReview(review)}>Edit</button>
              </div>
            )}
          </div>
        ))}

        {/* 리뷰 작성 폼 */}
        <div>
          <h3>Write a Review</h3>
          <input
            type="text"
            placeholder="Title"
            value={newReview.title}
            onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
          />
          <textarea
            placeholder="Content"
            value={newReview.content}
            onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
          />
          <button onClick={handleAddReview}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default DestiDetail;
