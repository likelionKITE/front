import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function FestivalList() {
  const [festivalList, setFestivalList] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('01');
  const [selectedArea, setSelectedArea] = useState('');
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
  const area_dict = {
    "Seoul": "1", "Incheon": "2", "Daejeon": "3", "Daegu": "4", "Gwangju": "5", "Busan": "6", 
    "Ulsan": "7", "Sejong": "8", "Gyeonggi-do": "31", "Gangwon-do": "32", "Chungcheongbuk-do": "33", 
    "Chungcheongnam-do": "34", "Gyeongsangbuk-do": "35", "Gyeongsangnam-do": "36", "Jeollabuk-do": "37", "Jeollanam-do": "38", "Jeju-do": "39"
  };
  const fetchData = async () => {
    try {
      let url = `https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/festival/search/?`;

      if (selectedMonth) {
        url += `month=${selectedMonth}`;
      }

      if (selectedArea) {
        if (url.includes('month=')) {
          url += `&area_code=${selectedArea}`;
        } else {
          url += `area_code=${selectedArea}`;
        }
      }

      const response = await axios.get(url);
      setFestivalList(response.data);
    } catch (error) {
      console.error('Error fetching festival list:', error);
    }
  };


  useEffect(() => {
    fetchData();
  }, [selectedMonth, selectedArea]);

  const handleMonthChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedMonth(selectedValue);
  };

  const handleAreaChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedArea(selectedValue);
  };

  const handleSearch = () => {
    fetchData();
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
      <select onChange={handleAreaChange} value={selectedArea}>
        <option value="">Select Area</option>
        {Object.entries(area_dict).map(([key, value]) => (
          <option key={value} value={value}>
            {key}
          </option>
        ))}
      </select>
      <button onClick={handleSearch}>Search</button>
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