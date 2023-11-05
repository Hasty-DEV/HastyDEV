import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import {
  HeadingSubInterTitle,
  HeadingTitle,
} from "../../components/Texts/Texts";
import { Link } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";

const Project: React.FC = () => {
  return (
    <>
      <ProjectFirstSection fluid>
        <Row>
          <Col xs={6}>
            <Col xs={12}>
              <HeadingSubInterTitle SubInterTitle="Sobre o Projeto" />
            </Col>
            <Col xs={12}>
              <HeadingTitle
                title="Revolucionário Espaço de Projetos Para Realizar sua"
                span="Inovação"
              />
            </Col>
          </Col>
          <Col xs={6}>
            <p>
              Em nosso espaço de co-working, a inovação se torna realidade. Na
              HastyDEV, oferecemos um ambiente único onde mentes criativas se
              unem para transformar ideias ousadas em conquistas tangíveis.
              Aqui, você encontrará as ferramentas, o suporte e a inspiração
              necessários para dar vida à sua visão inovadora. Junte-se a nós e
              faça parte de uma comunidade que desafia os limites e redefine o
              futuro.
            </p>
          </Col>
          <Col xs={12}>
            <SearchFormDiv xs={4}>
              <form>
                <h2>Procure o Projeto Ideal</h2>
                <div className="campos">
                  <label htmlFor="parceiro">Qual Parceiro Deseja Ajudar?</label>
                  <select name="parceiro" id="parceiro">
                    <option value="ONGS">ONGs</option>
                    <option value="Empresas">Empresas</option>
                    <option value="Governo">Governo</option>
                  </select>

                  <label htmlFor="area">Qual Sua Área de Atuação?</label>
                  <input
                    type="text"
                    name="area"
                    id="area"
                    placeholder="Ex.: Front-End Developer"
                  />

                  <label htmlFor="remuneracao">Deseja Remuneração?</label>
                  <input type="radio" name="remuneracao" id="sim" value="sim" />
                  <label htmlFor="sim">Sim</label>
                  <input
                    type="radio"
                    name="remuneracao"
                    id="nao"
                    value="nao"
                    checked
                  />
                  <label htmlFor="nao">Não</label>
                </div>
                <button type="submit">Procure o Projeto</button>
              </form>
            </SearchFormDiv>
            <Col xs={8}></Col>
          </Col>
        </Row>
      </ProjectFirstSection>
      <ProjectSecondSection>
        <Row>
          <Col xs={12}>
            <Col xs={4}>
              <h2>Nossa Plataforma</h2>
            </Col>
            <Col xs={4}>
              <p>
                Nossa Plataforma Foi Projetada Para Proporcionar Uma Experiência
                Diferente Ao Criar ou Buscar Projetos
              </p>
            </Col>
            <Col xs={4}></Col>
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
  padding: 100px;
  padding-top: 20px;
`;

const SearchFormDiv = styled(Col)`
  form {
    width: 500px;
    margin: 0 auto;
  }

  h2 {
    text-align: center;
  }

  .campos {
    margin-top: 20px;
  }

  label {
    font-weight: bold;
  }

  input,
  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
  }

  input[type="radio"] {
    margin-right: 10px;
  }

  button {
    background-color: #000;
    color: #fff;
    padding: 10px;
    border: none;
    cursor: pointer;
  }
`;

const ProjectSecondSection = styled(Container)`
  margin-top: 5%;
`;
