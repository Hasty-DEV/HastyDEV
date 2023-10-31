import styled from "styled-components";

export interface TextStyledProps {
  hasUnderline?: boolean;
  IsInline?: boolean;
}

export const HeadingTitleStyled = styled.h1<TextStyledProps>`
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  font-family: Inter;
  font-size: 5rem;
  font-style: normal;
  font-weight: 500;
  line-height: 116%;

  &::after {
    content: "";
    display: block;
    width: 50%;
    margin-left: 25%;
    height: 7px;
    background: ${(props) => props.theme.colors.text};
    opacity: ${(props) => (props.hasUnderline ? 1 : 0)};
  }
`;

export const HeadingSubtitleStyled = styled.h2<TextStyledProps>`
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  font-family: Inter;
  font-size: 4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 88px;

  &::after {
    content: "";
    display: block;
    width: 50%;
    margin-left: 25%;
    height: 7px;
    background: ${(props) => props.theme.colors.text};
    opacity: ${(props) => (props.hasUnderline ? 1 : 0)};
  } 
`;

export const HeadingInterTitleStyled = styled.h3<TextStyledProps>`
  color: ${(props) => props.theme.colors.text};
  font-family: Inter;
  font-size: 3rem;
  font-style: normal;
  font-weight: 600;
  line-height: 96px;

  &::after {
    content: "";
    display: block;
    width: 50%;
    margin-left: 0;
    height: 7px;
    background: ${(props) => props.theme.colors.text};
    opacity: ${(props) => (props.hasUnderline ? 1 : 0)};
  }
`;

export const HeadingSubInterTitleStyled = styled.h4<TextStyledProps>`
  color: ${(props) => props.theme.colors.text};
  font-family: Inter;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 32px;

  &::after {
    content: "";
    display: block;
    width: 50%;
    margin-left: 0;
    height: 7px;
    background: ${(props) => props.theme.colors.text};
    opacity: ${(props) => (props.hasUnderline ? 1 : 0)};
  }
`;


export const ParagraphStyled = styled.p`
  color: ${(props) => props.theme.colors.text};
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-align: justify;

`;

export const spanStyled = styled.span<TextStyledProps>`
  display: ${(props) => (props.IsInline ? "inline" : "block")};
  color: ${(props) => props.theme.colors.span};
`;
