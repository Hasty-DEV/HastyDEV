import * as yup from "yup";

export const validationSendPassCode = yup.object().shape({
  email: yup.string().email("Email inválido").required("O email é obrigatório"),
});
