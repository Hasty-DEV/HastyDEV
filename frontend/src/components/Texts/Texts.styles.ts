import styled, { DefaultTheme } from "styled-components";

export interface TextStyledProps {
  hasUnderline?: boolean;
  IsInline?: boolean;
  customColor?: keyof DefaultTheme["colors"];
}

export const HeadingTitleStyled = styled.h1<TextStyledProps>`
  color: ${(props) => props.theme.colors[props.customColor || "text"]};
  text-align: center;
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
    background: ${(props) => props.theme.colors[props.customColor || "text"]};
    opacity: ${(props) => (props.hasUnderline ? 1 : 0)};
  }
  @media (max-width: 768px) {
    font-size: 3rem;
    line-height: 1.2;
  }
`;

export const HeadingSubtitleStyled = styled.h2<TextStyledProps>`
  color: ${(props) => props.theme.colors[props.customColor || "text"]};
  text-align: center;
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
    background: ${(props) => props.theme.colors[props.customColor || "text"]};
    opacity: ${(props) => (props.hasUnderline ? 1 : 0)};
  }

  @media (max-width: 998px) {
    font-size: 3.5rem;
    line-height: 64px;
  }
`;

export const HeadingInterTitleStyled = styled.h3<TextStyledProps>`
  color: ${(props) => props.theme.colors[props.customColor || "text"]};
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
    background: ${(props) => props.theme.colors[props.customColor || "text"]};
    opacity: ${(props) => (props.hasUnderline ? 1 : 0)};
  }
`;

export const HeadingSubInterTitleStyled = styled.h4<TextStyledProps>`
  color: ${(props) => props.theme.colors[props.customColor || "text"]};
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
    background: ${(props) => props.theme.colors[props.customColor || "text"]};
    opacity: ${(props) => (props.hasUnderline ? 1 : 0)};
  }

  @media (max-width: 575px) {
    font-size: 1.8rem;
  }
`;

export const ParagraphStyled = styled.p<TextStyledProps>`
  display: ${(props) => (props.IsInline ? "inline" : "block")};
  color: ${(props) => props.theme.colors[props.customColor || "text"]};
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  text-align: justify;

  @media (max-width: 768px) {
    line-height: 1.5;
    font-size: 1rem;
  }
`;

export const spanStyled = styled.span<TextStyledProps>`
  display: ${(props) => (props.IsInline ? "inline" : "block")};
  color: ${(props) => props.theme.colors[props.customColor || "span"]};
`;
