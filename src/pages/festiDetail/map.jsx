import React, {useState, useEffect} from 'react';
import { detailApi } from './apis';
import { useParams } from 'react-router-dom';

const {kakao} = window;

function MapComponent() {

    const [festidata, setFestiData] = useState([]);
    const [detailCommon, setDetailCommon] = useState([]);
  
    const contentId = useParams().contentId;
  
    const getDetail = async () => {
      const nowDetail = await detailApi(contentId);
      setFestiData(nowDetail[0]);
      // setDetailCommon(nowDetail[1]);
    }
    useEffect(() => {
      getDetail();
    }, []);

    const [mapx, setMapx] = useState([]);
    const [mapy, setMapy] = useState([]);

    useEffect(() => {
        setMapx(festidata.map((festi) => (
            festi.mapx
        )));
        setMapy(festidata.map((festi) => (
            festi.mapy
        )));
    }, [festidata]);

    // useEffect(() => {
    //     console.log(mapx);
    //     console.log(mapy);
        
    // }, []);

    // {festidata.map((festi) => (
    //     <li key={festi.content_id}>
    //         {festi.mapx}
    //     </li>
    // ))}
// 여기 위에 있는 fest.mapx를 밑에 options에 넣어야함

    useEffect(() => {
        console.log(mapx);
        console.log(mapy);

        const container = document.getElementById('map');
        const options = {
            // LatLng 자리가 위도 경도 순서인데, 이것을 festidata에서 받아와야함
            center: new kakao.maps.LatLng(mapy[0], mapx[0]),
            level: 3
        };
        const map = new kakao.maps.Map(container, options);
    }, [mapx, mapy]);

    return (
        <div id="map" style={{
            width: '400px',
            height: '200px'
        }}>
            {/* <p>{mapx}</p> */}
        </div>
    );

}

export default MapComponent;