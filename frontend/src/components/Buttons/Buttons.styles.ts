import styled from "styled-components";
import { Link } from "react-router-dom";


export const StyledLink = styled(Link)`
  text-decoration: none;
  color:  ${(props) => props.theme.colors.text};
  color: inherit;

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
  border-radius: 8px;
  background: ${(props) => props.theme.colors.secondary};
  border: none;
`;

export const ButtonSecond2Styled = styled.button`
  color:  ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.color_button};
  border-radius: 5px;
  border: none;
  display: inline-flex;
  padding: 5px 26px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
`;


