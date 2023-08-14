import React, { useContext } from 'react';
import { AuthContext } from '../../pages/AuthContext';
import { useNavigate } from 'react-router-dom';
import { HeaderWrapper, Content, Nav, Menu, Sign } from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

function Header() {
    const { isSignedIn, currentUser, setIsSignedIn, setCurrentUser } = useContext(AuthContext);
    const navigate = useNavigate();
    
    const handleLogoutClick = () => {
        localStorage.removeItem('accessToken');
        setIsSignedIn(false);
        setCurrentUser(null);
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
