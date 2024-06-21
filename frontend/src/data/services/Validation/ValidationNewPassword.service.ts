import * as yup from "yup";

export const  validationNewPassword  = yup.object().shape({
  password: yup
    .string()
    .required("A senha é obrigatória")
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .matches(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
    .matches(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
    .matches(/[0-9]/, "A senha deve conter pelo menos um número")
    .matches(
      /[@$!¨%*#?&]/,
      "A senha deve conter pelo menos um caractere especial"
    ),
  confirmNewPassword: yup
    .string()
    .required("A confirmação da senha é obrigatória")
    .oneOf([yup.ref("password")], "As senhas não coincidem"),
});
