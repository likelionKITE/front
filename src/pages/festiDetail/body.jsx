import jwt_decode from 'jwt-decode';
import { removeParenthesesContent } from '../local/body';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Festi_info } from './style';
import { detailApi } from './apis';
// import MapComponent from './map';
import axios from 'axios';
import styled from 'styled-components';

function FestiDetail() {
  // 축제 정보 불러오기
  const [festidata, setFestiData] = useState({});
  const { content_id } = useParams();

  const getDetail = async () => {

    try {
      const url = `https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/festival/detail/${content_id}/`
      const response = await axios.get(url);
      setFestiData(response.data);

    } catch (error) {
      console.error('Error fetching data:', error);
      // setLoading(false); // 데이터 로딩 중 에러가 발생했음을 설정
    }
  }
  useEffect(() => {
    getDetail();
  }, []);

  // 찜
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
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
        setLiked(likeResponse.data.like_cnt > 0);
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
        return;
      }

      const response = await axios.post(
        `https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/festival/like/${content_id}/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.like_cnt >= 0) {
        setLiked(!liked);
        setLikeCount(liked ? likeCount - 1 : likeCount + 1);
      }
    } catch (error) {
      console.error('Error liking content:', error);
    }
  };
  // 리뷰 작성 및 나열
  const [reviews, setReviews] = useState([]);
  const [reviewInput, setReviewInput] = useState('');
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewRank, setReviewRank] = useState(5);

  //리뷰 작성
  const addReview = async () => {
    console.log("")

    if (reviewInput && reviewTitle) {
      const newReview = {
        title: reviewTitle,
        content: reviewInput,
        rank: reviewRank,
      };

      try {
        const token = localStorage.getItem('accessToken');

        const response = await axios.post(
          `https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/festival/review/${content_id}/`,
          newReview,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.id) {
          setReviews([...reviews, response.data]);
          setReviewInput('');
          setReviewTitle('');
          setReviewRank(5);
        }
      } catch (error) {
        console.error('Error adding review:', error);
      }
    }
  }
  //리뷰 나열
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/festival/review/${content_id}/`
        );
        setReviews(response.data);
        console.log(response.data);

      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, [content_id]);

  //이하 수정과 삭제
  const [editingReview, setEditingReview] = useState(null);


  const editReview = async (review) => {
    if (!editingReview) {
      setEditingReview(review);
    } else {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await axios.put(
          `https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/festival/review/${content_id}/detail/${review.id}/`,
          editingReview,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.content_id) {
          const updatedReviews = reviews.map(existingReview => {
            if (existingReview.id === review.id) {
              return { ...existingReview, ...editingReview };
            }
            return existingReview;
          });
          setReviews(updatedReviews);
          setEditingReview(null);
        }
      } catch (error) {
        console.error('Error updating review:', error);
      }
    }
  };
  const cancelEdit = () => {
    setEditingReview(null);
  };




  const deleteReview = async (reviewId) => {
    try {
      const token = localStorage.getItem('accessToken');

      const response = await axios.delete(
        `https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/festival/review/${content_id}/detail/${reviewId}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 204) {
        const updatedReviews = reviews.filter(existingReview => existingReview.id !== reviewId);
        setReviews(updatedReviews);
      }
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };


  // 이하 지도구현

  const { kakao } = window;

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(festidata.mapy, festidata.mapx),
      level: 5,
    };
    const map = new kakao.maps.Map(container, options);

    //지도에 마커 생성 및 호출
    const markerPosition = new kakao.maps.LatLng(festidata.mapy, festidata.mapx);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);


  }, [festidata.mapx, festidata.mapy]);

  // 홈페이지 도메인 추출
  const homepageHtml = festidata.detailCommon && festidata.detailCommon[0]?.homepage;

  const regex = /href="([^"]+)"/; // href 속성값을 추출하기 위한 정규식
  const match = homepageHtml ? homepageHtml.match(regex) : null;

  let domain = '';
  if (match && match[1]) {
    const url = match[1];
    domain = new URL(url).hostname; // 도메인 이름만 추출

  }

  return (//<Festi_info>
    <>
      <div>

      </div>
        <h1>Tourist Destination</h1>


        <div className='fest_info'>
          <div className='fest_info_top'>
            <div>
              <ul >

                <img
                  className='fest_info_img' src={festidata.first_image}>
                </img>

              </ul>
            </div>
            <div className='fest_info_hub'>

              <ul>

                <div>
                  <p className='hub_p_tag'>Name</p>
                  {festidata.title}
                  <p><br></br></p>
                </div>

                <div>
                  <p className='hub_p_tag'>Address</p>
                  {festidata.addr1}
                  <p><br></br></p>
                </div>

              </ul>
              {/* 찜 구현 */}

              <div>
                <p className='hub_p_tag'>My Likes (Click 🤍)</p>
                <button className='like_button' onClick={handleLike}>{liked ? '🩷' : '🤍'}  Total Like ({likeCount})</button>

                {/* <button onClick={handleLike}>Like </button>
              <p>Total Likes: ({likeCount})</p> */}
              </div>
            </div>
          </div>

          <div className='fest_info_bottom'>
            <div className='fest_info_bottom_overview+homepage'>

              <div className='sub_overview'>
                <p className='sub_p_tag'>Overview</p>
                {festidata.detailCommon && festidata.detailCommon[0].overview}
              </div>

              <div><p><br></br></p></div>

            </div>
            <div className='sub_homepagesub_tel'>
              <div className='sub_homepage'>
                <p className='sub_p_tag'>Homepage</p>
                {domain && <p>{domain} </p>}
              </div>

              <div className='sub_tel'>
                <p className='sub_p_tag'>Tel</p>
                {festidata.tel ? festidata.tel.replace(/<br\s*\/?>/gm, '\n').replace(/'\n'/g, '<br>') : ''}
              </div>
            </div>

            <div className='fest_info_bottom_else'>

              <div className='fest_info_bottom_else_details'>

                <div className='sub_entry_fee'>
                  <p className='sub_p_tag'>Entry Fee</p>
                  {festidata.detail_intro_fest && festidata.detail_intro_fest[0].use_time_festival.replace(/<br>/g, ' ')}

                </div>

                <div className='sub_category'>
                  <p className='sub_p_tag'>Category</p>
                  {festidata.cat1}
                </div>

                <div className='sub_date'>
                  <p className='sub_p_tag'>Duration</p>
                  {festidata.detail_intro_fest && festidata.detail_intro_fest[0].event_start_date} ~ {festidata.detail_intro_fest && festidata.detail_intro_fest[0].event_end_date}
                </div>
              </div>
            </div>
          </div>

          <p className='sub_p_tag' >Location</p>
          <p className='sub_p_tag_0' >{festidata.addr1}</p>

          <div className='fest_info_map'>
            <div id="map" style={{ width: '500px', height: '500px' }}></div>;
          </div>
        </div>

        <div>

          <div className="review_info">
            <h1>Review</h1>
            <div className="review_posting">
              <div className="review_posting_input">
                {/* 리뷰 생성 */}
                <p>Details</p>

                <textarea
                  id="title_text"
                  placeholder="Review Title"
                  type="text"
                  value={reviewTitle}
                  onChange={(e) => setReviewTitle(e.target.value)}
                />
                <textarea
                  id="content_text"
                  placeholder="Post Your Review"
                  type="text"
                  value={reviewInput}
                  onChange={(e) => setReviewInput(e.target.value)}
                />

                <input
                  id="rank_number"
                  placeholder="Rank (1-5)"
                  type="number"
                  min="1"
                  max="5"
                  value={reviewRank}
                  onChange={(e) => setReviewRank(Number(e.target.value))}
                />
                <button className="posting_button" onClick={addReview}>
                  post
                </button>
              </div>

              <div className="review_posted">
                {/* 리뷰 나열 */}
                <p>Other Reviews</p>

                {reviews.slice().reverse().map((review, idx) => (
                  <div className="list" key={idx}>
                    {editingReview && editingReview.id === review.id ? (
                      <>
                        <input
                          type="text"
                          value={editingReview.title}
                          onChange={(e) => setEditingReview({ ...editingReview, title: e.target.value })}
                        />
                        <input
                          type="text"
                          value={editingReview.content}
                          onChange={(e) => setEditingReview({ ...editingReview, content: e.target.value })}
                        />


                        <button onClick={() => editReview(review)}>Save</button>
                        <button onClick={cancelEdit}>Cancel</button>
                      </>
                    ) : (
                      <>
                        <h2>Title: {review.title}</h2>
                        <p>Details: {review.content}</p>
                        <p>Rank: {review.rank}</p>

                        <p>User Nickname: {review.user}

                        </p>
                        <p>Written on: {new Date(review.created_at).toLocaleDateString()}</p>
                        <p>Updated on: {new Date(review.updated_at).toLocaleDateString()}
                        </p>

                        <button onClick={() => setEditingReview({ ...review })}>Edit</button>
                        <button onClick={() => deleteReview(review.id)}>Delete</button>
                      </>
                    )}
                  </div>
                ))}
              </div>



            </div>
          </div>
        </div>
    </>

  );

};
export default FestiDetail;