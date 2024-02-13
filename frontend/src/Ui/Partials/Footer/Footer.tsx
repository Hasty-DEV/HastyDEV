import React, { useContext } from "react";
import { FooterStyled, SocialMediaContainer } from "./Footer.styles";
import LogoDark from "../../assets/LogoDark.svg";
import LogoLight from "../../assets/LogoLight.svg";
import { Row, Col, Container } from "react-bootstrap";
import { ThemeContext } from "styled-components";
import { FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer: React.FC = () => {
  const theme = useContext(ThemeContext);

  if (!theme) {
    return null;
  }

  const ImgDarkLight = theme.title === "light" ? LogoLight : LogoDark;

  return (
    <FooterStyled>
      <Container fluid className="custom-mt-15percent">
        <hr className="linha" />
        <Row className="mt-4">
          <Col
            xs={12}
            sm={4}
            className="d-flex align-items-center justify-content-center"
          >
            <p>
              <SocialMediaContainer>
                <div className="card">
                  <a
                    href="#"
                    className="socialContainer containerOne"
                    title="HastyDEV Instagram"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    className="socialContainer containerTwo"
                    title="HastyDEV Twitter"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    className="socialContainer containerThree"
                    title="HastyDEV Linkedin"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="#"
                    className="socialContainer containerFour"
                    title="HastyDEV Whatsapp"
                  >
                    <FaWhatsapp />
                  </a>
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
    </FooterStyled>
  );
};

export default Footer;
