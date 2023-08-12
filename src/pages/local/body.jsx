import React, { useEffect, useState } from "react";
import axios from "axios";
import { LocalContainer, ButtonContainer, LocationButton, ImageContainer } from './style';

function Local() {
    const [areas, setAreas] = useState({});
    const [selectedArea, setSelectedArea] = useState(null);
    const [travelList, setTravelList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageGroup, setPageGroup] = useState(1);
    const itemsPerPage = 8;
    const pagesPerGroup = 5;
    const totalGroups = Math.ceil(Math.ceil(travelList.length / itemsPerPage) / pagesPerGroup);

    useEffect(() => {
        axios.get('https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/city/list/')
            .then((response) => {
                setAreas(response.data.area_dict);
            });
    }, []);

    useEffect(() => {
        if (selectedArea) {
            // 선택된 지역의 여행지 목록 불러오기
            axios.get(`https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/city/list/?area_code=${selectedArea}`)
                .then((response) => {
                    setTravelList(response.data.travel);
                });
        }
    }, [selectedArea]);

    const handleAreaClick = (areaCode) => {
        setSelectedArea(areaCode);
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
            <h1>Local</h1>
            <ButtonContainer>
                {Object.entries(areas).map(([area, areaCode]) => (
                    <LocationButton onClick={() => handleAreaClick(areaCode)}>{area}</LocationButton>
                ))}
            </ButtonContainer>
            <ImageContainer>
                {currentItems.map((item) => (
                    <div>
                        <img src={item.first_image2} alt={item.title} />
                        <h3>{item.title}</h3>
                    </div>
                ))}
            </ImageContainer>
            <div>
                {pageGroup > 1 && <LocationButton onClick={handlePrevGroup}>Previous</LocationButton>}
                {Array.from({ length: Math.min(pagesPerGroup, Math.ceil(travelList.length / itemsPerPage) - (pageGroup - 1) * pagesPerGroup) }, (_, i) => (
                    <LocationButton onClick={() => handlePageClick((pageGroup - 1) * pagesPerGroup + i + 1)}>{(pageGroup - 1) * pagesPerGroup + i + 1}</LocationButton>
                ))}
                {pageGroup < totalGroups && <LocationButton onClick={handleNextGroup}>Next</LocationButton>}
            </div>
        </LocalContainer>
    );
}

export default Local;
