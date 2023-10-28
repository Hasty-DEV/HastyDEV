import * as B from "./Buttons.styles";
import { HTMLProps } from "react";

interface ButtonProps extends Omit<HTMLProps<HTMLButtonElement>, 'type'> {
  route: string;
  buttonText: string;
  type?: 'button' | 'submit' | 'reset';
}



export const ButtonPrimary: React.FC<ButtonProps> = ({ route, buttonText, ...rest }) => {
  return (
    <B.StyledLink to={route}>
      <B.ButtonPrimaryStyled {...rest}>{buttonText}</B.ButtonPrimaryStyled>
    </B.StyledLink>
  );
};

export const ButtonSecond2Styled: React.FC<ButtonProps> = ({ route, buttonText, ...rest }) => {
  return (
      
    <B.StyledLink to={route}>
      <B.ButtonSecond2Styled {...rest}>{buttonText}</B.ButtonSecond2Styled>
    </B.StyledLink>
  );
};

export const ButtonSecondStyled: React.FC<ButtonProps> = ({ route, buttonText, ...rest }) => {
  return (
      
    <B.StyledLink to={route}>
      <B.ButtonSecondStyled {...rest}>{buttonText}</B.ButtonSecondStyled>
    </B.StyledLink>
  );
};


  