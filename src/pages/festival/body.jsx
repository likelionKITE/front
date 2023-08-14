import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledFestivalList, StyledPageContainer } from './style';
function getCurrentMonth() {
  const currentDate = new Date();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  return month;
}

function FestivalList() {
  const [festivalList, setFestivalList] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [currentMonthFestivals, setCurrentMonthFestivals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortType, setSortType] = useState('');
  const month_dict = {"1": "01","2": "02","3": "03","4": "04","5": "05","6": "06",
  "7": "07","8": "08","9": "09","10": "10","11": "11","12": "12",
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
      if (sortType) {
        url += `&sortby=${sortType}`;
      }
      const response = await axios.get(url);
      setFestivalList(response.data);
    } catch (error) {
      console.error('Error fetching festival list:', error);
    }
  };
  const fetchCurrentMonthFestivals = async () => {
    try {
      const currentMonth = getCurrentMonth();
      const url = `https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/festival/list/`;
      const response = await axios.get(url);
      setCurrentMonthFestivals(response.data.nowview_response);
      setIsLoading(false); // Set loading state to false
    } catch (error) {
      console.error('Error fetching current month festivals:', error);
    }
  };
  const handleSortChange = (event) => {
    const selectedSortType = event.target.value;
    setSortType(selectedSortType);
  };

  useEffect(() => {
    fetchData();
    fetchCurrentMonthFestivals();
  }, [selectedMonth, selectedArea, sortType]);

  const handleMonthChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedMonth(selectedValue);
  };

  const handleAreaChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedArea(selectedValue);
  };

  return (
    <div>
      <StyledPageContainer>
      <StyledFestivalList>
       <h1>Festival List</h1>
       <h2>Festival in this month</h2>
       {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className='this_month'>
          {currentMonthFestivals.map(festival => (
            <li key={festival.content_id}>
              <Link to={`/festiDetail/${festival.content_id}`}>
              <img src={festival.first_image2} alt={festival.title} />
              <h2>{festival.title}</h2>
              </Link>
            </li>
          ))}
        </ul>
      )}
       
    <h2>Search your favorite Festival!</h2>
      <select onChange={handleMonthChange} value={selectedMonth}>
        <option value="">Select Month</option>
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
      <select onChange={handleSortChange} value={sortType}>
        <option value="">Sort by</option>
        <option value="like">Likes</option>
        <option value="startdate">Start Date</option>
      </select>
      <ul>
        {festivalList.map(festival => (
          <li key={festival.content_id}>
            <Link to={`/festiDetail/${festival.content_id}`}>
            <img src={festival.first_image2} alt={festival.title} />
            <h2>{festival.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
      </StyledFestivalList>
    </StyledPageContainer>
    </div>
  );
}

export default FestivalList;
