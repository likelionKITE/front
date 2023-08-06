import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { Body, Bodydiv, Nav, Menu, Sign } from "./style";

function Header() {
    return (
        <Body>
            <Bodydiv>
                <Sign to='/'>KITE</Sign>
                <Nav>
                    <Menu to='/festival'>Festival</Menu>
                    <Menu to='/destination'>Tourist Destination</Menu>
                    <Menu to='/local'>Local</Menu>
                    <Menu to='/travelInfo'>Travel Information</Menu>
                </Nav>
                <div>
                    <Sign to='/signin'>
                        <FontAwesomeIcon icon={faCircleUser} />                    
                    </Sign>
                </div>
            </Bodydiv>
        </Body>
    )
}

export default Header;