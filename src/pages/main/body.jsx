import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Main() {
    const [mainPictures, setMainPictures] = useState([]);

    return(
        <div>
            <h1>main</h1>
            <Link to='/festiDetail'>축제개별</Link>
            <Link to='/destiDetail'>여행지개별</Link>
            <Link to='/mypage'>마이페이지</Link>
        </div>
    )
}

export default Main;