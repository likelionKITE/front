import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';


function TravelInfo() {
    const Embassyurl="https://www.korean.net/homepage/intro/ambassy_site.do";
    const subwayurl="https://apps.apple.com/us/app/subway-korea/id325924444";
    const taxiurl="https://www.kakaocorp.com/page/service/service/KakaoT?lang=en";
    const mapurl="https://apps.apple.com/us/app/naver-map-navigation/id311867728";
    const trainurl="https://www.letskorail.com/ebizbf/EbizBfKrPassAbout.do";
    const busurl="https://www.kobus.co.kr/main.do"
    return(
        <div>
            <h1>Helpful information for your trip</h1>
            <hr></hr>
            <div className='Embassy'>
                <h2>Information about embassies in Korea</h2>
                <button onClick={()=>{window.open(Embassyurl)}}>Check Embassy</button>
                <h4>When you click this button, you can find the location and contact information of the embassy in Korea.</h4>
            </div>
            <hr></hr>
            <div className='Transportation'>
                <h2>Information about transportation in Korea</h2>
                <li>If you want to move inside one  city, you can use city buses, subways, and taxis.</li>
                <button onClick={()=>{window.open(subwayurl)}}>Subway Korea: 이미지로 링크 연결할 예정</button>
                <button onClick={()=>{window.open(taxiurl)}}>Kakao T: 이미지로 링크 연결할 예정</button>
                <button onClick={()=>{window.open(mapurl)}}>Naver map: 이미지로 링크 연결할 예정</button>
                <li>If you want to travel between different cities, intercity buses and various trains are available.</li>
                <button onClick={()=>{window.open(trainurl)}}>Train: 이미지로 링크 연결할 예정</button>
                <button onClick={()=>{window.open(busurl)}}>Express Train: 이미지로 링크 연결할 예정</button>
                <button>뭔가 하나 더 추가 예정. 3개씩 맞추려고</button>
            </div>
        </div>
    )
}

export default TravelInfo;