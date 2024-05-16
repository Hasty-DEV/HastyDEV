import * as Yup from "yup";

export const validationNewPassword = Yup.object().shape({
  email: Yup.string()
    .email("Insira um e-mail válido")
    .required("O e-mail é obrigatório"),
  resetCode: Yup.string().required("O código de verificação é obrigatório"),
  newPassword: Yup.string()
    .required("A nova senha é obrigatória")
    .min(6, "A senha deve conter pelo menos 6 caracteres"),
  confirmNewPassword: Yup.string()
    .required("Confirme a nova senha")
    .oneOf([Yup.ref("newPassword"), ""], "As senhas devem ser iguais"),
});
