import { Container } from "react-bootstrap";
import styled from "styled-components";

import {
  HeadingSubInterTitle,
  HeadingTitle,
  Paragraph,
} from "../../components/Texts/Texts";

export const ProjectFirstSection = styled(Container)`
  padding: 200px;
  padding-top: 50px;

  @media (min-width: 576px) and (max-width: 1024px) {
    padding: 20px;
  }

  @media (max-width: 575px) {
    padding: 5px;
  }
`;

export const ProjectHeadingTitle = styled(HeadingTitle)`
  max-width: 100%;
  font-size: 40px;

  @media (max-width: 575px) {
    font-size: 2.5rem;
    padding: 10px;
  }
`;

export const ProjectSubInterTitle = styled(HeadingSubInterTitle)`
  width: 55%;
  font-size: 1.5rem;
  @media (max-width: 575px) {
    padding: 10px;
  }
`;

export const ProjectParagraph = styled(Paragraph)`
  max-width: 100%;
  font-size: 18px;
  

  @media (max-width: 575px) {
    font-size: 1rem;
    padding: 10px;
  }
`;

export const ProjectParagraphContainer = styled.div`
  margin-top: 10%;
`;

export const ProjectTitleContainer = styled.div`
  margin-top: 20%;
  display: inline-flex;
  
 
 
`;
export const HorizontalLine = styled.div`
  width: 150px; 
  height: 1.5px;  
  background-color: black; 
  margin: 6% 0px 0px 0px ; 
  background: ${(props) => props.theme.colors.text};
`;

export const Header = styled.h1`
font-size: 35px;
color: ${(props) => props.theme.colors.text};
`
export const SpanHeader = styled.span`
color: ${(props) => props.theme.colors.span};
`