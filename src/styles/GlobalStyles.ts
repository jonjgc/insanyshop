'use client'
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f0f0f5; /* Um cinza bem claro, como nos layouts */
    color: #333;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  button, input {
    font-family: inherit; /* Garante que botões e inputs usem a mesma fonte */
  }

  button {
    cursor: pointer;
  }
`