import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import NavLinks from "../../components/NavLinks/NavLinks";
import LogoLight from "../../assets/LogoLight.svg";
import LogoDark from "../../assets/LogoDark.svg";
import "./button-navbar.css";
import {
  ButtonSecondary,
  ButtonTertiary,
} from "../../components/Buttons/Buttons";
import { ButtonsHeader, HeaderContainer } from "../../styles/Header/Header.styles";
import { HeaderProps } from "../../../data/@types/Header/Header.type";
import SwitchButton from "../../components/SwitchButton/SwitchButton";
import { useHeader } from "./useHeader"
import { ThemeContext } from "styled-components";
import { useContext } from "react";

const Header = ({ toggleTheme }: HeaderProps) => {
  const theme = useContext(ThemeContext);
  if (!theme) {
    return null;
}
  const { headerRef } = useHeader();

  const ImgDarkLight = theme.title === "light" ? LogoLight : LogoDark;

  return (
    <HeaderContainer ref={headerRef} className="position-fixed w-100 top-0 ">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="mr-auto">
            <img
              src={ImgDarkLight}
              alt="Logo HastyDEV modo Light"
              className="mt-2"
              width={150}
              height={50}
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarSupportedContent"
            className="custom-navbar-toggler"
          />
          <Navbar.Collapse id="navbarSupportedContent" role="navigation">
            <Nav className="ml-auto topnav w-100 justify-content-between">
              <NavLinks />
              <hr className="d-none flex-column" />
              <ButtonsHeader className="d-flex align-items-center gap-3">
                <ButtonTertiary route={"/login"} buttonText={"Login"} />
                <ButtonSecondary
                  route={"/register"}
                  buttonText={"Inscreva-se"}
                />
                <Nav.Item>
                  <SwitchButton toggleTheme={toggleTheme} theme={theme} />
                </Nav.Item>
              </ButtonsHeader>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
