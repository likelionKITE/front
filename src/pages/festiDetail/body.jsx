import jwt_decode from 'jwt-decode';

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Festi_info } from './style';
import { detailApi } from './apis';
// import MapComponent from './map';
import axios from 'axios';

function FestiDetail() {
  // 찜 버튼
  const [liked, setLiked] = useState(false);

  // const handleLikeClick = () => {
  //   try {
  //     const response = axios.post(`127.0.0.1:8000/festival/like/${content_id}/`);

  //     if (response.data.message === 'success') {
  //       setLiked(true);
  //     } else {
  //       setLiked(false);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }}


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

  // 리뷰 작성 및 나열
  const [reviews, setReviews] = useState([]);
  const [reviewInput, setReviewInput] = useState('');

  const isTokenValid = (token) => {
    try {
      const decodedToken = jwt_decode(token);
      const currentTime = Date.now() / 1000;

      if (decodedToken.exp < currentTime) {
        return (false, console.log('토큰 만료')); // 토큰이 만료됨

      }

      return true; // 토큰이 유효함
    } catch (error) {
      return (false, console.log('토큰 파싱 오류 등으로 유효하지 않음')); // 토큰 파싱 오류 등으로 유효하지 않음
      ;
    }
  };


  const addReview = async () => {
    if (reviewInput) {
      const newReview = {
        content_id: content_id,
        // user: 'Current user',
        // title: 'First review',
        content: reviewInput,
        rank: 5,
        created_at: new Date().toISOString(),
        updatedate: new Date().toISOString()
      };
      try {
        const token = localStorage.getItem("accessToken");

        await axios.post(`https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/festival/review/${content_id}/`, newReview, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        },
        );
        setReviews([...reviews, newReview]);
        setReviewInput('');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  };
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/festival/review/${content_id}/`); // 리뷰 목록을 가져오는 API 주소를 적절하게 설정해주세요
        setReviews(response.data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    }; fetchReviews();
  }, []);



  // 이하 지도구현

  const { kakao } = window;

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(festidata.mapy, festidata.mapx),
      level: 3,
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
    console.log(domain);
  }



  // const homepageHtml = festidata.detailCommon[0].homepage;

  // const regex = /href="([^"]+)"/; // href 속성값을 추출하기 위한 정규식
  // const match = homepageHtml.match(regex);

  // let domain = '';
  // if (match && match[1]) {
  //   const url = match[1];
  //   domain = new URL(url).hostname; // 도메인 이름만 추출
  //   console.log(domain);
  // }



  return (
    <>
      <div>

      </div>

      <Festi_info>
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
              <div>
                <p className='hub_p_tag'>My Likes (Click 🤍)</p>
                {/* <button className='like_button' onClick={handleLikeClick}>{liked ? '🤍' : '🩷'}</button> */}
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
                {festidata.tel ? festidata.tel.replace(/<br\s*\/?>/gm, '\n').replace(/'\n'/g, '<br>' ) : ''}
              </div>
            </div>

            <div className='fest_info_bottom_else'>

              <div className='fest_info_bottom_else_details'>

              <div className='sub_entry_fee'>
                  <p className='sub_p_tag'>Entry Fee</p>
                  {festidata.detail_intro_fest && festidata.detail_intro_fest[0].use_time_festival.replace(/<br>/g, ' ')}

                </div>

              <div className='sub_age'>
                  <p className='sub_p_tag'>Age Limit</p>
                  {festidata.detail_intro_fest && festidata.detail_intro_fest[0].age_limit}
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

        <div className='review_info'>
          <h1>Review</h1>

          <div className='review_posting'>

            <div className='review_posting_input'>
              <p>Details</p>
              <input id='content_text' placeholder='Post Your Review' type='text'
                value={reviewInput}
                onChange={(e) => { setReviewInput(e.target.value) }} />

              <button className='posting_button' onClick={addReview}>
                post
              </button>

            </div>

            <div className='review_posted'>
              <p>Other Reviews</p>
              {/* {festidata.reviews && festidata.reviews[0].content} */}

              {reviews.map((review, idx) => (
                <div className='list' key={idx}>
                  <h2>{review.content}</h2>
                </div>
              ))}

            </div>
          </div>
        </div>

      </Festi_info >

    </>

  );
}

export default FestiDetail;