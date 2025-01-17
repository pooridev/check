import { createGlobalStyle } from "styled-components"
import { theme } from "../styles/ThemeStyles"

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    font-size: inherit;
    box-sizing: border-box;
    line-height: 1.5;
  }

  body {
    height: 100vh;
    color: ${theme.colors.white500};
    background: ${theme.colors.black500};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-size: 16px;
    font-family: "Inter", serif;
    border: 0;
    outline: 0;
    overflow: hidden;
  }

  input, button, textarea {
    background: transparent;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }

  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${theme.colors.white500};
  }

  .simplebar-scrollbar:before {
    background: ${theme.colors.gray200};
  }
`

export default GlobalStyles
