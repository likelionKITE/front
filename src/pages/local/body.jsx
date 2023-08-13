import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { LocalContainer, ButtonContainer, LocationButton, ImageContainer } from './style';

function Local() {
    const [areas, setAreas] = useState({}); // 지역
    const [selectedArea, setSelectedArea] = useState(null); // 현재 선택한 지역
    const [travelList, setTravelList] = useState([]); // 현재 선택한 지역의 여행지 리스트
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
    const [pageGroup, setPageGroup] = useState(1); // 현재 페이지의 그룹
    const itemsPerPage = 8; // 한 페이지에 보여줄 여행지 개수
    const pagesPerGroup = 5; // 페이지네이션 5개씩
    const totalGroups = Math.ceil(Math.ceil(travelList.length / itemsPerPage) / pagesPerGroup);
    const removeParenthesesContent = (text) => { // 여행지 이름 한글 등 불필요한 부분 제거
        return text
            .replace(/(\([^)]*\))|(\))/g, '') // 괄호와 괄호 내의 내용 제거
            .replace(/\[[^\]]*\]/g, '') // 대괄호와 대괄호 내의 내용 제거
            .replace(/[가-힣]/g, '') // 한글 제거
            .trim(); // 양쪽 공백 제거
    };

    useEffect(() => { // 지역 불러오기
        axios.get('https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/city/list/')
            .then((response) => {
                setAreas(response.data.area_dict);
            });
    }, []);

    useEffect(() => { // 선택된 지역의 여행지 목록 불러오기
        if (selectedArea) {
            axios.get(`https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/city/list/?area_code=${selectedArea}`)
                .then((response) => {
                    setTravelList(response.data.travel);
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

            <ButtonContainer>
                {Object.entries(areas).map(([area, areaCode]) => (
                    <LocationButton onClick={() => handleAreaClick(areaCode)}>{area}</LocationButton>
                ))}
            </ButtonContainer>

            <ImageContainer>
                {currentItems.map((item) => (
                    <div>
                        <img src={item.first_image2} alt={item.title} />
                        <h3>{removeParenthesesContent(item.title)}</h3>
                    </div>
                ))}
            </ImageContainer>

            <div>
                {pageGroup > 1 && <LocationButton onClick={handlePrevGroup}><FontAwesomeIcon icon={faAnglesLeft} /></LocationButton>}
                {Array.from({ length: Math.min(pagesPerGroup, Math.ceil(travelList.length / itemsPerPage) - (pageGroup - 1) * pagesPerGroup) }, (_, i) => (
                    <LocationButton onClick={() => handlePageClick((pageGroup - 1) * pagesPerGroup + i + 1)}>{(pageGroup - 1) * pagesPerGroup + i + 1}</LocationButton>
                ))}
                {pageGroup < totalGroups && <LocationButton onClick={handleNextGroup}><FontAwesomeIcon icon={faAnglesRight} /></LocationButton>}
            </div>
            
        </LocalContainer>
    );
}

export default Local;
