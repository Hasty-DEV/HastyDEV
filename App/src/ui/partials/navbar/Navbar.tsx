import { useCallback, useEffect, useState } from "react";
import { HeaderContainer } from "../../styles/navbar/Navbar.styles";
import { getUserData } from "../../../data/services/userService";
import { getUserIcon } from "../../../data/services/getUserIconService";
import { UserDataTypes } from "../../../data/@types/UserData/UserData.type";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import Logo from "../../assets/HastyDEV/LogoLight.svg";
import { MdPerson } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";

const Header = () => {
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
      console.log(user);
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
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {/*<Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown
                  title="Dropdown"
                  id="offcanvasNavbarDropdown-expand"
                >
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                  
                </NavDropdown>
                */}
              </Nav>
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
                  <NavDropdown.Item as={Link} to="/">
                    Meus Projetos
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/">
                    Outros
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/">
                    Outros
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/">
                    Outros
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={Link}
                    to="/settings"
                    className="d-flex align-items-center justify-content-start"
                  >
                    <IoIosSettings className="mx-1" />
                    Configurações
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
