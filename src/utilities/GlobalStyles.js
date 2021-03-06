import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  html, body {
      margin: 0;
      padding: 0;
  }

  *, *::after, *::before {
      box-sizing: border-box;
  }

  body {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    text-rendering: optimizeLegibility;
  }

  section {
    margin: auto;
    width: 100%;
    max-width: 1024px;
    display: flex;
  }
`
export default GlobalStyles;