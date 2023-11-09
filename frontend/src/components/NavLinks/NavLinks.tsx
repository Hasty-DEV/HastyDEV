import { Link } from "react-router-dom";
import { StyledNavLink, StyledNavLinksContainer } from "./NavLinks.styles";
import { Nav } from "react-bootstrap";

const NavLinks: React.FC = () => {
  return (
    <StyledNavLinksContainer  className="d-flex align-items-center gap-4">
      <Nav.Item>
        <StyledNavLink as={Link} to="/">
          Home
        </StyledNavLink>
      </Nav.Item>
      <Nav.Item>
        <StyledNavLink as={Link} to="/about">
          Sobre Nós
        </StyledNavLink>
      </Nav.Item>
      <Nav.Item>
        <StyledNavLink as={Link} to="/contact">
          Contate-nos
        </StyledNavLink>
      </Nav.Item>
      <Nav.Item>
        <StyledNavLink as={Link} to="/project">
          O Projeto
        </StyledNavLink>
      </Nav.Item>
    </StyledNavLinksContainer>
  );
};

export default NavLinks;
