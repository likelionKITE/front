import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import {Festi_info} from './style';

function FestiDetail() {


    return (
        <>
        <Festi_info>
                <h1>Festival Info</h1>

            <div class='fest_info'>
                <div class='fest_info_img'>
                    {/* festiDetail 폴더에 있는 hanriver 이미지 추가 */}
                    <img src='https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_960_720.jpg' width='300px' height='300px'></img>

                </div>

                <div class='fest_info_hub'>
                    <p>Name</p>
                    <p><br></br></p>
                    <p>Address</p>
                    <p><br></br></p>
                    <p>My Likes</p>
                </div>

                <div class='fest_info_sub'>
                    <p class='each'>hompage</p>
                    <p class='each'>play time</p>
                    <p class='each'>program</p>
                    <p class='each'>age</p>
                    <p class='each'>open</p>
                    <p class='each'>close</p>
                </div>

                <div class='fest_info_map'>

                    {/* <div id="map" style="width:500px;height:400px;">
                    </div> */}
                    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=b7084bcd5a16ac3795108efeb87312ef"></script>
                    <MapComponent />
                    

                </div>

            </div>

            <div class='review_info'>
                <h1>Review</h1>

                <div class='review_posting'>
                    <p>Title</p>
                    <input type='text'></input>
                    
                    
                </div>

                <div class='review_posting_detail'>
                    <p>Detail</p>
                    <input type='text'></input>
                    <button>post</button>
                </div>

                <div class='review_posted'>
                    <p>작성된 후기 나열칸</p>
                    <input type='text'></input>
                    
                </div>

            </div>

            </Festi_info>
        </>

    );
}


const MapComponent = () => {
  useEffect(() => {
    // 카카오맵 API 스크립트가 로드된 후 실행될 함수
    const initializeMap = () => {
      const container = document.getElementById('map');
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      const map = new window.kakao.maps.Map(container, options);
    };

    if (window.kakao) {
      // 카카오맵 API 스크립트가 이미 로드되어 있는 경우
      initializeMap();
    } else {
      // 카카오맵 API 스크립트 로드가 완료되면 초기화 함수를 실행
      window.initializeMap = initializeMap;
    }
  }, []);

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};


export default FestiDetail;
