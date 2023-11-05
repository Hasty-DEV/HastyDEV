import styled from "styled-components";
import { Link } from "react-router-dom";


export const StyledLink = styled(Link)`
  text-decoration: none;
  color:  ${(props) => props.theme.colors.text};
  color: inherit;
  transition: opacity 0.3s; 

  &:hover {
    opacity: 0.8; 
  }
  &:active {
    opacity: 0.5;
  }

`;

export const ButtonPrimaryStyled = styled.button`
  color:  ${(props) => props.theme.colors.text};
  display: flex;
  width: 215px;
  height: 58px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background: ${(props) => props.theme.colors.secondary};
  border: none;
  transition: opacity 0.3s; 

  &:hover {
    opacity: 0.8; 
  }
  &:active {
    opacity: 0.5;
  }

  @media (max-width: 768px) {
    margin-bottom: 81px;
   
  }
`;


export const ButtonPrimaryLongStyled = styled.button`
  color:  ${(props) => props.theme.colors.text};
  display: flex;
  width: 100%;
  height: 58px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background: ${(props) => props.theme.colors.secondary};
  border: none;
  transition: opacity 0.3s; 

  &:hover {
    opacity: 0.8; 
  }
  &:active {
    opacity: 0.5;
  }
`;

export const ButtonTertiaryStyled = styled.button`
   color: ${(props) => props.theme.colors.color_button};
  background: ${(props) => props.theme.colors.color};
  border: 3px solid ${(props) => props.theme.colors.borda};
  display: inline-flex;
  padding: 2px 26px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  transition: opacity 0.3s; 

 
  &:hover {
    opacity: 0.8; 
  }

  
  &:active {
    opacity: 0.5;
  }
  
`;

export const ButtonSecondaryStyled = styled.button`
  color:  ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.color_button};
  
  border: none;
  border-radius: 5px;
  display: inline-flex;
  padding: 5px 26px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: opacity 0.3s; 

  &:hover {
    opacity: 0.8; 
  }
  &:active {
    opacity: 0.5;
  }
`;


