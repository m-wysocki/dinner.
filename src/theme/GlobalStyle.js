import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Baloo+2:400,500&display=swap');
  *, *::before, *::after {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
  html {
        font-size: 62.5%;
  }
  body {
      font-size: 16px;
      font-family: 'Baloo 2', cursive;
      margin: 50px;
      padding: 0;
  }
  a{
    text-decoration: none;
  }
`;

export default GlobalStyle;
