import { DefaultTheme } from "styled-components";

export interface TextStyledProps {
  hasUnderline?: boolean;
  IsInline?: boolean;
  customColor?: keyof DefaultTheme["colors"];
}
