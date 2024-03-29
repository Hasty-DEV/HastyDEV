import * as yup from "yup";

export const validationsLogin = yup.object().shape({
  username: yup.string().required("O Usuário é obrigatório*"),
  password: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("A senha é obrigatória*"),
});
