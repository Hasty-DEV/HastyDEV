import { Container, Row, Col } from "react-bootstrap";
import * as A from "./About.styles";

import AboutImg from "../../assets/images/About/AboutImg1.png";
import WorldMapLight from "../../assets/images/About/WorldMapLight.svg";
import "./Tabela.css";
import {
  HeadingTitle,
  HeadingSubtitle,
  HeadingInterTitle,
  HeadingSubInterTitle,
  Paragraph,
} from "../../components/Texts/Texts";
import ContactForm from "../../components/ContactForm/ContactForm";
import SliderContact from "../../components/Slider/SliderContact";
import { ImageStyled } from "./About.styles";


const About: React.FC = () => {

  return (
    <>
    <Container className="text-center">
      <Row>
        <Col xs={12}>
          <HeadingTitle
            title="Aqui Nós Garantimos"
            span="Seu Sucesso Profissional"
            hasUnderline={true}
            className="mt-5"
          />
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

        <Col >
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
          <table className="tabela-transparente mb-3">
            <tbody>
              <tr>
                <td className="tabela">
                  <HeadingSubInterTitle SubInterTitle="Colaboração" />
                </td>
                <td>
                  <Paragraph
                    paragraph="Promovemos a união de talentos para criar um impacto positivo.
                  Facilitamos a colaboração entre desenvolvedores e organizações
                  sociais/empresas parceiras, tornando ideias em ações."
                  />
                </td>
              </tr>
              <tr>
                <td className="tabela">
                  <HeadingSubInterTitle SubInterTitle="Gamificação" />
                </td>
                <td>
                  <Paragraph
                    paragraph="Tornamos o aprendizado e o trabalho envolventes e divertidos
                  com sistemas de recompensas. Motivamos os desenvolvedores a se
                  desafiarem e contribuírem para projetos de impacto."
                  />
                </td >
              </tr>
              <tr>
                <td className="tabela">
                  <HeadingSubInterTitle SubInterTitle="Profissionalismo" />
                </td>
                <td>
                  <Paragraph
                    paragraph="Valorizamos o desenvolvimento profissional com
                    responsabilidade e ética. Garantimos que os desenvolvedores
                    adquiram experiência valiosa e que as organizações parceiras
                    recebam suporte técnico qualificado."
                  />
                </td>
              </tr>
              <tr>
                <td className="tabela">
                  <HeadingSubInterTitle SubInterTitle="Impacto Social" />
                </td>
                <td>
                  <Paragraph
                    paragraph="Nosso propósito é causar mudanças sociais positivas.
                    Trabalhamos com organizações sociais e empresas parceiras para
                    resolver desafios sociais. Acreditamos na transformação de
                    vidas e comunidades."
                  />
                </td>
              </tr>
            </tbody>
          </table>
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
          <table className="tabela-transparente">
            <tbody>
              <tr>
                <td className="tabela">
                  <HeadingSubInterTitle SubInterTitle="Inovação" />
                </td>
                <td>
                  <Paragraph
                    paragraph="Na HastyDEV, a inovação é nossa força motriz. Buscamos
                    constantemente soluções criativas para enfrentar desafios e
                    moldar o futuro."
                  />
                </td>
              </tr>
              <tr>
                <td className="tabela">
                  <HeadingSubInterTitle SubInterTitle="Excelência" />
                </td>
                <td>
                  <Paragraph
                    paragraph="Comprometidos com a excelência em tudo o que fazemos, na
                    HastyDEV. Buscamos a mais alta qualidade em cada aspecto do
                    nosso trabalho."
                  />
                </td>
              </tr>
              <tr>
                <td className="tabela">
                  <HeadingSubInterTitle SubInterTitle="Impacto" />
                </td>
                <td>
                  <Paragraph
                    paragraph="O impacto é o coração da nossa missão na HastyDEV. Unimos
                    desenvolvedores a organizações sociais e empresas para causar
                    mudanças positivas."
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Col xs={12}>
        <HeadingSubtitle span="Nosso Time de Sucesso" className="mt-5"  />
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
  </>
  );
};

export default About;
