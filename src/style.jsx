import { createGlobalStyle } from 'styled-components';
import Lexend from './font/LexendMedium.woff';
import Dosis from './font/Dosis-Medium.ttf'

export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'Lexend';
        src: local('Lexend'), local('Lexend');
        font-style: normal;
        src: url(${Lexend}) format('truetype');
}

    @font-face {
        font-family: 'Dosis';
        src: local('Dosis'), local('Dosis');
        font-style: normal;
        src: url(${Dosis}) format('truetype');
}

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Dosis;
}

    ul, ol {
    list-style: none;
}

    a {
    text-decoration: none;
    color: black;
}
`;
