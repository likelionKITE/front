import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { HeaderWrapper, Content, Nav, Menu, Sign } from "./style";

function Header({ isSignedIn, currentUser, handleLogout }) {
    const navigate = useNavigate();
    const accessToken = localStorage.getItem('accessToken');

    const handleLogoutClick = () => {
        localStorage.removeItem('accessToken');
        handleLogout();
        navigate('/');
    };

    return (
        <HeaderWrapper>
            <Content>
                <Sign to='/'>KITE</Sign>
                <Nav>
                    <Menu to='/festival'>Festival</Menu>
                    <Menu to='/destination'>Tourist Destination</Menu>
                    <Menu to='/local'>Local</Menu>
                    <Menu to='/travelInfo'>Travel Information</Menu>
                </Nav>
                <div>
                    {accessToken ? (
                        <>
                            <Sign to='/mypage'>{currentUser}</Sign>
                            <button onClick={handleLogoutClick}><FontAwesomeIcon icon={faRightFromBracket} /></button>
                        </>
                    ) : (
                        <Sign to='/signin'>
                            <FontAwesomeIcon icon={faCircleUser} />
                        </Sign>
                    )}
                </div>
            </Content>
        </HeaderWrapper>
    )
}

export default Header;