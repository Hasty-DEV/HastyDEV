import styled from "styled-components";
import { Container } from "react-bootstrap";

export const RectangleDiv = styled(Container)`
  width: 1280px;
  height: 402px;
  flex-shrink: 0;
  background: #fed30a;
  position: absolute;
  z-index: -1;
  border-radius: 40px;
  padding: 35px;
`;

export const ImageStyled = styled.img`
    margin-top: 20%;
`;