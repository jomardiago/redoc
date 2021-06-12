import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    ${'' /* :root {
        --bgColor: #001730;
        --blue: #4AD7D1;
        --orange: #FE4A49;
        --white: #FFFFFF;
        --black: #000000;
    } */}

    .dark-theme {
        --bgColor: #001730;
        --primaryColor: #4AD7D1;
        --secondaryColor: #FE4A49;
        --textColor: #FFFFFF;
        --editorColor: #000000;
    }

    .light-theme {
        --bgColor: #F4EDED;
        --primaryColor: #FE4A49;
        --secondaryColor: #4AD7D1;
        --textColor: #000000;
        --editorColor: #FFFFFF;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }

    body {
        color: var(--textColor);
        background-color: var(--bgColor);
        font-size: 1em;
        font-family: 'Roboto', sans-serif;
    }
`;

export default GlobalStyles;
