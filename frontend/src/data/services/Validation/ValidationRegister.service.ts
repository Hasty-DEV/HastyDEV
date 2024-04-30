import * as yup from "yup";

export const validationsRegister = yup.object().shape({
  first_name: yup.string().required("O campo de nome é obrigatório"),
  last_name: yup.string().required("O campo de sobrenome é obrigatório"),
  username: yup
    .string()
    .required("O campo de nome de usuário é obrigatório")
    .min(5, "O username deve ter pelo menos 5 caracteres"),
  email: yup.string().email("Email inválido").required("O email é obrigatório"),
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
  confirmPassword: yup
    .string()
    .required("A confirmação da senha é obrigatória")
    .oneOf([yup.ref("password")], "As senhas não coincidem"),
});
