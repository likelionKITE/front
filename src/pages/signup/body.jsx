import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Body, Form, Input } from './style'
import { useState } from 'react';


function Signup() {
    const navigate = useNavigate();

    const [nickname, setNickname] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [passwordMismatch, setPasswordMismatch] = useState(false);

    const handleNicknameChange = (e) => {
        setNickname(e.target.value);
    }

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e) => {
        setRePassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (password !== rePassword) {
            setPasswordMismatch(true);
        }

        // 회원가입 정보를 서버로 전송
        axios
            .post('https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/member/signup/', {
                nickname: nickname,
                username: userName,
                password1: password,
                password2: rePassword,
            })
            .then((response) => {
                // 회원가입이 성공했을 때의 처리
                navigate('/signin');
            })
            .catch((error) => {
                // 회원가입이 실패했을 때의 처리
                console.error(error);
            });
    };

    return (
        <Body>
            <Form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <p>Enter your personal details and start journey with us</p>

                <Input type='nickname' value={nickname} placeholder="Nickname" onChange={handleNicknameChange} />
                <Input type='id' value={userName} placeholder="ID" onChange={handleUserNameChange} />
                <Input type='password' value={password} placeholder="Password" onChange={handlePasswordChange} />
                <Input type='password' value={rePassword} placeholder="Re-enter password" onChange={handleConfirmPasswordChange} />

                {passwordMismatch && (
                    <p style={{ color: 'red' }}>비밀번호가 일치하지 않습니다</p>
                )}

                <div>
                    <button className='submit' type='submit'>Sign Up</button>
                </div>
            </Form>
        </Body>
    )
}

export default Signup;