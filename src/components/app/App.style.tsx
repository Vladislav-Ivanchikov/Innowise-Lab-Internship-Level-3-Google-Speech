import { createGlobalStyle } from "styled-components";

export const AppStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    font-size: 18px;
    background-color: rgb(249, 255, 252);
  }

  h2 {
    margin-bottom: 15px;
  }

  p {
    margin: 15px 0;
  }

  #root {
    min-height: 100vh;
  }

`;
