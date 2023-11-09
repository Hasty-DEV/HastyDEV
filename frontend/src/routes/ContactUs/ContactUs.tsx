import { Container, Row, Col } from "react-bootstrap";
import { HeadingTitle, Paragraph } from "../../components/Texts/Texts";
import * as C from "./ContactUs.styles";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import {
  BiMap,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoDiscordAlt,
} from "react-icons/bi";
import ContactUSForm from "../../components/ContactUSForm/ContactUSForm";

const ContactUs: React.FC = () => {
  return (
    <Container className="text-center">
      <Row>
        <Col xs={12}>
          <HeadingTitle span="Contate-Nos" className="mt-4"/>
        </Col>
        <Col xs={12}>
          <Paragraph
            paragraph="Ficaremos Felizes de Falar Contigo. Preencha o Formulário Para
            Atendemos Você!"
            className="text-center"
          />
        </Col>
        <C.ContactUsDiv className="mt-4" xs={12}>
          <Col xs={6}>
            <C.InfoDiv>
              <C.HeadingSubtitle
                subtitle="Informações de Contato"
              />
              <C.Paragraph
                paragraph="Entre em Contato com Conosco e em breve lhe atenderemos!"
                className="text-center"
              />
              <C.ContactUsInfoDiv>
                <Col xs={12}>
                  <C.Infos>
                    <FiPhoneCall height={16} width={16} />
                    <Paragraph paragraph="+11 9 8181-7497" IsInline={true} />
                  </C.Infos>
                </Col>
                <Col xs={12}>
                  <C.Infos>
                    <AiOutlineMail height={16} width={16} />
                    <Paragraph
                      paragraph="contato@jeffldscomapany.com.br"
                      IsInline={true}
                    />
                  </C.Infos>
                </Col>
                <Col xs={12}>
                  <C.Infos>
                    <BiMap height={16} width={16} />
                    <Paragraph
                      paragraph="ETEC da Zona Leste"
                      IsInline={true}
                    />
                  </C.Infos>
                </Col>
              </C.ContactUsInfoDiv>
              <C.ContactUsSocialIconsDiv>
                <ul>
                  <li>
                    <BiLogoTwitter height={16} width={16} />
                  </li>
                  <li>
                    <BiLogoInstagram height={16} width={16} />
                  </li>
                  <li>
                    <BiLogoDiscordAlt height={16} width={16} />
                  </li>
                </ul>
              </C.ContactUsSocialIconsDiv>
            </C.InfoDiv>
          </Col>
          <Col xs={6}>
            <C.FormDiv>
              <ContactUSForm />
            </C.FormDiv>
          </Col>
        </C.ContactUsDiv>
      </Row>
    </Container>
  );
};

export default ContactUs;
