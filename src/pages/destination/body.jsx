import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  TravelContainer,Text,CategorySelect,ImageContainer} from './style'

function TravelList() {
  const [travelData, setTravelData] = useState([]);
  const [mainSort, setMainSort] = useState('');
  const [midSort, setMidSort] = useState('');
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

  return (
    <TravelContainer>
      <h1>Travel List</h1>
      <div>
        <Text>Select a Main Category</Text>
        <CategorySelect
          value={mainSort}
          onChange={(e) => setMainSort(e.target.value)}
        >
          {Object.entries(mainSortOptions).map(([label, value]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </CategorySelect>
      </div>
      {mainSort && (
        <div>
          <Text>Select Details:</Text>
          <CategorySelect
            value={midSort}
            onChange={(e) => setMidSort(e.target.value)}
          >
            {Object.entries(midSortOptions[mainSort]).map(([label, value]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </CategorySelect>
        </div>
      )}
      <ImageContainer>
        <div className="wrapper">
          {travelData.map((item) => (
            <Link to={`/destiDetail/${item.content_id}`} key={item.content_id}>
              <div>
                <img src={item.first_image2} alt={item.title} />
                <p>{removeParenthesesContent(item.title)}</p>
              </div>
            </Link>
          ))}
        </div>
      </ImageContainer>
    </TravelContainer>
  );
}

export default TravelList;