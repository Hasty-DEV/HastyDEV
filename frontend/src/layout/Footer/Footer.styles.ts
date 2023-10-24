import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterStyled = styled.div`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  margin-top: 5%;
  padding:5%;
  font-family: 'Arial';
`;


export const StyledLink = styled(Link)`
  text-decoration: none;

  
`;
export const SubTitle = styled.h2`
 
  color:${props => props.theme.colors.text};
  font-size: 16px;
  font-family: 'Arial';
  font-weight: 400;
  line-height: 3;
  word-wrap: break-word;
  text-decoration: none !important;
`;

export const Title = styled.h2`
color:${props => props.theme.colors.text};
  font-size: 18px;
  font-family: 'Rasa';
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
width: 198px;
height: 50px;
color: #000;
font-family: Rasa;
font-size: 14px;
font-style: normal;
font-weight: 400;
line-height: normal;
padding: 10px

`;




