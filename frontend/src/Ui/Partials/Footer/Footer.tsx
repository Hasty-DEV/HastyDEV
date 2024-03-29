import { useContext } from "react";
import { FooterContainer, SocialContainer, SocialMediaContainer } from "./Footer.styles";
import LogoDark from "../../assets/LogoDark.svg";
import LogoLight from "../../assets/LogoLight.svg";
import { Row, Col, Container } from "react-bootstrap";
import { ThemeContext } from "styled-components";
import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    return null;
  }

  const ImgDarkLight = theme.title === "light" ? LogoLight : LogoDark;

  return (
    <FooterContainer>
      <Container fluid>
        <hr />
        <Row className="mt-4 footer-container">
          <Col
            xs={12}
            sm={4}
            className="d-flex align-items-center justify-content-center"
          >
            <p>
              <SocialMediaContainer>
                <div className="d-flex">
                  <SocialContainer
                    href="#"
                    className="containerOne"
                    title="HastyDEV Instagram"
                  >
                    <FaInstagram />
                  </SocialContainer>
                  <SocialContainer
                    href="#"
                    className="containerTwo"
                    title="HastyDEV Twitter"
                  >
                    <FaTwitter />
                  </SocialContainer>
                  <SocialContainer
                    href="#"
                    className="containerThree"
                    title="HastyDEV Linkedin"
                  >
                    <FaLinkedin />
                  </SocialContainer>
                  <SocialContainer
                    href="#"
                    className="containerFour"
                    title="HastyDEV Whatsapp"
                  >
                    <FaWhatsapp />
                  </SocialContainer>
                </div>
              </SocialMediaContainer>
            </p>
          </Col>
          <Col
            xs={12}
            sm={4}
            className="d-flex align-items-center justify-content-center"
          >
            <p>
              Um Produto da
              <img
                src={ImgDarkLight}
                alt="Logo HastyDEV modo Light"
                width={73}
                height={19}
              />
            </p>
          </Col>
          <Col
            xs={12}
            sm={4}
            className="d-flex align-items-center justify-content-center"
          >
            <p>© 2023 HastyDEV. All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
