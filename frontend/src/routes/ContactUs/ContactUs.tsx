import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  HeadingTitle,
  Paragraph
} from "../../components/Texts/Texts";
import * as C from "./ContactUs.styles";
import ContactUSForm from "../../components/ContactUSForm/ContactUSForm";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { BiMap, BiLogoTwitter, BiLogoInstagram, BiLogoDiscordAlt } from "react-icons/bi";

const ContactUs: React.FC = () => {
  return (
    <Container className="text-center">
      <Row>
        <Col xs={12}>
          <div style={{ marginTop: '10%' }}>
          <HeadingTitle span="Contate-Nos" className="mt-4" />
          </div>
        </Col>
        <Col xs={12}>
          <Paragraph
            paragraph="Ficaremos Felizes de Falar Contigo. Preencha o Formulário Para Atendemos Você!"
            className="text-center"
          />
        </Col>

        <C.ContactUsDiv className="mt-4 d-flex flex-wrap">
          <Col xs={12} md={6}>
            <C.InfoDiv>
              <C.HeadingSubtitle subtitle="Informações de Contato" />
              <C.Paragraph
                paragraph="Entre em Contato conosco e em breve lhe atenderemos!"
                className="text-center"
              />
              <C.ContactUsInfoDiv>
                <Col xs={12}>
                  <C.Infos>
                    <FiPhoneCall height={16} width={16} />
                    <Paragraph paragraph="+11 9 9999-9999" IsInline={true} />
                  </C.Infos>
                </Col>
                <Col xs={12}>
                  <C.Infos>
                    <AiOutlineMail height={16} width={16} />
                    <Paragraph paragraph="contato@hastydev.com.br" IsInline={true} />
                  </C.Infos>
                </Col>
                <Col xs={12}>
                  <C.Infos>
                    <BiMap height={16} width={16} />
                    <Paragraph
                      paragraph="132 Dartmouth Street Boston, Massachusetts 02156 United States"
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

          <Col xs={12} md={6}>
            <C.FormDiv className="flex-basis: 50%">
              <ContactUSForm />
            </C.FormDiv>
          </Col>
        </C.ContactUsDiv>

        
      </Row>
    </Container>
  );
};

export default ContactUs;
