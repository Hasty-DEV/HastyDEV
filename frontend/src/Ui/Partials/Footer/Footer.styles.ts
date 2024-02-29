import styled from "styled-components";

export const FooterStyled = styled.footer`
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  width: 100vw;

  .footer-container {
    padding: 20px;
  }

  p img {
    margin-bottom: 4px;
  }
`;

export const SocialMediaContainer = styled.div`
  div {
    gap: 15px;
  }

  .socialContainer {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors.text};
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition-duration: 0.3s;
  }

  .containerOne:hover {
    background-color: #d62976;
    transition-duration: 0.3s;
  }

  .containerTwo:hover {
    background-color: #00acee;
    transition-duration: 0.3s;
  }

  .containerThree:hover {
    background-color: #0072b1;
    transition-duration: 0.3s;
  }

  .containerFour:hover {
    background-color: #128c7e;
    transition-duration: 0.3s;
  }

  .socialContainer:active {
    transform: scale(0.9);
    transition-duration: 0.3s;
  }

  svg {
    width: 15px;
  }

  svg path {
    fill: ${(props) => props.theme.colors.background};
  }

  .socialContainer:hover .socialSvg {
    animation: slide-in-top 0.3s both;
  }

  @keyframes slide-in-top {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
