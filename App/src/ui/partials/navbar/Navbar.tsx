import { useCallback, useContext, useEffect, useState } from "react";
import {
  HeaderContainer,
  SwitchContainer,
} from "../../styles/navbar/Navbar.styles";
import { getUserData } from "../../../data/services/userService";
import { getUserIcon } from "../../../data/services/getUserIconService";
import { UserDataTypes } from "../../../data/@types/UserData/UserData.type";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
 
import { MdPerson, MdOutlineSecurity, MdHelpOutline } from "react-icons/md";
import { IoIosSettings, IoMdPerson } from "react-icons/io";
import { useAuth } from "../../../data/context/AuthContext";
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoBag } from "react-icons/io5";
import { ThemeContext } from "styled-components";
import { DefaultTheme } from "styled-components";
 
import LogoLight from "../../assets/LogoLight.svg";
import LogoDark from "../../assets/LogoDark.svg";
import { HeaderProps } from "../../../data/@types/Navbar/Navbar.type";


const Header = ({ toggleTheme }: HeaderProps) => {
  const { logout } = useAuth();
  const [userData, setUserData] = useState<UserDataTypes | null>(null);
  const [, setUserIcon] = useState<string | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const fetchData = useCallback(async () => {
    try {
      const user = await getUserData();
      setUserData(user);
      const icon = await getUserIcon();
      if (icon && icon.data) {
        setUserIcon(URL.createObjectURL(new Blob([icon.data])));
      }
    } catch (error) {
      console.error("Erro ao obter dados do usuário:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };


  const theme: DefaultTheme = useContext(ThemeContext);

  const ImgDarkLight = theme.title === "light" ? LogoLight : LogoDark;

  return (
    <HeaderContainer className="mb-3 fixed-top">
      <Navbar expand="md">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
          <img
              src={ImgDarkLight}
              alt="Logo HastyDEV modo Light"
              className="mt-2"
              width={150}
              height={50}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand"
            aria-labelledby="offcanvasNavbarLabel-expand"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand">
                HastyDEV
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="justify-content-end flex-grow-1 pe-3"></div>
              <Form className="d-flex px-4">
                <Form.Control
                  type="search"
                  placeholder="Pesquisar..."
                  className="me-2"
                  aria-label="Search"
                  
                />
                <Button className="search-button">Pesquisar</Button>
              </Form>
              <div className="d-flex justify-content-center align-items-center">
              <MdPerson
                size={24}
                onClick={toggleDropdown}
                className="md-person-icon"
                style={{ cursor: "pointer" }}
/>
                <NavDropdown
                  show={isDropdownOpen}
                  onToggle={toggleDropdown}
                  title=""
                  className="md-person-icon"
                  id="offcanvasNavbarDropdown-expand"
                >
                  <NavDropdown.ItemText>{`Olá, ${userData?.username}!`}</NavDropdown.ItemText>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={Link}
                    to="/projects"
                    className="d-flex align-items-center justify-content-start"
                  >
                    <IoBag className="mx-1" />
                    Meus Projetos
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/perfil"
                    className="d-flex align-items-center justify-content-start"
                  >
                    <IoMdPerson className="mx-1" />
                    Editar Perfil
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/privacypolicy"
                    className="d-flex align-items-center justify-content-start"
                  >
                    <MdOutlineSecurity className="mx-1" />
                    Política de Privacidade
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/help"
                    className="d-flex align-items-center justify-content-start"
                  >
                    <MdHelpOutline className="mx-1" />
                    Ajuda e Suporte
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={Link}
                    to="/settings"
                    className="d-flex align-items-center justify-content-start"
                  >
                    <IoIosSettings className="mx-1" />
                    Configurações
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={Button}
                    className="d-flex align-items-center justify-content-start"
                    onClick={handleLogout}
                  >
                    <RiLogoutBoxLine className="mx-1" />
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
              <SwitchContainer>
                <label className="switch">
                  <span className="sun">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <g fill="#ffd43b">
                        <circle r="5" cy="12" cx="12"></circle>
                        <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path>
                      </g>
                    </svg>
                  </span>
                  <span className="moon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path>
                    </svg>
                  </span>
                  <input
                    type="checkbox"
                    className="input"
                    title="toggle button"
                    onChange={toggleTheme}
                    checked={theme?.title === "dark"}
                  />
                  <span className="slider"></span>
                </label>
              </SwitchContainer>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
