import React, { useContext, useState } from 'react';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
} from 'react-social-login-buttons';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'; 
import LoginImg from '../../assets/images/LoginImg.png';
 
import * as L from './Login.styles';
import { AuthContext } from '../../Contexts/Auth/AuthContext';

interface FormValues {
  username: string;
  password: string;
}

const validationsLogin = yup.object().shape({
  username: yup.string().required('O Usuário é obrigatório'),
  password: yup
    .string()
    .min(6, 'A senha deve ter pelo menos 6 caracteres')
    .required('A senha é obrigatória'),
});

const Login: React.FC = () => {
  const { signin } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Obtenha o objeto history do React Router

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async ({ username, password }: FormValues) => {
    try {
      await signin(username, password);

      // response.data.token
      // console.log();

  
      navigate('/project');
    } catch (err: any) {
      alert(err.response.data.error);
    }
  };

  const isPasswordVisible = showPassword ? 'text' : 'password';

 

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <L.LoginForm>
              <Formik
                initialValues={{
                  username: '',
                  password: '',
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
                        {errors.password && touched.password && errors.password}
                      </div>

                      <div className="form-group">
                        <button type="submit" disabled={isSubmitting}>
                          Login
                        </button>
                      </div>
                    </form>

                    <div className="sign_in">
                      <Link to="/Register">Nao tem uma Conta? <a href="#"> Inscreva-se</a></Link>
                    </div>
                    <div className="forgot-password">
                      <a href="#">Esqueceu a senha?</a>
                    </div>
                    <div className="social-media">
                      <p>Ou faça login com:</p>
                      <div
                        style={{
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginLeft: '260px',
                        }}
                      >
                        <FacebookLoginButton
                          style={{ width: '360px', marginBottom: '20px' }}
                        >
                          <span>Entrar com o Facebook</span>
                        </FacebookLoginButton>
                        <GoogleLoginButton
                          style={{ width: '360px', marginBottom: '20px' }}
                        >
                          <span>Entrar com o Google</span>
                        </GoogleLoginButton>
                        <GithubLoginButton style={{ width: '360px' }}>
                          <span>Entrar com o Github</span>
                        </GithubLoginButton>
                      </div>
                    </div>
                  </>
                )}
              </Formik>
            </L.LoginForm>
          </Col>

          <Col style={{ position: 'relative' }}>
            <img
              src={LoginImg}
              alt=""
              style={{
                position: 'absolute',
                zIndex: '2',
                height: 'auto',
                width: '90%',
              }}
            />
            <div className="d-flex justify-content-end" style={{ zIndex: '1' }}>
              <L.rightDivSyled></L.rightDivSyled>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
