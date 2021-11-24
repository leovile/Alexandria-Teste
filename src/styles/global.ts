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
    z-index: 5;
  }

  li {
    z-index: 5;
  }

  button {
    cursor: pointer;
  }

  :root {
    --dark-gray: #262425;
    --light-gray: #8B9196;
    --blue: #1c538e;
    --green: #8CBF4F;
    --white: #FFFFFF;
  }
`;

export default GlobalStyles;
