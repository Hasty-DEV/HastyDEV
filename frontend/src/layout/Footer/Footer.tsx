import { StyledLink,SubTitle, Title, Button, Foter, Decoration } from './Footer.styles';
import LogoDark from '../../assets/LogoDark.svg';
import LogoLight from '../../assets/LogoLight.svg';

import { Row, Col, Container } from 'react-bootstrap';
import { ThemeContext } from "styled-components";
import { useContext } from "react";
import setaButton from '../../assets/setaButton.svg'
import SocialLinks from '../../assets/SocialLinks.svg'
import SocialLinksDark from '../../assets/SocialLinksDark.svg'







const Footer: React.FC = () => {

  const theme = useContext(ThemeContext);
  if (!theme) {

    return null;
  }

  const ImgDarkLight = (theme.title) === 'light' ? LogoLight : LogoDark

  const socialLinksDarkMode = (theme.title) === 'dark' ? SocialLinks : SocialLinksDark

  return (

    <Foter>
      <Container fluid className="custom-mt-15percent">
        <Row>
          <Col sm={3}>
            <img
              src={ImgDarkLight}
              alt="Logo HastyDEV modo Light"
              className="mt-2"
            />
            <Title>+1 (7635) 547-12-97</Title>
            <Title>support@lift.agency</Title>
          </Col>
          <Col sm={3}>
            <Title>Quick Links</Title>
            <StyledLink to="/">
              <SubTitle>Home</SubTitle>
            </StyledLink>
            <StyledLink to="/About">
              <SubTitle>Sobre Nós</SubTitle>
            </StyledLink>
          </Col>
          <Col sm={3}>
            <Title>Sobre o Projeto</Title>
            <Title>Contate-Nos</Title>
          </Col>

          <Col sm={3}>
            <Title>Newsletter</Title>
            <div className="container text-center">
              <div className="row align-items-start">
                <div className="col d-flex align-items-center">
                  <Decoration placeholder='Receba As Novidades' />
                  <Button>
                    <img
                      src={setaButton}
                      alt="setaButton"
                    />
                  </Button>
                </div>
                <div className="col d-flex justify-content-center">
                </div>
              </div>
            </div>
          </Col>


          <hr className='linha' />
        </Row>

        <Container>
          <Row className="mt-4">
            <Col sm={4} className="d-flex align-items-center justify-content-center  ">
              <p><img
                src={socialLinksDarkMode}
                alt="Logo HastyDEV modo Light"
                width={135}
                height={35}
                className="mt-0"
              />
              </p>
            </Col>
            <Col sm={4} className="d-flex align-items-center justify-content-center">
              <p>
                Um Produto da <img
                  src={ImgDarkLight}
                  alt="Logo HastyDEV modo Light"
                  width={73}
                  height={19}
                />
              </p>
            </Col>
            <Col sm={4} className="d-flex align-items-center justify-content-center">
              <p>© 2023 HastyDEV. All rights reserved</p>
            </Col>
          </Row>
        </Container>

      </Container>
    </Foter>
  );

}
export default Footer;
