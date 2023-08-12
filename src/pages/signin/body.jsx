import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Body, Form, Input } from './style';
import { useState, useEffect } from 'react';

function Signin({ setIsSignedIn, setCurrentUser }) {
    const navigate = useNavigate();

    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        
        const config = {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        };

        axios
            .get('https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/member/info/', config)
            .then((response) => {
                setIsSignedIn(true);
                setCurrentUser(response.data.user.nickname);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []); // 빈 배열을 의미합니다. 컴포넌트가 마운트될 때 한 번만 실행됩니다.

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post('https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/member/login/', {
                username: userName,
                password: password,
            })
            .then((response) => {
                setIsSignedIn(true);
                setCurrentUser(response.data.user.nickname);

                const accessToken = response.data.access;
                localStorage.setItem('accessToken', accessToken);

                navigate('/');
            })
            .catch((error) => {
                console.log(error);
                alert('아이디와 비밀번호를 확인해주세요.');
            });
    }

    return (
        <Body>
            <Form onSubmit={handleSubmit}>
                <h1>Sign In</h1>
                <p>To keep connected with us please login with your personal info</p>

                <Input type="id" value={userName} placeholder="ID" onChange={handleUserNameChange} />
                <Input type="password" value={password} placeholder="Password" onChange={handlePasswordChange} />

                <div>
                    <button className='submit' type='submit'>Sign In</button>
                    <br />
                    <span>Create an account</span>
                    <Link to='/signup'>Sign Up</Link>
                </div>
            </Form>
        </Body>
    )
}

export default Signin;