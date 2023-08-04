import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';


function Header() {
    return(
        <header>
            <Link to='/'>KITE</Link>
            <Link to='/signin'>signin</Link>
            <Link to='/signup'>signup</Link>
        </header>
    )
}

export default Header;