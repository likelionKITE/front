import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Festi_info } from './style';
import { detailApi } from './apis';
import MapComponent from './map';
import axios from 'axios';

function FestiDetail() {
  // 찜 버튼
  const [liked, setLiked] = useState(false);
  const handleLikeClick = () => {
    setLiked(!liked);
  }
  // 축제 정보 불러오기
  const [festidata, setFestiData] = useState({});
  // const [detailCommon, setDetailCommon] = useState([]);
  const { content_id } = useParams();

  // const contentId = useParams().content_id;

  // const [loading, setLoading] = useState(true); // 데이터 로딩 상태

  const getDetail = async () => {

    try {
      const url = `https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/festival/detail/${content_id}/`
      const response = await axios.get(url);
      setFestiData(response.data);

      // const nowDetail = await detailApi(contentId);
      // setFestiData(nowDetail[0]);

      // setDetailCommon(nowDetail[1]);
      // setLoading(false); // 데이터 로딩이 완료되었음을 설정
    } catch (error) {
      console.error('Error fetching data:', error);
      // setLoading(false); // 데이터 로딩 중 에러가 발생했음을 설정
    }


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

        <div className='fest_info'>
          <div className='fest_info_top'>
            <div>
              <ul >

                {/* <img
                    className ='fest_info_img' src={festidata.first_image}>
                  </img> */}

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
                  {/* {festidata.addr1} */}
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
                  {/* {festidata.detailCommon.overview} */}

                </div>
                <div><p><br></br></p></div>
                <div className='sub_homepage'>
                  <p className='sub_p_tag'>Homepage</p>
                  {/* {festidata.detailCommon.homepage} */}
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
                    {/* {festidata.tel}  */}
                  </div>

                  {/* <div class='sub_age'>
                        <p class='sub_p_tag'>Age</p>
                        {festidata.detail_intro_travel.exp_age_range} </div>


                      <div class='sub_rest_date'>
                        <p class='sub_p_tag'>Closed Date</p>
                        {festidata.detail_intro_travel.rest_date} </div>

                      <div class='sub_info_center'>
                        <p class='sub_p_tag'>Info Center</p>
                        {festidata.detail_intro_travel[0].info_center} </div> */}
                </div>

              </ul>
            </div>
          </div>

          <p className='sub_p_tag' >Location</p>
          <div className='fest_info_map'>

            <MapComponent />


          </div>

        </div>

        <div className='review_info'>
          <h1>Review</h1>

          <div className='review_posting'>

            <div className='review_posting_input'>
              <p>Details</p>
              <input id='content_text' placeholder='Post Your Review' type='text'
                onChange={(e) => { setInput(e.target.value) }}></input>
              <button className='posting_button' onClick={() => { addTitle(input) }}>post</button>

            </div>

            <div className='review_posted'>
              <p>Other Reviews</p>
              {
                title.map(function (content, idx) {

                  return (
                    <div className='list' key={idx}>
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