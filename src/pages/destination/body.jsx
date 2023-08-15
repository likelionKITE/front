import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import {
  TravelContainer, Text, CategorySelect, ImageContainer, SelectWrapper
} from './style'

function TravelList() {
  const [travelData, setTravelData] = useState([]);
  const [mainSort, setMainSort] = useState('');
  const [midSort, setMidSort] = useState('');

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const pagesPerGroup = 5;

  const removeParenthesesContent = (text) => {
    return text
      .replace(/(\([^)]*\))|(\))/g, '')
      .replace(/\[[^\]]*\]/g, '')
      .replace(/[가-힣]/g, '')
      .trim();
  };

  useEffect(() => {
    async function fetchTravelData() {
      try {
        let url = 'https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/travel/list/?';

        if (mainSort) {
          url += `cat1=${mainSort}`;

          if (midSort && midSort !== 'all') {
            url += `&cat2=${midSort}`;
          }
        }

        url += '&sortby=like';

        const response = await axios.get(url);
        setTravelData(response.data.travel_data);
      } catch (error) {
        console.error('Error fetching travel data:', error);
      }
    }

    fetchTravelData();
  }, [mainSort, midSort]);

  const mainSortOptions = {
    "all": "",
    "Nature": "A01",
    "Culture/Art/History": "A02"
  };

  const midSortOptions = {
    "A01": {
      "Natural Sites": "A0101",
      "Natural Resources": "A0102"
    },
    "A02": {
      "Historical Sites": "A0201",
      "Recreational Sites": "A0202",
      "Experience Programs": "A0203",
      "Industrial Sites": "A0204",
      "Architectural Sights": "A0205",
    }
  };

  const startItemIndex = (currentPage - 1) * itemsPerPage;
  const endItemIndex = startItemIndex + itemsPerPage;
  const paginatedItems = travelData.slice(startItemIndex, endItemIndex);
  const totalPage = Math.ceil(travelData.length / itemsPerPage);
  const totalGroups = Math.ceil(totalPage / pagesPerGroup);
  const currentGroup = Math.ceil(currentPage / pagesPerGroup);

  const startPageIndex = (currentGroup - 1) * pagesPerGroup + 1;
  const endPageIndex = Math.min(startPageIndex + pagesPerGroup - 1, totalPage);

  const handleMainSortChange = (e) => {
    setMainSort(e.target.value);
    setCurrentPage(1);
  }

  const handleMidSortChange = (e) => {
    setMidSort(e.target.value);
    setCurrentPage(1);
  }

  return (
    <TravelContainer>
      <h1>Travel List</h1>
      <SelectWrapper>
        <Text>Select Main Category</Text>
        <CategorySelect
          value={mainSort}
          onChange={handleMainSortChange}
        >
          {Object.entries(mainSortOptions).map(([label, value]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </CategorySelect>
      </SelectWrapper>
      {mainSort && (
        <SelectWrapper>
          <Text>Select Details:</Text>
          <CategorySelect
            value={midSort}
            onChange={handleMidSortChange}
          >
            {Object.entries(midSortOptions[mainSort]).map(([label, value]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </CategorySelect>
        </SelectWrapper>
      )}
      <ImageContainer>
        <div className="wrapper">
          {paginatedItems.map((item) => (
            <Link to={`/destiDetail/${item.content_id}`} key={item.content_id}>
              <div>
                <img src={item.first_image2} alt={item.title} />
                <p>{removeParenthesesContent(item.title)}</p>
              </div>
            </Link>
          ))}
        </div>
      </ImageContainer>
      <div className='PaginationContainer'>
        {currentGroup > 1 && (
          <button onClick={() => setCurrentPage(startPageIndex - 1)}>
            <FontAwesomeIcon icon={faAnglesLeft} />
          </button>
        )}
        {Array.from({ length: endPageIndex - startPageIndex + 1 }).map(
          (_, index) => (
            <button
              key={startPageIndex + index}
              onClick={() =>
                setCurrentPage(startPageIndex + index)
              }
              className={
                currentPage === startPageIndex + index
                  ? "active"
                  : ""
              }
            >
              {startPageIndex + index}
            </button>
          )
        )}
        {currentGroup < totalGroups && (
          <button
            onClick={() => setCurrentPage(endPageIndex + 1)}
          >
            <FontAwesomeIcon icon={faAnglesRight} /></button>
        )}
      </div>
    </TravelContainer>
);
}

export default TravelList;
//git 