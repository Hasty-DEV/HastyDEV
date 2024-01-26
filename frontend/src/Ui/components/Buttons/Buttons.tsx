import { ButtonProps } from "../../../Data/@types/Button/Button.type";
import * as B from "../../styles/Button/Buttons.styles";

export const ButtonPrimary: React.FC<ButtonProps> = ({
  route,
  buttonText,
  ...rest
}) => {
  return (
    <B.StyledLink to={route || "/"}>
      <B.ButtonPrimaryStyled {...rest}>{buttonText}</B.ButtonPrimaryStyled>
    </B.StyledLink>
  );
};

export const ButtonPrimaryLong: React.FC<ButtonProps> = ({
  route,
  buttonText,
  ...rest
}) => {
  return (
    <B.StyledLink to={route || "/"}>
      <B.ButtonPrimaryLongStyled {...rest}>
        {buttonText}
      </B.ButtonPrimaryLongStyled>
    </B.StyledLink>
  );
};

export const ButtonPrimaryLongNoLink: React.FC<ButtonProps> = ({
  route,
  buttonText,
  ...rest
}) => {
  return (
    <B.ButtonPrimaryLongStyled {...rest}>
      {buttonText}
    </B.ButtonPrimaryLongStyled>
  );
};

export const ButtonSecondary: React.FC<ButtonProps> = ({
  route,
  buttonText,
  ...rest
}) => {
  return (
    <B.StyledLink to={route || "/"}>
      <B.ButtonSecondaryStyled {...rest}>{buttonText}</B.ButtonSecondaryStyled>
    </B.StyledLink>
  );
};

export const ButtonTertiary: React.FC<ButtonProps> = ({
  route,
  buttonText,
  ...rest
}) => {
  return (
    <B.StyledLink to={route || "/"}>
      <B.ButtonTertiaryStyled {...rest}>{buttonText}</B.ButtonTertiaryStyled>
    </B.StyledLink>
  );
};
