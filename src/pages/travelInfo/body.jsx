import React from 'react';
import {Container,Section,CardTitle,CardSubtitle,Button,ImageLink,StyledImage} from './style';
import Subway from './Images/Subway.jpg';
import Kobus from './Images/Kobus.jpg';
import Korail from './Images/Korail.jpg';
import Map from './Images/Map.jpg';
import Taxi from './Images/Taxi.jpg';

function TravelInfo() {
  const Embassyurl = 'https://www.korean.net/homepage/intro/ambassy_site.do';

  return (
    <Container>
      <div>
        <CardTitle>Helpful information for your trip</CardTitle>

        <Section>
          <CardTitle>Information about embassies in Korea</CardTitle>
          <Button onClick={() => window.open(Embassyurl)}>Check Embassy</Button>
          <CardSubtitle>
            When you click this button, you can find the location and contact
            information of the embassies in Korea.
            <br />
            After checking the location and contact information of each embassy,
            you can receive various assistance.
          </CardSubtitle>
        </Section>

        <Section>
          <CardTitle>Information about transportation in Korea</CardTitle>
          <CardSubtitle>
            If you want to move within one city, you can use city buses,
            subways, and taxis.
          </CardSubtitle>
          {/* Subway */}
          <a
            href="https://apps.apple.com/us/app/subway-korea/id325924444"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImageLink>
              <StyledImage src={Subway} alt="subway korea" />
              <h4>subway korea</h4>
              <h5>find timetable of subway</h5>
            </ImageLink>
          </a>
          {/* Taxi */}
          <a
            href="https://www.kakaocorp.com/page/service/service/KakaoT?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImageLink>
              <StyledImage src={Taxi} alt="Kakao Taxi" />
              <h4>Kakao Taxi</h4>
              <h5>Book taxi in advance</h5>
            </ImageLink>
          </a>
          {/* Naver Map */}
          <a
            href="https://apps.apple.com/us/app/naver-map-navigation/id311867728"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImageLink>
              <StyledImage src={Map} alt="Naver map" />
              <h4>Naver map</h4>
              <h5>Check location of bus in real time</h5>
            </ImageLink>
          </a>
          <CardSubtitle>
            If you want to travel between different cities, intercity buses and
            various trains are available.
          </CardSubtitle>
          {/* Intercity Bus */}
          <a
            href="https://www.kobus.co.kr/main.do"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImageLink>
              <StyledImage src={Kobus} alt="intercity bus" />
              <h4>Intercity bus</h4>
              <h5>find timetable of intercity bus</h5>
            </ImageLink>
          </a>
          {/* Express Train */}
          <a
            href="https://www.letskorail.com/ebizbf/EbizBfKrPassAbout.do"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ImageLink>
              <StyledImage src={Korail} alt="express train" />
              <h4>Express train</h4>
              <h5>Reserve various express trains</h5>
            </ImageLink>
          </a>
        </Section>
      </div>
    </Container>
  );
}

export default TravelInfo;