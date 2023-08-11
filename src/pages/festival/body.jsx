import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function FestivalList() {
  const [festivalList, setFestivalList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/festival/list/');
        setFestivalList(response.data.listview_response);
      } catch (error) {
        console.error('Error fetching festival list:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1>Festival List</h1>
      <ul>
        {festivalList.map(festival => (
          <li key={festival.content_id}>
            <img src={festival.first_image2} alt={festival.title} />
            <h2>{festival.title}</h2>
            <p>Start Date: {festival.event_start_date}</p>
            <p>End Date: {festival.event_end_date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FestivalList;