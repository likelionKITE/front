import axios from 'axios';
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MainContainer, Banner, StyledArrow, Travel } from './style';
import { removeParenthesesContent } from '../local/body';

function Main() {
    const [bannerList, setBannerList] = useState([]);
    const [mostLiked, setMostLiked] = useState([]);
    const [themeFestivals, setThemeFestivals] = useState({ flower: [], food: [], tradition: [], music: [] });

    useEffect(() => {
        axios.get('https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/main/')
            .then((response) => {
                const { bannerlist_response, mostlikedtravel_response, themefestival_response } = response.data;

                const cleanBannerList = bannerlist_response.map(item => ({
                    ...item,
                    title: removeParenthesesContent(item.title)
                }));

                const cleanMostLiked = mostlikedtravel_response.map(item => ({
                    ...item,
                    title: removeParenthesesContent(item.title)
                }));

                setBannerList(cleanBannerList);
                setMostLiked(cleanMostLiked);
                setThemeFestivals(themefestival_response); // 이 부분도 필요한 경우 변환할 수 있습니다.
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);


    // 배너 슬라이더
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        fade: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const BannerSlider = ({ title, items }) => (
        <Banner>
            <p>{title}</p>
            <Slider {...settings} style={{ width: '65rem', opacity: 1, transform: 'translate3d(0px, 0px, 0px)' }}>
                {items.map((item) => (
                    <div key={item.content_id}>
                        <img src={item.first_image} alt={item.title} />
                    </div>
                ))}
            </Slider>
        </Banner>
    );

    // 여행지 슬라이더
    function Arrow(props) {
        const { className, style, onClick } = props;
        return (
            <StyledArrow
                className={className}
                style={{ ...style, display: "block", background: 'black', borderRadius: "50%" }}
                onClick={onClick}
            />
        );
    }

    const TravelSettings = {
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    const TravelSlider = ({ title, items }) => (
        <Travel>
            <p>{title}</p>
            <Slider {...TravelSettings} style={{ width: '65rem', opacity: 1, transform: 'translate3d(0px, 0px, 0px)' }}>
                {items.map((item) => (
                    <div key={item.content_id}>
                        <img src={item.first_image2} alt={item.title} />
                        <p>{item.title}</p>
                    </div>
                ))}
            </Slider>
        </Travel>
    );

    return (
        <MainContainer>

            <BannerSlider title="Catch the Breeze with Kite, Sail Through Korea's Wonders" items={bannerList} />

            {/* 좋아요 많은 여행지 */}
            <TravelSlider title="Most liked Tourist Destination" items={mostLiked} />


            {/* <div>
                {themeFestivals.flower.map(festival => (
                    <div key={festival.content_id}>
                        <img src={festival.first_image2} alt={festival.title} />
                        <p>{festival.title}</p>
                    </div>
                ))}
            </div> */}
        </MainContainer>
    );
}

export default Main;
