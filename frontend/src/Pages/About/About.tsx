import { Container, Row, Col } from "react-bootstrap";
import * as A from "../../Ui/styles/About/About.styles";
import AboutImg from "../../Ui/assets/images/About/AboutImg1.png";
import WorldMapLight from "../../Ui/assets/images/About/WorldMapLight.svg";
import {
  HeadingTitle,
  HeadingSubtitle,
  HeadingInterTitle,
  Paragraph,
} from "../../Ui/components/Texts/Texts";
import ContactForm from "../../Ui/Partials/ContactForm/ContactForm";
import SliderContact from "../../Ui/components/Slider/SliderContact";
import { ImageStyled } from "../../Ui/styles/About/About.styles";
import OurMissionTable from "../../Ui/Partials/OurMissionTable/OurMissionTable";
import OurColaborationTable from "../../Ui/Partials/OurColaborationTable/OurColaborationTable";

const About: React.FC = () => {
  return (
    <A.AboutContainer>
      <Container className="text-center">
        <Row>
          <Col xs={12}>
            <article className="title" style={{ marginTop: "20%" }}>
              <HeadingTitle
                title="Aqui Nós Garantimos"
                span="Seu Sucesso Profissional"
                hasUnderline={true}
                className="mt-5"
              />
            </article>
          </Col>

          <Col xs={12}>
            <A.RectangleDiv className="mt-4">
              <Paragraph
                paragraph="Na HastyDEV, acreditamos que o sucesso profissional deve estar ao
              alcance de todos. É por isso que criamos uma plataforma
              colaborativa gamificada que não apenas conecta desenvolvedores
              talentosos com organizações sociais e empresas parceiras, mas
              também garante que cada passo que você dá conosco seja uma jornada
              rumo ao sucesso. Nossa missão é simples, mas poderosa: enriquecer
              sua experiência profissional enquanto você contribui para um mundo
              melhor"
              />
            </A.RectangleDiv>
          </Col>

          <Col>
            <ImageStyled src={AboutImg} alt="" className="img-fluid" />
          </Col>

          <Col xs={12} className="mt-1">
            <HeadingSubtitle
              subtitle="Não Precisa Correr Atrás"
              span="Para Fazer Seu Projeto Dos Sonhos"
              hasUnderline={true}
              className="mt-5"
            ></HeadingSubtitle>
          </Col>
          <Col xs={12}>
            <img
              src={WorldMapLight}
              alt=""
              width="100%"
              height="auto"
              className="mt-1"
            />
          </Col>
          <Col xs={12}>
            <HeadingInterTitle
              intertitle="Nossa "
              span="Missão"
              className="text-start"
              hasUnderline={true}
              IsInline={true}
            />
          </Col>
          <Col xs={12}>
            <OurMissionTable />
          </Col>
          <Col xs={12}>
            <HeadingInterTitle
              intertitle="Nossa "
              span="Colaboração"
              className="text-start"
              hasUnderline={true}
              IsInline={true}
            />
          </Col>
          <Col xs={12}>
            <OurColaborationTable />
          </Col>
        </Row>
        <Col xs={12}>
          <HeadingSubtitle span="Nosso Time de Sucesso" className="mt-5" />
        </Col>
        <Col xs={12}>
          <SliderContact />
        </Col>
      </Container>
      <A.ContactFormDiv fluid>
        <Col xs={12}>
          <HeadingSubtitle span="Fale Conosco" className="mt-5" />
        </Col>
        <Col xs={12}>
          <Paragraph
            paragraph="Ficaremos Felizes de Falar Contigo. Preencha o Formulário Para
      Atendemos Você"
            className="text-center text-dark"
          />
        </Col>
        <Col xs={12} className="mx-auto text-center">
          <ContactForm />
        </Col>
      </A.ContactFormDiv>
    </A.AboutContainer>
  );
};

export default About;
