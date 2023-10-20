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
