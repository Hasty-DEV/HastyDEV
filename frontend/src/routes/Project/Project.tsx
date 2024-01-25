import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import {
  HeadingSubInterTitle,
  HeadingTitle,
  Paragraph,
} from "../../components/Texts/Texts";
import { AiOutlineLine } from "react-icons/ai";
import SearchForm from "../../components/SearchForm/SearchForm";
import ProjectImg1 from "../../assets/images/Project/ProjectImg1.webp";


const Project: React.FC = () => {
  return (
    <>
      <ProjectFirstSection fluid>
        <Row>
          <Col xs={12} sm={6}>
            <Col xs={12}>
            <div style={{ marginTop: '30%' }}>
              <ProjectSubInterTitle SubInterTitle="Sobre o Projeto" />
              <AiOutlineLine size={64} />
            </div>
            </Col>
            <Col xs={12}>
              <ProjectHeadingTitle
                title="Revolucionário Espaço de Projetos Para Realizar sua"
                span="Inovação"
              />
            </Col>
          </Col>
          <Col xs={12} sm={6} className="d-flex align-items-center justify-content-center">
          <div style={{ marginTop: '10%' }}>
            <ProjectParagraph
              paragraph="Em nosso espaço de co-working, a inovação se torna realidade. Na
              HastyDEV, oferecemos um ambiente único onde mentes criativas se
              unem para transformar ideias ousadas em conquistas tangíveis.
              Aqui, você encontrará as ferramentas, o suporte e a inspiração
              necessários para dar vida à sua visão inovadora. Junte-se a nós e
              faça parte de uma comunidade que desafia os limites e redefine o
              futuro."
            />
          </div>
          </Col>
          <Col xs={12} sm={6}>
            <SearchForm />
          </Col>
          <Col xs={12} sm={6}>
            <img src={ProjectImg1} alt="" className="img-fluid" />
          </Col>
        </Row>
      </ProjectFirstSection>
    </>
  );
};

export default Project;

const ProjectFirstSection = styled(Container)`
  padding: 200px;
  padding-top: 20px;

  @media (min-width: 576px) and (max-width: 1024px) {
    padding: 20px;
  }

  @media (max-width: 575px) {
    padding: 5px;
  }
`;

const ProjectHeadingTitle = styled(HeadingTitle)`
  max-width: 800px;
  font-size: 3rem;
  text-align: start;

  @media (max-width: 575px) {
    font-size: 2.5rem;
    padding: 10px;
  }
`;
const ProjectSubInterTitle = styled(HeadingSubInterTitle)`
  display: inline-block;
  width: 40%;
  @media (max-width: 575px) {
    padding: 10px;
  }
`;

const ProjectParagraph = styled(Paragraph)`
  max-width: 600px;
  font-size: 1.5rem;
  line-height: 30px;

  @media (max-width: 575px) {
    font-size: 1rem;
    padding: 10px;
  }
`;
