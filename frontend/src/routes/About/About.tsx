import { Container, Row, Col } from "react-bootstrap";
import * as A from "./About.styles";

import AboutImg from "../../assets/images/About/AboutImg1.png";
import WorldMapLight from "../../assets/images/About/WorldMapLight.svg";
import "./Tabela.css";
import {
  HeadingTitle,
  HeadingSubtitle,
  HeadingInterTitle,
  HeadingSubInterTitle,
  Paragraph,
} from "../../components/Texts/Texts";

const About: React.FC = () => {
  return (
    <Container className="text-center">
      <Row>
        <Col xs={12}>
          <HeadingTitle
            title="Aqui Nós Garantimos"
            span="Seu Sucesso Profissional"
            hasUnderline={true}
            className="mt-5"
          />
        </Col>
        <Col xs={12}>
          <A.RectangleDiv className="mt-4">
            <Paragraph
              paragraph="Na HastyDEV, acreditamos que o sucesso profissional deve estar ao
              alcance de todos. É por isso que criamos uma plataforma
              colaborativa gamificada que não apenas conecta desenvolvedores
              talentosos com organizações sociais e empresas parceiras, mas
              também garante que cada passo que você dá conosco seja uma jornada
              rumo ao sucesso. Nossa missão é simples, mas poderosa: enriquecer
              sua experiência profissional enquanto você contribui para um mundo
              melhor"
            />
          </A.RectangleDiv>
        </Col>
        <Col xs={12} className="mt-auto">
          <A.ImageStyled src={AboutImg} alt="" className="img-fluid" />
        </Col>
        <Col xs={12} className="mt-1">
          <HeadingSubtitle
            subtitle="Não Precisa Correr Atrás"
            span="Para Fazer Seu Projeto Dos Sonhos"
            hasUnderline={true}
            className="mt-5"
          ></HeadingSubtitle>
        </Col>
        <Col xs={12}>
          <img
            src={WorldMapLight}
            alt=""
            width="100%"
            height="auto"
            className="mt-1"
          />
        </Col>
        <Col xs={12}>
          <HeadingInterTitle
            intertitle="Nossa "
            span="Missão"
            className="text-start"
            hasUnderline={true}
            IsInline={true}
          />
        </Col>
        <Col xs={12}>
          <table className="tabela-transparente mb-3">
            <tbody>
              <tr>
                <td>
                  <HeadingSubInterTitle SubInterTitle="Colaboração" />
                </td>
                <td>
                  <Paragraph
                    paragraph="Promovemos a união de talentos para criar um impacto positivo.
                  Facilitamos a colaboração entre desenvolvedores e organizações
                  sociais/empresas parceiras, tornando ideias em ações."
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <HeadingSubInterTitle SubInterTitle="Gamificação" />
                </td>
                <td>
                  <Paragraph
                    paragraph="Tornamos o aprendizado e o trabalho envolventes e divertidos
                  com sistemas de recompensas. Motivamos os desenvolvedores a se
                  desafiarem e contribuírem para projetos de impacto."
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <HeadingSubInterTitle SubInterTitle="Profissionalismo" />
                </td>
                <td>
                  <Paragraph
                    paragraph="Valorizamos o desenvolvimento profissional com
                    responsabilidade e ética. Garantimos que os desenvolvedores
                    adquiram experiência valiosa e que as organizações parceiras
                    recebam suporte técnico qualificado."
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <HeadingSubInterTitle SubInterTitle="Impacto Social" />
                </td>
                <td>
                  <Paragraph
                    paragraph="Nosso propósito é causar mudanças sociais positivas.
                    Trabalhamos com organizações sociais e empresas parceiras para
                    resolver desafios sociais. Acreditamos na transformação de
                    vidas e comunidades."
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
        <Col xs={12}>
          <HeadingInterTitle
            intertitle="Nossa "
            span="Colaboração"
            className="text-start"
            hasUnderline={true}
            IsInline={true}
          />
        </Col>
        <Col xs={12}>
          <table className="tabela-transparente">
            <tbody>
              <tr>
                <td>
                  <HeadingSubInterTitle SubInterTitle="Inovação" />
                </td>
                <td>
                  <Paragraph
                    paragraph="Na HastyDEV, a inovação é nossa força motriz. Buscamos
                    constantemente soluções criativas para enfrentar desafios e
                    moldar o futuro."
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <HeadingSubInterTitle SubInterTitle="Excelência" />
                </td>
                <td>
                  <Paragraph
                    paragraph="Comprometidos com a excelência em tudo o que fazemos, na
                    HastyDEV. Buscamos a mais alta qualidade em cada aspecto do
                    nosso trabalho."
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <HeadingSubInterTitle SubInterTitle="Impacto" />
                </td>
                <td>
                  <Paragraph
                    paragraph="O impacto é o coração da nossa missão na HastyDEV. Unimos
                    desenvolvedores a organizações sociais e empresas para causar
                    mudanças positivas."
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
      <Col xs={12}>
        <HeadingSubtitle span="Nosso Time de Sucesso" className="mt-5" />
      </Col>
      <div> silder </div>
      <Col xs={12}>
        <h2>Fale Conosco</h2>
      </Col>
      <Col xs={12}>
        <p>
          Ficaremos Felizes de Falar Contigo. Preencha o Formulário Para
          Atendemos Você
        </p>
      </Col>
      <Col xs={12}>
        <form>
          <input type="text" name="nome" placeholder="Nome" />

          <input type="email" name="email" placeholder="Email" />

          <input type="tel" name="telefone" placeholder="Telefone" />

          <select name="categoria" title="Categorias">
            <option value="Vendas">Vendas</option>
            <option value="Suporte">Suporte</option>
            <option value="Outro">Outro</option>
          </select>

          <input type="text" name="assunto" placeholder="Assunto" />

          <button type="submit">Entre em Contato</button>
        </form>
      </Col>
    </Container>
  );
};

export default About;
