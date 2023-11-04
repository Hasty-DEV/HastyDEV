import { Container, Row, Col } from "react-bootstrap";
import {
  HeadingSubtitle,
  HeadingTitle,
  Paragraph,
} from "../../components/Texts/Texts";
import * as C from "./ContactUs.styles";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { BiMap, BiLogoTwitter, BiLogoInstagram, BiLogoDiscordAlt} from "react-icons/bi";
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
        <C.ContactUsDiv className="mt-4">
          <C.InfoDiv xs={6} >
            <Container>
              <Row>
                <Col xs={12}>
                  <HeadingSubtitle
                    subtitle="Informações de Contato"
                    customColor="primary"
                  />
                </Col>
                <Col xs={12}>
                  <Paragraph
                    paragraph="Deseja falar conosco? Mande uma Mensagem!"
                    className="text-center"
                    customColor="primary"
                  />
                </Col>
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
                      <Paragraph
                        paragraph="contato@hastydev.com.br"
                        IsInline={true}
                      />
                    </C.Infos>
                  </Col>
                  <Col xs={12}>
                    <C.Infos>
                      <BiMap height={16} width={16} />
                      <Paragraph
                        paragraph="132 Dartmouth Street Boston,
                      Massachusetts 02156 United States"
                        IsInline={true}
                      />
                    </C.Infos>
                  </Col>
                </C.ContactUsInfoDiv>
                <C.ContactUsSocialIconsDiv>
                  <ul>
                    <li>
                      <BiLogoTwitter height={16} width={16}/>
                    </li>
                    <li>
                      <BiLogoInstagram height={16} width={16}/>
                    </li>
                    <li>
                      <BiLogoDiscordAlt height={16} width={16}/>
                    </li>
                  </ul>
                </C.ContactUsSocialIconsDiv>
              </Row>
            </Container>
          </C.InfoDiv>
          <C.FormDiv xs={6}>
            <ContactUSForm />
          </C.FormDiv>
        </C.ContactUsDiv>
      </Row>
    </Container>
  );
};

export default ContactUs;
