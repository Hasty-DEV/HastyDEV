import { Container, Row, Col } from "react-bootstrap";
import { HeadingTitle, Paragraph } from "../../components/Texts/Texts";
import * as C from "../../styles/ContactUs/ContactUs.styles";
import ContactUSForm from "../../partials/ContactUSForm/ContactUSForm";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import {
  BiMap,
  BiLogoInstagram,
  BiLogoWhatsapp,
  BiLogoGmail,
} from "react-icons/bi";

const ContactUs = () => {
  return (
    <C.ContactUsContainer>
      <Container className="text-center">
        <Row>
          <article className="title">
            <Col xs={12}>
              <HeadingTitle span="Contate-Nos" className="mt-4 " />
            </Col>
          </article>
          <Col xs={12}>
            <Paragraph
              paragraph="Ficaremos Felizes de Falar Contigo. Preencha o Formulário Para Atendemos Você!"
              className="text-center"
            />
          </Col>
          <C.ContactUsDiv className="mt-4 d-flex flex-wrap">
            <Col xs={12} md={6}>
              <C.InfoDiv>
                <C.HeadingSubtitle
                  subtitle="Informações de Contato"
                  className=""
                />
                <C.Paragraph
                  paragraph="Entre em Contato conosco e em breve lhe atenderemos!"
                  className="text-center"
                />
                <C.ContactUsInfoDiv>
                  <Col xs={12}>
                    <C.Infos>
                      <FiPhoneCall height={16} width={16} />
                      <Paragraph paragraph="+11 9 7732-8121" IsInline={true} />
                    </C.Infos>
                  </Col>
                  <Col xs={12}>
                    <C.Infos>
                      <AiOutlineMail height={16} width={16} />
                      <Paragraph
                        paragraph="HastyDEV@jeffldscompany.com.br"
                        IsInline={true}
                      />
                    </C.Infos>
                  </Col>
                  <Col xs={12}>
                    <C.Infos>
                      <BiMap height={16} width={16} />
                      <Paragraph paragraph="ETEC Zona Leste" IsInline={true} />
                    </C.Infos>
                  </Col>
                </C.ContactUsInfoDiv>

                <C.ContactUsSocialIconsDiv>
                  <ul>
                    <li>
                      <a href="mailto:hastydev@jeffldscompany.com.br">
                        <BiLogoGmail height={16} width={16} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/hastydev/"
                        target="_blank"
                      >
                        <BiLogoInstagram height={16} width={16} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://api.whatsapp.com/send?phone=5511977328121"
                        target="_blank"
                      >
                        <BiLogoWhatsapp height={16} width={16} />
                      </a>
                    </li>
                  </ul>
                </C.ContactUsSocialIconsDiv>
              </C.InfoDiv>
            </Col>
            <Col xs={12} md={6}>
              <C.FormDiv>
                <ContactUSForm />
              </C.FormDiv>
            </Col>
          </C.ContactUsDiv>
        </Row>
      </Container>
    </C.ContactUsContainer>
  );
};

export default ContactUs;
