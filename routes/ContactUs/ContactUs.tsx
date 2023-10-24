import { Container, Row, Col } from "react-bootstrap";

const ContactUs: React.FC = () => {
  return (
    <Container className="text-center">
      <Row>
        <Col xs={12}>
          <h1 className="display-3">Contate-Nos</h1>
        </Col>
        <Col xs={12}>
          <p className="lead">
            Ficaremos Felizes de Falar Contigo. Preencha o Formulário Para
            Atendemos Você!
          </p>
        </Col>
        <Col xs={6}>
          <Container>
            <Row>
              <Col xs={12}>
                <h2>Informações de Contato</h2>
              </Col>
              <Col xs={12}>
                <p>Diga Alguma Coisa para entrar no Chat</p>
              </Col>
              <Col xs={12}>
                <span>
                  <a href="#">+1012 3456 789</a>
                </span>
              </Col>
              <Col xs={12}>
                <span>
                  <a href="#">demo@gmail.com</a>
                </span>
              </Col>
              <Col xs={12}>
                <span>
                  <a href="#">
                    132 Dartmouth Street Boston, Massachusetts 02156 United
                    States
                  </a>
                </span>
              </Col>
              <Col xs={12}></Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
