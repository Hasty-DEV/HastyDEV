import { useState } from "react";
import { Formik, Field } from "formik";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import LoginImg from  "../../ui/assets/images/LoginImg.png";
import { useAuth } from "../../data/contexts/Auth/AuthProvider";
import * as L from "../../ui/styles/Login/Login.styles";
import Loader from "../../ui/components/Loader/Loader";
import { FormValues } from "../../data/@types/FormValues/FormValues.type";
import { toast, ToastContainer } from "react-toastify";
import { validationsLogin } from "../../data/services/Validation/Validationlogin.service";

const Login = () => {
  const { signin } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showVerifyAccountLink, setShowVerifyAccountLink] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async ({ username, password }: FormValues) => {
    try {
      setIsLoading(true);
      const response = await signin({ username, password });

      toast.success("Logado com Sucesso");

      let AppURL = import.meta.env.VITE_APP_URL;
      let baseURL = `${AppURL}/auth?id=${response.id}&token=${response.token}`;

      if (baseURL) {
        window.location.href = baseURL;
      }
    } catch (err: any) {
      toast.error(err.response.data.error);
      setShowVerifyAccountLink(true);  
    } finally {
      setIsLoading(false);
    }
  };

  const isPasswordVisible = showPassword ? "text" : "password";

  return (
    <L.LoginContainer>
      <Container fluid>
        <Row>
          <Col sm={7} xl={6}>
            <L.LoginForm className="text-center">
              {isLoading ? (
                <Loader />
              ) : (
                <Formik
                  initialValues={{
                    username: "",
                    password: "",
                  }}
                  onSubmit={handleLogin}
                  validationSchema={validationsLogin}
                >
                  {({ errors, touched, handleSubmit, isSubmitting }) => (
                    <>
                      <form onSubmit={handleSubmit}>
                        <h2 className="text-center">
                          Bem-Vindo de Volta à HastyDEV!
                        </h2>

                        <div className="form-group position-relative ">
                          <label htmlFor="username" className="d-block">
                            Username:
                          </label>
                          <Field type="text" id="username" name="username" />
                          <span>
                            {errors.username &&
                              touched.username &&
                              errors.username}
                          </span>
                        </div>

                        <div className="form-group position-relative">
                          <label htmlFor="password" className="d-block">
                            Senha:
                          </label>
                          <div className="password-input align-items-center position-relative ">
                            <Field
                              type={isPasswordVisible}
                              id="password"
                              name="password"
                            />
                            <FontAwesomeIcon
                              icon={showPassword ? faEyeSlash : faEye}
                              onClick={handleTogglePassword}
                              className="password-toggle-icon position-absolute "
                            />
                          </div>
                          <span>
                            {errors.password &&
                              touched.password &&
                              errors.password}
                          </span>
                        </div>
                        <div className="form-group position-relative">
                          <button type="submit" disabled={isSubmitting} className="w-100">
                            Login
                          </button>
                        </div>
                      </form>
                      <div className="sign_in">
                        <Link to="/Register">
                          Nao tem uma Conta? <span> Inscreva-se</span>
                        </Link>
                      </div>
                      <div className="forgot-password text-center">
                        <Link to="/ForgotPassword">Esqueceu a senha?</Link>
                      </div>
                      {showVerifyAccountLink && (  
                        <div className="forgot-password text-center">
                          <Link to="/CheckEmailNotVerified">Verificar Conta</Link>
                        </div>
                      )}
                    </>
                  )}
                </Formik>
              )}
            </L.LoginForm>
          </Col>
          <Col sm={5} xl={6}>
            <img src={LoginImg} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </L.LoginContainer>
  );
};

export default Login;
