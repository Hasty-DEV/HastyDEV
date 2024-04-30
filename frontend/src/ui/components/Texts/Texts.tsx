import { TextProps } from "../../../data/@types/Texts/Texts.type";
import * as T from "../../styles/Texts/Texts.style";

export const HeadingTitle = ({
  title,
  span,
  className,
  style,
  IsInline,
  ...Rest
}: TextProps) => {
  return (
    <T.HeadingTitleStyled className={`${className} text-center fw-normal `} style={style} {...Rest}>
      {title}
      <T.spanStyled IsInline={IsInline}>{span}</T.spanStyled>
    </T.HeadingTitleStyled>
  );
};

export const HeadingSubtitle = ({
  subtitle,
  span,
  className,
  style,
  IsInline,
  ...Rest
}: TextProps) => {
  return (
    <T.HeadingSubtitleStyled className={`${className} text-center fw-normal `} style={style} {...Rest}>
      {subtitle}
      <T.spanStyled IsInline={IsInline}>{span}</T.spanStyled>
    </T.HeadingSubtitleStyled>
  );
};

export const HeadingInterTitle = ({
  intertitle,
  span,
  className,
  style,
  IsInline,
  ...Rest
}: TextProps) => {
  return (
    <T.HeadingInterTitleStyled className={`${className} fw-normal`} style={style} {...Rest}>
      {intertitle}
      <T.spanStyled IsInline={IsInline}>{span}</T.spanStyled>
    </T.HeadingInterTitleStyled>
  );
};

export const HeadingSubInterTitle = ({
  SubInterTitle,
  span,
  className,
  style,
  IsInline,
  ...Rest
}: TextProps) => {
  return (
    <T.HeadingSubInterTitleStyled className={`${className} fw-normal `} style={style} {...Rest}>
      {SubInterTitle}
      <T.spanStyled IsInline={IsInline}>{span}</T.spanStyled>
    </T.HeadingSubInterTitleStyled>
  );
};

export const Paragraph = ({
  paragraph,
  span,
  className,
  style,
  ...Rest
}: TextProps) => {
  return (
    <T.ParagraphStyled className={`${className} fw-normal`} style={style} {...Rest}>
      {paragraph}
      <T.spanStyled>{span}</T.spanStyled>
    </T.ParagraphStyled>
  );
};
