import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TravelList() {
  const [travelData, setTravelData] = useState([]);
  const [mainSort, setMainSort] = useState('');
  const [midSort, setMidSort] = useState('');

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
    "Nature": "A01",
    "Culture/Art/History": "A02"
  };

  const midSortOptions = {
    "A01": {
      "all": "",
      "Natural Sites": "A0101",
      "Natural Resources": "A0102"
    },
    "A02": {
      "all": "",
      "Historical Sites": "A0201",
      "Recreational Sites": "A0202",
      "Experience Programs": "A0203",
      "Industrial Sites": "A0204",
      "Architectural Sights": "A0205",
    }
  };

  return (
    <div>
      <h1>Travel List</h1>
      <div>
        <label>Main Category</label>
        <select
          value={mainSort}
          onChange={(e) => setMainSort(e.target.value)}
        >
          <option value="">Select</option>
          {Object.entries(mainSortOptions).map(([label, value]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </div>
      {mainSort && (
        <div>
          <label>Details:</label>
          <select
            value={midSort}
            onChange={(e) => setMidSort(e.target.value)}
          >
            {midSortOptions[mainSort] &&
              Object.entries(midSortOptions[mainSort]).map(([label, value]) => (
                <option key={value} value={value}>{label}</option>
              ))}
          </select>
        </div>
      )}
      <ul>
        {travelData.map((item) => (
          <li key={item.content_id}>
          <h2>
            <Link to={`/destiDetail/${item.content_id}`}>{item.title}</Link>
          </h2>
          <img src={item.first_image2} alt={item.title} />
        </li>
        ))}
      </ul>
    </div>
  );
}

export default TravelList;