import * as yup from "yup";
import styled from "styled-components";
import { FormFetch } from "../../axios/config";
import { Formik, Field } from "formik";
import { ButtonPrimaryLongNoLink } from "../Buttons/Buttons";
import { Container, Row, Col } from "react-bootstrap";

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

const ContactUSForm = () => {
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
                <Container>
                  <Row>
                    <Col xs={6} className="mt-2">
                      <Field type="text" placeholder="Nome" name="Name" />
                      {errors.Name && touched.Name && errors.Name}
                      <Field type="email" placeholder="E-mail" name="Email" className="mt-3"/>
                      {errors.Email && touched.Email && errors.Email}
                    </Col>
                    <Col xs={6} className="mt-2">
                      <Field type="tel" placeholder="Telefone" name="Phone" />
                      {errors.Phone && touched.Phone && errors.Phone}
                      <select
                        title="Category"
                        id="Category"
                        name="Category"
                        value={values.Category}
                        onChange={(e) =>
                          setFieldValue("Category", e.target.value)
                        }
                        className="mt-3"
                      >
                        <option value="">Selecione uma Categoria</option>
                        <option value="Comercial">Comercial</option>
                        <option value="Financeiro">Financeiro</option>
                        <option value="Suporte">Suporte</option>
                        <option value="Outro">Outro</option>
                      </select>
                    </Col>
                    <Col xs={12} className="mt-4">
                      <Field type="text" placeholder="Assunto" name="Subject" />
                      {errors.Subject && touched.Subject && errors.Subject}
                    </Col>
                    <Col xs={12} className="mt-4">
                      <Field
                        component="textarea"
                        name="Message"
                        placeholder="Digite sua Mensagem..."
                        required
                      />
                      {errors.Message && touched.Message && errors.Message}
                    </Col>
                    <Col xs={6} className="mt-4">
                    </Col>
                    <Col xs={6} className="mt-4">
                    <ButtonPrimaryLongNoLink
                      type="submit"
                      buttonText="Entre em Contato"
                      disabled={isSubmitting}
                    />
                    </Col>
                    
                  </Row>
                </Container>
              </form>
            </>
          )}
        </Formik>
      </FormContainer>
    </>
  );
};

export default ContactUSForm;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    border-radius: 2rem;
  }

  input,
  select,
  textarea {
    width: 100%;
    padding: 1rem;
    outline: none;
  }

  input, select {
    border: none;
    border-bottom: 1px solid #ccc;
  }

  textarea {
    resize: none;
    height: 10rem;
    border-radius: 5px;
    border: 1px solid #ccc
  }
`;

