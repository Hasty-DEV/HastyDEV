import { useState } from "react";
import { Formik, Field } from "formik";
import * as yup from "yup";
import { Link } from "react-router-dom";
import {
  FacebookLoginButton,
  GithubLoginButton,
} from "react-social-login-buttons";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import LoginImg from "../../Ui/assets/images/LoginImg.png";
import { useAuth } from "../../Data/Contexts/Auth/AuthProvider";
import * as L from "../../Ui/styles/Login/Login.styles";
import Loader from "../../Ui/components/Loader/Loader";
import { FormValues } from "../../Data/@types/FormValues/FormValues.type";
import { toast, ToastContainer } from "react-toastify";
// import { GoogleLogin } from "react-google-login";

const nodeEnv = import.meta.env.VITE_NODE_ENV;

const validationsLogin = yup.object().shape({
  username: yup.string().required("O Usuário é obrigatório"),
  password: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("A senha é obrigatória"),
});

const Login: React.FC = () => {
  const { signin } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async ({ username, password }: FormValues) => {
    try {
      setIsLoading(true);
      const response = await signin({ username, password });

      toast.success("Logado com Sucesso");

      let baseURL;

      if (nodeEnv === "development") {
        baseURL = `http://localhost:5174/auth?id=${response.id}&token=${response.token}`;
      } else if (nodeEnv === "production") {
        baseURL = `https://app-hastydev.vercel.app/auth?id=${response.id}&token=${response.token}`;;
      }

     if (baseURL) {
       window.location.href = baseURL;
     }

    } catch (err: any) {
      toast.error(err.response.data.error);
    } finally {
      setIsLoading(false);
    }
  };

  const isPasswordVisible = showPassword ? "text" : "password";

  const handleEmCostrução = () => {
    alert("Este botão está em construção.");
  };

  //   const onSucess = (res: any) => {
  //       console.log("Logado com Sucesso, Usuário: ", res.profileObj);
  //   }

  //   const onFailure = (res: any) => {
  //     console.log("Erro ao fazer o Login", res);
  // }

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <L.LoginForm>
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
                        <h2>Bem-Vindo de Volta à HastyDEV!</h2>

                        <div className="form-group">
                          <label htmlFor="username">Username:</label>
                          <Field type="text" id="username" name="username" />
                          {errors.username &&
                            touched.username &&
                            errors.username}
                        </div>

                        <div className="form-group">
                          <label htmlFor="password">Senha:</label>
                          <div className="password-input">
                            <Field
                              type={isPasswordVisible}
                              id="password"
                              name="password"
                            />
                            <FontAwesomeIcon
                              icon={showPassword ? faEyeSlash : faEye}
                              onClick={handleTogglePassword}
                              className="password-toggle-icon"
                            />
                          </div>
                          {errors.password &&
                            touched.password &&
                            errors.password}
                        </div>

                        <div className="form-group">
                          <button type="submit" disabled={isSubmitting}>
                            Login
                          </button>
                        </div>
                      </form>
                      <div className="sign_in">
                        <Link to="/Register">
                          Nao tem uma Conta? <a href="#"> Inscreva-se</a>
                        </Link>
                      </div>
                      <div className="forgot-password">
                        <a href="#">Esqueceu a senha?</a>
                      </div>

                      <div className="social-media">
                        <div className="d-flex flex-column align-items-center justify-content-center">
                          <FacebookLoginButton
                            style={{ width: "100%", marginBottom: "20px" }}
                            onClick={handleEmCostrução}
                          >
                            <span>Entrar com o Facebook</span>
                          </FacebookLoginButton>

                          {/* <GoogleLogin
                           clientId="578853434334-q3am40ksm1i65m546g5mtuuij3hbevne.apps.googleusercontent.com" 
                           buttonText="Entrar com o Google"
                           onSuccess={onSucess}
                           onFailure={onFailure}
                           cookiePolicy={'single_host_origin'}
                           isSignedIn={true}
                           />
                           */}
                          <GithubLoginButton
                            style={{ width: "100%" }}
                            onClick={handleEmCostrução}
                          >
                            <span>Entrar com o Github</span>
                          </GithubLoginButton>
                        </div>
                      </div>
                    </>
                  )}
                </Formik>
              )}
            </L.LoginForm>
          </Col>
          <Col style={{ position: "relative" }}>
            <img
              src={LoginImg}
              alt=""
              style={{
                position: "absolute",
                zIndex: "2",
                height: "auto",
                width: "90%",
              }}
            />
            <div className="d-flex justify-content-end" style={{ zIndex: "1" }}>
              <L.rightDivSyled></L.rightDivSyled>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </>
  );
};

export default Login;
