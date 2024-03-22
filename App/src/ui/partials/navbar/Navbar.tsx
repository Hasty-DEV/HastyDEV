import { useCallback, useEffect, useState } from "react";
import { HeaderContainer } from "../../styles/navbar/Navbar.styles";
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
import Logo from "../../assets/HastyDEV/LogoLight.svg";
import { MdPerson, MdOutlineSecurity, MdHelpOutline } from "react-icons/md";
import { IoIosSettings, IoMdPerson } from "react-icons/io";

import { useAuth } from "../../../data/context/AuthContext";
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoBag } from "react-icons/io5";

const Header = () => {
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

  return (
    <HeaderContainer className="mb-3 fixed-top">
      <Navbar expand="md">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img src={Logo} alt="Logo HastyDEV" />
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
                <Button variant="outline-success">Pesquisar</Button>
              </Form>
              <div className="d-flex justify-content-center align-items-center">
                <MdPerson
                  size={24}
                  onClick={toggleDropdown}
                  style={{ cursor: "pointer" }}
                />
                <NavDropdown
                  show={isDropdownOpen}
                  onToggle={toggleDropdown}
                  title=""
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
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
