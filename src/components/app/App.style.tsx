import { createGlobalStyle } from "styled-components";

export const AppStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Open Sans, sans-serif;
    font-size: 18px;
    background-color: rgb(249, 255, 252);
  }

  h1 {
    color: rgba(127, 255, 212, 0.8);
    font-weight: lighter;
    letter-spacing: .8em;
    margin-bottom: 40px;
  }

  h2 {
    margin-bottom: 15px;
  }

  h3 {
    text-align: center;
  }

  p {
    margin: 15px 0;
  }

  span {
    color: rgba(245, 245, 245, 0.8);
    line-height: 1.6em;
    margin-bottom: 40px;
  }

  #root {
    min-height: 100vh;
  }

`;
