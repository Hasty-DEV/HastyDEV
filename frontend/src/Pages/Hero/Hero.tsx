import { Container } from "react-bootstrap";
import { HeadingTitle, Paragraph } from "../../Ui/components/Texts/Texts";
import { ButtonPrimary } from "../../Ui/components/Buttons/Buttons";
import { HeroContainer } from "../../Ui/styles/Hero/Hero.styles";
import Carousel from "../../Ui/components/Carousel/Carousel";

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <Container className="text-center mt-5 ">
        <article className="title">
          <HeadingTitle title="Bem-vindo à HastyDEV - Desenvolva Projetos Reais" />
        </article>
        <article>
          <Paragraph
            paragraph="Encontre Projetos Reais para Anexar ao seu Portfólio, Conquiste Seu Local no Mercado E Seja Recompensado Por Isso!"
            className="text-center "
          />
          <ButtonPrimary
            route="/register"
            buttonText="Inscreva-se"
            className="mx-auto d-block"
          />
        </article>
        <article>
          <Carousel className="mt-4" />
        </article>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
