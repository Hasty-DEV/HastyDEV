import {  Row, Col } from "react-bootstrap";

import { AiOutlineLine } from "react-icons/ai";
import SearchForm from "../../Ui/components/SearchForm/SearchForm";
import ProjectImg1 from "../../Ui/assets/images/Project/ProjectImg1.webp";
import { ProjectFirstSection, ProjectHeadingTitle, ProjectParagraph, ProjectSubInterTitle } from "../../Ui/styles/Project/Project.styles";


const Project: React.FC = () => {
  return (
    <>
      <ProjectFirstSection fluid>
        <Row>
          <Col xs={12} sm={6}>
            <Col xs={12}>
            <div style={{ marginTop: '20%' }}>
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

