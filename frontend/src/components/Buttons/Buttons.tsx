import * as B from "./Buttons.styles";
import { HTMLProps } from "react";

interface ButtonProps extends Omit<HTMLProps<HTMLButtonElement>, 'type'> {
  route?: string;
  buttonText: string;
  type?: 'button' | 'submit' | 'reset';
}



export const ButtonPrimary: React.FC<ButtonProps> = ({ route, buttonText, ...rest }) => {
  return (
    <B.StyledLink to={route || "/"}>
      <B.ButtonPrimaryStyled {...rest}>{buttonText}</B.ButtonPrimaryStyled>
    </B.StyledLink>
  );
};



export const ButtonPrimaryLong: React.FC<ButtonProps> = ({ route, buttonText, ...rest }) => {
  return (
    <B.StyledLink to={route || "/"}>
      <B.ButtonPrimaryLongStyled {...rest}>{buttonText}</B.ButtonPrimaryLongStyled>
    </B.StyledLink>
  );
};

export const ButtonSecondary: React.FC<ButtonProps> = ({ route, buttonText, ...rest }) => {
  return (
      
    <B.StyledLink to={route || "/"}>
      <B.ButtonSecondaryStyled {...rest}>{buttonText}</B.ButtonSecondaryStyled>
    </B.StyledLink>
  );
};

export const ButtonTertiary: React.FC<ButtonProps> = ({ route, buttonText, ...rest }) => {
  return (
      
    <B.StyledLink to={route || "/"}>
      <B.ButtonTertiaryStyled {...rest}>{buttonText}</B.ButtonTertiaryStyled>
    </B.StyledLink>
  );
};




  