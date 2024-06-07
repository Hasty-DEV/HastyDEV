import { Row, Col } from "react-bootstrap";
import SearchForm from "../../components/SearchForm/SearchForm";
import ProjectImg1 from "../../assets/images/Project/ProjectImg1.webp";
import {
  ProjectFirstSection,
 
  ProjectParagraph,
  ProjectSubInterTitle,
  ProjectParagraphContainer,
  ProjectTitleContainer,
  HorizontalLine,
  Header,
  SpanHeader,
  
  
  
 
} from "../../styles/Project/Project.styles";

const Project = () => {
  return (
    <>
      <ProjectFirstSection fluid>
        <Row>
          <Col xs={12} sm={6}>
            <Col xs={12}>
              <ProjectTitleContainer>
                
                <ProjectSubInterTitle SubInterTitle="Sobre o Projeto" className="d-inline-block"/>
                <HorizontalLine></HorizontalLine>
              </ProjectTitleContainer>
            </Col>
            <Col xs={12}>

           <Header className="text-start"><SpanHeader>Revolucionário</SpanHeader> Espaço de Projetos Para Realizar sua Inovação</Header>
             
            </Col>
          </Col>
          <Col
            xs={12}
            sm={6}
            className="d-flex align-items-center justify-content-center"
          >
            <ProjectParagraphContainer>
              <ProjectParagraph
                paragraph="Em nosso espaço de co-working, a inovação se torna realidade. Na
              HastyDEV, oferecemos um ambiente único onde mentes criativas se
              unem para transformar ideias ousadas em conquistas tangíveis.
              Aqui, você encontrará as ferramentas, o suporte e a inspiração
              necessários para dar vida à sua visão inovadora. Junte-se a nós e
              faça parte de uma comunidade que desafia os limites e redefine o
              futuro."
              />
            </ProjectParagraphContainer>
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
