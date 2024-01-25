import {Container} from "react-bootstrap";
import Carousel  from "../../components/Carousel/Carousel"

import { HeadingTitle, Paragraph } from "../../components/Texts/Texts";
import { ButtonPrimary } from "../../components/Buttons/Buttons";

const Hero: React.FC = () => {
  return (
    <Container className="text-center mt-5 ">
    <div style={{ marginTop: '20%' }}>
    <HeadingTitle className="" title="Bem-vindo à HastyDEV - Desenvolva Projetos Reais" />
    </div>
    <Paragraph
      paragraph="Encontre Projetos Reais para Anexar ao seu Portfólio, Conquiste Seu Local no Mercado E Seja Recompensado Por Isso!"
      className="text-center "
    />
    <ButtonPrimary
      route="/register"
      buttonText="Inscreva-se"
      className="mx-auto d-block"
    />
    <Carousel className="mt-4"/>
  </Container>
  
  );
};

export default Hero;
