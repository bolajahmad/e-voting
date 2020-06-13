import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  body {
    box-sizing; border-box;
    font-size: 100%;
    font: inherit;
    line-height: 1;
    margin: 0;
    padding: 0;
    background: rgba(226, 158, 226, 0.355);
    color: rgb(99, 46, 27);

    a {
      text-decoration: none;
    }

    li {
      list-style: none;
    }
  }
`