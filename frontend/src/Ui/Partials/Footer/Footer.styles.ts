import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterStyled = styled.footer`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  margin-top: 5%;
  padding: 5%;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const SubTitle = styled.h2`
  color: ${props => props.theme.colors.text};
  font-size: 16px;
  font-weight: 400;
  line-height: 3;
  word-wrap: break-word;
  text-decoration: none !important;
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.text};
  font-size: 19px;
  font-weight: 300;
  line-height: 3;
  word-wrap: break-word;
`;

export const Button = styled.button`
  width: 50px;
  height: 50px;
  background: ${props => props.theme.colors.secondary};
  border-radius: 0 10px 10px 0;
  border: none;
`;

export const Decoration = styled.input`
  border-radius: 6px 0 0 6px;
  border: 1px solid rgba(254, 211, 10, 0.20);
  background: #fff;
  flex: 1;
  height: 50px;
  color: #000;
  font-size: 14.4px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  white-space: nowrap;
  padding: 10px;

  @media (max-width: 575px) {
    width: 100%;
    margin-bottom: 10px;
    font-size: 14px;
    box-sizing: border-box;
  }
`;

export const NewsletterDiv = styled.div`
  padding-left: 0px;

  @media (max-width: 575px) {
    margin-bottom: 5%;
  }
`;

export const SocialMediaContainer = styled.div`
  .card {
    width: 190px;
    height: 50px;
    background-color: ${(props) => props.theme.colors.primary};
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    padding: 5px 5px;
    gap: 15px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.100);
  }

  /* for all social containers*/
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

  /* instagram*/
  .containerOne:hover {
    background-color: #d62976;
    transition-duration: 0.3s;
  }

  /* twitter*/
  .containerTwo:hover {
    background-color: #00acee;
    transition-duration: 0.3s;
  }

  /* linkdin*/
  .containerThree:hover {
    background-color: #0072b1;
    transition-duration: 0.3s;
  }

  /* Whatsapp*/
  .containerFour:hover {
    background-color: #128c7e;
    transition-duration: 0.3s;
  }

  .socialContainer:active {
    transform: scale(0.9);
    transition-duration: 0.3s;
  }

  .socialSvg {
    width: 15px;
  }
 
  .socialSvg path {
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
