import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  text-decoration: none;
  color:  ${(props) => props.theme.colors.text};
  color: inherit;

`;

export const ButtonPrimaryStyled = styled.button`
  display: flex;
  width: 215px;
  height: 58px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: #fed30a;
  border: none;
`;
