import styled from "styled-components";

export interface TextStyledProps {
  hasUnderline?: boolean;
}

export const HeadingTitleStyled = styled.h1<TextStyledProps>`
  color:  ${(props) => props.theme.colors.text};
  text-align: center;
  font-family: Inter;
  font-size: 64px;
  font-style: normal;
  font-weight: 500;
  line-height: 116%;

  &::after {
    content: "";
    display: block;
    width: 50%;
    margin-left: 25%;
    height: 7px;
    background: #011c2a;
    opacity: ${(props) => (props.hasUnderline ? 1 : 0)};
  }
`;

export const HeadingSubtitleStyled = styled.h2`
 color:  ${(props) => props.theme.colors.text};
  text-align: center;
  font-family: Inter;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: 88px;
`;

export const HeadingInterTitleStyled = styled.h3`
color:  ${(props) => props.theme.colors.text};
  font-family: Inter;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;
`;

export const ParagraphStyled = styled.p`
color:  ${(props) => props.theme.colors.text};
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-align: justify;
`;

export const spanStyled = styled.span`
  display: block;
  ccolor:  ${(props) => props.theme.colors.text};
`;
