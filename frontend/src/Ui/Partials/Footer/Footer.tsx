import React, { useContext, useState } from "react";
import {
  StyledLink,
  SubTitle,
  Title,
  Button,
  FooterStyled,
  Decoration,
  NewsletterDiv,
} from "./Footer.styles";
import LogoDark from "../../assets/LogoDark.svg";
import LogoLight from "../../assets/LogoLight.svg";

import { Row, Col, Container } from "react-bootstrap";
import { ThemeContext } from "styled-components";
import setaButton from "../../assets/setaButton.svg";
import SocialLinks from "../../assets/SocialLinks.svg";
import SocialLinksDark from "../../assets/SocialLinksDark.svg";
import { toast } from "react-toastify";


const Footer: React.FC = () => {
  const theme = useContext(ThemeContext);
  const [email, setEmail] = useState("");

  if (!theme) {
    return null;
  }

  const ImgDarkLight = theme.title === "light" ? LogoLight : LogoDark;
  const socialLinksDarkMode =
    theme.title === "dark" ? SocialLinks : SocialLinksDark;
    
    const handleNewsletterSignup = async () => {
      try {
        const response = await fetch("api", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });
       
        if (response.ok) {
          toast.success("Inscrição na newsletter realizada com sucesso!");
          // Pode adicionar mais lógica aqui, se necessário
        } else {
          const data = await response.json();
          toast.error(data.error || "Erro ao se inscrever na newsletter");
        }
      } catch (error) {
        console.error("Erro ao se inscrever na newsletter:", error);
        toast.error("Erro ao se inscrever na newsletter");
      }
    };
  
  return (
    <FooterStyled>
      <Container fluid className="custom-mt-15percent">
        <Row>
          <Col xs={12} sm={4}>
            <img
              src={ImgDarkLight}
              alt="Logo HastyDEV modo Light"
              className="mt-2"
              width="150"
            />
            <Title>+55 (11) 9 8181-7497</Title>
            <Title>contato@jeffldscompany.com.br</Title>
          </Col>
          <Col xs={12} sm={4}>
            <Title>Quick Links</Title>
            <StyledLink to="/">
              <SubTitle>Home</SubTitle>
            </StyledLink>
            <StyledLink to="/About">
              <SubTitle>Sobre Nós</SubTitle>
            </StyledLink>
            <StyledLink to="/project">
              <SubTitle>Sobre o Projeto</SubTitle>
            </StyledLink>
            <StyledLink to="/contact">
              <SubTitle>Contate-Nos</SubTitle>
            </StyledLink>
          </Col>
          <Col xs={12} sm={4}>
            <Title>Newsletter</Title>
            <div className="container text-center">
              <div className="row align-items-start">
                <NewsletterDiv className="col d-flex align-items-center">
                  <Decoration placeholder="Receba As Novidades" 
                  onChange={(e) => setEmail(e.target.value)}
                  value={email} />
                  <Button onClick={handleNewsletterSignup}>
                    <img src={setaButton} alt="setaButton" />
                  </Button>
                </NewsletterDiv>
                <div className="col d-flex justify-content-center"></div>
              </div>
            </div>
          </Col>
        </Row>
        <hr className="linha" />
        <Row className="mt-4">
          <Col xs={12} sm={4} className="d-flex align-items-center justify-content-center">
            <p>
              <img
                src={socialLinksDarkMode}
                alt="Logo HastyDEV modo Light"
                width={135}
                height={35}
                className="mt-0"
              />
            </p>
          </Col>
          <Col xs={12} sm={4} className="d-flex align-items-center justify-content-center">
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
          <Col xs={12} sm={4} className="d-flex align-items-center justify-content-center">
            <p>© 2023 HastyDEV. All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </FooterStyled>
  );
};

export default Footer;
