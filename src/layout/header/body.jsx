import React, { useContext } from 'react';
import { AuthContext } from '../../pages/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { HeaderWrapper, Content, Nav, Menu, Sign } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import logoImage from '../Logo.png';

function Header() {
    const { isSignedIn, setIsSignedIn, setCurrentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const currentUser = localStorage.getItem('currentUser');

    const handleLogoutClick = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('currentUser');
        localStorage.removeItem('userInfo');

        setIsSignedIn(false);
        setCurrentUser(null);
        navigate('/');
    };

    return (
        <HeaderWrapper>
            <Content>
                <Link to='/'>
                    <img src={logoImage} alt="KITE" />
                </Link>
                <Nav>
                    <Menu to='/festival'>Festival</Menu>
                    <Menu to='/destination'>Tourist Destination</Menu>
                    <Menu to='/local'>Local</Menu>
                    <Menu to='/travelInfo'>Travel Information</Menu>
                </Nav>
                <div>
                    {isSignedIn ? (
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
