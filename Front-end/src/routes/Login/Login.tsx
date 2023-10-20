import * as L from "./Login.styles";
import * as yup from "yup";
import { Container, Row, Col } from "react-bootstrap";
import LoginImg from "../../assets/images/LoginImg.png";
import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
} from "react-social-login-buttons";
import { FormFetch } from "../../axios/config";
import { Formik, Field } from "formik";
import { Link } from "react-router-dom";

interface FormValues {
  username: string;
  password: string;
}

const validationsLogin = yup.object().shape({
  username: yup.string().required("O Usuário é obrigatório"),
  password: yup
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
    .required("A senha é obrigatória"),
});

const Login: React.FC = () => {
  const handleLogin = async ({ username, password }: FormValues) => {
    try {
      const response = await FormFetch.post("/login", { username, password });

      console.log(response.data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      alert(err.response.data.error);
    }
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <L.LoginForm>
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
                        {errors.username && touched.username && errors.username}
                      </div>

                      <div className="form-group">
                        <label htmlFor="password">Senha:</label>
                        <Field type="password" id="password" name="password" />
                        {errors.password && touched.password && errors.password}
                      </div>

                      <div className="form-group">
                        <button type="submit" disabled={isSubmitting}>
                          Login
                        </button>
                      </div>
                    </form>
                    
                    <div className="sign_in">
                    <Link to ="/Register">
                      Nao tem uma Conta?<a href="#"> Inscreva-se</a>
                      </Link>
                    </div>
                    <div className="forgot-password">
                      <a href="#">Esqueceu a senha?</a>
                    </div>
                    <div className="social-media">
                      <p>Ou faça login com:</p>
                      <div
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          marginLeft: "260px",
                        }}
                      >
                        <FacebookLoginButton
                          style={{ width: "360px", marginBottom: "20px" }}
                        >
                          <span>Entrar com o Facebook</span>
                        </FacebookLoginButton>
                        <GoogleLoginButton
                          style={{ width: "360px", marginBottom: "20px" }}
                        >
                          <span>Entrar com o Google</span>
                        </GoogleLoginButton>
                        <GithubLoginButton style={{ width: "360px" }}>
                          <span>Entrar com o Github</span>
                        </GithubLoginButton>
                      </div>
                    </div>
                  </>
                )}
              </Formik>
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
    </>
  );
};

export default Login;
