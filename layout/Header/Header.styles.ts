import styled from "styled-components";
import { Navbar } from "react-bootstrap";

export const Container = styled.div`
    background:${props => props.theme.colors.primary};
`;

export const NavbarToggleStyled = styled(Navbar.Toggle)`

`;