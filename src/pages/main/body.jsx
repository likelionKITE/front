import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { MainContainer, Banner, Travel } from './style';
import './main.css';
import { removeParenthesesContent } from '../local/body';

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

function Main() {
    const [bannerList, setBannerList] = useState([]);
    const [mostLiked, setMostLiked] = useState([]);
    const [themeFestivals, setThemeFestivals] = useState({ flower: [], food: [], traditional: [], music: [] });
    const [selectedTheme, setSelectedTheme] = useState('flower'); // 추가된 상태 변수: 기본으로 꽃 테마를 선택합니다.

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
                setThemeFestivals(themefestival_response);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    // 여행지 슬라이더
    const TravelSettings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    const ContentSlider = ({ title, items }) => {
        return (
            <Travel>
                <p>{title}</p>
                <Slider {...TravelSettings} style={{ width: '65rem', opacity: 1, transform: 'translate3d(0px, 0px, 0px)' }}>
                    {items.map((item) => (
                        <Link to={item.link} key={item.content_id}>
                            <div>
                                <img src={item.first_image2} alt={item.title} />
                                <p>{item.title}</p>
                            </div>
                        </Link>
                    ))}
                </Slider>
            </Travel>
        );
    };

    return (
        <MainContainer>

            {/* 배너 이미지 */}
            <BannerSlider title="Catch the Breeze with KITE, Sail Through Korea's Wonders" items={bannerList} />

            {/* 좋아요 많은 여행지 */}
            <ContentSlider
                title={<>Most Tourist Destination</>}
                items={mostLiked.map(item => ({
                    ...item,
                    link: `/destiDetail/${item.content_id}`
                }))}
            />

            {/* 선택된 테마에 따른 축제 슬라이더 */}
            <p>Themed Festival</p>
            <div>
                <button onClick={() => setSelectedTheme('flower')}>꽃</button>
                <button onClick={() => setSelectedTheme('food')}>음식</button>
                <button onClick={() => setSelectedTheme('traditional')}>전통</button>
                <button onClick={() => setSelectedTheme('music')}>음악</button>
            </div>
            {selectedTheme && (
                <ContentSlider
                    items={themeFestivals[selectedTheme].map(item => ({
                        ...item,
                        link: `/festiDetail/${item.content_id}`
                    }))}
                />
            )}

        </MainContainer>
    );
}

export default Main;
