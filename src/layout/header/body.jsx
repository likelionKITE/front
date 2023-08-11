import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { HeaderWrapper, Content, Nav, Menu, Sign } from "./style";

function Header( { isSignedIn, currentUser, handleLogout } ) {
    const navigate = useNavigate();

    const handleLogoutClick = () => {
        sessionStorage.removeItem('accessToken');
        handleLogout();
        navigate('/');

        axios
        .post('https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/member/logout/', '', {
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem('accessToken')}`
            }
        })
        .then((response) => {
            // 서버 응답 처리 (로그아웃 성공 시)
            console.log(response.data);
            // 기타 필요한 로직 수행
        })
        .catch((error) => {
            // 서버 응답 처리 (로그아웃 실패 시)
            console.log(error);
            // 기타 필요한 로직 수행
        });
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
                            <button onClick={handleLogoutClick}><FontAwesomeIcon icon={faRightFromBracket}/></button>
                        </>
                    ) : (
                        <Sign to='/authpage'>
                            <FontAwesomeIcon icon={faCircleUser} />                    
                        </Sign>
                    )}
                </div>
            </Content>
        </HeaderWrapper>
    )
}

export default Header;