import * as yup from "yup";
import { useState } from "react";
import styled from "styled-components";
import { api } from "../../Data/Services/api";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../Ui/components/Loader/Loader";
import { Field, Formik } from "formik";
import { ButtonPrimaryLongNoLink } from "../../Ui/components/Buttons/Buttons";
import { useNavigate } from "react-router-dom";

export type ForgotPasswordValues = {
  email: string;
  resetCode?: string;
  newPassword?: string;
};

const validationSendPassCode = yup.object().shape({
  email: yup.string().email("Email inválido").required("O email é obrigatório"),
});

const validationNewPassword = yup.object().shape({
  email: yup.string().email("Email inválido").required("O email é obrigatório"),
  resetCode: yup.string().required("O código é obrigatório"),
  newPassword: yup.string().required("A senha é obrigatória"),
});

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [sendPass, setSendPass] = useState(true);
  const [confirmCode, setConfirmCode] = useState(false);
  const navigate = useNavigate();

  const handleSendPassCode = async ({ email }: ForgotPasswordValues) => {
    try {
      setLoading(true);
      await api.post("/sendResetPassVerification", {
        email,
      });
      toast.success("E-mail enviado com sucesso");
      setSendPass(false);
      setConfirmCode(true);
    } catch (err) {
      toast.error("Erro ao enviar e-mail");
    } finally {
      setLoading(false);
    }
  };

  const handleNewPass = async ({
    email,
    resetCode,
    newPassword,
  }: ForgotPasswordValues) => {
    try {
      setLoading(true);
      await api.post("/resetPassCodeVerification", {
        email,
        resetCode,
        newPassword,
      });
      toast.success("Senha Trocada com sucesso");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      toast.error("Erro ao Trocar Senha: " + err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? <Loader /> : null}
      <ForgotPasswordContainer className="d-flex justify-content-center align-items-center flex-column">
        {sendPass && (
          <div>
            <h2>Esqueceu a Senha?</h2>
            <Formik
              initialValues={{
                email: "",
              }}
              onSubmit={handleSendPassCode}
              validationSchema={validationSendPassCode}
            >
              {({ errors, touched, handleSubmit, isSubmitting }) => (
                <form onSubmit={handleSubmit}>
                  <Field type="email" placeholder="E-mail" name="email" />
                  {errors.email && touched.email && <span>{errors.email}</span>}

                  <ButtonPrimaryLongNoLink
                    className="mt-3"
                    type="submit"
                    buttonText="Entre em Contato"
                    disabled={isSubmitting}
                  />
                </form>
              )}
            </Formik>
          </div>
        )}
        {confirmCode && (
          <div>
            <h2>Insira o Código e Mude a Senha</h2>
            <Formik
              initialValues={{
                email: "",
                resetCode: "",
                newPassword: "",
              }}
              onSubmit={handleNewPass}
              validationSchema={validationNewPassword}
            >
              {({ errors, touched, handleSubmit, isSubmitting }) => (
                <form onSubmit={handleSubmit} className="d-flex flex-column">
                  <Field
                    type="email"
                    placeholder="Confirme seu E-mail"
                    name="email"
                  />
                  {errors.email && touched.email && <span>{errors.email}</span>}
                  <Field
                    type="text"
                    placeholder="Codigo de Verificação"
                    name="resetCode"
                  />
                  {errors.resetCode && touched.resetCode && (
                    <span>{errors.resetCode}</span>
                  )}
                  <Field
                    type="text"
                    placeholder="Nova Senha"
                    name="newPassword"
                  />
                  {errors.newPassword && touched.newPassword && (
                    <span>{errors.newPassword}</span>
                  )}

                  <div className="button">
                  <ButtonPrimaryLongNoLink
                  
                    className="mt-3"
                    type="submit"
                    buttonText="Entre em Contato"
                    disabled={isSubmitting}
                    
                  />
                  </div>
                </form>
              )}
            </Formik>
          </div>
        )}
      </ForgotPasswordContainer>
      <ToastContainer />
    </>
  );
};

export default ForgotPassword;

const ForgotPasswordContainer = styled.section`
  margin-top: 10%;

 span{

  margin-top:5px;
  display: flex;
  justify-content: center;  

 }

  input {
    width: 100%;
    padding: 10px;
    border-radius: 50px;
    border: 2px solid ${(props) => props.theme.colors.secondary};
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    margin-top:4%;
    text-align: center;

  }

  .button {
    display: flex;
    justify-content: center;  
  }
 
`;
