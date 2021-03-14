import { createGlobalStyle } from 'styled-components'

import imgBackground from '../images/background.png'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    color: ${(props) => props.theme.colors.text};
    background: url('${imgBackground}') no-repeat ${(props) => props.theme.colors.background} fixed center center;
    background-size: cover;
  }
  body, input, button, textarea {
    font: 600 18px Nunito, sans-serif;
  }
  a { 
    text-decoration: none;
  }
  .switch-theme {
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 15;
  }

  path {
    color: #ff9 !important;
  }
`
