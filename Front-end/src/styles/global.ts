import { createGlobalStyle } from "styled-components";
import '../assets/LogoDark.svg';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-display: swap;
   
   
    
}
body {
    background: ${(props) => props.theme.colors.background};
    color : ${(props) => props.theme.colors.text};
    
    
}

    






`;
