import { Container } from "react-bootstrap";
import { HeadingTitle, Paragraph } from "../../Ui/components/Texts/Texts";
import { ButtonPrimary } from "../../Ui/components/Buttons/Buttons";
import { HeroContainer } from "../../Ui/styles/Hero/Hero.styles";
import HeroImg1 from "../../Ui/assets/images/Hero/Hero-Img1.webp";
import HeroImg2 from "../../Ui/assets/images/Hero/Hero-Img2.webp";
import HeroImg3 from "../../Ui/assets/images/Hero/Hero-Img3.webp";
import HeroImg4 from "../../Ui/assets/images/Hero/Hero-Img4.webp";

const Hero = () => {
  return (
    <HeroContainer className="mb-5">
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
        <article className="mt-4 img-container">
          <img src={HeroImg1} alt="" className="Img-hero img-1 " />
          <img src={HeroImg2} alt="" className="Img-hero img-2" width="190" height="143"/>
          <img src={HeroImg3} alt="" className="Img-hero img-3" width="190" height="127"/>
          <img src={HeroImg4} alt="" className="Img-hero img-4" />
        </article>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
