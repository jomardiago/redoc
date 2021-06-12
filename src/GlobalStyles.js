import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --bgColor: #001730;
        --blue: #4AD7D1;
        --orange: #FE4A49;
        --white: #FFFFFF;
        --black: #000000;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    body {
        color: var(--white);
        background-color: var(--bgColor);
        font-size: 1em;
        font-family: 'Roboto', sans-serif;
    }
`;

export default GlobalStyles;
