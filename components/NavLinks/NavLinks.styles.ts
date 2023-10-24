import { Nav } from "react-bootstrap";
import styled from 'styled-components';


export const StyledNavLink = styled(Nav.Link)`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
`;