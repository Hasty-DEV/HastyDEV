import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { HeadingTitle, Paragraph } from "../../Ui/components/Texts/Texts";
import * as C from "../../Ui/styles/ContactUs/ContactUs.styles";
import ContactUSForm from "../../Ui/Partials/ContactUSForm/ContactUSForm";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import {
  BiMap,
  BiLogoTwitter,
  BiLogoInstagram,
  BiLogoDiscordAlt,
} from "react-icons/bi";

const ContactUs: React.FC = () => {
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
                  className="text-dark"
                />
                <C.Paragraph
                  paragraph="Entre em Contato conosco e em breve lhe atenderemos!"
                  className="text-center text-dark"
                />
                <C.ContactUsInfoDiv>
                  <Col xs={12}>
                    <C.Infos>
                      <FiPhoneCall height={16} width={16} />
                      <Paragraph
                        paragraph="+11 9 9999-9999"
                        IsInline={true}
                        className="text-dark"
                      />
                    </C.Infos>
                  </Col>
                  <Col xs={12}>
                    <C.Infos>
                      <AiOutlineMail height={16} width={16} />
                      <Paragraph
                        paragraph="contato@hastydev.com.br"
                        IsInline={true}
                        className="text-dark"
                      />
                    </C.Infos>
                  </Col>
                  <Col xs={12}>
                    <C.Infos>
                      <BiMap height={16} width={16} />
                      <Paragraph
                        paragraph="132 Dartmouth Street Boston, Massachusetts 02156 United States"
                        IsInline={true}
                        className="text-dark"
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
