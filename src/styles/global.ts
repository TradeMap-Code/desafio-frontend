import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    --background-default: #000;
    --text-color-default: #fff
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: var(--background-default);
    color: var(--text-color-default);
    -webkit-font-smoothing: antialiased;
  }
  border-style, input, button {
    font-family: sans-serif;
    font-size: 16px;
  }
  h1,h2,h3,h4,h5,h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
`;
