import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap');

*,  *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

html {
    font-size: 62.5%; // 1rem === 10px (happy rems)
}

body {
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
    padding-left: 150px;
}
`

export default GlobalStyle;