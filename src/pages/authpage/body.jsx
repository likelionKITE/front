import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Signin from '../signin/body'; // 로그인 컴포넌트 임포트
import Signup from '../signup/body'; // 회원가입 컴포넌트 임포트
import { Body } from './style'

function AuthPage() {
    return (
        <Body>
            <Signin />
            <Signup />
        </Body>
    );
}

export default AuthPage;
