import React from 'react';
import {
  Container,
  CardTitle,
  CardSubtitle,
  Button,
  Section,
  AppDescription,
  ImageLink,
  StyledImage,
} from './style';
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
          <h2>Information about embassies in Korea</h2>
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
          <h2>Information about transportation in Korea</h2>
          <CardSubtitle>
            If you want to move within one city, you can use city buses,
            subways, and taxis.
          </CardSubtitle>

          <ImageLink href="https://apps.apple.com/us/app/subway-korea/id325924444" target='blank'>
            <AppDescription>
              <StyledImage src={Subway} alt="subway korea" />
              <h4>subway korea</h4>
              <h5>find timetable of subway</h5>
            </AppDescription>
          </ImageLink>

          <ImageLink href="https://www.kakaocorp.com/page/service/service/KakaoT?lang=en" target='blank'>
            <AppDescription>
              <StyledImage src={Taxi} alt="Kakao Taxi" />
              <h4>Kakao Taxi</h4>
              <h5>Book taxi in advance</h5>
            </AppDescription>
          </ImageLink>

          <ImageLink href="https://apps.apple.com/us/app/naver-map-navigation/id311867728" target='blank'>
            <AppDescription>
              <StyledImage src={Map} alt="Naver map" />
              <h4>Naver map</h4>
              <h5>Check location of bus in real time</h5>
            </AppDescription>
          </ImageLink>
        </Section>

        <Section>
          <h2>Traveling between different cities</h2>
          <CardSubtitle>
            If you want to travel between different cities, intercity buses and
            various trains are available.
          </CardSubtitle>

          <ImageLink href="https://www.kobus.co.kr/main.do" target='blank'>
            <AppDescription>
              <StyledImage src={Kobus} alt="intercity bus" />
              <h4>Intercity bus</h4>
              <h5>find timetable of intercity bus</h5>
            </AppDescription>
          </ImageLink>

          <ImageLink href="https://www.letskorail.com/ebizbf/EbizBfKrPassAbout.do" target='blank'>
            <AppDescription>
              <StyledImage src={Korail} alt="express train" />
              <h4>Express train</h4>
              <h5>Reserve various express trains</h5>
            </AppDescription>
          </ImageLink>
        </Section>
      </div>
    </Container>
  );
}

export default TravelInfo;
