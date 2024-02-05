import * as yup from "yup";
import { FormFetch } from "../../../Data/Services/axios/config";
import { Formik, Field } from "formik";
import { ButtonPrimaryLongNoLink } from "../../components/Buttons/Buttons";
import { Container, Row, Col } from "react-bootstrap";
import { ContactFormValues } from "../../../Data/@types/ContactFormValues/ContactFormValues.type";
import { FormContainer } from "../../styles/ContactUsForm/ContactUsForm.styles";
import { useState } from "react";
import Loader from "../../components/Loader/Loader";

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
  const [loading, setLoading] = useState(false);
  const handleContact = async ({
    Name,
    Email,
    Phone,
    Category,
    Subject,
    Message,
  }: ContactFormValues) => {
    try {
      setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
                    <Row className="flex-column flex-md-row">
                      <Col xs={12} md={6} className="mt-2">
                        <Field type="text" placeholder="Nome" name="Name" />
                        {errors.Name && touched.Name && errors.Name}
                      </Col>
                      <Col xs={12} md={6} className="mt-2">
                        <Field
                          type="email"
                          placeholder="E-mail"
                          name="Email"
                          className="mt-3"
                        />
                        {errors.Email && touched.Email && errors.Email}
                      </Col>
                      <Col xs={12} md={6} className="mt-2">
                        <Field type="tel" placeholder="Telefone" name="Phone" />
                        {errors.Phone && touched.Phone && errors.Phone}
                      </Col>
                      <Col xs={12} md={6} className="mt-2">
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
                        <Field
                          type="text"
                          placeholder="Assunto"
                          name="Subject"
                        />
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
                      <Col xs={12} className="mt-4"></Col>
                      <Col
                        xs={12}
                        className="mt-4 d-flex justify-content-center"
                      >
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
      )}
    </>
  );
};

export default ContactUSForm;
