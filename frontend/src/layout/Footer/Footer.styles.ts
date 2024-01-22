import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterStyled = styled.div`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  margin-top: 5%;
  padding:5%;
`;


export const StyledLink = styled(Link)`
  text-decoration: none;

  
`;
export const SubTitle = styled.h2`
 
  color:${props => props.theme.colors.text};
  font-size: 16px;
  font-weight: 400;
  line-height: 3;
  word-wrap: break-word;
  text-decoration: none !important;
`;

export const Title = styled.h2`
color:${props => props.theme.colors.text};
  font-size: 19px;
  font-weight: 300;
  line-height: 3;
  word-wrap: break-word;

`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  background: ${props => props.theme.colors.secondary};
  border-radius: 0 10px 10px 0;
  border: none; 
  
`;

export const Decoration = styled.input`
border-radius: 6px 0 0 6px;
border: 1px solid rgba(254, 211, 10, 0.20);
background: #FFF;
flex: 1;
height: 50px;
color: #000;
font-size: 14.3px;
font-style: normal;
font-weight: 400;
line-height: normal;
white-space: nowrap;
padding: 10px;



@media(max-width: 575px) {
  width: 100%;
  margin-bottom: 10px;
  font-size: 14px;
  box-sizing: border-box; 
}

`;


export const NewsletterDiv = styled.div`
  padding-left: 0px;
  

  
  @media(max-width: 575px) {
    margin-bottom: 5%;
    
    
  }
`;



