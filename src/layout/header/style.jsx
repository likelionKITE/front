import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Body = styled.header`
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #101010;
    padding: 0.8rem 0;
`;

export const Bodydiv = styled.div`
    font-size: 1.5rem;
    display: flex;
    width: 100%;
    max-width: 1200px;
    justify-content: space-between;
    align-items: center;
    padding: 0 1.25rem;
`

export const Nav = styled.div`
    font-size: 1.2rem;
    max-width: 900px;
`

export const Menu = styled(Link)`
    color: white;
    padding: 0 1.8rem;
    position: relative;
    text-decoration: none;

    &:hover {
        text-decoration: none;
    }

    &::after {
        content: '';
        position: absolute;
        width: 0;
        left: 0;
        bottom: -7px;
        border-bottom: 3px solid white;
        transition: width 0.8ms, left 0.8s, opacity 1s;
        opacity: 0;
    }

    &:hover::after {
        width: 100%;
        left: 0;
        opacity: 1;
    }
`;

export const Sign = styled(Link)`
    font-size: 1.2rem;
    max-width: 200px;
    padding: 0 0.5rem;
    color: white;
`