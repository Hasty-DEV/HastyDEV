import { Link } from "react-router-dom";
import { StyledNavLink } from "./NavLinks.styles";
import { Nav } from "react-bootstrap";

const NavLinks: React.FC = () => {
  return (
    <div className="d-flex align-items-center gap-4" style={{ marginLeft: 100 }}>
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
    </div>
  );
};

export default NavLinks;
