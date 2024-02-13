import { Container, Row, Col } from "react-bootstrap";
import { HeadingTitle, Paragraph } from "../../Ui/components/Texts/Texts";
import { ButtonPrimary } from "../../Ui/components/Buttons/Buttons";
import { HeroContainer } from "../../Ui/styles/Hero/Hero.styles";
import HeroImg1 from "../../Ui/assets/images/Hero/Hero-Img1.webp";
import HeroImg2 from "../../Ui/assets/images/Hero/Hero-Img2.webp";
import HeroImg3 from "../../Ui/assets/images/Hero/Hero-Img3.webp";
import HeroImg4 from "../../Ui/assets/images/Hero/Hero-Img4.webp";

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <Container className="text-center mt-5 ">
        <article className="title">
          <HeadingTitle title="Bem-vindo à HastyDEV - Desenvolva Projetos Reais" />
        </article>
        <article>
          <Paragraph
            paragraph="Encontre Projetos Reais para Anexar ao seu Portfólio, Conquiste Seu Local no Mercado E Seja Recompensado Por Isso!"
            className="text-center "
          />
          <ButtonPrimary
            route="/register"
            buttonText="Inscreva-se"
            className="mx-auto d-block"
          />
        </article>
        <article className="mt-4">
          <Row>
            <Col xs={6} sm={4} md={3}>
              <img src={HeroImg1} alt="" className="img-fluid" />
            </Col>
            <Col xs={6} sm={4} md={3}>
              <img src={HeroImg2} alt="" className="img-fluid"  />
            </Col>
            <Col xs={6} sm={4} md={3} className="d-none d-sm-block">
              <img src={HeroImg3} alt="" className="img-fluid" />
            </Col>
            <Col xs={6} sm={4} md={3} className="d-none d-lg-block">
              <img src={HeroImg4} alt="" className="img-fluid" />
            </Col>
          </Row>
        </article>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
