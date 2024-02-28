import styled from "styled-components";

export const FooterStyled = styled.footer`
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  margin-top: 1%;
  padding: 2%;

  p {
    margin-top: 10%;
  }

  @media (max-width: 580px) {
    p {
      margin-top: 0; 
    }
  }
`;

export const SocialMediaContainer = styled.div`
  .card {
    width: 190px;
    height: 50px;
    background-color: ${(props) => props.theme.colors.background};
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    padding: 5px 5px;
    gap: 15px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
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
