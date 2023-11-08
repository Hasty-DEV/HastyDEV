import styled from "styled-components";
import { Container } from "react-bootstrap";

export const RectangleDiv = styled(Container)`
  width: 1280px;
  height: 402px;
  flex-shrink: 0;
  background:  ${(props) => props.theme.colors.secondary};
  
  z-index: -1;
  border-radius: 40px;
  padding: 35px;

  @media (max-width: 768px) {
   
    width: 100%; 
    height: auto; 
    transform: none;
    
  }
`;

export const ImageStyled = styled.img`
    margin-top: -10%;
    
    
    @media (max-width: 768px) {
      margin-top: -15%;
    
      width: 100%; 
      height: auto; 
      transform: none;
 }

 
`;

export const ContactFormDiv = styled(Container)`
  background: #fff;
  padding: 10px;
  padding-bottom: 30px;
`;
