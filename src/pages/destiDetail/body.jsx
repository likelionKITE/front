import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import {Desti_info} from './style';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DestiDetail() {
    const [destidata, setDestiData] = useState({});
  const { content_id } = useParams();

  const getDetail = async () => {

    try {
      const url = `https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/travel/detail/${content_id}/`
      const response = await axios.get(url);
      setDestiData(response.data[0]);
      console.log(destidata.first_image);

    } catch (error) {
      console.error('Error fetching data:', error);
      // setLoading(false); // 데이터 로딩 중 에러가 발생했음을 설정
    }


  }
  useEffect(() => {
    getDetail();
  }, []);
    return(
        <>

            <div>
                <h1>DestiDetail: 여행지 개별 페이지</h1>
            </div>

            <div class='desti_info'>
            <div>
              <ul >
                <img
                  className='fest_info_img' src={destidata.first_image}>
                </img>
              </ul>
            </div>

                <div class='desti_info_hub'>
                    <p>핵심정보</p>
                </div>

                <div class='desti_info_sub'>
                    <p>부가정보</p>
                </div>

                <div class='desti_info_map'>
                    <p> 각 개별 여행지의 지도 api</p>
                    <img
                  className='fest_info_img' src={destidata.first_image}>
                </img>
                </div>

            </div>

            <div class='review_info'>
                <div class='review_posting'>
                    <p>후기 작성칸</p>
                </div>

                <div class='review_posted'>
                    <p>작성된 후기 나열칸</p>
                </div>

            </div>
        </>

    );
}

export default DestiDetail;
