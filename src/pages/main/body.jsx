import axios from 'axios';
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MainContainer, SliderWrapper, Slides, Slide, ButtonWrapper, Button } from './style';

function SimpleSlider({ title, items }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === items.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? items.length - 1 : prevSlide - 1));
    };

    return (
        <SliderWrapper>
            <h1>{title}</h1>
            <Slides translateValue={-currentSlide * 100}>
                {items.map((item) => (
                    <Slide key={item.content_id}>
                        <img src={item.first_image} alt={item.title} />
                        <p>{item.title}</p>
                    </Slide>
                ))}
            </Slides>
            <ButtonWrapper>
                <Button onClick={prevSlide}>Prev</Button>
                <Button onClick={nextSlide}>Next</Button>
            </ButtonWrapper>
        </SliderWrapper>
    );
}

function Main() {
    const [bannerList, setBannerList] = useState([]);
    const [mostLiked, setMostLiked] = useState([]);
    const [themeFestivals, setThemeFestivals] = useState({ flower: [], food: [], tradition: [], music: [] });

    useEffect(() => {
        axios.get('https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/main/')
            .then((response) => {
                const { bannerlist_response, mostlikedtravel_response, themefestival_response } = response.data;

                // 각 데이터를 상태에 할당
                setBannerList(bannerlist_response);
                setMostLiked(mostlikedtravel_response);
                setThemeFestivals(themefestival_response);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <MainContainer>
            {/* 배너 리스트 렌더링 */}
            <div>
                {bannerList.length > 0 && <SimpleSlider title="배너 리스트" items={bannerList} />}
            </div>

            {/* 좋아요 많은 여행지 렌더링 */}
            <div>
                {mostLiked.map(travel => (
                    <div key={travel.content_id}>
                        <img src={travel.first_image2} alt={travel.title} />
                        <p>{travel.title}</p>
                    </div>
                ))}
            </div>

            {/* 꽃 테마 축제 렌더링 */}
            <div>
                {themeFestivals.flower.map(festival => (
                    <div key={festival.content_id}>
                        <img src={festival.first_image2} alt={festival.title} />
                        <p>{festival.title}</p>
                    </div>
                ))}
            </div>

            {/* 다른 테마 축제 또한 비슷한 방식으로 렌더링 */}
        </MainContainer>
    );
}

export default Main;
