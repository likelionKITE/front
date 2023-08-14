import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Festi_info } from './style';
import { detailApi } from './apis';
import MapComponent from './map';

function FestiDetail() {
  // 찜 버튼
  const [liked, setLiked] = useState(false);
  const handleLikeClick = () => {
    setLiked(!liked);
  }
  // 축제 정보 불러오기
  const [festidata, setFestiData] = useState([]);
  // const [detailCommon, setDetailCommon] = useState([]);

  const contentId = useParams().contentId;

  const getDetail = async () => {
    const nowDetail = await detailApi(contentId);
    setFestiData(nowDetail[0]);
    // setDetailCommon(nowDetail[1]);
  }
  useEffect(() => {
    getDetail();
  }, []);

  // 리뷰 작성 및 나열
  let [title, setTitle] = useState([]);
  let [clickedNum, setClickedNum] = useState(0);
  let [input, setInput] = useState('');

  function addTitle(input) {
    let newTitle = [...title];
    newTitle.unshift(input);
    setTitle(newTitle);
  }
  // const saveUserId = (e) => {
  //   setId(e.target.value);
  //   console.log(e.target.value);
  // }

  return (
    <>
      <Festi_info>
        <h1>Tourist Destination</h1>

        <div class='fest_info'>
          <div class='fest_info_top'>
            <div>
              <ul>
                {festidata.map((festi) => (
                  <li key={festi.content_id}>
                    <img
                      class='fest_info_img' src={festi.first_image}>
                    </img>
                  </li>

                ))}
              </ul>
            </div>

            <div class='fest_info_hub'>

              <ul>
                {festidata.map((festi) => (
                  <li key={festi.content_id}>
                    <div>
                      <p class='hub_p_tag'>Name</p>
                      {festi.title}
                      <p><br></br></p>
                    </div>

                    <div>
                      <p class='hub_p_tag'>Address</p>
                      {festi.addr1}
                      <p><br></br></p>
                    </div>

                  </li>

                ))}
              </ul>
              <div>
                <p class='hub_p_tag'>My Likes (Click 🤍)</p>
                <button class='like_button' onClick={handleLikeClick}>{liked ? '🩷' : '🤍'}</button>
              </div>
            </div>
          </div>

          <div class='fest_info_bottom'>
            <div class='fest_info_bottom_overview+homepage'>
              <ul>
                {festidata.map((festi) => (
                  <li key={festi.content_id}>
                    <div class='sub_overview'>
                      <p class='sub_p_tag'>Overview</p>
                      {festi.detailCommon[0].overview}

                    </div>
                    <div><p><br></br></p></div>
                    <div class='sub_homepage'>
                      <p class='sub_p_tag'>Homepage</p>
                      {festi.detailCommon[0].homepage}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div class='fest_info_bottom_else'>
              <ul>
                {festidata.map((festi) => (
                  <li key={festi.content_id}>
                    <div class='fest_info_bottom_else_details'>

                      <div class='sub_address'>
                        <p class='sub_p_tag'>Address</p>
                        {festi.addr2}
                      </div>

                      <div class='sub_tel'>
                        <p class='sub_p_tag'>Tel</p>
                        {festi.tel} </div>

                      <div class='sub_age'>
                        <p class='sub_p_tag'>Age</p>
                        {festi.detail_intro_travel[0].exp_age_range} </div>


                      <div class='sub_rest_date'>
                        <p class='sub_p_tag'>Closed Date</p>
                        {festi.detail_intro_travel[0].rest_date} </div>

                      <div class='sub_info_center'>
                        <p class='sub_p_tag'>Info Center</p>
                        {festi.detail_intro_travel[0].info_center} </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p class='sub_p_tag' >Location</p>
          <div class='fest_info_map'>
           
            <MapComponent />


          </div>

        </div>

        <div class='review_info'>
          <h1>Review</h1>

          <div class='review_posting'>

            <div class='review_posting_input'>
              <p>Details</p>
              <input id='content_text' placeholder='Post Your Review' type='text'
                onChange={(e) => { setInput(e.target.value) }}></input>
              <button class='posting_button' onClick={() => { addTitle(input) }}>post</button>

            </div>

            <div class='review_posted'>
            <p>Other Reviews</p>
            {
              title.map(function (content, idx) {

                return (
                  <div class='list' key={idx}>
                    <h2 onClick={() => { setClickedNum(idx) }}>
                      {content}
                    </h2>
                  </div>
                )
              })
            }

            </div>
          </div>
        </div>

      </Festi_info >
    </>

  );
}


// const MapComponent = () => {
//   useEffect(() => {
//     // 카카오맵 API 스크립트가 로드된 후 실행될 함수
//     const initializeMap = () => {
//       const container = document.getElementById('map');
//       const options = {
//         center: new window.kakao.maps.LatLng(33.450701, 126.570667),
//         level: 3,
//       };
//       const map = new window.kakao.maps.Map(container, options);
//     };

//     if (window.kakao) {
//       // 카카오맵 API 스크립트가 이미 로드되어 있는 경우
//       initializeMap();
//     } else {
//       // 카카오맵 API 스크립트 로드가 완료되면 초기화 함수를 실행
//       window.initializeMap = initializeMap;
//     }
//   }, []);

//   return <div id="map" style={{ width: '100%', height: '20px' }}></div>;
// };

export default FestiDetail;
