import * as yup from "yup";

export const validationsSearch = yup.object().shape({
  Name: yup.string().required("O campo de nome é obrigatório"),
});
