import * as yup from "yup";

export const validationNewPassword = yup.object().shape({
  email: yup.string().email("Email inválido").required("O email é obrigatório"),
  resetCode: yup.string().required("O código é obrigatório"),
  newPassword: yup.string().required("A senha é obrigatória"),
});
