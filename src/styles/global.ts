import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: Roboto, sans-serif;
  }

  a {
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }

  :root {
    --blue: #2C3787;
  }
`;

export default GlobalStyles;
