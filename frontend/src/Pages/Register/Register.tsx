import { useState } from "react";
import { Formik, Field } from "formik";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Loader from "../../Ui/components/Loader/Loader";
import * as R from "../../Ui/styles/Register/Register.styles";
import { Container, Row, Col } from "react-bootstrap";
import RegisterImg from "../../Ui/assets/images/RegisterImg.png";
import { FormFetch } from "../../Data/Services/axios/config";
import { FormValues } from "../../Data/@types/FormValues/FormValues.type";

const validationsRegister = yup.object().shape({
  first_name: yup.string().required("O campo de nome é obrigatório"),
  last_name: yup.string().required("O campo de sobrenome é obrigatório"),
  username: yup
    .string()
    .required("O campo de nome de usuário é obrigatório")
    .min(5, "O username deve ter pelo menos 5 caracteres"),
  email: yup.string().email("Email inválido").required("O email é obrigatório"),
  password: yup
    .string()
    .required("A senha é obrigatória")
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .matches(/[a-z]/, "A senha deve conter pelo menos uma letra minúscula")
    .matches(/[A-Z]/, "A senha deve conter pelo menos uma letra maiúscula")
    .matches(/[0-9]/, "A senha deve conter pelo menos um número")
    .matches(
      /[@$!¨%*#?&]/,
      "A senha deve conter pelo menos um caractere especial"
    ),
  confirmPassword: yup
    .string()
    .required("A confirmação da senha é obrigatória")
    .oneOf([yup.ref("password")], "As senhas não coincidem"),
});

interface RegisterProps {
  setAllowEmailVerification: React.Dispatch<React.SetStateAction<boolean>>;
}

const Register: React.FC<RegisterProps> = ({ setAllowEmailVerification }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [registrationInProgress, setRegistrationInProgress] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const navigate = useNavigate();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleTogglePassword2 = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = async ({
    first_name,
    last_name,
    username,
    email,
    password,
    confirmPassword,
  }: FormValues) => {
    try {
      setRegistrationInProgress(true);
      const response = await FormFetch.post("/register", {
        first_name,
        last_name,
        username,
        email,
        password,
        confirmPassword,
      });
      console.log(response.data);

      const responses = await FormFetch.post("/sendEmailVerification", {
        email,
      });
      console.log(responses.data);
      swal.fire({
        position: "center",
        icon: "success",
        title: "Seu cadastro foi realizado com sucesso",
        showConfirmButton: false,
        timer: 1500,
      });
      setRegistrationSuccess(true);
      setAllowEmailVerification(true);
      navigate(
        `/emailVerification${
          email ? `?email=${encodeURIComponent(email)}` : ""
        }`
      );
    } catch (err: any) {
      setRegistrationInProgress(false);
      toast.error(err.response.data.error);
      alert(err.response.data.errors[0].msg);
      alert(err.response.data.error);
    }
  };

  return (
    <R.RegisterContainer>
      <Container>
        <Row>
          <Col sm={12} xl={6}>
            <R.RegisterForm>
              {registrationInProgress ? (
                <Loader />
              ) : registrationSuccess ? (
                <>
                  <h2>Cadastro realizado com sucesso!</h2>
                  <div className="sign_in">
                    <Link to="/login">
                      <span>Já Tem uma Conta? Login</span>
                    </Link>
                  </div>
                </>
              ) : (
                <Formik
                  initialValues={{
                    username: "",
                    password: "",
                    first_name: "",
                    last_name: "",
                    email: "",
                    confirmPassword: "",
                  }}
                  onSubmit={handleRegister}
                  validationSchema={validationsRegister}
                >
                  {({ errors, touched, handleSubmit, isSubmitting }) => (
                    <>
                      <form onSubmit={handleSubmit}>
                        <h2>Inscreva-se na HastyDEV!</h2>
                        <div className="form-group mb-5">
                          <label htmlFor="first_name">Nome:</label>
                          <Field
                            type="text"
                            id="first_name"
                            name="first_name"
                          />
                          <span>
                            {errors.first_name &&
                              touched.first_name &&
                              errors.first_name}
                          </span>
                        </div>
                        <div className="form-group mb-5">
                          <label htmlFor="last_name">Sobrenome:</label>
                          <Field type="text" id="last_name" name="last_name" />
                          <span>
                            {errors.last_name &&
                              touched.last_name &&
                              errors.last_name}
                          </span>
                        </div>
                        <div className="form-group mb-5">
                          <label htmlFor="username">Usuário:</label>
                          <Field type="text" id="username" name="username" />
                          <span>
                            {errors.username &&
                              touched.username &&
                              errors.username}
                          </span>
                        </div>
                        <div className="form-group mb-5">
                          <label htmlFor="email">E-mail:</label>
                          <Field type="email" id="email" name="email" />
                          <span>
                            {errors.email && touched.email && errors.email}
                          </span>
                        </div>
                        <div className="form-group mb-5">
                          <label htmlFor="password">Senha:</label>
                          <div className="password-input">
                            <Field
                              type={showPassword ? "text" : "password"}
                              id="password"
                              name="password"
                            />
                            <FontAwesomeIcon
                              icon={showPassword ? faEyeSlash : faEye}
                              onClick={handleTogglePassword}
                              className="password-toggle-icon"
                            />
                          </div>
                          <span>
                            {errors.password &&
                              touched.password &&
                              errors.password}
                          </span>
                        </div>
                        <div className="form-group mb-5">
                          <label htmlFor="confirmPassword">
                            Confirme Sua Senha:
                          </label>
                          <div className="password-input">
                            <Field
                              type={showPassword ? "text" : "password"}
                              id="confirmPassword"
                              name="confirmPassword"
                            />
                            <FontAwesomeIcon
                              icon={showPassword ? faEyeSlash : faEye}
                              onClick={handleTogglePassword2}
                              className="password-toggle-icon"
                            />
                          </div>
                          <span>
                            {errors.confirmPassword &&
                              touched.confirmPassword &&
                              errors.confirmPassword}
                          </span>
                        </div>

                        <div className="form-group">
                          <button type="submit" disabled={isSubmitting}>
                            Inscreva-se
                          </button>
                        </div>
                      </form>
                    </>
                  )}
                </Formik>
              )}
            </R.RegisterForm>
          </Col>
          <Col sm={12} xl={6}>
            <img src={RegisterImg} alt="" className="img-fluid" />
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </R.RegisterContainer>
  );
};

export default Register;
