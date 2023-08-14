import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../AuthContext';
import { Body, Form, Input } from './style';
import { useState, useContext } from 'react';

function fetchMyPageData(accessToken, onSuccess) {
    const config = {
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
    };

    axios
        .get('https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/member/mypage/', config)
        .then((response) => {
            onSuccess(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function Signin() {
    const { setIsSignedIn, setCurrentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .post('https://port-0-kite-ac2nlkthnw32.sel4.cloudtype.app/member/login/', {
                username: userName,
                password: password,
            })
            .then((response) => {
                const accessToken = response.data.access;
                localStorage.setItem('accessToken', accessToken);

                fetchMyPageData(accessToken, (myPageData) => {
                    // MyPage 데이터를 로컬 저장소에 저장
                    localStorage.setItem('mypageData', JSON.stringify(myPageData));

                    setIsSignedIn(true); // 로그인 상태 설정
                    setCurrentUser(myPageData.nickname); // 사용자 닉네임 설정

                    navigate('/');
                });
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
