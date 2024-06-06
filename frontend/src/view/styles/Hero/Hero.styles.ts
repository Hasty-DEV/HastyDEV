import styled from "styled-components";

export const HeroContainer = styled.section`
  article.title {
    margin-top: 10%;

    @media (max-width: 1024px) {
      margin-top: 15%;
    }

    @media (max-width: 769px) {
      margin-top: 25%;
    }

    @media (max-width: 280px) {
      margin-top: 40%;
    }
  }

  .img-container {
    max-width: 100%;
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }

  .Img-hero {
    @media (min-width: 1920px) and (max-width: 7680px) {
      width: 460px;
    }

    @media (min-width: 1281px) and (max-width: 1919px) {
      width: 300px;
    }

    @media (min-width: 1025px) and (max-width: 1280px) {
      width: 400px;
    }

    @media (min-width: 1025px) {
      height: 325px;
    }

    @media (min-width: 913px) and (max-width: 1024px) {
      width: 320px;
      height: 320px;
    }

    @media (min-width: 821px) and (max-width: 912px) {
      width: 290px;
      height: 290px;
    }

    @media (min-width: 769px) and (max-width: 820px) {
      width: 230px;
      height: 230px;
    }

    @media (max-width: 768px) {
      width: 240px;
      height: 240px;
    }

    @media (max-width: 540px) {
      width: 250px;
      height: 250px;
    }

    @media (max-width: 430px) {
      width: 200px;
      height: 200px;
    }

    @media (max-width: 412px) {
      width: 190px;
      height: 190px;
    }

    @media (max-width: 390px) {
      width: 180px;
      height: 180px;
    }

    @media (max-width: 390px) {
      width: 140px;
      height: 140px;
    }

    @media (max-width: 360px) {
      width: 170px;
      height: 170px;
    }

    @media (max-width: 280px) {
      width: 250px;
      height: 250px;
    }
  }

  .img-4 {
    @media (max-width: 1280px) {
      display: none;
    }

    @media (max-width: 360px) {
      display: none;
    }
  }

  .img-3 {
    @media (min-width: 820px) and (max-width: 1279px) {
      display: block;
    }

    @media (min-width: 769px) and (max-width: 819px) {
      display: none;
    }

    @media (max-width: 767px) {
      display: none;
    }
  }

  .img-2 {
    @media (max-width: 280px) {
      display: none;
    }
  }
`;
