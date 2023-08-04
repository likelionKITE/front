import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    return(
        <nav>
            nav
            <Link to='/festival'>축제</Link>
            <Link to='/destination'>여행지</Link>
            <Link to='/local'>지역</Link>
            <Link to='/travelInfo'>여행정보</Link>
        </nav>
    )
}

export default Navbar;