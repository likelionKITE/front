import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';


function Signin() {
    return (
        <div>
            <h1>로그인</h1>
            <Link to='/signup'>signup</Link>
        </div>
    )
}

export default Signin;