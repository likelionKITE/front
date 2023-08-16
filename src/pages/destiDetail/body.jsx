import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DestiDetail() {
  const [destidata, setDestiData] = useState({});
  const [liked, setLiked] = useState(false);
  const { content_id } = useParams();

  const getDetail = async () => {
    try {
      const url = `https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/travel/detail/${content_id}/`;
      const response = await axios.get(url);
      setDestiData(response.data[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const handleLike = async () => {
    try {
      const likeUrl = `https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/travel/like/${content_id}/`;
      const token = localStorage.getItem('accessToken');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.post(likeUrl, null, config);
      if (response.data.message === 'added') {
        setLiked(true);
      }
    } catch (error) {
      console.error('Error adding like:', error);
    }
  };

  const checkLikedStatus = async () => {
    try {
      const likeStatusUrl = `https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/travel/like/${content_id}/`;
      const token = localStorage.getItem('accessToken');
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.get(likeStatusUrl, config);
      if (response.data.message === 'added') {
        setLiked(true);
      }
    } catch (error) {
      console.error('Error checking liked status:', error);
    }
  };

  useEffect(() => {
    getDetail();
    checkLikedStatus();
  }, []);

  return (
    <>
      <div>
        <h1>DestiDetail: 여행지 개별 페이지</h1>
      </div>

      <div className='desti_info'>
        <div>
          <ul>
            {destidata.first_image && (
              <img className='fest_info_img' src={destidata.first_image} alt='Destination' />
            )}
          </ul>
        </div>

        <div className='like_button'>
          <button onClick={handleLike} disabled={liked}>
            {liked ? '찜 완료' : '찜 하기'}
          </button>
        </div>
      </div>

      {/* 나머지 내용은 여기에 추가 */}
    </>
  );
}

export default DestiDetail;