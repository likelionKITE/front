import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

function Main() {
    return(
        <div>
            <h1>main</h1>
            <Link to='/festiDetail'>축제개별</Link>
            <Link to='/destiDeteil'>여행지개별</Link>
        </div>
    )
}

export default Main;