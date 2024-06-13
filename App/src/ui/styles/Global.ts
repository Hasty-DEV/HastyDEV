import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  body {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    overflow-x: hidden;
  }


  ::-webkit-scrollbar {
    width: 12px; 
  }


  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.background};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.secondary};
    border-radius: 20px;
    border: 3px solid ${(props) => props.theme.colors.background}; 
  }


  ::-webkit-scrollbar-thumb:hover {
    background-color: #4834d4;
  }


  ::-webkit-scrollbar-thumb:active {
    background-color: #7f8fa6; 
  }

`;

export default GlobalStyle;
