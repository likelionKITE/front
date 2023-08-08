import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import Subway from './Images/Subway.jpg'
import Kobus from './Images/Kobus.jpg'
import Korail from './Images/Korail.jpg'
import Map from './Images/Map.jpg'
import Taxi from './Images/Taxi.jpg'
import * as style from "./style"

function TravelInfo() {
  const Embassyurl = 'https://www.korean.net/homepage/intro/ambassy_site.do';

  return (
    <style.Container>
      <div>
      <h1>Helpful information for your trip</h1>
      <hr />

      <style.EmbassySection>
        <h2>Information about embassies in Korea</h2>
        <button onClick={() => window.open(Embassyurl)}>Check Embassy</button>
        <h4>When you click this button, you can find the location and contact information of the embassy in Korea.<br></br>After checking the location and contact information of each embassy, ​​you can receive various assistance.</h4>
      </style.EmbassySection>

      <hr />

      <style.TransportationSection>
        <h2>Information about transportation in Korea</h2>
        <h4>If you want to move inside one city, you can use city buses, subways, and taxis.</h4>
        <a href="https://apps.apple.com/us/app/subway-korea/id325924444" target="_blank" rel="noopener noreferrer">
            <style.ImageLink>
                <style.StyledImage src={Subway} alt="subway korea"/>
                <h4>subway korea</h4>
                <h5>find timetable of subway</h5>
            </style.ImageLink>
        </a>
        <a href="https://www.kakaocorp.com/page/service/service/KakaoT?lang=en" target="_blank" rel="noopener noreferrer">
            <style.ImageLink>
                <style.StyledImage src={Taxi} alt="Kakao Taxi" />
                <h4>Kakao Taxi</h4>
                <h5>Book taxi in advance</h5>
            </style.ImageLink>
        </a>
        <a href="https://apps.apple.com/us/app/naver-map-navigation/id311867728" target="_blank" rel="noopener noreferrer">
            <style.ImageLink>
                <style.StyledImage src={Map} alt="Naver map" />
                <h4>Naver map</h4>
                <h5>Check location of bus in real time</h5>
            </style.ImageLink>
        </a>
          <h4>If you want to travel between different cities, intercity buses and various trains are available.</h4>
        <a href="https://www.kobus.co.kr/main.do" target="_blank" rel="noopener noreferrer">
            <style.ImageLink>
                <style.StyledImage src={Kobus} alt="intercity bus" />
                <h4>Intercity bus</h4>
                <h5>find timetable of intercity bus</h5>
            </style.ImageLink>
        </a>
        <a href="https://www.letskorail.com/ebizbf/EbizBfKrPassAbout.do" target="_blank" rel="noopener noreferrer">
            <style.ImageLink>
                <style.StyledImage src={Korail} alt="express train" />
                <h4>Express train</h4>
                <h5>Reserve various express trains</h5>
            </style.ImageLink>
        </a>
      </style.TransportationSection>
      </div>
    </style.Container>
  );
}

export default TravelInfo;