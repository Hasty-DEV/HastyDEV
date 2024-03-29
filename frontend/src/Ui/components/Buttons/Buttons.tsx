import { ButtonProps } from "../../../Data/@types/Button/Button.type";
import * as B from "../../styles/Button/Buttons.styles";

export const ButtonPrimary= ({
  route,
  buttonText,
  ...rest
}: ButtonProps) => {
  return (
    <B.StyledLink to={route || "/"}>
      <B.ButtonPrimaryStyled {...rest}>{buttonText}</B.ButtonPrimaryStyled>
    </B.StyledLink>
  );
};

export const ButtonPrimaryLong = ({
  route,
  buttonText,
  ...rest
}: ButtonProps) => {
  return (
    <B.StyledLink to={route || "/"}>
      <B.ButtonPrimaryLongStyled {...rest}>
        {buttonText}
      </B.ButtonPrimaryLongStyled>
    </B.StyledLink>
  );
};

export const ButtonPrimaryLongNoLink = ({
  route,
  buttonText,
  ...rest
}: ButtonProps) => {
  return (
    <B.ButtonPrimaryLongStyled {...rest}>
      {buttonText}
    </B.ButtonPrimaryLongStyled>
  );
};

export const ButtonSecondary = ({
  route,
  buttonText,
  ...rest
}: ButtonProps) => {
  return (
    <B.StyledLink to={route || "/"}>
      <B.ButtonSecondaryStyled {...rest}>{buttonText}</B.ButtonSecondaryStyled>
    </B.StyledLink>
  );
};

export const ButtonTertiary = ({
  route,
  buttonText,
  ...rest
}: ButtonProps) => {
  return (
    <B.StyledLink to={route || "/"}>
      <B.ButtonTertiaryStyled {...rest}>{buttonText}</B.ButtonTertiaryStyled>
    </B.StyledLink>
  );
};
