import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    *, *::before, *::after {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
        overflow: hidden;
    }

    body {
        padding: 0;
        margin: 0;
        font-size: 1.6rem;
    }
`

export default GlobalStyle;