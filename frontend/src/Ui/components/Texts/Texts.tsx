import { TextProps } from "../../../Data/@types/Texts/Texts.type";
import * as T from "../../styles/Texts/Texts.styles";

export const HeadingTitle: React.FC<TextProps> = ({
  title,
  span,
  className,
  style,
  IsInline,
  ...Rest
}) => {
  return (
    <T.HeadingTitleStyled className={className} style={style} {...Rest}>
      {title}
      <T.spanStyled IsInline={IsInline}>{span}</T.spanStyled>
    </T.HeadingTitleStyled>
  );
};

export const HeadingSubtitle: React.FC<TextProps> = ({
  subtitle,
  span,
  className,
  style,
  IsInline,
  ...Rest
}) => {
  return (
    <T.HeadingSubtitleStyled className={className} style={style} {...Rest}>
      {subtitle}
      <T.spanStyled IsInline={IsInline}>{span}</T.spanStyled>
    </T.HeadingSubtitleStyled>
  );
};

export const HeadingInterTitle: React.FC<TextProps> = ({
  intertitle,
  span,
  className,
  style,
  IsInline,
  ...Rest
}) => {
  return (
    <T.HeadingInterTitleStyled className={className} style={style} {...Rest}>
      {intertitle}
      <T.spanStyled IsInline={IsInline}>{span}</T.spanStyled>
    </T.HeadingInterTitleStyled>
  );
};


export const HeadingSubInterTitle: React.FC<TextProps> = ({
  SubInterTitle,
  span,
  className,
  style,
  IsInline,
  ...Rest
}) => {
  return (
    <T.HeadingSubInterTitleStyled className={className} style={style} {...Rest}>
      {SubInterTitle}
      <T.spanStyled IsInline={IsInline}>{span}</T.spanStyled>
    </T.HeadingSubInterTitleStyled>
  );
};

export const Paragraph: React.FC<TextProps> = ({
  paragraph,
  span,
  className,
  style,
  ...Rest
}) => {
  return (
    <T.ParagraphStyled className={className} style={style} {...Rest}>
      {paragraph}
      <T.spanStyled>{span}</T.spanStyled>
    </T.ParagraphStyled>
  );
};
