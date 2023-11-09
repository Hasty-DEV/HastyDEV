import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import {
  HeadingSubInterTitle,
  HeadingTitle,
  Paragraph,
} from "../../components/Texts/Texts";
import { Link } from "react-router-dom";
import { AiOutlineRight, AiOutlineLine } from "react-icons/ai";
import SearchForm from "../../components/SearchForm/SearchForm";
import ProjectImg1 from "../../assets/images/Project/ProjectImg1.webp";

const Project: React.FC = () => {
  return (
    <>
      <ProjectFirstSection fluid>
        <Row>
          <Col xs={12} sm={6}>
            <Col xs={12}>
              <ProjectSubInterTitle SubInterTitle="Sobre o Projeto" />
              <AiOutlineLine size={64} />
            </Col>
            <Col xs={12}>
              <ProjectHeadingTitle
                title="Revolucionário Espaço de Projetos Para Realizar sua"
                span="Inovação"
              />
            </Col>
          </Col>
          <Col xs={12}  sm={6}>
            <ProjectParagraph
              paragraph="Em nosso espaço de co-working, a inovação se torna realidade. Na
              HastyDEV, oferecemos um ambiente único onde mentes criativas se
              unem para transformar ideias ousadas em conquistas tangíveis.
              Aqui, você encontrará as ferramentas, o suporte e a inspiração
              necessários para dar vida à sua visão inovadora. Junte-se a nós e
              faça parte de uma comunidade que desafia os limites e redefine o
              futuro."
            />
          </Col>
          <Col xs={12}>
            <SearchForm />
          </Col>
          <Col xs={12}>
            <img src={ProjectImg1} alt="" className="img-fluid" />
          </Col>
        </Row>
      </ProjectFirstSection>
      <ProjectSecondSection>
        <Row>
          <Col xs={12}>
            <Col xs={12} sm={5} md={4}>
              <h2>Nossa Plataforma</h2>
            </Col>
            <Col xs={12} sm={5} md={6}>
              <p>
                Nossa Plataforma Foi Projetada Para Proporcionar Uma Experiência
                Diferente Ao Criar ou Buscar Projetos
              </p>
            </Col>
            <Col xs={4} sm={2} md={2}></Col>
          </Col>
          <Col xs={4}>
            <Col xs={12}>
              <Link to="/register">
                <button title="Link to register">
                  <AiOutlineRight size={16} />
                </button>
              </Link>
            </Col>
            <Col xs={12}>
              <p>Encontre Projetos</p>
            </Col>
          </Col>
          <Col xs={4}>
            <Col xs={12}>
              <Col xs={8}></Col>
              <Col xs={4}></Col>
            </Col>
            <Col xs={12}>
              <h4>Espaço Único</h4>
              <p>
                Encontre o Seu Projeto, Desenvolva, Ajude e Ganhe Experiência.
              </p>
            </Col>
            <Col xs={12}>
              <Link to="/register">
                <button title="Link to register">
                  Cadastre-se
                  <AiOutlineRight size={16} />
                </button>
              </Link>
            </Col>
          </Col>
          <Col xs={4}>
            <Col xs={12}>
              <Link to="/register">
                <button title="Link to register">
                  <AiOutlineRight size={16} />
                </button>
              </Link>
            </Col>
            <Col xs={12}>
              <p>Consiga Uma Nova Oportunidade</p>
            </Col>
          </Col>
        </Row>
      </ProjectSecondSection>
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
  }
`;

const ProjectSubInterTitle = styled(HeadingSubInterTitle)`
  display: inline-block;
  width: 40%;
`;

const ProjectParagraph = styled(Paragraph)`
  max-width: 600px;
  font-size: 1.5rem;
  line-height: 30px;

  @media (max-width: 575px) {
    font-size: 1rem;
    padding-right: 5px;
  }
`;

const ProjectSecondSection = styled(Container)`
  margin-top: 5%;
`;
