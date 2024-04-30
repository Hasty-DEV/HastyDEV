import { Container } from "react-bootstrap";
import styled from "styled-components";
import {
  HeadingSubInterTitle,
  HeadingTitle,
  Paragraph,
} from "../../components/Texts/Texts";

export const ProjectFirstSection = styled(Container)`
  padding: 200px;
  padding-top: 20px;

  @media (min-width: 576px) and (max-width: 1024px) {
    padding: 20px;
  }

  @media (max-width: 575px) {
    padding: 5px;
  }
`;

export const ProjectHeadingTitle = styled(HeadingTitle)`
  max-width: 800px;
  font-size: 3rem;

  @media (max-width: 575px) {
    font-size: 2.5rem;
    padding: 10px;
  }
`;

export const ProjectSubInterTitle = styled(HeadingSubInterTitle)`
  width: 40%;
  @media (max-width: 575px) {
    padding: 10px;
  }
`;

export const ProjectParagraph = styled(Paragraph)`
  max-width: 600px;
  font-size: 1.5rem;
  line-height: 30px;

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
`;