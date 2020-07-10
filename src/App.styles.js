import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  body {
    box-sizing: border-box;
    font-size: 125%;
    font: inherit;
    line-height: 1;
    margin: 0;
    padding: 0;
    background: rgb(247, 246, 243);
    color: rgb(37, 33, 34);

    

  a, button {
    color: rgba(61, 11, 55, 1);
    text-decoration: none;
    width: auto;
    font-size: 1rem;
    font-family: Raleway, "Trebuchet MS", sans-serif;
    text-shadow: 0.01em -0.01em 0em white, -0.01em 0.01em 0em white;
    background-image: linear-gradient(to right, rgb(237,25, 68) 0%, rgb(237,25, 68) 100%);
    background-repeat: repeat-x;
    background-position: bottom 0.05em center;
    background-size: 100% 0.05em;
    border: none;
    transition: all 0.5s ease-in;

    &:hover, &:focus {
        color: rgba(61, 11, 55, 0.75);
        background-image: none;
        outline: 0.1em solid rgba(61, 11, 55, 0.75);
  }

  ul, li {
    list-style: none;
  }
  }
`