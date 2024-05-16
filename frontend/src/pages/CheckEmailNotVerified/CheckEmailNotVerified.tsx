import { useState } from "react";
import styled from "styled-components";
import { Formik, Field } from "formik";
import { ButtonPrimaryLongNoLink } from "../../ui/components/Buttons/Buttons";
import { api } from "../../data/services/api";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AllowEmailVerificationProps } from "../../data/@types/AllowEmailVerification/AllowEmailVerification.type";
import Loader from "../../ui/components/Loader/Loader";

const CheckEmailNotVerified =({ setAllowEmailVerification }: AllowEmailVerificationProps)=> {
    const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  
  const handleSendEmailVerification = async ({ email }: { email: string }) => {
    try {
      setLoading(true);
      const responses = await api.post("/sendEmailVerification", {
        email,
      });

      if (responses) {
        console.log("ok!");
      }

      setAllowEmailVerification(true);
loading
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Código de verificação enviado com sucesso",
        showConfirmButton: false,
        timer: 1500,
      });
     
      setTimeout(() => {
        navigate(
          `/emailVerification${email ? `?email=${encodeURIComponent(email)}` : ""
          }`
        );
      }, 2000); 
    
    } catch (error) {
      console.error("Error sending email verification:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Erro ao enviar email de verificação!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
 {loading ? <Loader /> : null}
    <CheckEmailNotVerifiedContainer  className="d-flex justify-content-center align-items-center flex-column">
     <div>
      <h2>Verifique seu e-mail</h2>
      <Formik
  initialValues={{
    email: "",
  }}
  onSubmit={(values: { email: string }) => handleSendEmailVerification(values)}
>
        {({ errors, touched, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Field type="email" placeholder="E-mail" name="email" />
            {errors.email && touched.email && <span>{errors.email}</span>}
            <ButtonPrimaryLongNoLink
              className="mt-3"
              type="submit"
              buttonText="Enviar Email de Verificação"
              disabled={isSubmitting}
            />
          </form>
        )}
        
      </Formik>
      </div>
    </CheckEmailNotVerifiedContainer>
    </>
  );
};

export default CheckEmailNotVerified;

const CheckEmailNotVerifiedContainer = styled.section`
  margin-top: 10%;
 

  span {
    margin-top: 5px;
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
    margin-top: 4%;
    text-align: center;
  }
`;
