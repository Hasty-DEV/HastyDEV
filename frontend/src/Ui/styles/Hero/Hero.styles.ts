import styled from "styled-components";

export const HeroContainer = styled.section`
  article.title {
    margin-top: 10%;

    @media (max-width: 1024px) {
      margin-top: 20%;
    }

    @media (max-width: 769px) {
      margin-top: 25%;
    }
  }
`;
