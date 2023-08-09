import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Body, Form } from './style'

function Signin() {
    return (
        <Body>
            <Form>
                <h1>Sign In</h1>
                <label>
                    ID
                    <input type="id" />
                </label>
                <label>
                    Password
                    <input type="password" />
                </label>
                <Link to='/signup'>Signup</Link>
            </Form>
        </Body>
    )
}

export default Signin;