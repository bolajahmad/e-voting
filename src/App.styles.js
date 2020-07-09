import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
  *, body {
    box-sizing: border-box;
  }

  body {
    font-size: 125%;
    font: inherit;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    background: rgb(247, 246, 243);
    color: rgb(37, 33, 34);
  }

  a {
    color: rgba(61, 11, 55, 1);
    text-decoration: none;
    width: auto;
    font-size: 1rem;
    font-family: Raleway, "Trebuchet MS", sans-serif;
    background-image: linear-gradient(to right, rgb(237,25, 68) 0%, rgb(237,25, 68) 100%);
    background-repeat: repeat-x;
    background-position: bottom 0.01em center;
    background-size: 100% 0.05em;
    border: none;
    transition: all 0.5s ease-in;

    &:hover, &:focus {
        color: rgba(61, 11, 55, 0.75);
        background-image: none;
        outline: 0.1em solid rgba(61, 11, 55, 0.75);
    }

    &:active {
      border: 0.1em solid rgba(61, 11, 55, 0.75);
    }
  }

  ul, li {
    list-style: none;
  }

  input, textarea {
    font-weight: 800;
    color: rgb(37, 33, 34);
    width: auto;
    padding: 1em;
    font-size: 1rem;
    background: none; 
    border: 0.02em solid rgba(37, 33, 34, 0.675);
    transition: all 0.5s ease;

    &:hover, &:focus {
        outline: 0.1em solid rgba(37 33, 34, 0.75);
        background: rgba(236, 220, 220, 0.675);
        border-width: 0.1em;
    }
  }

  label {
    width: 100%;
    font-size: 1rem;
  }
`