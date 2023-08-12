import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function FestivalList() {
  const [festivalList, setFestivalList] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('01');
  const month_dict = {
    "1": "01",
    "2": "02",
    "3": "03",
    "4": "04",
    "5": "05",
    "6": "06",
    "7": "07",
    "8": "08",
    "9": "09",
    "10": "10",
    "11": "11",
    "12": "12",
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/festival/search/?month=${selectedMonth}`);
        setFestivalList(response.data);
      } catch (error) {
        console.error('Error fetching festival list:', error);
      }
    }

    fetchData();
  }, [selectedMonth]);

  const handleMonthChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedMonth(selectedValue);
  };


  return (
    <div>
      <h1>Festival List</h1>
      <select onChange={handleMonthChange} value={selectedMonth}>
        {Object.entries(month_dict).map(([key, value]) => (
          <option key={key} value={value}>
            {key}
          </option>
        ))}
      </select>
      <ul>
        {festivalList.map(festival => (
          <li key={festival.content_id}>
            <img src={festival.first_image2} alt={festival.title} />
            <h2>{festival.title}</h2>
          </li>
        ))}
      </ul>
    </div>
);
}

export default FestivalList;