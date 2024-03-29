import * as yup from "yup";

export const validationsContact = yup.object().shape({
  Name: yup.string().required("O campo de nome é obrigatório"),
  Email: yup.string().email("Email inválido").required("O email é obrigatório"),
  Phone: yup.string().required("O campo de Telefone é obrigatório"),
  Category: yup.string().required("O campo de Categoria é obrigatório"),
  Subject: yup.string().required("O campo de Assunto é obrigatório"),
  Message: yup
    .string()
    .required("O campo de Menssagem é obrigatório")
    .min(10, "O Campo deve ter pelo menos 10 caracteres"),
});
