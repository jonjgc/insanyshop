'use client'
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f0f0f5;
    color: #333;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  button, input {
    font-family: inherit;
  }

  button {
    cursor: pointer;
  }

  button:focus-visible, a:focus-visible {
    outline: 2px solid #007bff;
    outline-offset: 2px;
  }
`