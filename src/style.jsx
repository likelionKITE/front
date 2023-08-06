import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

    ul, ol {
    list-style: none;
}

    a {
    text-decoration: none;
    color: black;
}
`;
