import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Festi_info } from './style';
import { detailApi } from './apis';
// import MapComponent from './map';
import axios from 'axios';

function FestiDetail() {
  // 찜 버튼
  const [liked, setLiked] = useState(false);


  const handleLikeClick = () => {
    try {
      const response = axios.post(`127.0.0.1:8000/festival/like/${content_id}/`);
      
      if (response.data.message === 'success') {
        setLiked(true);
      } else {
        setLiked(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    
    }

    setLiked(!liked);
  }
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

  const addReview = async () => {
    if (reviewInput) {
      const newReview = {
        content_id: content_id,
        user: 'Current user',
        title: 'Firest review',
        content: reviewInput,
        rank: 5,
        created_at: new Date().toISOString(),
        updatedat: new Date().toISOString()
      };
      try {
        const token = localStorage.getItem("accessToken");

        await axios.post(`https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/festival/review/${content_id}/`, {
          headers: {
              'Authorization': `Bearer ${token}`
          }},
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
                <button className='like_button' onClick={handleLikeClick}>{liked ? '🩷' : '🤍'}</button>
              </div>
            </div>
          </div>

          <div className='fest_info_bottom'>
            <div className='fest_info_bottom_overview+homepage'>
              <ul>

                <div className='sub_overview'>
                  <p className='sub_p_tag'>Overview</p>
                  {festidata.detailCommon && festidata.detailCommon[0].overview}
                </div>
                <div><p><br></br></p></div>
                <div className='sub_homepage'>
                  <p className='sub_p_tag'>Homepage</p>

                  {domain && <p>{domain} </p>}


                </div>

              </ul>
            </div>

            <div className='fest_info_bottom_else'>
              <ul>

                <div className='fest_info_bottom_else_details'>

                  <div className='sub_address'>
                    <p className='sub_p_tag'>Address</p>
                    {/* {festidata.addr2} */}
                  </div>

                  <div className='sub_tel'>
                    <p className='sub_p_tag'>Tel</p>
                    {festidata.tel}
                  </div>

                  <div class='sub_age'>
                    {/* <div class='sub_rest_date'>
                        <p class='sub_p_tag'>Closed Date</p>
                        {festidata.detail_intro_fest.rest_date} </div>

                      <div class='sub_info_center'>
                        <p class='sub_p_tag'>Info Center</p>
                        {festidata.detail_intro_travel[0].info_center} </div> */}
                  </div>
                </div>

              </ul>
            </div>
          </div>

          <p className='sub_p_tag' >Location</p>
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