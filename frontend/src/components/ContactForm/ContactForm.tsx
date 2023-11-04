import * as yup from "yup";
import styled from "styled-components";
import { FormFetch } from "../../axios/config";
import { Formik, Field } from "formik";
import { ButtonPrimaryLongNoLink } from "../Buttons/Buttons";

interface ContactFormValues {
  Name: string;
  Email: string;
  Phone: string;
  Category: string;
  Subject: string;
  Message: string;
}

const validationsContact = yup.object().shape({
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

const ContactForm = () => {
  const handleContact = async ({
    Name,
    Email,
    Phone,
    Category,
    Subject,
    Message,
  }: ContactFormValues) => {
    try {
      const response = await FormFetch.post("/contactForm", {
        Name,
        Email,
        Phone,
        Category,
        Subject,
        Message,
      });
      console.log(response.data);
    } catch (err) {
      alert(err);
    }
  };
  return (
    <>
      <FormContainer>
        <Formik
          initialValues={{
            Name: "",
            Email: "",
            Phone: "",
            Category: "",
            Subject: "",
            Message: "",
          }}
          onSubmit={handleContact}
          validationSchema={validationsContact}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            isSubmitting,
            setFieldValue,
          }) => (
            <>
              <form onSubmit={handleSubmit}>
                <Field type="text" placeholder="Nome" name="Name" />
                {errors.Name && touched.Name && errors.Name}
                <Field type="email" placeholder="E-mail" name="Email" />
                {errors.Email && touched.Email && errors.Email}
                <Field type="tel" placeholder="Telefone" name="Phone" />
                {errors.Phone && touched.Phone && errors.Phone}
                <select
                  title="Category"
                  id="Category"
                  name="Category"
                  value={values.Category}
                  onChange={(e) => setFieldValue("Category", e.target.value)}
                >
                  <option value="">Selecione uma Categoria</option>
                  <option value="Comercial">Comercial</option>
                  <option value="Financeiro">Financeiro</option>
                  <option value="Suporte">Suporte</option>
                  <option value="Outro">Outro</option>
                </select>
                <Field type="text" placeholder="Assunto" name="Subject" />
                {errors.Subject && touched.Subject && errors.Subject}
                <Field
                  component="textarea"
                  name="Message"
                  placeholder="Digite sua Mensagem..."
                  required
                />
                {errors.Message && touched.Message && errors.Message}
                <ButtonPrimaryLongNoLink
                  type="submit"
                  buttonText="Entre em Contato"
                  disabled={isSubmitting}
                />
              </form>
            </>
          )}
        </Formik>
      </FormContainer>
    </>
  );
};

export default ContactForm;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-radius: 2rem;
  }

  input,
  select {
    border: none;
    border-bottom: 1px solid #000;
    display: flex;
    width: 500px;
    height: 58px;
    padding-top: 24px;
    gap: 10px;

    &::placeholder {
      color: #5d5f61;
    }

    &:focus {
      outline: none;
      border-bottom-color: #000;
    }
  }

  textarea {
    padding: 10px;
    resize: none;
    &:focus {
      outline: none;
    }
  }
`;
