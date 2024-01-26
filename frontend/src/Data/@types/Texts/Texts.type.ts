import { TextStyledProps } from "../TextStyled/TextStyled.type";

export interface TextProps extends TextStyledProps {
  title?: string;
  span?: string;
  subtitle?: string;
  intertitle?: string;
  SubInterTitle?: string;
  paragraph?: string;
  className?: string;
  style?: React.CSSProperties;
}
