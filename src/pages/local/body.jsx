import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight, faLocationDot, faIcons } from "@fortawesome/free-solid-svg-icons";
import { LocalContainer, ButtonContainer, LocationButton, Text, ImageContainer, PaginationContainer, Festival, FestivalContainer, Box, Content } from './style';

export const removeParenthesesContent = (text) => { // 여행지 이름 한글 등 불필요한 부분 제거
    return text
        .replace(/(\([^)]*\))|(\))/g, '') // 괄호와 괄호 내의 내용 제거
        .replace(/\[[^\]]*\]/g, '') // 대괄호와 대괄호 내의 내용 제거
        .replace(/[가-힣]/g, '') // 한글 제거
        .trim(); // 양쪽 공백 제거
};

function Local() {
    const [areas, setAreas] = useState({}); // 지역
    const [selectedArea, setSelectedArea] = useState(null); // 현재 선택한 지역

    // 여행지
    const [travelList, setTravelList] = useState([]); // 현재 선택한 지역의 여행지 리스트
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
    const [pageGroup, setPageGroup] = useState(1); // 현재 페이지의 그룹
    const itemsPerPage = 10; // 한 페이지에 보여줄 여행지 개수
    const pagesPerGroup = 5; // 페이지네이션 5개씩
    const totalGroups = Math.ceil(Math.ceil(travelList.length / itemsPerPage) / pagesPerGroup);

    // 축제 
    const [festivalList, setFestivalList] = useState([]); // 현재 선택한 지역의 축제 리스트
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
    };

    const FestivalSlider = ({ items }) => (
        <Festival>
            <p><FontAwesomeIcon icon={faIcons} /> Festival</p>
            <Slider {...settings} style={{ width: '65rem', opacity: 1, transform: 'translate3d(0px, 0px, 0px)' }}>
                {items.map((item) => (
                    <Link to={`/festiDetail/${item.content_id}`}>
                        <div key={item.content_id}>
                            <img src={item.first_image} alt={item.title} />
                            <p>{removeParenthesesContent(item.title)}</p>
                        </div>
                    </Link>
                ))}
            </Slider>
        </Festival>
    );

    const shouldUseSlider = festivalList.length >= 5; // 슬라이더 사용 여부를 판단

    useEffect(() => { // 지역 불러오기
        axios.get('https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/city/list/')
            .then((response) => {
                setAreas(response.data.area_dict);
                // 지역 코드 배열 생성
                const areaCodes = Object.values(response.data.area_dict);
                // 랜덤 인덱스 생성
                const randomIndex = Math.floor(Math.random() * areaCodes.length);
                // 랜덤 지역 코드 선택
                const randomAreaCode = areaCodes[randomIndex];
                // 랜덤 지역 코드를 선택한 지역으로 설정
                setSelectedArea(randomAreaCode);
            });
    }, []);

    useEffect(() => { // 선택된 지역의 여행지 목록 불러오기
        if (selectedArea) {
            axios.get(`https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/city/list/?area_code=${selectedArea}`)
                .then((response) => {
                    setTravelList(response.data.travel);
                });

            axios.get(`https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/festival/search/?area_code=${selectedArea}`)
                .then((response) => {
                    setFestivalList(response.data); // 또는 response.data에 따라 적절한 키를 사용
                    console.log()
                });
        }
    }, [selectedArea]);

    const handleAreaClick = (areaCode) => { // 지역 버튼 클릭
        setSelectedArea(areaCode);
        setCurrentPage(1);
        setPageGroup(1);
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleNextGroup = () => {
        if (pageGroup < totalGroups) {
            setPageGroup(pageGroup + 1);
        }
    };

    const handlePrevGroup = () => {
        if (pageGroup > 1) {
            setPageGroup(pageGroup - 1);
        }
    };

    const currentItems = travelList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <LocalContainer>
            <h1>Discover the hidden fun in South Korea!</h1>
            <Text>Please select a region</Text>

            {/* 지역 */}
            <ButtonContainer>
                {Object.entries(areas).map(([area, areaCode]) => (
                    <LocationButton
                        onClick={() => handleAreaClick(areaCode)}
                        selected={selectedArea === areaCode} // 선택된 지역인지 판단
                    >
                        {area}
                    </LocationButton>
                ))}
            </ButtonContainer>

            <ImageContainer>
                <p><FontAwesomeIcon icon={faLocationDot} /> Tourist Destination</p>
                <div className="wrapper">
                    {currentItems.map((item) => (
                        <Link to={`/destiDetail/${item.content_id}`}> {/* Link를 여행지 상세 페이지로 연결 */}
                            <div>
                                <img src={item.first_image} alt={item.title} />
                                <p>{removeParenthesesContent(item.title)}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </ImageContainer>

            <PaginationContainer>
                {pageGroup > 1 && <button onClick={handlePrevGroup}><FontAwesomeIcon icon={faAnglesLeft} /></button>}
                {Array.from({ length: Math.min(pagesPerGroup, Math.ceil(travelList.length / itemsPerPage) - (pageGroup - 1) * pagesPerGroup) }, (_, i) => (
                    <button onClick={() => handlePageClick((pageGroup - 1) * pagesPerGroup + i + 1)}>{(pageGroup - 1) * pagesPerGroup + i + 1}</button>
                ))}
                {pageGroup < totalGroups && <button onClick={handleNextGroup}><FontAwesomeIcon icon={faAnglesRight} /></button>}
            </PaginationContainer>

            {/* 축제 */}
            <FestivalContainer>
                {shouldUseSlider ? (
                    <FestivalSlider title={<FontAwesomeIcon icon={faIcons} /> + "Festival"} items={festivalList} />
                ) : (
                    <Box>
                        <p><FontAwesomeIcon icon={faIcons} /> Festival</p>
                        <Content>
                            {festivalList.map((item) => (
                                <Link to={`/festiDetail/${item.content_id}`} key={item.content_id}>
                                    <div>
                                        <img src={item.first_image} alt={item.title} />
                                        <p>{removeParenthesesContent(item.title)}</p>
                                    </div>
                                </Link>
                            ))}
                        </Content>
                    </Box>
                )}
            </FestivalContainer>

        </LocalContainer>
    );
}

export default Local;
